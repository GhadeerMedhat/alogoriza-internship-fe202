<!-- src/components/SignInForm.vue -->
<template>
    <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md">
        <form @submit.prevent="signIn" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full p-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full p-2 border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <button type="submit" class="bg-blue-500 text-white px-20 py-2 rounded">Sign In</button>
  
          <!-- Display messages based on authentication result -->
          <p v-if="signInError" class="text-red-500 mt-4">{{ signInError }}</p>
          <p v-else-if="isAuthenticated" class="text-green-500 mt-4">Sign in successful!</p>
        </form>
  
        <p class="text-center">
          Don't have an account? <router-link to="/register" class="text-blue-500 hover:underline">Register</router-link>
        </p>
        <router-link v-if="isAuthenticated" to="/home" class="text-blue-500 hover:underline block text-center mt-4">
        Go to Home
      </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isAuthenticated:false,
        signInError: '',
        registeredEmail: localStorage.getItem('registeredEmail'), // Retrieve registered email from localStorage
      registeredPassword: localStorage.getItem('registeredPassword'), // Retrieve registered password from localStorage
      };
    },
    methods: {
    signIn() {
      // Simulate server-side validation
      if (this.email === this.registeredEmail && this.password === this.registeredPassword) {
        // Authentication successful
        this.isAuthenticated = true;
        this.signInError = '';

        // Automatically navigate to the home page after successful sign-in
        this.$router.push('/home');
      } else {
        // Authentication failed
        this.isAuthenticated = false;
        this.signInError = 'Invalid email or password. Please try again.';
      }
    },
  },
};
  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  