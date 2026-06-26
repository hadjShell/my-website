---
title: Sliding Window Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- **Subarray, Substring min/max** problem

- Dynamically **resizable** window
  - When to **increase the window**
  - When to **shrink the window**
  - How to update the result (what is the operation **when window size changes**)

- Choose **data structure of `window` and `result` object** wisely

- Close-open range `[)`

## Framework

- **右滑找到一个解的终点， 左滑找到下一解的起点**

- ```java
  int left = 0, right = 0;
  Window window;
  Result result;

  while (right < nums.size()) {
    // increase window
    window.addLast(nums[right]);
    right++;

    // shrink window
    while (left < right && window needs to shrink) {
      window.removeFirst(nums[left]);
      left++;
    }
  }
  ```
