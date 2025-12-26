---
title: Math
author: David Zhang aka Hadjshell
order: 14
isOriginal: true
footer: false
editLink: false
---

- Multiplying probabilities will result in precision errors. Take log probabilities to sum up numbers instead of multiplying them.

### Q9. [Palindrome Number](https://leetcode.com/problems/palindrome-number/)

- ```java
  class Solution {
      public boolean isPalindrome(int x) {
          if (x < 0)
              return false;

          long reverse = 0, original = x;

          while (x != 0) {
              int digit = x % 10;
              reverse = reverse * 10 + digit;
              x /= 10;
          }

          return reverse == original;
      }
  }
  ```

### Q66. [Plus One](https://leetcode.com/problems/plus-one/)

- ```java
  class Solution {
      public int[] plusOne(int[] digits) {
          int carry = 1;

          for (int i = digits.length - 1; i >= 0; i--) {
              if (carry == 0)
                  break;

              digits[i] += carry;
              if (digits[i] == 10) {
                  digits[i] = 0;
                  carry = 1;
              }
              else
                  carry = 0;
          }

          if (carry == 1) {
              int[] d = new int[digits.length + 1];

              d[0] = 1;
              for (int i = 0; i < digits.length; i++)
                  d[i + 1] = digits[i];

              return d;
          }
          else
              return digits;
      }
  }
  ```

### :star:Q172. [Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/)

- ```java
  class Solution {
      public int trailingZeroes(int n) {
          int count = 0;

          for (int sum = 0; sum <= n; sum += 5) {
              count += howMany5s(sum);
          }

          return count;
      }

      private int howMany5s(int num) {
          if (num == 0)
              return 0;

          int count = 0;
          while (num % 5 == 0) {
              num /= 5;
              count++;
          }

          return count;
      }
  }
  ```

- ```java
  class Solution {
      public int trailingZeroes(int n) {
          int res = 0;
          for (int d = n; d / 5 > 0; d = d / 5) {
              res += d / 5;
          }
          return res;
      }
  }
  ```

### Q2028. [Find Missing Observations](https://leetcode.com/problems/find-missing-observations/)

- ```java
  class Solution {
      public int[] missingRolls(int[] rolls, int mean, int n) {
          int nSum = mean * (rolls.length + n);
          for (int i : rolls) {
              nSum -= i;
          }
          if (nSum > 6 * n || nSum < n) {
              return new int[0];
          }
          int[] res = new int[n];
          for (int i = 0; i < n; i++) {
              res[i] = nSum / n;
          }
          nSum %= n;
          for (int i = 0; i < nSum; i++) {
              res[i]++;
          }
          return res;
      }
  }
  ```
