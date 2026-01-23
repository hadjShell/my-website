---
title: Dynamic Programming Concept & Pattern
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- The basic idea of dynamic programming is to exhaust all possibilities to **find the optimal value**, which is a brute-force approach. However, DP optimises this process by **avoiding redundant exploration of repeated subproblems** in the decision tree. This simple optimization typically reduces time complexities **from exponential to polynomial**.

- Three core elements of DP

  - **State transition equation:** Defines how a problem is broken down into smaller subproblems and how the solution to a state is derived from the solutions of those subproblems.

  - **Optimal substructure:** The optimal solution of the given problem can be obtained by using **the optimal solution to its subproblems** instead of trying every possible way to solve the subproblems. To satisfy the optimal substructure, **the subproblems must be independent of each other**. For example, we can say that the maximum marks of an exam has optimal substructure because we can solve it by checking the maximum marks of each subject; however, assuming math mark is associated with english mark, i.e., those are not independent, then the problem doesn't have optimal substructure.

    ::: tip

    The problem can be derived into different combinations of subproblems, therefore an optimal solution can be selected by comparison of those different answers.

    :::

  - **Overlapping subproblems:** Many subproblems are solved multiple times. DP addresses this by using **memoization** (top-down) or a **tabulation** (bottom-up) to store and reuse previously computed results, avoiding redundant computations.

::: important Difference between Dynamic Programming and Backtracking

- **DP is 分解子问题思想的 DFS**, to **find an optimal solution** of a given problem, optimised by **memorising solutions of subproblems**.
- **Backtracking is 遍历思想的 DFS**, to **find all or some valid solutions that satisfy given constraints**, optimised by **pruning the decision tree when a path violates the constraints**.

:::

## 🛠️ Algorithm

- ```java
  // Top-down recursive dynamic programming
  public Result dp(State state) {
    if baseCase:
      return defaultValue;

    // overlapping subproblems
    if memo.containsKey(state)
      return memo.get(state);

    // state transition equation
    Result optimal;
    for nextState in nextStates
      Result result = cal(dp(nextState));
      optimal = findOptimal(optimal, result);
    memo.put(state, optimal);

    return memo.get(state);
  }

  // Bottom-up iterative dynamic programming
  dp[baseState] = defaultValue;

  // Perform state transitions
  for state from nextState to targetState
    Result optimal;
    for prevState to baseState
      optimal = findOptimal(optimal, cal(dp[prevState]));
    dp[state] = optimal;

  return dp[targetState];
  ```

  ::: tip

  In general, `memo` is implemented as **a one-dimensional or multidimensional array** rather than a hash map. Arrays are more efficient than hash maps and can also be used to achieve the same lookup behavior. The pseudocode is intended to abstract this pattern for clarity and ease of explanation.

  I personally instanciate `memo` with wrapper class object because the elelment will be initiated to `null`, naturally reflecting that the state is currently unchecked.

  :::

- **Bottom-to-top DP algorithms are usually more efficient**, but they are generally harder (and sometimes impossible) to build, since it is not always easy to predict which primitive sub-problems you are going to need to solve the whole original problem, and which path you have to take from small sub-problems to get to the final solution in the most efficient way.

- 带备忘录的动态规划算法的时间复杂度:

::: center

**子问题的个数 x 函数本身的时间复杂度**,
**「状态」的个数 x 函数本身的时间复杂度**

:::

- Optimisation on space complexity

  - Compress the size of the DP table when only a part of it is needed during state transition.
  - In general, it's easier to write with bottom-up dp.
