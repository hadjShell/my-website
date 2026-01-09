---
title: Data structure and Algorithm
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

## Introduction

- Data structure: memory for storing information

  > Data structure is the combination of the data which stores the value and the metadata which maintains the structure.

- Algorithm: method for solving a problem

::: tip

Algorithm + Data Structure = Program.

:::

- Not all problems can be solved, e.g. halting problem

- ```mermaid
  graph LR;
  Problem --> Idea
  Idea --> Algorithm
  Algorithm --> Program
  ```

- Basic operations on data structures

  - Accessing
  - Insertion
  - Deletion
  - Searching
  - Sorting
  - Traversal
    ![](/assets/image/leetcode/DS_Operation_Performance.png)

::: important

There is no one magic data structure and algorithm that can solve any problems in different scenarios. All of them have **trade-offs**.

:::

::: important What is algorithm design?

Computer doesn't actually have any special tricks for solving problems; its only solution is exhaustive search—exploring all possibilities. Algorithm design is simply about first thinking about "how to exhaustively search", and then pursuing "how to exhaustively search intelligently".

:::

## Pseudo code

- Describe an algorithm

- Should be abstract

  - Ignores unimportant details
  - Allows clear presentation of key idea
  - Simplifies analysis of a proposed solution

- Templates

  ```markdown
  Algorithm
  Inputs
  Returns
  Variables (local)
  Begin

  End
  ```

  - Not rigid, different among various organizations

## Big O

- Analyze an algorithm

  - Need to measure performance of different algorithms to allow us to compare them

  - Interested in efficiency of an algorithm
    - **Time**: how fast does an algorithm run
    - **Space**: how much memory is required **simultaneously**
  - Experimental approach: limited
  - Theoretical approach: Complexity analysis

- Big O Notation

  - Give an approximately **upper bound** on an algorithm complexity
  - $O(f(N))$: indicate the approximate number of **operations** required by an algorithm for input size `N`
    ![](/assets/image/leetcode/BIG_O.png)

  - Big O is a classification system that groups together algorithms that have similar performance. Enable us to quickly compare different algorithms
  - Extra effort to calculate exact bounds is normally unnecessary (is sometimes)
  - Two algorithms with same Big O performance may not behave exactly the same in practice
  - Big Omega Ω: lower bound on performance
  - Big Theta θ: bounded above and below

- Rules

  - Drop the non-dominant arithmetic terms

    - $O(f(N) + g(N)) = O(max(f(N), g(n)))$
    - $O(f(N)) * O(g(N)) = O(f(N) * g(N))$

  - Drop the constants

    - Adding, subtracting, multiplying, or dividing a Big O performance bound by a constant factor does not change it, doesn't matter how big the constant factor is

  - Different terms for multiple inputs

  - **Functional call can cost more than $O(1)$**

  - We can also approach the runtime by thinking about what the code is supposed to be doing

- Algorithm analysis case

  - Best case; Worst case; Average case (Don't constraint the input, still be infinity)
  - Normally focus on worst case as this gives us an upper bound
  - Average case can be useful but hard to calculate and assume random data
  - Best case seen as least useful but can provide a good indication of when to use a particular algorithm

## Amortized complexity

- **Averages Over a Sequence of operations**: Unlike worst-case analysis (which looks at the single most expensive operation) or average-case (random inputs), amortized analysis considers the total cost over many operations.

- **Spreading Costs**: Expensive operations (e.g., $O(N)$) are "paid for" by the cheap operations (e.g., $O(1)$), so the amortized cost per operation remains low.

- **Accounting/Aggregate Methods**: Techniques like the "accounting method" assign "credits" to cheap operations to pay for future expensive ones, while the "aggregate method" sums total cost and divides by the number of operations.

::: tip Example

Dynamic array resizes cost being averaged out to $O(1)$ per insertion.

:::

## Recursion Complexity Analysis

- Recursion time complexity =
  **the number of recursions** $\times$ **time complexity of the recursive function**, i.e.,
  **the number of nodes in the recursion tree** $\times$ **time complexity of operation on each node**.

- Recursion space complexity =
  **the depth of the recursion stack** $+$ **other space allocated by the algorithm**, i.e.,
  **the height of the recursion tree** $+$ **other space allocated by the algorithm**.

## Hint of Time Complexity by Input Size

- Computer can do roughly **$10^8$ operations per second**. Therefore, we can estimate the possible passed time complexity based on the input size.

  | Input Size      | Allowed Time Complexity | Possible Algorithms                                                  |
  | :-------------- | :---------------------- | :------------------------------------------------------------------- |
  | $n \le 10$      | $O(n!)$ or $O(k^n)$     | Backtracking, Brute-force                                            |
  | $n \le 20$      | $O(2^n)$                | State Compression DP                                                 |
  | $n \le 40$      | $O(2^{n/2})$            | Halving Enumeration                                                  |
  | $n \le 10^2$    | $O(n^3)$                | Triple-loop DP, Floyd                                                |
  | $n \le 10^3$    | $O(n^2)$                | Double-loop DP, Knapsack Problem                                     |
  | $n \le 10^5$    | $O(nlogn)$              | Most questions fall into this class, suitable for various algorithms |
  | $n \le 10^6$    | $O(n)$                  | Linear DP, Sliding Window                                            |
  | $n \le 10^9$    | $O(\sqrt{n})$           | Is Prime Number                                                      |
  | $n \le 10^{18}$ | $O(logn)$ or $O(1)$     | Binary Search, Quick Power, Math Tricks                              |

::: tip

In practical, notice the influence of constant factor. E.g., hash table is slower than array despite both operations are $O(1)$.

:::
