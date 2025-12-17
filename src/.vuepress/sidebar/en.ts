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
        "array",
        "string",
        "two-pointer",
        "sliding-window",
        "hashtable",
        "stack",
        "queue",
        "prefix-sum",
        "difference-array",
        "interval",
        "tree",
        "bst",
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
