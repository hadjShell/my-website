---
title: Monotonic Stack Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q84. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

- ```java
  // find first smaller height to left and to right
  class Solution {
      public int largestRectangleArea(int[] heights) {
          int len = heights.length;
          int[] prevSmall = new int[len];
          int[] prevSmallReverse = new int[len];
          Deque<Integer> stack = new ArrayDeque<>();
          for (int i = 0; i < len; i++) {
              while (!stack.isEmpty() && heights[i] <= heights[stack.peek()])
                  stack.pop();
              prevSmall[i] = stack.isEmpty() ? -1 : stack.peek();
              stack.push(i);
          }
          stack = new ArrayDeque<>();
          for (int i = len - 1; i >= 0; i--) {
              while (!stack.isEmpty() && heights[i] <= heights[stack.peek()])
                  stack.pop();
              prevSmallReverse[i] = stack.isEmpty() ? len : stack.peek();
              stack.push(i);
          }

          int max = 0;
          for (int i = 0; i < len; i++) {
              int height = heights[i] * (prevSmallReverse[i] - prevSmall[i] - 1);
              max = Math.max(max, height);
          }
          return max;
      }
  }
  ```

### :heart:Q456. [132 Pattern](https://leetcode.com/problems/132-pattern/)

- https://leetcode.com/problems/132-pattern/solutions/5605502/detailed-explanation-using-monotonic-stack-approach-java-defeat-91

- ```java
  class Solution {
      public boolean find132pattern(int[] nums) {
          if (nums.length < 3)
              return false;

          int max2 = Integer.MIN_VALUE;
          Deque<Integer> stack = new ArrayDeque<>();

          for (int i = nums.length - 1; i >= 0; i--) {
              if (nums[i] < max2)
                  return true;
              while (!stack.isEmpty() && stack.peek() < nums[i])
                  max2 = stack.pop();
              stack.push(nums[i]);
          }

          return false;
      }
  }
  ```

### Q496. [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)

- ```java
  class Solution {
      public int[] nextGreaterElement(int[] nums1, int[] nums2) {
          Map<Integer, Integer> ele2IndMap = getEle2IndMap(nums2);
          int[] nextGreater = nextGreater(nums2);
          int[] result = new int[nums1.length];

          for (int i = 0; i < nums1.length; i++) {
              int index = ele2IndMap.get(nums1[i]);
              result[i] = nextGreater[index];
          }

          return result;
      }

      private Map<Integer, Integer> getEle2IndMap(int[] nums2) {
          Map<Integer, Integer> ele2IndMap = new HashMap<>();

          for (int i = 0; i < nums2.length; i++) {
              ele2IndMap.put(nums2[i], i);
          }

          return ele2IndMap;
      }

      private int[] nextGreater(int[] nums2) {
          Deque<Integer> monoStack = new ArrayDeque<>();
          int[] result = new int[nums2.length];

          Arrays.fill(result, -1);

          for (int i = 0; i < nums2.length; i++) {
              while (!monoStack.isEmpty() && nums2[i] > nums2[monoStack.peek()]) {
                  int index = monoStack.pop();
                  result[index] = nums2[i];
              }
              monoStack.push(i);
          }

          return result;
      }
  }
  ```

### Q503. [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)

- ```java
  class Solution {
      public int[] nextGreaterElements(int[] nums) {
          Deque<Integer> monoStack = new ArrayDeque<>();
          int[] result = new int[nums.length];

          Arrays.fill(result, -1);

          for (int j = 0; j < 2; j++)
              for (int i = 0; i < nums.length; i++) {
                  while (!monoStack.isEmpty() && nums[i] > nums[monoStack.peek()]) {
                      int index = monoStack.pop();
                      result[index] = nums[i];
                  }
                  monoStack.push(i);
              }

          return result;
      }
  }
  ```

### :star:Q654. [Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)

- ```java
  class Solution {
      public TreeNode constructMaximumBinaryTree(int[] nums) {
          Deque<TreeNode> monoStack = new ArrayDeque<>();

          for (int val : nums) {
              TreeNode n = new TreeNode(val);
              TreeNode smaller = null;

              while (!monoStack.isEmpty() && val > monoStack.peek().val) {
                  smaller = monoStack.pop();
              }
              n.left = smaller;

              if (!monoStack.isEmpty())
                  monoStack.peek().right = n;

              monoStack.push(n);
          }

          return monoStack.getLast();
      }
  }
  ```

### Q739. [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

- ```java
  class Solution {
      public int[] dailyTemperatures(int[] temperatures) {
          Deque<Integer> monoStack = new ArrayDeque<>();
          int[] answer = new int[temperatures.length];

          Arrays.fill(answer, 0);

          for (int i = 0; i < temperatures.length; i++) {
              while (!monoStack.isEmpty() &&
                      temperatures[i] > temperatures[monoStack.peek()]) {
                  int index = monoStack.pop();
                  answer[index] = i - index;
              }
              monoStack.push(i);
          }

          return answer;
      }
  }
  ```

### Q901. [Online Stock Span](https://leetcode.com/problems/online-stock-span/)

- ```java
  class StockSpanner {
      private List<Integer> prices;
      private int cnt;
      private Deque<Integer> stack;

      public StockSpanner() {
          prices = new ArrayList<>();
          cnt = 0;
          stack = new ArrayDeque<>();
      }

      public int next(int price) {
          prices.add(price);
          cnt++;
          while (!stack.isEmpty() && prices.get(stack.peek() - 1) <= price)
              stack.pop();
          int span = stack.isEmpty() ? cnt : cnt - stack.peek();
          stack.push(cnt);
          return span;
      }
  }
  ```

### Q1019. [Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/)

- ```java
  class Solution {
      public int[] nextLargerNodes(ListNode head) {
          Node n = reverseList(head);
          ListNode r = n.head;
          Deque<Integer> stack = new ArrayDeque<>();
          int[] answer = new int[n.size];
          int i = n.size - 1;
          while (r != null) {
              while (!stack.isEmpty() && r.val >= stack.peek())
                  stack.pop();
              answer[i--] = stack.isEmpty() ? 0 : stack.peek();
              stack.push(r.val);
              r = r.next;
          }
          return answer;
      }

      private Node reverseList(ListNode head) {
          ListNode prev = null, cur = head;
          int len = 1;
          while (cur.next != null) {
              ListNode tmp = cur.next;
              cur.next = prev;
              prev = cur;
              cur = tmp;
              len++;
          }
          cur.next = prev;
          return new Node(cur, len);
      }

      private class Node {
          ListNode head;
          int size;

          public Node(ListNode head, int size) {
              this.head = head;
              this.size = size;
          }
      }
  }
  ```
