<template>
  <form class="app-body" @submit.prevent="next" v-if="hasOptionals">
    <div class="app-header">
      <div class="container d-block d-md-flex align-items-center">
        <div class="d-flex align-items-center">
          <div class="rounded-clipping mr-3 flex-shrink-0">
            <img :src="item.imageUrl">
          </div>
          <SlideUpTransition :direction="slide">
            <span :key="currentOptional.id">
              {{ currentOptional.title }}
            </span>
          </SlideUpTransition>
        </div>
        <div class="text-right text-primary font-weight-bold ml-auto">
          <Currency :amount="subtotal"/>
        </div>
      </div>
    </div>
    <div class="app-content">
      <SlideTransition :direction="slide">
        <OptionCheckMark
          :options="currentOptional.options"
          :multichoice="currentOptional.multichoice"
          :key="currentOptional.id"/>
      </SlideTransition>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary mr-auto px-md-5 py-md-4 text-nowrap" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
        <SlideUpTransition>
          <button type="submit" class="btn btn-primary ml-auto px-md-5 py-md-4 text-nowrap" v-if="formIsValid">
            <span class="mr-3" v-if="isLastPage">{{ $t('add') }}</span>
            <span class="mr-3" v-else>{{ currentPage }} {{ $t('of') }} {{ numberOfPages }}</span>
            <i class="fa fa-arrow-right"></i>
          </button>
          <div class="d-flex flex-column justify-content-center text-primary px-2"  v-else>
            <span>{{ currentPage }} {{ $t('of') }} {{ numberOfPages }}</span>
            <small>{{ $t('choose_an_option') }}</small>
          </div>
        </SlideUpTransition>
      </div>
    </div>
  </form>
</template>

<script>
import { Currency } from '@/components'
import { SlideTransition, SlideUpTransition } from '@/transitions'
import OptionCheckMark from './partials/OptionCheckMark'
import waitTransition from '@/hacks/waitTransition'

export default {
  name: 'customizeItem',
  components: {
    Currency,
    OptionCheckMark,
    SlideTransition,
    SlideUpTransition
  },
  async mounted() {
    if (!this.$session.started) return

    this.item.optionals = await this.$api.optionals.list(this.$session.itemGroup.id)

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
        this.$router.push({ name: 'chooseItem' })
      }
    },
    next() {
      if (!this.formIsValid) return

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
    formIsValid() {
      return !this.item.optionals.length || this.currentOptional.isValid()
    },
    currentOptional() {
      return this.item.optionals[this.currentIndex]
    },
    hasOptionals() {
      return this.$session.started && this.item.optionals.length
    },
    subtotal() {
      return this.item.total()
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

<i18n>
{
  "br": {
    "add": "Adicionar",
    "back": "Voltar",
    "of": "de",
    "choose_an_option": "Escolha uma opção"
  },
  "en": {
    "add": "Add",
    "back": "Back",
    "of": "of",
    "choose_an_option": "Choose an option"
  }
}
</i18n>
