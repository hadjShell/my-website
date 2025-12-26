---
title: Bipartite Graph Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q785. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)

- ```java
  class Solution {
      private boolean isBipartite = true;

      public boolean isBipartite(int[][] graph) {
          // 0: not visited, 1: red, -1:green
          int[] visited = new int[graph.length];

          // graph may not be connected
          for (int v = 0; v < graph.length; v++) {
              if (visited[v] == 0)    traverse(graph, v, 1, visited);
          }

          return isBipartite;
      }

      private void traverse(int[][] graph, int vertex, int fromColor, int[] visited) {
          if (!isBipartite)
              return;

          if (vertex < 0 || vertex > graph.length)
              return;

          if (visited[vertex] != 0) {
              isBipartite = visited[vertex] != fromColor;
              return;
          }

          visited[vertex] = -fromColor;
          for (int v : graph[vertex]) {
              traverse(graph, v, visited[vertex], visited);
          }
      }
  }
  ```

### Q886. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)

- ```java
  class Solution {
      private boolean isBipartite = true;

      public boolean possibleBipartition(int n, int[][] dislikes) {
          List<Integer>[] graph = buildGraph(n, dislikes);

          return isBipartite(graph);
      }

      private List<Integer>[] buildGraph(int n, int[][] dislikes) {
          List<Integer>[] graph = new List[n + 1];

          for (int i = 1; i <= n; i++)
              graph[i] = new ArrayList<>();

          for (int[] edge : dislikes) {
              int p1 = edge[0], p2 = edge[1];

              graph[p1].add(p2);
              graph[p2].add(p1);
          }

          return graph;
      }

      private boolean isBipartite(List<Integer>[] graph) {
          // 0: not visited, 1: red, -1:green
          int[] visited = new int[graph.length];

          // graph may not be connected
          for (int v = 1; v < graph.length; v++) {
              if (visited[v] == 0)    traverse(graph, v, 1, visited);
          }

          return isBipartite;
      }

      private void traverse(List<Integer>[] graph, int vertex, int fromColor, int[] visited) {
          if (!isBipartite)
              return;

          if (vertex < 1 || vertex > graph.length)
              return;

          if (visited[vertex] != 0) {
              isBipartite = visited[vertex] != fromColor;
              return;
          }

          visited[vertex] = -fromColor;
          for (int v : graph[vertex]) {
              traverse(graph, v, visited[vertex], visited);
          }
      }
  }
  ```
