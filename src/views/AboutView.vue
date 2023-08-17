<script setup>
import data from '../assets/data.json'
import { goTo, ROUTES } from '@/helpers/utils'
</script>

<template>
  <div class="flex flex-col items-center">
    <span class="text-4xl text-center md:text-6xl my-16">About Company</span>
  </div>

  <div class="grid md:grid-cols-2 md:mb-24 items-center gap-12">
    <span class="font-bold text-2xl md:text-4xl md:col-span-2 lg:col-span-1">
      {{ data.about.heading }}
    </span>
    <div class="hidden lg:inline" />
    <div class="flex flex-col gap-10 col-start-1 row-span-2">
      <span class="text-md leading-relaxed">{{ data.about.history[0] }}</span>
      <span class="text-md leading-relaxed">{{ data.about.history[1] }}</span>
    </div>
    <div class="flex flex-col gap-24 row-span-2">
      <div class="overflow-hidden h-72 hidden md:inline">
        <img
          alt="stock image of a piece of paper and a box on a black background"
          src="../assets/images/stock-5.webp"
          class="rounded-xl w-full max-w-lg h-full object-cover mx-auto"
          loading="lazy"
        />
      </div>
      <button
        aria-label="Our Services"
        class="w-48 mx-auto text-lg capitalize bg-green-2 text-white px-10 py-5 rounded-xl transition-transform hover:scale-105"
        style="box-shadow: -6px 8px 8px -4px grey"
        @click="goTo(ROUTES.SERVICES)"
      >
        Our Services
      </button>
    </div>
  </div>

  <div
    class="bg-green-2 flex flex-col p-10 md:p-20 rounded-2xl text-white items-center my-12 gap-2 mx-auto"
    style="max-width: 1000px"
  >
    <span>Our Team</span>
    <span class="my-4 md:my-0 text-xl md:text-3xl text-center">
      In Good Hands with an Experienced Team
    </span>
    <img
      alt="profile photo of Mosaddek Hossain Khan, Founder and CEO of ReThink Limited"
      src="../assets/images/MHK.webp"
      class="w-64 md:mt-12 rounded-2xl"
    />
    <span class="text-lg md:text-xl font-bold">{{ data.about.team[0].name }}</span>
    <span>{{ data.about.team[0].position }}</span>
  </div>

  <div class="flex flex-col-reverse md:flex-row my-20 items-center gap-12">
    <div class="flex-1 flex flex-col gap-10">
      <span class="font-bold text-3xl md:text-4xl">{{ data.tagline }}</span>
      <span class="text-lg md:text-xl leading-relaxed">{{ data.home.title }}</span>
      <div
        v-for="(service, index) in data.about.services"
        :key="index"
        class="grid grid-cols-4 gap-8"
      >
        <font-awesome-icon :icon="service.icon" class="text-4xl self-center justify-self-center" />
        <div class="col-span-3 flex flex-col">
          <span class="font-bold text-lg">{{ service.title }}</span>
          <span>{{ service.body }}</span>
        </div>
      </div>
    </div>
    <div class="overflow-hidden h-72 hidden md:inline flex-1">
      <img
        alt="stock photo of two men standing and shaking hands across the table while their colleagues are sitting and smiling at them"
        src="../assets/images/stock-6.webp"
        class="rounded-xl w-full max-w-lg h-full object-cover mx-auto"
        loading="lazy"
      />
    </div>
  </div>
</template>
