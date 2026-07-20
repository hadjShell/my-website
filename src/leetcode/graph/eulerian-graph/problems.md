---
title: Eulerian Graph Problems
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### :star:Q332. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)

```java
class Solution {
    static final String START = "JFK";

    public List<String> findItinerary(List<List<String>> tickets) {
        // directed, definitely has a Eulerian path
        Map<String, PriorityQueue<String>> depart2Arrives = buildGraph(tickets);
        List<String> result = new ArrayList<>();
        dfs(START, depart2Arrives, result);

        Collections.reverse(result);
        return result;
    }

    private void dfs(String v, Map<String, PriorityQueue<String>> graph, List<String> result) {
        if (!graph.containsKey(v)) {
            result.add(v);
            return;
        }

        PriorityQueue<String> edges = graph.get(v);
        while (!edges.isEmpty()) {
            dfs(edges.poll(), graph, result);
        }
        result.add(v);
    }

    private Map<String, PriorityQueue<String>> buildGraph(List<List<String>> tickets) {
        Map<String, PriorityQueue<String>> graph = new HashMap<>();

        for (List<String> ticket : tickets) {
            String depart = ticket.get(0), arrive = ticket.get(1);

            graph.computeIfAbsent(depart, k -> new PriorityQueue<>()).add(arrive);
        }

        return graph;
    }
}
```

### :heart:Q753. [Cracking the Safe](https://leetcode.com/problems/cracking-the-safe/)

::: important Problem domain

**De Bruijn sequence**. (包含所有全排列的最短序列)

Given an integer n and a set of characters A of size k, find a string S such that every possible string on A of length n appears exactly once as a substring in S. Such a string is called de Bruijn sequence.

We can solve this problem by constructing a directed graph with $k^{n-1}$ nodes with each node having k outgoing edges. Each node corresponds to a string of size n-1. Every edge corresponds to one of the k characters in A and adds that character to the starting string.

For example, if n=3 and k=2, then we construct the following graph:

![](/assets/image/leetcode/de-bruijn-graph.png)

- The node '01' is connected to node '11' through edge '1', as adding '1' to '01' (and removing the first character) gives us '11'.
- We can observe that every node in this graph has equal in-degree and out-degree, which means that a Eulerian circuit exists in this graph.
- The Eulerian circuit will correspond to a de Bruijn sequence as every combination of a node and an outgoing edge represents a unique string of length n.
- The de Bruijn sequence will contain the characters of the starting node and the characters of all the edges in the order they are traversed in.
- Therefore the length of the string will be $k^n + n-1$. We will use Hierholzer’s Algorithm to find the Eulerian circuit. The time complexity of this approach is $O(k^n)$.

:::

```java
class Solution {
    public String crackSafe(int n, int k) {
        // the graph is definitely a eulerian graph
        Set<String> vertices = new HashSet<>();
        List<String> sequence = new ArrayList<>();
        int minDigit = 0, maxDigit = k - 1;
        StringBuilder start = new StringBuilder();
        for (int c = 0; c < n; c++) {
            start.append(0);
        }

        dfs(start, vertices, sequence, minDigit, maxDigit);

        Collections.reverse(sequence);

        return buildResult(sequence);
    }

    private String buildResult(List<String> sequence) {
        StringBuilder result = new StringBuilder(sequence.get(0));
        for (int i = 1; i < sequence.size(); i++) {
            String s = sequence.get(i);
            result.append(s.charAt(s.length() - 1));
        }

        return result.toString();
    }

    private void dfs(StringBuilder v, Set<String> vertices, List<String> sequence, int minDigit, int maxDigit) {
        String comb = v.toString();

        if (vertices.contains(comb))
            return;

        vertices.add(comb);
        v.deleteCharAt(0);
        for (int digit = minDigit; digit <= maxDigit; digit++) {
            StringBuilder next = new StringBuilder(v);
            next.append(digit);
            if (!comb.equals(next.toString())) {
                dfs(next, vertices, sequence, minDigit, maxDigit);
            }
        }
        sequence.add(comb);
    }
}
```

### Q2097. [Valid Arrangement of Pairs](https://leetcode.com/problems/valid-arrangement-of-pairs/)

- ```java
  class Solution {

      class Node {
          int degree;
          List<Integer> out;

          public Node() {
              degree = 0;
              out = new ArrayList<>();
          }
      }

      public int[][] validArrangement(int[][] pairs) {
          Map<Integer, Node> graph = buildGraph(pairs);

          int start = findStart(graph);

          List<int[]> result = new ArrayList<>();
          traverse(graph, start, -1, result);
          result.removeLast();

          Collections.reverse(result);
          return result.toArray(new int[0][]);
      }

      private Map<Integer, Node> buildGraph(int[][] pairs) {
          Map<Integer, Node> graph = new HashMap<>();

          for (int[] pair : pairs) {
              int from = pair[0], to = pair[1];
              Node fromNode = graph.computeIfAbsent(from, k -> new Node());
              Node toNode = graph.computeIfAbsent(to, k -> new Node());

              fromNode.degree++;
              toNode.degree--;
              fromNode.out.add(to);
          }

          return graph;
      }

      private int findStart(Map<Integer, Node> graph) {
          int start = 0;

          for (Map.Entry<Integer, Node> entry : graph.entrySet()) {
              start = entry.getKey();
              if (entry.getValue().degree == 1)
                  break;
          }

          return start;
      }

      private void traverse(Map<Integer, Node> graph, int start, int from, List<int[]> result) {
          if (!graph.containsKey(start))
              return;

          List<Integer> out = graph.get(start).out;
          while (!out.isEmpty()) {
              traverse(graph, out.removeLast(), start, result);
          }

          result.add(new int[] {from, start});
      }
  }
  ```
