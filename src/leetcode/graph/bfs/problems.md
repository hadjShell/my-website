---
title: Graph BFS Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q127. [Word Ladder](https://leetcode.com/problems/word-ladder/)

- ```java
  class Solution {
      static char[] alphabet = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

      public int ladderLength(String beginWord, String endWord, List<String> wordList) {
          Set<String> dictionary = new HashSet<>(wordList);

          if (!dictionary.contains(endWord))      return 0;

          Set<String> q1 = new HashSet<>();
          Set<String> q2 = new HashSet<>();
          Set<String> visited = new HashSet<>();
          int step = 0;

          q1.add(beginWord);
          q2.add(endWord);

          while (!q1.isEmpty() && !q2.isEmpty()) {
              Set<String> temp = new HashSet<>();

              for (String word : q1) {
                  if (q2.contains(word))
                      return step + 1;

                  visited.add(word);
                  for (String next : neighbors(word)) {
                      if (!dictionary.contains(next) || visited.contains(next))   continue;
                      temp.add(next);
                  }
              }

              if (temp.size() < q2.size())
                  q1 = temp;
              else {
                  q1 = q2;
                  q2 = temp;
              }

              step++;
          }

          return 0;
      }

      private List<String> neighbors(String s) {
          List<String> l = new ArrayList<>();

          for (int i = 0; i < s.length(); i++) {
              for (char c : alphabet) {
                  if (s.charAt(i) == c)      continue;

                  char[] chars = s.toCharArray();
                  chars[i] = c;
                  l.add(new String(chars));
              }
          }

          return l;
      }
  }
  ```

### Q365. [Water and Jug Problem](https://leetcode.com/problems/water-and-jug-problem/)

- ```java
  class Solution {
      public boolean canMeasureWater(int x, int y, int target) {
          if (x + y < target)
              return false;

          Deque<int[]> q = new ArrayDeque<>();
          Set<Long> visited = new HashSet<>();
          int[] start = new int[2];

          q.offer(start);
          visited.add(0l);

          while (!q.isEmpty()) {
              int size = q.size();

              for (int i = 0; i < size; i++) {
                  int[] state = q.poll();

                  if (state[0] + state[1] == target)
                      return true;

                  for (int[] next : nextMoves(state, x, y)) {
                      long hash = hash(next);
                      if (visited.contains(hash))     continue;
                      q.offer(next);
                      visited.add(hash);
                  }
              }
          }

          return false;
      }

      private List<int[]> nextMoves(int[] state, int x, int y) {
          List<int[]> l = new ArrayList<>();
          int total = state[0] + state[1];

          for (int i = 0; i < 6; i++) {
              int[] c = Arrays.copyOf(state, state.length);
              l.add(c);
          }

          l.get(0)[0] = x;
          l.get(1)[1] = y;
          l.get(2)[0] = 0;
          l.get(3)[1] = 0;
          int[] c5 = l.get(4);
          c5[0] = total <= y ? 0 : total - y;
          c5[1] = total <= y ? total : y;
          int[] c6 = l.get(5);
          c6[0] = total <= x ? total : x;
          c6[1] = total <= x ? 0 : total - x;

          return l;
      }

      private long hash(int[] state) {
          return ((long) state[0]) << 32 | state[1];
      }
  }
  ```

### Q433. [Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)

- ```java
  class Solution {
      public int minMutation(String startGene, String endGene, String[] bank) {
          Set<String> validGenes = new HashSet<>(Arrays.asList(bank));

          if (!validGenes.contains(endGene))
              return -1;

          char[] genes = {'A', 'C', 'G', 'T'};
          Deque<String> q = new ArrayDeque<>();
          Set<String> visited = new HashSet<>();
          int step = 0;

          q.offer(startGene);
          visited.add(startGene);

          while (!q.isEmpty()) {
              int size = q.size();

              for (int i = 0; i < size; i++) {
                  String g = q.poll();

                  if (g.equals(endGene))
                      return step;

                  for (int k = 0; k < g.length(); k++) {
                      char[] chars = g.toCharArray();

                      for (int j = 0; j < genes.length; j++) {
                          if (chars[k] == genes[j])    continue;

                          chars[k] = genes[j];
                          String newGene = new String(chars);
                          if (validGenes.contains(newGene) && !visited.contains(newGene)) {
                              q.offer(newGene);
                              visited.add(newGene);
                          }
                      }
                  }
              }

              step++;
          }

          return -1;
      }
  }
  ```

### :heart:Q752. [Open the Lock](https://leetcode.com/problems/open-the-lock/)

- ```java
  // Bidirectional BFS
  class Solution {
      public int openLock(String[] deadends, String target) {
          Set<String> q1 = new HashSet<>();
          Set<String> q2 = new HashSet<>();
          Set<String> visited = new HashSet<>();
          int turn = 0;
          String start = "0000";

          for (String d : deadends) {
              if (d.equals(start) || d.equals(target))
                  return -1;

              visited.add(d);
          }

          q1.add(start);
          q2.add(target);

          while (!q1.isEmpty() && !q2.isEmpty()) {
              Set<String> temp = new HashSet<>();

              for (String state : q1) {
                  if (q2.contains(state))
                      return turn;

                  // notice when to set visited true
                  visited.add(state);
                  for (int k = 0; k < state.length(); k++) {
                      String up = rotateUp(state, k), down = rotateDown(state, k);

                      if (!visited.contains(up))      temp.add(up);
                      if (!visited.contains(down))    temp.add(down);
                  }
              }

              if (q2.size() < temp.size()) {
                  q1 = q2;
                  q2 = temp;
              }
              else
                  q1 = temp;

              turn++;
          }

          return -1;
      }

      private String rotateUp(String s, int i) {
          char[] c = s.toCharArray();
          c[i] = c[i] == '9' ? '0' : (char) (c[i] + 1);
          return new String(c);
      }

      private String rotateDown(String s, int i) {
          char[] c = s.toCharArray();
          c[i] = c[i] == '0' ? '9' : (char) (c[i] - 1);
          return new String(c);
      }
  }
  ```

### Q773. [Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)

- ```java
  class Solution {
      public int slidingPuzzle(int[][] board) {
          int m = 2, n = 3;
          int[][] neighbors = new int[][]{
                  {1, 3},
                  {0, 4, 2},
                  {1, 5},
                  {0, 4},
                  {3, 1, 5},
                  {4, 2}
          };
          String target = "123450";
          StringBuilder start = new StringBuilder();
          for (int i = 0; i < m; i++)
              for (int j = 0; j < n; j++)
                  start.append(board[i][j]);

          Set<String> visited = new HashSet<>();
          Deque<String> q = new ArrayDeque<>();
          int moves = 0;
          q.offer(start.toString());
          visited.add(start.toString());

          while (!q.isEmpty()) {
              int size = q.size();
              for (int k = 0; k < size; k++) {
                  String state = q.poll();

                  if (state.equals(target))
                      return moves;

                  int index = state.indexOf('0');
                  int[] neighbor = neighbors[index];
                  for (int i : neighbor) {
                      String next = swap(state, index, i);
                      if (visited.contains(next)) continue;
                      q.offer(next);
                      visited.add(next);
                  }
              }
              moves++;
          }

          return -1;
      }

      private String swap(String s, int x, int y) {
          char[] chars = s.toCharArray();
          char a = chars[x], b = chars[y];
          chars[x] = b;
          chars[y] = a;

          return new String(chars);
      }
  }
  ```

### Q909. [Snakes and Ladders](https://leetcode.com/problems/snakes-and-ladders/)

- ```java
  class Solution {
      public int snakesAndLadders(int[][] board) {
          int n = board.length;
          int start = 1, end = n * n;
          Deque<Integer> q = new ArrayDeque<>();
          boolean[] visited = new boolean[end + 1];
          int step = 0;

          q.offer(1);
          visited[start] = true;

          while (!q.isEmpty()) {
              int size = q.size();

              for (int i = 0; i < size; i++) {
                  int square = q.poll(), nextMax = Math.min(square + 6, end);

                  if (square == end)
                      return step;

                  for (int k = square + 1; k <= nextMax; k++) {
                      int[] index = getIndex(k, n);
                      int ladder = board[index[0]][index[1]];
                      int next = ladder == -1 ? k : ladder;

                      if (visited[next] != true) {
                          q.offer(next);
                          visited[next] = true;
                      }
                  }
              }

              step++;
          }

          return -1;
      }

      private int[] getIndex(int square, int n) {
          int[] m = new int[2];
          int rowFromBottom = (square - 1) / n;       // start from 0;
          int colToEdge = (rowFromBottom + 1) * n - square;       // how many cols to right or left edge
          m[0] = (n - 1) - rowFromBottom;
          m[1] = rowFromBottom % 2 == 0 ? n - 1 - colToEdge : colToEdge;

          return m;
      }
  }
  ```

### :heart:Q994. [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

- ```java
  class Solution {
      public int orangesRotting(int[][] grid) {
          Deque<int[]> rotten = new ArrayDeque<>();
          int m = grid.length, n = grid[0].length;
          int oranges = 0;
          for (int i = 0; i < m; i++)
              for (int j= 0 ; j < n; j++) {
                  if (grid[i][j] != 0)
                      oranges++;
                  if (grid[i][j] == 2)
                      rotten.offer(new int[] {i, j});
              }
          if (oranges == 0)
              return 0;

          int cnt = 0, minute = -1;
          while (!rotten.isEmpty()) {
              int size = rotten.size();
              for (int i = 0; i < size; i++) {
                  int[] r = rotten.poll();
                  cnt++;
                  int up = r[0] - 1, down = r[0] + 1, left = r[1] - 1, right = r[1] + 1;
                  if (up >= 0 && grid[up][r[1]] == 1) {
                      grid[up][r[1]] = 2;
                      rotten.offer(new int[] {up, r[1]});
                  }
                  if (down < m && grid[down][r[1]] == 1) {
                      grid[down][r[1]] = 2;
                      rotten.offer(new int[] {down, r[1]});
                  }
                  if (left >= 0 && grid[r[0]][left] == 1) {
                      grid[r[0]][left] = 2;
                      rotten.offer(new int[] {r[0], left});
                  }
                  if (right < n && grid[r[0]][right] == 1) {
                      grid[r[0]][right] = 2;
                      rotten.offer(new int[] {r[0], right});
                  }
              }
              minute++;
          }

          return cnt == oranges ? minute : -1;
      }
  }
  ```

### Q1926. [Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)

- ```java
  class Solution {
      public int nearestExit(char[][] maze, int[] entrance) {
          Deque<int[]> moves = new ArrayDeque<>();
          Set<Integer> visited = new HashSet<>();
          int steps = 0;
          Maze m = new Maze(maze, entrance);
          moves.offer(entrance);
          visited.add(m.hashLocation(entrance));

          while (!moves.isEmpty()) {
              int size = moves.size();
              for (int i = 0; i < size; i++) {
                  int[] location = moves.poll();
                  if (m.isExit(location))
                      return steps;
                  List<int[]> nextMoves = m.nextMoves(location);
                  for (int[] next : nextMoves) {
                      if (!visited.contains(m.hashLocation(next))) {
                          moves.offer(next);
                          visited.add(m.hashLocation(next));
                      }
                  }
              }
              steps++;
          }
          return -1;
      }

      private class Maze {
          char[][] maze;
          int[] entrance;

          public Maze() {}
          public Maze(char[][] maze, int[] entrance) {
              this.maze = maze;
              this.entrance = entrance;
          }

          public boolean isExit(int[] location) {
              if (location[0] == 0 || location[0] == maze.length - 1 ||
                  location[1] == 0 || location[1] == maze[0].length - 1) {
                      if (location[0] != entrance[0] || location[1] != entrance[1])
                          return true;
                  }
              return false;
          }

          public List<int[]> nextMoves(int[] location) {
              List<int[]> next = new ArrayList<>();
              int i = location[0], j = location[1];
              // go up
              if (i - 1 >= 0 && maze[i - 1][j] != '+') {
                  next.add(new int[] {i - 1, j});
              }
              // go down
              if (i + 1 < maze.length && maze[i + 1][j] != '+') {
                  next.add(new int[] {i + 1, j});
              }
              // go left
              if (j - 1 >= 0 && maze[i][j - 1] != '+') {
                  next.add(new int[] {i, j - 1});
              }
              /// go right
              if (j + 1 < maze[0].length && maze[i][j + 1] != '+') {
                  next.add(new int[] {i, j + 1});
              }
              return next;
          }

          public int hashLocation(int[] location) {
              return (location[0] << 16) ^ location[1];
          }
      }
  }
  ```
