---
title: Topological Sort Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q207. [Course Schedule](https://leetcode.com/problems/course-schedule/)

- ```java
  class Solution {
      private boolean isCyclic = false;

      public boolean canFinish(int numCourses, int[][] prerequisites) {
          List<Integer>[] graph = buildGraph(numCourses, prerequisites);
          boolean[] visited = new boolean[numCourses];
          boolean[] onPath = new boolean[numCourses];

          for (int i = 0; i < numCourses; i++)
              if (!visited[i])    traverse(graph, i, visited, onPath);

          return !isCyclic;
      }

      private void traverse(List<Integer>[] graph, int vertex, boolean[] visited, boolean[] onPath) {
          if (vertex < 0 || vertex >= graph.length)
              return;

          if (isCyclic)
              return;

          if (onPath[vertex]) {
              isCyclic = true;
              return;
          }

          if (visited[vertex])
              return;

          visited[vertex] = true;
          onPath[vertex] = true;
          for (int to : graph[vertex]) {
              traverse(graph, to, visited, onPath);
          }
          onPath[vertex] = false;
      }

      private List<Integer>[] buildGraph(int numCourses, int[][] prerequisites) {
          List<Integer>[] graph = new List[numCourses];
          for (int i = 0; i < numCourses; i++)
              graph[i] = new ArrayList<>();

          for (int[] p : prerequisites) {
              int from = p[1], to = p[0];
              graph[from].add(to);
          }

          return graph;
      }
  }
  ```

### :star:Q210. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

- ```java
  class Solution {
      private boolean isCyclic = false;

      public int[] findOrder(int numCourses, int[][] prerequisites) {
          List<Integer>[] graph = buildGraph(numCourses, prerequisites);
          boolean[] visited = new boolean[numCourses];
          boolean[] onPath = new boolean[numCourses];
          List<Integer> result = new ArrayList<>();

          for (int i = 0; i < numCourses; i++)
              if (!visited[i])    traverse(graph, i, visited, onPath, result);

          if (isCyclic)
              return new int[] {};
          else {
              Collections.reverse(result);
              return result.stream().mapToInt(Integer::intValue).toArray();
          }
      }

      private void traverse(List<Integer>[] graph, int vertex, boolean[] visited, boolean[] onPath, List<Integer> result) {
          if (vertex < 0 || vertex >= graph.length)
              return;

          if (isCyclic)
              return;

          if (onPath[vertex]) {
              isCyclic = true;
              return;
          }

          if (visited[vertex])
              return;

          visited[vertex] = true;
          onPath[vertex] = true;
          for (int to : graph[vertex]) {
              traverse(graph, to, visited, onPath, result);
          }
          onPath[vertex] = false;
          result.add(vertex);
      }

      private List<Integer>[] buildGraph(int numCourses, int[][] prerequisites) {
          List<Integer>[] graph = new List[numCourses];
          for (int i = 0; i < numCourses; i++)
              graph[i] = new ArrayList<>();

          for (int[] p : prerequisites) {
              int from = p[1], to = p[0];
              graph[from].add(to);
          }

          return graph;
      }
  }
  ```
