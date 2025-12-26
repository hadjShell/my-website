---
title: Kruskal's Algorithm Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q1584. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)

- ```java
  class Solution {
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

      public int minCostConnectPoints(int[][] points) {
          List<int[]> graph = buildGraph(points);
          int mst = 0;
          UF uf = new UF(points.length);

          Collections.sort(graph, (a, b) -> a[2] - b[2]);

          for (int[] edge : graph) {
              int x = edge[0], y = edge[1], dist = edge[2];

              if (uf.isConnected(x, y))
                  continue;

              uf.union(x, y);
              mst += dist;
          }

          return uf.count == 1 ? mst : -1;
      }

      private List<int[]> buildGraph(int[][] points) {
          List<int[]> graph = new ArrayList<>();

          for (int i = 0; i < points.length; i++)
              for (int j = i + 1; j < points.length; j++) {
                  graph.add(new int[] {i, j, manhattanDistance(points[i][0], points[i][1], points[j][0], points[j][1])});
              }

          return graph;
      }

      private int manhattanDistance(int x1, int y1, int x2, int y2) {
          return Math.abs(x1 - x2) + Math.abs(y1 - y2);
      }
  }

  ```
