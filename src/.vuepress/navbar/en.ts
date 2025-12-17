import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Programming Notes",
    link: "/notes/",
    icon: "solar:notebook-bold",
  },
  {
    text: "Leetcode Crackbook",
    link: "/leetcode/",
    icon: "devicon:leetcode",
  },
  {
    text: "Blogs",
    link: "/blog/",
    icon: "icon-park-solid:mirror-one",
  },
  {
    text: "Time to Read A Book",
    link: "/books/",
    icon: "entypo:book",
  },
]);
