---
title: Binary Tree
author: David Zhang aka Hadjshell
order: 11
isOriginal: true
footer: false
editLink: false
---

## 🧠​ Mindset

- **遍历**
  - 递归：DFS
  - 层序：BFS
- **分解子问题（子树）**
  - 递归 DFS
- **==只需要思考一个节点上需要做什么，其他交给递归==**
- **递归算法的时间复杂度 = 递归树的节点个数 x 每个节点的时间复杂度**
- **递归算法的空间复杂度 = 递归树的高度 + 算法申请的存储空间**

## 🛠️ Tricks

- **Morris traversal** for inorder

- **栈模拟递归**

  - ```java
    class Solution {
        private Stack<TreeNode> stk = new Stack<>();

        public List<Integer> postorderTraversal(TreeNode root) {
            // 记录后序遍历的结果
            List<Integer> postorder = new ArrayList<>();
            TreeNode visited = new TreeNode(-1);

            pushLeftBranch(root);
            while (!stk.isEmpty()) {
                TreeNode p = stk.peek();

                if ((p.left == null || p.left == visited)
                && p.right != visited) {
                    pushLeftBranch(p.right);
                }

                if (p.right == null || p.right == visited) {
                    // 后序遍历代码位置
                    postorder.add(p.val);
                    visited = stk.pop();
                }
            }

            return postorder;
        }

        private void pushLeftBranch(TreeNode p) {
            while (p != null) {
                stk.push(p);
                p = p.left;
            }
        }
    }
    ```

## :bulb:DFS

- Binary tree is all about making decision on **what logic needs to be executed and when to execute that logic** (preorder, inorder, postorder)

### :bulb:Pre-order

#### Q112. [Path Sum](https://leetcode.com/problems/path-sum/)

- ```java
  class Solution {
      private int count = 0;

      public boolean hasPathSum(TreeNode root, int targetSum) {
          traverse(root, 0, targetSum);

          return count > 0;
      }

      private void traverse(TreeNode root, int sum, int targetSum) {
          if (root == null)
              return;

          sum += root.val;
          if (sum == targetSum && isLeaf(root))
              count++;

          traverse(root.left, sum, targetSum);
          traverse(root.right, sum, targetSum);
      }

      private boolean isLeaf(TreeNode root) {
          return root.left == null && root.right == null;
      }
  }
  ```

#### Q116. [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

- ```java
  class Solution {
      public Node connect(Node root) {
          traverse(root, null, false);

          return root;
      }

      public void traverse(Node root, Node father, boolean isLeft) {
          if (root == null)
              return;

          if (father == null)
              root.next = null;
          else {
              if (isLeft)
                  root.next = father.right;
              else {
                  if (father.next != null)
                      root.next = father.next.left;
                  else
                      root.next = null;
              }
          }

          traverse(root.left, root, true);
          traverse(root.right, root, false);
      }
  }
  ```

- **二叉树抽象出三叉树**

  ```java
  class Solution {
      // 主函数
      public Node connect(Node root) {
          if (root == null) return null;
          // 遍历「三叉树」，连接相邻节点
          traverse(root.left, root.right);
          return root;
      }

      // 三叉树遍历框架
      void traverse(Node node1, Node node2) {
          if (node1 == null || node2 == null) {
              return;
          }
          // *** 前序位置 ***
          // 将传入的两个节点穿起来
          node1.next = node2;

          // 连接相同父节点的两个子节点
          traverse(node1.left, node1.right);
          traverse(node2.left, node2.right);
          // 连接跨越父节点的两个子节点
          traverse(node1.right, node2.left);
      }
  }
  ```

#### :star:Q117. [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/)

- **Solve right subtree first**

- ```java
  class Solution {
      public Node connect(Node root) {
          traverse(root, null, false);

          return root;
      }

      public void traverse(Node root, Node father, boolean isLeft) {
          if (root == null)
              return;

          if (father == null)
              root.next = null;
          else {
              if (isLeft && father.right != null) {
                  root.next = father.right;
              }
              else {
                  Node next = father.next;
                  while (next != null) {
                      if (next.left == null && next.right == null)
                          next = next.next;
                      else
                          break;
                  }

                  if (next != null) {
                      if (next.left != null)
                          root.next = next.left;
                      else
                          root.next = next.right;
                  }
                  else
                      root.next = null;
              }
          }

        	// solve right subtree first
          traverse(root.right, root, false);
          traverse(root.left, root, true);
      }
  }
  ```

#### Q144. [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

- ```java
  class Solution {
      public List<Integer> preorderTraversal(TreeNode root) {
          List<Integer> result = new ArrayList<>();

          traverse(root, result);

          return result;
      }

      private void traverse(TreeNode root, List<Integer> result) {
          if (root == null)
              return;

          result.add(root.val);
          traverse(root.left, result);
          traverse(root.right, result);
      }
  }
  ```

#### Q872. [Leaf-Similar Trees](https://leetcode.com/problems/leaf-similar-trees/)

- ```java
  class Solution {
      public boolean leafSimilar(TreeNode root1, TreeNode root2) {
          List<TreeNode> l1 = new ArrayList<>();
          List<TreeNode> l2 = new ArrayList<>();
          leaves(root1, l1);
          leaves(root2, l2);
          int s1 = l1.size(), s2 = l2.size();
          if (s1 != s2)
              return false;
          for (int i = 0; i < s1; i++) {
              if (l1.get(i).val != l2.get(i).val)
                  return false;
          }
          return true;
      }

      private void leaves(TreeNode root, List<TreeNode> l) {
          if (root == null)
              return;
          if (root.left == null && root.right == null)
              l.add(root);
          leaves(root.left, l);
          leaves(root.right, l);
      }
  }
  ```

#### :star:Q1372. [Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)

- ```java
  class Solution {
      private int longest = 0;

      public int longestZigZag(TreeNode root) {
          traverse(root, true, -1);

          return longest;
      }

      private void traverse(TreeNode root, boolean fromLeft, int length) {
          if (root == null)
              return;

          longest = Math.max(length + 1, longest);
          if (fromLeft) {
              traverse(root.left, true, 0);
              traverse(root.right, false, length + 1);
          }
          else {
              traverse(root.left, true, length + 1);
              traverse(root.right, false, 0);
          }
      }
  }
  ```

#### Q1448. [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)

- ```java
  class Solution {
      private int num = 0;

      public int goodNodes(TreeNode root) {
          _goodNodes(root, null);
          return num;
      }

      public void _goodNodes(TreeNode n, TreeNode max) {
          if (n == null)
              return;
          if (max == null || n.val >= max.val) {
              num++;
              max = n;
          }
          _goodNodes(n.left, max);
          _goodNodes(n.right, max);
      }
  }
  ```

#​###​ :star:Q222. [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)

- A complete tree consist of a full subtree and another complete subtree
- `O(LogN * logN)`

- ```java
  class Solution {
      public int countNodes(TreeNode root) {
          if (root == null)
              return 0;

          TreeNode left = root.left, right = root.right;
          int hl = 0, hr = 0;
          while (left != null) {
              left = left.left;
              hl++;
          }
          while (right != null) {
              right = right.right;
              hr++;
          }
          if (hl == hr) {
              return (int) Math.pow(2, hl + 1) - 1;
          }
          else {
              return 1 + countNodes(root.left) + countNodes(root.right);
          }
      }
  }
  ```

### :bulb:In-order

#### Q94. [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

- ```java
  class Solution {
      public List<Integer> inorderTraversal(TreeNode root) {
          List<Integer> result = new ArrayList<>();

          traverse(root, result);

          return result;
      }

      private void traverse(TreeNode root, List<Integer> result) {
          if (root == null)
              return;

          traverse(root.left, result);
          result.add(root.val);
          traverse(root.right, result);
      }
  }
  ```

### :bulb:Post-order

#### Q124. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

- ```java
  class Solution {
      private int max = Integer.MIN_VALUE;

      public int maxPathSum(TreeNode root) {
          traverse(root);

          return max;
      }

      private int traverse(TreeNode root) {
          if (root == null)
              return -1;

          int left = Math.max(traverse(root.left), 0);
          int right = Math.max(traverse(root.right), 0);

          max = Math.max(root.val + left + right, max);

          return Math.max(root.val + left, root.val + right);
      }
  }
  ```

#### Q145. [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

- ```java
  class Solution {
      public List<Integer> postorderTraversal(TreeNode root) {
          List<Integer> result = new ArrayList<>();

          traverse(root, result);

          return result;
      }

      private void traverse(TreeNode root, List<Integer> result) {
          if (root == null)
              return;

          traverse(root.left, result);
          traverse(root.right, result);
          result.add(root.val);
      }
  }
  ```

#### :star:Q236. [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

- **遍历**

  ```java
  class Solution {
      private TreeNode lca;

      public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
          traverse(root, p, q);

          return lca;
      }

      private boolean[] traverse(TreeNode root, TreeNode p, TreeNode q) {
          boolean[] hasPQ = new boolean[2];

          if (root == null)
              return hasPQ;

          boolean[] left = traverse(root.left, p, q);
          boolean[] right = traverse(root.right, p, q);

          hasPQ[0] = left[0] || right[0] || root == p;
          hasPQ[1] = left[1] || right[1] || root == q;
          if (hasPQ[0] && hasPQ[1] && lca == null)
              lca = root;

          return hasPQ;
      }
  }
  ```

- **分解**

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

#### Q543. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

- ```java
  class Solution {
      private int diameter = 0;

      public int diameterOfBinaryTree(TreeNode root) {
          maxDepth(root);
          return diameter;
      }

      private int maxDepth(TreeNode root) {
          if (root == null)
              return 0;
          int left = maxDepth(root.left), right = maxDepth(root.right);
          diameter = Math.max(diameter, left + right);
          return Math.max(left, right) + 1;
      }
  }
  ```

#### Q652. [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)

- ```java
  class Solution {
      List<TreeNode> result = new ArrayList<>();
      Map<String, Integer> subTree = new HashMap<>();

      public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
          traverse(root);
          return result;
      }

      private StringBuilder traverse(TreeNode root) {
          StringBuilder sb = new StringBuilder();

          if (root == null) {
              sb.append("n");
          }
          else {
              StringBuilder left = traverse(root.left);
              StringBuilder right = traverse(root.right);

              sb.append(left).append("-")
              .append(right).append("-")
              .append(root.val);

              String s = sb.toString();
              int freq = subTree.getOrDefault(s, 0);
              if (freq == 1)
                  result.add(root);
              subTree.put(s, freq + 1);
          }

          return sb;
      }
  }
  ```

### :bulb:Mix of Orders

#### :heart:Q104. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

- 经典例题

- **遍历思想**

  ```java
  class Solution {
      int depth = 0;
      int max = 0;

      public int maxDepth(TreeNode root) {
          traverse(root);
          return max;
      }

      private void traverse(TreeNode root) {
          if (root == null)
              return;

          depth++;
          max = Math.max(depth, max);
          traverse(root.left);
          traverse(root.right);
          depth--;
      }
  }
  ```

- **分解思想**

  ```java
  class Solution {
      public int maxDepth(TreeNode root) {
          return root == null ? 0 :
              1 + Math.max(maxDepth(root.left), maxDepth(root.right));
      }
  }
  ```

#### :star:Q437. [Path Sum III](https://leetcode.com/problems/path-sum-iii/)

- **DFS + Prefix sum**

- ```java
  class Solution {
      private int count = 0;

      public int pathSum(TreeNode root, int targetSum) {
          Map<Long, Integer> prefixSum = new HashMap<>();
          prefixSum.put(0l, 1);

          traverse(root, prefixSum, 0l, targetSum);

          return count;
      }

      private void traverse(TreeNode root, Map<Long, Integer> prefixSum,
                              long sum, int targetSum) {
          if (root == null)
              return;

          sum = sum + root.val;
          count += countValidPath(prefixSum, sum, targetSum);
          prefixSum.put(sum, prefixSum.getOrDefault(sum, 0) + 1);

          traverse(root.left, prefixSum, sum, targetSum);
          traverse(root.right, prefixSum, sum, targetSum);

          prefixSum.put(sum, prefixSum.get(sum) - 1);
      }

      private int countValidPath(Map<Long, Integer> prefixSum,
                                  long sum, int targetSum) {
          return prefixSum.getOrDefault(sum - targetSum, 0);
      }
  }
  ```

#### Q1644. [Lowest Common Ancestor of a Binary Tree ii](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)

- ```java
  class Solution {
    	private int count = 0;

    	public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        	TreeNode lca = dfs(root, p, q);
        	return count == 2 ? lca : null;
      }

    	private TreeNode dfs(TreeNode root, TreeNode p, TreeNode q) {
          if (root == null)
              return null;

          if (root == p || root == q) {
            	count++;
            	return root;
          }
          TreeNode left = dfs(root.left, p, q);
          TreeNode right = dfs(root.right, p, q);
          if (left != null && right != null)
              return root;
          return left == null ? right : left;
      }
  }
  ```

#### Q1650. [Lowest Common Ancestor of a Binary Tree iii](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)

- Same question as Q160. Intersection of two linked list

- ```java
  class Solution {
      public TreeNode lowestCommonAncestor(Node p, Node q) {
          Node a = p, b = q;
        	while (a != b) {
            	a = a == null ? q : a.parent;
            	b = b == null ? p : b.parent
          }
        	return a;
      }
  }
  ```

#### Q1676. [Lowest Common Ancestor of a Binary Tree iv](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)

- ```java
  class Solution {
    	public TreeNode lowestCommonAncestor(TreeNode root, TreeNode[] nodes) {
        	Set<TreeNode> s = new HashSet<>(Arrays.asList(nodes));
        	return dfs(root, s);
      }

      public TreeNode dfs(TreeNode root, Set<TreeNode> nodes) {
          if (root == null)
              return null;

          if (nodes.contains(root))
              return root;
          TreeNode left = dfs(root.left, nodes);
          TreeNode right = dfs(root.right, nodes);
          if (left != null && right != null)
              return root;
          return left == null ? right : left;
      }
  }
  ```

#### :star:Q1373. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)

- ```java
  class Solution {
      private int sum = 0;

      public int maxSumBST(TreeNode root) {
          dfs(root);
          return sum;
      }

      private Node dfs(TreeNode root) {
          if (root == null)
              return new Node(true, null, null, 0);
          Node leftNode = dfs(root.left);
          Node rightNode = dfs(root.right);
          Node res = null;
          if (leftNode.isBST && rightNode.isBST) {
              TreeNode leftMax = leftNode.max, rightMin = rightNode.min;
              if (leftMax == null && rightMin == null) {
                  res = new Node(true, root, root, root.val);
              }
              else if (leftMax == null) {
                  if (root.val >= rightMin.val)
                      res = new Node(false);
                  else
                      res = new Node(true, root, rightNode.max,
                                      root.val + rightNode.sum);
              }
              else if (rightMin == null) {
                  if (root.val <= leftMax.val)
                      res = new Node(false);
                  else
                      res = new Node(true, leftNode.min, root,
                                      root.val + leftNode.sum);
              }
              else {
                  if (root.val <= leftMax.val || root.val >= rightMin.val)
                      res = new Node(false);
                  else
                      res = new Node(true, leftNode.min, rightNode.max,
                                      root.val + leftNode.sum + rightNode.sum);
              }
          }
          else
              res = new Node(false);

          if (res.isBST) {
              sum = Math.max(sum, res.sum);
          }
          return res;
      }

      private class Node {
          boolean isBST;
          TreeNode min;
          TreeNode max;
          int sum;

          public Node() {}
          public Node(boolean isBST) {
              this.isBST = isBST;
          }
          public Node(boolean isBST, TreeNode min, TreeNode max, int sum) {
              this.isBST = isBST;
              this.max = max;
              this.min = min;
              this.sum = sum;
          }
      }
  }
  ```

#### :star:Q1367. [Linked List in Binary Tree](https://leetcode.com/problems/linked-list-in-binary-tree/)

- ```java
  class Solution {
      public boolean isSubPath(ListNode head, TreeNode root) {
          if (root == null)
              return false;
          if (dfs(head, root) == true)
              return true;
          else
              return isSubPath(head, root.left) || isSubPath(head, root.right);
      }

      private boolean dfs(ListNode head, TreeNode root) {
          if (head == null)
              return true;
          else if (root == null)
              return false;
          else
              return head.val == root.val &&
                      (dfs(head.next, root.left) || dfs(head.next, root.right));
      }
  }
  ```

### :bulb:Deserialisation

#### :star:Q105. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

- ```java
  class Solution {
      public TreeNode buildTree(int[] preorder, int[] inorder) {
          Map<Integer, Integer> inorderVal2IndMap = getInorderVal2IndMap(inorder);
          int length = preorder.length;

          return builder(preorder, 0, length - 1, inorderVal2IndMap, 0, length - 1);
      }

      // []
      private TreeNode builder(int[] preorder, int preL, int preR,
              Map<Integer, Integer> inorder, int inL, int inR) {
          if (preR < preL)
              return null;

          int inRoot = inorder.get(preorder[preL]);
          int leftSize = inRoot - inL;

          TreeNode left = builder(preorder, preL + 1, preL + leftSize,
                                  inorder, inL, inRoot - 1);
          TreeNode right = builder(preorder, preL + leftSize + 1, preR,
                                  inorder, inRoot + 1, inR);

          return new TreeNode(preorder[preL], left, right);
      }

      private Map<Integer, Integer> getInorderVal2IndMap(int[] inorder) {
          Map<Integer, Integer> val2IndMap = new HashMap<>();

          for (int i = 0; i < inorder.length; i++) {
              val2IndMap.put(inorder[i], i);
          }

          return val2IndMap;
      }
  }
  ```

#### Q106. [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

- ```java
  class Solution {
      public TreeNode buildTree(int[] inorder, int[] postorder) {
          Map<Integer, Integer> inorderVal2Ind = getInorderVal2IndMap(inorder);
          int length = inorder.length;

          return build(postorder, 0, length - 1,
                      inorderVal2Ind, 0, length - 1);
      }

      private TreeNode build(int[] postorder, int postL, int postR,
                              Map<Integer, Integer> inorder, int inL, int inR) {
          if (postR < postL)
              return null;

          int inRoot = inorder.get(postorder[postR]);
          int leftSize = inRoot - inL;

          TreeNode left = build(postorder, postL, postL + leftSize - 1,
                                  inorder, inL, inRoot - 1);
          TreeNode right = build(postorder, postL + leftSize, postR - 1,
                                  inorder, inRoot + 1, inR);

          return new TreeNode(postorder[postR], left, right);
      }

      private Map<Integer, Integer> getInorderVal2IndMap(int[] inorder) {
          Map<Integer, Integer> val2Ind = new HashMap<>();

          for (int i = 0; i < inorder.length; i++) {
              val2Ind.put(inorder[i], i);
          }

          return val2Ind;
      }
  }
  ```

#### Q654. [Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)

- ```java
  class Solution {
      public TreeNode constructMaximumBinaryTree(int[] nums) {
          return _construct(nums, 0, nums.length);
      }

      private TreeNode _construct(int[] nums, int left, int right) {
          if (left >= right)
              return null;
          int maxIndex = findMaxIndex(nums, left, right);
          TreeNode leftNode = _construct(nums, left, maxIndex);
          TreeNode rightNode = _construct(nums, maxIndex + 1, right);
          TreeNode parent = new TreeNode(nums[maxIndex], leftNode, rightNode);
          return parent;
      }

      private int findMaxIndex(int[] nums, int left, int right) {
          int max = nums[left], index = left;
          for (int i = left; i < right; i++) {
              if (nums[i] > max) {
                  max = nums[i];
                  index = i;
              }
          }
          return index;
      }
  }
  ```

#### Q889. [Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

- Cannot ensure there is only one answer

- ```java
  class Solution {
      public TreeNode constructFromPrePost(int[] preorder, int[] postorder) {
          Map<Integer, Integer> postOrder = new HashMap<>();
          int size = postorder.length;
          for (int i = 0; i < size; i++)
              postOrder.put(postorder[i], i);

          return _buildTree(preorder, 0, size - 1, postOrder, 0, size - 1);
      }

       private TreeNode _buildTree(int[] preorder, int left, int right, Map<Integer, Integer> postOrder, int _left, int _right) {
          if (left > right)
              return null;
          if (left == right)
              return new TreeNode(preorder[left]);

         // Here we assume the next one is the root node of the left subtree
         // However, left subtree can be null, hence the possibility of multiple answers
         int l = postOrder.get(preorder[left + 1]);
          TreeNode leftNode = _buildTree(preorder, left + 1, left + l - _left + 1,
                                          postOrder, _left, l);
          TreeNode rightNode = _buildTree(preorder, left + l - _left + 2, right,
                                          postOrder, l + 1, _right - 1);
          return new TreeNode(preorder[left], leftNode, rightNode);
      }
  }
  ```

### :bulb:Serialisation

- 如果你的序列化结果中**不包含空指针的信息**，且你只给出**一种**遍历顺序，那么你无法还原出唯一的一棵二叉树。
- 如果你的序列化结果中**不包含空指针的信息**，且你会给出**两种**遍历顺序，分两种情况：
  - 如果你给出的是**前序和中序**，或者**后序和中序**，那么你可以还原出唯一的一棵二叉树。
  - 如果你给出前序和后序，那么你无法还原出唯一的一棵二叉树。
- 如果你的序列化结果中**包含空指针的信息**，且你只给出**一种**遍历顺序，也要分两种情况：
  - 如果你给出的是**前序**或者**后序**，那么你可以还原出唯一的一棵二叉树。
  - 如果你给出的是中序，那么你无法还原出唯一的一棵二叉树。

#### :star:Q297. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

- ```java
  public class Codec {
      // Encodes a tree to a single string.
      public String serialize(TreeNode root) {
          StringBuilder sb = new StringBuilder();
          _serialize(root, sb);
          System.out.println(sb.toString());
          return sb.toString();
      }

      // Decodes your encoded data to tree.
      public TreeNode deserialize(String data) {
          String[] arr = data.split(",");
          Deque<String> preorder = new ArrayDeque<>(Arrays.asList(arr));
          return _deserialize(preorder);
      }

      private void _serialize(TreeNode root, StringBuilder sb) {
          if (root == null) {
              sb.append("#,");
              return;
          }
          sb.append(root.val).append(',');
          _serialize(root.left, sb);
          _serialize(root.right, sb);
      }

      private TreeNode _deserialize(Deque<String> preorder) {
          String s = preorder.removeFirst();
          if (s.equals("#"))
              return null;
          TreeNode root = new TreeNode(Integer.parseInt(s));
          root.left = _deserialize(preorder);
          root.right = _deserialize(preorder);
          return root;
      }
  }
  ```

## :bulb:Divide & Conquer

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

## :bulb:BFS

- Framework

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
