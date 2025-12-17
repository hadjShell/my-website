import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/books/Clean-code.html.vue"
const data = JSON.parse("{\"path\":\"/books/Clean-code.html\",\"title\":\"Clean Code - Robert Martin\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Clean Code - Robert Martin\",\"category\":[\"Reading\"],\"tag\":[\"Coding Style\"],\"footer\":false,\"editLink\":false,\"description\":\"Why Clean Code is Important? Good programmers are like poets writing their code guided by their \\\"code sense\\\". Guideline This section gives a bunch of guidelines on different sec...\"},\"readingTime\":{\"minutes\":1.53,\"words\":458},\"filePathRelative\":\"books/Clean-code.md\",\"autoDesc\":true}")
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
