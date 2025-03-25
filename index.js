function isPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
      if (string[i] !== string[len - 1 - i]) {
          return false;
      }
  }
  return true;
}
    // Get the length of the string
    // Loop through half the string
    // Compare character at start position with character at end position
    // If any don't match, return false
    // If we get through all comparisons, return true

// Export the function
module.exports = isPalindrome;

// Optional: Keep your test cases for local testing
console.log(isPalindrome("abba"));     // true
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("a"));        // true
console.log(isPalindrome("robot"));    // false
console.log(isPalindrome("ab"));       // false