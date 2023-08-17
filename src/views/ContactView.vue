<script setup>
import data from '@/assets/data.json'
</script>

<script>
import { FORM_STATUS } from '@/helpers/utils'

export default {
  data() {
    return {
      formStatus: FORM_STATUS.IDLE
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault()
      this.formStatus = FORM_STATUS.PROCESSING
      const form = document.getElementById('myForm')
      const formData = new FormData(form)
      const formSpreeEndpoint = 'https://formspree.io/f/mdoqnpjk'
      fetch(formSpreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      })
        .then((response) => {
          if (response.ok) {
            form.reset()
            this.formStatus = FORM_STATUS.SUCCESS
          } else {
            this.formStatus = FORM_STATUS.ERROR
          }
        })
        .catch(() => {
          this.formStatus = FORM_STATUS.ERROR
        })
    },
    statusIs(status) {
      return this.formStatus === status
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <span class="text-4xl md:text-6xl my-12">Contact Us</span>
  </div>

  <div class="flex flex-col md:flex-row md:mt-10 text-white full-width-sm">
    <div
      class="md:w-1/2 px-10 md:px-16 py-20 md:py-24 flex flex-col bg-green-2 gap-8 md:rounded-l-3xl"
    >
      <span class="text-2xl md:text-4xl leading-tight font-bold text-center md:text-left">
        Get in touch. Send us a message today!
      </span>
      <span class="text-center md:text-left max-w-lg mx-auto">
        Every great relationship starts with a conversation. Contact us to start the discussion
        around your organizational needs.
      </span>
      <div class="grid grid-cols-[5%_95%] max-w-md mx-auto gap-4 items-center">
        <div class="flex justify-center">
          <font-awesome-icon icon="fa-solid fa-building" />
        </div>
        <a
          :aria-label="`${data.address}`"
          :href="`${data.mapLink}`"
          class="hover:bg-transparent text-white"
        >
          {{ data.address }}
        </a>
        <div class="flex justify-center">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </div>
        <a
          :aria-label="`${data.email}`"
          :href="`mailto:${data.email}`"
          class="hover:bg-transparent text-white"
        >
          {{ data.email }}
        </a>
        <div class="flex justify-center">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </div>
        <a
          :aria-label="`${data.phone}`"
          :href="`tel:${data.phone}`"
          class="hover:bg-transparent text-white"
        >
          {{ data.phone }}
        </a>
        <div class="flex justify-center">
          <font-awesome-icon icon="fa-brands fa-facebook" />
        </div>
        <a
          :aria-label="`${data.facebook.slice(data.facebook.indexOf('.') + 1)}`"
          :href="`${data.facebook}`"
          class="text-white hover:text-white hover:bg-transparent"
        >
          {{ data.facebook.slice(data.facebook.indexOf('.') + 1) }}
        </a>
        <div class="flex justify-center">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </div>
        <a
          :aria-label="`${data.linkedin.slice(data.linkedin.indexOf('.') + 1)}`"
          :href="`${data.linkedin}`"
          class="text-white hover:text-white hover:bg-transparent"
        >
          {{ data.linkedin.slice(data.linkedin.indexOf('.') + 1) }}
        </a>
      </div>
    </div>
    <div class="flex flex-col md:w-1/2 bg-green-1 md:rounded-r-3xl">
      <form
        @submit="submitForm"
        id="myForm"
        class="flex-1 flex flex-col gap-8 items-center justify-center pt-20 pb-8 md:pt-16 lg:pt-20 px-20 md:px-16 lg:px-20 text-black"
      >
        <div class="md:w-full flex flex-col lg:flex-row gap-8">
          <input
            required
            class="h-16 lg:w-1/2 rounded-md p-4"
            type="text"
            name="First Name"
            placeholder="First Name"
          />
          <input
            required
            class="h-16 lg:w-1/2 rounded-md p-4"
            type="text"
            name="Last Name"
            placeholder="Last Name"
          />
        </div>
        <div class="md:w-full flex flex-col lg:flex-row gap-8">
          <input
            required
            class="h-16 lg:w-1/2 rounded-md p-4"
            type="email"
            name="Email"
            placeholder="Email Address"
          />
          <input
            required
            class="h-16 lg:w-1/2 rounded-md p-4"
            type="tel"
            name="Phone"
            placeholder="Phone Number"
          />
        </div>
        <textarea
          required
          class="h-32 md:w-full rounded-md p-4"
          name="Message"
          placeholder="Message"
        />
        <button
          aria-label="Send Message"
          class="w-60 self-center text-lg capitalize bg-green-3 text-white px-10 py-5 rounded-xl transition-transform hover:scale-105 flex gap-2 justify-center"
          type="submit"
        >
          <div v-if="statusIs(FORM_STATUS.PROCESSING)">
            <font-awesome-icon icon="fa-solid fa-spinner" class="animate-spin" />
          </div>
          Send Message
        </button>
        <span v-if="statusIs(FORM_STATUS.SUCCESS)" class="text-white text-center">
          Thanks! We'll reach out to you soon!
        </span>
        <span
          v-else-if="statusIs(FORM_STATUS.ERROR)"
          class="max-w-72 text-white text-center"
          style="color: #ff999c"
        >
          Sorry! There was an error sending the message. Please try again later.
        </span>
        <span v-else>
          <!-- Retain some space -->
        </span>
      </form>
    </div>
  </div>

  <div class="flex my-20 md:mx-28 gap-12 text-green-1-darker">
    <iframe
      :src="`${data.mapIFrame}`"
      title="Location of ReThink Limited on Google Maps"
      width="100%"
      height="480"
      class="rounded-2xl"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
