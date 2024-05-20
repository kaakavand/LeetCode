function lengthOfLongestSubstring(s: string): number {
  let head = 0;
  let tail = 0;
  let charSet = new Set();
  let maxLength = 0

  while (tail < s.length) {
      if (charSet.has(s[tail])) {
          charSet.delete(s[head]);
          head++;
      } else {
          charSet.add(s[tail]);
          tail++;
          maxLength = Math.max(maxLength, tail - head);
      }
  }



  return maxLength;
};