---
title: Knapsack Problem
author: David Zhang aka Hadjshell
order: 3
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

Given `n` items where each item has some weight and profit associated with it and also given a bag with capacity `W`, [i.e., the bag can hold at most `W` weight in it]. The task is to put the items into the bag such that the sum of profits associated with them is the maximum possible.

:::

- Two-dimensional DP

- `memo[w][i]`: **for items in `item[i...]`, if the volume of the backpack is `w`, the maximum value it can hold is `memo[w][i]`**.

- Types
  - **0-1 knapsack**: an item can only be picked once
  - **Bounded knapsack**: there are certain number of copies of each item
  - **Unbounded knapsack**: no upper bound on the number of copies of each kind of item

### Q279. [Perfect Squares](https://leetcode.com/problems/perfect-squares/)

- ```java
  class Solution {
      public int numSquares(int n) {
          Integer[][] memo = new Integer[n + 1][101];
          return dp(n, 100, memo);
      }

      private int dp(int n, int i, Integer[][] memo) {
          if (n == 0)
              return 0;
          if (i == 0)
              return Integer.MAX_VALUE;
          if (memo[n][i] != null)
              return memo[n][i];

          int square = i * i, res = dp(n, i - 1, memo);
          if (n >= square)
              res = Math.min(res, 1 + dp(n - square, i, memo));
          return memo[n][i] = res;
      }
  }
  ```

### Q322. [Coin Change](https://leetcode.com/problems/coin-change/)

- ```java
  // Bottom-up
  class Solution {
      public int coinChange(int[] coins, int amount) {
          int[] dp = new int[amount + 1];

          Arrays.fill(dp, amount + 1);
          dp[0] = 0;

          for (int i = 1; i <= amount; i++) {
              for (int coin : coins) {
                  if (i - coin < 0 || dp[i - coin] == -1)
                      continue;
                  dp[i] = Math.min(dp[i], dp[i - coin] + 1);
              }
              if (dp[i] == amount + 1)
                  dp[i] = -1;
          }

          return dp[amount];
      }
  }
  ```

- ```java
  // Top-down
  class Solution {
      public int coinChange(int[] coins, int amount) {
          int[] memo = new int[amount + 1];

          Arrays.fill(memo, -2);
          memo[0] = 0;

          return dp(coins, amount, memo);
      }

      private int dp(int[] coins, int amount, int[] memo) {
          if (amount < 0)
              return -1;

          if (memo[amount] != -2)
              return memo[amount];

          int min = Integer.MAX_VALUE;
          for (int i = 0; i < coins.length; i++) {
              int count = dp(coins, amount - coins[i], memo);
              if (count != -1)    min = Math.min(min, count + 1);
          }
          memo[amount] = min == Integer.MAX_VALUE ? -1 : min;

          return memo[amount];
      }
  }
  ```

### :star:Q377. [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)

- ```java
  class Solution {
      public int combinationSum4(int[] nums, int target) {
          Integer[] memo = new Integer[target + 1];
          return dp(target, nums, memo);
      }

      private int dp(int target,int nums[], Integer[] memo) {
          if (target == 0)
              return 1;
          if (memo[target] != null)
              return memo[target];

          int res = 0;
          for (int num : nums) {
              if (target < num)
                  continue;
              res += dp(target - num, nums, memo);
          }

          return memo[target] = res;
      }
  }
  ```

### Q416. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

- ```java
  class Solution {
      public boolean canPartition(int[] nums) {
          int sum = sum(nums);

          if (sum % 2 != 0)
              return false;

          int target = sum / 2;
          Boolean[][] memo = new Boolean[target + 1][nums.length];

          return dp(nums, 0, target, memo);
      }

      private boolean dp(int[] nums, int i, int target, Boolean[][] memo) {
          if (target == 0)
              return true;

          if (target < 0 || i == nums.length)
              return false;

          if (memo[target][i] != null)
              return memo[target][i];

          memo[target][i] = dp(nums, i + 1, target - nums[i], memo) || dp(nums, i + 1, target, memo);

          return memo[target][i];
      }

      private int sum(int[] nums) {
          int sum = 0;
          for (int num : nums)    sum += num;
          return sum;
      }
  }
  ```

### :star:Q474. [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)

- ```java
  class Solution {
      public int findMaxForm(String[] strs, int m, int n) {
          Integer[][][] memo = new Integer[m + 1][n + 1][strs.length + 1];
          return dp(m, n, strs.length, strs, memo);
      }

      private int dp(int m, int n, int range, String[] strs, Integer[][][] memo) {
          if (m < 0 || n < 0)
              return Integer.MIN_VALUE;
          if (range == 0)
              return 0;
          if (memo[m][n][range] != null)
              return memo[m][n][range];

          String s = strs[range - 1];
          int zero = 0, one = 0;
          for (char c : s.toCharArray()) {
              if (c == '1')
                  one++;
              else
                  zero++;
          }
          return memo[m][n][range] = Math.max(dp(m, n, range - 1, strs, memo), 1 + dp(m - zero, n - one, range - 1, strs, memo));
      }
  }
  ```

### :star:Q494. [Target Sum](https://leetcode.com/problems/target-sum/)

- ```java
  class Solution {
      public int findTargetSumWays(int[] nums, int target) {
          // sum [0, 1000]    target [-1000, 1000]
          Integer[][] memo = new Integer[4001][nums.length + 1];

          return dp(nums, 0, target, memo);
      }

      private int dp(int[] nums, int i, int target, Integer[][] memo) {
          if (i == nums.length)
              return target == 0 ? 1 : 0;

          if (memo[target + 2000][i] != null)
              return memo[target + 2000][i];

          memo[target + 2000][i] = dp(nums, i + 1, target + nums[i], memo) + dp(nums, i + 1, target - nums[i], memo);

          return memo[target + 2000][i];
      }
  }
  ```

- Idea 2

  - 首先，如果我们把 `nums` 划分成两个子集 `A` 和 `B`，分别代表分配 `+` 的数和分配 `-` 的数，那么他们和 `target` 存在如下关系：

    ```
    sum(A) - sum(B) = target
    sum(A) = target + sum(B)
    sum(A) + sum(A) = target + sum(B) + sum(A)
    2 * sum(A) = target + sum(nums)
    ```

    综上，可以推出 `sum(A) = (target + sum(nums)) / 2`，也就是把原问题转化成：**`nums` 中存在几个子集 `A`，使得 `A` 中元素的和为 `(target + sum(nums)) / 2`**？

### :star:Q518. [Coin Change II](https://leetcode.com/problems/coin-change-ii/)

- [Solution](https://leetcode.com/problems/coin-change-ii/solutions/7499274/unbounded-knapsack-problem-2d-dp-omn-by-kgzty)
- Unbounded knapsack

  ```java
  class Solution {
      public int change(int amount, int[] coins) {
          Integer[][] memo = new Integer[amount + 1][coins.length + 1];

          return dp(amount, coins, 0, memo);
      }

      private int dp(int amount, int[] coins, int i, Integer[][] memo) {
          if (amount == 0)
              return 1;

          if (i == coins.length)
              return 0;

          if (memo[amount][i] != null)
              return memo[amount][i];

          int combination = 0;
          if (amount >= coins[i])     combination = dp(amount - coins[i], coins, i, memo) + dp(amount, coins, i + 1, memo);
          else                        combination = dp(amount, coins, i + 1, memo);
          memo[amount][i] = combination;

          return memo[amount][i];
      }
  }
  ```

### :star:Q1235. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)

- ```java
  class Solution {
      public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
          // Sort by the start time
          List<int[]> st = new ArrayList();
          for (int i = 0; i < startTime.length; i++) {
              st.add(new int[] {startTime[i], i});
          }
          Collections.sort(st, (a , b) -> a[0] - b[0]);
          int size = profit.length;
          int[] sortedStart = new int[size];
          int[] sortedEnd = new int[size];
          int[] sortedProfit = new int[size];
          for (int i = 0; i < size; i++) {
              sortedStart[i] = startTime[st.get(i)[1]];
              sortedEnd[i] = endTime[st.get(i)[1]];
              sortedProfit[i] = profit[st.get(i)[1]];
          }
          // DP
          // Max profit start at and include index i job
          Integer[] memo = new Integer[profit.length];
          return dp(0, memo, sortedStart, sortedEnd, sortedProfit);
      }

      public int dp(int i, Integer[] memo, int[] start, int[] end, int[] profit) {
          if (i == memo.length)
              return 0;
          if (memo[i] != null)
              return memo[i];
          // find next available job
          int nextStart = Arrays.binarySearch(start, end[i]);
          if (nextStart < 0)
              nextStart = -1 * nextStart - 1;
          else {
              while (start[nextStart] == end[i])
                  nextStart--;
              nextStart++;
          }
          return memo[i] = Math.max(dp(i + 1, memo, start, end, profit),
                          dp(nextStart, memo, start, end, profit) + profit[i]);
      }
  }
  ```
