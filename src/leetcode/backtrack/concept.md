---
title: Backtracking Concept & Pattern
author: David Zhang aka Hadjshell
order: 1
isOriginal: true
footer: false
editLink: false
---

## 🧠 Concept

- **Brute-force approach**

- Backtracking is the process of **DFS a n-ary decision tree** to get the final solution. **Each node stores a part of valid answer**. **If you traverse the whole tree and collect the answers at the leaf nodes, you will get all valid solutions**.

- A decision tree consists of three types of nodes:

  - **Decision nodes** – typically represented by squares
  - **Chance nodes** – typically represented by circles
  - **End nodes** – typically represented by triangles

- There are three considerations on each node:

  - **Path**: the choices that have been made
  - **Choice list**: the choices that can be made at this chance node
  - **End condition**: the condition for reaching the bottom of the decision tree where you cannot make any more choices, or for reaching some nodes in the decision tree where the condition has been met

::: important Difference between Backtracking and DFS

**Backtracking focuses on the edges**, meaning it emphasizes the choice list at each decision point: you make a choice, traverse the corresponding edge, and then recursively explore the child node.

**DFS focuses on the vertices**, emphasizing what happens at each node, such as **preorder** and **postorder** operations. (Inorder traversal is generally less relevant for n-ary trees or graph DFS.)

:::

## 🛠️ Algorithm

- ```java
  Result result;

  void backtrack(Path path, Choice choice_list)
    if (end condition)
      result.add(path)
      return

    for choice : choice_list:
      // make a choice
      choice_list.remove(choice)
      path.add(choice)

      backtrack(path, choice_list)

      // undo the choice
      path.remove(choice)
      choice_list.add(choice)
  ```

* Optimisation

  - Tree pruning

  ::: info

  Tree pruning is that we observe the pattern to eliminate illegal chance nodes ealier, resulting to optimisation of backtracking brute-force approach.

  :::

## 球盒模型 (Balls-into-bins Problem)

::: tip 两种视角

选择列表（choice list）可以是球，也可以是盒子。换句话说，可以站在盒子的视角选择球，也可以站在球的视角选择盒子。

> 选择是双向的。

:::

### 两种视角理解排列 $P(n, k)$

- 将 $n$ 个标记了不同序号的球（标号为了体现顺序的差异），放入 $k$ 个标记了不同序号的盒子中（其中 $n >= k$，每个盒子最终都装有恰好一个球），共有 $P(n, k)$ 种不同的方法。

- ![](/assets/image/leetcode/n-ball-k-bin.png)

- 盒子视角
  - 每个盒子一定选择一个球。
  - 从第一个盒子开始，从 $n$ 个球里选择一个。剩下的 $k - 1$ 个盒子从 $n - 1$ 个球中选择，也就是子问题 $P(n - 1, k - 1)$。
  - $P(n, k) = nP(n-1, k-1)$
  - 复杂度：$O(\dfrac{n!}{(n-k)!})$ （可以提前剪枝）, 全排列: $O(n!)$
- 球视角
  - 不一定每一个球都进入盒子。
  - 从第一个球开始。第一个球不装进盒子，这样就要将剩下 $n-1$ 个球装进 $k$ 个盒子里；或者从 $k$ 个盒子里选择一个装入第一个球，剩下 $n-1$ 个球装进 $k-1$ 个盒子里。
  - $P(n, k) = P(n-1, k) + kP(n-1, k-1)$
  - 复杂度：$O((2*k)^n)$, 全排列: $O(n^n)$ （_球一定装进盒子里_）

### 两种视角理解组合 $C(n, k)$

- 问题和排列一样，不同的是组合不在乎球的顺序，所以不需要对盒子编号，可以认为只有一个盒子，容量是 $k$

- ![](/assets/image/leetcode/n-ball-1-bin.png)

- 盒子视角

  - 盒子选择 $n$ 个球中的任意一个作为第一个。然后盒子剩余 $k - 1$ 个位置，需要在剩下的 $n - 1$ 个球中选择，也就是子问题 $C(n - 1, k - 1)$。
  - 因为盒子不在乎顺序，所以球放入盒子中第几个槽是无所谓的，因此要除去这个顺序。
  - $C(n, k) = \dfrac{nC(n - 1, k - 1)}{k}$
  - 复杂度：$O(\dfrac{n!}{k!(n-k)!})$ （可以提前剪枝）

- 球视角
  - 第一个球可以不装进盒子，这样需要将剩下 $n - 1$ 个球放入剩余容量为 $k$ 的盒子中；或者第一个球可以装进盒子，这样需要将剩下 $n - 1$ 个球放入剩余容量为 $k - 1$ 的盒子中。
  - $C(n, k) = C(n - 1, k) + C(n - 1, k - 1)$
  - 复杂度：$O(2^k)$

### 复杂度分析

- 忽略具体细节，一般来说，**盒子视角回溯的复杂度是阶乘级的，球视角回溯的复杂度是指数级的**。
- 理论上说，两种视角没有优劣之分。但是在实际的代码实现中会有复杂度的区别，需要选择更优的写法。

!!8 类球盒问题 to be continued...!!
