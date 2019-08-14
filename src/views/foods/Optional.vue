<template>
  <SlideTransition direction="left">
    <div>
      <h1 class="display-3 mb-5">{{ optional.title }}</h1>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="option in optional.options" :key="option.id">
          <div class="form-group">
            <label class="radio radio-primary">
              <input type="radio" name="radio-group">
              <span class="check-mark"></span> {{ option.name }}
            </label>
            <div class="pl-4">
              <span class="pl-3" v-if="option.price > 0">
                <small>
                  <sup>$</sup>
                </small>
                {{ option.price | numeral }}
              </span>
              <small class="pl-3 text-muted" v-else>
                no cost
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideTransition>
</template>

<script>
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
    SlideTransition
  }
}
</script>
