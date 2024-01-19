<script setup>
import data from '../src/assets/data.json'
</script>

<script>
export default {
  data() {
    return {
      sidebarShown: false
    }
  }
}
</script>

<template>
  <header class="flex text-base justify-between items-center">
    <RouterLink to="/" class="hover:bg-transparent">
      <img
        alt="logo of ReThink Limited"
        src="./assets/images/ReThink-Logo.svg"
        class="w-40 md:w-48"
      />
    </RouterLink>
    <button aria-label="Open Menu" class="md:hidden text-2xl mr-4" @click="sidebarShown = true">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
    <nav class="hidden flex-1 md:flex md:gap-1 justify-end items-center">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <a
        aria-label="Get Quote"
        :href="`mailto:${data.email}`"
        target="_blank"
        style="cursor: pointer"
      >
        Get Quote
        <font-awesome-icon icon="fa-regular fa-envelope" />
      </a>
    </nav>
  </header>

  <div
    :class="[
      'fixed z-10 top-0 bottom-0 right-0 left-0 md:hidden transition transform duration-300',
      sidebarShown ? 'translate-x-0' : 'translate-x-full'
    ]"
    @gotpointercapture="sidebarShown = false"
  >
    <div class="ml-10 left-0 py-10 h-full rounded-l-xl flex flex-col justify-between bg-green-1">
      <button
        aria-label="Close Menu"
        class="lg:hidden mt-4 mr-2 pr-10 text-4xl self-end text-white"
        @click="sidebarShown = false"
      >
        <font-awesome-icon icon="fa-solid fa-times" />
      </button>
      <nav class="sidebar flex flex-col justify-end gap-2 text-2xl">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <a aria-label="Get Quote" :href="`mailto:${data.email}`">
          Get Quote
          <font-awesome-icon icon="fa-regular fa-envelope" />
        </a>
      </nav>
    </div>
  </div>

  <RouterView />
  <div class="flex flex-col full-width">
    <div class="bg-green-2 lg:px-20 py-20 text-white">
      <div class="footer">
        <div class="text-center text-4xl font-bold mb-16">Contact Us</div>
        <div class="flex flex-col md:flex-row gap-16">
          <div
            class="px-4 self-center md:w-1/2 grid grid-cols-[25%_60%] gap-x-4 gap-y-4 place-content-center md:place-content-start"
          >
            <div><span class="font-bold">Address</span>:</div>
            <a
              :aria-label="`${data.address}`"
              :href="`${data.mapLink}`"
              class="hover:bg-transparent text-white"
            >
              {{ data.address }}
            </a>
            <div><span class="font-bold">Email</span>:</div>
            <a
              :aria-label="`${data.email}`"
              :href="`mailto:${data.email}`"
              class="hover:bg-transparent text-white"
            >
              {{ data.email }}
            </a>
            <div><span class="font-bold">Phone</span>:</div>
            <a
              :aria-label="`${data.phone}`"
              :href="`tel:${data.phone}`"
              class="hover:bg-transparent text-white"
            >
              {{ data.phone }}
            </a>
          </div>
          <div class="flex flex-1 flex-col items-center justify-center gap-8 text-lg">
            <a
              aria-label="Facebook"
              :href="`${data.facebook}`"
              target="_blank"
              class="hover:bg-transparent text-white"
            >
              <div
                class="flex gap-4 items-center rounded-full px-6 py-2 w-44 hover:scale-105"
                style="background-color: #1778f2"
              >
                <font-awesome-icon icon="fa-brands fa-facebook-f" class="text-2xl" />
                Facebook
              </div>
            </a>
            <a
              aria-label="LinkedIn"
              :href="`${data.linkedin}`"
              target="_blank"
              class="hover:bg-transparent text-white"
            >
              <div
                class="flex gap-4 items-center rounded-full px-6 py-2 w-44 hover:scale-105"
                style="background-color: #007bb6"
              >
                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="text-2xl" />
                LinkedIn
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-green-1 text-center text-white py-10">
      © Copyright {{ new Date().getFullYear() }} ReThink Ltd. <br />
      All Rights Reserved
    </div>
  </div>
</template>

<style scoped>
.footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

nav {
  text-align: center;
}

nav a {
  display: inline-block;
  border-radius: 0.75rem;
  color: var(--green-1);
  padding: 0.25rem 1rem;
}

nav a.router-link-exact-active {
  color: var(--green-1);
  background-color: var(--green-4);
}

nav.sidebar a {
  color: white;
  padding: 1rem;
  margin: 0 1rem;
}

nav.sidebar a.router-link-exact-active {
  color: var(--green-1);
  background-color: var(--green-bg);
  border-radius: 0.75rem;
}
</style>
