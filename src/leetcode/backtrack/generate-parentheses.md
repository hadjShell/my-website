---
title: Generate Parentheses Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

::: important Problem Domain

Parenthesis problem has two variations:

1. **Valid parentheses**: stack solution
2. **Generate parentheses**: backtracking

:::

## Properties of a valid parentheses combination

- A valid parentheses combination has **the same amount of left parentheses and right parentheses**.
- For a valid parentheses combination $p$, **the amount of left parentheses must be greater than or equal to the amount of right parentheses** in every substring $p[0...i]$, where $0 <= i < len(p)$.

### Q22. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

- ```java
  class Solution {
      public List<String> generateParenthesis(int n) {
          List<String> result = new ArrayList<>();
          // 0: left, 1: right
          int[] parenthesis = new int[2];
          StringBuilder path = new StringBuilder();

          backtrack(n, parenthesis, path, result);

          return result;
      }

      private void backtrack(int n, int[] parenthesis, StringBuilder path, List<String> result) {
          if (parenthesis[0] < parenthesis[1] || path.length() > 2 * n)
              return;

          if (parenthesis[0] == parenthesis[1] && parenthesis[0] == n) {
              result.add(path.toString());
              return;
          }

          parenthesis[0]++;
          path.append('(');
          backtrack(n, parenthesis, path, result);
          path.setLength(path.length() - 1);
          parenthesis[0]--;

          parenthesis[1]++;
          path.append(')');
          backtrack(n, parenthesis, path, result);
          path.setLength(path.length() - 1);
          parenthesis[1]--;
      }
  }
  ```
