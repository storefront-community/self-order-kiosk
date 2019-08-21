<template>
  <div class="app-body" v-if="hasOptionals">
    <div class="app-header">
      <div class="container d-flex align-items-center">
        <div class="rounded-clipping mr-3">
          <img :src="item.imageUrl">
        </div>
        <h1 class="display-3 text-right">
          {{ item.name }}<br>
          <small class="text-primary">
            <small>
              <sup>$</sup>
            </small>
            {{ item.price | numeral }}
          </small>
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <SlideTransition :direction="slide">
          <Optional :optional="optional" :key="optional.id" />
        </SlideTransition>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          Back
        </button>
        <button type="button" class="btn btn-primary btn-lg ml-auto" @click="next">
          <span class="mr-3">
            {{ currentPage }} of {{ numberOfPages }}
          </span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Optional from './Optional'
import SlideTransition from '@/transitions/SlideTransition'
import waitTransition from '@/hacks/waitTransition'

export default {
  name: 'customizeFood',
  components: {
    Optional,
    SlideTransition
  },
  async mounted() {
    if (!this.$session.initialized) return

    this.optionals = await this.$api.optionals.list(this.$session.category.id)
    this.hasOptionals = !!this.optionals.length

    if (!this.hasOptionals) {
      waitTransition(() => this.next())
    }
  },
  data() {
    return {
      hasOptionals: false,
      optionals: [],
      currentIndex: 0,
      slide: 'left'
    }
  },
  methods: {
    addItemToOrder() {
      this.$router.push({ name: 'orderSummary' })
    },
    back() {
      if (this.hasPreviousPage > 0) {
        this.currentIndex--;
      } else {
        this.$router.push({ name: 'chooseFood' })
      }
    },
    next() {
      if (this.hasNextPage) {
        this.currentIndex++;
      } else {
        // TODO: Add item to order
        this.$router.push({ name: 'orderSummary' })
      }
    }
  },
  computed: {
    hasPreviousPage() {
      return this.currentIndex > 0
    },
    hasNextPage() {
      return this.currentIndex < this.optionals.length - 1
    },
    numberOfPages() {
      return this.optionals.length
    },
    currentPage() {
      return this.currentIndex + 1
    },
    optional() {
      return this.optionals[this.currentIndex]
    },
    item() {
      return this.$session.item
    }
  },
  watch: {
    currentIndex(to, from) {
      const foward = to > from
      this.slide = foward ? 'left' : 'right'
    }
  }
}
</script>
