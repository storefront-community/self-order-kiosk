<template>
  <div class="menu-board">
    <RandomTransition>
      <MenuBoardContent :id="contentId" :key="contentId"/>
    </RandomTransition>
  </div>
</template>

<script>
import MenuBoardContent from './MenuBoardContent'
import RandomTransition from '@/transitions/RandomTransition'

export default {
  name: 'menuBoard',
  mounted() {
    this.interval = setInterval(() => this.nextContent(), 5000);
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    nextContent() {
      const params = { contentId: this.contentId + 1 }
      this.$router.push({ name: 'menuBoard', params: params })
    }
  },
  components: {
    MenuBoardContent,
    RandomTransition
  },
  computed: {
    contentId () {
      return parseInt(this.$route.params.contentId)
    }
  }
}
</script>
