---
title: Optimal Strategy Game Theory
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

Assume two players play optimally, who will win the game?

:::

### :star:Q486. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)

- [Solution](https://leetcode.com/problems/predict-the-winner/solutions/7517161/backtracking-to-dp-stone-game-optimal-st-ds8g)

  ```java
  class Solution {
      public boolean predictTheWinner(int[] piles) {
          // memo[i][j]: the max stones a player can score in the game playing on piles[i..j], the player plays first
          Integer[][] memo = new Integer[piles.length][piles.length];
          int sum = sum(piles);
          int score1 = dp(piles, 0, piles.length - 1, memo, sum);

          return score1 >= sum - score1;
      }

      private int dp(int[] piles, int i, int j, Integer[][] memo, int sum) {
          if (i == j)
              return piles[i];

          if (memo[i][j] != null)
              return memo[i][j];

          int score = Integer.MIN_VALUE;

          // alice choose i
          score = Math.max(score, sum - dp(piles, i + 1, j, memo, sum - piles[i]));
          // alice choose j
          score = Math.max(score, sum - dp(piles, i, j - 1, memo, sum - piles[j]));

          memo[i][j] = score;

          return memo[i][j];
      }

      private int sum(int[] piles) {
          int sum = 0;
          for (int n : piles) sum += n;
          return sum;
      }
  }
  ```

### Q877. [Stone Game](https://leetcode.com/problems/stone-game/)

- ```java
  class Solution {
      public boolean stoneGame(int[] piles) {
          // memo[i][j]: the max stones a player can score in the game playing on piles[i..j], the player plays first
          Integer[][] memo = new Integer[piles.length][piles.length];
          int sum = sum(piles);
          int score1 = dp(piles, 0, piles.length - 1, memo, sum);

          return score1 > sum - score1;
      }

      private int dp(int[] piles, int i, int j, Integer[][] memo, int sum) {
          if (i == j)
              return piles[i];

          if (memo[i][j] != null)
              return memo[i][j];

          int score = Integer.MIN_VALUE;

          // alice choose i
          score = Math.max(score, sum - dp(piles, i + 1, j, memo, sum - piles[i]));
          // alice choose j
          score = Math.max(score, sum - dp(piles, i, j - 1, memo, sum - piles[j]));

          memo[i][j] = score;

          return memo[i][j];
      }

      private int sum(int[] piles) {
          int sum = 0;
          for (int n : piles) sum += n;
          return sum;
      }
  }
  ```
