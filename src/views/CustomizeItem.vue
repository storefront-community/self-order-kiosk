<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime/>
      <div class="app-header" v-if="hasOptionGroups">
        <div class="rounded-clipping mr-3 flex-shrink-0">
          <ProgressiveImage :image="session.item" :alt="session.item.name" :autoload="true"/>
        </div>
        <SlideUpTransition>
          <div class="m-auto" :key="optionGroup.id">
            {{ optionGroup.title }}
          </div>
        </SlideUpTransition>
        <div class="text-right text-primary font-weight-bold pl-3 ml-auto">
          <Currency :amount="subtotal"/>
        </div>
      </div>
      <div class="app-content m-0" v-if="hasOptionGroups">
        <SlideTransition :direction="getFormDirection">
          <OptionCheckMark :optionGroup="optionGroup" :key="optionGroup.id"/>
        </SlideTransition>
      </div>
      <div class="app-footer" v-if="hasOptionGroups">
        <button type="button" class="btn btn-outline-primary" @click="back">
          <FontAwesome icon="arrow-left"/>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
        <SlideUpTransition>
          <button type="button" class="btn btn-primary ml-auto" @click="next" v-if="formIsValid">
            <span class="mr-3" v-if="isLastPage">{{ $t('add') }}</span>
            <span class="mr-3" v-else>{{ currentPage }} {{ $t('of') }} {{ numberOfPages }}</span>
            <FontAwesome icon="arrow-right"/>
          </button>
          <div class="d-flex flex-column justify-content-center text-primary pr-3 ml-auto" v-else>
            <span>{{ currentPage }} {{ $t('of') }} {{ numberOfPages }}</span>
            <small>{{ $t('choose_an_option') }}</small>
          </div>
        </SlideUpTransition>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import OptionCheckMark from './partials/OptionCheckMark'

export default {
  name: 'customizeItem',
  components: {
    OptionCheckMark
  },
  data() {
    return {
      currentIndex: 0,
      formDirection: 'left'
    }
  },
  async mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    await this.listOptionGroups()
  },
  methods: {
    async listOptionGroups() {
      if (!this.session.item.optionGroups) {
        this.session.item.optionGroups = await this.$api.optionGroups.list(this.session.itemGroup.id)
      }

      if (!this.hasOptionGroups) this.next()
    },
    back() {
      if (this.hasPreviousPage > 0) {
        this.formDirection = 'right'
        this.currentIndex--;
      } else {
        this.$router.push({ name: 'chooseItem' })
      }
    },
    getFormDirection() {
      return this.formDirection
    },
    next() {
      if (!this.formIsValid) return

      if (this.hasNextPage) {
        this.formDirection = 'left'
        this.currentIndex++;
      } else {
        this.session.addItemToOrder()
        this.$router.push({ name: 'orderSummary' })
      }
    },
    restart() {
      this.$router.push({ name: 'start' })
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
      return this.session.item.optionGroups.length
    },
    isLastPage() {
      return this.currentPage === this.numberOfPages
    },
    currentPage() {
      return this.currentIndex + 1
    },
    formIsValid() {
      return !this.session.item.optionGroups.length || this.optionGroup.isValid()
    },
    optionGroup() {
      return this.session.item.optionGroups[this.currentIndex]
    },
    hasOptionGroups() {
      return this.session.item.optionGroups && this.session.item.optionGroups.length
    },
    subtotal() {
      return this.session.item.total()
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
