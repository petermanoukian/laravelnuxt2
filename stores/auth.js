// stores/auth.js
import { defineStore } from 'pinia'
import { useRuntimeConfig, useNuxtApp } from '#app'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
	token: null,
	loginError: null,
	regError: null,
	regSuccess: null,
  }),
  
  
 getters: {
    isAuthenticated: (state) => !!state.user && !!state.token,
  },
  
  actions: {


	async login(credentials) {
		
	  try {
		const { $api } = useNuxtApp();
		const apiUrl = useRuntimeConfig().public.apiBaseUrl;
		const { data } = await $api.post(`${apiUrl}/login`, credentials);
		if(data.user != "")
		{
			this.user = data.user;
			this.token = data.access_token; // Ensure this matches the token key in the response
			//localStorage.setItem('token', data.access_token); // Store the token in localStorage
			
			if (process.client) {
            localStorage.setItem('token', data.access_token);
			}
			
			
			console.log('token in :', this.token);
			const router = useRouter();
			await router.push('/admin');
			this.loginError = '';
		}
		else
		{
			this.loginError = 'Login failed. Please check your credentials and try again.';
		}
	  } catch (error) {
		
		 if (error.response && error.response.status === 401) {
          this.loginError = 'Login failed. Please check your credentials and try again.';
        } else {
          this.loginError = 'An error occurred. Please try again later.';
        }
		console.error('Error logging in:', error);
	  }
	},

	
	
	
    async register(formData) {
      try {
        const { $api } = useNuxtApp()
        const apiUrl = useRuntimeConfig().public.apiBaseUrl
		const { data } = await $api.post(`${apiUrl}/register`, formData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
		})
		this.regSuccess = 'user Added';
		this.regError = '';
        //this.user = data.user
        //this.token = data.token
        //localStorage.setItem('token', data.access_token)
		console.log('token in :', this.token);
		//this.resetRegistrationState();
      } 
	  
	  catch (error) {
        if (error.response && error.response.status === 422) {
			
          this.regError = 'Error ' + error.response.data.message;
        } else {
          this.regError = 'An unexpected error occurred.';
        }
		this.regSuccess = '';
        console.error('Error registering:', error);
      }
	  
	  
    },
    async logout() {
      try {
        const { $api } = useNuxtApp()
        const apiUrl = useRuntimeConfig().public.apiBaseUrl
        await $api.post(`${apiUrl}/logout`)
        this.user = null
        this.token = null
        //localStorage.removeItem('token')
		
		if (process.client) {
          localStorage.removeItem('token');
        }
		
		const router = useRouter()
        await router.push('/login')
      } catch (error) {
        console.error('Error logging out:', error)
      }
    },
    async fetchUser() {
      try {
        const { $api } = useNuxtApp()
        const apiUrl = useRuntimeConfig().public.apiBaseUrl
        const { data } = await $api.get(`${apiUrl}/user`)
        this.user = data
		if(data)
		{
			console.log('Fetched user:', data)
		}
		else
		{
			const router = useRouter()
			await router.push('/login')
		}
		
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    },
	
	
	resetRegistrationState() {
      setTimeout(() => {
        this.regError = '';
        this.regSuccess = '';
        console.log('State reset');
      }, 3000); // Adjust delay as necessary
    },
	
	initialize() {
		
      if (process.client) {
        this.token = localStorage.getItem('token') || null;
		
      }
    },
	
	
	
	
  },
  

  // Initialize token on store setup


  
  
  
  
})


