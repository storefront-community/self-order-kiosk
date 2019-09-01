<script>
import $ from 'jquery'

export default {
  name: 'idleTime',
  render(createElement) {
    return createElement()
  },
  mounted() {
    this.idleSeconds = 0
    this.interval = setInterval(() => this.incrementIdleMinutes(), 1000)

    $(document).on('mousemove keypress', () => {
      this.idleSeconds = 0
    })
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    incrementIdleMinutes() {
      if (++this.idleSeconds >= 60) {
        this.idleSeconds = 0
        this.$emit('timeout')
      }
    }
  }
}
</script>
