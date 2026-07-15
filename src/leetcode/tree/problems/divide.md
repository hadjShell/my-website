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

```java
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null)
            return true;

        return isMirror(root.left, root.right);
    }

    private boolean isMirror(TreeNode left, TreeNode right) {
        if (left == null && right == null)
            return true;
        if (left == null || right == null)
            return false;
        if (left.val != right.val)
            return false;

        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
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

### :star:Q236. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

```java
class Solution {
    TreeNode lca = null;

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        seen(root, p, q);

        return lca;
    }

    private int seen(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || lca != null)   return 0;

        int left = seen(root.left, p, q);
        int right = seen(root.right, p, q);
        int seen = left + right +
                    (root == p ? 1 : 0) +
                    (root == q ? 1 : 0);
        if (lca == null && seen == 2)    lca = root;

        return seen;
    }
}
```

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null)
            return null;

        if (root == p || root == q)
            return root;

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left != null && right != null)
            return root;

        return left == null ? right : left;
    }
}
```

### :heart:Q1361. [Validate Binary Tree Nodes](https://leetcode.com/problems/validate-binary-tree-nodes/)

```java
// rules:
// 1. a node can only have one parent, except for root
// 2. a node can have at most 2 children (no need to check for this question)
// 3. a node's left children and right children must be different
// 4. a node's children cannot be itself
// 5. no circles: exact one node without parent
class Solution {
    public boolean validateBinaryTreeNodes(int n, int[] leftChild, int[] rightChild) {
        boolean isBinaryTree = true;
        int[] parent = new int[n];
        Arrays.fill(parent, -1);

        for (int p = 0; p < n; p++) {
            if (!isBinaryTree)      break;
            int left = leftChild[p], right = rightChild[p];

            if (left == right && left != -1)
                isBinaryTree = false;
            if (root == left || root == right)
                isBinaryTree = false;
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
        // only one root node doesn't have in edge, others have only one
        // all nodes connected to root node
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

### :star:Q1373. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)

```java
class Solution {
    int maxSum = 0;

    public int maxSumBST(TreeNode root) {
        getTree(root);

        return maxSum;
    }

    private Tree getTree(TreeNode root) {
        if (root == null)
            return null;

        Tree left = getTree(root.left), right = getTree(root.right);
        int min = 0, max = 0, sum = 0;
        boolean isBST = false;

        if (left == null && right == null) {
            min = root.val;
            max = root.val;
            sum = root.val;
            isBST = true;
        }
        else if (left != null && right == null) {
            isBST = left.isBST && root.val > left.max;
            if (isBST) {
                min = left.min;
                max = root.val;
                sum = left.sum + root.val;
            }
        }
        else if (left == null && right != null) {
            isBST = right.isBST && root.val < right.min;
            if (isBST) {
                min = root.val;
                max = right.max;
                sum = right.sum + root.val;
            }
        }
        else {
            isBST = (left.isBST && root.val > left.max) && (right.isBST && root.val < right.min);
            if (isBST) {
                min = left.min;
                max = right.max;
                sum = left.sum + right.sum + root.val;
            }
        }

        if (isBST) {
            maxSum = Math.max(sum, maxSum);
            return new Tree(min, max, sum, true);
        }
        else
            return new Tree(false);
    }

    class Tree {
        int min;
        int max;
        int sum;
        boolean isBST;

        public Tree(boolean isBST) {
            this.isBST = isBST;
        }

        public Tree(int min, int max, int sum, boolean isBST) {
            this.min = min;
            this.max = max;
            this.sum = sum;
            this.isBST = isBST;
        }
    }
}
```

### :star:Q1650. [Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)

- ![](/assets/image/leetcode/leetcode1650.png)

- Equivalent to find the intersection of two linked lists.

- Follow-up: come up with a solution with `O(1)` space.
  You can get the depth of both, and then advance one of them so they're the same depth. Once they're the same depth, just compare recursively compare parents until they're equal.

```java
class Solution {
    public Node lowestCommonAncestor(Node p, Node q) {
        Set<Node> pAncestor = new HashSet<>();

        while (p != null) {
            pAncestor.add(p);
            p = p.parent;
        }

        while (q != null) {
            if (pAncestor.contains(q))  break;
            q = q.parent;
        }

        return q;
    }
}
```

### :star:Q1676. [Lowest Common Ancestor of a Binary Tree IV](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)

- ![](/assets/image/leetcode/leetcode1676.png)

```java
class Solution {
    TreeNode lca;

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode[] nodes) {
        Set<TreeNode> n = new HashSet<>(Arrays.asList(nodes));
        seen(root, n);

        return lca;
    }

    private int seen(TreeNode root, Set<TreeNode> nodes) {
        if (root == null || lca != null)            return 0;

        int leftSeen = seen(root.left, nodes);
        int rightSeen = seen(root.right, nodes);
        int seen = leftSeen + rightSeen + (nodes.contains(root) ? 1 : 0);

        if (seen == nodes.size() && lca == null)    lca = root;

        return seen;
    }
}
```
