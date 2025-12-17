---
title: Bit Manipulation
author: David Zhang aka Hadjshell
order: 15
isOriginal: true
footer: false
editLink: false
---

## 🛠️ Tricks

- ```java
  // 1. 利用或操作 `|` 和空格将英文字符转换为小写
  ('a' | ' ') = 'a'
  ('A' | ' ') = 'a'

  // 2. 利用与操作 `&` 和下划线将英文字符转换为大写
  ('b' & '_') = 'B'
  ('B' & '_') = 'B'

  // 3. 利用异或操作 `^` 和空格进行英文字符大小写互换
  ('d' ^ ' ') = 'D'
  ('D' ^ ' ') = 'd'


  // 4. 不用临时变量交换两个数
  int a = 1, b = 2;
  a ^= b;
  b ^= a;
  a ^= b;
  // 现在 a = 2, b = 1


  // 5. 加一
  int n = 1;
  n = -~n;
  // 现在 n = 2


  // 6. 减一
  int n = 2;
  n = ~-n;
  // 现在 n = 1


  // 7. 判断两个数是否异号
  int x = -1, y = 2;
  boolean f = ((x ^ y) < 0); // true

  int x = 3, y = 2;
  boolean f = ((x ^ y) < 0); // false


  // 8. 当模数 m 是 2 的幂时，x % m 等价于 x & (m - 1)


  // 9. n & (n-1): 作用是消除数字 n 的二进制表示中的最后一个 1


  // 10. a ^ a = 0, xor满足交换律和结合律
  ```

## :bulb:Questions​

### Q67. [Add Binary](https://leetcode.com/problems/add-binary/)

- ```java
  class Solution {
      public String addBinary(String a, String b) {
          char[] n1 = a.toCharArray(), n2 = b.toCharArray();
          int i = n1.length - 1, j = n2.length - 1, carry = 0;
          StringBuilder sb = new StringBuilder();

          while (i >= 0 && j >= 0) {
              int b1 = n1[i] - '0', b2 = n2[j] - '0';
              int sum = b1 + b2 + carry;
              switch (sum) {
                  case 0 -> {
                      sb.append(0);
                      carry = 0;
                  }
                  case 1 -> {
                      sb.append(1);
                      carry = 0;
                  }
                  case 2 -> {
                      sb.append(0);
                      carry = 1;
                  }
                  case 3 -> {
                      sb.append(1);
                      carry = 1;
                  }
              }

              i--;
              j--;
          }

          while (i >= 0) {
              int bit = n1[i] - '0';
              if (bit == 1 && carry == 1) {
                  sb.append(0);
                  carry = 1;
              }
              else {
                  sb.append(bit + carry);
                  carry = 0;
              }
              i--;
          }
          while (j >= 0) {
              int bit = n2[j] - '0';
              if (bit == 1 && carry == 1) {
                  sb.append(0);
                  carry = 1;
              }
              else {
                  sb.append(bit + carry);
                  carry = 0;
              }
              j--;
          }

          if (carry == 1)
              sb.append(1);

          sb.reverse();

          return sb.toString();
      }
  }
  ```

### :star:Q190. [Reverse Bits](https://leetcode.com/problems/reverse-bits/)

- ```java
  class Solution {
      public int reverseBits(int n) {
          n = ((n & 0xffff0000) >>> 16) | ((n & 0x0000ffff) << 16);
          n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
          n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
          n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
          n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);

          return n;
      }
  }
  ```

### Q191. [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)

- ```java
  class Solution {
      public int hammingWeight(int n) {
          int count = 0;

          while (n != 0) {
              n = n & (n - 1);
              count++;
          }

          return count;
      }
  }
  ```

### Q136. [Single Number](https://leetcode.com/problems/single-number/)

- ```java
  class Solution {
      public int singleNumber(int[] nums) {
          int single = 0;

          for (int n : nums)
              single ^= n;

          return single;
      }
  }
  ```

### :star:Q137. [Single Number II](https://leetcode.com/problems/single-number-ii/)

- **模拟三进制**（`00, 01, 10, 00`）

- 如果拓展成五个数，就模拟五进制，观察真值表如何更新

- https://leetcode.com/problems/single-number-ii/solutions/7341072/ternary-number-system-mimic-bit-manipula-difx

- ```java
  class Solution {
      public int singleNumber(int[] nums) {
          int one = 0, two = 0;

          for (int n : nums) {
              one = (one ^ n) & (~two);
              two = (two ^ n) & (~one);
          }

          return one;
      }
  }
  ```

### Q201. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)

- ```java
  class Solution {
      public int rangeBitwiseAnd(int left, int right) {
          int count = 0;

          while (left != right) {
              left >>>= 1;
              right >>>= 1;
              count++;
          }

          return left << count;
      }
  }
  ```

### Q1310. [XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/)

- ```java
  class Solution {
      public int[] xorQueries(int[] arr, int[][] queries) {
          int[] preXOR = new int[arr.length + 1];
          for (int i = 0; i < arr.length; i++) {
              preXOR[i + 1] = arr[i] ^ preXOR[i];
          }
          int[] answer = new int[queries.length];
          for (int i = 0; i < queries.length; i++) {
              answer[i] = preXOR[queries[i][1] + 1] ^ preXOR[queries[i][0]];
          }
          return answer;
      }
  }
  ```

### Q2220. [Minimum Bit Flips to Convert Number](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/)

- ```java
  class Solution {
      public int minBitFlips(int start, int goal) {
          int[] x = toBinaryArray(start ^ goal);
          int flips = 0;
          for (int i = 31; i >= 0; i--) {
              if (x[i] == 1)
                  flips++;
          }
          return flips;
      }

      private int[] toBinaryArray(int n) {
          int[] binaryNumber = new int[32];
          int i = 31;
          while (n != 0) {
              binaryNumber[i--] = n % 2;
              n /= 2;
          }
          return binaryNumber;
      }
  }
  ```

### Q2419. [Longest Subarray With Maximum Bitwise AND](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/)

- ```java
  class Solution {
      public int longestSubarray(int[] nums) {
          int max = 0, len = 0, longest = 0;
          for (int n : nums) {
              max = Math.max(max, n);
          }
          for (int i = 0; i < nums.length; i++) {
              if (nums[i] == max)
                  len++;
              else {
                  longest = Math.max(longest, len);
                  len = 0;
              }
          }
          longest = Math.max(longest, len);
          return longest;
      }
  }
  ```
