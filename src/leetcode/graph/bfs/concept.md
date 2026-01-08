---
title: Graph BFS Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

Shortest path problem

:::

## 🧠 Concept

- Hardest part is to abstract the graph from the real-world scenario

- ```java
  // 从 s 开始 BFS 遍历图的所有节点，且记录遍历的步数
  void bfs(Graph graph, int s) {
      boolean[] visited = new boolean[graph.size()];
      Queue<Integer> q = new ArrayDeque<>();
      int step = 0;

      q.offer(s);
      visited[s] = true;

      while (!q.isEmpty()) {
          int sz = q.size();
          for (int i = 0; i < sz; i++) {
              int cur = q.poll();
              System.out.println("visit " + cur + " at step " + step);
              for (Edge e : graph.neighbors(cur)) {
                  if (visited[e.to]) {
                      continue;
                  }
                  q.offer(e.to);
                  visited[e.to] = true;
              }
          }
          step++;
      }
  }
  ```

## 🛠️ Trick: Bidirectional BFS

- Bfs from start node and target node at the same time, stop when **there is an intersection of two queue**.

- We must know where is the start node and target node at the beginning.

- In practical, we use **two hash set and a temp hash set** to mimic traditional bfs queue to save time.

- Another optimisation is to always bfs the queue which has fewer nodes first.

```

```
