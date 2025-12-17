import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_@vuepress+plugin-search@2.0.0-rc.121_vuepress@2.0.0-rc._1c9cfe0e8e6f1f6fa6d4160963cb9d3e/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0_2614c26ac8076817d1890cb726d8dcb3/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_@vuepress+plugin-search@2.0.0-rc.121_vuepress@2.0.0-rc._1c9cfe0e8e6f1f6fa6d4160963cb9d3e/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_@vuepress+plugin-search@2.0.0-rc.121_vuepress@2.0.0-rc._1c9cfe0e8e6f1f6fa6d4160963cb9d3e/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";

import "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_9011571cf4b04dafa84d0eacd1d6eea4/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_9011571cf4b04dafa84d0eacd1d6eea4/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.118_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_9011571cf4b04dafa84d0eacd1d6eea4/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.98_@vuepress+plugin-search@2.0.0-rc.121_vuepress@2.0.0-rc._1c9cfe0e8e6f1f6fa6d4160963cb9d3e/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
