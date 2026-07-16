---
title: Topological Sort Problems
author: David Zhang aka Hadjshell
order: 2
isOriginal: true
footer: false
editLink: false
---

## --- :bulb: Topological Sort ---

### :star:Q207. [Course Schedule](https://leetcode.com/problems/course-schedule/)

```java
class Solution {
    boolean isAcyclic = true;

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // directed
        List<Integer>[] graph = buildGraph(numCourses, prerequisites);
        boolean[] visited = new boolean[numCourses];
        boolean[] onPath = new boolean[numCourses];

        for (int v = 0; v < numCourses; v++) {
            if (!visited[v])
                dfs(v, graph, visited, onPath);
        }

        return isAcyclic;
    }

    private void dfs(int v, List<Integer>[] graph, boolean[] visited, boolean[] onPath) {
        if (!isAcyclic || visited[v])
            return;
        if (onPath[v]) {
            isAcyclic = false;
            return;
        }

        onPath[v] = true;
        for (int adj : graph[v]) {
            dfs(adj, graph, visited, onPath);
        }
        onPath[v] = false;
        visited[v] = true;
    }

    private List<Integer>[] buildGraph(int n, int[][] edges) {
        List<Integer>[] graph = new List[n];

        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] e : edges) {
            int v1 = e[0], v2 = e[1];
            graph[v2].add(v1);
        }

        return graph;
    }
}
```

### :star:Q210. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

```java
class Solution {
    boolean isAcyclic = true;

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        // directed
        List<Integer>[] graph = buildGraph(numCourses, prerequisites);
        boolean[] visited = new boolean[numCourses];
        boolean[] onPath = new boolean[numCourses];
        List<Integer> result = new ArrayList<>();

        for (int v = 0; v < numCourses; v++) {
            if (!visited[v])
                dfs(v, graph, visited, onPath, result);
        }

        return isAcyclic ?
                result.reversed().stream()
                        .mapToInt(Integer::intValue)
                        .toArray() :
                new int[0];
    }

    private void dfs(int v, List<Integer>[] graph, boolean[] visited, boolean[] onPath, List<Integer> result) {
        if (!isAcyclic || visited[v])
            return;
        if (onPath[v]) {
            isAcyclic = false;
            return;
        }

        onPath[v] = true;
        for (int adj : graph[v]) {
            dfs(adj, graph, visited, onPath, result);
        }
        onPath[v] = false;
        visited[v] = true;
        result.add(v);
    }

    private List<Integer>[] buildGraph(int n, int[][] edges) {
        List<Integer>[] graph = new List[n];

        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] e : edges) {
            int v1 = e[0], v2 = e[1];
            graph[v2].add(v1);
        }

        return graph;
    }
}
```

## --- :bulb: DAG + DP ---

### :star:Q1462. [Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)

- DAG + DP

```java
class Solution {
    public List<Boolean> checkIfPrerequisite(int numCourses, int[][] prerequisites, int[][] queries) {
        // DAG
        List<Integer>[] graph = buildGraph(numCourses, prerequisites);
        Map<Integer, Set<Integer>> vertex2Next = new HashMap<>();
        List<Boolean> result = new ArrayList<>();

        for (int v = 0; v < numCourses; v++) {
            getNext(v, graph, vertex2Next);
        }

        for (int[] q : queries) {
            result.add(checkDependency(q, vertex2Next));
        }

        return result;
    }

    private boolean checkDependency(int[] query, Map<Integer, Set<Integer>> vertex2Next) {
        return vertex2Next.get(query[0]).contains(query[1]);
    }

    private Set<Integer> getNext(int v, List<Integer>[] graph, Map<Integer, Set<Integer>> vertex2Next) {
        if (vertex2Next.containsKey(v))
            return vertex2Next.get(v);

        Set<Integer> next = new HashSet<>();

        for (int adj : graph[v]) {
            next.add(adj);
            next.addAll(getNext(adj, graph, vertex2Next));
        }
        vertex2Next.put(v, next);

        return next;
    }

    private List<Integer>[] buildGraph(int n, int[][] edges) {
        List<Integer>[] graph = new List[n];

        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] e : edges) {
            int v1 = e[0], v2 = e[1];
            graph[v1].add(v2);
        }

        return graph;
    }
}
```

### :star:Q2050. [Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)

- DAG + DP

```java
class Solution {
    public int minimumTime(int n, int[][] relations, int[] time) {
        // DAG
        List<Integer>[] graph = buildGraph(n, relations);
        // max time from current vertex to sink
        int[] memo = new int[n];

        for (int v = 0; v < n; v++) {
            maxTime(v, graph, time, memo);
        }

        return Arrays.stream(memo).max().orElse(-1);
    }

    private int maxTime(int v, List<Integer>[] graph, int[] time, int[] memo) {
        if (memo[v] != 0)
            return memo[v];

        if (isSink(v, graph))  {
            memo[v] = time[v];
            return memo[v];
        }


        int max = Integer.MIN_VALUE;
        for (int adj : graph[v]) {
            max = Math.max(
                max,
                time[v] + maxTime(adj, graph, time, memo)
            );
        }
        memo[v] = max;

        return memo[v];
    }

    private boolean isSink(int v, List<Integer>[] graph) {
        return graph[v].isEmpty();
    }

    private List<Integer>[] buildGraph(int n, int[][] edges) {
        List<Integer>[] graph = new List[n];

        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] e : edges) {
            // v1 -> v2
            int v1 = e[0] - 1, v2 = e[1] - 1;
            graph[v1].add(v2);
        }

        return graph;
    }
}
```
