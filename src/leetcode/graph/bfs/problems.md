---
title: Graph BFS Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q127. [Word Ladder](https://leetcode.com/problems/word-ladder/)

```java
class Solution {

    static final char[] ALPHABET = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        int depth = 1;
        boolean found = false;
        Set<String> visited = new HashSet<>();
        Deque<String> queue = new ArrayDeque<>();
        Set<String> dict = new HashSet<>(wordList);

        if (!dict.contains(endWord))
            return 0;

        queue.offer(beginWord);
        visited.add(beginWord);
        while (!queue.isEmpty()) {
            if (found)
                break;

            int size = queue.size();
            for (int i = 0; i < size; i++) {
                if (found)
                    break;

                String word = queue.poll();
                List<String> nextWords = getAdjacents(word);
                for (String next : nextWords) {
                    if (!visited.contains(next) && dict.contains(next)) {
                        if (next.equals(endWord)) {
                            found = true;
                            break;
                        }
                        queue.offer(next);
                        visited.add(next);
                    }
                }
            }
            depth++;
        }

        return found ? depth : 0;
    }

    private List<String> getAdjacents(String word) {
        List<String> result = new ArrayList<>();

        for (int i = 0; i < word.length(); i++) {
            for (char c : ALPHABET) {
                StringBuilder sb = new StringBuilder(word);
                if (c != word.charAt(i)) {
                    sb.setCharAt(i, c);
                    result.add(sb.toString());
                }
            }
        }

        return result;
    }
}
```

### :heart:Q126. [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/description/)

- Idea:
  1. BFS find the end vertex at the smallest level while forming the sequence tree from the end vertex to start vertex;
  2. Backtracking the sequence tree to get all sequences.

- Understand the level deletion in BFS, without it we may end up with:
  1. Miss valid answer because we skip the visited vertex which may be able to form a correct shortest sequence;
  2. Stack overflow because we try to build parent list for every vertex even though it's visited, and we end up in loops.

```java
class Solution {

    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> result = new ArrayList<>();
        Set<String> dict = new HashSet<>(wordList);

        if (!dict.contains(endWord))
            return result;

        boolean found = false;
        Set<String> level = new HashSet<>();
        Map<String, Set<String>> parents = new HashMap<>();

        level.add(beginWord);
        while (!level.isEmpty() && !found) {
            dict.removeAll(level);
            Set<String> nextLevel = new HashSet<>();

            for (String word : level) {
                for (String next : dict) {
                    if (!isAdjacent(word, next)) {
                        continue;
                    }
                    nextLevel.add(next);
                    parents.computeIfAbsent(next, _ -> new HashSet<>()).add(word);
                    if (next.equals(endWord)) {
                        found = true;
                    }
                }
            }

            level = nextLevel;
        }

        if (!found)
            return result;

        List<String> path = new ArrayList<>();
        path.add(endWord);
        backtrack(endWord, beginWord, parents, path, result);

        return result;
    }

    private void backtrack(String root, String end, Map<String, Set<String>> edges, List<String> path, List<List<String>> result) {
        if (root.equals(end)) {
            result.add(List.copyOf(path.reversed()));
            return;
        }

        for (String next : edges.get(root)) {
            path.add(next);
            backtrack(next, end, edges, path, result);
            path.removeLast();
        }
    }

    private boolean isAdjacent(String w1, String w2) {
        int diff = 0;
        for (int i = 0; i < w1.length(); i++) {
            if (diff > 1)
                break;
            if (w1.charAt(i) != w2.charAt(i)) {
                diff++;
            }
        }

        return diff == 1;
    }
}
```

### Q133. [Clone Graph](https://leetcode.com/problems/clone-graph/)

```java
class Solution {
    public Node cloneGraph(Node node) {
        if (node == null)
            return null;

        Deque<Node> queue = new ArrayDeque<>();
        Set<Node> visited = new HashSet<>();
        Map<Node, Node> oldToNew = new HashMap<>();

        queue.add(node);
        visited.add(node);
        copyVal(node, oldToNew);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                Node oldNode = queue.poll();
                for (Node oldNeighbor : oldNode.neighbors) {
                    if (!oldToNew.containsKey(oldNeighbor)) {
                        copyVal(oldNeighbor, oldToNew);
                    }
                    if (!visited.contains(oldNeighbor)) {
                        queue.offer(oldNeighbor);
                        visited.add(oldNeighbor);
                    }
                }
                copyNeighbors(oldNode, oldToNew);
            }
        }

        return oldToNew.get(node);
    }

    private Node copyVal(Node old, Map<Node, Node> oldToNew) {
        Node newNode = new Node(old.val);
        oldToNew.put(old, newNode);

        return newNode;
    }

    private void copyNeighbors(Node old, Map<Node, Node> oldToNew) {
        Node newNode = oldToNew.get(old);
        for (Node oldNeighbor : old.neighbors) {
            newNode.neighbors.add(oldToNew.get(oldNeighbor));
        }
    }
}
```

### :star:Q301. [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)

```java
class Solution {
    public List<String> removeInvalidParentheses(String s) {
        List<String> result = new ArrayList<>();

        if (isValidString(s)) {
            result.add(s);
            return result;
        }


        Deque<String> queue = new ArrayDeque<>();
        Set<String> visited = new HashSet<>();
        boolean foundValidLevel = false;

        queue.offer(s);
        visited.add(s);
        while (!queue.isEmpty() && !foundValidLevel) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String curr = queue.poll();
                for (String next : deleteOneParenthesis(curr)) {
                    if (isValidString(next)) {
                        if (!visited.contains(next))
                            result.add(next);
                        visited.add(next);
                        foundValidLevel = true;
                    }
                    if (!visited.contains(next)) {
                        queue.offer(next);
                        visited.add(next);
                    }
                }
            }
        }

        return result;
    }

    private List<String> deleteOneParenthesis(String s) {
        List<String> result = new ArrayList<>();

        if (s.isEmpty())
            return result;

        for (int i = 0; i < s.length(); i++) {
            if (Character.isLetter(s.charAt(i)))
                continue;

            StringBuilder sb = new StringBuilder(s);
            sb.deleteCharAt(i);
            result.add(sb.toString());
        }

        return result;
    }

    private boolean isValidString(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(') {
                stack.push(c);
            }
            else if (c == ')') {
                if (stack.isEmpty())
                    return false;
                else
                    stack.pop();
            }
            else
                continue;
        }

        return stack.isEmpty();
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

- Bidirectional BFS

```java
class Solution {
    public int openLock(String[] deadends, String target) {
        Set<String> visited = new HashSet<>(Arrays.stream(deadends).toList());

        if (visited.contains("0000"))
            return -1;
        if (target.equals("0000"))
            return 0;

        Set<String> levelStart = new HashSet<>();
        Set<String> levelEnd = new HashSet<>();
        int step = 0;
        boolean found = false;

        levelStart.add("0000");
        visited.add("0000");
        levelEnd.add(target);
        visited.add(target);

        while (!levelStart.isEmpty() && !levelEnd.isEmpty() && !found) {
            Set<String> levelSmall = levelStart.size() < levelEnd.size() ? levelStart : levelEnd;
            Set<String> levelBig = levelSmall == levelStart ? levelEnd : levelStart;
            Set<String> level = new HashSet<>();
            for (String state : levelSmall) {
                for (String next : getNextMoves(state)) {
                    if (levelBig.contains(next)) {
                        found = true;
                        break;
                    }
                    if (!visited.contains(next)) {
                        level.add(next);
                        visited.add(next);
                    }
                }
            }
            levelSmall.clear();
            levelSmall.addAll(level);
            step++;
        }

        return found ? step : -1;
    }

    private List<String> getNextMoves(String state) {
        List<String> result = new ArrayList<>();
        StringBuilder sb = new StringBuilder(state);
        for (int i = 0; i < sb.length(); i++) {
            char c = sb.charAt(i);
            char c1 = c == '0' ? '9' : (char) (c - 1);
            char c2 = c == '9' ? '0' : (char) (c + 1);
            sb.setCharAt(i, c1);
            result.add(sb.toString());
            sb.setCharAt(i, c2);
            result.add(sb.toString());
            sb.setCharAt(i, c);
        }

        return result;
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

### :star:Q778. [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)

```java
class Solution {

    static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

    public int swimInWater(int[][] grid) {
        int n = grid.length;
        Deque<Record> queue = new ArrayDeque<>();
        Map<Integer, Record> visited = new HashMap<>();

        Record start = new Record(0, 0, grid[0][0], grid[0][0]);
        queue.offer(start);
        visited.put(hash(0, 0, n), start);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int c = 0; c < size; c++) {
                Record curr = queue.poll();
                for (int[] d : DIR) {
                    int i = curr.i + d[0], j = curr.j + d[1];
                    if (i < 0 || i >= n || j < 0 || j >= n)
                        continue;

                    int hash = hash(i, j, n);
                    int time = curr.elevation >= grid[i][j] ? curr.time : curr.time + grid[i][j] - curr.elevation;
                    int elevation = Math.max(curr.elevation, grid[i][j]);

                    if (!visited.containsKey(hash)) {
                        Record r = new Record(i, j, time, elevation);
                        visited.put(hash, r);
                        queue.offer(r);
                    }
                    else {
                        Record prev = visited.get(hash);
                        if (time < prev.time) {
                            prev.time = time;
                            prev.elevation = elevation;
                            queue.offer(prev);
                        }
                    }
                }
            }
        }

        return visited.get(hash(n - 1, n - 1, n)).time;
    }

    class Record {
        int i;
        int j;
        // minimum time reach node (i, j)
        int time;
        int elevation;

        public Record(int i, int j, int time, int elevation) {
            this.i = i;
            this.j = j;
            this.time = time;
            this.elevation = elevation;
        }
    }

    private int hash(int i, int j, int n) {
        return i * n + j;
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
