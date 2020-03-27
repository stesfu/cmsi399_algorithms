/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = s.split(" "); 
    var last = words[words.length - 1];
    return last.length; 
    
};
