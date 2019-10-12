<script>
export default {
  name: 'idleTime',
  props: {
    seconds: {
      type: Number,
      default: 60
    }
  },
  render(createElement) {
    return createElement()
  },
  mounted() {
    this.idleSeconds = 0
    this.interval = setInterval(() => this.incrementIdleMinutes(), 1000)

    document.addEventListener('keypress', this.reset)
    document.addEventListener('mousemove', this.reset)
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    incrementIdleMinutes() {
      if (++this.idleSeconds >= this.seconds) {
        this.$router.push({ name: 'newOrder' })
      }
    },
    reset() {
      this.idleSeconds = 0
    }
  }
}
</script>
