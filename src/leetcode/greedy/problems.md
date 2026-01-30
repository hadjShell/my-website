---
title: Greedy Algorithm Problems
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### :star:Q45. [Jump Game II](https://leetcode.com/problems/jump-game-ii/)

- ```java
  class Solution {
      public int jump(int[] nums) {
          if (nums.length == 1)
              return 0;

          int step = 0, i = 0;
          while (i < nums.length) {
              int furthest = i + nums[i], furthestIndex = i;
              step++;
              for (int j = i + 1; j <= i + nums[i]; j++) {
                  if (j == nums.length - 1)
                      return step;
                  if (j + nums[j] >= furthest) {
                      furthest = j + nums[j];
                      furthestIndex = j;
                  }
              }
              i = furthestIndex;
          }

          return -1;
      }
  }
  ```

### Q55. [Jump Game](https://leetcode.com/problems/jump-game/)

- ```java
  class Solution {
      public boolean canJump(int[] nums) {
          int furthest = 0;

          // no need to check the last element
          for (int i = 0; i < nums.length - 1; i++) {
              furthest = Math.max(furthest, i + nums[i]);
              // encount 0, can no longer move further
              if (furthest == i)
                  return false;
          }

          return true;
      }
  }
  ```

### :star:Q134. [Gas Station](https://leetcode.com/problems/gas-station/)

- ```java
  class Solution {
      public int canCompleteCircuit(int[] gas, int[] cost) {
          int start = 0, left = 0, diff = 0;

          for (int i = 0; i < gas.length; i++) {
              diff += gas[i] - cost[i];

              if (left < 0) {
                  left = 0;
                  start = i;
              }
              left += gas[i] - cost[i];
          }

          return diff < 0 ? -1 : start;
      }
  }
  ```

### :star:Q435. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

- ```java
  class Solution {
      public int eraseOverlapIntervals(int[][] intervals) {
          Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

          int delete = 0;
          int[] prev = intervals[0];
          for (int i = 1; i < intervals.length; i++) {
              int[] curr = intervals[i];

              // overlap
              if (curr[0] < prev[1]) {
                  if (prev[1] > curr[1])
                      prev = curr;
                  delete++;
              }
              else
                  prev = curr;
          }

          return delete;
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

### :star:1024. [Video Stitching](https://leetcode.com/problems/video-stitching/)

- ```java
  class Solution {
      public int videoStitching(int[][] clips, int time) {
          Arrays.sort(clips, (a, b) -> a[0] - b[0]);

          // new added interval on timeline, doesn't count overlapped time
          int pStart = clips[0][0], pEnd = clips[0][1], count = 1;

          if (pStart > 0)    return -1;

          for (int i = 1; i < clips.length; i++) {
              int cStart = clips[i][0], cEnd = clips[i][1];

              // curr overshadow prev
              if (cStart <= pStart && cEnd > pEnd) {
                  pEnd = cEnd;
              }
              // overlap
              else if (cStart > pStart && cStart <= pEnd && cEnd > pEnd) {
                  pStart = pEnd;
                  pEnd = cEnd;
                  count++;
              }
              // gap
              else if (cStart > pEnd)
                  return -1;
          }

          return pEnd == time ? count : -1;
      }
  }
  ```

### Q1717. [Maximum Score From Removing Substrings](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

- ```java
  class Solution {
      public int maximumGain(String s, int x, int y) {
          char[] arr = s.toCharArray();
          int score = 0;
          if (x >= y) {
              int[] result = deleteAB(arr, arr.length);
              score += x * result[0];
              result = deleteBA(arr, result[1]);
              score += y * result[0];
          }
          else {
              int[] result = deleteBA(arr, arr.length);
              score += y * result[0];
              result = deleteAB(arr, result[1]);
              score += x * result[0];
          }
          return score;
      }

      private int[] deleteAB(char[] arr, int len) {
          int p = -1, cur = 0, cnt = 0;
          while (cur < len) {
              if (p >= 0 && arr[cur] == 'b' && arr[p] == 'a') {
                  p--;
                  cur++;
                  cnt++;
              }
              else
                  arr[++p] = arr[cur++];
          }
          return new int[] {cnt, p + 1};
      }

      private int[] deleteBA(char[] arr, int len) {
          int p = -1, cur = 0, cnt = 0;
          while (cur < len) {
              if (p >= 0 && arr[cur] == 'a' && arr[p] == 'b') {
                  p--;
                  cur++;
                  cnt++;
              }
              else
                  arr[++p] = arr[cur++];
          }
          return new int[] {cnt, p + 1};
      }
  }
  ```
