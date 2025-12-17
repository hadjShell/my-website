import comp from "/Users/hadjshell/Documents/OneDrive/Personal-Projects/myblog/my-docs/src/.vuepress/.temp/pages/notes/framework/note.html.vue"
const data = JSON.parse("{\"path\":\"/notes/framework/note.html\",\"title\":\"React.js Note\",\"lang\":\"en-US\",\"frontmatter\":{\"Author\":\"Jiayuan Zhang\",\"Date\":\"04.2023\",\"Version\":1,\"description\":\"React.js Note Intro React is a JavaScript library for rendering UI Components React is all about Components A component is a piece of the UI that has its own logic and appearanc...\"},\"readingTime\":{\"minutes\":25.56,\"words\":7669},\"filePathRelative\":\"notes/framework/note.md\",\"autoDesc\":true}")
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
