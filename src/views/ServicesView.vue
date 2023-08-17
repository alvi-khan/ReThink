<script setup>
import data from '@/assets/data.json'
import { goTo, ROUTES } from '@/helpers/utils'
</script>

<template>
  <div class="flex flex-col items-center">
    <span class="text-4xl md:text-6xl mt-12 md:my-12">Our Services</span>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
    <div
      v-for="(item, index) in data.services.items"
      :key="index"
      :class="[
        'mx-auto flex flex-col bg-green-2 text-white items-center p-12 rounded-3xl transition hover:scale-105',
        index === data.services.items.length - 1 && data.services.items.length % 2 !== 0
          ? 'sm:col-span-2 lg:col-span-1 sm:w-1/2 lg:w-auto'
          : ''
      ]"
      style="box-shadow: -12px 16px 8px -4px grey"
    >
      <font-awesome-icon :icon="item.icon" class="p-6 text-5xl" />
      <span class="text-center mb-4 text-lg font-bold">{{ item.title }}</span>
      <span class="text-center text-md">{{ item.body }}</span>
    </div>
  </div>

  <div
    class="flex flex-col items-center gap-8 md:gap-16 md:flex-row my-20 py-16 md:py-28 px-10 md:pl-20 text-white bg-green-2 rounded-3xl"
  >
    <div class="max-w-lg md:max-w-none max-auto flex-1 text-center md:text-left px-1">
      <span class="mt-4 text-2xl md:text-4xl leading-tight font-bold">
        We have 15 years of experience in business consultancy.
      </span>
    </div>
    <div class="flex-1 flex justify-center">
      <button
        aria-label="Contact Us"
        class="self-center text-lg capitalize bg-green-3 text-white px-10 py-5 rounded-xl transition-transform hover:scale-105"
        @click="goTo(ROUTES.CONTACT)"
      >
        Contact Us
      </button>
    </div>
  </div>
</template>
