<template>
  <div>
    <h1>Home</h1>
    <p>This is the Home page</p>
    <Checkbox v-model="checked" :binary="true" />

    <Button label="Submit" />
  </div>
</template>
<script setup>
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

import { ref } from 'vue'

const checked = ref(false)
</script>
