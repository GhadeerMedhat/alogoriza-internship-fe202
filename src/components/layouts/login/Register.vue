<!-- src/components/RegisterForm.vue -->
<template>
    <div class="flex items-center justify-center h-screen">
      <div class="w-full max-w-md">
        <form v-if="!isRegistered" @submit.prevent="register" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
  
          <div class="mb-4">
            <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="w-full p-2 border rounded-md"
              placeholder="Confirm your password"
              required
            />
          </div>
  
          <button type="submit" class="bg-blue-500 text-white px-20 py-2 rounded">Register</button>
          <p class="text-center mt-4">
            You already have an account? <router-link to="/signin" class="text-blue-500 hover:underline">Sign In</router-link>
          </p>
        </form>
  
        <div v-else class="text-center">
          <p>You are registered!</p>
          <!-- Display a small image indicating the user's account -->
          <img v-if="isRegistered" src="../../../assets/Ellipse 2.png" alt="Account Image" class="w-8 h-8 mx-auto mt-4">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        isRegistered: false,
      };
    },
    methods: {
      register() {
        // Add your registration logic here
        console.log('Registration submitted');
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Confirm Password:', this.confirmPassword);
  
        // Check if passwords match
        if (this.password !== this.confirmPassword) {
          console.error('Passwords do not match');
          return;
        }
  
        // Save registration information to localStorage
        localStorage.setItem('registeredEmail', this.email);
        localStorage.setItem('registeredPassword', this.password);
  
        this.isRegistered = true;
  
        // Redirect to /signin after successful registration
        this.$router.push('/signin');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  