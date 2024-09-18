<template>

	<div class="container-xxl bg-white p-0">
		<Nav/>
		<Searchbar />
		<slot />
		<Footer />
	</div>

</template>


<script setup>

import { useHead } from 'nuxt/app'

import '~/assets/css/style.css'
import '~/assets/css/css.css'
import '~/assets/css/css2.css'
useHead({


	title: 'Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon',
	meta: [
	{
	  name: 'description',
	  content: 'Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3'
	},
	{
	  name: 'keywords',
	  content: 'Laravel, MySQL, PHP 8, Web Development, Nuxt 3, VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon'
	},
	{
	  property: 'og:title',
	  content: 'Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon'
	},
	{
	  property: 'og:description',
	  content: 'Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3'
	},
	],

	link: [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap' },
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css' },
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css' },
	
	{ rel: 'stylesheet', href: '/css/bootstrap.css' }, { rel: 'stylesheet', href: '/css/style.css' }
	, { rel: 'stylesheet', href: '/lib/animate/animate.min.css' } , { rel: 'stylesheet', href: '/lib/owlcarousel/assets/owl.carousel.min.css' }
	, { rel: 'stylesheet', href: '/css/css.css' }
	],

	script: [
	{ src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
	{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js' },
	{ src: '/lib/wow/wow.js' },
	{ src: '/lib/easing/easing.min.js' },
	{ src: '/lib/waypoints/waypoints.min.js' },

	{ src: '/js/main.js' }
  ]
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');
@import '~/assets/css/style.css';
@import '~/assets/css/css.css';

</style>

