import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isAuthenticated = ref(false)

  return { isAuthenticated }
})
