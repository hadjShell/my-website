---
title: Union Find Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

::: important Problem Domain

**Undirected Graph Connectivity Problem**

动态连通性问题就是说，给你输入一个图结构，然后进行若干次「连接操作」，同时可能会查询任意两个节点是否「连通」，或者查询当前图中有多少个「连通分量」。我们的目标是设计一种数据结构，在尽可能小的时间复杂度下完成连接操作和查询操作。

:::

- **高效连通** + **查找连通**

- Also known as **DSU** (Disjoint Set Union)

- Properties of Connectivity
  - **Reflexivity**: Nodes p and p are themselves connected.
  - **Symmetry**: If nodes p and q are connected, then q and p are also connected.

  - **Transitivity**: If nodes p and q are connected, and q and r are connected, then p and r are also connected.

- Union find class is **a forest (multiple trees)** under the hood, **every tree represents a connected component**
  - If no optimisation, **tree may degrade to a linked list**, resulting to **$O(N)$**

  - Optimisation: **Union by Rank**
    - Introduce a **rank** into every tree, i.e. **the number of the nodes in the tree**. Always **append tree with lower rank to tree with higher rank**, so that tree is as balanced as possible
    - Eventually, **$O(logN)$**
  - Optimisation: **Path Compression**
    - **Compress the tree to a tree of height 2** when `find` is operated
    - Amortized complexity **$O(1)$** for all operations

- Weighted Union-Find
  - A normal Union-Find tells us whether two elements belong to the same connected component. A weighted Union-Find additionally stores the ratio between each node and its parent.

## 🛠️ Algorithm

::: tip

Try to reuse the following class and build solution around it instead of modifying it

:::

```java
class UF {
    // 连通分量个数
    private int count;
    // 存储每个节点的父节点
    private int[] parent;

    // n 为图中节点的个数
    public UF(int n) {
        this.count = n;
        parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }

    // 将节点 p 和节点 q 连通
    public void union(int p, int q) {
        int rootP = find(p);
        int rootQ = find(q);

        if (rootP == rootQ)
            return;

        parent[rootQ] = rootP;
        // 两个连通分量合并成一个连通分量
        count--;
    }

    // 判断节点 p 和节点 q 是否连通
    public boolean isConnected(int p, int q) {
        int rootP = find(p);
        int rootQ = find(q);
        return rootP == rootQ;
    }

    public int find(int x) {
        // 本质上是后序DFS
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // 返回图中的连通分量个数
    public int count() {
        return count;
    }
}
```
