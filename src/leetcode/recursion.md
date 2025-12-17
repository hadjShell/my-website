---
title: Recursion
author: David Zhang aka Hadjshell
order: 13
isOriginal: true
footer: false
editLink: false
---

- **遍历** or **分解子问题**
- **多叉树**

### Q341. [Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/)

- 实际上是**遍历一个多叉树**

  ```java
  /**
   * // This is the interface that allows for creating nested lists.
   * // You should not implement it, or speculate about its implementation
   * public interface NestedInteger {
   *
   *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
   *     public boolean isInteger();
   *
   *     // @return the single integer that this NestedInteger holds, if it holds a single integer
   *     // Return null if this NestedInteger holds a nested list
   *     public Integer getInteger();
   *
   *     // @return the nested list that this NestedInteger holds, if it holds a nested list
   *     // Return empty list if this NestedInteger holds a single integer
   *     public List<NestedInteger> getList();
   * }
   */
  public class NestedIterator implements Iterator<Integer> {
      private List<Integer> flattenList;
      private Iterator<Integer> listIterator;

      public NestedIterator(List<NestedInteger> nestedList) {
          flattenList = new ArrayList<>();

          flatten(nestedList);

          listIterator = flattenList.listIterator();
      }

      private void flatten(List<NestedInteger> nestedList) {
          for (NestedInteger ni : nestedList) {
              if (ni.isInteger())
                  flattenList.add(ni.getInteger());
              else
                  flatten(ni.getList());
          }
      }

      @Override
      public Integer next() {
          return listIterator.next();
      }

      @Override
      public boolean hasNext() {
          return listIterator.hasNext();
      }
  }

  /**
   * Your NestedIterator object will be instantiated and called as such:
   * NestedIterator i = new NestedIterator(nestedList);
   * while (i.hasNext()) v[f()] = i.next();
   */
  ```

- **出栈压栈 flatten 第一个 list，实现惰性 flatten**

  - ```java
    public class NestedIterator implements Iterator<Integer> {
        private LinkedList<NestedInteger> list;

        public NestedIterator(List<NestedInteger> nestedList) {
            // 不直接用 nestedList 的引用，是因为不能确定它的底层实现
            // 必须保证是 LinkedList，否则下面的 addFirst 会很低效
            list = new LinkedList<>(nestedList);
        }

        public Integer next() {
            // hasNext 方法保证了第一个元素一定是整数类型
            return list.remove(0).getInteger();
        }

        public boolean hasNext() {
            // 循环拆分列表元素，直到列表第一个元素是整数类型
            while (!list.isEmpty() && !list.get(0).isInteger()) {
                // 当列表开头第一个元素是列表类型时，进入循环
                List<NestedInteger> first = list.remove(0).getList();
                // 将第一个列表打平并按顺序添加到开头
                for (int i = first.size() - 1; i >= 0; i--) {
                    list.addFirst(first.get(i));
                }
            }
            return !list.isEmpty();
        }
    }
    ```

### Q427. [Construct Quad Tree](https://leetcode.com/problems/construct-quad-tree/)

- Follow-up: Assuming you have got a constructed quad tree, now you are required to implement a `public Node set(int[][] grid, int x, int y, int val)` to reconstruct the quad tree.

  - Calculate which one at which level is the changed node, bfs get it and reconstruct it, and then insert the new subtree back

  ```java
  /*
  // Definition for a QuadTree node.
  class Node {
      public boolean val;
      public boolean isLeaf;
      public Node topLeft;
      public Node topRight;
      public Node bottomLeft;
      public Node bottomRight;


      public Node() {
          this.val = false;
          this.isLeaf = false;
          this.topLeft = null;
          this.topRight = null;
          this.bottomLeft = null;
          this.bottomRight = null;
      }

      public Node(boolean val, boolean isLeaf) {
          this.val = val;
          this.isLeaf = isLeaf;
          this.topLeft = null;
          this.topRight = null;
          this.bottomLeft = null;
          this.bottomRight = null;
      }

      public Node(boolean val, boolean isLeaf, Node topLeft, Node topRight, Node bottomLeft, Node bottomRight) {
          this.val = val;
          this.isLeaf = isLeaf;
          this.topLeft = topLeft;
          this.topRight = topRight;
          this.bottomLeft = bottomLeft;
          this.bottomRight = bottomRight;
      }
  }
  */

  class Solution {
      public Node construct(int[][] grid) {
          return _construct(grid, 0, 0, grid.length - 1, grid.length - 1);
      }

      private Node _construct(int[][] grid, int r1, int c1, int r2, int c2) {
          if (isLeaf(grid, r1, c1, r2, c2))
              return new Node(grid[r1][c1] == 1, true);

          int length = (r2 - r1 + 1) / 2;
          Node tl = _construct(grid, r1, c1, r1 + length - 1, c1 + length - 1);
          Node tr = _construct(grid, r1, c1 + length, r1 + length - 1, c2);
          Node bl = _construct(grid, r1 + length, c1, r2, c1 + length - 1);
          Node br = _construct(grid, r1 + length, c1 + length, r2, c2);

          return new Node(true, false, tl, tr, bl, br);
      }

      private boolean isLeaf(int[][] grid, int r1, int c1, int r2, int c2) {
          int val = grid[r1][c1];

          for (int i = r1; i <= r2; i++)
              for (int j = c1; j <= c2; j++) {
                  if (grid[i][j] != val)
                      return false;
              }

          return true;
      }
  }
  ```

### :star:Q880. [Decoded String at Index](https://leetcode.com/problems/decoded-string-at-index/)

- ```java
  class Solution {
      public String decodeAtIndex(String s, int k) {
          char[] c = s.toCharArray();
          return decode(c, k);
      }

      private String decode(char[] c, long k) {
          long curLength = 0;
          long[] length = new long[100];
          int p = 0;

          for (int i = 0; i < c.length; i++) {
              if (c[i] >= 'a' && c[i] <= 'z')
                  curLength++;
              else
                  curLength *= c[i] - '0';
              length[i] = curLength;

              if (curLength >= k) {
                  p = i;
                  break;
              }
          }

          // base case
          if (c[p] >= 'a' && c[p] <= 'z')
              return String.valueOf(c[p]);
          else {
              k %= length[p - 1];
              if (k == 0)
                  k = length[p - 1];
              return decode(c, k);
          }
      }
  }
  ```

### :star:Q395. [Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)

- ```java
  class Solution {
      public int longestSubstring(String s, int k) {
          char[] c = s.toCharArray();
          return _longestSubstring(c, k, 0, c.length);
      }

      private int _longestSubstring(char[] c, int k, int l, int r) {
          if (r - l < k)
              return 0;
          int[] freq = new int[26];
          for (int i = l; i < r; i++)
              freq[c[i] - 'a']++;

          boolean flag = true;
          for (int i = 0; i < 26; i++) {
              if (freq[i] > 0 && freq[i] < k) flag = false;
          }
          if (flag == true)
              return r - l;

          int ans = 0, start = 0;
          for (int i = l; i < r; i++) {
              if (freq[c[i] - 'a'] < k) {
                  ans = Math.max(_longestSubstring(c, k, start, i), ans);
                  start = i + 1;
              }
          }
          ans = Math.max(_longestSubstring(c, k, start, r), ans);
          return ans;
      }
  }
  ```
