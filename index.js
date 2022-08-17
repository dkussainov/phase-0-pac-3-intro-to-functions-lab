function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    const cantHear = "I can't hear you!";
    const yesAnswer = "YES INDEED!";
    const dinnerTogether = "I would love to!";
    if(string.toLowerCase() === string) {
        return cantHear;
    }
    else if(string.toUpperCase() === string) {
        return yesAnswer;
    }
    else if("Let's have dinner together!" === string) {
        return dinnerTogether;
    }
}