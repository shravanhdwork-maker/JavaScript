//basics of java script

//1. variables in java script
var name = "john"; // var is function scoped and can be re-declared and updated
let age = 30; // let is block scoped and can be updated but not re-declared
const pi = 3.14; // const is block scoped and cannot be updated or re-declared

//2. data types in java script
let isStudent = true; // boolean
let score = 85; // number
let decimal = 3.14; // number
let firstName = "Alice"; // string
let hobbies = ["reading", "gaming", "coding"]; // array
let person = { name: "Bob", age: 25 }; // object
let unknown; // undefined
let empty = null; // null
let section = 'a'; // string

//3. Type Conversion
let num = "42"; // string
let convertedNum = Number(num); // converts string to number
let str = 100; // number
let convertedStr = String(str); // converts number to string
let bool = 1; // number
let convertedBool = Boolean(bool); // converts number to boolean (true for non-zero, false for zero)
let invalidNum = "abc"; // string
let convertedInvalidNum = Number(invalidNum); // results in NaN (Not a Number)
let boolStr = "true"; // string
let convertedBoolStr = Boolean(boolStr); // converts non-empty string to true
let emptyStr = ""; // string
let convertedEmptyStr = Boolean(emptyStr); // converts empty string to false
let zeroNum = 0; // number
let convertedZeroNum = Boolean(zeroNum); // converts zero to false

//4. Operators in java script
//Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // addition
let difference = a - b; // subtraction
let product = a * b; // multiplication
let quotient = a / b; // division
let remainder = a % b; // modulus

//Assignment Operators
let c = 20;
c += 5; // equivalent to c = c + 5
c -= 3; // equivalent to c = c - 3
c *= 2; // equivalent to c = c * 2
c /= 4; // equivalent to c = c / 4
c %= 3; // equivalent to c = c % 3

//Comparison Operators
let isEqual = a == b; // equality
let isStrictEqual = a === b; // strict equality (also checks type)
let isNotEqual = a != b; // inequality
let isGreater = a > b; // greater than
let isLess = a < b; // less than
let isGreaterOrEqual = a >= b; // greater than or equal to
let isLessOrEqual = a <= b; // less than or equal to
let isNotStrictEqual = a !== b; // strict inequality (also checks type)

//Logical Operators
let isAdult = age >= 18; // true if age is 18 or older
let hasID = true; // assume the person has an ID

let canEnter = isAdult && hasID; // true if both conditions are true
let canEnterOr = isAdult || hasID; // true if at least one condition is true
let cannotEnter = !isAdult; // true if the person is not an adult

//Bitwise Operators
let x = 5; // in binary: 0101
let y = 3; // in binary: 0011
let andResult = x & y; // bitwise AND (0101 & 0011 = 0001, which is 1 in decimal) 
let orResult = x | y; // bitwise OR (0101 | 0011 = 0111, which is 7 in decimal)
let xorResult = x ^ y; // bitwise XOR (0101 ^ 0011 = 0110, which is 6 in decimal)
let notResult = ~x; // bitwise NOT (~0101 = 1010, which is -6 in decimal)
let leftShift = x << 1; // left shift (0101 << 1 = 1010, which is 10 in decimal)
let rightShift = x >> 1; // right shift (0101 >> 1 = 0010, which is 2 in decimal)

//Special & Miscellaneous Operators
let typeOfName = typeof name; // returns the type of the variable (string)
let instanceOfArray = hobbies instanceof Array; // checks if hobbies is an instance of Array (true)
let ternaryResult = age >= 18 ? "Adult" : "Minor"; // ternary operator (returns "Adult" if age is 18 or older, otherwise returns "Minor")
let optionalChaining = person?.name; // optional chaining (returns "Bob" if person is defined, otherwise returns undefined)
let spreadOperator = [...hobbies]; // spread operator (creates a new array with the same elements as hobbies)

//Comments & Code Style 
// This is a single-line comment
/*
This is a multi-line comment
It can span multiple lines
*/

// Code style best practices
// 1. Use meaningful variable names
// 2. Use camelCase for variable and function names
// 3. Use consistent indentation (e.g., 2 or 4 spaces)
// 4. Avoid global variables
// 5. Use strict mode to catch common coding errors
"use strict"; // enables strict mode for the entire script
// 6. Avoid using var, prefer let and const
// 7. Use semicolons to terminate statements (optional but recommended for consistency)
// 8. Keep lines of code reasonably short (e.g., under 80-100 characters)
// 9. Use comments to explain complex logic or important details
// 10. Avoid deeply nested code, consider refactoring into functions for better readability