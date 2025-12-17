---
title: Difference Array
author: David Zhang aka Hadjshell
order: 9
isOriginal: true
footer: false
editLink: false
---

## 🧠 Mindset

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

## :bulb:Questions

### Q1094. [Car Pooling](https://leetcode.com/problems/car-pooling/)

- ```java
  class Solution {
      public boolean carPooling(int[][] trips, int capacity) {
          int[] diff = new int[1001];

          for (int[] trip : trips) {
              int passengers = trip[0], from = trip[1], to = trip[2];

              diff[from] += passengers;
              diff[to] -= passengers;
          }

          int count = 0;
          for (int i = 0; i < diff.length; i++) {
              count += diff[i];

              if (count > capacity)
                  return false;
          }

          return true;
      }
  }
  ```

### Q1109. [Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)

- ```java
  class Solution {
      public int[] corpFlightBookings(int[][] bookings, int n) {
          int[] diff = new int[n];

          for (int[] booking : bookings) {
              int first = booking[0] - 1, last = booking[1] - 1, seats = booking[2];

              diff[first] += seats;
              if (last + 1 < n)
                  diff[last + 1] -= seats;
          }

          int seats = 0;
          for (int i = 0; i < n; i++) {
              seats += diff[i];
              diff[i] = seats;
          }

          return diff;
      }
  }
  ```
