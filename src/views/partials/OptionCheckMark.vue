<template>
  <SlideTransition direction="left" v-if="hasOptions">
    <div ref="swiper" class="swiper-container">
      <div class="swiper-wrapper">
        <label class="swiper-slide d-flex align-items-center border-bottom p-3 p-lg-5 m-0"
          v-for="option in optionGroup.options" :key="option.id">
            <div class="checkbox checkbox-primary" v-if="optionGroup.multichoice">
              <input type="checkbox" v-model="option.checked">
              <span class="check-mark"></span> {{ option.name }}
            </div>
            <div class="radio radio-primary" v-else>
              <input type="checkbox" v-model="option.checked" @change="toggle($event, option)">
              <span class="check-mark"></span> {{ option.name }}
            </div>
            <div class="ml-auto text-primary" v-if="option.price > 0">
              <Currency :amount="option.price"/>
            </div>
            <div class="pl-3 ml-auto text-muted" v-else>
              {{ $t('no_cost') }}
            </div>
        </label>
      </div>
    </div>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper';
import { OptionGroup } from '@/models'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'OptionCheckMark',
  props: {
    optionGroup: {
      type: OptionGroup,
      required: true
    }
  },
  async mounted() {
    if (!this.optionGroup.options) {
      this.optionGroup.options = await this.$api.options.list(this.optionGroup.id)
    }

    this.$nextTick(() => this.initSwipeGesture())
  },
  methods: {
    initSwipeGesture() {
      if (!this.$refs.swiper) return

      const swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: this.slidesPerView(),
        direction: 'vertical'
      })

      window.addEventListener('resize', () => {
        swiper.params.slidesPerView = this.slidesPerView()
        swiper.update()
      })
    },
    slidesPerView() {
      if (this.$device.screen.safeArea.height() >= breakpoints[1280]) return 12.5
      else if (this.$device.screen.safeArea.height() >= breakpoints[960]) return 9.5
      else if (this.$device.screen.safeArea.height() >= breakpoints[800]) return 8.5
      else if (this.$device.screen.safeArea.height() >= breakpoints[600]) return 5.5
      else return 4.5
    },
    toggle($event, current) {
      this.optionGroup.options
        .filter(option => option.id !== current.id)
        .forEach(option => option.checked = false)

      $event.target.checked = true
      current.checked = true
    }
  },
  computed: {
    hasOptions() {
      return !!this.optionGroup.options
    }
  }
}
</script>

<i18n>
{
  "br": {
    "no_cost": "sem custo"
  },
  "en": {
    "no_cost": "no cost"
  }
}
</i18n>
