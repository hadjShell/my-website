import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/tech-blog/test.html.vue"
const data = JSON.parse("{\"path\":\"/tech-blog/test.html\",\"title\":\"Java Notes\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Java Notes\",\"icon\":\"devicon:java\",\"category\":[\"Note\"],\"tag\":[\"Language\",\"Java\"],\"footer\":false,\"editLink\":false,\"article\":true,\"description\":\"test\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Java Notes\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Hadjshell\\\",\\\"url\\\":\\\"https://github.com/hadjShell\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/tech-blog/test.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Hadjshell's Field\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java Notes\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"test\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Language\"}]]},\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"tech-blog/test.md\",\"excerpt\":\"<p>test</p>\\n\",\"autoDesc\":true}")
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
