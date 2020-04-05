/**
 * @param {string} s
 * @return {string}
 */
let frequencySort = function(s) {
    let sortMap = {};
    for(letter of s){
        if(sortMap[letter] === undefined){
            sortMap[letter] = 1;
        }else{
            sortMap[letter] = sortMap[letter] + 1;
        }
    }
    let sortedLetters = Object.keys(sortMap).sort((a,b) => sortMap[b] - sortMap[a]);
    answer = "";
    for(letter of sortedLetters){
      answer += letter.repeat(sortMap[letter]);  
    }
    return answer;
    
};
