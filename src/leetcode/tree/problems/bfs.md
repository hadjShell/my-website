---
title: Binary Tree BFS Problems
author: David Zhang aka Hadjshell
order: 3
isOriginal: true
footer: false
editLink: false
---

::: tip Framework

- ```java
  void BFS(TreeNode root) {
      if (root == null)
          return;

      Deque<TreeNode> q = new ArrayDeque<>();
    	int depth = 1;

      q.offer(root);

      while (!q.isEmpty()) {
          int size = q.size();

          for (int i = 0; i < size; i++) {
              TreeNode cur = q.poll();
              System.out.println("depth = " + depth + ", val = " + cur.val);
              if (cur.left != null)
                  q.offer(cur.left);
              if (cur.right != null)
                  q.offer(cur.right);
          }

          depth++;
      }
  }
  ```

:::

### Q101. [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

- **`ArrayDeque` doesn't accpet null element**

- ```java
  class Solution {
      public boolean isSymmetric(TreeNode root) {
          Deque<TreeNode> queue = new LinkedList<>();
          // int depth = 1;

          queue.offer(root);
          while (!queue.isEmpty()) {
              int size = queue.size();
              int[] level = new int[size];

              for (int i = 0; i < size; i++) {
                  TreeNode n = queue.poll();

                  if (n == null)
                      level[i] = Integer.MAX_VALUE;
                  else {
                      level[i] = n.val;
                      queue.offer(n.left);
                      queue.offer(n.right);
                  }
              }

              for (int i = 0; i < size / 2; i++) {
                  if (level[i] != level[size - 1 - i])
                      return false;
              }
          }

          return true;
      }
  }
  ```

### Q102. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

- ```java
  class Solution {
      public List<List<Integer>> levelOrder(TreeNode root) {
          List<List<Integer>> result = new ArrayList<>();

          if (root == null)
              return result;

          Deque<TreeNode> queue = new ArrayDeque<>();
          // int depth = 1;

          queue.offer(root);
          while (!queue.isEmpty()) {
              List<Integer> l = new ArrayList<>();
              int size = queue.size();

              for (int i = 0; i < size; i++) {
                  TreeNode n = queue.poll();
                  l.add(n.val);
                  if (n.left != null)     queue.offer(n.left);
                  if (n.right != null)    queue.offer(n.right);
              }

              result.add(l);

              // depth++;
          }

          return result;
      }
  }
  ```

### Q103. [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

- ```java
  class Solution {
      public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
          List<List<Integer>> result = new ArrayList<>();
          Deque<TreeNode> queue = new ArrayDeque<>();
          boolean toRight = false;

          if (root == null)
              return result;

          queue.offer(root);
          while (!queue.isEmpty()) {
              int size = queue.size();
              List<Integer> level = new ArrayList<>();

              for (int i = 0; i < size; i++) {
                  TreeNode n = queue.poll();

                  if (n.left != null)     queue.offer(n.left);
                  if (n.right != null)    queue.offer(n.right);

                  level.add(n.val);
              }

              if (toRight)
                  Collections.reverse(level);

              toRight = !toRight;
              result.add(level);
          }

          return result;
      }
  }
  ```

### Q111. [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

- ```java
  class Solution {
      public int minDepth(TreeNode root) {
          if (root == null)
              return 0;
          Deque<TreeNode> q = new ArrayDeque<>();
          int depth = 1;
          q.offer(root);
          while (!q.isEmpty()) {
              int size = q.size();
              for (int i = 0; i < size; i++) {
                  TreeNode n = q.poll();
                  if (n.left == null && n.right == null)
                      return depth;
                  if (n.left != null)
                      q.offer(n.left);
                  if (n.right != null)
                      q.offer(n.right);
              }
              depth++;
          }
          return depth;
      }
  }
  ```

### Q199. [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

- ```java
  class Solution {
      public List<Integer> rightSideView(TreeNode root) {
          List<Integer> result = new ArrayList<>();
          Deque<TreeNode> queue = new ArrayDeque<>();

          if (root == null)
              return result;

          queue.offer(root);
          while(!queue.isEmpty()) {
              int size = queue.size();
              TreeNode rightMost = null;

              for (int i = 0; i < size; i++) {
                  rightMost = queue.poll();

                  if (rightMost.left != null)     queue.offer(rightMost.left);
                  if (rightMost.right != null)    queue.offer(rightMost.right);
              }

              result.add(rightMost.val);
          }

          return result;
      }
  }
  ```

- Or DFS preorder approach

- ```java
  class Solution {
      int maxlevel = 0;
      public List<Integer> rightSideView(TreeNode root) {
          List<Integer> list  = new ArrayList<>();
          right(root,1,list);
          return list ;
      }
      void right(TreeNode root,int level,List<Integer> list){
          if(root==null){
              return ;
          }
          if(maxlevel<level){
              list.add(root.val);
              maxlevel=level;
          }
          right(root.right,level+1,list);
          right(root.left,level+1,list);

      }
  }
  ```

### Q637. [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)

- ```java
  import java.math.BigDecimal;

  class Solution {
      public List<Double> averageOfLevels(TreeNode root) {
          Deque<TreeNode> queue = new ArrayDeque<>();
          List<Double> result = new ArrayList<>();

          queue.offer(root);
          while (!queue.isEmpty()) {
              int size = queue.size();
              BigDecimal sum = new BigDecimal("0");

              for (int i = 0; i < size; i++) {
                  TreeNode node = queue.poll();
                  sum = sum.add(BigDecimal.valueOf(node.val));

                  if (node.left != null)  queue.offer(node.left);
                  if (node.right != null) queue.offer(node.right);
              }

              result.add(sum.divide(BigDecimal.valueOf(size), 5, BigDecimal.ROUND_FLOOR).doubleValue());
          }

          return result;
      }
  }
  ```

### Q1161. [Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

- ```java
  class Solution {
      public int maxLevelSum(TreeNode root) {
          Deque<TreeNode> q = new ArrayDeque<>();
          int depth = 1, maxSum = Integer.MIN_VALUE, res = 1;
          q.offer(root);
          while (!q.isEmpty()) {
              int size = q.size();
              int sum = 0;
              for (int i = 0; i < size; i++) {
                  TreeNode n = q.poll();
                  sum += n.val;
                  if (n.left != null)
                      q.offer(n.left);
                  if (n.right != null)
                      q.offer(n.right);
              }
              if (maxSum < sum) {
                  maxSum = sum;
                  res = depth;
              }
              depth++;
          }
          return res;
      }
  }
  ```
