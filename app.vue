<template>
  <div>
    <NuxtLayout>
      
	   <Suspense>
      <NuxtPage v-if="!error" />
      <ErrorPage v-else />
    </Suspense>
	  
	  
	  
    </NuxtLayout>
  </div>
</template>

<script setup>
import '@/assets/css/tailwind.css'

import { useError } from '#app'
import ErrorPage from '~/pages/404.vue'

const error = useError()


</script>