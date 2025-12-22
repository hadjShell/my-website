---
title: Two Pointer Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Linked List Concept

- A linear collection of data elements, consisting of a group of nodes which together represent a sequence (**ordered**)
- Order is not given by elements' physical placement in memory
- Nodes have reference to adjacent nodes
- Head node, tail node
- `NULL` terminated
- **Sentinel nodes**
  - In some implementations an extra 'sentinel' or 'dummy' node may be added before the first data record or after the last one
  - This convention simplifies and accelerates some list-handling algorithms, by ensuring that all links can be safely dereferenced and that every list (even one that contains no data elements) always has a "first" and "last" node
- **Quick slow pointers**

  - Quick first move couple of steps, and then slow start to move too
  - Quick and slow move in different speed at the same time
  - Quick change the speed when some conditions are met

- Pros
  - Fast insertion
  - Fast deletion
  - Ordered
  - Flexible size
- Cons
  - Slow lookup
  - More memory
- Singly Linked List

  - ![](/assets/image/leetcode/singly_linked_list.svg)

- Doubly Linked List

  - ![](/assets/image/leetcode/doubly_linkede_list.svg)

- Single vs. Double
  - Single is a little faster, uses less memory
  - Double can be traversed from both directions

## 🛠️ Pattern

- Dummy nodes

- Fast and slow pointers
  - Find **middle** element
  - **Circular** list
- Left and right pointers
  - **Reverse**
  - **Water container problem**
- Composition with other data structures
- **Skip list**
