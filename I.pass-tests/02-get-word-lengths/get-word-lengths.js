var getWordLengths = function(someWords) {
    const wordLength = someWords.map (word => word.length)
    return wordLength
};

module.exports = getWordLengths;
