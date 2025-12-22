---
title: Left and Right Two Pointer Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q11. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

- The problem is to find a greater height for smaller width during we scan the array

- ```java
  class Solution {
      public int maxArea(int[] height) {
          int i = 0, j = height.length - 1, max = 0;
          while (i < j) {
              int h = Math.min(height[i], height[j]);
              int v = (j - i) * h;
              if (max < v)    max = v;
              while (i < j && height[i] <= h)     i++;
              while (i < j && height[j] <= h)     j--;
          }
          return max;
      }
  }
  ```

### Q125. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

- ```java
  class Solution {
      public boolean isPalindrome(String s) {
          char[] str = s.toCharArray();
          int start = 0, end = str.length - 1;
          while (start < end) {
              while (start < str.length && !isValidChar(str[start]))
                  start++;
              while (end >= 0 && !isValidChar(str[end]))
                  end--;
              if (start > end)
                  return true;
              if (toLowerCase(str[start]) == toLowerCase(str[end])) {
                  start++;
                  end--;
              }
              else
                  return false;
          }
          return true;
      }

      private boolean isValidChar(char c) {
          return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
      }

      private char toLowerCase(char c) {
          if (c >= 'A' && c <= 'Z')
              c += 32;
          return c;
      }
  }
  ```

### Q345. [Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)

- ```java
  class Solution {
      public String reverseVowels(String s) {
          char[] c = s.toCharArray();
          int h = 0, t = c.length - 1;
          while (h < t) {
              while (h < c.length && !isVowel(c[h]))
                  h++;
              while (t >= 0 && !isVowel(c[t]))
                  t--;
              if (h < t) {
                  char tmp = c[h];
                  c[h] = c[t];
                  c[t] = tmp;
                  h++;
                  t--;
              }
          }
          return new String(c);
      }

      private boolean isVowel(char c) {
          return switch (c) {
              case 'a', 'e', 'i', 'o', 'u',
                   'A', 'E', 'I', 'O', 'U' -> true;
              default -> false;
          };
      }
  }
  ```
