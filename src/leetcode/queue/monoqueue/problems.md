---
title: Monotonic Queue Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q239. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

- ```java
  class Solution {
      public int[] maxSlidingWindow(int[] nums, int k) {
          int n = nums.length;
          MonotonicQueue q = new MonotonicQueue();
          int[] res = new int[n-k+1];
          for(int i = 0; i < n; i++){
              // 每次加入新元素
              q.add(nums[i]);

              // 当窗口长度超过 k 时，移除最左边的元素
              if (i >= k) {
                  q.remove(nums[i - k]);
              }

              // 从第 k-1 个元素开始记录结果
              if (i >= k - 1) {
                  res[i - k + 1] = q.getMax();
              }
          }
          return res;
      }

      class MonotonicQueue{
          Deque<Integer> q = new ArrayDeque<>();

          public void add(int x) {
              while (!q.isEmpty() && q.getLast() < x) {
                  q.removeLast();
              }
              q.offer(x);
          }

          public void remove(int x) {
              if (q.peek() == x) {
                  q.poll();
              }
          }

          public int getMax() {
              return q.peek();
          }
      }
  }
  ```
