---
title: Subsequence Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

::: important Problem domain

Ask for a valid **longest subsequence**.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

:::

- In general, time complexity would be $O(n^2)$ with DP; if using backtracking, it would be at least $O(2^n)$ because we have to enumerate all subsequences.

- One-dimensional DP

  - `memo[i]` stores the answer of orginal question with the input reduces to the subarray `arr[i...]` of original input array `arr`.
  - E.g., [Q300](#heartq300-longest-increasing-subsequence), [Q53](#starq53-maximum-subarray).

- Two-dimensional DP

  - **Two strings or arrays input**: `memo[i][j]` stores the answer of orginal question with the inputs reduce to the subarrays `arr1[i...]` and `arr2[j...]`.
  - E.g., [Q1143](#q1143-longest-common-subsequence), [Q72](#starq72-edit-distance).
  - **One string or array input**: `memo[i][j]` stores the answer of orginal question with the input reduces to the subarray `arr[i..j]`.
  - E.g., [Q516](#q516-longest-palindromic-subsequence), [Q1312](#q1312-minimum-insertion-steps-to-make-a-string-palindrome).

---

### :star:Q53. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

- ```java
  class Solution {
      public int maxSubArray(int[] nums) {
          // max subarray ending at index i
          int memo = nums[0], max = nums[0];
          for (int i = 1; i < nums.length; i++) {
              if (memo < 0)
                  memo = nums[i];
              else
                  memo += nums[i];
              max = Math.max(max, memo);
          }
          return max;
      }
  }
  ```

### :star:Q72. [Edit Distance](https://leetcode.com/problems/edit-distance/)

- ```java
  class Solution {
      public int minDistance(String word1, String word2) {
          Integer[][] memo = new Integer[word1.length() + 1][word2.length() + 1];

          return dp(word1, 0, word2, 0, memo);
      }

      private int dp(String word1, int i, String word2, int j, Integer[][] memo) {
          if (i == word1.length() && j == word2.length())
              return 0;

          if (memo[i][j] != null)
              return memo[i][j];

          int step = Integer.MAX_VALUE;
          // if i reach end not j, insert
          if (i == word1.length())
              step = dp(word1, i, word2, j + 1, memo) + 1;
          // if j reach end not i, delete
          else if (j == word2.length())
              step = dp(word1, i + 1, word2, j, memo) + 1;
          // same char
          else if (word1.charAt(i) == word2.charAt(j))
              step = dp(word1, i + 1, word2, j + 1, memo);
          else {
              // insert
              step = Math.min(step, dp(word1, i, word2, j + 1, memo) + 1);
              // delete
              step = Math.min(step, dp(word1, i + 1, word2, j, memo) + 1);
              // replace
              step = Math.min(step, dp(word1, i + 1, word2, j + 1, memo) + 1);
          }
          memo[i][j] = step;

          return memo[i][j];
      }
  }
  ```

### :star:Q115. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)

- **球盒模型**

  ```java
  class Solution {
      public int numDistinct(String s, String t) {
          Integer[][] memo = new Integer[s.length()][t.length()];

          return dp(s, 0, t, 0, memo);
      }

      private int dp(String s, int i, String t, int j, Integer[][] memo) {
          if (j == t.length())
              return 1;

          if (t.length() - j > s.length() - i)
              return 0;

          if (memo[i][j] != null)
              return memo[i][j];

          int count = 0;
          if (t.charAt(j) == s.charAt(i))
              count += dp(s, i + 1, t, j + 1, memo) + dp(s, i + 1, t, j, memo);
          else
              count += dp(s, i + 1, t, j, memo);
          memo[i][j] = count;

          return memo[i][j];
      }
  }
  ```

### :heart:Q300. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

- ```java
  // O(n^2)
  // DP
  class Solution {
      public int lengthOfLIS(int[] nums) {
          int[] memo = new int[nums.length];
          int max = 1;

          for (int i = 0; i < memo.length; i++)
              max = Math.max(max, dp(nums, i, memo));

          return max;
      }

      private int dp(int[] nums, int i, int[] memo) {
          if (i == nums.length - 1)
              return 1;

          if (memo[i] != 0)
              return memo[i];

          int max = 1;
          for (int k = i + 1; k < nums.length; k++) {
              if (nums[i] >= nums[k])     continue;

              max = Math.max(max, dp(nums, k, memo) + 1);
          }
          memo[i] = max;

          return memo[i];
      }
  }
  ```

- ```java
  // O(NlogN)
  // Spider Card game, binary search
  class Solution {
      public int lengthOfLIS(int[] nums) {
          List<Integer> l = new ArrayList<>();
          for (int n : nums) {
              int insert = Collections.binarySearch(l, n);
              if (insert < 0) {
                  insert = -1 * insert - 1;
                  if (insert == l.size())
                      l.add(n);
                  else
                      l.set(insert, n);
              }
          }
          return l.size();
      }
  }
  ```

### :star:Q354. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)

- Variation of Q300.

- ```java
  /**
   * 354. Russian Doll Envelopes
   *
   * Optimal strategy:
   * - Sort by width asc; for equal widths, height desc.
   * - Then find LIS length on heights (strictly increasing) via patience sorting (O(n log n)).
   */
  class Solution {

      // Standard optimal implementation
      public int maxEnvelopesUltra(int[][] envelopes) {
          int n = envelopes.length;
          if (n == 0) return 0;

          // Sort: width asc, height desc (to prevent chaining equal widths)
          Arrays.sort(envelopes, (a, b) -> {
              if (a[0] != b[0]) return a[0] - b[0];
              return b[1] - a[1]; // height desc when widths equal
          });

          // Extract heights
          int[] tails = new int[n];
          int len = 0;

          for (int[] e : envelopes) {
              int h = e[1];

              // lower_bound on tails[0..len): first index with tails[idx] >= h
              int idx = Arrays.binarySearch(tails, 0, len, h);
              if (idx < 0) idx = -idx - 1; // insertion point

              tails[idx] = h;
              if (idx == len) len++;
          }
          return len;
      }

      /**
       * Near-100% optimized variant:
       * - Uses primitive long key sorting (dual-pivot quicksort on long[] is faster than Comparator on object arrays).
       * - Encodes sort key as: key = ((long)w << 32) | (Integer.MAX_VALUE - h).
       *   This sorts by w asc; for equal w, by (MAX-h) asc i.e., h desc.
       */
      public int maxEnvelopes(int[][] envelopes) {
          int n = envelopes.length;
          if (n == 0) return 0;

          long[] keys = new long[n];
          for (int i = 0; i < n; i++) {
              int w = envelopes[i][0], h = envelopes[i][1];
              keys[i] = (((long) w) << 32) | (Integer.MAX_VALUE - h);
          }
          Arrays.sort(keys);

          int[] tails = new int[n];
          int len = 0;

          for (long key : keys) {
              // Recover height: h = Integer.MAX_VALUE - low32bits
              int h = Integer.MAX_VALUE - (int) (key & 0xffffffffL);

              int idx = Arrays.binarySearch(tails, 0, len, h);
              if (idx < 0) idx = -idx - 1;
              tails[idx] = h;
              if (idx == len) len++;
          }
          return len;
      }

      // O(n^2) DP fallback (simple, for small n)
      // dp[i] = longest chain ending at i (after sorting by width asc, height desc)
      public int maxEnvelopesDP(int[][] envelopes) {
          int n = envelopes.length;
          if (n == 0) return 0;

          Arrays.sort(envelopes, (a, b) -> {
              if (a[0] != b[0]) return a[0] - b[0];
              return b[1] - a[1];
          });

          int[] dp = new int[n];
          Arrays.fill(dp, 1);
          int ans = 1;

          for (int i = 0; i < n; i++) {
              for (int j = 0; j < i; j++) {
                  if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
                      dp[i] = Math.max(dp[i], dp[j] + 1);
                  }
              }
              ans = Math.max(ans, dp[i]);
          }
          return ans;
      }
  }
  ```

### Q516. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

- ```java
  class Solution {
      public int longestPalindromeSubseq(String s) {
          Integer[][] memo = new Integer[s.length()][s.length()];

          return dp(s, 0, s.length() - 1, memo);
      }

      private int dp(String s, int i, int j, Integer[][] memo) {
          if (memo[i][j] != null)
              return memo[i][j];

          if (i == j) {
              memo[i][j] = 1;
              return 1;
          }

          if (j < i)
              return 0;

          int len = 0;
          if (s.charAt(i) == s.charAt(j))
              len = 2 + dp(s, i + 1, j - 1, memo);
          else
              len = Math.max(dp(s, i + 1, j, memo), dp(s, i, j - 1, memo));
          memo[i][j] = len;

          return memo[i][j];
      }
  }
  ```

### Q583. [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)

- ```java
  class Solution {
      public int minDistance(String word1, String word2) {
          Integer[][] memo = new Integer[word1.length() + 1][word2.length() + 1];

          return dp(word1, 0, word2, 0, memo);
      }

      private int dp(String s1, int i, String s2, int j, Integer[][] memo) {
          if (memo[i][j] != null)
              return memo[i][j];

          if (i == s1.length()) {
              memo[i][j] = s2.length() - j;
              return memo[i][j];
          }

          if (j == s2.length()) {
              memo[i][j] = s1.length() - i;
              return memo[i][j];
          }

          int step = 0;
          if (s1.charAt(i) == s2.charAt(j))
              step = dp(s1, i + 1, s2, j + 1, memo);
          else
              step = Math.min(dp(s1, i + 1, s2, j, memo),
                              dp(s1, i, s2, j + 1, memo)) + 1;
          memo[i][j] = step;

          return memo[i][j];
      }
  }
  ```

### Q712. [Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)

- ```java
  class Solution {
      public int minimumDeleteSum(String word1, String word2) {
          Integer[][] memo = new Integer[word1.length() + 1][word2.length() + 1];

          return dp(word1, 0, word2, 0, memo);
      }

      private int dp(String s1, int i, String s2, int j, Integer[][] memo) {
          if (memo[i][j] != null)
              return memo[i][j];

          if (i == s1.length() && j == s2.length()) {
              memo[i][j] = 0;
              return 0;
          }

          if (i == s1.length()) {
              memo[i][j] = (int) s2.charAt(j) + dp(s1, i, s2, j + 1, memo);
              return memo[i][j];
          }

          if (j == s2.length()) {
              memo[i][j] = (int) s1.charAt(i) + dp(s1, i + 1, s2, j, memo);
              return memo[i][j];
          }

          int sum = 0;
          if (s1.charAt(i) == s2.charAt(j))
              sum = dp(s1, i + 1, s2, j + 1, memo);
          else
              sum = Math.min(dp(s1, i + 1, s2, j, memo) + (int) s1.charAt(i),
                              dp(s1, i, s2, j + 1, memo) + (int) s2.charAt(j));
          memo[i][j] = sum;

          return memo[i][j];
      }
  }
  ```

### Q1143. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)

- ```java
  class Solution {
      public int longestCommonSubsequence(String text1, String text2) {
          Integer[][] memo = new Integer[text1.length() + 1][text2.length() + 1];

          return dp(text1, 0, text2, 0, memo);
      }

      private int dp(String s1, int i, String s2, int j, Integer[][] memo) {
          if (memo[i][j] != null)
              return memo[i][j];

          if (i == s1.length() || j == s2.length()) {
              memo[i][j] = 0;
              return 0;
          }

          int len = 0;
          if (s1.charAt(i) == s2.charAt(j))
              len = 1 + dp(s1, i + 1, s2, j + 1, memo);
          else
              len = Math.max(dp(s1, i + 1, s2, j, memo),
                              dp(s1, i, s2, j + 1, memo));
          memo[i][j] = len;

          return memo[i][j];
      }
  }
  ```

### Q1312. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

- ```java
  class Solution {
      public int minInsertions(String s) {
          Integer[][] memo = new Integer[s.length()][s.length()];

          return dp(s, 0, s.length() - 1, memo);
      }

      private int dp(String s, int i, int j, Integer[][] memo) {
          if (memo[i][j] != null)
              return memo[i][j];

          if (i == j) {
              memo[i][j] = 0;
              return 0;
          }

          if (i > j)
              return 0;

          int insertion = 0;
          if (s.charAt(i) == s.charAt(j))
              insertion = dp(s, i + 1, j - 1, memo);
          else
              insertion = Math.min(dp(s, i + 1, j, memo), dp(s, i, j - 1, memo)) + 1;
          memo[i][j] = insertion;

          return memo[i][j];
      }
  }
  ```
