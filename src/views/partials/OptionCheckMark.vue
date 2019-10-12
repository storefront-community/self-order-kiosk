<template>
  <SlideTransition direction="left" v-if="hasOptions">
    <div ref="swiper" class="container swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="option in optionGroup.options" :key="option.id">
          <label class="card m-0">
            <div class="card-body d-flex align-items-center">
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
            </div>
          </label>
        </div>
      </div>
    </div>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper';
import { Currency } from '@/components'
import { OptionGroup } from '@/models'
import { SlideTransition } from '@/transitions'

export default {
  name: 'OptionCheckMark',
  props: {
    optionGroup: {
      type: OptionGroup,
      required: true
    }
  },
  components: {
    Currency,
    SlideTransition
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
      if (this.$device.screen.safeArea.height() >= 1280) return 12
      else if (this.$device.screen.safeArea.height() >= 960) return 9
      else if (this.$device.screen.safeArea.height() >= 800) return 8
      else if (this.$device.screen.safeArea.height() >= 640) return 5
      else return 4
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
