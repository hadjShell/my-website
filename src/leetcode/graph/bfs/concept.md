---
title: Graph BFS Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

**Shortest path problem** from one node to another node. Normally the start node and end node is given, so bidirectional BFS can be used.

The hardest part is to **abstract the graph from the real-world scenario**. Any graph problem that is given to you will not be written in a very clear manner that it is a graph problem. You have to deduce this fact by yourself.

A graph is a collection of nodes and edges, where each node represents a state or an object and each edge represents a relationship or a transition between nodes.

:::

## 🧠 Concept

```java
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

::: tip

Be creative with the data structure selection on `queue` and `visited`. For example, `queue` may be better with hash set; sometimes we may not need `visited` at all if we have fixed and unused options on each level.

:::

## 🛠️ Trick: Bidirectional BFS

- Bfs from start node and target node at the same time, stop when **there is an intersection of two queue**.

- We must know where is the start node and target node at the beginning.

- In practical, we use **two hash set and a temp hash set** to mimic traditional bfs queue to save time.

- Another optimisation is to always bfs the queue which has fewer nodes first.
