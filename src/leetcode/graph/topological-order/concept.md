---
title: Topological Sort Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

::: important Problem Domain

Dependecy Problem

依赖问题，首先想到的就是把问题转化成「**有向图**」这种数据结构，只要图中存在环，那就说明存在循环依赖

:::

- **DAG** - Directed Acyclic Graph

- Definition

  - A topological order of a directed graph G = (V, E) is an ordering of its nodes as v1, v2, …, vn so that for every edge (vi , vj ) we have i < j
  - ![](/assets/image/leetcode/topological.png)

- Properties

  - If G is a **DAG**, then G has **a node with no entering edges (sink vertex)**
  - If G is a **DAG**, then **G has a topological ordering**

## 🛠️ Algorithm

1. isAcyclic?

::: tip Algorithm

**`visited` + `onPath` DFS: `onPath` 看每个节点出发是否存在环，`visited` 剪枝加速**

:::

2. **把图结构后序遍历的结果进行反转，就是拓扑排序的结果** (可以和第一步同步进行)

> 不前序的原因是一开始进去遍历的点不一定是 sink vertex
