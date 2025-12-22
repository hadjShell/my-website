---
title: Difference Array Concept
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- **Difference of current element of previous element** for each slot

- **Add or subtract value to a range** of elements **frequently**

- **区间增减**

- ```java
  class Difference {
      private int[] diff;

      public Difference(int[] nums) {
          diff = new int[nums.length];

          diff[0] = nums[0];
          for (int i = 1; i < nums.length; i++) {
              diff[i] = nums[i] - nums[i - 1];
          }
      }

      // 给闭区间 [i, j] 增加 val（可以是负数）
      public void increment(int i, int j, int val) {
          diff[i] += val;
          if (j + 1 < diff.length) {
              diff[j + 1] -= val;
          }
      }

      public int[] result() {
          int[] res = new int[diff.length];

          res[0] = diff[0];
          for (int i = 1; i < diff.length; i++) {
              res[i] = res[i - 1] + diff[i];
          }

          return res;
      }
  }
  ```
