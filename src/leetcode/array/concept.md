---
title: Array Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- Organizes items sequentially
- Sometimes called **list**
- Elements are stored in continuous memory, **accessing is `O(1)`**
- Array's index is actually a **pointer**
- Array can be empty, i.e. no elements, no memory allocated

- Static array and Dynamic array
  - Dynamic array allocate new memory and copy the old array
  - Append in static array is `O(1)`, in dynamic array is `O(n)`
- Pros
  - Fast lookup
  - Fast push / pop
  - Ordered
- Cons
  - Slow insertion
  - Slow deletion
  - Fixed size (static array)

## 🛠️ Pattern

- Partition - 同类项分组一起看，改变顺序可能便于处理
- Forward and backward - 正看反看 + 分段看
- In-place - 合理利用废空间（无用信息位或者已处理信息位）
- Bucket - suitable when elements' values are within a range
- Simulation for 2D arrays
- 2D array 对角线翻转，x 轴翻转，y 轴翻转的组合
- 方向数组

  - `int[][] dir = new int[][]{{1, 0}, {0, 1}, {0, -1}, {-1, 0}};`

- 2D array mapping to 1D array

  - `(i, j) -> i * arr[0].length + j`

- [Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm)

  ::: tip Tips for Boyer-Moore Algorithm

  If a second pass is not performed and there is no majority, the algorithm will not detect that no majority exists.

  :::

- 环形数组

  ::: tip

  **Maintain two pointers `start` and `end`. `start` points to the first valid element, `end` points to the last valid element**.

  Move `start` or `end` when adding and deleting elements from the start or the end of the array.

  When `start` or `end` is out of bound (`< 0 or >= arr.length`), We can use the modulo operation `%` to make them go around to the beginning or end of the array and continue working, thus achieving the effect of a circular array.

  :::
