"use strict";

// Copies the `src` array into the `dst` array at a specified `offset`
function copyInPlace(dst, offset, src) {
	for (let i = 0; i < src.length; i++) {
		dst[offset+i] = src[i];
	}
}

// Returns true if the edit name uses valid characters and is no greater than 8 characters long. Otherwise, returns false
//
// TODO: There are several other characters that are acceptable here; I extracted the font image so I can add them at some point. For now, these are fine.
function checkEditName(name) {
	if (name.match(/^[A-Z0-9 \!\@\#\$\%\&\-\_\=\+\(\)\\\.]{0,8}$/) === null) {
		return false;
	}
	return true;
}

// Check an individual row for errors. If the row is malformed, "fix" it so that it can be processed.
function checkRow(row, measureNum, editId) {
	if (row.includes('M')) {
		addError(editId, FIELD_NOTES, `Chart has mines in measure ${measureNum}`, PREFIX_WARN);
		row = row.replaceAll("M", "0");
	}
	if (row.includes('4')) {
		addError(editId, FIELD_NOTES, `Chart has rolls in measure ${measureNum}`, PREFIX_WARN);
		row = row.replaceAll("4", "2");  // Rolls -> Freezes
	}
	if (row.includes('L')) {
		addError(editId, FIELD_NOTES, `Chart has lifts in measure ${measureNum}`, PREFIX_WARN);
		row = row.replaceAll("L", "0");
	}
	if (row.includes('F')) {
		addError(editId, FIELD_NOTES, `Chart has fakes in measure ${measureNum}`, PREFIX_WARN);
		row = row.replaceAll("F", "0");
	}
	if (row.includes('K')) {
		addError(editId, FIELD_NOTES, `Chart has keysounds in measure ${measureNum}`, PREFIX_WARN);
		row = row.replaceAll("K", "0");
	}
	if (row.match(/[^0123]/)) {
		addError(editId, FIELD_NOTES, `Chart has invalid characters in measure ${measureNum}`, PREFIX_WARN);
		row = row.replaceAll(/[^0123]/g, "0");		
	}
	let noteStartCount = (row.match(/[12]/g) || []).length;
	// Just let the engine replace 3+ note rows with D/U or P1R/P2L, unless LDUR is set
	// If LDUR is set, blank the row, since 0xF has a special meaning already
	// Note that arrows being moved around can cause unexpected problems with freezes
	if (noteStartCount > 2) {
		addError(editId, FIELD_NOTES, `Chart has more than 2 notes starting at once in measure ${measureNum}`, PREFIX_WARN);
	}
	if (row.match(/^[12]{4}/)) {
		row = "0".repeat(row.width);
	}
	if (noteStartCount === 2 && row.length === 8) {
		const bannedJumps = ["10001000", "10000100", "10000010", "10000001", "01000100", "01000010", "01000001", "00100100", "00100010", "00100001", "00010001"];
		// Just let the engine replace it with P1R/P2L
		// Note that arrows being moved around can cause unexpected problems with freezes
		if (bannedJumps.includes(row.replaceAll("2", "1").replaceAll("3", "0"))) {
			addError(editId, FIELD_NOTES, `Chart has a banned stretch jump in measure ${measureNum}`, PREFIX_WARN);
		}
	}
	return row;
}

// Convert an individual measure into an array of four beats, with each beat being an array of 3 or 4 rows (depending on whether that beat contains 12ths or 16ths, respectively)
//
// Example output:
// [
//   ["1000", "0100", "0010", "0001"],
//   ["2000", "0000", "0000", "0000"],
//   ["3001", "0100", "1000"],
//   ["0100", "0001", "1001"]
// ]
function convertMeasure(measure, measureNum, editId) {
	// Remove comments and whitespace from the measure
	let rows = [];
	let lines = measure.split(/\r?\n/);
	lines.forEach((line) => {
		let j = line.indexOf("//");
		if (j !== -1) {
			line = line.substring(0, j);
		}
		line = line.trim();
		if (line !== "") {
			rows.push(line);
		}
	});

	if (rows.length === 0 || 192 % rows.length !== 0) {
		addError(editId, FIELD_NOTES, `Chart has ${rows.length} rows at measure ${measureNum}`, PREFIX_ERROR);
		return null;
	}

	let width = rows[0].length;
	rows.forEach((row) => {
		if (row.length !== width) {
			addError(editId, FIELD_NOTES, `Chart has differently-sized rows at measure ${measureNum}`, PREFIX_ERROR);
			return null;
		}
	});
	const blank = "0".repeat(width);

	// The 192nd-note positions of 12ths/16ths in a beat
	const pos12 = [0, 16, 32];
	const pos16 = [0, 12, 24, 36];

	// Normalize each row within the measure to 192nd beat positions for easier processing
	// Only track non-empty rows (after any potential fixing)
	let newRows = [];
	for (let i = 0; i < rows.length; i++) {
		let pos = i * 192 / rows.length;
		let newRow = checkRow(rows[i], measureNum, editId);
		if (newRow === blank) {
			continue;
		}
		// If there are any rows with note divisions that cannot be used in the edit (e.g. 24ths, 32nds, etc),
		// leave a warning and just skip over them.
		// Note that this can cause unexpected effects if the end of a freeze is on one of these skipped rows
		if (!pos12.includes(pos % 48) && !pos16.includes(pos % 48)) {
			addError(editId, FIELD_NOTES, `Chart has note divisions beyond 12ths/16ths in measure ${measureNum}`, PREFIX_WARN);
		} else {
			newRows[pos] = newRow;
		}
	}

	// For each beat, check if it uses 12ths or 16ths. If it uses both, some notes will be skipped in that beat.
	// Note that this can cause unexpected effects if the end of a freeze is on one of these skipped rows
	let beats = [];
	for (let beatStart = 0; beatStart < 192; beatStart += 48) {
		let mustBe12 = false;
		let mustBe16 = false;
		pos12.forEach((pos) => {
			if (pos > 0 && newRows[beatStart + pos]) {
				mustBe12 = true;
			}
		});
		pos16.forEach((pos) => {
			if (pos > 0 && newRows[beatStart + pos]) {
				mustBe16 = true;
			}
		});
		if (mustBe12 && mustBe16) {
			addError(editId, FIELD_NOTES, `Chart has 12ths and 16ths in the same beat in measure ${measureNum}`, PREFIX_WARN);
		}
		let beat = [];
		if (mustBe12 && !mustBe16) {
			pos12.forEach((pos) => {
				beat.push((newRows[beatStart + pos]) || blank);
			});
		} else {
			pos16.forEach((pos) => {
				beat.push((newRows[beatStart + pos]) || blank);
			});
		}
		beats.push(beat);
	}

	return beats;
}

// Construct the buffer containing arrow/freeze data for an edit, stored as a Uint8Array
//
// Format-specific assumptions: No metadata will be used, and both the arrow and freeze sections will occupy 0x1000 bytes, using all 0x2000 in total
// Read the other comments for more information regarding the file format
function convertChart(edit) {
	// Each row of arrows or freezes is represented by a byte, where each bit represents a column.
	// On singles: 1 = L, 2 = D, 4 = U, 8 = R
	// On doubles: 1 = P1L, 2 = P1D, 4 = P1U, 8 = P1R, 16 = P2L, 32 = P2D, 64 = P2U, 128 = P2R
	//
	// Each beat is represented by 4 bytes:
	// If the beat contains 16th notes, each byte represents one of the four 16th notes
	// If the beat contains 12th notes, the first byte is 0xFF, and the next three represent the three 12th notes
	// 
	// Each edit begins at a specific beat in the song, which varies from song to song
	// Each edit also ends at a specific position in the song, which sometimes can be in the middle of a beat
	//
	// For the arrow section, each row simply describes where the arrows are placed, including the starts of freeze arrows
	// For the freeze section, each row describes whether freezes are active in that row, including the rows that begin and end the freezes
	//
	// Because of the way the parser is coded, you cannot begin a freeze one row after another one ended in the same column
	// Strangely, you can have arrows on top of freezes and freezes on top of each other. Two or more overlapping freezes will always end at the same time
	// Because this is allowed, the converter also allows it, although it technically requires a malformed SM/SSC file (example: 2, 2, 3 in the same column)
	//
	// TODO: Verify that this is correct

	let buf = new Uint8Array(0x2000);
	let bufIndex = 0;
	let hasErrors = false;

	let measures = [];
	edit.notes.split(",").forEach((m) => {
		measures.push(m.trim());
	});

	// Given that we allocate 0x1000 bytes for the arrow and freeze sections, there is only room for 256 measures in the edit.
	// Charts are always a little bit shorter after removing the parts before introOffset and after outroOffset,
	// but even then, no DDR X2 chart would have this nearly many measures, so it is safe to perform this check up top.
	if (measures.length > 256) {
		addError(edit.editId, FIELD_SONGID, "Chart has over 1024 measures", PREFIX_ERROR);
		hasErrors = true;
		// We can also just return here, since this is a likely sign that they submitted the wrong chart
		return null;
	}

	let introOffset = 0;
	let outroOffset = 0x10000000;  // A very big number
	if (!SONG_START[edit.songId]) {
		addError(edit.editId, FIELD_SONGID, "Invalid song ID (does not have an associated chart)", PREFIX_ERROR);
		hasErrors = true;
	} else {
		introOffset = SONG_START[edit.songId];
		outroOffset = SONG_END[edit.songId];
	}

	// Make sure there are no steps before the offset at which the chart starts
	let introEnd = Math.floor((introOffset + 0xFFF) / 0x1000);
	let out = false;
	for (let measureNum = 0; measureNum < introEnd && measureNum < measures.length; measureNum++) {
		let beats = convertMeasure(measures[measureNum], measureNum, edit.editId);
		if (beats !== null) {
			for (let beatNum = 0; beatNum < beats.length; beatNum++) {
				let beat = beats[beatNum];
				for (let rowNum = 0; rowNum < beat.length; rowNum++) {
					let row = beat[rowNum];
					let pos = (0x1000 * measureNum) + (0x400 * beatNum) + (0x400 * rowNum / beat.length);
					if (pos >= introOffset) continue;
					if (row !== "0".repeat(row.length)) {
						let n = introOffset / 0x1000;
						addError(edit.editId, FIELD_NOTES, `The first ${n} measures of the chart should be empty`, PREFIX_WARN);
						out = true;
						break;
					}
				}
				if (out) break;
			}
		} else {
			hasErrors = true;
			out = true;
			break;
		}
		if (out) break;
	}
	// Make sure there are no steps after the offset at which the chart ends
	//
	// NOTE: Technically, you *can* have chart elements after the end position:
	// If there are freezes that have not ended by the end position, then the freeze caps will go onto the next row
	// This means you can finish freezes one 16th** after the row where you can place arrows.
	//
	// ** TODO: possibly one 12th in certain circumstances? (need to test)
	let outroStart = Math.floor(outroOffset / 0x1000);
	out = false;
	for (let measureNum = outroStart; measureNum < measures.length; measureNum++) {
		let beats = convertMeasure(measures[measureNum], measureNum, edit.editId);
		if (beats !== null) {
			for (let beatNum = 0; beatNum < beats.length; beatNum++) {
				let beat = beats[beatNum];
				for (let rowNum = 0; rowNum < beat.length; rowNum++) {
					let row = beat[rowNum];
					let pos = (0x1000 * measureNum) + (0x400 * beatNum) + (0x400 * rowNum / beat.length);
					if (pos <= outroOffset) continue;
					if (row !== "0".repeat(row.length)) {
						// Just warn here; freezes will automatically end
						let n = outroOffset / 0x1000;
						addError(edit.editId, FIELD_NOTES, `Chart contains elements after ${n} measures`, PREFIX_WARN);
						out = true;
						break;
					}
				}
				if (out) break;
			}
		} else {
			hasErrors = true;
			out = true;
			break;
		}
		if (out) break;
	}

	let width = 0;

	let lastRow = "0".repeat(8);
	let freezeOn = {};
	for (let i = 0; i < 8; i++) {
		freezeOn[i] = false;
	}
	for (let measureNum = Math.floor(introOffset / 0x1000); measureNum < measures.length && measureNum <= Math.floor(outroOffset / 0x1000); measureNum++) {
		let beats = convertMeasure(measures[measureNum], measureNum, edit.editId);
		if (beats === null) {
			hasErrors = true;
			lastRow = "0".repeat(width);
			continue;
		}
		// Make sure the width of rows within this measure is consistent with the rest of the chart.
		// convertMeasure ensures that the width is consistent within an individual measure,
		// so we only need to check the first row of the converted measure.
		if (width === 0) {
			width = beats[0][0].length;
		}
		if (width !== beats[0][0].length) {
			addError(edit.editId, FIELD_NOTES, `Chart has differently sized rows at measure ${measureNum}`, PREFIX_ERROR);
			hasErrors = true;
			return null;  // Bail out entirely because the SM file is malformed
		}
		for (let beatNum = 0; beatNum < beats.length; beatNum++) {
			let beat = beats[beatNum];
			// Edits *must* start on a beat
			let pos = (0x1000 * measureNum) + (0x400 * beatNum);
			if (pos < introOffset) {
				continue;
			}
			if (beat.length === 3) {
				buf[bufIndex] = 0xF;
				buf[bufIndex + 0x1000] = 0xF;
				bufIndex++;
			}
			for (let rowNum = 0; rowNum < beat.length; rowNum++) {
				pos = (0x1000 * measureNum) + (0x400 * beatNum) + (0x400 * rowNum / beat.length);
				if (pos > outroOffset) {
					continue;
				}
				let arrow = 0;
				let freeze = 0;
				let row = beat[rowNum];
				for (let i = 0; i < row.length; i++) {
					if ("12".includes(row[i])) {
						arrow |= (1 << i);
					}
					if (row[i] === "2") {
						freezeOn[i] = true;
					}
					if (freezeOn[i]) {
						freeze |= (1 << i);
					}
					if (row[i] === "3") {
						freezeOn[i] = false;
					}
					if (row[i] === "2" && lastRow[i] === "3") {
						addError(edit.editId, FIELD_NOTES, `Chart has a freeze ending immediately before another freeze begins in measure ${measureNum}`, PREFIX_WARN);
					}
				}
				buf[bufIndex] = arrow;
				buf[bufIndex + 0x1000] = freeze;
				bufIndex++;
				lastRow = row;
			}
		}
	}

	if (hasErrors) {
		return null;
	}
	return buf;
}

// Construct the buffer containing the data for an individual edit in the edit group (including the edit header), stored as a Uint8Array
function createEditBuf(edit) {
	// Edit format:
	//
	// 0x00-0x01:   ?
	// 0x02-0x09:   char   Name[8];       // The name of the chart. Use all 8 characters (pad right with spaces). Accepts A-Z, 0-9, space, and various special characters
	// 0x0A-0x17:   ?
	// 0x18-0x1B:   int    FreezeOffset;  // Start reading the freeze buffer X bytes from the offset of *this field*
	// 0x1C:        uchar  StepsType;     // 0 = Singles, 2 = Doubles
	// 0x1D:        ? (expected to be 3)
	// 0x1E:        ? (expected to be 1)
	// 0x1F:        ? (expected to be 0)
	// 0x20-0x21:   ushort SongId;
	// 0x22:        uchar  Difficulty;    // Difficulty is stored in the *high* nibble (0 = Beginner, 1 = Basic, 2 = Hard, 3 = Expert, 4 = Challenge)
	// 0x23:        uchar  Flags;         // 1 = HasFreezes, 2 = HasMetadata
	// 0x24:        uchar  Comments;      // Each nibble represents a message to display beside the edit (see main JS file for the messages)
	// 0x25:        uchar  Meter;         // Meter of the chart (0-20)
	// 0x26-0x27:   ?
	// 0x28-0x2027: char   chart[0x2000]; // Put any data here representing the arrows for the edit (and freezes/metadata, if applicable)
	// 
	// TODO: Verify that this is correct

	let buf = new Uint8Array(0x2028);

	if (!checkEditName(edit.name)) {
		addError(edit.editId, FIELD_EDITNAME, "Invalid edit name", PREFIX_WARN);
	}

	for (let i = 0; i < edit.name.length && i < 8; i++) {
		buf[2 + i] = edit.name.charCodeAt(i);
	}
	for (let i = edit.name.length; i < 8; i++) {
		buf[2 + i] = ' '.charCodeAt(0);
	}

	buf[0x18] = 0x10;  // FreezeOffset == 0x00001010: We will always use the legal maximum of 0x1000 bytes for arrows and 0x1000 for freezes
	buf[0x19] = 0x10;
	buf[0x1A] = 0;
	buf[0x1B] = 0;
	buf[0x1C] = edit.stepsType;
	buf[0x1D] = 3;
	buf[0x1E] = 1;
	buf[0x1F] = 0;
	buf[0x20] = edit.songId & 0xFF;
	buf[0x21] = edit.songId >> 8;
	buf[0x22] = edit.difficulty << 4;
	buf[0x23] = 1;  // We always use freezes and never use metadata
	buf[0x24] = (edit.commentA + edit.commentB << 4);
	buf[0x25] = edit.meter;

	let chart = convertChart(edit)
	if (chart === null) {
		return null;
	}
	copyInPlace(buf, 0x28, chart);
	return buf;
}

let KEYS = [
	[214, 61, 78, 198, 35, 107, 91, 241, 120, 6, 151, 42, 146, 218, 24, 163, 232, 177, 246, 12, 5, 98, 124, 131, 58,  74, 132, 179, 47, 251, 182, 65],  // 0 = JP, A
	[214, 61, 78,  35, 35, 107, 91, 241, 120, 6, 151, 42, 146, 218, 24, 163, 232, 177, 246, 12, 5, 98, 124, 131, 58, 147, 132, 179, 47, 251, 182, 65],  // 1 = US
	[214, 61, 78, 108, 35, 107, 91, 241, 120, 6, 151, 42, 146, 218, 24, 163, 232, 177, 246, 12, 5, 98, 124, 131, 58,  13, 132, 179, 47, 251, 182, 65],  // 2 = EU
	[214, 61, 78, 198, 35, 107, 91, 241, 120, 6, 151, 42, 146, 218, 24, 163, 232, 177, 246, 12, 5, 98, 124, 131, 58,  74, 132, 179, 47, 251, 182, 65]   // 3 = JP, A
];

// Construct the buffer containing the data for the entire edit group, stored as a Uint8Array
//
// shouldEncrypt: Can set to false for debugging; doing so skips AES encryption and the concatenation of the MD5 checksum
function createEditGroupBuf(editGroup, shouldEncrypt = true) {
	// Edit Group Format:
	//
	// 0x00-0x03:    int  Magic;       // Expected to be 0x00000010
	// 0x04:         char Region;      // 0 = Japan, 1 = US, 2 = EU, 3 = Asia
	// 0x05:         char Web;         // Must be 1 for US/EU regions; otherwise ignored
	// 0x06-0x11:    ?
	// 0x12-0x2F:    char Enabled[30]; // Set to 1 if the corresponding edit slot should be loaded; otherwise set to 0
	// 0x30-0x3C4DF: EDIT Edits[30];   // See above
	//
	// TODO: Go back and verify that this is correct

	let buf = new Uint8Array(0x3c4e0);
	let hasErrors = false;

	buf[0] = 0x10;
	buf[4] = editGroup.region;
	buf[5] = (editGroup.region === 1 || editGroup.region === 2) ? 1 : 0;
	for (let i = 0; i < editGroup.edits.length; i++) {
		buf[0x12 + i] = 1;
	}

	for (let i = 0; i < editGroup.edits.length; i++) {
		let editBuf = createEditBuf(editGroup.edits[i]);
		if (editBuf === null) {
			hasErrors = true;
		}
		if (!hasErrors) {
			copyInPlace(buf, 0x30 + 0x2028 * i, editBuf);
		}
	}
	if (hasErrors) {
		return null;
	}

	if (!shouldEncrypt) {
		return buf;
	}

	// The encrypted file format is: IV + EncryptedData + MD5(IV + EncryptedData)
	let iv = Array(16).fill(0).map((_,i) => "x0rbl.com/edits!".charCodeAt(i));
	let aes = new aesjs.ModeOfOperation.cbc(KEYS[editGroup.region], iv);
	let encryptedData = aes.encrypt(buf);

	let file = new Uint8Array(0x3c500);
	copyInPlace(file, 0, iv);
	copyInPlace(file, 16, encryptedData);
	let hash = md5.digest(file.slice(0, 0x3c4f0));
	copyInPlace(file, 0x3c4f0, hash);
	return file;
}
