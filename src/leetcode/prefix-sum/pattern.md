---
title: Prefix Sum Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- **Sum of previous elements and itself** for each slot
  - Extended to **state accumulation of previous elements plus the current element (状态的叠加)**.
  - `rangeSum[left, right] = preSum[right + 1] - preSum[left]` (with dummy 0).

- **Subarray/Range sum** problems
  - Compute the sum of elements between two indices **frequently**.
  - **Find or count** the subarrays that accumulate to a specific state, with the help of hashmap (you can actually store preSum in hashmap to save space).

- **区间查询叠加态**

## 🛠️ Pattern

- **Dummy 0**
- Help of **hash table**
