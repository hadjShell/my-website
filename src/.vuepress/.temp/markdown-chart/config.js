import { defineClientConfig } from "vuepress/client";
import Mermaid from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.118_markdown-it@14.1.0_mermaid@11.12.2_vuepres_5d440d577acc803add5613e3861c2c87/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
