// Problem 1
// Write a regular expression to match all words in a string that start with a capital letter. Use the match() method to find all matches.

// Example input:
// const input = "Today is a Beautiful day in New York City.";
// Expected output:
// ["Today", "Beautiful", "New", "York", "City"]

export const capitals = (input) => {
  const capitalizeInitialRegex = /[A-Z][\w-']*/g;
  return input.match(capitalizeInitialRegex) || [];
};

// Problem 2
// Write a regular expression to check if a given string is a valid phone number in the format XXX-XXX-XXXX, where X is a digit. Use the test() method to verify if the input matches the pattern.

// Example inputs and outputs:

// isValidPhoneNumber("123-456-7890"); // true
// isValidPhoneNumber("12-3456-7890"); // false
// isValidPhoneNumber("123-4567-890"); // false
// isValidPhoneNumber("1234567890");   // false

// Write a function isValidPhoneNumber that takes a string as input and returns true or false.

export const isValidPhoneNumber = (phoneNumber) => {
  const numberTestRegex = /^\d{3}-\d{3}-\d{4}$/;
  return numberTestRegex.test(phoneNumber);
};

// Problem 3
// Write a regular expression to replace all sequences of one or more spaces in a string with a single space. Use the replace() method to achieve this.

// Example input and output:

// const input = "This   is   a   test   string.";
// const output = "This is a test string.";

// Write a function normalizeSpaces that takes a string as input and returns the modified string.

export const normalizeSpaces = (string) => {
  const spaceNormalizeRegex = /\s{2,}/g;

  // return string.replace(spaceNormalizeRegex, " ") || [];
  //in the case of replace giving [] and checking for null value is redundant as it always returns a string
  return string.replace(spaceNormalizeRegex, " ");
};

// Problem 4
// Write a regular expression to find all numeric values in a string. Use the matchAll() method to get all matches along with their positions (indices) in the string.

// Example input:

// const input = "The prices are 45, 89.99, and 1200.";
// Expected output:

// [
//   { value: "45", index: 15 },
//   { value: "89.99", index: 19 },
//   { value: "1200", index: 29 }
// ]

// Write a function extractNumbers that takes a string as input and returns an array of objects with value and index.

export const extractNumbers = (string) => {
  const extractNumbersRegex = /-?\d+(\.\d+)?/g;

  return Array.from(string.matchAll(extractNumbersRegex)).map((element) => {
    return { value: element[0], index: element.index };
  });
};
