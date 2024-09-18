<!-- components/Footer.vue -->

<script setup>

import { computed, onMounted } from 'vue'
import { useRuntimeConfig } from '#imports'

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()



const config = useRuntimeConfig()



</script>

<template>
        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Web Developer</h5>
                        <a class="btn btn-link text-white-50" href="">About </a>
                        <a class="btn btn-link text-white-50" href="">Contact Us</a>
						<a class="btn btn-link text-white-50" href="">Web Development</a>
                    </div>

                    <div class="col-lg-9 col-md-6">
                       
                        <p>Laravel 1 Nuxt Demo - PHP 8.2 MySQL , Lebanese Armenian Web Site Developer, JavaScript, Jquery, CSS, Boostrap and tailwind css
						HTML 5, CSS 3
						Both back end and frotn end web site developmentr</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
                           Laravel 1 Nuxt Demo - PHP 8.2 MySQL - Design Provided By 
						   <a class="border-bottom" href="https://htmlcodex.com" target = '_blank'>HTML Codex</a>
                        </div>
               
                    </div>
                </div>
            </div>
        </div>
       
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');


</style>
