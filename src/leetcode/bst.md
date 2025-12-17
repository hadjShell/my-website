---
title: Binary Search Tree
author: David Zhang aka Hadjshell
order: 12
isOriginal: true
footer: false
editLink: false
---

## 🧠 Mindset

- First of all, **BST is a binary tree**

- **`left.val < root.val < right.val`**

- For each node in a BST, **its left subtree and right subtree are BST**

## 🛠️ Tricks

- **Inorder traversal returns an ascending list**

- 利用 BST **左小右大**的特性提升算法效率 -> $O(logN)$

## :bulb:Questions

### Q95. [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)

- ```java
  class Solution {
      public List<TreeNode> generateTrees(int n) {
          return get(1, n);
      }

      private List<TreeNode> get(int left, int right) {
          List<TreeNode> l = new ArrayList<>();
          if (left > right) {
              l.add(null);
              return l;
          }
          for (int i = left; i <= right; i++) {
              List<TreeNode> leftList = get(left, i - 1);
              List<TreeNode> rightList = get(i + 1, right);
              for (TreeNode leftNode : leftList) {
                  for (TreeNode rightNode : rightList) {
                      TreeNode root = new TreeNode(i);
                      root.left = leftNode;
                      root.right = rightNode;
                      l.add(root);
                  }
              }
          }
          return l;
      }
  }
  ```

### :star: Q96. [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)

- ```java
  class Solution {
      private Map<Integer, Integer> result = new HashMap<>();

      public int numTrees(int n) {
          if (result.containsKey(n))
              return result.get(n);

          if (n == 0 || n == 1)
              return 1;

          int sum = 0;
          for (int i = 1; i <= n; i++) {
              sum += numTrees(i - 1) * numTrees(n - i);
          }

          result.put(n, sum);
          return sum;
      }
  }
  ```

### :star:Q98. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

- 遍历

  ```java
  class Solution {
      private boolean isBST = true;
      private Integer prev = null;

      public boolean isValidBST(TreeNode root) {
          traverse(root);

          return isBST;
      }

      private void traverse(TreeNode root) {
          if (root == null || !isBST)
              return;

          traverse(root.left);
          if (prev == null || root.val > prev)
              prev = root.val;
          else
              isBST = false;
          traverse(root.right);
      }
  }
  ```

- 分解

  ```java
  class Solution {
      public boolean isValidBST(TreeNode root) {
          return _isValidBST(root, null, null);
      }

      private boolean _isValidBST(TreeNode root, TreeNode min, TreeNode max) {
          // min, max is the left and right border nearest to the current node
          if (root == null)
              return true;
          if (min != null && root.val <= min.val)
              return false;
          if (max != null && root.val >= max.val)
              return false;

          return _isValidBST(root.left, min, root) &&
                  _isValidBST(root.right, root, max);
      }
  }
  ```

### :star:Q173. [Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)

- ```java
  class BSTIterator {
      private Deque<TreeNode> stack;

      public BSTIterator(TreeNode root) {
          stack = new ArrayDeque<>();
          while (root != null) {
              stack.push(root);
              root = root.left;
          }
      }

      // Time: amortized O(1)   Space: O(logN)
      public int next() {
          TreeNode n = stack.pop();
          int next = n.val;

          n = n.right;
          while (n != null) {
              stack.push(n);
              n = n.left;
          }

          return next;
      }

      public boolean hasNext() {
          return !stack.isEmpty();
      }

  }
  /**
   * Your BSTIterator object will be instantiated and called as such:
   * BSTIterator obj = new BSTIterator(root);
   * int param_1 = obj.next();
   * boolean param_2 = obj.hasNext();
   */
  ```

### Q230. [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

- ```java
  class Solution {
      private int count;
      private int result;

      public int kthSmallest(TreeNode root, int k) {
          count = k;
          traverse(root);

          return result;
      }

      private void traverse(TreeNode root) {
          if (root == null || count == 0)
              return;

          traverse(root.left);
          if (count == 1)     result = root.val;
          count--;
          traverse(root.right);
      }
  }
  ```

- Follow up solution

  - Every `TreeNode` maintain another information `size` which store the size of current subtree whose root node is current node

### :star:Q450. [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

- ```java
  class Solution {
      public TreeNode deleteNode(TreeNode root, int key) {
          if (root == null)
              return null;

          if (root.val > key)
              root.left = deleteNode(root.left, key);
          else if (root.val < key)
              root.right = deleteNode(root.right, key);
          else {
              if (isLeaf(root))
                  root = null;
              else if (root.left == null)
                  root = root.right;
              else if (root.right == null)
                  root = root.left;
              else {
                  TreeNode leftMax = getMax(root.left);
                  leftMax.left = deleteNode(root.left, leftMax.val);
                  leftMax.right = root.right;

                  root = leftMax;
              }
          }

          return root;
      }

      private TreeNode getMax(TreeNode root) {
          while (root.right != null)
              root = root.right;

          return root;
      }

      private boolean isLeaf(TreeNode root) {
          return root.left == null && root.right == null;
      }
  }
  ```

### Q530. [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

- ```java
  class Solution {
      private int prev = -100000;
      private int minDiff = Integer.MAX_VALUE;
      public int getMinimumDifference(TreeNode root) {
          traverse(root);

          return minDiff;
      }

      private void traverse(TreeNode root) {
          if (root == null)
              return;

          traverse(root.left);
          minDiff = Math.min(minDiff, root.val - prev);
          prev = root.val;
          traverse(root.right);
      }
  }
  ```

### Q538. [Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)

- ```java
  class Solution {
      private int sum = 0;

      public TreeNode convertBST(TreeNode root) {
          traverse(root);

          return root;
      }

      public void traverse(TreeNode root) {
          if (root == null)
              return;

          traverse(root.right);
          sum += root.val;
          root.val = sum;
          traverse(root.left);
      }
  }
  ```

### Q700. [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

- ```java
  class Solution {
      public TreeNode searchBST(TreeNode root, int val) {
          if (root == null)
              return null;
          if (root.val == val)
              return root;
          else if (root.val < val)
              return searchBST(root.right, val);
          else
              return searchBST(root.left, val);
      }
  }
  ```

### Q701. [Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

- ```java
  class Solution {
      public TreeNode insertIntoBST(TreeNode root, int val) {
          if (root == null)
              return new TreeNode(val);

          if (val > root.val)
              root.right = insertIntoBST(root.right, val);
          else
              root.left = insertIntoBST(root.left, val);

          return root;
      }
  }
  ```
