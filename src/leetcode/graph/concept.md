---
title: Graph Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

### Definition

- A graph consists of a collection of objects (**vertex**) and connections between them (**edge**)

- A superset of non-binary tree

- Degree
  - How many edges does a vertex have

  - **Indegree and outdegree** for a directed graph

- Simple graph
  - Graphs without **self edges** or **parallel edges**

  - $E = [0, V*(V - 1) / 2] \approx [0, V^2]$
  - [**Sparse graph** -> **Dense graph**]

- Subgraph
  - **Spanning subgraph**
    - A subgraph which contains **all vertices and some edges**

  - **Induced subgraph**
    - A subgraph which contains **some vertices and all edges connecting them**

### Types

- Directed graph

- Undirected graph
  > Is technically a **dual-directed graph**
- Weighted graph
- Unweighted graph
- Cyclic graph
- Acyclic graph

### Connectivity

- **Connected graph**
  - If there is **a path** between any pair of vertices in an **undirected graph**, it is a connected graph

- **Strongly Connected Graph**
  - If there is **a directed path** between any pair of vertices in a **directed graph**, it is a strongly connected graph

- **Weakly Connected Graph**
  - If there is **a path** between any pair of vertices in a **directed graph after turning into an undirected graph**, it is a weakly connected graph

- **Connected component**

### Implementations

- **Edge list**

- **Adjacent list**
  - Vertices are stored as records or objects, and every vertex stores a list of adjacent vertices

- **Adjacent matrix**
  - A two-dimensional matrix, in which the rows represent source vertices and columns represent destination vertices
  - Data on edges and vertices must be stored externally. Only the cost for one edge can be stored between each pair of vertices

- **Incidence matrix**
  - A two-dimensional matrix, in which the rows represent the vertices and columns represent the edges
  - The entries indicate the incidence relation between the vertex at a row and edge at a column

- Examples
  - Undirected and unweighted
    ![](/assets/image/leetcode/uduw_graph.png)
  - Directed and weighted
    ![](/assets/image/leetcode/dw_graph.png)

- **Complexity**

  |                                                                                      |                                  Adjacency list                                   |                           Adjacency matrix                            |                                Incidence matrix                                 |
  | :----------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
  | Store graph                                                                          |                                     $O(V+E)$                                      |                               $O(V^2)$                                |                                    $O(V⋅E)$                                     |
  | Add vertex                                                                           |                                      $O(1)$                                       |                               $O(V^2)$                                |                                    $O(V⋅E)$                                     |
  | Add edge                                                                             |                                      $O(1)$                                       |                                $O(1)$                                 |                                    $O(V⋅E)$                                     |
  | Remove vertex                                                                        |                                      $O(E)$                                       |                               $O(V^2)$                                |                                    $O(V⋅E)$                                     |
  | Remove edge                                                                          |                                      $O(V)$                                       |                                $O(1)$                                 |                                    $O(V⋅E)$                                     |
  | Are vertices _x_ and _y_ adjacent (assuming that their storage positions are known)? |                                      $O(V)$                                       |                                $O(1)$                                 |                                     $O(E)$                                      |
  | Remarks                                                                              | Slow to remove vertices and edges, because it needs to find all vertices or edges | Slow to add or remove vertices, because matrix must be resized/copied | Slow to add or remove vertices and edges, because matrix must be resized/copied |

::: important Tricks

- **Adjacency lists** are generally preferred for **sparse graphs**, while an **adjacency matrix** is preferred for **dense graphs**.

- Adjacency matrix can leverage matrix operations to solve some subtle problems.

- **The time complexity of operations in the adjacency list** representation can be improved by storing the sets of **adjacent vertices** in more efficient data structures, such as **hash tables** or **balanced BST**.

:::

## 🛠️ Pattern

::: tip

Just like tree, think what to do and when to do on a vertex.

Prefer using adjacent list for leetcode problem.

:::

### Traversal

::: info

In general, DFS finds all paths, BFS finds the shortest path.

:::

#### DFS

- ```java
  // 遍历所有节点
  // O(E + V)

  // in case there is a cycle in the graph that causes dead loop
  void traverse(Graph graph, int s, boolean[] visited) {
      // base case
      if (s < 0 || s >= graph.size()) {
          return;
      }
      if (visited[s]) {
          // 防止死循环
          return;
      }
      // 前序位置
      visited[s] = true;
      System.out.println("visit " + s);
      for (Edge e : graph.neighbors(s)) {
          traverse(graph, e.to, visited);
      }
      // 后序位置
  }
  ```

::: tip

DFS visits every reachable node and examines every reachable edge, but it only uses a subset of the edges—called **DFS tree edges**—to discover nodes.
For a connected graph, that subset contains `V - 1` edges, even when the graph contains many more than `V - 1` edges.

:::

- ```java
  // 遍历所有边
  // O(E + V^2)

  void traverseEdges(Graph graph, int s, boolean[][] visited) {
      // base case
      if (s < 0 || s >= graph.size()) {
          return;
      }
      for (Edge e : graph.neighbors(s)) {
        // 如果边已经被遍历过，则跳过
        if (visited[s][e.to]) {
          continue;
        }
        // 标记并访问边
        visited[s][e.to] = true;
        System.out.println("visit edge: " + s + " -> " + e.to);
        traverseEdges(graph, e.to, visited);
      }
  }
  ```

::: tip Why do we need DFS all vertices?

Suppose you want to perform an operation on every edge exactly once.
For a directed graph, you can process each edge as it appears using DFS all vertices code.
But for an undirected graph, this processes every edge twice: `a -> b, b -> a`. To process each undirected edge only once, you need to identify or mark edges.

:::

- ```java
  // 遍历图的所有路径，寻找从 src 到 dest 的所有路径

  // onPath 和 path 记录当前递归路径上的节点
  boolean[] onPath = new boolean[graph.size()];
  List<Integer> path = new LinkedList<>();

  void traverse(Graph graph, int src, int dest) {
      // base case
      if (src < 0 || src >= graph.size()) {
          return;
      }
      if (onPath[src]) {
          // 防止死循环（成环）
          return;
      }
      if (src == dest) {
          // 找到目标节点
          System.out.println("find path: " + String.join("->", path) + "->" + dest);
          return;
      }

      // 前序位置
      onPath[src] = true;
      path.add(src);
      for (Edge e : graph.neighbors(src)) {
          traverse(graph, e.to, dest);
      }
      // 后序位置
      path.remove(path.size() - 1);
      onPath[src] = false;
  }

  // 因为前文遍历节点的代码中，visited 数组的职责是保证每个节点只会被访问一次。
  // 而对于图结构来说，要想遍历所有路径，可能会多次访问同一个节点，这是关键的区别。
  ```

- **同时使用`visited` and `onPath`**
  - 遍历所有路径的算法复杂度较高，大部分情况下我们可能并不需要穷举完所有路径，而是仅需要找到某一条符合条件的路径。这种场景下，我们可能会借助 `visited` 数组进行剪枝，提前排除一些不符合条件的路径，从而降低复杂度。

- **不使用`visited` and `onPath`**
  - Acyclic graph

::: tip

对于树来说，遍历所有点就是遍历所有边，因为树的每个节点只有一条来自父节点的边（除了 root）。遍历路径思想一样。

:::

#### BFS

- ```java
  // 从 s 开始 BFS 遍历图的所有节点，且记录遍历的步数
  void bfs(Graph graph, int s) {
      boolean[] visited = new boolean[graph.size()];
      Queue<Integer> q = new LinkedList<>();
      q.offer(s);
      visited[s] = true;
      // 记录从 s 开始走到当前节点的步数
      int step = 0;
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

::: important Tricks

Optimised BFS: **double-way BFS**

:::
