---
title: Best Time to Buy and Sell Stock
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

You are given an integer array prices where `prices[i]` is the price of a given stock on the `i`th day, and an integer `k`.

Find the maximum profit you can achieve. You may complete at most `k` transactions: i.e. you may buy at most `k` times and sell at most `k` times.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

:::

- Three-dimentional DP

  - `memo[i][k][j]`: the maximum profit you can achieve from i^th^ day with at most k transactions, j = 0 means no stock holding, j = 1 means holding one stock

- Variations

  - Father of all: [Q188](#heartq188-best-time-to-buy-and-sell-stock-iv).
  - `k = 1`: [Q121](#q121-best-time-to-buy-and-sell-stock).
  - `k = 2`: [Q123](#q123-best-time-to-buy-and-sell-stock-iii).
  - `k = +inf`: [Q122](#q122-best-time-to-buy-and-sell-stock-ii). We don't need state `k` anymore
  - `k = +inf` with cooldown: [Q309](#q309-best-time-to-buy-and-sell-stock-with-cooldown). We don't need state `k` anymore. `j` have 4 possible states instead of 2.
  - `k = +inf` with transaction fee: [Q714](#q714-best-time-to-buy-and-sell-stock-with-transaction-fee). Same as Q122. Treat transaction fee as increasement on stock price

- [A great explanation on leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems/). The definition of `memo` is not exactly like mine, but the idea is the same.

---

### Q121. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

- ```java
  class Solution {
      public int maxProfit(int[] prices) {
          int profit = 0, min = prices[0];
          for (int i = 0; i < prices.length; i++) {
              if (prices[i] < min)
                  min = prices[i];
              else
                  profit = Math.max(profit, prices[i] - min);
          }
          return profit;
      }
  }
  ```

### Q122. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

- ```java
  class Solution {
      public int maxProfit(int[] prices) {
          int profit = 0;
          for (int i = 1; i < prices.length; i++) {
              int p = prices[i] - prices[i - 1];
              if (p > 0)
                  profit += p;
          }
          return profit;
      }
  }
  ```

### Q123. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

- ```java
  class Solution {
      public int maxProfit(int[] prices) {
          int k = 2;
          Integer[][][] memo = new Integer[prices.length + 1][2][k + 1];

          return dp(prices, 0, 0, k, memo);
      }

      private int dp(int[] prices, int i, int j, int k, Integer[][][] memo) {
          if (i == prices.length || k == 0)
              return 0;

          if (memo[i][j][k] != null)
              return memo[i][j][k];

          int profit = Integer.MIN_VALUE;
          // buy
          if (j == 0)
              profit = Math.max(profit, dp(prices, i + 1, 1, k, memo) - prices[i]);
          // sell
          else
              profit = Math.max(profit, dp(prices, i + 1, 0, k - 1, memo) + prices[i]);
          // hold
          profit = Math.max(profit, dp(prices, i + 1, j, k, memo));
          memo[i][j][k] = profit;

          return memo[i][j][k];
      }
  }
  ```

### :heart:Q188. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

- ```java
  class Solution {
      public int maxProfit(int k, int[] prices) {
          // memo[i][j][k]: the maximum profit you can achieve from ith day with at most k transactions, j = 0 means no stock holding, j = 1 means holding one stock
          // one transaction: one buy + one sell
          Integer[][][] memo = new Integer[prices.length + 1][2][k + 1];

          return dp(prices, 0, 0, k, memo);
      }

      private int dp(int[] prices, int i, int j, int k, Integer[][][] memo) {
          if (i == prices.length || k == 0)
              return 0;

          if (memo[i][j][k] != null)
              return memo[i][j][k];

          int profit = Integer.MIN_VALUE;
          // buy
          if (j == 0)
              profit = Math.max(profit, dp(prices, i + 1, 1, k, memo) - prices[i]);
          // sell
          else
              profit = Math.max(profit, dp(prices, i + 1, 0, k - 1, memo) + prices[i]);
          // hold
          profit = Math.max(profit, dp(prices, i + 1, j, k, memo));
          memo[i][j][k] = profit;

          return memo[i][j][k];
      }
  }
  ```

### Q309. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

- ```java
  class Solution {
      public int maxProfit(int[] prices) {
          // j = 0: hold no stock prev day, j = 1: hold one stock prev day, j = 2: sell prev day, j = 3: buy prev day
          Integer[][] memo = new Integer[prices.length + 1][4];

          return dp(prices, 0, 0, memo);
      }

      private int dp(int[] prices, int i, int j, Integer[][] memo) {
          if (i == prices.length)
              return 0;

          if (memo[i][j] != null)
              return memo[i][j];

          int profit = Integer.MIN_VALUE;
          // buy
          if (j == 0 || j == 1)
              profit = Math.max(profit, dp(prices, i + 1, 3, memo) - prices[i]);
          // sell
          if (j == 1 || j == 3)
              profit = Math.max(profit, dp(prices, i + 1, 2, memo) + prices[i]);
          // hold
          if (j == 0 || j == 2)
              profit = Math.max(profit, dp(prices, i + 1, 0, memo));
          if (j == 1 || j == 3)
              profit = Math.max(profit, dp(prices, i + 1, 1, memo));

          return memo[i][j] = profit;
      }
  }
  ```

### Q714. [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

- ```java
  class Solution {
      public int maxProfit(int[] prices, int fee) {
          Integer[][] memo = new Integer[prices.length + 1][2];

          return dp(prices, 0, 0, memo, fee);
      }

      private int dp(int[] prices, int i, int j, Integer[][] memo, int fee) {
          if (i == prices.length)
              return 0;

          if (memo[i][j] != null)
              return memo[i][j];

          int profit = Integer.MIN_VALUE;
          // buy
          if (j == 0)
              profit = Math.max(profit, dp(prices, i + 1, 1, memo, fee) - prices[i] - fee);
          // sell
          else
              profit = Math.max(profit, dp(prices, i + 1, 0, memo, fee) + prices[i]);
          // hold
          profit = Math.max(profit, dp(prices, i + 1, j, memo, fee));
          memo[i][j] = profit;

          return memo[i][j];
      }
  }
  ```
