---
title: Fibonacci
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### Q70. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

- ```java
  class Solution {
      public int climbStairs(int n) {
          if (n == 1)
              return 1;
          if (n == 2)
              return 2;
          int a = 1, b = 2, c = 0;
          for (int i = 3; i <= n; i++) {
              c = a + b;
              a = b;
              b = c;
          }
          return c;
      }
  }
  ```

### Q509. [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

- ```java
  class Solution {
      public int fib(int n) {
          if (n == 0 || n == 1)
              return n;
          int a = 0, b = 1;
          for (int i = 2; i <= n; i++) {
              b += a;
              a = b - a;
          }
          return b;
      }
  }
  ```

### Q746. [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

- ```java
  class Solution {
      public int minCostClimbingStairs(int[] cost) {
          // minimal cost to start from a stair
          int[] dp = new int[cost.length];
          dp[0] = cost[0];
          dp[1] = cost[1];
          for (int i = 2; i < dp.length; i++) {
              dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
          }
          return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
      }
  }
  ```

### Q1137. [N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)

- ```java
  class Solution {
      public int tribonacci(int n) {
          if (n == 0)
              return 0;
          if (n == 1)
              return 1;
          if (n == 2)
              return 1;
          int[] dp = new int[n + 1];
          dp[0] = 0;
          dp[1] = 1;
          dp[2] = 1;
          for (int i = 3; i <= n; i++) {
              dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
          }
          return dp[n];
      }
  }
  ```
