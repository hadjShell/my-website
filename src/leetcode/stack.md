---
title: Stack
author: David Zhang aka Hadjshell
order: 6
isOriginal: true
footer: false
editLink: false
---

## :bulb:FIFO

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

## :bulb:Valid parentheses

### Q20. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

- ```java
  class Solution {
      public boolean isValid(String s) {
          // length can not be divided by 2: false
          if (s.length() % 2 != 0)
              return false;

          Deque<Character> stack = new ArrayDeque<>();
          for (char c : s.toCharArray()) {
              switch (c) {
                  case '(', '{', '[' -> stack.push(c);
                  case ')', '}', ']' -> {
                      if (stack.isEmpty())
                          return false;
                      else {
                          char prev = stack.pop();
                          switch (prev) {
                              case '(' -> {
                                  if (c != ')')   return false;
                              }
                              case '{' -> {
                                  if (c != '}')   return false;
                              }
                              case '[' -> {
                                  if (c != ']')   return false;
                              }
                          }
                      }
                  }
              }
          }
          return stack.isEmpty();
      }
  }
  ```

### Q921. [Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)

- ```java
  class Solution {
      public int minAddToMakeValid(String s) {
          int a = 0, b = 0;
          for (char c : s.toCharArray()) {
              if (c == '(')   a++;
              else {
                  if (a != 0) a--;
                  else        b++;
              }
          }
          return a + b;
      }
  }
  ```

### Q1021. [Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/)

- ```java
  class Solution {
      public String removeOuterParentheses(String s) {
          int count = 0, start = 0, end = 0;
          StringBuilder sb = new StringBuilder();
          char[] c = s.toCharArray();

          for (int i = 0; i < c.length; i++) {
              if (count == 0) {
                  if (start < end)    sb.append(s, start, end);
                  start = i + 1;
              }
              if (c[i] == '(') {
                  count++;
              }
              else {
                  count--;
                  if (count == 0)     end = i;
              }
          }
          if (start < end)    sb.append(s, start, end);
          return sb.toString();
      }
  }
  ```

## :bulb:Encoding & Decoding

### Q71. [Simplify Path](https://leetcode.com/problems/simplify-path/)

- ```java
  class Solution {
      public String simplifyPath(String path) {
          String[] paths = path.split("/");
          Deque<String> directories = new ArrayDeque<>();

          for (String p : paths) {
              switch(p) {
                  case ".."   -> {
                      if (!directories.isEmpty())
                          directories.removeFirst();
                  }
                  case ".", ""-> {}
                  default     ->
                      directories.addFirst(p);
              }
          }

          StringBuilder sb = new StringBuilder();
          while (!directories.isEmpty()) {
              sb.append("/").append(directories.removeLast());
          }

          return sb.length() == 0 ? "/" : sb.toString();
      }
  }
  ```

### Q150. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

- ```java
  class Solution {
      public int evalRPN(String[] tokens) {
          Deque<Integer> operands = new ArrayDeque<>();

          for (String t : tokens) {
              switch (t) {
                  case "+", "-", "*", "/" -> {
                      int o2 = operands.removeFirst();
                      int o1 = operands.removeFirst();
                      int result = cal(o1, o2, t);
                      operands.addFirst(result);
                  }
                  default -> {
                      operands.addFirst(Integer.parseInt(t));
                  }
              }
          }

          return operands.removeFirst();
      }

      private int cal(int o1, int o2, String op) {
          return switch (op) {
              case "+" -> o1 + o2;
              case "-" -> o1 - o2;
              case "*" -> o1 * o2;
              case "/" -> (int) o1 / o2;
              default  -> -1;
          };
      }
  }
  ```

### :heart:Q224. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)

- ```java
  class Solution {
      public int calculate(String s) {
          Deque<Integer> operand = new ArrayDeque<>();
          Deque<Character> operator = new ArrayDeque<>();
          int num = 0;
          boolean isUnary = true;

          for (int i = 0; i < s.length(); i++) {
              char c = s.charAt(i);

              if (c == '+') {
                  operator.push('+');
              }
              else if (c == '-') {
                  if (isUnary)    operand.push(0);
                  operator.push('-');
              }
              else if (c == '(') {
                  operator.push('(');
                  isUnary = true;
              }
              else if (c == ')') {
                  calExp(operand, operator);
              }
              else if (c >= '0' && c <= '9'){
                  num = num * 10 + (c - '0');
                  if (i == s.length() - 1 ||
                      s.charAt(i + 1) < '0' ||
                      s.charAt(i + 1) > '9') {
                          operand.push(num);
                          isUnary = false;
                          num = 0;
                      }
              }
          }

          calExp(operand, operator);

          return operand.peek();
      }

      private void calExp(Deque<Integer> operand, Deque<Character> operator) {
          int result = 0;

          while (!operator.isEmpty() && operator.peek() != '(') {
              char op = operator.pop();
              int o = operand.pop();
              result = op == '+' ? result + o : result - o;
          }
          result += operand.pop();

          operand.push(result);
          if (!operator.isEmpty())    operator.pop();
      }
  }
  ```

### :star:Q394. [Decode String](https://leetcode.com/problems/decode-string/)

- ```java
  class Solution {
      public String decodeString(String s) {
          Deque<Integer> times = new ArrayDeque<>();
          Deque<StringBuilder> words = new ArrayDeque<>();
          int time = 0;

          words.push(new StringBuilder());

          for (char c : s.toCharArray()) {
              if (c == '[') {
                  words.push(new StringBuilder());
                  times.push(time);
                  time = 0;
              }
              else if (c == ']') {
                  int t = times.pop();
                  StringBuilder word = words.pop();
                  word.repeat(word, t - 1);
                  words.peek().append(word);
              }
              else if (c >= 'a' && c <= 'z') {
                  words.peek().append(c);
              }
              else if (c >= '0' && c <= '9') {
                  time = time * 10 + (c - '0');
              }
          }

          return words.pop().toString();
      }
  }
  ```

### Q856. [Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/)

- Same idea with Q394: maintain a previous result stack

- ```java
  class Solution {
      public int scoreOfParentheses(String s) {
          Deque<Integer> score = new ArrayDeque<>();
          int cur_s = 0;
          for (char c : s.toCharArray()) {
              if (c == '(') {
                  score.push(cur_s);
                  cur_s = 0;
              }
              else {
                  if (cur_s == 0)
                      cur_s = score.pop() + 1;
                  else
                      cur_s = cur_s * 2 + score.pop();
              }
          }
          return cur_s;
      }
  }
  ```

## :bulb: Monotonic Stack

- **Next greater/smaller value** or **Last greater/smaller value** problem
- Leverage stack to maintain a monotonically **increasing or decreasing list**

  - Pop smaller values, then push new big value
  - Pop biggers values, then push new small value

- Trick
  - **Store indices in stack** for convenience

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
