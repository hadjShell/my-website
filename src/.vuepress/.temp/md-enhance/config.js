import CodeDemo from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.9_d95227b609b0ace28af1e592e875b578/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.98_markdown-it@14.1.0_sass-embedded@1.93.3_sass@1.9_d95227b609b0ace28af1e592e875b578/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
