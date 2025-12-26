---
title: Dijkstra's Algorithm Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q743. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)

- ```java
  class Solution {
      class State {
          int node;
          int distFromStart;

          public State() {}
          public State(int node, int distFromStart) {
              this.node = node;
              this.distFromStart = distFromStart;
          }
      }

      public int networkDelayTime(int[][] times, int n, int k) {
          List<int[]>[] graph = buildGraph(times, n);
          int[] distTo = dijkstra(graph, k, n);
          int min = -1;

          for (int dist : distTo) {
              min = Math.max(min, dist);
          }

          return min == Integer.MAX_VALUE ? -1 : min;
      }

      private int[] dijkstra(List<int[]>[] graph, int src, int size) {
          int[] distTo = new int[size];
          Arrays.fill(distTo, Integer.MAX_VALUE);

          Queue<State> pq = new PriorityQueue<>((a, b) -> a.distFromStart - b.distFromStart);

          pq.offer(new State(src - 1, 0));
          distTo[src - 1] = 0;

          while (!pq.isEmpty()) {
              State state = pq.poll();
              int curNode = state.node;
              int curDistFromStart = state.distFromStart;
              List<int[]> edges = graph[curNode];

              if (distTo[curNode] < curDistFromStart)
                  continue;

              for (int[] edge : edges) {
                  int nextNode = edge[0];
                  int nextDistFromStart = curDistFromStart + edge[1];

                  if (distTo[nextNode] <= nextDistFromStart)
                      continue;

                  pq.offer(new State(nextNode, nextDistFromStart));
                  distTo[nextNode] = nextDistFromStart;
              }
          }

          return distTo;
      }

      private List<int[]>[] buildGraph(int[][] times, int size) {
          List<int[]>[] graph = new List[size];

          for (int i = 0; i < size; i++) {
              graph[i] = new ArrayList<>();
          }

          for (int[] edge : times) {
              int src = edge[0] - 1, dist = edge[1] - 1, weight = edge[2];

              graph[src].add(new int[] {dist, weight});
          }

          return graph;
      }
  }
  ```

### :star:Q787. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

- ```java
  class Solution {

      class State {
          int node;
          int distFromStart;
          int edgesFromStart;

          public State() {}
          public State(int node, int distFromStart, int edgesFromStart) {
              this.node = node;
              this.distFromStart = distFromStart;
              this.edgesFromStart = edgesFromStart;
          }
      }

      public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
          List<int[]>[] graph = buildGraph(flights, n);

          return dijkstra(graph, src, dst, k + 1);
      }

      private int dijkstra(List<int[]>[] graph, int src, int dst, int k) {
          // distTo[i][j]: the shortest path from src to i that goes through j edges, at most k edges
          int[][] distTo = new int[graph.length][k + 1];
          for (int i = 0; i < distTo.length; i++)
              Arrays.fill(distTo[i], Integer.MAX_VALUE);

          Queue<State> pq = new PriorityQueue<>((a, b) -> a.distFromStart - b.distFromStart);

          pq.offer(new State(src, 0, 0));
          distTo[src][0] = 0;

          while (!pq.isEmpty()) {
              State state = pq.poll();
              int curNode = state.node;
              int curDistFromStart = state.distFromStart;
              int curEdgesFromStart = state.edgesFromStart;
              List<int[]> edges = graph[curNode];

              if (distTo[curNode][curEdgesFromStart] < curDistFromStart)
                  continue;

              if (curNode == dst)
                  return curDistFromStart;

              for (int[] edge : edges) {
                  int nextNode = edge[0];
                  int nextDistFromStart = curDistFromStart + edge[1];
                  int nextEdgesFromStart = curEdgesFromStart + 1;

                  if (nextEdgesFromStart > k || nextDistFromStart >= distTo[nextNode][nextEdgesFromStart])
                      continue;
                  pq.offer(new State(nextNode, nextDistFromStart, nextEdgesFromStart));
                  distTo[nextNode][nextEdgesFromStart] = nextDistFromStart;
              }
          }

          return -1;
      }

      private List<int[]>[] buildGraph(int[][] flights, int n) {
          List<int[]>[] graph = new List[n];

          for (int i = 0; i < n; i++) {
              graph[i] = new ArrayList<>();
          }

          for (int[] edge : flights) {
              int src = edge[0], dist = edge[1], price = edge[2];

              graph[src].add(new int[] {dist, price});
          }

          return graph;
      }
  }
  ```

### :star:Q1368. [Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/)

- The most important point is to **translate the quesiton**

- `ArrayDeque` can replace `PriorityQueue` for this question

  - Because weight is either 1 or 0. If it's 1, push the state to the tail of the queue; otherwise, push it to the head
  - Optimise time complexity from $O(ElogE)$ to $O(E)$

- ```java
  class Solution {

      class State {
          int node;
          int distFromStart;

          public State() {}
          public State(int node, int distFromStart) {
              this.node = node;
              this.distFromStart = distFromStart;
          }
      }

      public int minCost(int[][] grid) {
          List<int[]>[] graph = buildGraph(grid);

          return dijkstra(graph, 0, graph.length - 1);
      }

      private int dijkstra(List<int[]>[] graph, int src, int dst) {
          int[] distTo = new int[graph.length];
          Arrays.fill(distTo, Integer.MAX_VALUE);

          Deque<State> pq = new ArrayDeque<>();

          pq.addFirst(new State(src, 0));
          distTo[src] = 0;

          while (!pq.isEmpty()) {
              State state = pq.removeFirst();
              int curNode = state.node;
              int curDistFromStart = state.distFromStart;
              List<int[]> edges = graph[curNode];

              if (distTo[curNode] < curDistFromStart)
                  continue;

              if (curNode == dst)
                  return curDistFromStart;

              for (int[] edge : edges) {
                  int nextNode = edge[0];
                  int nextDistFromStart = curDistFromStart + edge[1];

                  if (distTo[nextNode] <= nextDistFromStart)
                      continue;

                  if (edge[1] == 0)
                      pq.addFirst(new State(nextNode, nextDistFromStart));
                  else
                      pq.addLast(new State(nextNode, nextDistFromStart));
                  distTo[nextNode] = nextDistFromStart;
              }
          }

          return -1;
      }

      private List<int[]>[] buildGraph(int[][] grid) {
          int row = grid.length, col = grid[0].length;
          // right, left, low, up
          int[][] dir = new int[][] {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
          List<int[]>[] graph = new List[row * col];

          for (int i = 0; i < graph.length; i++) {
              graph[i] = new ArrayList<>();
          }

          for (int i = 0; i < row; i++)
              for (int j = 0; j < col; j++) {
                  List<int[]> edges = graph[i * col + j];
                  int direction = grid[i][j] - 1;

                  for (int p = 0; p < dir.length; p++) {
                      int[] d = dir[p];
                      int x = i + d[0], y = j + d[1];
                      int cost = p == direction ? 0 : 1;

                      if (x < 0 || y < 0 || x == row || y == col)     continue;
                      edges.add(new int[] {x * col + y, cost});
                  }
              }

          return graph;
      }
  }
  ```

### :star:Q1514. [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)

- Dijkstra viriation find longest path

- ```java
  class Solution {
      class State {
          int node;
          double distFromStart;

          public State() {}
          public State(int node, double distFromStart) {
              this.node = node;
              this.distFromStart = distFromStart;
          }
      }

      public double maxProbability(int n, int[][] edges, double[] succProb, int start_node, int end_node) {
          List<double[]>[] graph = buildGraph(n, edges, succProb);

          return dijkstra(graph, start_node, end_node);
      }

      private double dijkstra(List<double[]>[] graph, int src, int dst) {
          double[] distTo = new double[graph.length];
          Arrays.fill(distTo, 0);

          Queue<State> pq = new PriorityQueue<>((a, b) -> {
              if (b.distFromStart > a.distFromStart)
                  return 1;
              else if (b.distFromStart < a.distFromStart)
                  return -1;
              else
                  return 0;
          });

          pq.offer(new State(src, 1));
          distTo[src] = 1;

          while (!pq.isEmpty()) {
              State state = pq.poll();
              int curNode = state.node;
              double curDistFromStart = state.distFromStart;
              List<double[]> edges = graph[curNode];

              if (distTo[curNode] > curDistFromStart)
                  continue;

              if (curNode == dst) {
                  return curDistFromStart;
              }

              for (double[] edge : edges) {
                  int nextNode = (int) edge[0];
                  double nextDistFromStart = curDistFromStart * edge[1];

                  if (distTo[nextNode] >= nextDistFromStart)
                      continue;

                  pq.offer(new State(nextNode, nextDistFromStart));
                  distTo[nextNode] = nextDistFromStart;
              }
          }

          return 0;
      }

      private List<double[]>[] buildGraph(int n, int[][] edges, double[] succProb) {
          List<double[]>[] graph = new List[n];

          for (int i = 0; i < graph.length; i++) {
              graph[i] = new ArrayList<>();
          }

          for (int i = 0; i < succProb.length; i++) {
              int a = edges[i][0], b = edges[i][1];
              double prob = succProb[i];

              graph[a].add(new double[] {b, prob});
              graph[b].add(new double[] {a, prob});
          }

          return graph;
      }
  }
  ```

### Q1631. [Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)

- ```java
  class Solution {

      class State {
          int node;
          int distFromStart;

          public State() {}
          public State(int node, int distFromStart) {
              this.node = node;
              this.distFromStart = distFromStart;
          }
      }

      public int minimumEffortPath(int[][] heights) {
          List<int[]>[] graph = buildGraph(heights);
          int row = heights.length, col = heights[0].length;

          return dijkstra(graph, 0, row * col - 1);
      }

      private int dijkstra(List<int[]>[] graph, int src, int dst) {
          int[] distTo = new int[graph.length];
          Arrays.fill(distTo, Integer.MAX_VALUE);

          Queue<State> pq = new PriorityQueue<>((a, b) -> a.distFromStart - b.distFromStart);

          pq.offer(new State(src, 0));
          distTo[src] = 0;

          while (!pq.isEmpty()) {
              State state = pq.poll();
              int curNode = state.node;
              int curDistFromStart = state.distFromStart;
              List<int[]> edges = graph[curNode];

              if (distTo[curNode] < curDistFromStart)
                  continue;

              if (curNode == dst) {
                  return curDistFromStart;
              }

              for (int[] edge : edges) {
                  int nextNode = edge[0];
                  int nextDistFromStart = Math.max(curDistFromStart, edge[1]);

                  if (distTo[nextNode] <= nextDistFromStart)
                      continue;

                  pq.offer(new State(nextNode, nextDistFromStart));
                  distTo[nextNode] = nextDistFromStart;
              }
          }

          return -1;
      }

      private List<int[]>[] buildGraph(int[][] heights) {
          int row = heights.length, col = heights[0].length;
          List<int[]>[] graph = new List[row * col];
          int[][] dir = new int[][] {{1, 0}, {0, 1}, {0, -1}, {-1, 0}};

          for (int i = 0; i < graph.length; i++) {
              graph[i] = new ArrayList<>();
          }

          for (int i = 0; i < row; i++)
              for (int j = 0; j < col; j++) {
                  List<int[]> edges = graph[i * col + j];
                  for (int[] d : dir) {
                      int x = i + d[0], y = j + d[1];

                      if (x < 0 || y < 0 || x == row || y == col)
                          continue;

                      edges.add(new int[] {x * col + y, Math.abs(heights[i][j] - heights[x][y])});
                  }
              }

          return graph;
      }
  }
  ```
