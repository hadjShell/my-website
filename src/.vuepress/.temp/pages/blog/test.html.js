import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/blog/test.html.vue"
const data = JSON.parse("{\"path\":\"/blog/test.html\",\"title\":\"Hello world!\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Hello world!\",\"date\":\"2020-01-03T00:00:00.000Z\",\"footer\":false,\"editLink\":false,\"description\":\"Hello world!\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Hello world!\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-01-03T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Hadjshell\\\",\\\"url\\\":\\\"https://github.com/hadjShell\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/blog/test.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Hadjshell's Field\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Hello world!\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Hello world!\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-01-03T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"blog/test.md\",\"excerpt\":\"\",\"autoDesc\":true}")
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
