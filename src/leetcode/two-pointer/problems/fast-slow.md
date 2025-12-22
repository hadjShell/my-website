---
title: Fast and Slow Two Pointer Problems
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

### Q141. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

- ```java
  public class Solution {
      public boolean hasCycle(ListNode head) {
          ListNode fast = head, slow = head;
          while (fast != null && fast.next != null) {
              fast = fast.next.next;
              slow = slow.next;
              if (fast == slow)   return true;
          }
          return false;
      }
  }
  ```

### Q142. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

- <img src="/assets/image/leetcode/142.png" alt="142" style="zoom:50%;" />

- Quick pointer move `xq`: `x1 + x2 + x3 + x2`, slow pointer move `xs`: `x1 + x2`, and `xq = 2xs`, so `x1 = x3`

- So, after quick and slow meet, let quick back to the head of the list and make it move one node each iteration as slow point does. When they meet again, they will be at the start node of the cycle

- ```java
  public class Solution {
      public ListNode detectCycle(ListNode head) {
          ListNode fast = head, slow = head;
          while (fast != null && fast.next != null) {
              fast = fast.next.next;
              slow = slow.next;
              if (fast == slow) {
                  fast = head;
                  while (fast != slow) {
                      slow = slow.next;
                      fast = fast.next;
                  }
                  return fast;
              }
          }
          return null;
      }
  }
  ```

### Q876. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

- ```java
  class Solution {
      public ListNode middleNode(ListNode head) {
          ListNode fast = head, slow = head;
          while (fast != null && fast.next != null) {
              fast = fast.next.next;
              slow = slow.next;
          }
          return slow;
      }
  }
  ```

### Q2095. [Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/)

- ```java
  class Solution {
      public ListNode deleteMiddle(ListNode head) {
          if (head.next == null)
              return null;

          ListNode s = head;
          ListNode f = head.next.next;
          while (f != null && f.next != null) {
              s = s.next;
              f = f.next.next;
          }
          s.next = s.next.next;
          return head;
      }
  }
  ```

### Q2130. [Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

- ```java
  class Solution {
      public int pairSum(ListNode head) {
          ListNode f = head.next.next, s = head;
          ListNode reverse = new ListNode();
          while (f != null) {
              f = f.next.next;
              ListNode tmp = s;
              s = s.next;
              tmp.next = reverse;
              reverse = tmp;
          }
          f = s.next;
          s.next = reverse;

          int max = 0;
          while (f != null) {
              int sum = s.val + f.val;
              max = sum > max ? sum : max;
              s = s.next;
              f = f.next;
          }

          return max;
      }
  }
  ```
