---
title: Binary Search Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

First, you need to abstract an independent variable $x$, a function $f(x)$ of $x$, and a target value $target$ from the problem.

Additionally, $x$, $f(x)$, and $target$ must satisfy the following conditions:

1. $f(x)$ must be a monotonic function on $x$ (monotonically increasing or monotonically decreasing is acceptable).

2. The problem asks you to calculate the value of $x$ when the constraint $f(x) = target$ is satisfied.

:::

## 🧠 Concept

- Idea is simple: divide and conquer.
  - By **shrinking (halving) the search space as much as possible using known information**, we can increase the efficiency of exhaustive search and quickly find the target.

- Details are important:
  - My preference: `[]`;
  - Integer overflow: `left + (right - left) / 2` instead of `(left + right) / 2`;
  - Out of boundary problem: When you calculate `mid`, should you add 1 or not, which means when there are two elements in the search range, should `mid` sit at left or right;
  - `<=` or `<` in `while`;

- **One hint for binary search, which is easy to overlook, is that we know the range of the result and we are trying to find a min or max value within that range that validates some conditions at the same time.**

## 🛠️ Algorithm

- ```java
  int binarySearch(int[] nums, int target) {
      int left = 0, right = ...;

      while(...) {
          int mid = left + (right - left) / 2;
          if (nums[mid] == target) {
              ...
          } else if (nums[mid] < target) {
              left = ...
          } else if (nums[mid] > target) {
              right = ...
          }
      }
      return ...;
  }
  ```
