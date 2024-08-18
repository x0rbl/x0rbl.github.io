"use strict";

const MAX_FILES = 30;

const COMMENTS_A = [
	"(None)",
	"Just a bit",
	"Relatively",
	"Incredibly",
	"Super",
	"Light",
	"Happy",
	"Hot",
	"Cool",
	"???",
	"Fascinating",
	"Extreme",
	"Ultimate",
	"Miraculous",
	"Legendary",
	"Other",
];

const COMMENTS_B = [
	"(None)",
	"Lesson time!",
	"Watch out!",
	"Check this out",
	"Trickster",
	"Freezing Inferno",
	"Nonstop Madness",
	"Jumping Jamboree",
	"Chaos Zone",
	"For Beginners",
	"For Intermediates",
	"For Experts",
	"My masterpiece!",
	"My best masterpiece!",
	"Calling all challengers!",
	"Something",
];

const DIFFICULTY_NAMES_SM = ["Beginner", "Easy", "Medium", "Hard", "Challenge"];
const DIFFICULTY_NAMES_DDR = ["Beginner", "Basic", "Difficult", "Expert", "Challenge"];

const FIELD_NONE = 0;
const FIELD_WEBID = 1;
const FIELD_SONGID = 2;
const FIELD_STEPSTYPE = 3;
const FIELD_DIFFICULTY = 4;
const FIELD_METER = 5;
const FIELD_COMMENTA = 6;
const FIELD_COMMENTB = 7;
const FIELD_EDITNAME = 8;
const FIELD_NOTES = 9;

const PREFIX_ERROR = "⛔";   // An unignorable error, indicating that an edit group cannot be generated
const PREFIX_WARN = "⚠️";    // An error that won't prevent generation of an edit group but may still cause unexpected/undesirable results
const PREFIX_INFO = "ℹ️";    // A notice to the user; may not have anything to do with the generation of the edit group
const PREFIX_UNKNOWN = "⁉️";
