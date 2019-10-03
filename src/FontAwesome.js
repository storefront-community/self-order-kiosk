import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faArrowLeft,
  faArrowRight,
  faBackspace,
  faCheck,
  faMinus,
  faPlus,
  faShoppingBag,
  faSyncAlt,
  faTimesCircle,
  faUtensils
} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faBackspace)
library.add(faCheck)
library.add(faMinus)
library.add(faPlus)
library.add(faShoppingBag)
library.add(faSyncAlt)
library.add(faTimesCircle)
library.add(faUtensils)

export default {
  install (Vue) {
    Vue.component('FontAwesome', FontAwesomeIcon)
  }
}
