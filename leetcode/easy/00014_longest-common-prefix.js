/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const minLength = strs.length > 0 ? Math.min(...strs.map(s => s.length)) : 0;
    if(minLength===0) return "";
    for (let i = 0; i < minLength+1; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0].slice(0, minLength+1);


};


let textnum=[{input:strs = ["flower","flow","flight"], output:"fl"},
             {input:strs = ["dog","racecar","car"], output:""}];
  
  for(var i=0;i<textnum.length;i++){
    const output = textnum[i].output;
    const input = textnum[i].input;
    const answer = longestCommonPrefix(input);
   if(longestCommonPrefix(input)!=output) 
    console.log(input+"false");
  }
  console.log("true");