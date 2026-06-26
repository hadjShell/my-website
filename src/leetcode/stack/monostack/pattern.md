---
title: Monotonic Stack Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- Leverage stack to maintain a monotonically **increasing or decreasing list**:
  - Every element in the array should be pushed into the stack.
  - Pop smaller values, then push new big value (decreasing stack)
  - Pop bigger values, then push new small value (increasing stack)

- Problem types
  - **Next greater/smaller value** or **Previous greater/smaller value** problem.
  - Remove elements while keeping order and optimizing result.

## 🛠️ Pattern

- **Store indices in stack** for convenience