---
title: N-Queen Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

::: important Problem Description

Given an integer `n`, place n queens on an `n × n` chessboard such that no two queens attack each other. A queen can attack another queen if they are placed in **the same row**, **the same column**, or on **the same diagonal**.

Find **all possible distinct arrangements** of the queens on the board that satisfy these conditions.

:::

### Q51. [N-Queens](https://leetcode.com/problems/n-queens/)

- ```java
  class Solution {
      public List<List<String>> solveNQueens(int n) {
          char[][] board = createBoard(n);
          List<List<String>> result = new ArrayList<>();

          backtrack(board, 0, result);

          return result;
      }

      private void backtrack(char[][] board, int i, List<List<String>> result) {
          if (i == board.length) {
              result.add(formatAnswer(board));
              return;
          }

          for (int j = 0; j < board.length; j++) {
              if (!isValid(i, j, board))
                  continue;

              board[i][j] = 'Q';
              backtrack(board, i + 1, result);
              board[i][j] = '.';
          }
      }

      private List<String> formatAnswer(char[][] board) {
          List<String> answer = new ArrayList<>();

          for (int i = 0; i < board.length; i++) {
              StringBuilder sb = new StringBuilder();
              for (int j = 0; j < board.length; j++) {
                  sb.append(board[i][j]);
              }
              answer.add(sb.toString());
          }

          return answer;
      }

      private boolean isValid(int i, int j, char[][] board) {
          // row
          for (int c = 0; c < j; c++)
              if (board[i][c] == 'Q')     return false;

          // col
          for (int r = 0; r < i; r++)
              if (board[r][j] == 'Q')     return false;

          // diagonal - left-upper, right-upper
          for (int r = i - 1, c = j - 1; r >= 0 && c >= 0; r--, c--)
              if (board[r][c] == 'Q') return false;

          for (int r = i - 1, c = j + 1; r >= 0 && c < board.length; r--, c++)
              if (board[r][c] == 'Q') return false;

          return true;
      }

      private char[][] createBoard(int n) {
          char[][] board = new char[n][];

          for (int i = 0; i < n; i++) {
              board[i] = new char[n];
              Arrays.fill(board[i], '.');
          }

          return board;
      }
  }
  ```

### Q52. [N-Queens II](https://leetcode.com/problems/n-queens-ii/)

- ```java
  class Solution {
      int result = 0;

      public int totalNQueens(int n) {
          char[][] board = createBoard(n);

          backtrack(board, 0);

          return result;
      }

      private void backtrack(char[][] board, int i) {
          if (i == board.length) {
              result++;
              return;
          }

          for (int j = 0; j < board.length; j++) {
              if (!isValid(i, j, board))
                  continue;

              board[i][j] = 'Q';
              backtrack(board, i + 1);
              board[i][j] = '.';
          }
      }

      private boolean isValid(int i, int j, char[][] board) {
          // row
          for (int c = 0; c < j; c++)
              if (board[i][c] == 'Q')     return false;

          // col
          for (int r = 0; r < i; r++)
              if (board[r][j] == 'Q')     return false;

          // diagonal - left-upper, right-upper
          for (int r = i - 1, c = j - 1; r >= 0 && c >= 0; r--, c--)
              if (board[r][c] == 'Q') return false;

          for (int r = i - 1, c = j + 1; r >= 0 && c < board.length; r--, c++)
              if (board[r][c] == 'Q') return false;

          return true;
      }

      private char[][] createBoard(int n) {
          char[][] board = new char[n][];

          for (int i = 0; i < n; i++) {
              board[i] = new char[n];
              Arrays.fill(board[i], '.');
          }

          return board;
      }
  }
  ```
