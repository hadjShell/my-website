---
title: Prim's Algorithm Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## Concept

- **BFS** + **Greedy Algorithm**

- Prim **dynamically sorts edges and constructs MST**; Kruskal **sorts the edges first and then construct MST**

## Algorithm

- ```java
  class State {
      // 当前节点 ID
      int node;
      // 进入该节点的边的权重
      int weight;

      public State(int node, int weight) {
          this.node = node;
          this.weight = weight;
      }
  }

  // 输入加权无环图 graph（可包含负权重边）
  // 返回最小生成树的权重和
  int prim(Graph graph) {
      // 记录最小生成树的权重和
      int weightSum = 0;

      // 记录每个节点是否被访问过，默认初始化为 false
      boolean[] visited = new boolean[graph.length];

      // 优先级队列，weight 较小的节点排在前面
      Queue<State> pq = new PriorityQueue<>((a, b) -> {
          return a.weight - b.weight;
      });

      // 可以从任意一个节点开始构建最小生成树
      pq.offer(new State(0, 0));

      while (!pq.isEmpty()) {
          State state = pq.poll();
          int curNode = state.node;
          int curWeight = state.weight;

          if (visited[curNode]) {
              continue;
          }

          // curNode 节点第一次出队时，就找到了一条最小生成树的边
          // 更新最小生成树的权重和
          weightSum += curWeight;
          visited[curNode] = true;

          for (Edge e : graph.neighbors(curNode)) {
              int nextNode = e.to;
              int nextWeight = e.weight;

              if (!visited[nextNode]) {
                  // state.weight 为 curNode->nextNode 的边的权重
                  pq.offer(new State(nextNode, nextWeight));
              }
          }
      }

      // 最后检查是否所有节点都被访问过
      // 如果存在未被访问的节点，说明图不是连通的，返回 -1
      for (int i = 0; i < visited.length; i++) {
          if (!visited[i]) {
              return -1;
          }
      }

      return weightSum;
  }
  ```

- Difference with Dijkstra

  - Dijkstra can be used for **both directed and undirected graph**; Prim can only solve MST problem in **undirected graph**.
  - Dijkstra requests **no edge of negative weight**; Prim doesn't.

## Complexity

- Time complexity: $O(ElogE+V)$

- Space complexity: $O(E + V)$

## Cut theory

- Definitions
  - In graph theory, a **cut** is a partition of the vertices of a graph into two disjoint subsets.
  - A **cut set** of a cut $C(S1, S2)$ of a connected graph $G(V, E)$ can be defined as the set of edges that have one endpoint in $S1$ and the other in $S2$. These edges are said to **cross** the cut.
  - A vertex $V~c~$ is a **cut vertex** if a connected graph $G(V, E)$ exists, and removing $V~c~$ from $G$ disconnects that graph.
  - An edge $E~c~$ is a **cut edge** of a connected graph $G(V, E)$ if $E~c~ \in E$ and $G - E~c~$ disconnects the graph.
- Variants of a Cut
  - A minimum cut is the minimum sum of weights of the edges whose removal disconnects the graph.
  - A maximum cut is the maximum sum of weights of the edges whose removal disconnects the graph.
- Cut Property in Minimum Spanning Tree

  - **According to the cut property, if there is an edge in the cut set which has the smallest edge weight or cost among all other edges in the cut set, the edge should be included in the minimum spanning tree.**
