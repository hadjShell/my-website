---
title: Stack FIFO Problems
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

### :star:Q155. [Min Stack](https://leetcode.com/problems/min-stack/)

- Consider **each node in the stack having a minimum value**

- ```java
  class MinStack {
      private class Node {
          int val;
          int min;

          public Node() {}

          public Node(int val, int min) {
              this.val = val;
              this.min = min;
          }
      }

      private Deque<Node> stack;
      private int min;

      public MinStack() {
          this.stack = new ArrayDeque<>();
          this.min = 0;
      }

      public void push(int val) {
          if (stack.isEmpty())
              min = val;
          else
              min = Math.min(min, val);
          stack.addFirst(new Node(val, min));
      }

      public void pop() {
          stack.removeFirst();
          if (!stack.isEmpty())   min = stack.getFirst().min;
      }

      public int top() {
          return stack.getFirst().val;
      }

      public int getMin() {
          return min;
      }
  }
  ```

### Q225. [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

- ```java
  class MyStack {
      Deque<Integer> queue = new ArrayDeque<>();
      int top;
      int size = 0;

      public MyStack() {

      }

      public void push(int x) {
          queue.addLast(x);
          top = x;
          size++;
      }

      public int pop() {
          for (int i = 1; i < size; i++) {
              top = queue.removeFirst();
              queue.addLast(top);
          }
          size--;
          return queue.removeFirst();
      }

      public int top() {
          return top;
      }

      public boolean empty() {
          return size == 0;
      }

  }
  ```

### Q232. [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)

- ```java
  class MyQueue {
      Deque<Integer> stack1 = new ArrayDeque<>();
      Deque<Integer> stack2 = new ArrayDeque<>();


      public MyQueue() {

      }

      public void push(int x) {
          stack1.push(x);
      }

      public int pop() {
          if (stack2.isEmpty()) {
              while (!stack1.isEmpty())
                  stack2.push(stack1.pop());
          }
          return stack2.pop();
      }

      public int peek() {
          if (stack2.isEmpty()) {
              while (!stack1.isEmpty())
                  stack2.push(stack1.pop());
          }
          return stack2.peek();
      }

      public boolean empty() {
          return stack1.isEmpty() && stack2.isEmpty();
      }
  }
  ```

### Q682. [Baseball Game](https://leetcode.com/problems/baseball-game/)

- ```java
  class Solution {
      public int calPoints(String[] operations) {
          ArrayList<Integer> record = new ArrayList<>();
          int sum = 0;
          for (String s : operations) {
              switch (s) {
                  case "+" -> record.add(record.get(record.size() - 1) + record.get(record.size() - 2));
                  case "D" -> record.add(record.get(record.size() - 1) * 2);
                  case "C" -> record.removeLast();
                  default  -> record.add(Integer.parseInt(s));
              }
          }
          for (int r : record) {
              sum += r;
          }
          return sum;
      }
  }
  ```

### Q735. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)

- Simulation

- ```java
  class Solution {
      public int[] asteroidCollision(int[] asteroids) {
          Deque<Integer> stars = new ArrayDeque<>();
          for (int a : asteroids) {
              if (a > 0)
                  stars.push(a);
              // a < 0
              else {
                  if (stars.isEmpty() || stars.peek() < 0)
                      stars.push(a);
                  else {
                      int absolute = Math.abs(a);
                      if (stars.peek() < absolute) {
                          while (!stars.isEmpty() && stars.peek() > 0) {
                              int right = stars.pop();
                              if (right == absolute) {
                                  absolute = 0;
                                  break;
                              }
                              else if (right > absolute) {
                                  stars.push(right);
                                  absolute = 0;
                                  break;
                              }
                          }
                          if (absolute != 0)
                              stars.push(a);
                      }
                      else if (stars.peek() == absolute)
                          stars.pop();
                  }
              }
          }
          int[] arr = new int[stars.size()];
          for (int i = 0; i < arr.length; i++) {
              arr[i] = stars.removeLast();
          }
          return arr;
      }
  }
  ```

### :star:Q946. [Validate Stack Sequences](https://leetcode.com/problems/validate-stack-sequences/)

- Rebuild the process

- ```java
  class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
      Deque<Integer> stack = new ArrayDeque<>();
      int i = 0; // popped's index

      for (int x : pushed) {
        stack.push(x);
        while (!stack.isEmpty() && stack.peek() == popped[i]) {
          stack.pop();
          ++i;
        }
      }

      return stack.isEmpty();
    }
  }
  ```

### Q1598. [Crawler Log Folder](https://leetcode.com/problems/crawler-log-folder/)

- ```java
  class Solution {
      public int minOperations(String[] logs) {
          int count = 0;
          for (String l : logs) {
              switch (l) {
                  case "../"  -> {
                      if (count != 0)
                          count--;
                  }
                  case "./"   -> {}
                  default     -> {
                      count++;
                  }
              }
          }
          return count;
      }
  }
  ```

### Q2390. [Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/)

- ```java
  class Solution {
      public String removeStars(String s) {
          StringBuilder sb = new StringBuilder();
          for (char c : s.toCharArray()) {
              if (c == '*') {
                  if (!sb.isEmpty())
                      sb.deleteCharAt(sb.length() - 1);
              }
              else
                  sb.append(c);
          }
          return sb.toString();
      }
  }
  ```
