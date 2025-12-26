---
title: Prim's Algorithm Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q1584. [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)

- ```java
  class Solution {

      class State {
          int node;
          int weight;

          public State() {}
          public State(int node, int weight) {
              this.node = node;
              this.weight = weight;
          }
      }

      public int minCostConnectPoints(int[][] points) {
          List<int[]>[] graph = buildGraph(points);

          return prim(graph);
      }

      private int prim(List<int[]>[] graph) {
          int mst = 0;
          boolean[] visited = new boolean[graph.length];
          Queue<State> pq = new PriorityQueue<>((a, b) -> a.weight - b.weight);

          pq.offer(new State(0, 0));

          while (!pq.isEmpty()) {
              State state = pq.poll();
              int curNode = state.node;
              int curWeight = state.weight;
              List<int[]> edges = graph[curNode];

              if (visited[curNode])   continue;

              visited[curNode] = true;
              mst += curWeight;

              for (int[] edge : edges) {
                  int nextNode = edge[0];
                  int nextWeight = edge[1];

                  if (visited[nextNode])  continue;
                  pq.offer(new State(nextNode, nextWeight));
              }
          }

          for (boolean v : visited) {
              if (v == false)     return -1;
          }

          return mst;
      }

      private List<int[]>[] buildGraph(int[][] points) {
          List<int[]>[] graph = new List[points.length];

          for (int i = 0; i < points.length; i++)
              graph[i] = new ArrayList<>();

          for (int i = 0; i < points.length; i++)
              for (int j = 0; j < points.length; j++) {
                  if (i == j)     continue;
                  graph[i].add(new int[] {j, manhattanDistance(points[i][0], points[i][1], points[j][0], points[j][1])});
              }

          return graph;
      }

      private int manhattanDistance(int x1, int y1, int x2, int y2) {
          return Math.abs(x1 - x2) + Math.abs(y1 - y2);
      }
  }
  ```
