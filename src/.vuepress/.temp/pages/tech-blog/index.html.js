import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/tech-blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/tech-blog/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"heroImage\":\"/logo.png\",\"heroAlt\":\"Hadjshell's logo\",\"heroText\":\"Tech Blogs\",\"tagline\":\"Hand and Mind\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/6-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"projects\":[{\"name\":\"a\",\"link\":\"\",\"desc\":\"aaa\",\"icon\":\"fluent:pen-24-filled\"}],\"copyright\":\"CC 4.0 Licensed, Copyright © 2020-present Hadjshell\",\"footer\":\"Theme by <a href=\\\"https://theme-hope.vuejs.press/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a>\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/tech-blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Hadjshell's Field\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0.22,\"words\":66},\"filePathRelative\":\"tech-blog/README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
