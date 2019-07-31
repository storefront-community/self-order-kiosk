<template>
  <div class="menu-board" :class="{ 'loading': loading }" @click="exitMenuBoard">
    <Loader v-if="loading"/>
    <div v-else>
      <MenuBoardHeader/>
      <div class="text-right" v-for="page in pages" :key="page.id">
        <RandomTransition>
          <MenuBoardBackground
            v-show="page.id === currentPage.id"
            :page="page"
            :key="page.id"/>
        </RandomTransition>
        <RandomTransition :transitions="contentTransictions" :delayEnter="1">
          <MenuBoardContent
            v-show="page.id === currentPage.id"
            :page="page"
            :key="page.id"/>
        </RandomTransition>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import MenuBoardHeader from './MenuBoardHeader'
import MenuBoardBackground from './MenuBoardBackground'
import MenuBoardContent from './MenuBoardContent'
import { RandomTransition, FadeTransition, FlipXTransition, FlipYTransition } from '@/transitions'

export default {
  name: 'menuBoard',
  data() {
    return {
      loading: true,
      currentIndex: 0,
      currentPage: null,
      pages: []
    }
  },
  async mounted() {
    this.pages = await this.$api.menuBoard.pages()

    this.pages = this.pages.map(page => {
      page.loading = true
      return page
    })

    this.pages.forEach(page => {
      const image = new Image()
      image.onload = () => this.pageLoaded(page)
      image.src = page.background
    });
  },
  destroyed() {
    this.stop()
  },
  methods: {
    exitMenuBoard() {
      this.stop()
      this.$router.push({ name: 'root' })
    },
    pageLoaded(page) {
      page.loading = false
      this.loading = this.pages.map(p => p.loading).includes(true)

      if (this.loading) return

      this.currentPage = this.pages[this.currentIndex]
      this.start()
    },
    nextPage() {
      this.currentIndex++

      if (this.currentIndex >= this.pages.length) {
        this.currentIndex = 0
      }

      this.currentPage = this.pages[this.currentIndex]
    },
    start() {
      this.interval = setInterval(() => this.nextPage(), 7000)
    },
    stop() {
      clearInterval(this.interval)
    }
  },
  computed: {
    contentTransictions() {
      return [FadeTransition, FlipXTransition, FlipYTransition]
    }
  },
  components: {
    Loader,
    MenuBoardHeader,
    MenuBoardBackground,
    MenuBoardContent,
    RandomTransition
  }
}
</script>
