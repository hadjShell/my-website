---
title: Greedy Algorithm Concept & Pattern
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

- A greedy algorithm is a problem-solving technique that makes **the locally optimal choice at each step** in the hope of **finding the global optimum solution**.

- Problems on which greedy approach works has two properties:

  - **Greedy choice**: A global optimum can be arrived at by selecting a local optimum.
  - **Optimal substructure**: An optimal solution to the problem contains optimal solutions to subproblem.

::: important Difference to Backtracking and DP

Backtracking prunes the decision tree trying to cut off impossible answers early, so the tree is as small as possible. Usually, the time complexity is exponential.

Memoization in dynamic programming is used to avoid repeating calculations. DP considers outcomes of all subproblems to ensure a global optimum. Its time complexity is usually polynomial.

**Backtracking and DP are technically still "brute-force" but smart brute-force.**

The difference with greedy algorithms is: sometimes, you don't need to try every possible solution to get the best result. This cuts down the search space even more, making greedy algorithms more efficient, because **Greedy algorithm never reconsiders its choices**.

**Dynamic programming is exhaustive and guaranteed to find a solution. Greedy algorithm may not always find the optimal solution.**

:::
