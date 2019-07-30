<script>
import $ from 'jquery'

export default {
  name: 'idleTime',
  render(createElement) {
    return createElement()
  },
  mounted() {
    this.idleMinutes = 0
    this.interval = setInterval(() => this.incrementIdleMinutes(), 60000)

    $(document).on('mousemove keypress', () => {
      this.idleMinutes = 0
    })
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    incrementIdleMinutes() {
      if (++this.idleMinutes >= 20) {
        this.$emit('timeout')
      }
    }
  }
}
</script>
