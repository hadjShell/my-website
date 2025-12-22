---
title: Encoding & Decoding Problems
author: David Zhang aka Hadjshell
order: 3
isOriginal: true
footer: false
editLink: false
---

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
