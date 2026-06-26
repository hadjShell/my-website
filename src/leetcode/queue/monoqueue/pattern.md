---
title: Monotonic Queue Concept
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- Problem
  - **给你一个数组 `window`，已知其最值为 `A`，如果给 `window` 中添加一个数 `B`，那么比较一下 `A` 和 `B` 就可以立即算出新的最值；但如果要从 `window` 数组中减少一个数，就不能直接得到最值了，因为如果减少的这个数恰好是 `A`，就需要遍历 `window` 中的所有元素重新寻找新的最值**。

  - Find **max/min** of an array where exists **frequent first or last element removal**

## Template

```java
class MonotonicQueueMax{
    Deque<Integer> q = new ArrayDeque<>();

    public void add(int x) {
        while (!q.isEmpty() && q.getLast() < x) {
            q.removeLast();
        }
        q.offer(x);
    }

    public void remove(int x) {
        if (q.peek() == x) {
            q.poll();
        }
    }

    public int getMax() {
        return q.peek();
    }
}

class MonotonicQueueMin{
    Deque<Integer> q = new ArrayDeque<>();

    public void add(int x) {
        while (!q.isEmpty() && q.getLast() > x) {
            q.removeLast();
        }
        q.offer(x);
    }

    public void remove(int x) {
        if (q.peek() == x) {
            q.poll();
        }
    }

    public int getMin() {
        return q.peek();
    }
}
```
