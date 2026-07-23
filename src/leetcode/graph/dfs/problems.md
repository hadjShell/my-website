---
title: Graph DFS Problems
author: David Zhang aka Hadjshell
isOriginal: true
footer: false
editLink: false
---

### 🙃Q749. [Contain Virus](https://leetcode.com/problems/contain-virus/)

- [Solution](https://leetcode.com/problems/contain-virus/solutions/8415139/tedious-question-but-clear-explanation-w-mmt2)

:::info Example

Input:

```text
[
    [0,1,0,1,1,1,1,1,1,0],[0,0,0,1,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,1,0],[0,0,0,1,1,0,0,1,1,0],
    [0,1,0,0,1,0,1,1,0,1],[0,0,0,1,0,1,0,1,1,1],
    [0,1,0,0,1,0,0,1,1,0],[0,1,0,1,0,0,0,1,1,0],
    [0,1,1,0,0,1,1,0,0,1],[1,0,1,1,0,1,0,1,0,1]
]
```

Visualization:

Initial state:

![](/assets/image/leetcode/749-example-init.jpg)

First day state, build wall -> infect -> merge:

![](/assets/image/leetcode/749-example-first-day.jpg)

Second day state:

![](/assets/image/leetcode/749-example-second-day.jpg)

Third day state:

![](/assets/image/leetcode/749-example-third-day.jpg)

```text
Init:
[
[0,100,0,101,101,101,101,101,101,0],
[0,0,0,101,0,0,0,0,0,0],
[0,0,101,101,101,0,0,0,102,0],
[0,0,0,101,101,0,0,102,102,0],
[0,103,0,0,101,0,102,102,0,102],
[0,0,0,104,0,105,0,102,102,102],
[0,106,0,0,107,0,0,102,102,0],
[0,106,0,108,0,0,0,102,102,0],
[0,106,106,0,0,109,109,0,0,110],
[111,0,106,106,0,109,0,112,0,110],
]
------------------
Build wall:
[
[0,100,0,2,2,2,2,2,2,0],
[0,0,0,2,0,0,0,0,0,0],
[0,0,2,2,2,0,0,0,102,0],
[0,0,0,2,2,0,0,102,102,0],
[0,103,0,0,2,0,102,102,0,102],
[0,0,0,104,0,105,0,102,102,102],
[0,106,0,0,107,0,0,102,102,0],
[0,106,0,108,0,0,0,102,102,0],
[0,106,106,0,0,109,109,0,0,110],
[111,0,106,106,0,109,0,112,0,110],
]
Infect:
[
[100,100,100,2,2,2,2,2,2,0],
[0,100,0,2,0,0,0,0,102,0],
[0,0,2,2,2,0,0,102,102,102],
[0,103,0,2,2,0,102,102,102,102],
[103,103,103,104,2,102,102,102,102,102],
[0,106,104,104,107,105,102,102,102,102],
[106,106,106,107,107,107,102,102,102,102],
[106,106,106,108,107,109,102,102,102,102],
[106,106,106,106,109,109,109,102,102,110],
[111,106,106,106,109,109,109,112,112,110],
]
Merge:
[
[100,100,100,2,2,2,2,2,2,0],
[0,100,0,2,0,0,0,0,102,0],
[0,0,2,2,2,0,0,102,102,102],
[0,102,0,2,2,0,102,102,102,102],
[102,102,102,102,2,102,102,102,102,102],
[0,102,102,102,102,102,102,102,102,102],
[102,102,102,102,102,102,102,102,102,102],
[102,102,102,102,102,102,102,102,102,102],
[102,102,102,102,102,102,102,102,102,102],
[102,102,102,102,102,102,102,102,102,102],
]
------------------
Build wall:
[
[100,100,100,2,2,2,2,2,2,0],
[0,100,0,2,0,0,0,0,2,0],
[0,0,2,2,2,0,0,2,2,2],
[0,2,0,2,2,0,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[0,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
]
Infect:
[
[100,100,100,2,2,2,2,2,2,0],
[100,100,100,2,0,0,0,0,2,0],
[0,100,2,2,2,0,0,2,2,2],
[0,2,0,2,2,0,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[0,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
]
Merge:
[
[100,100,100,2,2,2,2,2,2,0],
[100,100,100,2,0,0,0,0,2,0],
[0,100,2,2,2,0,0,2,2,2],
[0,2,0,2,2,0,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[0,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
]
------------------
Build wall:
[
[2,2,2,2,2,2,2,2,2,0],
[2,2,2,2,0,0,0,0,2,0],
[0,2,2,2,2,0,0,2,2,2],
[0,2,0,2,2,0,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[0,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
]
Infect:
[
[2,2,2,2,2,2,2,2,2,0],
[2,2,2,2,0,0,0,0,2,0],
[0,2,2,2,2,0,0,2,2,2],
[0,2,0,2,2,0,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[0,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
]
Merge:
[
[2,2,2,2,2,2,2,2,2,0],
[2,2,2,2,0,0,0,0,2,0],
[0,2,2,2,2,0,0,2,2,2],
[0,2,0,2,2,0,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[0,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2],
]
```

:::

```java
class Solution {
    static final int[][] DIR = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    int ID = 100;

    public int containVirus(int[][] infection) {
        int m = infection.length, n = infection[0].length;
        // sorted by possible infection area, decsending
        PriorityQueue<Virus> virusBlocks = new PriorityQueue<>();
        Map<Integer, Virus> cellToVirusBlock = new HashMap<>();
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                if (infection[i][j] == 1 && !cellToVirusBlock.containsKey(i * n + j)){
                    Virus v = new Virus(infection);
                    dfs(i, j, infection, v, cellToVirusBlock);
                    virusBlocks.offer(v);
                }
            }

        // System.out.println("Init:");
        // print(infection, cellToVirusBlock);

        int walls = 0;
        while (!virusBlocks.isEmpty() && cellToVirusBlock.size() < m * n) {

            // 1. build wall
            // System.out.println("------------------");
            Virus most = virusBlocks.poll();
            walls += most.buildWall();
            // System.out.println("Build wall:");
            // print(infection, cellToVirusBlock);

            // 2. infect
            for (Virus v : virusBlocks) {
                v.infect(cellToVirusBlock);
            }
            // System.out.println("Infect:");
            // print(infection, cellToVirusBlock);

            // merge
            Set<Virus> visited = new HashSet<>();
            PriorityQueue<Virus> queue = new PriorityQueue<>();
            while (!virusBlocks.isEmpty()) {
                Virus v = virusBlocks.poll();

                if (visited.contains(v))
                    continue;

                Set<Virus> merges = new HashSet<>();
                getMerges(v, cellToVirusBlock, merges, visited);
                for (Virus merge : merges) {
                    Virus.merge(v, merge, cellToVirusBlock);
                }
                queue.offer(v);
            }
            virusBlocks = queue;

            // System.out.println("Merge:");
            // print(infection, cellToVirusBlock);
        }

        return walls;
    }

    public void dfs(int i, int j, int[][] infection, Virus v, Map<Integer, Virus> cellToVirusBlock) {
        int m = infection.length, n = infection[0].length;
        int hash = i * n + j;

        if (i < 0 || i >= m || j < 0 || j >= n)
            return;

        if (infection[i][j] == 0 || cellToVirusBlock.containsKey(hash))
            return;

        v.add(i, j);
        cellToVirusBlock.put(hash, v);
        for (int[] d : DIR) {
            dfs(i + d[0], j + d[1], infection, v, cellToVirusBlock);
        }
    }

    public void getMerges(Virus v, Map<Integer, Virus> cellToVirusBlock, Set<Virus> merges, Set<Virus> visited) {
        if (visited.contains(v))
            return;

        visited.add(v);
        merges.add(v);
        for (Virus neighbor : v.mergable(cellToVirusBlock)) {
            getMerges(neighbor, cellToVirusBlock, merges, visited);
        }
    }

    class Virus implements Comparable<Virus> {

        Set<Integer> area;
        int[][] infection;
        int id;

        public Virus(int[][] infection) {
            this.infection = infection;
            area = new HashSet<>();
            id = ID++;
        }

        // merge v2 into v1
        public static void merge(Virus v1, Virus v2, Map<Integer, Virus> cellToVirusBlock) {
            for (Integer cell : v2.area) {
                v1.area.add(cell);
                cellToVirusBlock.put(cell, v1);
            }
        }

        // infect uninfected area
        // can merge with another virus block
        public void infect(Map<Integer, Virus> cellToVirusBlock) {
            Set<Integer> infected = new HashSet<>();
            for (Integer hash : area) {
                int[] v = decode(hash);
                for (int[] d : DIR) {
                    int i = v[0] + d[0], j = v[1] + d[1];
                    int encode = encode(i, j);
                    if (isInfected(i, j)) {
                        infection[i][j] = 1;
                        infected.add(encode);
                        cellToVirusBlock.put(encode, this);
                    }
                }
            }
            area.addAll(infected);
        }

        public Set<Virus> mergable(Map<Integer, Virus> cellToVirusBlock) {
            Set<Virus> mergable = new HashSet<>();
            int m = infection.length, n = infection[0].length;

            for (Integer hash : area) {
                int[] v = decode(hash);
                for (int[] d : DIR) {
                    int i = v[0] + d[0], j = v[1] + d[1];
                    if (i < 0 || i >= m || j < 0 || j >= n)
                        continue;
                    if (infection[i][j] == 1) {
                        Virus merge = cellToVirusBlock.get(encode(i, j));
                        if (merge != this) {
                            mergable.add(merge);
                        }
                    }
                }
            }

            return mergable;
        }

        public int buildWall() {
            int result = 0;
            for (Integer hash : area) {
                int[] v = decode(hash);
                for (int[] d : DIR) {
                    int i = v[0] + d[0], j = v[1] + d[1];
                    if (isInfected(i, j)) {
                        result++;
                    }
                }
                infection[v[0]][v[1]] = 2;
            }

            return result;
        }

        public int possibleInfection() {
            Set<Integer> infecting = new HashSet<>();
            for (Integer hash : area) {
                int[] v = decode(hash);
                for (int[] d : DIR) {
                    int i = v[0] + d[0], j = v[1] + d[1];
                    if (isInfected(i, j)) {
                        infecting.add(encode(i, j));
                    }
                }
            }

            return infecting.size();
        }

        @Override
        public int compareTo(Virus v) {
            return Integer.compare(v.possibleInfection(), possibleInfection());
        }

        private boolean isInfected(int i, int j) {
            int m = infection.length, n = infection[0].length;
            if (i < 0 || i >= m || j < 0 || j >= n)
                return false;
            return infection[i][j] == 0;
        }

        public void add(int i, int j) {
            area.add(encode(i, j));
        }

        public int[] decode(int hash) {
            int n = infection[0].length;
            int j = hash % n;
            int i = (hash - j) / n;

            return new int[] {i, j};
        }

        private int encode(int i, int j) {
            int n = infection[0].length;
            return i * n + j;
        }
    }

    // public void print(int[][] infection, Map<Integer, Virus> cellToVirusBlock) {
    //     int m = infection.length, n = infection[0].length;
    //     System.out.println("[");
    //     for (int i = 0; i < m; i++) {
    //         System.out.print("[");
    //         int j = 0;
    //         for (; j < n - 1; j++) {
    //             if (infection[i][j] == 0 || infection[i][j] == 2)
    //                 System.out.print(infection[i][j] + ",");
    //             else
    //                 System.out.print(cellToVirusBlock.get(i * n + j).id + ",");
    //         }
    //         if (infection[i][j] == 0 || infection[i][j] == 2)
    //                 System.out.print(infection[i][j]);
    //         else
    //             System.out.print(cellToVirusBlock.get(i * n + j).id);
    //         System.out.println("],");
    //     }
    //     System.out.println("]");
    // }
}
```
