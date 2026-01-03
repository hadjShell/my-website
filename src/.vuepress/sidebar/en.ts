import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/notes/": [
    "",
    {
      text: "Language",
      icon: "ph:binary-bold",
      prefix: "language/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Framework",
      icon: "ph:toolbox-fill",
      prefix: "framework/",
      collapsible: true,
      children: "structure",
    },
    "resource/",
  ],

  "/leetcode/": [
    {
      text: "Leetcode Crackbook",
      icon: "devicon:leetcode",
      collapsible: true,
      children: [
        {
          text: "Array",
          collapsible: true,
          prefix: "array/",
          children: "structure",
        },
        "string",
        {
          text: "Two Pointer",
          collapsible: true,
          prefix: "two-pointer/",
          children: "structure",
        },
        {
          text: "Sliding Window",
          collapsible: true,
          prefix: "sliding-window/",
          children: "structure",
        },
        {
          text: "Hash Table",
          collapsible: true,
          prefix: "hashtable/",
          children: "structure",
        },
        {
          text: "Stack",
          collapsible: true,
          prefix: "stack/",
          children: [
            "concept",
            {
              text: "Problems",
              collapsible: true,
              prefix: "problems/",
              children: "structure",
            },
            {
              text: "⭐️Monotonic Stack",
              collapsible: true,
              prefix: "monostack/",
              children: "structure",
            },
          ],
        },
        {
          text: "Queue",
          collapsible: true,
          prefix: "queue/",
          children: [
            "concept",
            "problems",
            {
              text: "⭐️Monotonic Queue",
              collapsible: true,
              prefix: "monoqueue/",
              children: "structure",
            },
          ],
        },
        {
          text: "Prefix Sum",
          collapsible: true,
          prefix: "prefix-sum/",
          children: "structure",
        },
        {
          text: "Difference Array",
          collapsible: true,
          prefix: "difference-array/",
          children: "structure",
        },
        {
          text: "Interval",
          collapsible: true,
          prefix: "interval/",
          children: "structure",
        },
        {
          text: "Binary Tree",
          collapsible: true,
          prefix: "tree/",
          children: "structure",
        },
        {
          text: "Binary Search Tree",
          collapsible: true,
          prefix: "bst/",
          children: "structure",
        },
        {
          text: "Graph",
          collapsible: true,
          prefix: "graph/",
          children: [
            "concept",
            {
              text: "⭐️Bipartite Graph",
              collapsible: true,
              prefix: "bipartition/",
              children: "structure",
            },
            {
              text: "⭐️Topological Sort",
              collapsible: true,
              prefix: "topological-order/",
              children: "structure",
            },
            {
              text: "⭐️Eulerian Graph",
              collapsible: true,
              prefix: "eulerian-graph/",
              children: "structure",
            },
            {
              text: "⭐️Union Find",
              collapsible: true,
              prefix: "union-find/",
              children: "structure",
            },
            {
              text: "⭐️Shortest Path Problem",
              collapsible: true,
              prefix: "shortest-path/",
              children: [
                "concept",
                {
                  text: "Dijkstra's Algorithm",
                  collapsible: true,
                  prefix: "dijkstra/",
                  children: "structure",
                },
              ],
            },
            {
              text: "⭐️Minimum Spanning Tree",
              collapsible: true,
              prefix: "mst/",
              children: [
                "concept",
                {
                  text: "Kruskal's Algorithm",
                  collapsible: true,
                  prefix: "kruskal/",
                  children: "structure",
                },
                {
                  text: "Prim's Algorithm",
                  collapsible: true,
                  prefix: "prim/",
                  children: "structure",
                },
              ],
            },
          ],
        },
        {
          text: "Backtracking",
          collapsible: true,
          prefix: "backtrack/",
          children: [
            "concept",
            {
              text: "⭐️Permutation & Combination & Subset",
              collapsible: true,
              prefix: "per-com-sub/",
              children: "structure",
            },
            "sudoku",
            "n-queen",
          ],
        },
        "recursion",
        "math",
        "bit",
      ],
    },
  ],

  "/blog/": "structure",

  "/books/": [
    "",
    {
      text: "Craftsmanship",
      icon: "mingcute:vibe-coding-fill",
      prefix: "coding/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Mindset",
      icon: "tabler:bulb-filled",
      prefix: "mindset/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Economy & Finance",
      icon: "tabler:coin-filled",
      prefix: "economy/",
      collapsible: true,
      children: "structure",
    },
  ],

  "/": [""],
});
