---
title: Merge k Sorted Lists Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### :heart:Q23. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

- ```java
  class Solution {
      public ListNode mergeKLists(ListNode[] lists) {
          if (lists.length == 0) return null;

          ListNode dummy = new ListNode(-1);
          ListNode p = dummy;
          PriorityQueue<ListNode> pq = new PriorityQueue<>(
              lists.length, (a, b)->(a.val - b.val));

          // 将 k 个链表的头结点加入最小堆
          for (ListNode head : lists) {
              if (head != null)
                  pq.offer(head);
          }

          while (!pq.isEmpty()) {
              // 获取最小节点，接到结果链表中
              ListNode node = pq.poll();
              p.next = node;
              if (node.next != null) {
                  pq.add(node.next);
              }
              // p 指针不断前进
              p = p.next;
          }

          return dummy.next;
      }
  }
  ```

### Q313. [Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)

- ```java
  class Solution {
      public int nthSuperUglyNumber(int n, int[] primes) {
          // [currentValue, range of next possible factor in primes]
          PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
          int count = 0;

          pq.add(new long[] {1, 0});

          while (!pq.isEmpty()) {
              long[] smallest = pq.poll();
              long ugly = smallest[0];
              int i = (int) smallest[1];

              count++;
              if (count == n)
                  return (int) ugly;

              for (; i < primes.length; i++)
                  pq.offer(new long[] {ugly * primes[i], i});
          }

          return -1;
      }
  }
  ```

### Q373. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

- Same question as [Q23](#heartq23-merge-k-sorted-lists).

- ```java
  class Solution {
      public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
          List<List<Integer>> result = new ArrayList<>();
          // [i, j]
          PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(nums1[a[0]] + nums2[a[1]], nums1[b[0]] + nums2[b[1]]));

          for (int i = 0; i < nums1.length; i++)
              pq.offer(new int[] {i, 0});

          while (!pq.isEmpty() && k > 0) {
              int[] smallest = pq.poll();
              int i = smallest[0], j = smallest[1];

              if (j < nums2.length - 1)
                  pq.offer(new int[] {i, j + 1});

              result.add(Arrays.asList(nums1[i], nums2[j]));
              k--;
          }

          return result;
      }
  }
  ```
