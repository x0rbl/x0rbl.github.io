"use strict";

let ERRORS = [];
function addError(editId, field, err, prefix) { ERRORS.push(err); }
function clearErrors() { ERRORS.length = 0; }
function errorCount() { return ERRORS.length; }
function errorList() { return ERRORS.join(", "); }

function hasError(re) {
	for (let m = 0; m < ERRORS.length; m++)
		if (ERRORS[m].match(re))
			return true;
	return false;
}

function test_checkRow_Mines() {
	clearErrors();
	let row = checkRow("010M1000", 5, 8);
	if (!hasError(/mine/i)) {
		return `Did not give error for mine (errors=${errorList()})`;
	}
	if (row !== "01001000") {
		return "Did not remove mine";
	}
	return null;
}

function test_checkRow_BannedJumps() {
	const banned = [
		"10001000",
		"10002000",
		"10002003",
		"10302333",
		"31333133",
		"MM1MMM1M",
		"00020002",
		"3M2M313M",
	];
	for (let i = 0; i < banned.length; i++) {
		clearErrors();
		let row = checkRow(banned[i], 5, 8);
		if (!hasError(/banned/i)) {
			return `Did not give error for banned jumps (row: ${banned[i]}, errors: ${errorList()})`;
		}
	}
	return null;
}

function test_checkRow_GoodVsBad() {
	const good = [
		"0000",
		"00000000",
		"0100",
		"00000010",
		"1001",
		"2002",
		"00020200",
		"3123",
		"31233333",
		"33333333",
		"0303",
	];
	const bad = [
		"0111",
		"0121",
		"1111",
		"11111111",
		"2222",
		"22222222",
		"000M",
		"01L0",
		"0140",
		"1113",
		"01000020",
		"10010010",
		"00001110",
		"33331113",
		"what",
		"\uFFFF\uFFFF",
	];
	for (let i = 0; i < good.length; i++) {
		clearErrors();
		checkRow(good[i], 5, 8);
		if (errorCount() > 0) {
			return `Gave error for good row (row: ${good[i]}, errors: ${errorList()})`;
		}
	}
	for (let i = 0; i < bad.length; i++) {
		clearErrors();
		checkRow(bad[i], 5, 8);
		if (errorCount() === 0) {
			return `Didn't give error for bad row (row: ${bad[i]})`;
		}
	}
	return null;
}

function compareBeats(a, b) {
	if (a == b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) return false;
		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] !== b[i][j]) return false;
		}
	}
	return true;
}

function test_convertMeasure_MatchGood() {
	const measure = `
		10000000  // beat 0: use 12ths
		00000000
		00000000
		00000000
		00010000  //
		00000000
		00000000
		00000000
		00002002  //
		00000000
		00000000
		00000000 
		12000003  // beat 1: use 16ths
		00000000
		00000000
		00003000  //
		00000000
		00000000
		03100000  //
		00000000
		00000000
		00000000  //
		00000000
		00000000
		00000022  // beat 2: use 12ths
		00000000
		00000000
		00000000
		00002200  //
		00000000
		00000000
		00000000
		00003333  //
		00000000
		00000000
		00000000
		00000000  // beat 3: use 16ths
		00000000
		00000000
		00000000  //
		00000000
		00000000
		10010000  //
		00000000
		00000000
		00000000  //
		00000000
		00000000
	`;
	const expect = [
		[
			"10000000",
			"00010000",
			"00002002",
		],[
			"12000003",
			"00003000",
			"03100000",
			"00000000",
		],[
			"00000022",
			"00002200",
			"00003333",
		],[
			"00000000",
			"00000000",
			"10010000",
			"00000000",
		],
	];
	clearErrors();
	let beats = convertMeasure(measure, 5, 8);
	if (!compareBeats(beats, expect)) {
		// alert(`${beats}\n\n${expect}`);
		return `Measure didn't match (errors: ${errorList()})`;
	}
	if (errorCount() > 0) {
		return `Measure conversion gave errors: ${errorList()}`;
	}
	return null;
}

function test_convertMeasure_Good() {
	const wide = new Array(192).fill("0000").join("\n");
	const wide2 = new Array(192).fill("00000000").map((v,i) => i % 48 === 0 ? "10000000" : v).join("\n");
	const crlf = new Array(4).fill("1000").join("\r\n");
	const good = {
		"wide": wide,
		"wide2": wide2,
		"crlf": crlf,
	};
	for (const name in good) {
		clearErrors();
		let beats = convertMeasure(good[name], 5, 8);
		if (!beats || errorCount() > 0) {
			return `Error converting "${name}": ${errorList()}`;
		}
	}
	return null;
}

function test_convertMeasure_Bad() {
	const fifthlets = new Array(5).fill("1000").join("\n");
	const differentWidths = new Array(48).fill("0000").map((v,i) => i === 47 ? "00000000" : v).join("\n");
	const thirtySeconds = new Array(32).fill("1000").join("\n");
	const bad = {
		"fifthlets": fifthlets,
		"differentWidths": differentWidths,
		"thirtySeconds": thirtySeconds,
	};
	for (const name in bad) {
		clearErrors();
		let beats = convertMeasure(bad[name], 5, 8);
		if (errorCount() === 0) {
			return `No errors from "${name}"`;
		}
	}
	return null;
}

function test_convertChart_MatchFull() {
	let notes = `
		00000000
		00000000
		00000000
		00000000
		,
	`;
	for (let i = 0x1000; i < 0x3a000; i += 0x1000) {
		notes += `
			20000000
			02000000
			00200000
			00020000
			00002000
			00000200
			00000020
			33333331
			00000002
			00000020
			00000200
			00002000
			00020000
			00200000
			02000000
			13333333
			,
		`;
	}
	notes += `
		10000000
		01000000
		00100000
		00010000
		00001000
		00000100
		00000010
		00000001
		00001001  // Song ends on this row; this is the last allowable row
		00000000
		00000000
		00000000
		00000000
		00000000
		00000000
		00000000
	`;

	let edit = {
		editId: 8,
		songId: 0x01c1,  // A
		stepsType: 2,    // Double
		difficulty: 4,   // Challenge
		meter: 18,
		name: "TEST",
		commentA: 1,
		commentB: 2,
		notes: notes
	}
	let want = new Uint8Array(0x2000);
	const arrowPattern  = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01];
	const freezePattern = [0x01, 0x03, 0x07, 0x0F, 0x1F, 0x3F, 0x7F, 0x7F, 0x80, 0xC0, 0xE0, 0xF0, 0xF8, 0xFC, 0xFE, 0xFE];
	const endPattern    = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x90];
	for (let i = 0; i < 0x37; i++) {
		for (let j = 0; j < arrowPattern.length; j++) {
			want[i * 16 + j] = arrowPattern[j];
			want[i * 16 + j + 0x1000] = freezePattern[j];
		}
	}
	for (let j = 0; j < endPattern.length; j++) {
		want[0x37 * 16 + j] = endPattern[j];
	}
	clearErrors();
	let got = convertChart(edit);
	if (!got || errorCount() > 0) {
		return `Chart conversion does not match (errors: ${errorList()})`;
	}
	return null;
}

function test_createEdit() {
	const funcs = [
		test_checkRow_Mines,
		test_checkRow_BannedJumps,
		test_checkRow_GoodVsBad,
		test_convertMeasure_MatchGood,
		test_convertMeasure_Good,
		test_convertMeasure_Bad,
		test_convertChart_MatchFull,
	];
	funcs.forEach((func) => {
		clearErrors();
		let r = func();
		if (r === null) {
			testResult(func.name, true);
		} else {
			if (typeof(r) === "string") {
				testResult(func.name, false, r);
			} else {
				testResult(func.name, false, "INTERNAL ERROR");
			}
		}
	});
}
