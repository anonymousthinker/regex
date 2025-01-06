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

// Question 1: Validate an IPv4 Address (10 marks)
// Write a regex to validate an IPv4 address. The address should consist of four numbers separated by dots (.), where each number is between 0 and 255.

// Example Input:
// '192.168.1.1' → Valid
// '256.256.256.256' → Invalid

const ipv4Validate = (string) => {
  return string.match(
    /\b(1\d{2}|[1-9]?\d|2[0-4]\d|25[0-5])\b(\.\b(1\d{2}|[0-9]?\d|2[0-4]\d|25[0-5])\b){3}/
  );
};

// Question 2: Extract All Numbers from a String (10 marks)
// Write a regex to extract all numbers from a given string. Use the /g flag to find all occurrences. After extracting the numbers, return them in an array.

// Example Input:
// 'The price is 100 dollars and 25 cents.' → ['100', '25']
// Hint: Use exec() inside a loop to get all the matches.

const extract = (string) => {
  const regex = /\d+/g;
  const numbers = [];
  let match;
  while ((match = regex.exec(string)) !== null) {
    numbers.push(match[0]);
  }

  return numbers;
};

// Question 3: Extract the First Word After "The" (10 marks)
// Write a regex to extract the first word that appears after the word "The" in a string. The word should be followed by either a space or punctuation. Use the exec() method.

// Example Input:
// 'The cat is on the roof.' → 'cat'
// 'I saw The quick brown fox.' → 'quick'

const firstWordAfterThe = (string) => {
  return string.match(/(?<=the\W*)\w+/i);
};

// Question 4: Match Email Addresses (10 marks)
// Write a regex that matches email addresses in a string. Ensure that the email starts with letters, numbers, or symbols like underscores, followed by @, and ends with a domain like .com, .org, etc.

// Example Input:
// 'example@test.com' → Valid
// 'example@com' → Invalid

const matchEmailAddress = (string) => {
  // return string.match(/^\w+(\d+)?@\w+\.\w+/);
  return string.match(/^[\d\w]+@.\w{3}/);
};

// Question 5: Remove Leading and Trailing Spaces from a String (10 marks)
// Write a regex to remove leading and trailing whitespace from a string.

// Example Input:
// ' Hello World ' → 'Hello World'
// ' This is a test. ' → 'This is a test.'

// const checkLeadingOrTrailingSpaces = (string) => {
//   //this will check if any string has leading or trailing spaces!
//   return string.match(/^\S.*\S$/);
// };

const removeSpaces = (string) => {
  const regex = /\S.*\S/;
  return string.match(regex);
};

// Question 6: Extract All Words Starting with a Vowel (10 marks)
// Write a regex to extract all words that start with a vowel (case-insensitive) in a string.

// Example Input:
// 'Apple is on the floor, and Orange is bright.' → ['Apple', 'is', 'Orange']
// Hint: Use exec() and a loop to get multiple matches.

const startingWithVowel = (string) => {
  const wordsStartingWithVowel = [];
  const regex = /\b[aeiou]\w+\b/gi;
  let match;
  while ((match = regex.exec(string)) !== null) {
    wordsStartingWithVowel.push(match[0]);
  }

  return wordsStartingWithVowel;
};

// Question 7: Find All Valid Dates in the Format "DD/MM/YYYY" (10 marks)
// Write a regex to match valid dates in the "DD/MM/YYYY" format. The day should be between 01 and 31, and the month should be between 01 and 12.

// Example Input:
// 'The event is on 14/05/2024 and 28/02/2023.' → ['14/05/2024', '28/02/2023']

const validDates = (string) => {
  const dates = [];
  // const regex = /(0[1-9]|[1-3]0|[12][1-9]|31\/0[1-9]|1[0-2]\/\d{4})\S+/g;
  //the difference between the above not working one and the below working one
  const regex = /(0[1-9]|[1-3]0|[12][1-9]|31)\/(0[1-9]|1[0-2])\/(\d{4})/g;
  let match;
  while ((match = regex.exec(string)) !== null) {
    console.log(match);
    dates.push(match[0]); // i dont like hardcoding the index like this.
  }

  return dates;
};

// Question 8: Match All Words with Numbers (10 marks)
// Write a regex to find all words containing numbers in a string. A word can contain both letters and numbers (e.g., "abc123", "hello99").

// Example Input:
// 'abc123 hello99 world' → ['abc123', 'hello99']

const wordsWithNumbers = (string) => {
  const alphanumerics = [];
  const regex = /\b\w*\d\w*\b/g;
  let match;

  while ((match = regex.exec(string)) !== null) {
    alphanumerics.push(match[0]);
  }

  return alphanumerics;
};

// Question 9: Find Repeated Words in a String (10 marks)
// Write a regex to find consecutive repeated words in a string. For example, if a word appears twice in a row (separated by a space), match it.

// Example Input:
// 'hello hello world' → ['hello hello']
// 'test test this is' → ['test test']

const repeatedWords = (string) => {
  return string.match(/\b(\w+)\b\s\1/g);
};

// Question 10: Replace All Digits with "#" (10 marks)
// Write a regex that replaces all digits in a string with "#".

// Example Input:
// 'I have 2 apples and 5 bananas.' → 'I have # apples and # bananas.'

const replaceWithHash = (string) => {
  return string.replace(/\d/g, "#");
};
