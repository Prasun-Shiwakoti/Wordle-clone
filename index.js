
var c_row = 0;
var c_col = 0;
var gameFinished = 0

var wordList = ["SMILE", "ABUSE", "ADULT", "AGENT", "ANGER", "APPLE", "AWARD", "BASIS", "BEACH", "BIRTH", "BLOCK", "BLOOD", "BOARD", "BRAIN", "BREAD", "BREAK", "BROWN", "BUYER", "CAUSE", "CHAIN", "CHAIR", "CHEST", "CHIEF", "CHILD", "CHINA", "CLAIM", "CLASS", "CLOCK", "COACH", "COAST", "COURT", "COVER", "CREAM", "CRIME", "CROSS", "CROWD", "CROWN", "CYCLE", "DANCE", "DEATH", "DEPTH", "DOUBT", "DRAFT", "DRAMA", "DREAM", "DRESS", "DRINK", "DRIVE", "EARTH", "ENEMY", "ENTRY", "ERROR", "EVENT", "FAITH", "FAULT", "FIELD", "FIGHT", "FINAL", "FLOOR", "FOCUS", "FORCE", "FRAME", "FRANK", "FRONT", "FRUIT", "GLASS", "GRANT", "GRASS", "GREEN", "GROUP", "GUIDE", "HEART", "HENRY", "HORSE", "HOTEL", "HOUSE", "IMAGE", "INDEX", "INPUT", "ISSUE", "JAPAN", "JONES", "JUDGE", "KNIFE", "LAURA", "LAYER", "LEVEL", "LEWIS", "LIGHT", "LIMIT", "LUNCH", "MAJOR", "MARCH", "MATCH", "METAL", "MODEL", "MONEY", "MONTH", "MOTOR", "MOUTH", "MUSIC", "NIGHT", "NOISE", "NORTH", "NOVEL", "NURSE", "OFFER", "ORDER", "OTHER", "OWNER", "PANEL", "PAPER", "PARTY", "PEACE", "PETER", "PHASE", "PHONE", "PIECE", "PILOT", "PITCH", "PLACE", "PLANE", "PLANT", "PLATE", "POINT", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIZE", "PROOF", "QUEEN", "RADIO", "RANGE", "RATIO", "REPLY", "RIGHT", "RIVER", "ROUND", "ROUTE", "RUGBY", "SCALE", "SCENE", "SCOPE", "SCORE", "SENSE", "SHAPE", "SHARE", "SHEEP", "SHEET", "SHIFT", "SHIRT", "SHOCK", "SIGHT", "SIMON", "SKILL", "SLEEP", "SMILE", "SMITH", "SMOKE", "SOUND", "SOUTH", "SPACE", "SPEED", "SPITE", "SPORT", "SQUAD", "STAFF", "STAGE", "START", "STATE", "STEAM", "STEEL", "STOCK", "STONE", "STORE", "STUDY", "STUFF", "STYLE", "SUGAR", "TABLE", "TASTE", "TERRY", "THEME", "THING", "TITLE", "TOTAL", "TOUCH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREND", "TRIAL", "TRUST", "TRUTH", "UNCLE", "UNION", "UNITY", "VALUE", "VIDEO", "VISIT", "VOICE", "WASTE", "WATCH", "WATER", "WHILE", "WHITE", "WHOLE", "WOMAN", "WORLD", "YOUTH", "ALCON", "AUGHT", "HELLA", "ONE’S", "OUGHT", "THAME", "THERE", "THINE", "THINE", "WHERE", "WHICH", "WHOSE", "WHOSO", "YOURS", "YOURS", "ADMIT", "ADOPT", "AGREE", "ALLOW", "ALTER", "APPLY", "ARGUE", "ARISE", "AVOID", "BEGIN", "BLAME", "BREAK", "BRING", "BUILD", "BURST", "CARRY", "CATCH", "CAUSE", "CHECK", "CLAIM", "CLEAN", "CLEAR", "CLIMB", "CLOSE", "COUNT", "COVER", "CROSS", "DANCE", "DOUBT", "DRINK", "DRIVE", "ENJOY", "ENTER", "EXIST", "FIGHT", "FOCUS", "FORCE", "GUESS", "IMPLY", "ISSUE", "JUDGE", "LAUGH", "LEARN", "LEAVE", "LET’S", "LIMIT", "MARRY", "MATCH", "OCCUR", "OFFER", "ORDER", "PHONE", "PLACE", "POINT", "PRESS", "PROVE", "RAISE", "REACH", "REFER", "RELAX", "SERVE", "SHALL", "SHARE", "SHIFT", "SHOOT", "SLEEP", "SOLVE", "SOUND", "SPEAK", "SPEND", "SPLIT", "STAND", "START", "STATE", "STICK", "STUDY", "TEACH", "THANK", "THINK", "THROW", "TOUCH", "TRAIN", "TREAT", "TRUST", "VISIT", "VOICE", "WASTE", "WATCH", "WORRY", "WOULD", "WRITE", "ABOVE", "ACUTE", "ALIVE", "ALONE", "ANGRY", "AWARE", "AWFUL", "BASIC", "BLACK", "BLIND", "BRAVE", "BRIEF", "BROAD", "BROWN", "CHEAP", "CHIEF", "CIVIL", "CLEAN", "CLEAR", "CLOSE", "CRAZY", "DAILY", "DIRTY", "EARLY", "EMPTY", "EQUAL", "EXACT", "EXTRA", "FAINT", "FALSE", "FIFTH", "FINAL", "FIRST", "FRESH", "FRONT", "FUNNY", "GIANT", "GRAND", "GREAT", "GREEN", "GROSS", "HAPPY", "HARSH", "HEAVY", "HUMAN", "IDEAL", "INNER", "JOINT", "LARGE", "LEGAL", "LEVEL", "LIGHT", "LOCAL", "LOOSE", "LUCKY", "MAGIC", "MAJOR", "MINOR", "MORAL", "NAKED", "NASTY", "NAVAL", "OTHER", "OUTER", "PLAIN", "PRIME", "PRIOR", "PROUD", "QUICK", "QUIET", "RAPID", "READY", "RIGHT", "ROMAN", "ROUGH", "ROUND", "ROYAL", "RURAL", "SHARP", "SHEER", "SHORT", "SILLY", "SIXTH", "SMALL", "SMART", "SOLID", "SORRY", "SPARE", "STEEP", "STILL", "SUPER", "SWEET", "THICK", "THIRD", "TIGHT", "TOTAL", "TOUGH", "UPPER", "UPSET", "URBAN", "USUAL", "VAGUE", "VALID", "VITAL", "WHITE", "WHOLE", "WRONG", "YOUNG", "AFORE", "AFTER", "BOTHE", "OTHER", "SINCE", "SLASH", "UNTIL", "WHERE", "WHILE", "ABACK", "ABAFT", "ABOON", "ABOUT", "ABOVE", "ACCEL", "ADOWN", "AFOOT", "AFORE", "AFOUL", "AFTER", "AGAIN", "AGAPE", "AGOGO", "AGONE", "AHEAD", "AHULL", "ALIFE", "ALIKE", "ALINE", "ALOFT", "ALONE", "ALONG", "ALOOF", "ALOUD", "AMISS", "AMPLY", "AMUCK", "APACE", "APART", "APTLY", "AREAR", "ASIDE", "ASKEW", "AWFUL", "BADLY", "BALLY", "BELOW", "CANNY", "CHEAP", "CLEAN", "CLEAR", "COYLY", "DAILY", "DIMLY", "DIRTY", "DITTO", "DRILY", "DRYLY", "DULLY", "EARLY", "EXTRA", "FALSE", "FATLY", "FEYLY", "FIRST", "FITLY", "FORTE", "FORTH", "FRESH", "FULLY", "FUNNY", "GAILY", "GAYLY", "GODLY", "GREAT", "HAPLY", "HEAVY", "HELLA", "HENCE", "HOTLY", "ICILY", "INFRA", "INTL.", "JILDI", "JOLLY", "LAXLY", "LENTO", "LIGHT", "LOWLY", "MADLY", "MAYBE", "NEVER", "NEWLY", "NOBLY", "ODDLY", "OFTEN", "OTHER", "OUGHT", "PARTY", "PIANO", "PLAIN", "PLONK", "PLUMB", "PRIOR", "QUEER", "QUICK", "QUITE", "RAMEN", "RAPID", "REDLY", "RIGHT", "ROUGH", "ROUND", "SADLY", "SECUS", "SELLY", "SHARP", "SHEER", "SHILY", "SHORT", "SHYLY", "SILLY", "SINCE", "SLEEK", "SLYLY", "SMALL", "SO-SO", "SOUND", "SPANG", "SRSLY", "STARK", "STILL", "STONE", "STOUR", "SUPER", "TALLY", "TANTO", "THERE", "THICK", "TIGHT", "TODAY", "TOMOZ", "TRULY", "TWICE", "UNDER", "UTTER", "VERRY", "WANLY", "WETLY", "WHERE", "WRONG", "WRYLY", "ABAFT", "ABOON", "ABOUT", "ABOVE", "ADOWN", "AFORE", "AFTER", "ALONG", "ALOOF", "AMONG", "BELOW", "CIRCA", "CROSS", "FURTH", "MINUS", "NEATH", "ROUND", "SINCE", "SPITE", "UNDER", "UNTIL", "AARGH", "ADIEU", "ADIOS", "ALACK", "ALOHA", "AVAST", "BAKAW", "BASTA", "BEGAD", "BLESS", "BLIGE", "BRAVA", "BRAVO", "BRING", "CHOOK", "DAMME", "DILDO", "DITTO", "FRICK", "FUDGE", "GOLLY", "GRATZ", "HALLO", "HASTA", "HAVOC", "HELLA", "HELLO", "HOWAY", "HOWDY", "HULLO", "HUZZA", "JESUS", "KAPOW", "LOOSE", "LORDY", "MARRY", "MERCY", "NIGHT", "PLONK", "PSYCH", "QUITE", "SALVE", "SKOAL", "SNIFF", "SOOEY", "THERE", "THIAM", "THWAP", "TOUGH", "TWIRP", "VIOLA", "VIVAT", "WACKO", "WAHEY", "WHIST", "WILMA", "WIRRA", "WOOPS", "WOWIE", "YECCH", "YEEHA", "YEESH", "YOWCH", "ZOWIE"]
var ind = Math.floor(Math.random() * wordList.length)
var correctWord = wordList[ind]
var displayBoxes = document.getElementsByClassName("display-box");
var keys = document.getElementsByClassName("key");

keyIndex = {
    'Q': 0,
    'W': 1,
    'E': 2,
    'R': 3,
    'T': 4,
    'Y': 5,
    'U': 6,
    'I': 7,
    'O': 8,
    'P': 9,
    'A': 10,
    'S': 11,
    'D': 12,
    'F': 13,
    'G': 14,
    'H': 15,
    'J': 16,
    'K': 17,
    'L': 18,
    'Z': 20,
    'X': 21,
    'C': 22,
    'V': 23,
    'B': 24,
    'N': 25,
    'M': 26,
}


window.onload = function () {
    document.querySelector("body").focus();
    document.querySelector("body").addEventListener("keydown", function (e) {
        keyPressed(e);
    });
}

function keyPressed(e) {
    if (!gameFinished) {
        var code = e.keyCode
        if (code == 8) {
            deleteChar();
        }
        else if (code == 13) {
            confirmGuess();
        }
        else if (65 <= code && code <= 90) {
            addChar(e.key)
        }
    }
}

function confirmGuess() {
    if (c_col == 5) {
        var guessed = ""
        var seenIndex = []
        for (let i = 0; i < 5; i++) {
            guessed += displayBoxes[c_row * 5 + i].innerText
        }
        // if (!wordList.includes(guessed)){
        //     alert("Not in wordlist")
        //     return
        // }
        if (guessed == correctWord) {
            for (let i = 0; i < 5; i++) {
                displayBoxes[c_row * 5 + i].classList.add("correct")
                console.log(keyIndex[guessed[i]])
                keys[keyIndex[guessed[i]]].classList.add("correct");
            }
            setTimeout(() => { alert("Congratulations!!! You guessed the word") }, 100)
            gameFinished = 1;
            return;
        }
        else {
            for (let i = 0; i < 5; i++) {
                if (guessed[i] == correctWord[i]) {
                    displayBoxes[c_row * 5 + i].classList.add("correct")
                    keys[keyIndex[guessed[i]]].classList.add("correct");
                    seenIndex.push(i)
                }
            }
            console.log(seenIndex)
            for (let i = 0; i < 5; i++) {
                var f = 0
                for (let j = 0; j < 5; j++) {
                    if (seenIndex.includes(j)) {
                        continue
                    }
                    if (guessed[i] == correctWord[j]) {
                        f = 1;
                        if (!(displayBoxes[c_row * 5 + i].classList.contains("partial-correct") || displayBoxes[c_row * 5 + i].classList.contains("correct"))){
                            seenIndex.push(j)
                        }
                        if (i != j) {
                            displayBoxes[c_row * 5 + i].classList.add("partial-correct")
                            keys[keyIndex[guessed[i]]].classList.add("partial-correct");
                            break
                        }
                        
                    }
                }
                console.log(f + guessed[i])
                if (!f) {
                    displayBoxes[c_row * 5 + i].classList.add("wrong")
                    keys[keyIndex[guessed[i]]].classList.add("wrong");
                }
            }
        }
        c_row++;
        c_col = 0;
        if (c_row == 6) {
            setTimeout(() => { alert("OPPS!! You ran out of chances. The corret word was: " + correctWord) }, 100)
        }
    }
    else {
        alert("Complete the word first")
    }

}
function addChar(char) {
    if (c_col < 5) {
        displayBoxes[c_row * 5 + c_col].innerText = char.toUpperCase();
        displayBoxes[c_row * 5 + c_col].classList.add("filled")
        c_col++;
    }
}
function deleteChar() {
    if (c_col > 0) {
        displayBoxes[c_row * 5 + c_col - 1].innerText = "";
        displayBoxes[c_row * 5 + c_col - 1].classList.remove("filled")
        c_col--;
    }
}