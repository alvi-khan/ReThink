<script setup>
import data from '../assets/data.json'
import { goTo, ROUTES } from '@/helpers/utils'
</script>

<template>
  <div class="flex flex-col items-start mt-6">
    <span class="text-4xl md:text-6xl md:leading-tight mt-12">
      {{ data.home.title }}
    </span>
  </div>
  <div class="full-width flex justify-center mt-12">
    <div
      class="px-8 md:px-20 overflow-x-scroll md:overflow-x-auto rounded-3xl flex gap-4 py-6 my-6 scrollbar-hide"
      style="max-width: 1300px"
    >
      <div
        v-for="(service, index) in data.home.highlights"
        :key="index"
        class="flex-1 flex flex-col bg-green-2 text-white items-center p-12 rounded-3xl"
        style="min-width: 16rem; box-shadow: -12px 16px 8px -4px grey"
      >
        <font-awesome-icon :icon="service.icon" class="p-6 text-5xl" />
        <span class="text-center mb-4 text-lg font-bold">{{ service.title }}</span>
        <span class="text-center text-md">{{ service.body }}</span>
      </div>
    </div>
  </div>

  <div class="flex my-20 md:items-center md:gap-12">
    <div class="flex-1 flex flex-col gap-10">
      <span class="text-3xl md:text-4xl leading-normal">
        {{ data.tagline }}
      </span>
      <span class="text-lg md:text-xl leading-relaxed">
        {{ data.home.intro }}
      </span>
    </div>
    <div class="hidden md:inline lg:flex-1">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="hidden lg:inline row-span-2 my-auto">
          <img
            alt="a stock image of a group of 5 people standing and smiling"
            src="../assets/images/stock-1.webp"
            class="rounded-xl"
            loading="lazy"
          />
        </div>
        <img
          alt="a stock image of a group of people in a meeting room discussing plans"
          src="../assets/images/stock-2.webp"
          class="rounded-xl"
          style="max-height: 11rem"
          loading="lazy"
        />
        <img
          alt="a stock image of a woman in a meeting room writing on a whiteboard while their colleagues pay attention"
          src="../assets/images/stock-3.webp"
          class="rounded-xl"
          style="max-height: 11rem"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  <div class="full-width flex justify-center">
    <div
      class="mx-4 xl:mx-16 bg-green-2 flex flex-col px-12 py-20 lg:p-20 rounded-3xl text-white md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-12"
      style="max-width: 1200px"
    >
      <div
        v-for="(service, index) in data.home.services"
        :key="index"
        class="hidden sm:grid grid-cols-4 items-center gap-8"
      >
        <div class="flex items-center justify-center">
          <font-awesome-icon :icon="service.icon" class="text-4xl" />
        </div>
        <div class="col-span-3 flex flex-col gap-4">
          <span class="text-xl font-bold">{{ service.title }}</span>
          <span class="text-base">{{ service.body }}</span>
        </div>
      </div>
      <div
        v-for="(service, index) in data.home.services"
        :key="index"
        class="sm:hidden flex flex-col items-stretch gap-8"
      >
        <div class="flex gap-8 items-center">
          <font-awesome-icon :icon="service.icon" class="text-4xl" />
          <span class="text-xl font-bold">{{ service.title }}</span>
        </div>
        <span class="col-span-2 text-base">{{ service.body }}</span>
      </div>
    </div>
  </div>

  <div class="flex my-20 items-center gap-12">
    <div class="flex-1 flex flex-col gap-10 text-green-1-darker">
      <span class="text-3xl md:text-4xl">{{ data.home.experience.title }}</span>
      <span class="text-lg md:text-xl leading-relaxed">{{ data.home.experience.body }}</span>
      <button
        aria-label="More About Us"
        class="self-center text-lg capitalize bg-green-2 text-white px-10 py-5 rounded-xl transition-transform hover:scale-105"
        style="box-shadow: -6px 8px 8px -4px grey"
        @click="goTo(ROUTES.ABOUT)"
      >
        More About Us
      </button>
    </div>
    <div class="overflow-hidden h-72 hidden md:inline flex-1">
      <img
        alt="a stock image of a person sitting at a desk holding a pen with their hands on top of some papers"
        src="../assets/images/stock-4.webp"
        class="rounded-xl w-full max-w-md h-full object-cover mx-auto"
        loading="lazy"
      />
    </div>
  </div>

  <div class="flex flex-col md:flex-row my-20 gap-8">
    <div class="flex-1 flex flex-col gap-4">
      <span class="text-xl font-bold">Explore our services</span>
      <span class="text-3xl md:text-4xl font-bold">{{ data.tagline }}</span>
    </div>
    <div class="flex-1 flex justify-center">
      <button
        aria-label="View All Services"
        class="self-center text-lg capitalize bg-green-2 text-white px-10 py-5 rounded-xl transition-transform hover:scale-105"
        style="box-shadow: -6px 8px 8px -4px grey"
        @click="goTo(ROUTES.SERVICES)"
      >
        View All Services
      </button>
    </div>
  </div>

  <div class="flex flex-col my-20 px-4 py-28 text-white text-center bg-green-2 full-width">
    <span class="text-xl">We are professionals</span>
    <span class="mt-8 text-3xl md:text-4xl md:max-w-md self-center leading-tight font-bold">
      The intelligent choice for every business
    </span>
  </div>

  <div class="flex flex-col text-center my-20">
    <span class="text-4xl">Our Clients</span>
    <div class="h-28 sm:h-36 lg:h-40 flex justify-around items-center text-white gap-4 mt-4">
      <img
        alt="logo of Berger"
        src="../assets/images/berger.svg"
        class="h-full w-2/3 md:w-1/3"
        loading="lazy"
      />
      <img
        alt="logo of CavinKare"
        src="../assets/images/CavinKare.svg"
        class="h-full w-2/3 md:w-1/3"
        loading="lazy"
      />
    </div>
  </div>

  <div class="flex flex-col md:flex-row my-20 gap-12">
    <div class="md:w-2/3">
      <iframe
        :src="`${data.mapIFrame}`"
        title="Location of ReThink Limited on Google Maps"
        width="100%"
        height="480"
        class="rounded-2xl"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
    <div class="self-center md:w-1/3 flex flex-col gap-6 text-lg justify-center">
      <div class="flex gap-6 w-full max-w-72 items-center">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="text-2xl" />
        <a
          :aria-label="`${data.address}`"
          :href="`${data.mapLink}`"
          class="text-green-1 hover:bg-transparent"
        >
          {{ data.address }}
        </a>
      </div>
      <div class="flex gap-6 items-center">
        <font-awesome-icon icon="fa-solid fa-phone" class="text-2xl" />
        <a
          :aria-label="`${data.phone}`"
          :href="`tel:${data.phone}`"
          class="text-green-1 hover:bg-transparent"
        >
          {{ data.phone }}
        </a>
      </div>
    </div>
  </div>
</template>
