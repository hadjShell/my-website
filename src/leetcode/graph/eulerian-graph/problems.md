---
title: Eulerian Graph Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q332. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)

- ```java
  class Solution {
      public List<String> findItinerary(List<List<String>> tickets) {
          Map<String, Queue<String>> depart2Arrives = buildGraph(tickets);

          return findEulerianPath(depart2Arrives);
      }

      private List<String> findEulerianPath(Map<String, Queue<String>> graph) {
          String start = "JFK";

          List<String> result = new ArrayList<>();
          postTraverse(graph, start, result);

          Collections.reverse(result);
          return result;
      }

      private void postTraverse(Map<String, Queue<String>> graph, String vertex, List<String> result) {
          if (!graph.containsKey(vertex))
              return;

          Queue<String> to = graph.get(vertex);
          while (!to.isEmpty()) {
              postTraverse(graph, to.poll(), result);
          }

          result.add(vertex);
      }

      private Map<String, Queue<String>> buildGraph(List<List<String>> tickets) {
          Map<String, Queue<String>> graph = new HashMap<>();

          for (List<String> ticket : tickets) {
              String depart = ticket.get(0), arrive = ticket.get(1);

              graph.computeIfAbsent(depart, k -> new PriorityQueue<>()).add(arrive);
              graph.computeIfAbsent(arrive, k -> new PriorityQueue<>());
          }

          return graph;
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
