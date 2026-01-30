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
  - Integer overflow;
  - `mid` `+1` or `-1`;
  - `<=` or `<` in `while`;

- Two different styles: `[]` or `[)`.

- The two most commonly used scenarios are "**searching for the left boundary**" and "**searching for the right boundary**";

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
