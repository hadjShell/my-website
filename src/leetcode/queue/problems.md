---
title: Queue Problems
author: David Zhang aka Hadjshell
order: 2
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
