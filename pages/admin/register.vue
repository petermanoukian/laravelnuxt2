<!-- pages/register.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'


import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'


const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const name = ref('')
const email = ref('')
const password = ref('')
const pic = ref(null)
const levell = ref('2')
const passwordError = ref('')
const emailError = ref('')
const fileError = ref('')

const resetForm = async () => {
  name.value = ''
  email.value = ''
  password.value = ''

  levell.value = '2'
  passwordError.value = ''
  emailError.value = ''
  fileError.value = ''
  await authStore.resetRegistrationState()
  passwordError.value = ''
  emailError.value = ''
 
  
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs.length > 0) {
	fileInputs[0].value = '';
  }
  pic.value = null
  
  const form = document.getElementById('reg');
  if (form) {
	form.reset();
  } 
  
}

const validateEmail = (email) => 
{
	  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return re.test(email);
}

watch(password, (newVal) => {
  if (newVal.length < 7) {
    passwordError.value = 'Password must be at least 7 characters long.';
  } else {
    passwordError.value = '';
  }
});

watch(email, (newVal) => {
  if (!validateEmail(newVal)) {
    emailError.value = 'Please enter a valid email address.';
  } else {
    emailError.value = '';
  }
});

const register = async () => 
{

  if (password.value.length < 7) {
    passwordError.value = 'Password must be at least 7 characters long.';
    return;
  }
  else
  {
    passwordError.value = '';
  }
  if (!validateEmail(email.value)) 
  {
    emailError.value = 'Please enter a valid email address.';
    return;
  } else 
  {
    emailError.value = '';
  }


  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('password', password.value)
  formData.append('levell', levell.value)
  if (pic.value) {
    formData.append('pic', pic.value)
  }
  await authStore.register(formData)
  setTimeout(resetForm, 2000)
	
}


definePageMeta({
  middleware: ['auth' , 'check-admin'],
  layout: 'admin'
});



onMounted(async () => {
  await authStore.fetchUser()
  authStore.resetRegistrationState()
})

watch(route, () => {
  resetForm()
})

const regError = computed(() => authStore.regError); 
const regSuccess = computed(() => authStore.regSuccess); 

const handleFileChange = (event) => {
  const file = event.target.files[0];
  
  if (file && !file.type.startsWith('image/')) {
    fileError.value = 'Please upload a valid image file.';
    pic.value = null;
  } else {
    fileError.value = '';
    pic.value = file;
	file.value ='';
  }
  
  
}
</script>



<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end">
			Add an Admin
            </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <h1 class="text-3xl text-black pb-6">Full Admin</h1>

				<div class="flex items-center justify-center bg-gray-100">
					<div class="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
						<h1 class="text-2xl font-bold mb-4">Add an Admin</h1>
						
						<form @submit.prevent="register" id = 'reg' name = 'reg'>
						
						<div class="mb-4">	
						  <label for="levell" class="block text-sm font-medium text-gray-700">Level</label>
						  <select v-model="levell" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
						  focus:border-indigo-500 sm:text-sm">
						  <option value = '2'> Limited Admin</option>
						  <option value = '1'> Full Admin</option>
						  
						  </select>
						</div>  

						<div class="mb-4">	
						  <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
						  <input v-model="name" type="text" placeholder="Name" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
						</div>  
						<div class="mb-4">  
						  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
						  <input v-model="email" type="email" placeholder="Email" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
						 <p v-if="emailError" class="mt-2 text-sm text-red-600">{{ emailError }}</p>

						</div>
						<div class="mb-4">
						  <label for="name" class="block text-sm font-medium text-gray-700">Password</label>
						  <input v-model="password" type="password" placeholder="Password" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
						  <p v-if="passwordError" class="mt-2 text-sm text-red-600">{{ passwordError }}</p>

						</div>
						
						<div class="mb-4">
							<label for="pic" class="block text-sm font-medium text-gray-700">Picture</label>
							<input type="file" @change="handleFileChange" class="mt-1 block w-full px-3 py-2 
							border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
							accept="image/*"/>
							<p v-if="fileError" class="mt-2 text-sm text-red-600">{{ fileError }}</p>

						</div>
						
						
						<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Admin</button>
						<p v-if="regError" class="mt-2 text-sm text-red-600">{{ regError }}</p>
						<p v-if="regSuccess" class="mt-2 text-sm text-red-600">{{ regSuccess }}</p>
					</form>
						
						

					</div>
			  </div>
			  
			  
			  
			</main>

            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>
