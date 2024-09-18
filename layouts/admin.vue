<template>
  <div>
	
    <slot />
	

  </div>
</template>



<script setup>
import { useHead } from 'nuxt/app'

useHead({
  title: 'Nuxt3 Laravel 11 Admin',
  meta: [
    {
      name: 'description',
      content: 'Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3'
    },
    {
      name: 'keywords',
      content: 'Nuxt3 Laravel 11 Admin'
    },
    {
      property: 'og:title',
      content: 'Nuxt3 Laravel 11 Admin'
    },
    {
      property: 'og:description',
      content: 'Nuxt3 Laravel 11 Admin'
    },
  ]
})

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

.font-family-karla { font-family: karla; }
.bg-sidebar { background: #3d68ff; }
.cta-btn { color: #3d68ff; }
.upgrade-btn { background: #1947ee; }
.upgrade-btn:hover { background: #0038fd; }
.active-nav-link { background: #1947ee; }
.nav-item:hover { background: #1947ee; }
.account-link:hover { background: #3d68ff; }
</style>

