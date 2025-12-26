---
title: Minimum Spanning Tree Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- Spanning Tree

  - Given an **undirected connected** graph $G$, a **spanning tree** is a subgraph of $G$ that includes all the vertices of $G$ and is a tree

  - Features
    - It includes **all the vertices** from the original graph
    - The number of edges is one less than the number of vertices ($V-1$ edges)
    - It is **connected** and has **no cycles**

- MST

  - If the graph is a **undirected connected weighted graph**, the **minimum spanning tree** is the spanning tree with the smallest total edge weights

  - Real world example
    - For example, if you want to build roads between several cities, the nodes in the graph are cities, the edges are roads, and the weights are the cost to build each road. We want to connect all the cities with the lowest total cost. This is a classic minimum spanning tree problem.
