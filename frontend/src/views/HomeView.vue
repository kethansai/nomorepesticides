<template>
  <div class="card">
    <Carousel
      :value="products"
      :numVisible="1"
      :autoplayInterval="3000"
      :numScroll="1"
      :circular="true"
      :showNavigators="false"
      :showIndicators="false"
    >
      <template #item="slotProps">
        <div class="rounded m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-full rounded"
              />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
    <Carousel
      :value="products"
      :numVisible="6"
      :autoplayInterval="10000"
      :numScroll="1"
      :circular="true"
      :showIndicators="false"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="rounded m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-full rounded"
              />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
    <Carousel
      :value="products"
      :numVisible="6"
      :autoplayInterval="5000"
      :numScroll="1"
      :circular="true"
      :showIndicators="false"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="rounded m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-full rounded"
              />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
    <Carousel
      :value="products"
      :numVisible="6"
      :autoplayInterval="3000"
      :numScroll="1"
      :circular="true"
      :showIndicators="false"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="rounded m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-full rounded"
              />
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="absolute"
                style="left: 5px; top: 5px"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" />
            </span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { productsList } from '@/data'
import { carouselResponsiveOptions } from '@/utils/config'
import { getSeverity } from '@/utils'
import { ref } from 'vue'

const products = ref(productsList)

const responsiveOptions = ref(carouselResponsiveOptions)
</script>
