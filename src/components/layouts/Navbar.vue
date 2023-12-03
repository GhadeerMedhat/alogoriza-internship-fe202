<!-- src/components/Navbar.vue -->
<template>
  <div :class="customClass">
    <nav class="bg-white p-4">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Left Section -->
        <div class="flex items-center">
          <!-- Responsive Logo -->
          <img
            :src="require('@/assets/bxs-plane-alt 1.png')"
            alt="My Dream Place Logo"
            class="w-8 h-8 md:w-10 md:h-10 md:ml-20"
          />
          <!-- My Dream Place Text -->
          <div class="text-black">
            <span class="text-lg font-bold">My Dream Place</span>
          </div>
        </div>

        <!-- Center Section -->
        <div class="flex items-center space-x-12 md:space-x-15">
          <router-link
            to="/home"
            class="text-black hover:text-blue-500 transition"
            >Home</router-link
          >
          <router-link
            to="/home"
            class="text-black hover:text-blue-500 transition"
            >Discover</router-link
          >
          <router-link
            to="/home"
            class="text-black hover:text-blue-500 transition"
            >Activities</router-link
          >
          <router-link
            to="/home"
            class="text-black hover:text-blue-500 transition"
            >About</router-link
          >
          <router-link
            to="/home"
            class="text-black hover:text-blue-500 transition"
            >Contact</router-link
          >
        </div>

        <!-- Right Section -->
        <div class="flex items-center md:mr-20">
          <!-- Use router-link to navigate to the Register form -->
          <template v-if="!isRegistered">
            <router-link
              to="/register"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              id="registerButton"
              >Register</router-link
            >
          </template>
          <template v-else>
            <div @click="toggleLogout" style="cursor: pointer">
              <img
                v-if="!showLogout"
                src="../../assets/Ellipse 2.png"
                alt="Account Image"
                class="w-8 h-8"
              />
              <button
                v-if="showLogout"
                @click="logout"
                class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </template>
        </div>
      </div>
    </nav>
  </div>
</template>

<!-- ... rest of the component ... -->

<script>
export default {
  name: "Navbar",

  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isRegistered: true,
      showLogout: false,
    };
  },
  methods: {
    toggleLogout() {
      this.showLogout = !this.showLogout;
    },
    logout() {
      // Add your logout logic here
      // For example, you can reset the registration status and hide the logout button
      this.isRegistered = false;
      this.showLogout = false;
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
