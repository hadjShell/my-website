---
title: Shortest Path Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### Q64. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

- ```java
  class Solution {
      public int minPathSum(int[][] grid) {
          int m = grid.length, n = grid[0].length;
          Integer[] memo = new Integer[m * n];

          return dp(grid, 0, 0, memo);
      }

      private int dp(int[][] grid, int i, int j, Integer[] memo) {
          int m = grid.length, n = grid[0].length;
          int start = i * n + j, end = m * n - 1;

          if (start == end)
              return grid[i][j];

          if (memo[start] != null)
              return memo[start];

          int sum = Integer.MAX_VALUE;
          // down
          if (i + 1 < m)
              sum = Math.min(sum, grid[i][j] + dp(grid, i + 1, j, memo));
          // right
          if (j + 1 < n)
              sum = Math.min(sum, grid[i][j] + dp(grid, i, j + 1, memo));
          memo[start] = sum;

          return memo[start];
      }
  }
  ```

### Q787. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

- ```java
  class Solution {
      public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
          // cheapest price from i to dst, fly at most j times
          Integer[][] memo = new Integer[n + 1][k + 2];
          Map<Integer, List<int[]>> graph = buildGraph(flights);

          return dp(graph, src, dst, k + 1, memo);
      }

      private int dp(Map<Integer, List<int[]>> graph, int src, int dst, int k, Integer[][] memo) {
          if (src == dst && k >= 0)
              return 0;

          if (src != dst && k == 0)
              return -1;

          if (memo[src][k] != null)
              return memo[src][k];

          int price = Integer.MAX_VALUE;
          List<int[]> nexts = graph.get(src);
          if (nexts != null) {
              for (int[] next : nexts) {
                  int nextDst = next[0], nextPrice = next[1];
                  int nextCheapest = dp(graph, nextDst, dst, k - 1, memo);

                  if (nextCheapest == -1) continue;
                  price = Math.min(price, nextPrice + nextCheapest);
              }
          }
          if (price == Integer.MAX_VALUE)
              price = -1;
          memo[src][k] = price;

          return memo[src][k];
      }

      private Map<Integer, List<int[]>> buildGraph(int[][] flights) {
          Map<Integer, List<int[]>> graph = new HashMap<>();

          for (int[] flight : flights) {
              int from = flight[0], to = flight[1], price = flight[2];
              graph.computeIfAbsent(from, key -> new ArrayList()).add(new int[] {to, price});
          }

          return graph;
      }
  }
  ```
