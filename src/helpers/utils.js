import router from '@/router'

export function goTo(url) {
  window.scrollTo(0, 0)
  router.push(url)
}

export const FORM_STATUS = {
  IDLE: 'idle',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact'
}
