---
title: Binary Tree Divide and Conquer Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### Q100. [Same Tree](https://leetcode.com/problems/same-tree/)

- ```java
  class Solution {
      public boolean isSameTree(TreeNode p, TreeNode q) {
          if (p == null && q == null)
              return true;
          else if (p != null && q!= null)
              return p.val == q.val &&
                      isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
          else
              return false;
      }
  }
  ```

### :heart:Q101. [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

- ```java
  class Solution {
      public boolean isSymmetric(TreeNode root) {
          return isSym(root.left, root.right);
      }

      public boolean isSym(TreeNode left, TreeNode right) {
          if (left == null && right == null)
              return true;
          else if (left != null && right != null) {
              if (left.val != right.val)
                  return false;
              else
                  return isSym(left.left, right.right) &&
                          isSym(right.left, left.right);
          }
          else
              return false;
      }
  }
  ```

### Q114. [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

- ```java
  class Solution {
      public void flatten(TreeNode root) {
          _flatten(root);
      }

      private TreeNode _flatten(TreeNode root) {
          if (root == null)
              return null;

          TreeNode left = root.left, right = root.right;
          TreeNode leftTail = _flatten(left), rightTail = _flatten(right);

          if (leftTail == null && rightTail == null)
              return root;
          else if (leftTail == null) {
              return rightTail;
          }
          else if (rightTail == null) {
              root.left = null;
              root.right = left;
              return leftTail;
          }
          else {
              root.left = null;
              root.right = left;
              leftTail.right = right;
              return rightTail;
          }
      }
  }
  ```

### Q129. [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

- ```java
  class Solution {
      public int sumNumbers(TreeNode root) {
          return sumPath(root, 0);
      }

      public int sumPath(TreeNode root, int sum) {
          if (root == null)
              return 0;

          sum = sum * 10 + root.val;

          if (root.left == null && root.right == null)
              return sum;

          return sumPath(root.left, sum) + sumPath(root.right, sum);
      }
  }
  ```

### Q222. [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)

- https://leetcode.com/problems/count-complete-tree-nodes/solutions/7330148/detailed-recursion-solution-ologn2-compl-dbhx

- ```java
  class Solution {
      // O(logN * logN)
      public int countNodes(TreeNode root) {
          int depth = depth(root);

          return count(root, depth);
      }

      private int count(TreeNode root, int depth) {
          if (root == null)
              return 0;

          boolean isLeftPerfect = isPerfect(root.left, depth - 1);

          if (isLeftPerfect)
              return 1 + nodesInPerfectTree(depth - 1) + count(root.right, depth - 1);
          else
              return 1 + count(root.left, depth - 1) + nodesInPerfectTree(depth - 2);

      }

      private int nodesInPerfectTree(int depth) {
          return (int) Math.pow(2, depth) - 1;
      }

      // O(logN)
      private boolean isPerfect(TreeNode root, int depth) {
          while (root != null) {
              root = root.right;
              depth--;
          }

          return depth == 0;
      }

      // O(logN)
      private int depth(TreeNode root) {
          int count = 0;

          while (root != null) {
              count++;
              root = root.left;
          }

          return count;
      }
  }
  ```

### Q226. [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

- ```java
  class Solution {
      public TreeNode invertTree(TreeNode root) {
          if (root == null)
              return root;

          TreeNode left = root.left,right = root.right;
          root.left = invertTree(right);
          root.right = invertTree(left);

          return root;
      }
  }
  ```

### :star:Q1361. [Validate Binary Tree Nodes](https://leetcode.com/problems/validate-binary-tree-nodes/)

- ```java
  class Solution {
      public boolean validateBinaryTreeNodes(int n, int[] leftChild, int[] rightChild) {
          // only one root node doesn't have in edge, others have only one
          // all nodes connected to root node

          boolean isBinaryTree = true;
          int[] parent = new int[n];
          Arrays.fill(parent, -1);

          for (int p = 0; p < n; p++) {
              if (!isBinaryTree)      break;
              int left = leftChild[p], right = rightChild[p];

              if (left != -1) {
                  if (parent[left] != -1 && parent[left] != p)
                      isBinaryTree = false;
                  else
                      parent[left] = p;
              }

              if (right != -1) {
                  if (parent[right] != -1 && parent[right] != p)
                      isBinaryTree = false;
                  else
                      parent[right] = p;
              }
          }

          int count = 0, root = -1;
          for (int p = 0; p < n; p++) {
              if (parent[p] == -1) {
                  count++;
                  root = p;
              }
          }
          if (count != 1 || treeSize(root, leftChild, rightChild) != n)
              isBinaryTree = false;

          return isBinaryTree;
      }

      private int treeSize(int root, int[] leftChild, int[] rightChild) {
          if (root == -1)
              return 0;

          return treeSize(leftChild[root], leftChild, rightChild) +
                  treeSize(rightChild[root], leftChild, rightChild) +
                  1;
      }
  }
  ```
