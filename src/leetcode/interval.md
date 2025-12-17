---
title: Interval
author: David Zhang aka Hadjshell
order: 10
isOriginal: true
footer: false
editLink: false
---

## 🧠 Mindset

- Intervals represent **a range of values** or **a duration of time** with a defined **start** and **end**
- Common problem domain
  - Time management (**a time sequence**, find available slot, merge intervals)
  - Project management (tasks may have **dependencies**, i.e. one task must be finished before another task)
- Possible states for two intervals
  - There is a **gap** between A and B
  - A **overlaps** B
  - A **overshadows** B
  - Reverse of B to A
  - ![interval](/assets/image/leetcode/interval.png)

## :bulb:Questions

### Q56. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

- ```java
  class Solution {
      public int[][] merge(int[][] intervals) {
          List<int[]> result = new ArrayList<>();

          Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

          int start = intervals[0][0], end = intervals[0][1];
          for (int i = 1; i < intervals.length; i++) {
              int s = intervals[i][0], e = intervals[i][1];

              if (s > end) {
                  int[] mergedInterval = {start, end};
                  result.add(mergedInterval);
                  start = s;
                  end = e;
              }
              else if (e > end) {
                  end = e;
              }
          }
          result.add(new int[] {start, end});

          return result.toArray(new int[0][]);
      }
  }
  ```

### :star:Q57. [Insert Interval](https://leetcode.com/problems/insert-interval/)

- ```java
  class Solution {
      public int[][] insert(int[][] intervals, int[] newInterval) {
          List<int[]> result = new ArrayList<>();
          int i = 0;

          for (; i < intervals.length; i++) {
              int istart = intervals[i][0], iend = intervals[i][1];
              int start = newInterval[0], end = newInterval[1];

              if (end < istart)
                  break;
              else if (start > iend)
                  result.add(new int[] {istart, iend});
              else {
                  // merge intervals
                  newInterval[0] = Math.min(start, istart);
                  newInterval[1] = Math.max(end, iend);
              }
          }

          result.add(newInterval);

          for (; i < intervals.length; i++) {
              int istart = intervals[i][0], iend = intervals[i][1];
              result.add(new int[] {istart, iend});
          }

          return result.toArray(new int[0][]);
      }
  }
  ```

### Q228. [Summary Ranges](https://leetcode.com/problems/summary-ranges/)

- ```java
  class Solution {
      public List<String> summaryRanges(int[] nums) {
          List<String> result = new ArrayList<>();

          if (nums.length == 0)
              return result;

          StringBuilder sb = new StringBuilder();
          int start = 0;

          sb.append(nums[start]);
          for (int i = 1; i < nums.length; i++) {
              int prev = nums[i - 1];
              if (nums[i] != prev + 1) {
                  if (start != i - 1)
                      result.add(sb.append("->").append(prev).toString());
                  else
                      result.add(sb.toString());
                  start = i;
                  sb = new StringBuilder();
                  sb.append(nums[start]);
              }
          }

          int lastVal = nums[nums.length - 1];
          if (start == nums.length - 1)
              result.add(sb.toString());
          else
              result.add(sb.append("->").append(lastVal).toString());

          return result;
      }
  }
  ```

### Q452. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

- ```java
  class Solution {
      public int findMinArrowShots(int[][] points) {
          Arrays.sort(points, (a, b) -> Integer.compare(a[1],b[1]));

          int arrow = 1, end = points[0][1];

          for (int i = 1; i < points.length; i++) {
              int istart = points[i][0], iend = points[i][1];

              if (istart > end) {
                  end = iend;
                  arrow++;
              }
          }

          return arrow;
      }
  }
  ```
