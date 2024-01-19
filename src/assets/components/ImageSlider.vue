<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: ['./src/assets/images/berger.svg', './src/assets/images/CavinKare.svg']
    }
  },
  mounted() {
    setInterval(() => {
      this.nextImage()
    }, 2500)
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }
  }
}
</script>
<template>
  <div class="h-32 flex items-center justify-center mt-8 mx-auto" style="width: 300px">
    <Transition name="slide-left" mode="out-in">
      <img
        v-if="currentIndex === 0"
        alt="logo of Berger"
        src="../images/berger.svg"
        class="h-full"
        loading="lazy"
      />
      <img
        v-else-if="currentIndex === 1"
        alt="logo of CavinKare"
        src="../images/CavinKare.svg"
        class="w-full"
        loading="lazy"
      />
    </Transition>
  </div>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
