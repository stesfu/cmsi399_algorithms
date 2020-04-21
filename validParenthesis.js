

/**
 * @param {string} s
 * @return {boolean}
 */
 
 //Initial attempt, failing most tests 
 var isValid = function(s) {
    let open = ['(','{', '[']; 
    let close = [')','}', ']'];
    let index = 0; 
    let balanced = false; 
    for (i = 0; i < s.length; i++) {
        if (open.indexOf(s[i]) > -1 && close.indexOf(s[i + 1]) > -1) {
         if (open.indexOf(i) == close.indexOf(i+1)){
             balanced = true; 
         }
         } 
        }
      return balanced; 

  }
 
 //Second attempt after reading leet code solution hint, decided to use a better implementation instead 
var isValid = function(s) {
    let brackets = {
        "{" : "}",
        "[" : "]",
        "(" : ")",
    }
    
    let parenStack = []; 
    for(let i = 0; i < s.length; i++){
        if(s[i] in brackets){
            parenStack.push(s[i]);
        }else{
            let current = parenStack.pop();
            if(brackets[current] != s[i]){
                return false; 
            }
        }
    }
    return parenStack.length == 0; 

  }
    
