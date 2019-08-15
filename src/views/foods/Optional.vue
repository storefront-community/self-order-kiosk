<template>
  <SlideTransition direction="left">
    <div class="d-flex flex-column">
      <h1 class="display-3 mb-5">
        {{ optional.title }}
      </h1>
      <Carousel ref="carousel" :vertical="true" class="flex-grow-1">
        <div class="card mb-3" v-for="option in optional.options" :key="option.id">
          <div class="card-body d-flex">
            <label class="radio radio-primary">
              <input type="radio" name="radio-group">
              <span class="check-mark"></span> {{ option.name }}
            </label>
            <div class="ml-auto text-primary" v-if="option.price > 0">
              <small>
                <sup>$</sup>
              </small>
              {{ option.price | numeral }}
            </div>
            <div class="pl-3 ml-auto text-muted" v-else>
              no cost
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  </SlideTransition>
</template>

<script>
import { Carousel } from '@/components'
import SlideTransition from '@/transitions/SlideTransition'
import { Optional } from '@/models'

export default {
  name: 'optional',
  props: {
    optional: {
      type: Optional,
      required: true
    }
  },
  components: {
    Carousel,
    SlideTransition
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.carousel && this.$refs.carousel.load()
    })
  }
}
</script>
