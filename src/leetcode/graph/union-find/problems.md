---
title: Union Find Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q130. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)

- ```java
  class Solution {
      public void solve(char[][] board) {
          int m = board.length, n = board[0].length;
          UF uf = new UF(board);

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  uf.union(i, j, i, j - 1);
                  uf.union(i, j, i, j + 1);
                  uf.union(i, j, i - 1, j);
                  uf.union(i, j, i + 1, j);
              }

          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++) {
                  if (uf.isColorable(i, j))
                      board[i][j] = 'X';
              }
      }

      class UF {
          char[][] board;
          int m;
          int n;
          int[] parent;

          public UF(char[][] board) {
              this.board = board;
              m = board.length;
              n = board[0].length;
              parent = new int[m * n + 1];    // parent[0] is the parent of all border nodes

              // initialisation
              for (int i = 0; i < m; i++)
                  for (int j = 0; j < n; j++) {
                      int v = hash(i, j);
                      if (i == 0 || i == m - 1 || j == 0 || j == n - 1)
                          parent[v] = 0;
                      else
                          parent[v] = v;
                  }
          }

          public void union(int i, int j, int p, int q) {
              // border
              if (p == -1 || p == m || q == -1 || q == n)
                  return;

              if (board[i][j] != board[p][q])
                  return;

              int rootP = find(hash(i, j));
              int rootQ = find(hash(p, q));

              if (rootP == rootQ)
                  return;
              else if (rootP == 0)
                  parent[rootQ] = 0;
              else if (rootQ == 0)
                  parent[rootP] = 0;
              else
                  parent[rootQ] = rootP;

          }

          public int find(int v) {
              if (parent[v] != v) {
                  parent[v] = find(parent[v]);
              }

              return parent[v];
          }

          public boolean isColorable(int i, int j) {
              return board[i][j] == 'O' && find(hash(i, j)) != 0;
          }

          // [0, 200)
          private int hash(int i, int j) {
              return i * n + j + 1;
          }

      }
  }
  ```

### Q547. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

- ```java
  class Solution {
      public int findCircleNum(int[][] isConnected) {
          int cityAmount = isConnected.length;
          UF uf = new UF(cityAmount);

          for (int i = 0; i < cityAmount; i++)
              for (int j = i; j < cityAmount; j++) {
                  if (isConnected[i][j] == 0)     continue;

                  uf.union(i, j);
              }

          return uf.count();
      }

      class UF {
          int[] parent;
          int count;

          public UF(int size) {
              count = size;
              parent = new int[size];
              for (int i = 0; i < size; i++)
                  parent[i] = i;
          }

          public void union(int p, int q) {
              int rootP = find(p);
              int rootQ = find(q);

              if (rootP == rootQ)     return;

              parent[rootQ] = rootP;
              count--;
          }

          public boolean isConnected(int p, int q) {
              return find(p) == find(q);
          }

          public int find(int p) {
              if (parent[p] != p)
                  parent[p] = find(parent[p]);

              return parent[p];
          }

          public int count() {
              return count;
          }
      }
  }
  ```

### Q947. [Most Stones Removed with Same Row or Column](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/)

- ```java
  class Solution {
      public int removeStones(int[][] stones) {
          int n = stones.length;
          Map<Integer, List<Integer>> col = new HashMap<>();
          Map<Integer, List<Integer>> row = new HashMap<>();
          UF uf = new UF(n);

          for (int i = 0; i < n; i++) {
              int[] stone = stones[i];

              col.computeIfAbsent(stone[1], k -> new ArrayList<>()).add(i);
              row.computeIfAbsent(stone[0], k -> new ArrayList<>()).add(i);
          }

          for (Map.Entry<Integer, List<Integer>> e : col.entrySet()) {
              List<Integer> stonesInSameCol = e.getValue();
              int first = stonesInSameCol.get(0);

              for (int i : stonesInSameCol)
                  uf.union(i, first);
          }
          for (Map.Entry<Integer, List<Integer>> e : row.entrySet()) {
              List<Integer> stonesInSameRow = e.getValue();
              int first = stonesInSameRow.get(0);

              for (int i : stonesInSameRow)
                  uf.union(i, first);
          }

          return n - uf.count();
      }

      class UF {
          int[] parent;
          int count;

          public UF(int size) {
              count = size;
              parent = new int[size];
              for (int i = 0; i < size; i++)
                  parent[i] = i;
          }

          public void union(int p, int q) {
              int rootP = find(p);
              int rootQ = find(q);

              if (rootP == rootQ)     return;

              parent[rootQ] = rootP;
              count--;
          }

          public boolean isConnected(int p, int q) {
              return find(p) == find(q);
          }

          public int find(int p) {
              if (parent[p] != p)
                  parent[p] = find(parent[p]);

              return parent[p];
          }

          public int count() {
              return count;
          }
      }
  }
  ```

### Q990. [Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)

- ```java
  class Solution {
      public boolean equationsPossible(String[] equations) {
          UF uf = new UF(26);
          boolean isValid = true;

          for (String eq : equations) {
              if (!isEqual(eq))   continue;

              uf.union(eq.charAt(0) - 'a', eq.charAt(3) - 'a');
          }

          for (String eq : equations) {
              if (!isValid)       break;
              if (isEqual(eq))   continue;

              isValid = !uf.isConnected(eq.charAt(0) - 'a', eq.charAt(3) - 'a');
          }

          return isValid;
      }

      private boolean isEqual(String equation) {
          return equation.charAt(1) == '=';
      }

      class UF {
          int[] parent;

          public UF(int size) {
              parent = new int[size];
              for (int i = 0; i < size; i++)
                  parent[i] = i;
          }

          public void union(int p, int q) {
              int rootP = find(p);
              int rootQ = find(q);

              if (rootP == rootQ)     return;

              parent[rootQ] = rootP;
          }

          public boolean isConnected(int p, int q) {
              return find(p) == find(q);
          }

          public int find(int p) {
              if (parent[p] != p)
                  parent[p] = find(parent[p]);

              return parent[p];
          }
      }
  }
  ```
