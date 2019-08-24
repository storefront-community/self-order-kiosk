<template>
  <form class="app-body" @submit.prevent="next" v-if="hasOptionals">
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
          <Optional :optional="currentOptional" :key="currentOptional.id"/>
        </SlideTransition>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          Back
        </button>
        <SlideUpTransition>
          <button type="submit" class="btn btn-primary btn-lg ml-auto" v-if="currentOptional.isValid()">
            <span class="mr-3" v-if="isLastPage">Add</span>
            <span class="mr-3" v-else>{{ currentPage }} of {{ numberOfPages }}</span>
            <i class="fa fa-arrow-right"></i>
          </button>
          <p class="d-flex flex-column justify-content-center text-primary m-0"  v-else>
            <span>{{ currentPage }} of {{ numberOfPages }}</span>
            <small>Please choose an option</small>
          </p>
        </SlideUpTransition>
      </div>
    </div>
  </form>
</template>

<script>
import Optional from './partials/Optional'
import { SlideTransition, SlideUpTransition } from '@/transitions'
import waitTransition from '@/hacks/waitTransition'

export default {
  name: 'customizeFood',
  components: {
    Optional,
    SlideTransition,
    SlideUpTransition
  },
  async mounted() {
    if (!this.$session.started) return

    this.item.optionals = await this.$api.optionals.list(this.$session.category.id)

    if (!this.hasOptionals) {
      waitTransition(() => this.next())
    }
  },
  data() {
    return {
      item: this.$session.item,
      currentIndex: 0,
      slide: 'left'
    }
  },
  methods: {
    back() {
      if (this.hasPreviousPage > 0) {
        this.currentIndex--;
      } else {
        this.$router.push({ name: 'chooseFood' })
      }
    },
    next() {
      if (!this.currentOptional.isValid()) return

      if (this.hasNextPage) {
        this.currentIndex++;
      } else {
        this.$session.addItemToOrder()
        this.$router.push({ name: 'orderSummary' })
      }
    }
  },
  computed: {
    hasPreviousPage() {
      return this.currentIndex > 0
    },
    hasNextPage() {
      return this.currentPage < this.numberOfPages
    },
    numberOfPages() {
      return this.item.optionals.length
    },
    isLastPage() {
      return this.currentPage === this.numberOfPages
    },
    currentPage() {
      return this.currentIndex + 1
    },
    currentOptional() {
      return this.item.optionals[this.currentIndex]
    },
    hasOptionals() {
      return this.$session.started && this.item.optionals.length
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
