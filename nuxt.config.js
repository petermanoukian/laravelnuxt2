// nuxt.config.js
export default defineNuxtConfig({
	
	pages: true,
    ssr: true, 

	
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  router: {
    options: {
      scrollBehavior(to, from, savedPosition) {
        // Check if the user navigates to a section using a hash (e.g., #scrollhere)
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }

        // Check if query parameter 'message' exists
        if (to.query.message) {
          const element = document.getElementById('scrollhere')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }

        // Default scroll behavior (scroll to the top)
        return savedPosition || { top: 0 }
      },
    },
  },
	
	
	
	
	axios: {
	baseURL: 'https://corporatehappinessaward.com/test/api',
	credentials: true,
	},


	plugins: [
	
	],

	publicRuntimeConfig: {
		apiBaseUrl: process.env.API_BASE_URL || 'https://corporatehappinessaward.com/test/api',
		BaseUrl: process.env.FOR_BASE_URL || 'https://corporatehappinessaward.com/test',
	},

	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.API_BASE_URL || 'https://corporatehappinessaward.com/test/api',
			BaseUrl: process.env.FOR_BASE_URL || 'https://corporatehappinessaward.com/test',
		}
	},
	  
	modules: [

	'@pinia/nuxt', "nuxt-tiptap-editor" 
	],
	
	 tiptap: {
    prefix: 'Tiptap',
  },
	
	
	buildModules: [
	// Add Tailwind CSS
	'@nuxtjs/tailwindcss',
	],
	
	 build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        'tailwindcss': {},
        'autoprefixer': {},
      },
    },
  },
	
	
	
	
	css: ['~/assets/css/main.css','~/assets/css/tailwind.css','~/assets/css/css.css'],
	
	postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		},
	  },

	compatibilityDate: '2024-07-13',
	
	renderComponent: true,
	
	
})