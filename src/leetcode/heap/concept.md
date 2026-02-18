---
title: Heap Concept & Implementation
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## Concept

- A heap is a **tree-based** data structure that satisfies the heap property:
  - In a **max heap**, for any given node C, if P is the parent node of C, then the key (the value) of P is greater than or equal to the key of C.
  - In a **min heap**, the key of P is less than or equal to the key of C.
  - The subtree is also a heap.

- The node at the "top" of the heap (with no parents) is called the root node.

- In a heap, the highest (or lowest) priority element is always stored at the root. However, **a heap is not a sorted structure**; it can be regarded as being partially ordered.

  ::: info

  There is no implied ordering between siblings or cousins and no implied sequence for an **in-order traversal**. The heap relation mentioned above applies only **between nodes and their parents, grandparents**.

  :::

- A heap is a useful data structure when it is necessary to repeatedly **remove the object with the highest (or lowest) priority**, or when insertions need to be interspersed with removals of the root node.

- The heap is also used for **heap sort**.

- A common implementation of a heap is the **binary heap**, in which the tree is a **complete binary tree**.

- Two basic operation of a heap: **sift-up**, **sift-down**.

## Priority Queue

- The heap is one maximally efficient implementation of an abstract data type called a **priority queue**, and in fact, priority queues are often referred to as "heaps", regardless of how they may be implemented.

- API

  ```java
  class PriorityQueue {
    // 在二叉堆堆顶插入一个元素，时间复杂度 O(logN)
    // N 为当前二叉堆中的元素个数
    void offer(int x);

    // 返回堆顶元素，时间复杂度 O(1)
    // 该堆顶元素就是二叉堆中的最大值或最小值，取决于是最大堆还是最小堆
    int peek();

    // 删除堆顶元素，时间复杂度 O(logN)
    int poll();

    // 返回堆中元素的个数，时间复杂度 O(1)
    int size();
  }
  ```

- It's called priority queue because it has similar APIs as queue. But it has nothing to do with the data structure queue but the binary tree.

### Implementation - min heap / `TreeNode`

- `offer` / `sift-up`
  1. First, append the new element to **the rightmost element at the bottom layer of the binary tree**, maintaining the structure of a **complete binary tree**. At this point, the parent node of this element may be larger than it, violating the min-heap property.
  2. To restore the min-heap property, the new element needs to be continuously **sifted up** until **its parent node is smaller than it, or until the root node is reached**. At this point, the entire binary tree satisfies the min-heap property.

- `poll` / `sift-down`
  1. First, remove the top element of the heap. Then, **remove the rightmost element from the bottom layer of the binary tree and move it to the top of the heap**, maintaining the structure of a complete binary tree. At this point, the top element may be larger than its child nodes, violating the min-heap property.
  2. To restore the min-heap property, this new top element needs to be continuously **sifted down** until **it becomes smaller than its child nodes or reaches a leaf node**. At this point, the entire binary tree satisfies the min-heap property.

### Implementation - min heap / array

- The idea is the same as using binary tree. Here we use array to mimic a **complete binary tree**.

  ::: important Why using array to mimic a binary tree?
  1. `TreeNode` stores information of parent node and child nodes, requiring more memory.

  2. To get the rightmost node in the bottom layer of the binary tree, we have to BFS the tree, which has $O(N)$ time complexity. However, the array solution has $O(1)$ time complexity as long as it's a complete binary tree.

  :::

- E.g.,

  ![](/assets/image/leetcode/Heap-as-array.png)

### Code

- This is the simplified version of a priority queue. Based on it, by adding features such as generics, custom comparators, and resizing, a more complete priority queue can be implemented.

  ```java
  public class SimpleMinPQ {
      // 底层使用数组实现二叉堆
      private final int[] heap;

      // 堆中元素的数量
      private int size;

      public SimpleMinPQ(int capacity) {
          heap = new int[capacity];
          size = 0;
      }

      public int size() {
          return size;
      }

      // 父节点的索引
      private int parent(int node) {
          return (node - 1) / 2;
      }

      // 左子节点的索引
      private int left(int node) {
          return node * 2 + 1;
      }

      // 右子节点的索引
      private int right(int node) {
          return node * 2 + 2;
      }

      // 交换数组的两个元素
      private void swap(int i, int j) {
          int temp = heap[i];
          heap[i] = heap[j];
          heap[j] = temp;
      }

      // 查，返回堆顶元素，时间复杂度 O(1)
      public int peek() {
          return heap[0];
      }

      // 增，向堆中插入一个元素，时间复杂度 O(logN)
      public void push(int x) {
          // 把新元素追加到最后
          heap[size] = x;
          // 然后上浮到正确位置
          swim(size);
          size++;
      }

      // 删，删除堆顶元素，时间复杂度 O(logN)
      public int pop() {
          int res = heap[0];
          // 把堆底元素放到堆顶
          heap[0] = heap[size - 1];
          size--;
          // 然后下沉到正确位置
          sink(0);
          return res;
      }

      // 上浮操作，时间复杂度是树高 O(logN)
      private void swim(int node) {
          while (node > 0 && heap[parent(node)] > heap[node]) {
              swap(parent(node), node);
              node = parent(node);
          }
      }

      // 下沉操作，时间复杂度是树高 O(logN)
      private void sink(int node) {
          while (left(node) < size || right(node) < size) {
              // 比较自己和左右子节点，看看谁最小
              int min = node;
              if (left(node) < size && heap[left(node)] < heap[min]) {
                  min = left(node);
              }
              if (right(node) < size && heap[right(node)] < heap[min]) {
                  min = right(node);
              }
              if (min == node) {
                  break;
              }
              // 如果左右子节点中有比自己小的，就交换
              swap(node, min);
              node = min;
          }
      }
  }
  ```

## Heap Sort

- The idea of heap sort is to push the unsorted array into a heap and pop out all the elements.

  ```java
  // 堆排序伪码，对 arr 原地排序
  // 时间复杂度 O(NlogN)，空间复杂度 O(N)
  int[] heapSort(int[] arr) {
      int[] res = new int[arr.length];
      MyPriorityQueue pq = new MyPriorityQueue();
      for (int x : arr)
          pq.push(x);
      // 元素出堆的顺序是有序的
      for (int i = 0; i < arr.length; i++)
          res[i] = pq.pop();
      return res;
  }
  ```

- The standard algorithm won't need the priority queue, instead it builds the heap upon the original array, hence $O(1)$ space complexity.
