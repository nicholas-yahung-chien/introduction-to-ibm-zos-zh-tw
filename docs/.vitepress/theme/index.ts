import DefaultTheme from 'vitepress/theme'
import VideoLesson from './components/VideoLesson.vue'
import CourseManifest from './components/CourseManifest.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VideoLesson', VideoLesson)
    app.component('CourseManifest', CourseManifest)
  }
}

