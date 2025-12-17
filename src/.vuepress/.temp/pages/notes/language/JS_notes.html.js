import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/notes/language/JS_notes.html.vue"
const data = JSON.parse("{\"path\":\"/notes/language/JS_notes.html\",\"title\":\"JavaScript Note\",\"lang\":\"en-US\",\"frontmatter\":{\"lAuthor\":\"Jiayuan Zhang\",\"Date\":\"2.27.2023\",\"Version\":1,\"description\":\"JavaScript Note Introduction Three pillars in web development HTML - Content - Nouns CSS - Style and layout - Adjectives JavaScript - The real programming language to build web ...\"},\"readingTime\":{\"minutes\":25.17,\"words\":7552},\"filePathRelative\":\"notes/language/JS_notes.md\",\"autoDesc\":true}")
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
