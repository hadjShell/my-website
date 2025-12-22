---
title: Valid Parentheses Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

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
