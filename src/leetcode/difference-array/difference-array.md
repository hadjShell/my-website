---
title: Difference Array Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

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
