---
title: Binary Tree DFS Problems
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

::: tip

Binary tree is all about making decision on **what logic needs to be executed and when to execute that logic** (preorder, inorder, postorder)

:::

## --- :bulb:Pre-order ---

### Q112. [Path Sum](https://leetcode.com/problems/path-sum/)

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

### Q116. [Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

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

### :star:Q117. [Populating Next Right Pointers in Each Node II](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/)

- **Solve right subtree first**

```java
class Solution {
    public Node connect(Node root) {
        dfs(root, null);

        return root;
    }

    private void dfs(Node root, Node parent) {
        if (root == null)   return;

        Node next = getNextNode(root, parent);
        root.next = next;

        dfs(root.right, root);
        dfs(root.left, root);
    }

    private Node getNextNode(Node root, Node parent) {
        if (parent == null)                     return null;

        boolean isLeft = root == parent.left;

        if (isLeft && parent.right != null)     return parent.right;
        else {
            Node pNext = parent.next;
            while (pNext != null) {
                if (pNext.left != null)         return pNext.left;
                else if (pNext.right != null)   return pNext.right;
                else                            pNext = pNext.next;
            }
        }

        return null;
    }
}
```

### Q144. [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

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

### Q872. [Leaf-Similar Trees](https://leetcode.com/problems/leaf-similar-trees/)

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

### :star:Q1372. [Longest ZigZag Path in a Binary Tree](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)

- Traversal

```java
class Solution {
    int longest = 0;

    public int longestZigZag(TreeNode root) {
        dfs(root, 0, false);

        return longest;
    }

    private void dfs(TreeNode root, int count, boolean fromLeft) {
        if (root == null) {
            longest = Math.max(longest, count - 1);
            return;
        }

        if (fromLeft) {
            dfs(root.left, 1, true);
            dfs(root.right, count + 1, false);
        }
        else {
            dfs(root.left, count + 1, true);
            dfs(root.right, 1, false);
        }
    }
}
```

- Divide and conquer

```java
class Solution {
    private int longest = 0;

    public int longestZigZag(TreeNode root) {
        longestZigZagFrom(root);

        return longest;
    }

    private int[] longestZigZagFrom(TreeNode root) {
        int[] len = {-1, -1};     // [left, right]

        if (root == null)       return len;

        int[] left = longestZigZagFrom(root.left);
        int[] right = longestZigZagFrom(root.right);
        len[0] = left[1] + 1;
        len[1] = right[0] + 1;
        longest = Math.max(longest, len[0]);
        longest = Math.max(longest, len[1]);

        return len;
    }
}
```

### Q1448. [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/)

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

#​##​ :star:Q222. [Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)

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

## :bulb:In-order

### Q94. [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

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

## :bulb:Post-order

### Q124. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

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

### Q145. [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

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

### Q543. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

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

### Q652. [Find Duplicate Subtrees](https://leetcode.com/problems/find-duplicate-subtrees/)

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

## :bulb:Mix of Orders

### :heart:Q104. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

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

### :star:Q437. [Path Sum III](https://leetcode.com/problems/path-sum-iii/)

- **DFS + Prefix sum**

```java
class Solution {
    int count = 0;
    public int pathSum(TreeNode root, int targetSum) {
        Map<Long, Integer> preSum2Count = new HashMap<>();
        preSum2Count.put(0l, 1);

        dfs(root, 0, targetSum, preSum2Count);

        return count;
    }

    private void dfs(TreeNode root, long sum, int target, Map<Long, Integer> preSum2Count) {
        if (root == null)       return;

        sum += root.val;
        long complement = sum - target;
        count += preSum2Count.getOrDefault(complement, 0);
        preSum2Count.put(sum, preSum2Count.getOrDefault(sum, 0) + 1);

        dfs(root.left, sum, target, preSum2Count);
        dfs(root.right, sum, target, preSum2Count);

        preSum2Count.computeIfPresent(sum, (k, v) -> v == 1 ? null : v - 1);
    }
}
```

### Q1644. [Lowest Common Ancestor of a Binary Tree ii](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)

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

### Q1650. [Lowest Common Ancestor of a Binary Tree iii](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)

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

### Q1676. [Lowest Common Ancestor of a Binary Tree iv](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)

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

### :star:Q1367. [Linked List in Binary Tree](https://leetcode.com/problems/linked-list-in-binary-tree/)

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

## --- :bulb:Serialisation ---

- 如果你的序列化结果中**不包含空指针的信息**，且你只给出**一种**遍历顺序，那么你无法还原出唯一的一棵二叉树。
- 如果你的序列化结果中**不包含空指针的信息**，且你会给出**两种**遍历顺序，分两种情况：
  - 如果你给出的是**前序和中序**，或者**后序和中序**，那么你可以还原出唯一的一棵二叉树。
  - 如果你给出前序和后序，那么你无法还原出唯一的一棵二叉树。
- 如果你的序列化结果中**包含空指针的信息**，且你只给出**一种**遍历顺序，也要分两种情况：
  - 如果你给出的是**前序**或者**后序**，那么你可以还原出唯一的一棵二叉树。
  - 如果你给出的是中序，那么你无法还原出唯一的一棵二叉树。

### :star:Q297. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

```java
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

## --- :bulb:Deserialisation ---

### :star:Q105. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

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

### Q106. [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

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

### Q654. [Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/)

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

### Q889. [Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

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
