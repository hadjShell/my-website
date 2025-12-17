---
title: Queue
author: David Zhang aka Hadjshell
order: 7
isOriginal: true
footer: false
editLink: false
---

### :heart:Q649. [Dota2 Senate](https://leetcode.com/problems/dota2-senate/)

- ```java
  class Solution {
      public String predictPartyVictory(String senate) {
          int[] count = count(senate);    // 0: R, 1: D
          int vote = 0;                   // >0: R, <0: D
          Deque<Character> senators = new ArrayDeque<Character>();

          for (char c : senate.toCharArray())
              senators.offer(c);

          while (count[0] != 0 && count[1] != 0) {
              char s = senators.poll();

              if (s == 'R') {
                  if (vote >= 0)
                      senators.offer(s);
                  else
                      count[0]--;
                  vote++;
              }
              else {
                  if (vote <= 0)
                      senators.offer(s);
                  else
                      count[1]--;
                  vote--;
              }
          }

          return count[0] == 0 ? "Dire" : "Radiant";
      }

      private int[] count(String senate) {
          int[] count = new int[2];

          for (char c : senate.toCharArray()) {
              if (c == 'R')
                  count[0]++;
              else
                  count[1]++;
          }

          return count;
      }
  }
  ```

### Q933. [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)

- ```java
  class RecentCounter {
      Deque<Integer> p;

      public RecentCounter() {
          p = new ArrayDeque<Integer>();
      }

      public int ping(int t) {
          p.addLast(t);
          while (p.getFirst() < t - 3000) {
              p.removeFirst();
          }
          return p.size();
      }
  }
  ```

## :bulb:Monotonic Queue

- Problem
  - **给你一个数组 `window`，已知其最值为 `A`，如果给 `window` 中添加一个数 `B`，那么比较一下 `A` 和 `B` 就可以立即算出新的最值；但如果要从 `window` 数组中减少一个数，就不能直接得到最值了，因为如果减少的这个数恰好是 `A`，就需要遍历 `window` 中的所有元素重新寻找新的最值**。
  - Find **max/min** of an array where exists **frequent first or last element removal**

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
