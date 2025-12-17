import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/blog/test2.html.vue"
const data = JSON.parse("{\"path\":\"/blog/test2.html\",\"title\":\"Test\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Test\",\"date\":\"2025-01-29T00:00:00.000Z\",\"category\":[\"Blog\"],\"tag\":[\"Language\",\"Python\"],\"footer\":false,\"editLink\":false,\"description\":\"Hello world!\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Test\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-01-29T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Hadjshell\\\",\\\"url\\\":\\\"https://github.com/hadjShell\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/test2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Hadjshell's Field\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Test\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Hello world!\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Language\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-01-29T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"blog/test2.md\",\"excerpt\":\"<p>Hello world!</p>\\n\",\"autoDesc\":true}")
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
