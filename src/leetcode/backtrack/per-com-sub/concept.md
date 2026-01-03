---
title: Permutation & Combination & Subset Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## Definition

- A **permutation** is a rearrangement of all the elements of an array.

> $A(n, k) = \dfrac{n!}{(n - k)!}$

- A **subset** of an array is a selection of elements (possibly none) of the array.

- A **combination** is a selection of items from a set that has distinct members, such that the order of selection does not matter.

> $C(n, k) = \dfrac{n!}{k!(n - k)!}$

## Three Variations

- Distinct values, only selected once

- Duplicate values, only selected once

- Distinct values, can be selected more than once

## Decision Tree

- Permutation decision tree

  ```mermaid
   flowchart TD
   	root["[]"]
   	1(("[1]"))
   	2(("[2]"))
   	3(("[3]"))
   	4(("[1, 2]"))
   	5(("[1, 3]"))
   	6(("[2, 1]"))
   	7(("[2, 3]"))
   	8(("[3, 1]"))
   	9(("[3, 2]"))
   	10@{ shape: tri, label: "[1, 2, 3]" }
   	11@{ shape: tri, label: "[1, 3, 2]" }
   	12@{ shape: tri, label: "[2, 1, 3]" }
   	13@{ shape: tri, label: "[2, 3, 1]" }
   	14@{ shape: tri, label: "[3, 1, 2]" }
   	15@{ shape: tri, label: "[3, 2, 1]" }

   	root -->|1| 1
   	root -->|2| 2
   	root -->|3| 3
   	1 -->|2| 4
   	1 -->|3| 5
   	2 -->|1| 6
   	2 -->|3| 7
   	3 -->|1| 8
   	3 -->|2| 9
   	4 -->|3| 10
   	5 -->|2| 11
   	6 -->|3| 12
   	7 -->|1| 13
   	8 -->|2| 14
   	9 -->|1| 15
  ```

- Subset Tree

  ```mermaid
   flowchart TD
   	root@{ shape: tri, label: "[]" }
   	1@{ shape: tri, label: "[1]" }
   	2@{ shape: tri, label: "[2]" }
   	3@{ shape: tri, label: "[3]" }
   	4@{ shape: tri, label: "[1, 2]" }
   	5@{ shape: tri, label: "[1, 3]" }
   	7@{ shape: tri, label: "[2, 3]" }
   	10@{ shape: tri, label: "[1, 2, 3]" }

   	root -->|1| 1
   	root -->|2| 2
   	root -->|3| 3
   	1 -->|2| 4
   	1 -->|3| 5
   	2 -->|3| 7
   	4 -->|3| 10
  ```

- Combination Tree

  ```mermaid
   flowchart TD
   	root["[]"]
   	1(("[1]"))
   	2(("[2]"))
   	3(("[3]"))
   	4(("[1, 2]"))@{ shape: tri, label: "[1, 2]" }
   	5(("[1, 3]"))@{ shape: tri, label: "[1, 3]" }
   	7(("[2, 3]"))@{ shape: tri, label: "[2, 3]" }

   	root -->|1| 1
   	root -->|2| 2
   	root -->|3| 3
   	1 -->|2| 4
   	1 -->|3| 5
   	2 -->|3| 7
  ```
