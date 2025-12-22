---
title: Binary Search Tree Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- A binary tree that **`left.val < root.val < right.val`**

- For each node in a BST, **its left subtree and right subtree are BST**

- Searching, insertion, deletion - `O(log N)` for balanced BST, `O(N)` for unbalanced BST

  - For a perfect binary tree, its level is equal to `log (N + 1)`, which is approximately `log N`

  - ```txt
    Algorithm findBST
    Inputs c: Pointer; key: Integer
    Returns Pointer

    Begin
    if c = NULL then return NULL
    else
    if c.key() = key then return c
    if c.key() > key then
    return findBST(c.leftPTR(), key)
    else
    return findBST(c.rightPTR(), key)
    End

    c - pointer to current node
    c.key() - value at node c
    c.leftPTR() - pointer to left node at c
    ```

- Deletion

  - Node with at most one subtree

    - Simple delete and change the pointer if needed

  - Root node & nodes that have two subtrees

    - Marked as deleted, or

    - **Minimum in right subtree**, or
      - Find next highest node N, i.e., go right then left as far as you can
      - Delete N (having at most one subtree)
      - Replace node deleting by node N
    - **Maximum in left subtree**

## 🛠️ Pattern

- First of all, **BST is a binary tree**

- **`left.val < root.val < right.val`**

- For each node in a BST, **its left subtree and right subtree are BST**

- **Inorder traversal returns an ascending list**

- 利用 BST **左小右大**的特性提升算法效率 -> $O(logN)$
