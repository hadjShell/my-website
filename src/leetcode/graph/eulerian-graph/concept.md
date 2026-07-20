---
title: Eulerian Graph Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

::: important Problem Domain

一笔画问题。 DFS every edge.

:::

- Origin from the famous Seven Bridges of Königsberg

- **Eulerian Path**: 在图中找到一条路径，使得**每条边都被遍历**恰好一次的路径

- **Eulerian Circuit**: 欧拉路径的特殊情况，即起点和终点是同一个节点的欧拉路径

- **欧拉图（Eulerian Graph）**：存在欧拉回路的图

- **半欧拉图（Semi-Eulerian Graph）**：存在欧拉路径但不存在欧拉回路的图

- **非欧拉图（Non-Eulerian Graph）**：既不存在欧拉路径也不存在欧拉回路的图

- Property
  - **Undirected graph**
    - 欧拉图（存在欧拉回路）的充要条件是 **所有节点的度数都是偶数**。
    - 半欧拉图（存在欧拉路径）的充要条件是 **有且仅有两个节点的度数为奇数**。

  - **Directed graph**
    - 欧拉图（存在欧拉回路）的充要条件是 **每个节点的入度等于出度**。
    - 半欧拉图（存在欧拉路径）的充要条件是 **有一个节点出度比入度多 1，有一个节点入度比出度多 1，其余节点入度等于出度**。

## 🛠️ Algorithm

::: tip

欧拉路径相关的算法在力扣上都是 Hard 级别的题目，其难点主要在于**如何把题目转化为求解欧拉路径的场景**

:::

```java
// Time complexity: O(E + V), because we delete the accessed edge, instead of using boolean[][] visited
// visited is limited when there exists multiple edges

class HierholzerAlgorithm {

    // 计算欧拉路径/回路，不存在则返回 null
    public static List<Integer> findEulerianPath(Graph graph) {
        // 1. 根据度数确定起点
        int start = findStartNode(graph);
        if (start == -1) {
            // 不存在欧拉路径/回路
            return null;
        }

        // 2. 从起点开始执行 DFS 算法，记录后序遍历结果
        List<Integer> postOrder = new ArrayList<>();
        traverse(graph, start, postOrder);

        // 3. 反转后序遍历结果，即可得到欧拉路径/回路
        Collections.reverse(postOrder);
        return postOrder;
    }

    // 图结构的 DFS 遍历函数
    private static void traverse(Graph graph, int u, List<Integer> postOrder) {
        // base case
        if (u < 0 || u >= graph.size()) {
            return;
        }

        while (!graph.neighbors(u).isEmpty()) {
            Edge edge = graph.neighbors(u).get(0);
            int v = edge.to;
            // 直接删掉边，避免重复遍历
            graph.removeEdge(u, v);
            traverse(graph, v, postOrder);
        }

        // 后序位置，记录后序遍历结果
        postOrder.add(u);
    }

    // 根据度数确定起点，如果不存在欧拉路径，返回 -1
    // 有向图和无向图的代码实现不同
    private static int findStartNode(Graph graph) {
        // ...
    }
}
```

::: tip Why preorder fails?

Hierholzer’s algorithm records vertices in postorder because **a vertex’s correct position in the Eulerian path is known only after all of its unused outgoing edges have been consumed**.
Preorder doesn't tell you where vertex belongs in the final Eulerian path. You may immediately follow an edge into a **dead end**, even though that dead end must appear only at the end of the final path.

Consider:

```text
0 → 1
1 → 0
0 → 2
```

A valid Eulerian path is: `0 → 1 → 0 → 2`.

Suppose DFS explores 0 → 2 first.

Using preorder:

```text
enter 0: record 0
enter 2: record 2       // dead end
backtrack to 0
enter 1: record 1
enter 0: record 0
```

The result is: `0, 2, 1, 0`. This is invalid because there is no edge `2 → 1`.

:::

```java
// 无向图的 findStartNode 函数实现
private static int findStartNode(Graph graph) {
    int start = 0;
    // 记录奇数度节点的数量
    int oddDegreeCount = 0;
    for (int i = 0; i < graph.size(); i++) {
        if (graph.neighbors(i).size() % 2 == 1) {
            oddDegreeCount++;
            start = i;
        }
    }
    // 如果奇数度节点的数量不是 0 或 2，则不存在欧拉路径
    if (oddDegreeCount != 0 && oddDegreeCount != 2) {
        return -1;
    }
    // 如果奇数度节点的数量是 0，则任意节点都可以作为起点，此时 start=0
    // 如果奇数度节点的数量是 2，任意一个奇数度节点作为起点，此时 start 就是奇数度节点
    return start;
}
```

```java
// 有向图的 findStartNode 函数实现
private static int findStartNode(Graph graph) {
    // 记录每个节点的入度和出度
    int[] inDegree = new int[graph.size()];
    int[] outDegree = new int[graph.size()];
    for (int i = 0; i < graph.size(); i++) {
        for (Edge edge : graph.neighbors(i)) {
            inDegree[edge.to]++;
            outDegree[i]++;
        }
    }
    // 如果每个节点的入度出度都相同，则存在欧拉回路，任意节点都可以作为起点
    boolean allSame = true;
    for (int i = 0; i < graph.size(); i++) {
        if (inDegree[i] != outDegree[i]) {
            allSame = false;
            break;
        }
    }
    if (allSame) {
        // 任意节点都可以作为起点，就让我们以 0 作为起点吧
        return 0;
    }

    // 现在寻找是否存在节点 x 和 y 满足：
    // inDegree[x] - outDegree[x] = 1 && inDegree[y] - outDegree[y] = -1
    // 且其他节点的入度和出度都相等
    // 如果存在，则 x 是起点，y 是终点
    int x = -1, y = -1;
    for (int i = 0; i < graph.size(); i++) {
        int delta = inDegree[i] - outDegree[i];
        if (delta == 0) {
            continue;
        }
        if (delta != 1 && delta != -1) {
            // 不存在欧拉路径
            return -1;
        }
        if (delta == 1 && x == -1) {
            x = i;
        } else if (delta == -1 && y == -1) {
            y = i;
        } else {
            // 不存在欧拉路径
            return -1;
        }
    }

    if (x != -1 && y != -1) {
        // 存在欧拉路径，x 是起点
        return x;
    }

    return -1;
}
```
