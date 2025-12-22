---
title: Binary Tree Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- Tree is a data structure where the data is organized in a hierarchical structure. There should be one **root node** (which does not have any parent) and all subsequent nodes are represented as children of the root node and its children

- If a node has at least one child, it is called **internal node** and **nodes with no children** are called **leaf nodes**

- **Perfect binary tree**: every node except leaf nodes has exactly two child nodes, all leaf nodes are at the same level

- **Full binary tree**: every node except leaf nodes has zero or two child nodes

- **Complete binary tree**: a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible

- **Balanced Binary Tree**: The heights of any node’s left and right subtrees differ by at most one

- ![](/assets/image/leetcode/trees.png)

- Implementation

  - **Tree node**

  - **Array** for complete binary tree

  - **Program stack**

  - **Hash table**

- Traversal

  - **DFS**

    - **Three different orders represents three different times when the specific operation is operating on the node**

      - **Pre-order**: operates when the procedure call of current node is just pushed onto the stack
      - **In-order**: operates when the left subtree's operation is executed and the right subtree's operation is about to executed
      - **Post-order**: operates when the the procedure call of current node is about to be popped out from the stack

    - ```java
      void traverseDFS(TreeNode root) {
          if (root == null) {
              return;
          }
          // preorder
          traverse(root.left);
          // inorder
          traverse(root.right);
          // postorder
      }
      			  1
          2    	  3
        4   5   6   7

      // Example: 	[1,2,3,4,5,6,7]
      // preorder: 	[1,2,4,5,3,6,7]
      // inorder:		[4,2,5,1,6,3,7]
      // postorder:	[4,5,2,6,7,3,1]
      ```

  - BFS

    - ```java
      void traverseBFS(TreeNode root) {
          if (root == null)
              return;

          Deque<TreeNode> q = new ArrayDeque<>();
          q.add(root);
          int depth = 1;
          while (!q.isEmpty()) {
              int sz = q.size();
              for (int i = 0; i < sz; i++) {
                  TreeNode cur = q.remove();
                  System.out.println("depth = " + depth + ", val = " + cur.val);
                  if (cur.left != null)
                      q.add(cur.left);
                  if (cur.right != null)
                      q.add(cur.right);
              }
              depth++;
          }
      }
      ```

## :bulb:​ Mindset

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
