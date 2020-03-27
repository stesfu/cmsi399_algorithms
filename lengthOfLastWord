//Attempt #1 : Fails test case with extra spaces at the end (i.e. "a ")

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = string.split(" "); 
    var last = words[words.length - 1];
    return last.length;
    
};

//Attempt #2 : Passes submission

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var string = s.trim(" ");
    var words = string.split(" "); 
    var last = words[words.length - 1];
    return last.length;
    
};

//Attempt #3: Made code more concise 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = s.trim(" ").split(" ");
    return words[words.length - 1].length;    
};
