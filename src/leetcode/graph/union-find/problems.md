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

### :star:Q352. [Data Stream as Disjoint Intervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)

```java
class SummaryRanges {
    UF uf;

    public SummaryRanges() {
        uf = new UF();
    }

    public void addNum(int value) {
        uf.add(value);
    }

    public int[][] getIntervals() {
        Set<Integer> intervalStarts = uf.root2Size.keySet();

        int[][] result = new int[uf.root2Size.size()][2];
        int i = 0;
        for (Integer root : intervalStarts) {
            result[i++] = new int[] {
                    root,
                    root + uf.root2Size.get(root) - 1
            };
        }

        return result;
    }

    class UF {
        Map<Integer, Integer> vertex2Parent;
        // root vertex, which is also the samllest vertex in the tree
        // mapping to the size of the tree
        Map<Integer, Integer> root2Size;

        public UF() {
            vertex2Parent = new HashMap<>();
            root2Size = new TreeMap<>();
        }

        public void add(int a) {
            if (vertex2Parent.containsKey(a))
                return;

            boolean hasPrev = vertex2Parent.containsKey(a - 1);
            boolean hasNext = vertex2Parent.containsKey(a + 1);

            vertex2Parent.put(a, a);
            root2Size.put(a, 1);
            if (hasPrev) {
                union(a - 1, a);
            }
            if (hasNext) {
                union(a, a + 1);
            }
        }

        public void union(int p, int q) {
            int rootP = find(p);
            int rootQ = find(q);

            if (rootP < rootQ) {
                vertex2Parent.put(rootQ, rootP);
                root2Size.put(rootP, root2Size.get(rootP) + root2Size.get(rootQ));
                root2Size.remove(rootQ);
            }
            else if (rootP > rootQ) {
                vertex2Parent.put(rootP, rootQ);
                root2Size.put(rootQ, root2Size.get(rootP) + root2Size.get(rootQ));
                root2Size.remove(rootP);
            }
            else
                return;
        }

        public int find(int p) {
            int parentP = vertex2Parent.get(p);
            if (parentP != p)
                vertex2Parent.put(p, find(parentP));

            return vertex2Parent.get(p);
        }
    }
}
```

### :heart:Q399. [Evaluate Division](https://leetcode.com/problems/evaluate-division/)

- [Leetcode solution post](https://leetcode.com/problems/evaluate-division/solutions/8408785/from-equations-to-ratios-weighted-union-elmw5/)

```java
class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        UF uf = new UF();

        for (int i = 0; i < equations.size(); i++) {
            List<String> eq = equations.get(i);
            String v1 = eq.get(0);
            String v2 = eq.get(1);
            double value = values[i];

            uf.union(v1, v2, value);
        }

        double[] result = new double[queries.size()];
        int i = 0;
        for (List<String> query : queries) {
            String v1 = query.get(0);
            String v2 = query.get(1);
            result[i++] = uf.getResult(v1, v2);
        }

        return result;
    }

    class UF {
        Map<String, Record> parent = new HashMap<>();

        public void union(String v1, String v2, double value) {
            // System.out.println("----" + "Enter union: " + v1 + ", " + v2 + "----");
            add(v1);
            add(v2);

            Record root1 = find(v1);
            Record root2 = find(v2);
            // System.out.println(v1 + "'s root: <" + root1.base + ", " + root1.multiple + ">");
            // System.out.println(v2 + "'s root: <" + root2.base + ", " + root2.multiple + ">");

            if (root1.base.equals(root2.base))
                return;
            parent.put(root1.base, new Record(root2.base, root2.multiple * value / root1.multiple));
            // Record rootRoot1 = parent.get(root1.base);
            // System.out.println("Connect v1 root to v2 root, v1 root: "+ root1.base + "'s new parent: <" + rootRoot1.base + ", " + rootRoot1.multiple + ">");
        }

        private void add(String v) {
            if (!parent.containsKey(v)) {
                parent.put(v, new Record(v, 1.0));
                // System.out.println("Put " + v + ": <" + v + ", 1.0>");
            }
        }

        public Record find(String v) {
            // System.out.println("----" + "Enter find: " + v + "----");
            Record p = parent.get(v);

            if (!p.base.equals(v)) {
                Record pp = find(p.base);
                parent.put(v, new Record(pp.base, pp.multiple * p.multiple));
            }

            return parent.get(v);
        }

        public double getResult(String v1, String v2) {
            if (!isConnected(v1, v2))
                return -1.0;

            return parent.get(v1).multiple / parent.get(v2).multiple;
        }

        private boolean isConnected(String v1, String v2) {
            if (!parent.containsKey(v1) || !parent.containsKey(v2))
                return false;

            return find(v1).base.equals(find(v2).base);
        }
    }

    class Record {
        String base;
        double multiple;

        public Record(String base, double multiple) {
            this.base = base;
            this.multiple = multiple;
        }
    }
}
```

### Q547. [Number of Provinces](https://leetcode.com/problems/number-of-provinces/)

```java
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

### Q684. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)

```java
class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        UF uf = new UF(n);

        for (int[] edge : edges) {
            int p = edge[0] - 1;
            int q = edge[1] - 1;
            if (!uf.isConnected(p, q)) {
                uf.union(p, q);
            }
            else
                return edge;
        }

        return null;
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

### :heart:Q685. [Redundant Connection II](https://leetcode.com/problems/redundant-connection-ii/)

```java
class Solution {
    enum Node { ROOT, MID, LEAF, BAD }

    public int[] findRedundantDirectedConnection(int[][] edges) {
        int n = edges.length;
        int[] inDegree = new int[n + 1];
        int[] outDegree = new int[n + 1];
        for (int[] edge : edges) {
            int p = edge[0];
            int q = edge[1];
            inDegree[q]++;
            outDegree[p]++;
        }

        int root = 0;
        int bad = 0;
        for (int i = 1; i <= n; i++) {
            Node type = getNodeType(inDegree[i], outDegree[i]);
            switch (type) {
                case ROOT -> root = i;
                case BAD  -> bad = i;
                default   -> {}
            };
        }

        // case 1: one root, one bad node which has two parents, no cycle
        // case 2: one root, one bad node which has two parents, has cycle
        if (root != 0 && bad != 0) {
            for (int i = n - 1; i >= 0; i--) {
                int q = edges[i][1];
                if (bad == q) {
                    if (!isAllConnected(edges, edges[i]))
                        continue;
                    return edges[i];
                }
            }
            return null;
        }
        // case 3: no root, has cycle
        else if (root == 0) {
            for (int i = n - 1; i >= 0; i--) {
                int p = edges[i][0];
                int q = edges[i][1];

                // remove edge
                outDegree[p]--;
                inDegree[q]--;

                // check
                Node pNewType = getNodeType(inDegree[p], outDegree[p]);
                Node qNewType = getNodeType(inDegree[q], outDegree[q]);
                if ((pNewType == Node.ROOT || qNewType == Node.ROOT) && isAllConnected(edges, edges[i]))
                    return edges[i];

                // undo
                outDegree[p]++;
                inDegree[q]++;
            }
            return null;
        }
        else {
            return null;
        }
    }

    private Node getNodeType(int inDegree, int outDegree) {
        if (inDegree == 0 && outDegree > 0)
            return Node.ROOT;
        if (inDegree == 1 && outDegree > 0)
            return Node.MID;
        if (inDegree == 1 && outDegree == 0)
            return Node.LEAF;
        // inDegree == 2
        return Node.BAD;
    }

    private boolean isAllConnected(int[][] edges, int[] exclude) {
        int n = edges.length;
        UF uf = new UF(n);
        for (int[] edge : edges) {
            if (edge == exclude)
                continue;

            uf.union(edge[0] - 1, edge[1] - 1);
        }

        return uf.count == 1;
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
