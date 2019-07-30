<template>
  <div class="menu-board" :class="{ 'loading': loading }" @click="exitMenuBoard">
    <Loader v-if="loading"/>
    <RandomTransition v-else>
      <MenuBoardPage
        v-for="page in pages"
        v-show="page.id == currentPage.id"
        :content="page"
        :key="page.id"/>
    </RandomTransition>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import MenuBoardPage from './MenuBoardPage'
import RandomTransition from '@/transitions/RandomTransition'

export default {
  name: 'menuBoard',
  data() {
    return {
      loading: true,
      currentIndex: 0,
      currentPage: null,
      pages: [
        { id: 1, imageUrl: '/img/menu-board/beef-bottle-bread.jpg', loading: true },
        { id: 2, imageUrl: '/img/menu-board/beverage-chilled-citrus.jpg', loading: true },
        { id: 3, imageUrl: '/img/menu-board/delicious-dinner-fast-food.jpg', loading: true }
      ]
    }
  },
  mounted() {
    this.pages.forEach(page => {
      const image = new Image();
      image.onload = () => this.pageLoaded(page)
      image.src = page.imageUrl
    });
  },
  destroyed() {
    this.stop()
  },
  methods: {
    pageLoaded(page) {
      page.loading = false
      this.loading = this.pages.map(p => p.loading).includes(true)

      if (this.loading) return

      this.currentPage = this.pages[this.currentIndex]
      this.start()
    },
    exitMenuBoard() {
      this.stop()
      this.$router.push({ name: 'root' })
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
    MenuBoardPage,
    RandomTransition
  },
  computed: {
    contentId () {
      return parseInt(this.$route.params.contentId)
    }
  }
}
</script>
