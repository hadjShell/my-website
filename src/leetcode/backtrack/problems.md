---
title: Other Backtracking Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### Q17. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

- ```java
  class Solution {
      static final String[] PHONE_MAP = {"", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};


      public List<String> letterCombinations(String digits) {
          List<String> result = new ArrayList<>();
          StringBuilder path = new StringBuilder();

          backtrack(digits, 0, path, result);

          return result;
      }

      private void backtrack(String digits, int start, StringBuilder path, List<String> result) {
          if (path.length() == digits.length()) {
              result.add(path.toString());
              return;
          }

          char num = digits.charAt(start);
          String letters = PHONE_MAP[num - '1'];
          for (int i = 0; i < letters.length(); i++) {
              path.append(letters.charAt(i));
              backtrack(digits, start + 1, path, result);
              path.setLength(path.length() - 1);
          }
      }
  }
  ```

### :star:Q79. [Word Search](https://leetcode.com/problems/word-search/)

- ```java
  class Solution {
      static final int[][] DIR = {{0, -1}, {0, 1}, {-1, 0}, {1, 0}};
      boolean isExisted = false;

      public boolean exist(char[][] board, String word) {
          int m = board.length, n = board[0].length;
          boolean[] used = new boolean[m * n];

          if (!isDicSufficient(board, word) || word.length() > m * n)
              return false;

          // edge case for single char in board
          if (m == 1 && n == 1) {
              return word.length() == 1 && (board[0][0] == word.charAt(0));
          }

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++)
                  // pruning
                  if (!isExisted && board[i][j] == word.charAt(0)) backtrack(board, i, j, used, 0, word);

          return isExisted;
      }

      private void backtrack(char[][] board, int i, int j, boolean[] used, int start, String word) {
          if (isExisted)
              return;

          if (start == word.length()) {
              isExisted = true;
              return;
          }

          int m = board.length, n = board[0].length;
          if (used[i * n + j] == true || board[i][j] != word.charAt(start))
              return;

          start++;
          used[i * n + j] = true;

          for (int[] d : DIR) {
              int a = i + d[0], b = j + d[1];
              if (a < 0 || a == m || b < 0 || b == n)     continue;

              backtrack(board, a, b, used, start, word);
          }

          used[i * n + j] = false;
          start--;
      }

      private boolean isDicSufficient(char[][] board, String word) {
          Set<Character> dictionary = new HashSet<>();
          int m = board.length, n = board[0].length;

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++)
                  dictionary.add(board[i][j]);

          for (char c : word.toCharArray()) {
              if (!dictionary.contains(c))
                  return false;
          }

          return true;
      }
  }
  ```

### Q93. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)

- ```java
  class Solution {
      public List<String> restoreIpAddresses(String s) {
          List<String> result = new ArrayList<>();

          if (s.length() > 12)
              return result;

          boolean[] dot = new boolean[s.length()];
          Set<Integer> choices = new HashSet<>();

          backtrack(s, dot, 0, choices, result);

          return result;
      }

      private void backtrack(String s, boolean[] dot, int count, Set<Integer> choices, List<String> result) {
          int choice = hash(dot);

          if (choices.contains(choice))
              return;
          else
              choices.add(choice);

          if (count == 3) {
              StringBuilder address = new StringBuilder();
              int start = 0, end = 0;

              for (; end < dot.length; end++) {
                  if (dot[end] == false)  continue;

                  String ip = s.substring(start, end);
                  if (ip.length() > 3 || (ip.length() > 1 && ip.charAt(0) == '0') || Integer.parseInt(ip) > 255)    return;
                  address.append(ip).append('.');

                  start = end;
              }
              String ip = s.substring(start, end);
              if (ip.length() > 3 || (ip.length() > 1 && ip.charAt(0) == '0' || Integer.parseInt(ip) > 255))    return;
              address.append(ip);

              result.add(address.toString());
              return;
          }

          for (int i = 1; i < s.length(); i++) {
              if (dot[i] == true) continue;

              dot[i] = true;
              backtrack(s, dot, count + 1, choices, result);
              dot[i] = false;
          }
      }

      private int hash(boolean[] dot) {
          int val = 0;

          for (int i = 0; i < dot.length; i++) {
              val = val << 1 | (dot[i] == true ? 1 : 0 );
          }

          return val;
      }
  }
  ```

### Q131. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

- ```java
  class Solution {
      public List<List<String>> partition(String s) {
          List<List<String>> result = new ArrayList<>();
          List<String> path = new ArrayList<>();

          backtrack(s, 0, path, result);

          return result;
      }

      private void backtrack(String s, int start, List<String> path, List<List<String>> result) {
          if (start == s.length()) {
              result.add(new ArrayList<>(path));
              return;
          }

          for (int end = start + 1; end <= s.length(); end++) {
              String p = s.substring(start, end);

              if (!isPalin(p))    continue;

              path.add(p);
              backtrack(s, end, path, result);
              path.removeLast();
          }
      }

      private boolean isPalin(String s) {
          for (int i = 0; i < s.length() / 2; i++) {
              if (s.charAt(i) != s.charAt(s.length() - i - 1))
                  return false;
          }

          return true;
      }
  }
  ```

### :star:Q491. [Non-decreasing Subsequences](https://leetcode.com/problems/non-decreasing-subsequences/)

- The problem can be solved just by thinking it as a "take - don't take recursion". Furthermore, **we can avoid using `set`** to track duplicates by checking just one case.
  First, we take the element and do backtrack. Before going to the "don't take" case, we can make a simple **_check if the current number is equal to the last number of our temporary answer array_**. If that is the case, we will get repeated answers if we go down this path. So, we don't recurse down if that is the case.

  **_Time Complexity_**: Each element will have two options. Either it's chosen, or it's not. So, the time complexity will be $O(2^n)$ in the worst case for sorted arrays where all the elements are considered. Most of the time it will be less than that as we get to prune early

  > Idea to avoid duplicates in this post -https://leetcode.com/problems/non-decreasing-subsequences/discussion/comments/1765599

- ```java
  class Solution {
      public List<List<Integer>> findSubsequences(int[] nums) {
          List<List<Integer>> result = new ArrayList<>();
          List<Integer> path = new ArrayList<>();

          backtrack(nums, 0, path, result);

          return result;
      }

      private void backtrack(int[] nums, int start, List<Integer> path, List<List<Integer>> result) {
          if (start == nums.length) {
              if (path.size() >= 2)
                  result.add(new ArrayList<>(path));
              return;
          }

          // ball viewpoint

          // into bin
          if (path.size() == 0 || nums[start] >= path.getLast()) {
              path.add(nums[start]);
              backtrack(nums, start + 1, path, result);
              path.removeLast();
          }

          // not into bin
          if (path.size() == 0 || nums[start] != path.getLast())
              backtrack(nums, start + 1, path, result);
      }
  }
  ```

### :star:Q698. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

- [Solution](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/7462220/backtracking-with-divide-and-conquer-and-u5vl)

- 球视角一：球必须进入盒子，从 k 个盒子里选一个进入

  - 复杂度 $O(k^n)$，注意是指数级不是阶乘级，因为是球视角

  ```java
  class Solution {
      boolean canPart = false;

      public boolean canPartitionKSubsets(int[] nums, int k) {
          int[] buckets = new int[k];
          int target = target(nums, k);

          if (target == -1)
              return false;

          backtrack(nums, buckets, 0, target);

          return canPart;
      }

      // 球视角
      private void backtrack(int[] nums, int[] buckets, int start_nums, int target) {
          if (canPart)
              return;

          if (start_nums == nums.length) {
              for (int i = 0; i < buckets.length; i++) {
                  if (target != buckets[i])
                      return;
              }

              canPart = true;
              return;
          }

          for (int i = 0; i < buckets.length; i++) {
              if (buckets[i] + nums[start_nums] > target)
                  continue;

              if (i > 0) {
                  boolean isSame = false;

                  for (int j = i - 1; j >= 0; j--) {
                      if (buckets[i] == buckets[j]) {
                          isSame = true;
                          break;
                      }
                  }

                  if (isSame) continue;
              }

              buckets[i] += nums[start_nums];
              backtrack(nums, buckets, start_nums + 1, target);
              buckets[i] -= nums[start_nums];
          }
      }

      private int target(int[] nums, int k) {
          int sum = 0;
          for (int n : nums)
              sum += n;

          return sum % k == 0 ? sum / k : -1;
      }
  }
  ```

- 拆分问题后的球视角

  - 复杂度 $O(k*2^n)$

- ```java
  class Solution {
      boolean canPart = false;

      public boolean canPartitionKSubsets(int[] nums, int k) {
          int[] buckets = new int[k];
          boolean[] used = new boolean[nums.length];
          Set<Integer> badChoices = new HashSet<>();

          int target = target(nums, k);

          if (target == -1)
              return false;

          backtrack(nums, buckets, used, 0, 0, target, badChoices);

          return canPart;
      }

      // 球视角
      private void backtrack(int[] nums, int[] buckets, boolean[] used, int curBucket, int start, int target, Set<Integer> badChoices) {
          if (canPart)
              return;

          if (curBucket == buckets.length) {
              canPart = true;
              return;
          }

          if (buckets[curBucket] == target) {
              int sumTree = hash(used);

              if (!badChoices.contains(sumTree))
                  backtrack(nums, buckets, used, curBucket + 1, 0, target, badChoices);

              if (!canPart)
                  badChoices.add(sumTree);

              return;
          }

          if (buckets[curBucket] > target || start == nums.length)
              return;

          if (used[start])
              backtrack(nums, buckets, used, curBucket, start + 1, target, badChoices);
          else {
              // 不进入桶
              backtrack(nums, buckets, used, curBucket, start + 1, target, badChoices);

              // 入桶
              used[start] = true;
              buckets[curBucket] += nums[start];
              backtrack(nums, buckets, used, curBucket, start + 1, target, badChoices);
              buckets[curBucket] -= nums[start];
              used[start] = false;
          }
      }

      private int hash(boolean[] used) {
          int val = 0;

          for (boolean u : used)
              val = u == true ? val << 1 | 1 : val << 1 | 0;

          return val;
      }

      private int target(int[] nums, int k) {
          int sum = 0;
          for (int n : nums)
              sum += n;

          return sum % k == 0 ? sum / k : -1;
      }
  }
  ```

### Q967. [Numbers With Same Consecutive Differences](https://leetcode.com/problems/numbers-with-same-consecutive-differences/)

- ```java
  class Solution {
      public int[] numsSameConsecDiff(int n, int k) {
          List<Integer> result = new ArrayList<>();

          backtrack(0, k, n, 0, result);

          return result.stream().mapToInt(i -> i).toArray();
      }

      private void backtrack(int length, int diff, int targetLength, int path, List<Integer> result) {
          if (length == targetLength) {
              result.add(path);
              return;
          }

          for (int digit = 0; digit <= 9; digit++) {
              if (length == 0 && digit == 0)  continue;

              int lastDigit = path % 10;
              if (length > 0 && Math.abs(digit - lastDigit) != diff)  continue;

              path = path * 10 + digit;
              backtrack(length + 1, diff, targetLength, path, result);
              path /= 10;
          }
      }
  }
  ```

### Q980. [Unique Paths III](https://leetcode.com/problems/unique-paths-iii/)

- ```java
  class Solution {
      static final int[][] DIR = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
      int count = 0;

      public int uniquePathsIII(int[][] grid) {
          int m = grid.length, n = grid[0].length;
          boolean[][] visited = new boolean[m][n];
          int empty = 0;
          int[] start = new int[2], end = new int[2];

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  if (grid[i][j] == 0)    empty++;
                  if (grid[i][j] == 1) {
                      start[0] = i;
                      start[1] = j;
                  }
                  if (grid[i][j] == 2) {
                      end[0] = i;
                      end[1] = j;
                  }
              }

          backtrack(start[0], start[1], grid, end, visited, empty);

          return count;
      }

      private void backtrack(int i, int j, int[][] grid, int[] end, boolean[][] visited, int empty) {
          if (i == end[0] && j == end[1]) {
              if (empty == -1)
                  count++;
              return;
          }

          int m = grid.length, n = grid[0].length;
          for (int[] d : DIR) {
              int a = i + d[0], b = j + d[1];

              if (a < 0 || a >= m || b < 0 || b >= n)   continue;
              if (grid[a][b] == -1 || visited[a][b])   continue;

              visited[i][j] = true;
              backtrack(a, b, grid, end, visited, empty - 1);
              visited[i][j] = false;
          }
      }
  }
  ```
