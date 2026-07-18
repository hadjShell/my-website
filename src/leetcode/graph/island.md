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

- Fill "island" with "water" to save the usage of `visited` array.

```java
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

### :star:Q463. [Island Perimeter](https://leetcode.com/problems/island-perimeter/)

```java
class Solution {
    static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

    public int islandPerimeter(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        boolean[][] visited = new boolean[m][n];
        int result = 0;

        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1 && !visited[i][j]) {
                    result = getPerimeter(i, j, grid, visited);
                }
            }

        return result;
    }

    private int getPerimeter(int i, int j, int[][] grid, boolean[][] visited) {
        int m = grid.length, n = grid[0].length;

        if (i < 0 || i >= m || j < 0 || j >= n)
            return 0;
        if (grid[i][j] == 0 || visited[i][j])
            return 0;

        int result = calCellPerimeter(i, j, grid);
        visited[i][j] = true;
        for (int[] d : DIR) {
            result += getPerimeter(i + d[0], j + d[1], grid, visited);
        }

        return result;
    }

    private int calCellPerimeter(int i, int j, int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int result = 0;
        for (int[] d : DIR) {
            int a = i + d[0], b = j + d[1];
            if (a < 0 || a >= m || b < 0 || b >= n || grid[a][b] == 0) {
                result++;
            }
        }

        return result;
    }
}
```

### :star:Q694. [Number of Distinct Islands](https://leetcode.com/problems/number-of-distinct-islands/)

> Premium question but worth to have a look. The idea is to hash the order (up, down, left, right) of DFS (in and out of a node).

### Q695. [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)

```java
class Solution {
    static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

    public int maxAreaOfIsland(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int max = 0;

        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                int area = getArea(i, j, grid);
                max = Math.max(max, area);
            }

        return max;
    }

    private int getArea(int i, int j, int[][] grid) {
        int m = grid.length, n = grid[0].length;

        if (i < 0 || i >= m || j < 0 || j >= n)
            return 0;
        if (grid[i][j] == 0)
            return 0;

        int area = 1;
        grid[i][j] = 0;
        for (int[] d : DIR) {
            area += getArea(i + d[0], j + d[1], grid);
        }

        return area;
    }
}
```

### :star:Q827. [Making A Large Island](https://leetcode.com/problems/making-a-large-island/)

```java
class Solution {
    static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

    public int largestIsland(int[][] grid) {
        int n = grid.length;
        int max = 0;
        int $id = 2;
        Map<Integer, Integer> id2Area = new HashMap<>();

        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    int area = getAreaAndTagId(i, j, grid, $id);
                    id2Area.put($id++, area);
                    max = Math.max(max, area);
                }
            }

        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0) {
                    int area = 1;
                    Set<Integer> island = new HashSet<>();
                    for (int[] d : DIR) {
                        int a = i + d[0], b = j + d[1];
                        if (a >= 0 && a < n && b >= 0 && b < n && grid[a][b] != 0) {
                            int id = grid[a][b];
                            if (!island.contains(id)) {
                                area += id2Area.get(id);
                                island.add(id);
                            }
                        }
                    }
                    max = Math.max(max, area);
                }
            }

        return max;
    }

    private int getAreaAndTagId(int i, int j, int[][] grid, int id) {
        int m = grid.length, n = grid[0].length;

        if (i < 0 || i >= m || j < 0 || j >= n)
            return 0;
        if (grid[i][j] == 0 || grid[i][j] == id)
            return 0;

        int area = 1;
        grid[i][j] = id;
        for (int[] d : DIR) {
            area += getAreaAndTagId(i + d[0], j + d[1], grid, id);
        }

        return area;
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

### :star:Q1568. [Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)

```java
class Solution {
    static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

    public int minDays(int[][] grid) {
        int islandTag = 1;
        int islandCount = numIslands(grid, islandTag++);

        if (islandCount != 1)
            return 0;

        int m = grid.length, n = grid[0].length;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == islandTag) {
                    grid[i][j] = 0;
                    islandCount = numIslands(grid, islandTag++);
                    if (islandCount != 1)   return 1;
                    grid[i][j] = islandTag;
                }
            }

        return 2;
    }

    private int numIslands(int[][] grid, int islandTag) {
        int m = grid.length, n = grid[0].length;
        int count = 0;

        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == islandTag) {
                    count++;
                    dfs(grid, i, j, islandTag);
                }
            }

        return count;
    }

    private void dfs(int[][] grid, int i, int j, int islandTag) {
        if (i < 0 || i == grid.length || j < 0 || j == grid[0].length)
            return;

        if (grid[i][j] == 0 || grid[i][j] == islandTag + 1)
            return;

        grid[i][j] = islandTag + 1;
        for (int[] d : DIR) {
            int a = i + d[0], b = j + d[1];
            dfs(grid, a, b, islandTag);
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
