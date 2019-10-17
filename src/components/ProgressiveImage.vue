<template>
  <span class="img-progressive" :class="{ 'loading': loading }">
    <svg>
      <filter id="svgBlurFilter">
        <feGaussianBlur stdDeviation="5"></feGaussianBlur>
        <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"></feColorMatrix>
        <feComposite in2="SourceGraphic" operator="in"></feComposite>
      </filter>
    </svg>
    <img :src="thumbnail" class="thumbnail" @load="preload">
    <img :src="standard" class="original" v-if="!preloading">
  </span>
</template>

<script>
import { ItemGroup, Item } from '@/models'

export default {
  name: 'progressiveImage',
  props: {
    autoload: {
      type: Boolean,
      default: () => false
    },
    image: {
      type: [ItemGroup, Item],
      required: true
    }
  },
  data() {
    return {
      preloading: true,
      loading: true
    }
  },
  methods: {
    preload() {
      this.preloading = false
      this.$emit('preload')

      if (this.autoload) {
        this.load()
      }
    },
    load() {
      const image = new Image()
      image.onload = () => this.loading = false
      image.src = this.standard
    }
  },
  computed: {
    gallery() {
      if (this.image instanceof ItemGroup) return 'item-group'
      if (this.image instanceof Item) return 'item'
      return ''
    },
    host() {
      return `${process.env.VUE_APP_API_BASE_URL}${this.$api.virtualPath}/gallery`
    },
    imagePrefix() {
      return `${this.host}/${this.image.id}.${this.gallery}`
    },
    standard() {
      return `${this.imagePrefix}.standard.jpg`
    },
    thumbnail() {
      return `${this.imagePrefix}.thumbnail.jpg`
    }
  }
}
</script>
