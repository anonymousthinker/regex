//template strings
// const template = `this is a template string
// ${console.log("this is an expression and result is ", 2 + 2)}
// this is continued as a template string`;

// const template2 = `this is a template string
// ${2 + 2}
// this is continued as a template string`;

// console.log(`${template}
// ${template2}`);

// const char = /g/;
// console.log("gour".match(char));

// lines
//   .filter((line) => line.match(/\w+\s=\sfunction/))
//   .map((fnLine) => fnLine.match(/\w*\s=/)[0].match(/\w+/)[0]);

//match words containing 2 consequtive letters
//example: hello, cool, tool, boot, school

const str = ["helllo", "cut", "tool", "but", "school"];

const repeatedLetters = (str) => {
  const RE = /(.+)\1/;
  return RE.test(str);
};

const repeatedTwice = (words) => {
  const RE2 = /(.+)\1{2}/;
  return words.filter((word) => repeatedLetters(word) && !RE2.test(word));
};

console.log(repeatedTwice(str));

//filter strings with even length

const evenLengths = (str) => {
  const RE = /^(.{2}){0,}$/;
  return str.filter((word) => RE.test(word));
};

console.log(evenLengths(str));

//filter strings with lengths divisible by 3

const factorsOf3 = (str) => {
  const RE = /^(.{3}){0,}$/;
  return str.filter((word) => RE.test(word));
};

console.log(factorsOf3(str));
