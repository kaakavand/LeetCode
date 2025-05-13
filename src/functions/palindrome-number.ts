// https://leetcode.com/problems/palindrome-number/description/

export function isPalindrome(x: number): boolean {
  const lengthValue = String(x).length;
  const stringX = String(x)

  for (let i = 0; i < lengthValue / 2; i++) {
    if (stringX[i] !== stringX[lengthValue - (i + 1)]) {
      return false;
    }
  }

  return true;
}
