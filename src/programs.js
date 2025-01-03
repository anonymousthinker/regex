// 1. Match any string that contains a number.

export const containNumber = (string) => {
  const numberPresentRegex = /\d+/;
  return numberPresentRegex.test(string);
};

// 2. Find all lowercase letters in a string.

export const lowerCase = (string) => {
  const lowerCaseRegex = /[a-z]/g;
  return string.match(lowerCaseRegex);
};

// 3. Match a string that ends with "ed".

export const endsWithed = (string) => {
  const edRegex = /\w*ed$/;
  return string.match(edRegex);
};

// 4. Match the word "yes" in a string.

export const yes = (string) => {
  const yesMatchRegex = /yes/;
  return string.match(yesMatchRegex);
};

// 5. Find any two consecutive vowels in a string.

export const consecutiveVowels = (string) => {
  const consVowelRegex = /[aeiou]{2}/;
  return string.match(consVowelRegex);
};

// 6. Match any string containing the word "hello".

export const containsHello = (string) => {
  const isHelloRegex = /hello/;
  return isHelloRegex.test(string);
};

// 7. Find a string that contains exactly two spaces.

export const exactlyTwoSpaces = (string) => {
  const twoSpaceRegex = /^\S*\s\S*\s\S*$/;
  return string.match(twoSpaceRegex);
};

// 8. Find a string that starts with "abc".

export const startsWithAbc = (string) => {
  const RE = /^abc/;
  return string.match(RE);
};

// 9. Match any string that contains the digit `7`.

export const containsSeven = (string) => {
  return string.match(/7/);
};

// 10. Find all occurrences of the letter `e`.

export const occurencesOfE = (string) => {
  const alle = string.match(/e/g) || [];
  return alle.length;
};

// 11. Match a string that has at least one uppercase letter.

export const upper = (string) => {
  const upperCaseRegex = /[A-Z]/;
  return upperCaseRegex.test(string);
};

// 12. Find a string with a period (`.`) in it.

export const period = (string) => {
  return string.match(/\w*\.\w*/);
};

// 13. Match a string that contains a single space.

export const singleSpace = (string) => {
  return string.match(/^\w*\s\w*$/);
};

// 14. Match all words that start with the letter `c`.

export const startsWithC = (string) => {
  return string.match(/\bc\w*\b/g);
  return string.match(/c\w*/g);
};

// 15. Match a string that contains the sequence "123".

export const containsTheSequence = (string) => {
  return string.match(/\w*123\w*/);
};

// 16. Match a string that contains a forward slash (`/`).

export const forwardSlash = (string) => {
  return string.match(/\w*\/\w*/);
};

// 17. Find all strings that contain "and".

export const containAnd = (string) => {
  return string.match(/\w*and\w*/g);
};

// 18. Match a string that starts and ends with the same letter.

export const startAndEndWithSame = (string) => {
  return string.match(/^(.).*\1$/);
};

// 19. Match all lowercase letters except "x" and "y".

export const allLowerExceptXAndY = (string) => {
  return string.match(/[a-wz]/g);
};

// 20. Find all words in a string that are exactly 5 letters long.

export const lengthOf5 = (string) => {
  return string.match(/\b(\w){5}\b/g);
};

// 21. Match all words starting with a vowel.

export const startingWithVowel = (string) => {
  return string.match(/\b[aeiou]\w*/g);
};

// 22. Find all sequences of two or more consecutive digits.

export const consecutiveTwoOrMoreDigits = (string) => {
  return string.match(/\d{2,}/g);
};

// 23. Match all words that contain exactly three letters.

export const exactlyThree = (string) => {
  return string.match(/\b(\w){3}\b/g);
};

// 24. Find all occurrences of the word "cat" or "dog".

export const catOrDog = (string) => {
  return string.match(/\bcat\b|\bdog\b/g);
};

// 25. Capture the first and last name from a string like `"John Doe"`.

export const captureFirstAndLast = (string) => {
  const names = string.match(/(\w+)\s+(\w+)/);
  return { firstName: names[1], lastName: names[2] };
};

// 26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).

export const repeatingChars = (string) => {
  return string.match(/(\w)\1{1,}/);
};

// 27. Extract all the hashtags from a tweet.

export const extractHashtags = (string) => {
  return string.match(/#\w+/g);
};

// 28. Validate a 24-hour time format like `"23:59"`.

export const validate24 = (string) => {
  return string.match(/[0-2][0-3]:[0-5][0-9]/);
};

// 29. Capture the area code and phone number from `(123) 456-7890`.

export const areaCodeAndPhoneNumber = (string) => {
  return string.match(/(\(\d{3}\))\s(\d{3}-\d{4})/);
};

// 30. Find sequences of whitespace followed by a word.

export const spaceFollowedByWord = (string) => {
  return string.match(/(?<=\w+)\s+/g);
};

// 31. Match strings containing at least one uppercase and one digit.

export const oneUpperAndDigit = (string) => {
  return string.match(/.*[A-Z]+.*\d+.*/);
};

// 32. Find all non-alphanumeric characters in a string.

export const nonAlphanumeric = (string) => {
  return string.match(/[^\d]/g);
};

// 33. Match email addresses.

export const email = (string) => {
  return string.match(/^[a-z]+\d+@\w+\.com$/);
};

// 34. Validate dates in the format `YYYY-MM-DD`.

export const validateDate = (string) => {
  return string.match(/\d{4}-\d{2}-\d{2}/);
};

// 35. Extract the filename and extension from a path like `/path/to/file.txt`.

export const fileNameAndExtension = (string) => {
  return string.match(/\/\w+\/\w+\/(\w+)\.(\w+)/);
};

// 36. Find all duplicate words in a sentence.

export const duplicate = (string) => {
  return string.match(/(\w+)(?=.*\1)/);
};

// 37. Match words that do not contain the letter "e".

export const notE = (string) => {
  return string.match(/\b[^e]*\b/g);
};

// 38. Extract the domain name from a URL like `https://www.example.com`.

export const domainName = (string) => {
  return string.match(/(?<=\.)\w+\.\w+$/);
};

// 39. Match strings containing three consecutive vowels.

export const consequtiveVowels = (string) => {
  return string.match(/\w*[aeiou]{3}\w*/g);
};

// 40. Find all 4-letter palindromes in a string.

export const fourLetterPalindrome = (string) => {
  return string.match(/^(\w)(\w)\2\1$/g);
};

// ```
