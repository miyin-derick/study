/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const add = ["(", "{", "["];
  const reduce = [")", "}", "]"];
  const answer = [];
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < add.length; j++) {
      if (s[i] == add[j]) {
        answer.push(s[i]);
        break;
      }
      if (s[i] == reduce[j]) {
        if (answer.length === 0 || answer[answer.length - 1] != add[j]) {
          return false;
        }
        answer.pop();
        break;
      }
    }
  }

  return answer.length === 0;
};

let textnum = [
  { input: (strs = "()"), output: true },
  { input: (strs = "()[]{}"), output: true },
  { input: (strs = "([])"), output: true },
  { input: (strs = "([)]"), output: false },
  { input: (strs = "(]"), output: false },
  { input: (strs = "["), output: false },
];

for (var i = 0; i < textnum.length; i++) {
  const output = textnum[i].output;
  const input = textnum[i].input;
  const answer = isValid(input);
  if (isValid(input) != output) console.log(input + "false");
}
console.log("true");
