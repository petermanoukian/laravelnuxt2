import { d as defineStore, u as useNuxtApp, a as useRuntimeConfig, c as useRouter } from './server.mjs';

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    loginError: null,
    regError: null,
    regSuccess: null
  }),
  getters: {
    isAuthenticated: (state) => !!state.user && !!state.token
  },
  actions: {
    async login(credentials) {
      try {
        const { $api } = useNuxtApp();
        const apiUrl = useRuntimeConfig().public.apiBaseUrl;
        const { data } = await $api.post(`${apiUrl}/login`, credentials);
        if (data.user != "") {
          this.user = data.user;
          this.token = data.access_token;
          if (false)
            ;
          console.log("token in :", this.token);
          const router = useRouter();
          await router.push("/admin");
          this.loginError = "";
        } else {
          this.loginError = "Login failed. Please check your credentials and try again.";
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loginError = "Login failed. Please check your credentials and try again.";
        } else {
          this.loginError = "An error occurred. Please try again later.";
        }
        console.error("Error logging in:", error);
      }
    },
    async register(formData) {
      try {
        const { $api } = useNuxtApp();
        const apiUrl = useRuntimeConfig().public.apiBaseUrl;
        const { data } = await $api.post(`${apiUrl}/register`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.regSuccess = "user Added";
        this.regError = "";
        console.log("token in :", this.token);
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.regError = "Error " + error.response.data.message;
        } else {
          this.regError = "An unexpected error occurred.";
        }
        this.regSuccess = "";
        console.error("Error registering:", error);
      }
    },
    async logout() {
      try {
        const { $api } = useNuxtApp();
        const apiUrl = useRuntimeConfig().public.apiBaseUrl;
        await $api.post(`${apiUrl}/logout`);
        this.user = null;
        this.token = null;
        if (false)
          ;
        const router = useRouter();
        await router.push("/login");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
    async fetchUser() {
      try {
        const { $api } = useNuxtApp();
        const apiUrl = useRuntimeConfig().public.apiBaseUrl;
        const { data } = await $api.get(`${apiUrl}/user`);
        this.user = data;
        if (data) {
          console.log("Fetched user:", data);
        } else {
          const router = useRouter();
          await router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    },
    resetRegistrationState() {
      setTimeout(() => {
        this.regError = "";
        this.regSuccess = "";
        console.log("State reset");
      }, 3e3);
    },
    initialize() {
    }
  }
  // Initialize token on store setup
});

export { useAuthStore as u };
//# sourceMappingURL=auth-BCAkOG0G.mjs.map
