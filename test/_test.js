import { assertEquals, assert, assertFalse } from "jsr:@std/assert";
import {
  capitals,
  isValidPhoneNumber,
  normalizeSpaces,
  extractNumbers,
} from "./makesItLookSoEasy.js";

//capitals
Deno.test("Display all the words with capital letters", () => {
  assertEquals(
    capitals("Today is a Beautiful day in New York City."),
    ["Today", "Beautiful", "New", "York", "City"],
    "Expected is equal to actual"
  );
});

Deno.test("Display all the words with capital letters", () => {
  assertEquals(
    capitals("O'Neil went to McDonalds."),
    ["O'Neil", "McDonalds"],
    "Expected is equal to actual"
  );
});

Deno.test(
  "Display all the words with capital letters when empty string",
  () => {
    assertEquals(capitals(""), [], "Expected is empty array");
  }
);

//isValidPhoneNumber

Deno.test("test is phone number valid when its valid", () => {
  assert(isValidPhoneNumber("123-456-7890"));
});

Deno.test("test is phone number valid when its invalid", () => {
  assertFalse(isValidPhoneNumber("12-3456-7890"));
});

Deno.test("test is phone number valid when its invalid", () => {
  assertFalse(isValidPhoneNumber("123-4567-890"));
});

Deno.test("test is phone number valid when its invalid", () => {
  assertFalse(isValidPhoneNumber("1234567890"));
});

//normalize spaces

Deno.test("test normalize spaces", () => {
  assertEquals(
    normalizeSpaces("This   is   a   test   string."),
    "This is a test string."
  );
});

//extract numbers

Deno.test("test extract numbers", () => {
  assertEquals(extractNumbers("The prices are 45, 89.99, and 1200."), [
    { value: "45", index: 15 },
    { value: "89.99", index: 19 },
    { value: "1200", index: 30 },
  ]);
});

Deno.test("test extract numbers", () => {
  assertEquals(extractNumbers("The prices are 45, -89.99, and -1200."), [
    { value: "45", index: 15 },
    { value: "-89.99", index: 19 },
    { value: "-1200", index: 31 },
  ]);
});
