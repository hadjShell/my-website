---
title: Kruskal's Algorithm Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

- **Union Find** + **Greedy Algorithm**

- Algorithm steps

  1. **Sort all edges by the order of its weight ascendingly**;
  2. Create MST set;
  3. Loop from the edge of smallest weight. If this edge **won't construct a cycle** with other edges in the MST set, **it is definitely a part of MST**, then add it into MST; otherwise it's not;
  4. After 3, if there is **only one connected component**, there exists a minimal spanning tree; otherwise no spanning tree.

- Time complexity: $O(ElogE)$

  - Sort: $O(ElogE)$, Union Find: $E * O(1) = O(E)$

- Space complexity: $O(E + V)$
