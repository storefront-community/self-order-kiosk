<template>
  <SlideTransition direction="left">
    <div ref="swiper" class="container swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide card" v-for="option in options" :key="option.id">
          <div class="card-body d-flex align-items-center">
            <label class="checkbox checkbox-primary" v-if="multichoice">
              <input type="checkbox" v-model="option.checked">
              <span class="check-mark"></span> {{ option.name }}
            </label>
            <label class="radio radio-primary" v-else>
              <input type="checkbox" v-model="option.checked" @change="toggle($event, option)">
              <span class="check-mark"></span> {{ option.name }}
            </label>
            <div class="ml-auto text-primary" v-if="option.price > 0">
              <Currency :amount="option.price"/>
            </div>
            <div class="pl-3 ml-auto text-muted" v-else>
              {{ $t('no_cost') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper';
import { Currency } from '@/components'
import { SlideTransition } from '@/transitions'

export default {
  name: 'OptionCheckMark',
  props: {
    options: {
      type: Array,
      required: true
    },
    multichoice: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Currency,
    SlideTransition
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(this.$refs.swiper, {
        slidesPerView: 5,
        spaceBetween: 20,
        direction: 'vertical'
      })
    })
  },
  methods: {
    toggle($event, current) {
      this.options
        .filter(option => option.id !== current.id)
        .forEach(option => option.checked = false)

      $event.target.checked = true
      current.checked = true
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
