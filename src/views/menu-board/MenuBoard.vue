<template>
  <div class="menu-board" :class="{ 'loading': loading }" @click="exitMenuBoard">
    <MenuBoardHeader v-if="!loading"/>
    <Loader v-if="loading"/>
    <RandomTransition v-else>
      <MenuBoardPage
        v-for="page in pages"
        v-show="page.id === currentPage.id"
        :page="page"
        :key="page.id"/>
    </RandomTransition>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import MenuBoardHeader from './MenuBoardHeader'
import MenuBoardPage from './MenuBoardPage'
import RandomTransition from '@/transitions/RandomTransition'

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
      const image = new Image();
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
      this.interval = setInterval(() => this.nextPage(), 5000)
    },
    stop() {
      clearInterval(this.interval)
    }
  },
  components: {
    Loader,
    MenuBoardHeader,
    MenuBoardPage,
    RandomTransition
  }
}
</script>
