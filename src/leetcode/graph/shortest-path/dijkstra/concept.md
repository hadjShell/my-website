---
title: Dijkstra's Algorithm Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

::: important Problem Domain

Find the **single-source** shortest path in a **non-negative weighted directed graph**

> A bit more efficient than Bellman-Ford

:::

- It's a **greedy BFS** essentially:

  - Standard BFS uses a queue, Dijkstra uses a **priority queue** to **minimal the amount of enqueue nodes**, which is greedy
  - Standard BFS uses `visited`, Dijkstra uses **`distTo`**
  - Dijikstra 需要**在节点出列时剪枝**

## 🛠️ Pattern

### Algorithm

- ```java
  class State {
      // 当前节点 ID
      int node;
      // 从起点 s 到当前 node 节点的最小路径权重和
      int distFromStart;

      public State(int node, int distFromStart) {
          this.node = node;
          this.distFromStart = distFromStart;
      }
  }

  // 输入不包含负权重边的加权图 graph 和起点 src
  // 返回从起点 src 到其他节点的最小路径权重和
  int[] dijkstra(Graph graph, int src) {
      // 记录从起点 src 到其他节点的最小路径权重和
      // distTo[i] 表示从起点 src 到节点 i 的最小路径权重和
      int[] distTo = new int[graph.size()];
      // 都初始化为正无穷，表示未计算
      Arrays.fill(distTo, Integer.MAX_VALUE);

      // 优先级队列，distFromStart 较小的节点排在前面
      Queue<State> pq = new PriorityQueue<>((a, b) -> {
          return a.distFromStart - b.distFromStart;
      });

      // 从起点 src 开始进行 BFS
      pq.offer(new State(src, 0));
      distTo[src] = 0;

      while (!pq.isEmpty()) {
          State state = pq.poll();
          int curNode = state.node;
          int curDistFromStart = state.distFromStart;

          // 在 Dijkstra 算法中，队列中可能存在重复的节点 state
          // 所以要在元素出队时进行判断，去除较差的重复节点
        	// 不是 <= 的原因是会直接忽略起点 src
        	if (distTo[curNode] < curDistFromStart) {
              continue;
          }

          for (Edge e : graph.neighbors(curNode)) {
              int nextNode = e.to;
              int nextDistFromStart = curDistFromStart + e.weight;

              if (distTo[nextNode] <= nextDistFromStart) {
                  continue;
              }

              pq.offer(new State(nextNode, nextDistFromStart));
              distTo[nextNode] = nextDistFromStart;
          }
      }

      return distTo;
  }
  ```

  ::: tip Two Important Observations

  - **当一个节点入队时，虽然更新了 `distTo[node]` 的值，但这个值并不一定是最短路径权重和，可能还存在更短的路径**

  - **当一个节点出队时，`state.distFromStart` 不一定是最短路径，而 `distTo[state.node]` 一定是最终的最短路径**

  :::

### Complexity

- **Time: $O(ElogE)$, Space: $O(V + E)$**
- Priority queue stores **maximum $E$ states**, because one node **can be enqueued at most its indegree times**, **enqueue and dequeue operation** of a priority queue is $O(logE)$

### Optimisation

- Optimisation for **Point-to-Point**

  - ```java
    // 计算 src 到 dst 的最短路径权重和
    int dijkstra(Graph graph, int src, int dst) {
        while (!pq.isEmpty()) {
            State state = pq.poll();
            int curNode = state.node;
            int curDistFromStart = state.distFromStart;

            if (distTo[curNode] < curDistFromStart) {
                continue;
            }
            // 节点出队时进行判断，遇到终点时直接返回
            if (curNode == dst) {
                return curDistFromStart;
            }
            ...

        }
        return -1;
    }
    ```

- Optimisation for **Limited edges**

  - ```java
    class State {
        int node;
        // 从起点到当前节点的路径权重和
        int distFromStart;
        // 从起点到当前节点经过的边的条数
        int edgesFromStart;

        public State(int node, int distFromStart, int edgesFromStart) {
            this.node = node;
            this.distFromStart = distFromStart;
            this.edgesFromStart = edgesFromStart;
        }
    }

    int[][] dijkstra(Graph graph, int src, int k) {
        // distTo[i][j] 的值就是起点 src 到达节点 i 的最短路径权重和，且经过的边数不超过 j
        int[][] distTo = new int[graph.length][k + 1];
        for (int i = 0; i < graph.length; i++) {
            Arrays.fill(distTo[i], Integer.MAX_VALUE);
        }

        Queue<State> pq = new PriorityQueue<>((a, b) -> {
            return a.distFromStart - b.distFromStart;
        });

        pq.offer(new State(src, 0, 0));
        distTo[src][0] = 0;

        while (!pq.isEmpty()) {
            State state = pq.poll();
            int curNode = state.node;
            int curDistFromStart = state.distFromStart;
            int curEdgesFromStart = state.edgesFromStart;

            if (distTo[curNode][curEdgesFromStart] < curDistFromStart) {
                continue;
            }

            for (int[] e : graph[curNode]) {
                int nextNode = e[0];
                int nextDistFromStart = curDistFromStart + e[1];
                int nextEdgesFromStart = curEdgesFromStart + 1;

                // 若已超过 k 条边，或无法优化路径权重和，直接跳过
                if (nextEdgesFromStart > k || distTo[nextNode][nextEdgesFromStart] < nextDistFromStart) {
                    continue;
                }

                pq.offer(new State(nextNode, nextDistFromStart, nextEdgesFromStart));
                distTo[nextNode][nextEdgesFromStart] = nextDistFromStart;
            }
        }

        return distTo;
    }
    ```

### Variation

- Dijkstra 算法计算的是「最优值」：

  - 如果每新增一条边，路径的总权重就会减少，那么最优值问题就是计算最长路径；
  - 如果每新增一条边，路径的总权重就会增加，那么最优值问题就是计算最短路径。

- 只要确保每条路径产生的效果相同（增加或减少路径权重），贪心思想就成立。如果说这条路径导致路径权重增加，那条路径导致路径权重减少，贪心思想就会失效，也就不能使用 Dijkstra 算法。
