---
title: Two Lists or One List Two Pointer Problems
author: David Zhang aka Hadjshell
order: 3
isOriginal: true
footer: false
editLink: false
---

### Q2. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
          ListNode result = l1, prev = null;
          int[] carry = new int[1];

          while (l1 != null && l2 != null) {
              updateL1(l1, l2.val, carry);

              prev = l1;
              l1 = l1.next;
              l2 = l2.next;
          }

          if (l1 == null) {
              prev.next = l2;
              l1 = l2;
          }


          while (l1 != null) {
              if (carry[0] == 0)
                  break;
              updateL1(l1, 0, carry);
              prev = l1;
              l1 = l1.next;
          }

          if (carry[0] == 1)
              prev.next = new ListNode(1);

          return result;
      }

      private void updateL1(ListNode l, int val, int[] carry) {
          l.val += val + carry[0];
              if (l.val >= 10) {
                  l.val -= 10;
                  carry[0] = 1;
              }
              else
                  carry[0] = 0;
      }
  }
  ```

### Q19. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode removeNthFromEnd(ListNode head, int n) {
          int length = calLength(head);

          if (n == length)
              return head.next;

          ListNode h = head;
          for (int i = 1; i < length - n; i++) {
              h = h.next;
          }
          h.next = h.next.next;

          return head;
      }

      private int calLength(ListNode head) {
          int length = 0;
          while (head != null) {
              length++;
              head = head.next;
          }
          return length;
      }
  }
  ```

### Q21. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
          ListNode dummy = new ListNode(0);
          ListNode head = dummy;

          while (l1 != null && l2 != null) {
              if (l1.val > l2.val) {
                  head.next = l2;
                  l2 = l2.next;
              }
              else {
                  head.next = l1;
                  l1 = l1.next;
              }
              head = head.next;
          }

          if (l1 == null)
              head.next = l2;
          if (l2 == null)
              head.next = l1;

          return dummy.next;
      }
  }
  ```

- ```java
  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
      if(l1 == null)
          return l2;
      if(l2 == null)
          return l1;

      if(l1.val >= l2.val) {
          l2.next = mergeTwoLists(l1, l2.next);
          return l2;
      }
      else {
          l1.next = mergeTwoLists(l1.next, l2);
          return l1;
      }
  }
  ```

### :star:Q23. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

- Divide and conquer + Q21.

- ```java
  class Solution {
      public ListNode mergeKLists(ListNode[] lists) {
          return merge(lists, 0, lists.length - 1);
      }

      public ListNode merge(ListNode[] lists, int left, int right) {
          if (left > right)
              return null;
          else if (left == right)
              return lists[left];
          else {
              int mid = left + (right - left) / 2;
              ListNode leftList = merge(lists, left, mid), rightList = merge(lists, mid + 1, right);
              return mergeTwoLists(leftList, rightList);
          }
      }

      public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
          if(l1 == null)
              return l2;
          if(l2 == null)
              return l1;

          if(l1.val >= l2.val) {
              l2.next = mergeTwoLists(l1, l2.next);
              return l2;
          }
          else {
              l1.next = mergeTwoLists(l1.next, l2);
              return l1;
          }
      }
  }
  ```

### :star:Q25. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

- Follow-up of [question 92](#Q92)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode reverseKGroup(ListNode head, int k) {
          int length = calLength(head);
          int left = 1, right = k;
          while (right <= length) {
              head = reverseBetween(head, left, right);
              left += k;
              right += k;
          }

          return head;
      }

      private ListNode reverseBetween(ListNode head, int left, int right) {
          if (left == right)
              return head;

          ListNode dummy = new ListNode(0, head), start = dummy;

          // (]
          int i = 1;
          for (; i < left; i++)
              start = start.next;

          ListNode a = start.next, b = a.next;
          i = left;

          for (; i < right; i++) {
              ListNode tmp = b.next;
              b.next = a;
              a = b;
              b = tmp;
          }
          start.next.next = b;
          start.next = a;

          return dummy.next;
      }

      private int calLength(ListNode head) {
          int length = 0;
          while (head != null) {
              length++;
              head = head.next;
          }

          return length;
      }
  }
  ```

### Q61. [Rotate List](https://leetcode.com/problems/rotate-list/)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode rotateRight(ListNode head, int k) {
          if (head == null)
              return null;

          int length = calLength(head);
          k = k % length;
          if (k == 0)
              return head;

          ListNode newTail = getKthNode(head, length - k);
          ListNode tail = getTail(head);
          ListNode newHead = newTail.next;
          newTail.next = null;
          tail.next = head;

          return newHead;
      }

      private ListNode getKthNode(ListNode head, int k) {
          for (int i = 0; i < k - 1; i++)
              head = head.next;

          return head;
      }

      private ListNode getTail(ListNode head) {
          while (head.next != null)
              head = head.next;

          return head;
      }

      private int calLength(ListNode head) {
          int length = 0;
          while (head != null) {
              length++;
              head = head.next;
          }

          return length;
      }
  }
  ```

### Q82. [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode deleteDuplicates(ListNode head) {
          ListNode dummy = new ListNode(101, head);
          int number = 101;
          ListNode prev = dummy, curr = head;

          while (curr != null) {
              number = curr.val;
              int count = 1;
              while (curr.next != null && curr.next.val == number) {
                  curr = curr.next;
                  count++;
              }
              if (count > 1) {
                  curr = curr.next;
                  prev.next = curr;
              }
              else {
                  prev = curr;
                  curr = curr.next;
              }
          }

          return dummy.next;
      }
  }
  ```

### Q86. [Partition List](https://leetcode.com/problems/partition-list/)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode partition(ListNode head, int x) {
          if (head == null)
              return null;

          ListNode smallNodes = new ListNode(0), bigNodes = new ListNode(0);
          ListNode smallHead = smallNodes, bigHead = bigNodes;
          while (head != null) {
              if (head.val < x) {
                  smallHead.next = head;
                  smallHead = smallHead.next;
              }
              else {
                  bigHead.next = head;
                  bigHead = bigHead.next;
              }
              head = head.next;
          }
          bigHead.next = null;
          smallHead.next = bigNodes.next;

          return smallNodes.next;
      }
  }
  ```

### :star:Q92. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

- ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode() {}
   *     ListNode(int val) { this.val = val; }
   *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
   * }
   */
  class Solution {
      public ListNode reverseBetween(ListNode head, int left, int right) {
          if (left == right)
              return head;

          ListNode dummy = new ListNode(0, head), start = dummy;

          // (]
          int i = 1;
          for (; i < left; i++)
              start = start.next;

          ListNode a = start.next, b = a.next;
          i = left;

          for (; i < right; i++) {
              ListNode tmp = b.next;
              b.next = a;
              a = b;
              b = tmp;
          }
          start.next.next = b;
          start.next = a;

          return dummy.next;
      }
  }
  ```

### :star:Q160. [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)

- Concat two lists: a + b = b + a

- No intersection means two lists intersect at a null node

- ```java
  public class Solution {
      public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
          ListNode a = headA, b = headB;

          while (a != b) {
              if (a == null)
                  a = headB;
              else
                  a = a.next;

              if (b == null)
                  b = headA;
              else
                  b = b.next;
          }

          return a;
      }
  }
  ```

### Q328. [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/)

- ```java
  class Solution {
      public ListNode oddEvenList(ListNode head) {
          if (head == null || head.next == null || head.next.next == null)
              return head;

          ListNode even = new ListNode();
          ListNode eCopy = even;
          ListNode odd = new ListNode();
          ListNode cur = head;
          int i = 1;
          while (cur != null) {
              if (i % 2 != 0) {
                  odd.next = cur;
                  odd = odd.next;
              }
              else {
                  even.next = cur;
                  even = even.next;
              }
              cur = cur.next;
              i++;
          }
          odd.next = eCopy.next;
          even.next = null;
          return head;
      }
  }
  ```

### Q283. [Move Zeroes](https://leetcode.com/problems/move-zeroes/)

- ```java
  class Solution {
      public void moveZeroes(int[] nums) {
          int first0 = 0, cur = 0;
          while (cur < nums.length) {
              if (nums[cur] != 0) {
                  if (cur > first0) {
                      nums[first0] = nums[cur];
                      nums[cur] = 0;
                  }
                  first0++;
              }
              cur++;
          }
      }
  }
  ```

### Q392. [Is Subsequence](https://leetcode.com/problems/is-subsequence/)

- ```java
  class Solution {
      public boolean isSubsequence(String s, String t) {
          if (s.length() > t.length())
              return false;

          char[] sub = s.toCharArray();
          int j = 0, len = sub.length;
          for (char c : t.toCharArray()) {
              if (j >= len)    return true;
              else if (sub[j] == c)    j++;
          }
          return j >= len;
      }
  }
  ```

- Follow up

  - The idea here is to use prefix sum and binary search
  - `O(K*N) -> O(K*MLogN)`

### Q443. [String Compression](https://leetcode.com/problems/string-compression/)

- ```java
  class Solution {
      public int compress(char[] c) {
          int p = 0, cur = 1, num = 1;
          while (cur < c.length) {
              if (c[cur] == c[p]) {
                  num++;
              }
              else {
                  if (num == 1)
                      c[++p] = c[cur];
                  else {
                      char[] digits = String.valueOf(num).toCharArray();
                      for (char d : digits)
                          c[++p] = d;
                      c[++p] = c[cur];
                      num = 1;
                  }
              }
              cur++;
          }
          if (num > 1) {
              char[] digits = String.valueOf(num).toCharArray();
              for (char d : digits)
                  c[++p] = d;
          }
          return p + 1;
      }
  }
  ```

### Q725. [Split Linked List in Parts](https://leetcode.com/problems/split-linked-list-in-parts/)

- ```java
  class Solution {
      public ListNode[] splitListToParts(ListNode head, int k) {
          int size = 0;
          ListNode n = head;
          while (n != null) {
              n = n.next;
              size++;
          }
          int base = size / k;
          int remaining = size % k;
          ListNode[] res = new ListNode[k];
          int cnt = 0;
          n = head;
          for (int i = 0; i < remaining; i++) {
              res[cnt++] = n;
              for (int j = 0; j < base; j++) {
                  n = n.next;
              }
              ListNode tmp = n.next;
              n.next = null;
              n = tmp;
          }
          for (int i = 0; i < k - remaining; i++) {
              res[cnt++] = n;
              if (n != null) {
                  for (int j = 0; j < base - 1; j++) {
                      n = n.next;
                  }
                  ListNode tmp = n.next;
                  n.next = null;
                  n = tmp;
              }
          }
          return res;
      }
  }
  ```

### Q1047. [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

- ```java
  class Solution {
      public String removeDuplicates(String s) {
          char[] tokens = s.toCharArray();
          int pos = -1, i = 0;
          while (i < tokens.length) {
              if (pos < 0 || tokens[i] != tokens[pos]) {
                  tokens[++pos] = tokens[i++];
              }
              else {
                  pos--;
                  i++;
              }
          }
          return new String(tokens, 0, pos + 1);
      }
  }
  ```

- Or use a stack

### Q2807. [Insert Greatest Common Divisors in Linked List](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/)

- ```java
  class Solution {
      public ListNode insertGreatestCommonDivisors(ListNode head) {
          if (head.next == null)
              return head;
          ListNode a = head, b = head.next;
          while (b != null) {
              int value = gcd(a.val, b.val);
              a.next = new ListNode(value, b);
              a = b;
              b = b.next;
          }
          return head;
      }

      private int gcd(int a, int b) {
          if (b == 0)
              return a;
          else
              return gcd(b, a % b);
      }
  }
  ```

### Q2181. [Merge Nodes in Between Zeros](https://leetcode.com/problems/merge-nodes-in-between-zeros/)

- ```java
  class Solution {
      public ListNode mergeNodes(ListNode head) {
          ListNode dummy = new ListNode(0), h = head, dh = dummy;

          while (h != null) {
              if (h.val == 0 && h.next != null) {
                  dh.next = h;
                  dh = dh.next;
              }
              else {
                  dh.val += h.val;
              }
              h = h.next;
          }

          dh.next = null;

          return dummy.next;
      }
  }
  ```

### Q3217. [Delete Nodes From Linked List Present in Array](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/)

- ```java
  class Solution {
      public ListNode modifiedList(int[] nums, ListNode head) {
          Set<Integer> s = new HashSet<>();
          for (int n : nums) {
              s.add(n);
          }
          ListNode dummy = new ListNode(0, head);
          ListNode n = dummy;
          while (head != null) {
              if (s.contains(head.val)) {
                  head = head.next;
                  n.next = head;
              }
              else {
                  head = head.next;
                  n = n.next;
              }
          }
          return dummy.next;
      }
  }
  ```
