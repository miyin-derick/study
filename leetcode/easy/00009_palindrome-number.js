/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x ==0) return true;
  if(x%10==0&&x!=0) return false;
  let textx = 0;
  while (x > textx) {
    textx = textx * 10+x % 10;
    x = Math.floor(x / 10);
  }
  if(textx>x) textx=parseInt(textx / 10);
if(x==textx) return true;
if(x!=textx) return false;
};

let textnum=[{input:10, output:false},{input:-121, output:false},
  {input:1000021, output:false},{input:121, output:true},
  {input:12321, output:true},{input:0, output:true}];

for(var i=0;i<textnum.length;i++){
  const output = textnum[i].output;
  const input = textnum[i].input;
  const answer = isPalindrome(input);
 if(isPalindrome(input)!=output) 
  console.log(input+"false");
}
console.log("true");
