/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const duizhaobiao={
     "I":1,
     "V":5,
     "X":10,
     "L":50,
     "C":100,
     "D":500,
     'M':1000,
  }
  let answer = 0;
  for(var i=0;i<s.length;i++){
    if((s[i]=="I"&&(s[i+1]=="V"||s[i+1]=="X"))||
       (s[i]=="X"&&(s[i+1]=="L"||s[i+1]=="C"))||
       (s[i]=="C"&&(s[i+1]=="D"||s[i+1]=="M"))){
      answer-=duizhaobiao[s[i]];
      continue;
    }
    answer+=duizhaobiao[s[i]];
  }
  return answer;
};

text=[
  {input:"III",output:3},
  {input:"IV",output:4},
  {input:"IX",output:9},
  {input:"LVIII",output:58},
  {input:"MCMXCIV",output:1994}
]
for(var i=0;i<text.length;i++){
  const output = text[i].output;
  const input = text[i].input;
  const answer = romanToInt(input);
 if(romanToInt(input)!=output) 
  console.log(input+"false");
}
console.log("true");
