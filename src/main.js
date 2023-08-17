import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope as farEnvelope,
  faComments,
  faHandshake as farHandshake
} from '@fortawesome/free-regular-svg-icons'
import {
  faPhone,
  faLocationDot,
  faEnvelope as fasEnvelope,
  faBuilding,
  faMinimize,
  faBars,
  faTimes,
  faComputer,
  faCircleDollarToSlot,
  faHandshake as fasHandshake,
  faPlaneArrival,
  faCartFlatbed,
  faBuildingShield,
  faUserGraduate,
  faFileCircleCheck,
  faPenRuler,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

library.add(
  farEnvelope,
  faComments,
  farHandshake,
  faPhone,
  faLocationDot,
  fasEnvelope,
  faBuilding,
  faMinimize,
  faBars,
  faTimes,
  faComputer,
  faCircleDollarToSlot,
  fasHandshake,
  faPlaneArrival,
  faCartFlatbed,
  faBuildingShield,
  faUserGraduate,
  faFileCircleCheck,
  faPenRuler,
  faSpinner,
  faFacebook,
  faFacebookF,
  faLinkedin,
  faLinkedinIn
)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
