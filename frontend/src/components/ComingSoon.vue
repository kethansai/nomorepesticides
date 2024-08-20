<template>
  <div
    class="coming-soon relative h-screen w-full flex flex-col items-center justify-end text-center text-white bg-cover bg-center py-10 gap-2"
  >
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-30"></div>
    <div class="title-name text-7xl font-bold text-amber-400">Prop the Crop</div>
    <div class="z-10 text-4xl font-bold">COMING SOON</div>
    <div class="z-10 text-sm">We're working hard to bring you something amazing. Stay tuned!</div>

    <div class="flex items-end justify-center z-10">
      <div class="m-2 sm:m-5">
        <span class="font-bold text-xl sm:text-5xl">{{ days }}</span>
        <p>Days</p>
      </div>
      <div class="m-2 sm:m-5">
        <span class="font-bold text-xl sm:text-5xl">{{ hours }}</span>
        <p>Hours</p>
      </div>
      <div class="m-2 sm:m-5">
        <span class="font-bold text-xl sm:text-5xl">{{ minutes }}</span>
        <p>Minutes</p>
      </div>
      <div class="m-2 sm:m-5">
        <span class="font-bold text-xl sm:text-5xl">{{ seconds }}</span>
        <p>Seconds</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const countdownDate = new Date('2024-08-15') // Replace with your future date

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const updateCountdown = () => {
  const currentTime = new Date().getTime()
  const timeDifference = countdownDate - currentTime

  days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((timeDifference % (1000 * 60)) / 1000)
}

setInterval(updateCountdown, 1000)
</script>
<style lang="scss">
.title-name {
  font-size: 6rem;
  margin-bottom: 1rem;
  font-family: 'Courgette', cursive;
}
.coming-soon {
  background: url('../assets/images/background-image.jpg');
}
</style>
