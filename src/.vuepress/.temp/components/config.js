import { hasGlobalComponent } from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_9011571cf4b04dafa84d0eacd1d6eea4/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.97_sass-embedded@1.93.3_sass@1.93.3_vuepress@2.0.0-_08a2ff189e8d018a8812af2214ea3a3f/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.97_sass-embedded@1.93.3_sass@1.93.3_vuepress@2.0.0-_08a2ff189e8d018a8812af2214ea3a3f/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_9011571cf4b04dafa84d0eacd1d6eea4/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
