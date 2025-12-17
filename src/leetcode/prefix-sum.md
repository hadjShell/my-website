---
title: Prefix Sum
author: David Zhang aka Hadjshell
order: 8
isOriginal: true
footer: false
editLink: false
---

## 🧠 Mindset

- **Sum of previous elements and itself** for each slot

  - Extended to **state of previous elements plus the current element (状态的叠加)**

- **Subarray/Range sum** problems

  - Compute the sum of elements between two indices **frequently**

  - **Find** or **count** the number of subarrays that add upto a specific value

- **区间查询**

## 🛠️ Tricks

- **Dummy 0**
- Help of **hash table**

## :bulb:Questions

### Q303. [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

- ```java
  class NumArray {
      private int[] prefixSum;

      public NumArray(int[] nums) {
          prefixSum = new int[nums.length + 1];
          prefixSum[0] = 0;
          for (int i = 0; i < nums.length; i++) {
              prefixSum[i + 1] += nums[i] + prefixSum[i];
          }
      }

      public int sumRange(int left, int right) {
          return prefixSum[right + 1] - prefixSum[left];
      }
  }
  ```

### :star:Q304. [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)

- ```java
  class NumMatrix {
      // each element representing the sum of the rectangle in the matrix whose
      // upper left corner is [0][0]
      // lower right corner is current position
      int[][] preSum;

      public NumMatrix(int[][] matrix) {
          int m = matrix.length;
          int n = matrix[0].length;
          preSum = new int[m + 1][n + 1];
          for (int i = 1; i <= m; i++)
              for (int j = 1; j <= n; j++) {
                  preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1]
                              + matrix[i - 1][j - 1] - preSum[i - 1][j - 1];
              }
      }

      public int sumRegion(int row1, int col1, int row2, int col2) {
          return preSum[row2 + 1][col2 + 1] - preSum[row1][col2 + 1]
                  - preSum[row2 + 1][col1] + preSum[row1][col1];
      }
  }
  ```

### Q1314. [Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/)

- Variant of Q304

- ```java
  class Solution {
      public int[][] matrixBlockSum(int[][] matrix, int k) {
          int m = matrix.length;
          int n = matrix[0].length;
          int[][] preSum = new int[m + 1][n + 1];
          for (int i = 1; i <= m; i++)
              for (int j = 1; j <= n; j++) {
                  preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1]
                              + matrix[i - 1][j - 1] - preSum[i - 1][j - 1];
          }

          int[][] answer = new int[m][n];
          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  int row1 = i - k < 0 ? 0 : i - k;
                  int col1 = j - k < 0 ? 0 : j - k;
                  int row2 = i + k >= m ? m - 1 : i + k;
                  int col2 = j + k >= n ? n - 1 : j + k;
                  answer[i][j] = preSum[row2 + 1][col2 + 1] - preSum[row1][col2 + 1]
                  - preSum[row2 + 1][col1] + preSum[row1][col1];
          }
          return answer;
      }
  }
  ```

### :star:Q238. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

- Prefix and suffix product

- ```java
  class Solution {
      public int[] productExceptSelf(int[] nums) {
          int[] ans = new int[nums.length];
          ans[0] = nums[0];
          for (int i = 1; i < ans.length; i++) {
              ans[i] = ans[i - 1] * nums[i];
          }
          int product = 1;
          for (int i = ans.length - 1; i > 0; i--) {
              ans[i] = ans[i - 1] * product;
              product *= nums[i];
          }
          ans[0] = product;
          return ans;
      }
  }
  ```

### Q724. [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)

- ```java
  class Solution {
      public int pivotIndex(int[] nums) {
          int[] preSum = new int[nums.length + 1];
          for (int i = 1; i < preSum.length; i++) {
              preSum[i] = preSum[i - 1] + nums[i - 1];
          }
          int sum = preSum[preSum.length - 1];
          for (int i = 1; i < preSum.length; i++) {
              if (preSum[i - 1] == sum - preSum[i])
                  return i - 1;
          }
          return -1;
      }
  }
  ```

### Q1732. [Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/)

- ```java
  class Solution {
      public int largestAltitude(int[] gain) {
          int[] preSum = new int[gain.length + 1];
          int high = 0;
          for (int i = 1; i < preSum.length; i++) {
              preSum[i] = preSum[i - 1] + gain[i - 1];
              high = high < preSum[i] ? preSum[i] : high;
          }
          return high;
      }
  }
  ```

## :bulb:With Hashtable

### :star:Q525. [Contiguous Array](https://leetcode.com/problems/contiguous-array/)

- ```java
  class Solution {
      public int findMaxLength(int[] nums) {
          Map<Integer, Integer> preSum = new HashMap<>();
          preSum.put(0, 0);
          int sum = 0, maxLen = 0;
          for (int i = 1; i <= nums.length; i++) {
              sum += (nums[i - 1] == 0 ? -1 : 1);
              if (preSum.containsKey(sum)) {
                  int len = i - preSum.get(sum);
                  maxLen = Math.max(len, maxLen);
              }
              else
                  preSum.put(sum, i);
          }
          return maxLen;
      }
  }
  ```

### Q523. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)

- ```java
  class Solution {
      public boolean checkSubarraySum(int[] nums, int k) {
          Map<Integer, Integer> preSum = new HashMap<>();
          preSum.put(0, 0);
          int sum = 0;
          for (int i = 1; i <= nums.length; i++) {
              sum = (sum + nums[i - 1]) % k;
              if (preSum.containsKey(sum)) {
                  if (i - preSum.get(sum) > 1)
                      return true;
              }
              else
                  preSum.put(sum, i);
          }
          return false;
      }
  }

  // p[b] - p[a] = q * k
  // mk + mod1 - nk - mod2 = qk
  // mod1 - mod2 = nk = 0
  // mod1, mod2 -> [0, k)
  ```

### Q560. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

- ```java
  class Solution {
      public int subarraySum(int[] nums, int k) {
          Map<Integer, Integer> prefixSumCount = new HashMap<>();
          int sum = 0, count = 0;

          prefixSumCount.put(0, 1);
          for (int n : nums) {
              sum += n;

              if (prefixSumCount.containsKey(sum - k))
                  count += prefixSumCount.get(sum - k);

              prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
          }

          return count;
      }
  }
  ```

### Q974. [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)

- ```java
  class Solution {
      public int subarraysDivByK(int[] nums, int k) {
          int[] preSum = new int[k];
          preSum[0] = 1;
          int sum = 0, cnt = 0;
          for (int i = 1; i <= nums.length; i++) {
              sum = (sum + nums[i - 1]) % k;
              sum = sum < 0 ? sum + k : sum;
              if (preSum[sum] != 0)
                  cnt += preSum[sum];
              preSum[sum]++;
          }
          return cnt;
      }
  }

  // (preSum[b] - preSum[a]) % k = 0
  // pk + a - qk - b = nk
  // a - b = ik
  // a, b -> (-k, k)
  // a - b -> (-2k, 2k)
  ```

### :star:Q1124. [Longest Well-Performing Interval](https://leetcode.com/problems/longest-well-performing-interval/)

- Key is how to reduce the condition `preSum[b] > preSum[a]` so that we can locate the element in the hashmap

- ```java
  class Solution {
      public int longestWPI(int[] hours) {
          Map<Integer, Integer> preSum = new HashMap<>();
          int largest = 0, sum = 0;
          for (int i = 0; i < hours.length; i++) {
              sum += (hours[i] > 8 ? 1 : -1);
            	// in hours[0:i], more 1s than -1s
              if (sum > 0)
                  largest = Math.max(largest, i + 1);
            	// get the index j where sum of hours[0:j] is sum - 1, so that sum of hours[j+1:i] is 1
              else if (preSum.containsKey(sum - 1))
                  largest = Math.max(largest, i - preSum.get(sum - 1));
              if (!preSum.containsKey(sum))
                  preSum.put(sum, i);
          }
          return largest;
      }
  }
  ```

### :heart:Q1371. [Find the Longest Substring Containing Vowels in Even Counts](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)

- ```java
  class Solution {
      public int findTheLongestSubstring(String s) {
          int isOdd = 0, maxLen = 0;
          Map<Integer, Integer> stateToIndexMap = new HashMap<>();

          stateToIndexMap.put(isOdd, -1);
          for (int i = 0; i < s.length(); i++) {
              char c = s.charAt(i);

              isOdd ^= switch (c) {
                  case 'a'    -> 1;
                  case 'e'    -> 2;
                  case 'i'    -> 4;
                  case 'o'    -> 8;
                  case 'u'    -> 16;
                  default     -> 0;
              };

              if (stateToIndexMap.containsKey(isOdd)) {
                  int len = i - stateToIndexMap.get(isOdd);
                  maxLen = Math.max(maxLen, len);
              }
              else
                  stateToIndexMap.put(isOdd, i);
          }

          return maxLen;
      }
  }
  ```
