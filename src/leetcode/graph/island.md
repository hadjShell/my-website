---
title: Island Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

DFS 2D array

:::

## Flood Fill Algorithm

Given a 2D grid `img[][]` representing an image, where each element `img[i][j]` is an integer that denotes the color of a pixel. Also there is a coordinates `(sr, sc)` representing the starting pixel and an integer `newColor`, which represents the new color to apply.

We need to perform a flood fill on the image starting from `(sr, sc)`.

It means we must change the color of the starting pixel and all other pixels that are connected to it (directly or indirectly) and have the same original color as the starting pixel. Two pixels are considered connected if they are adjacent horizontally or vertically (not diagonally).

Solution is DFS.

## Questions

### :star:Q200. [Number of Islands](https://leetcode.com/problems/number-of-islands/)

- ```java
  class Solution {
      static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

      public int numIslands(char[][] grid) {
          int m = grid.length, n = grid[0].length;
          int count = 0;

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  if (grid[i][j] == '1') {
                      count++;
                      dfs(grid, i, j);
                  }
              }

          return count;
      }

      private void dfs(char[][] grid, int i, int j) {
          if (i < 0 || i == grid.length || j < 0 || j == grid[0].length)
              return;

          if (grid[i][j] == '0')
              return;

          grid[i][j] = '0';
          for (int[] d : DIR) {
              int a = i + d[0], b = j + d[1];
              dfs(grid, a, b);
          }
      }
  }
  ```

### :star:Q694. [Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/)

> Premium question but worth to have a look. The idea is to hash the order (up, down, left, right) of DFS (in and out of a node).

### Q695. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)

- ```java
  class Solution {
      static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

      public int maxAreaOfIsland(int[][] grid) {
          int m = grid.length, n = grid[0].length;
          int max = 0;

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  if (grid[i][j] == 1) {
                      int[] area = new int[1];
                      dfs(grid, i, j, area);
                      max = Math.max(max, area[0]);
                  }
              }

          return max;
      }

      private void dfs(int[][] grid, int i, int j, int[] area) {
          if (i < 0 || i == grid.length || j < 0 || j == grid[0].length)
              return;

          if (grid[i][j] == 0)
              return;

          grid[i][j] = 0;
          area[0]++;
          for (int[] d : DIR) {
              int a = i + d[0], b = j + d[1];
              dfs(grid, a, b, area);
          }
      }
  }
  ```

### Q1254. [Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)

- ```java
  class Solution {
      static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

      public int closedIsland(int[][] grid) {
          int m = grid.length, n = grid[0].length;
          int count = 0;

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  if (grid[i][j] == 0) {
                      boolean[] isClosed = new boolean[1];
                      isClosed[0] = true;
                      dfs(grid, i, j, isClosed);
                      if (isClosed[0])   count++;
                  }
              }

          return count;
      }

      private void dfs(int[][] grid, int i, int j, boolean[] isClosed) {
          if (i < 0 || i == grid.length || j < 0 || j == grid[0].length)
              return;

          if (grid[i][j] == 1)
              return;

          if (i == 0 || i == grid.length - 1 || j == 0 || j == grid[0].length - 1)
              isClosed[0] = false;
          grid[i][j] = 1;
          for (int[] d : DIR) {
              int a = i + d[0], b = j + d[1];
              dfs(grid, a, b, isClosed);
          }
      }
  }
  ```

### Q1905. [Count Sub Islands](https://leetcode.com/problems/count-sub-islands/)

- ```java
  class Solution {
      static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

      public int countSubIslands(int[][] grid1, int[][] grid2) {
          int m = grid2.length, n = grid2[0].length;
          int count = 0;

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  if (grid2[i][j] == 1) {
                      boolean[] isSub = {true};
                      dfs(grid1, grid2, i, j, isSub);
                      if (isSub[0])   count++;
                  }
              }

          return count;
      }

      private void dfs(int[][] grid1, int[][] grid2, int i, int j, boolean[] isSub) {
          if (i < 0 || i == grid2.length || j < 0 || j == grid2[0].length)
              return;

          if (grid2[i][j] == 0)
              return;

          grid2[i][j] = 0;
          if (grid1[i][j] == 0)
              isSub[0] = false;

          for (int[] d : DIR) {
              int a = i + d[0], b = j + d[1];
              dfs(grid1, grid2, a, b, isSub);
          }
      }
  }
  ```
