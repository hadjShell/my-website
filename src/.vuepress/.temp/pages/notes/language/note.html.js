import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/notes/language/note.html.vue"
const data = JSON.parse("{\"path\":\"/notes/language/note.html\",\"title\":\"Scala\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"Scala Introduction Features It’s a high-level programming language It has a concise, readable syntax It’s statically-typed (but feels dynamic) It has an expressive type system I...\"},\"readingTime\":{\"minutes\":3.44,\"words\":1032},\"filePathRelative\":\"notes/language/note.md\",\"autoDesc\":true}")
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
