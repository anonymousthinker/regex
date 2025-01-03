// 1. Match any string that contains a number.

export const containNumber = (string) => {
  const numberPresentRegex = /\d+/;
  return numberPresentRegex.test(string);
};

// 2. Find all lowercase letters in a string.

export const lowerCase = (string) => {
  const lowerCaseRegex = /[a-z]+/g;
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
  const twoSpaceRegex = /^\w*\s\w*\s\w*$/;
  return string.match(twoSpaceRegex);
};

// 8. Find a string that starts with "abc".
// 9. Match any string that contains the digit `7`.
// 10. Find all occurrences of the letter `e`.
// 11. Match a string that has at least one uppercase letter.
// 12. Find a string with a period (`.`) in it.
// 13. Match a string that contains a single space.
// 14. Match all words that start with the letter `c`.
// 15. Match a string that contains the sequence "123".
// 16. Match a string that contains a forward slash (`/`).
// 17. Find all strings that contain "and".
// 18. Match a string that starts and ends with the same letter.
// 19. Match all lowercase letters except "x" and "y".
// 20. Find all words in a string that are exactly 5 letters long.
// 21. Match all words starting with a vowel.
// 22. Find all sequences of two or more consecutive digits.
// 23. Match all words that contain exactly three letters.
// 24. Find all occurrences of the word "cat" or "dog".
// 25. Capture the first and last name from a string like `"John Doe"`.
// 26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).
// 27. Extract all the hashtags from a tweet.
// 28. Validate a 24-hour time format like `"23:59"`.
// 29. Capture the area code and phone number from `(123) 456-7890`.
// 30. Find sequences of whitespace followed by a word.
// 31. Match strings containing at least one uppercase and one digit.
// 32. Find all non-alphanumeric characters in a string.
// 33. Match email addresses.
// 34. Validate dates in the format `YYYY-MM-DD`.
// 35. Extract the filename and extension from a path like `/path/to/file.txt`.
// 36. Find all duplicate words in a sentence.
// 37. Match words that do not contain the letter "e".
// 38. Extract the domain name from a URL like `https://www.example.com`.
// 39. Match strings containing three consecutive vowels.
// 40. Find all 4-letter palindromes in a string.
// ```
