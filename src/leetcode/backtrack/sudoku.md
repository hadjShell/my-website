---
title: Sudoku Problem
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### Q37. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)

- ```java
  class Solution {
      class Sudoku {
          public static final int SIZE = 9;

          char[][] board;
          List<Set<Character>> rows;
          List<Set<Character>> cols;
          List<Set<Character>> grids;
          boolean isSolved;

          public Sudoku() {}
          public Sudoku(char[][] board) {
              isSolved = false;
              this.board = board;
              rows = new ArrayList<>();
              cols = new ArrayList<>();
              grids = new ArrayList<>();

              for (int i = 0; i < SIZE; i++) {
                  rows.add(new HashSet<>());
                  cols.add(new HashSet<>());
                  grids.add(new HashSet<>());
              }

              for (int i = 0; i < SIZE; i++)
                  for (int j = 0; j < SIZE; j++) {
                      if (board[i][j] != '.') {
                          rows.get(i).add(board[i][j]);
                          cols.get(j).add(board[i][j]);
                          grids.get(getGridIndex(i, j)).add(board[i][j]);
                      }
                  }
          }

          // is it valid to put digit into [i, j]
          public boolean isValid(int i, int j, char digit) {
              int g = getGridIndex(i, j);

              return !rows.get(i).contains(digit) &&
                      !cols.get(j).contains(digit) &&
                      !grids.get(g).contains(digit);
          }

          public void add(int i, int j, char digit) {
              int g = getGridIndex(i, j);

              board[i][j] = digit;
              rows.get(i).add(digit);
              cols.get(j).add(digit);
              grids.get(g).add(digit);
          }

          public void remove(int i, int j, char digit) {
              int g = getGridIndex(i, j);

              board[i][j] = '.';
              rows.get(i).remove(digit);
              cols.get(j).remove(digit);
              grids.get(g).remove(digit);
          }

          private int getGridIndex(int i, int j) {
              return ((int) i / 3) * 3 + ((int) j / 3);
          }
      }

      public void solveSudoku(char[][] board) {
          Sudoku sudoku = new Sudoku(board);

          backtrack(sudoku, 0, 0);
      }

      private void backtrack(Sudoku sudoku, int i, int j) {
          if (j == Sudoku.SIZE) {
              i++;
              j = 0;
          }

          if (i == Sudoku.SIZE) {
              sudoku.isSolved = true;
              return;
          }

          if (sudoku.board[i][j] != '.') {
              backtrack(sudoku, i, j + 1);
              return;
          }

          for (char choice = '1'; choice <= '9'; choice++) {
              if (sudoku.isSolved)
                  return;

              if (!sudoku.isValid(i, j, choice))
                  continue;

              sudoku.add(i, j, choice);
              backtrack(sudoku, i, j + 1);
              if (!sudoku.isSolved)  sudoku.remove(i, j, choice);
          }
      }
  }
  ```
