---
title: Other DP Problems
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### :heart:Q10. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)

> Pass on the first-try, beat 100%!!!

```java
class Solution {
    public boolean isMatch(String s, String p) {
        // does s[i...] match p[j...]
        Boolean[][] memo = new Boolean[s.length() + 1][p.length() + 1];
        p = slim(p);

        return dp(s, 0, p, 0, memo);
    }

    private boolean dp(String s, int i, String p, int j, Boolean[][] memo) {
        // non-empty string match empty pattern
        if (i < s.length() && j == p.length())
            return false;

        // empty string match empty pattern
        if (i == s.length() && j == p.length())
            return true;

        // empty string match non-empty pattern
        if (i == s.length() && j < p.length()) {
            if ((p.length() - j) % 2 != 0)
                return false;
            else {
                char one = p.charAt(j), two = p.charAt(j + 1);
                boolean isMatched = false;
                if (one != '*' && two == '*')
                    isMatched = dp(s, i, p, j + 2, memo);
                else
                    isMatched = false;
                memo[i][j] = isMatched;

                return memo[i][j];
            }
        }

        // "a": "a", ".", "a*", ".*"
        boolean isMatched = false;
        char required = s.charAt(i);
        // "-" represents no char
        char one = p.charAt(j), two = j + 1 < p.length() ? p.charAt(j + 1) : '-';

        if (two == '-') {
            if (one == required || one == '.')
                isMatched = dp(s, i + 1, p, j + 1, memo);
            else
                isMatched = false;
        }
        else {
            // "a": "a", "."
            if ((one == required && two != '*') || (one == '.' && two != '*'))
                isMatched = dp(s, i + 1, p, j + 1, memo);
            // "a": "a*", ".*"
            else if ((one == required && two == '*') || (one == '.' && two == '*'))
                isMatched = dp(s, i + 1, p, j + 2, memo) || dp(s, i + 1, p, j, memo) || dp(s, i, p, j + 2, memo);
            // "a": "b*"
            else if ((one != required && Character.isLowerCase(one)) && two == '*')
                isMatched = dp(s, i, p, j + 2, memo);
            else
                isMatched = false;
        }

        memo[i][j] = isMatched;

        return memo[i][j];
    }

    private String slim(String pattern) {
        int i = 0, j = 1, len = pattern.length();
        char[] chars = pattern.toCharArray();

        while (i < len && j < len && i + 2 < len && j + 2 < len) {
            // "a*a*" -> "a*"
            // ".*.*" -> ".*"
            if ((Character.isLowerCase(pattern.charAt(i)) || pattern.charAt(i) == '.') &&
                pattern.charAt(i + 2) == pattern.charAt(i) &&
                pattern.charAt(j) == '*' &&
                pattern.charAt(j + 2) == '*') {
                    chars[i] = ' ';
                    chars[j] = ' ';
                    i += 2;
                    j += 2;
                }
            else {
                i++;
                j++;
            }
        }

        StringBuilder sb = new StringBuilder();
        for (char c : chars) {
            if (c != ' ')   sb.append(c);
        }

        return sb.toString();
    }
}
```

### Q139. [Word Break](https://leetcode.com/problems/word-break/)

- ```java
  class Solution {
      public boolean wordBreak(String s, List<String> wordDict) {
          Boolean[] memo = new Boolean[s.length()];

          return dp(s, wordDict, 0, memo);
      }

      private boolean dp(String s, List<String> words, int i, Boolean[] memo) {
          if (i == s.length())
              return true;

          if (memo[i] != null)
              return memo[i];

          boolean isBreakable = false;
          for (String word : words) {
              if (word.length() > s.length() - i || !word.equals(s.substring(i, i + word.length())))
                  continue;

              isBreakable = isBreakable || dp(s, words, i + word.length(), memo);

              if (isBreakable)    break;
          }
          memo[i] = isBreakable;

          return memo[i];
      }
  }
  ```

### Q140. [Word Break II](https://leetcode.com/problems/word-break-ii/)

- ```java
  class Solution {
      public List<String> wordBreak(String s, List<String> wordDict) {
          List<List<Integer>>[] memo = new List[s.length() + 1];
          List<List<Integer>> spaces = dp(s, wordDict, 0, memo);
          List<String> result = new ArrayList<>();
          char[] chars = s.toCharArray();

          for (List<Integer> space : spaces) {
              int i = 0, j = space.size() - 2;
              StringBuilder sb = new StringBuilder();

              for (; i < chars.length; i++) {
                  if (i == space.get(j)) {
                      sb.append(' ');
                      j--;
                  }
                  sb.append(chars[i]);
              }

              result.add(sb.toString());
          }

          return result;
      }

      private List<List<Integer>> dp(String s, List<String> words, int i, List[] memo) {
          if (memo[i] != null)
              return memo[i];

          if (i == s.length()) {
              List<List<Integer>> result = new ArrayList<>();
              List<Integer> seq = new ArrayList<>();
              seq.add(i);
              result.add(seq);
              memo[i] = result;

              return memo[i];
          }

          List<List<Integer>> seqs = new ArrayList<>();
          for (String word : words) {
              if (word.length() > s.length() - i || !word.equals(s.substring(i, i + word.length())))
                  continue;

              List<List<Integer>> next = dp(s, words, i + word.length(), memo);

              if (next.size() != 0) {
                  for (List<Integer> l : next) {
                      List<Integer> seq = new ArrayList<>(l);
                      seq.add(i);
                      seqs.add(seq);
                  }
              }
          }
          memo[i] = seqs;

          return memo[i];
      }
  }
  ```

### :heart:Q174. [Dungeon Game](https://leetcode.com/problems/dungeon-game/)

- [Solution](https://leetcode.com/problems/dungeon-game/solutions/7509258/2d-dp-reverse-thinking-from-end-to-start-cwu1)

- ```java
  class Solution {
      public int calculateMinimumHP(int[][] dungeon) {
          int m = dungeon.length, n = dungeon[0].length;
          // memo[i][j]: minimum health required, starting from (i, j), leaving the bottom right with positive health
          Integer[][] memo = new Integer[m][n];

          return dp(dungeon, 0, 0, memo);
          // for (int i = 0; i < m; i++)
          //     for (int j = 0; j < n; j++)
          //         System.out.printf("(%d, %d): %d\n", i, j, memo[i][j]);
      }

      private int dp(int[][] dungeon, int i, int j, Integer[][] memo) {
          int m = dungeon.length, n = dungeon[0].length;

          if (i == m - 1 && j ==  n - 1) {
              memo[i][j] = dungeon[i][j] < 0 ? -dungeon[i][j] + 1 : 1;
              return memo[i][j];
          }

          if (memo[i][j] != null)
              return memo[i][j];

          int minHealth = Integer.MAX_VALUE, health = 0;
          // memo[i][j] + dungeon[i + 1][j] or dungeon[i][j + 1] >= memo[i + 1][j] or memo[i][j + 1]
          // down
          if (i + 1 < m) {
              health = Math.max(dp(dungeon, i + 1, j, memo) - dungeon[i][j], 1);
              minHealth = Math.min(minHealth, health);
          }
          // right
          if (j + 1 < n) {
              health = Math.max(dp(dungeon, i, j + 1, memo) - dungeon[i][j], 1);
              minHealth = Math.min(minHealth, health);
          }
          memo[i][j] = minHealth;

          return memo[i][j];
      }
  }
  ```

### :heart:Q241. [Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)

- ```java
  class Solution {
      public List<Integer> diffWaysToCompute(String exp) {
          List<Integer> result = new ArrayList<>();
          if (exp.length() == 1 || exp.length() == 2) {
              result.add(Integer.parseInt(exp));
              return result;
          }
          int i = 0;
          while (i < exp.length()) {
              if (exp.charAt(i) >= '0' && exp.charAt(i) <= '9') {
                  i++;
                  continue;
              }
              List<Integer> a = diffWaysToCompute(exp.substring(0, i));
              List<Integer> b = diffWaysToCompute(exp.substring(i + 1));
              switch (exp.charAt(i)) {
                  case '+' -> {
                      for (int p : a)
                          for (int q : b) {
                              result.add(p + q);
                          }
                  }
                  case '-' -> {
                      for (int p : a)
                          for (int q : b) {
                              result.add(p - q);
                          }
                  }
                  case '*' -> {
                      for (int p : a)
                          for (int q : b) {
                              result.add(p * q);
                          }
                  }
              }
              i++;
          }
          return result;
      }
  }
  ```

### :heart:Q312. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)

- **Reverse thinking: `memo[i][j]`: max scores bursting all ballons between `[i...j]` except for `i` and `j`.**

* ```java
  class Solution {
      public int maxCoins(int[] nums) {
          // min length is 2
          int[] ballons = addDummyBallons(nums);
          Integer[][] memo = new Integer[ballons.length][ballons.length];

          return dp(ballons, 0, ballons.length - 1, memo);
      }

      private int dp(int[] ballons, int i, int j, Integer[][] memo) {
          if (j - i == 1)
              return 0;

          if (j - i == 2)
              return ballons[i] * ballons[i + 1] * ballons[j];

          if (memo[i][j] != null)
              return memo[i][j];

          int max = Integer.MIN_VALUE;
          for (int k = i + 1; k < j; k++)
              max = Math.max(max, dp(ballons, i, k, memo) + dp(ballons, k, j, memo) + ballons[i] * ballons[k] * ballons[j]);
          memo[i][j] = max;

          return memo[i][j];
      }

      private int[] addDummyBallons(int[] nums) {
          int[] result = new int[nums.length + 2];

          result[0] = 1;
          result[result.length - 1] = 1;
          for (int i = 1; i < result.length - 1; i++)
              result[i] = nums[i - 1];

          return result;
      }
  }
  ```

### :star:Q514. [Freedom Trail](https://leetcode.com/problems/freedom-trail/)

- 可以用 bfs，不过要遍历所有节点，不能走到叶子就停下，因为我们不知道哪个叶子节点是终点。整个 decision tree 一共 $m^n$ 个节点，每个节点进出栈一次，复杂度 $O(m^n)$. DP 的复杂度则是 $O(m^2n)$，实际上还是 DP 更快。

  ```java
  class Solution {
      public int findRotateSteps(String ring, String key) {
          // i at "12:00", min steps to form key[j...]
          Integer[][] memo = new Integer[ring.length()][key.length() + 1];
          Map<Character, Set<Integer>> dict = getDictionary(ring);

          return dp(ring, 0, key, 0, memo, dict);
      }

      private int dp(String ring, int i, String key, int j, Integer[][] memo, Map<Character, Set<Integer>> dict) {
          if (j == key.length())
              return 0;

          if (memo[i][j] != null)
              return memo[i][j];

          int step = Integer.MAX_VALUE;
          char requiredChar = key.charAt(j);
          Set<Integer> indexes = dict.get(requiredChar);

          for (int index : indexes) {
              step = Math.min(step,
                              countMinimalRotationSteps(i, index, ring.length()) + 1 + dp(ring, index, key, j + 1, memo, dict));
          }
          memo[i][j] = step;

          return memo[i][j];
      }

      private int countMinimalRotationSteps(int i, int j, int length) {
          return Math.min(Math.abs(i - j), length - Math.abs(i - j));

      }

      private Map<Character, Set<Integer>> getDictionary(String ring) {
          Map<Character, Set<Integer>> dict = new HashMap<>();

          for (int i = 0; i < ring.length(); i++) {
              char c = ring.charAt(i);
              dict.computeIfAbsent(c, k -> new HashSet<>()).add(i);
          }

          return dict;
      }
  }
  ```

### :star:Q790. [Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)

- ```java
  class Solution {
      static final int M = 1000000007;

      public int numTilings(int n) {
          if (n == 1 || n == 2) {
              return n;
          }

          int[] dp = new int[n+1];
          dp[1] = 1;
          dp[2] = 2;
          dp[3] = 5;
          for (int i = 4; i<=n; i++) {
              dp[i] = (2*dp[i-1] % M + dp[i-3] % M) % M;
          }
          return dp[n];
      }
  }
  ```

### Q931. [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)

- Usage: [Seam carving](https://en.wikipedia.org/wiki/Seam_carving)

  ```java
  class Solution {
      static final int DEFAULT_VALUE = 1000001;

      public int minFallingPathSum(int[][] matrix) {
          int m = matrix.length, n = matrix[0].length;
          int[][] memo = new int[m][n];
          int min = Integer.MAX_VALUE;

          for (int[] arr : memo)
              Arrays.fill(arr, DEFAULT_VALUE);

          for (int j = 0; j < n; j++) {
              min = Math.min(min, dp(matrix, 0, j, memo));
          }

          return min;
      }

      private int dp(int[][] matrix, int i, int j, int[][] memo) {
          if (i == matrix.length - 1) {
              memo[i][j] = matrix[i][j];
              return memo[i][j];
          }

          if (memo[i][j] != DEFAULT_VALUE)
              return memo[i][j];

          int min = Integer.MAX_VALUE;
          if (j > 0) min = Math.min(min, dp(matrix, i + 1, j - 1, memo) + matrix[i][j]);
          min = Math.min(min, dp(matrix, i + 1, j, memo) + matrix[i][j]);
          if (j < matrix[0].length - 1) min = Math.min(min, dp(matrix, i + 1, j + 1, memo) + matrix[i][j]);
          memo[i][j] = min;

          return memo[i][j];
      }
  }
  ```

### Q1823. [Find the Winner of the Circular Game](https://leetcode.com/problems/find-the-winner-of-the-circular-game/)

### :star:Q2707. [Extra Characters in a String](https://leetcode.com/problems/extra-characters-in-a-string/)

- Similiar quesiton as Q115. feel it

- ```java
  class Solution {
      public int minExtraChar(String s, String[] dictionary) {
          Set<String> d = new HashSet<>(Arrays.asList(dictionary));
          Set<Integer> len = new HashSet<>();
          for (String word : dictionary) {
              len.add(word.length());
          }
          // minimum extra chars in s[i:]
          Integer[] memo = new Integer[s.length()];
          return dp(s, 0, d, len, memo);
      }

      private int dp(String s, int i, Set<String> d, Set<Integer> len, Integer[] memo) {
          if (i == s.length())
              return 0;

          if (memo[i] != null)
              return memo[i];

          int res = s.length();
          for (int l : len) {
              if (l + i <= s.length() && d.contains(s.substring(i, l + i))) {
                  res = Math.min(res, dp(s, i + l, d, len, memo));
              }
          }
          res = Math.min(res, 1 + dp(s, i + 1, d, len, memo));
          memo[i] = res;
          return res;
      }
  }
  ```
