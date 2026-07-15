---
title: Bipartite Graph Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

### :star:Q785. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)

```java
class Solution {
    boolean isBipartite = true;

    // simple undirected unconnected graph
    public boolean isBipartite(int[][] graph) {
        int size = graph.length;
        // 0: non-visited, 1: red, -1: green
        int[] visited = new int[size];
        int color = 1;

        for (int v = 0; v < size; v++) {
            if (visited[v] == 0)
                dfs(v, graph, color, visited);
        }

        return isBipartite;
    }

    private void dfs(int v, int[][] graph, int color, int[] visited) {
        if (!isBipartite)
            return;

        if (visited[v] != 0) {
            isBipartite = visited[v] == color;
            return;
        }

        visited[v] = color;
        for (int adjacency : graph[v]) {
            dfs(adjacency, graph, -color, visited);
        }
    }
}
```

### Q886. [Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)

```java
class Solution {
    boolean isBipartite = true;

    public boolean possibleBipartition(int n, int[][] dislikes) {
        List<Integer>[] graph = buildGraph(n, dislikes);
        int[] visited = new int[n];
        int color = 1;

        for (int v = 0; v < n; v++) {
            if (visited[v] == 0)
                dfs(v, graph, color, visited);
        }

        return isBipartite;
    }

    private List<Integer>[] buildGraph(int n, int[][] edges) {
        // undirected
        List<Integer>[] graph = new List[n];

        for (int i = 0; i < graph.length; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] e : edges) {
            int v1 = e[0] - 1, v2 = e[1] - 1;
            graph[v1].add(v2);
            graph[v2].add(v1);
        }

        return graph;
    }

    private void dfs(int v, List<Integer>[] graph, int color, int[] visited) {
        if (!isBipartite)
            return;

        if (visited[v] != 0) {
            isBipartite = visited[v] == color;
            return;
        }

        visited[v] = color;
        for (int adj : graph[v]) {
            dfs(adj, graph, -color, visited);
        }
    }
}
```
