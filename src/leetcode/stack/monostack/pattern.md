---
title: Monotonic Stack Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- **Next greater/smaller value** or **Last greater/smaller value** problem
- Leverage stack to maintain a monotonically **increasing or decreasing list**

  - Pop smaller values, then push new big value

  - Pop biggers values, then push new small value

## 🛠️ Pattern

- **Store indices in stack** for convenience
