<template>
  <div class="flex flex-col h-screen relative">
    <Navbar />
        <!-- Content container -->
    <div class="flex-1 flex items-center justify-center relative">
    <div class="flex items-center relative">
      <img :src="require('../../assets/Rectangle 2.png')" alt="home" class="mr-2 mt-8 relative" style="width: 1370px;">

      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
        <p class="mb-5">{{ description }}</p>

       
      </div>
       
    </div>
   
  </div>
<div class="absolute top-1/2 bottem-1/2 left-1/2 transform -translate-x-1/2   mt-14 pt-14 text-center text-black">
<Hero/>
       </div>

  <div class="bg-yellow-100 text-black-500 p-3 mt-20 mb-4 ml-20 mr-20 relative">
          <div class="flex items-center">
            <img :src="require('../../assets/danger 1.png')" alt="Small Image" class="w-8 h-8 mr-2" style="position: relative; z-index: 1;">
            <p class="ml-2 tracking-wider">{{ covidMessage }} <span class="text-blue-500">{{ learnMore }}</span></p>
          </div>
        </div>


        <div>
    <!-- Vacation section -->
    <div class="text-black-500 p-3 mt-2 mb-4 ml-20 mr-20 relative">
      <h1 class="text-2xl font-bold">{{ vacation.title }}</h1>
      <p class="mt-3">{{ vacation.description }}</p>
      <span>{{ vacation.inspiration }}</span>
    </div>

    <!-- Four cards with images and titles -->
    <div class="flex justify-between p-3 mt-2 mb-4 ml-20 mr-20 relative">
      <div v-for="(card, index) in vacation.cards" :key="index" class="bg-white rounded-lg p-4">
        <img :src="require(`../../assets/Rectangle ${card.imageNumber}.png`)" alt="Card" class="w-full h-50 object-cover mb-2" style="width: 350px;">
        <h2 class="text-lg font-bold">{{ card.title }}</h2>
        <p class="text-xs">{{ card.properties }} properties</p>
      </div>
    </div>
  </div>


  <div>
    <!-- Inspiration section -->
    <div class="text-black-500 p-3 mt-2 mb-4 ml-20 mr-20 relative">
      <h1 class="text-2xl font-bold">{{ inspirationTitle }}</h1>
    </div>

    <!-- Three cards with images and titles -->
    <div class="flex justify-between p-3 mt-2 mb-4 ml-20 mr-20 relative">
      <!-- Card 1 -->
      <div v-for="(card, index) in inspirationCards" :key="index" class="relative bg-white rounded-lg p-4">
        <img :src="require(`../../assets/Rectangle ${card.imageNumber}.png`)" alt="Card" class="w-full h-50 object-cover mb-2" style="width: 500px;">
        <div class="absolute top-1/2 left-4 text-white">
          <p class="font-bold">{{ card.title }}</p>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>


  <div>
    <!-- Popular Hotels section -->
    <div class="text-black-500 p-3 mt-2 mb-4 ml-20 mr-20 relative">
      <h1 class="text-2xl font-bold">{{ hotelsTitle }}</h1>
    </div>

    <!-- Four cards with images and titles -->
    <div class="flex justify-between p-3 mt-2 mb-4 ml-20 mr-20 relative">
      <!-- Card 1 -->
      <div v-for="(hotel, index) in hotels" :key="index" class="bg-white rounded-lg p-4">
        <img :src="require(`../../assets/Rectangle ${hotel.imageNumber}.png`)" alt="Card" class="w-full h-50 object-cover mb-2" style="width: 350px;">
        <h2 class="text-lg font-bold">{{ hotel.title }}</h2>
        <p class="text-xs">{{ hotel.properties }} properties</p>
      </div>
    </div>
  </div>

  <div class="relative text-black-500 p-3 mt-2 mb-4 ml-20 mr-20">
    <!-- Left text -->
    <div class="absolute top-1/4 ml-12">
      <p class="font-bold text-2xl text-white">
        {{ downloadTitle }}
      </p>
      <span class="font-bold text-2xl text-white block mb-2">{{ downloadSubtitle }}</span>
      <!-- Download button -->
      <button @click="downloadMobileApp" class="bg-blue-500 text-white px-4 py-2 mt-7 rounded">
        {{ downloadButtonLabel }}
      </button>
    </div>
    <img :src="require('../../assets/Rectangle 18.png')" alt="photo" style="width: 1330px; z-index: 1;">
    <img :src="require('../../assets/Isolated_right_hand_with_smartphone 2.png')" alt="photo2" style="width: 800px; position: absolute; top: 50%; right: 0; transform: translateY(-50%); z-index: 2;">

  </div>


<!-- Fotter -->

<div class="flex flex-col items-center justify-center text-black-500 p-3 mt-2 mb-4">
    <h1 class="text-2xl font-bold mb-2">Explore the world with {{ appName }}</h1>
    <p class="text-blue-500">Discover new places and experiences</p>
  </div>


  <div class="bg-white text-black p-8 ml-12">
    <div class="flex justify-between">
      <!-- Column 1 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[0].title }}</h2>
        <p>{{ columns[0].description }}</p>
      </div>

      <!-- Column 2 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[1].title }}</h2>
        <ul>
          <li v-for="(item, index) in columns[1].list" :key="index">{{ item }}</li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[2].title }}</h2>
        <ul>
          <li v-for="(item, index) in columns[2].list" :key="index">{{ item }}</li>
          <li class="text-blue-500">{{ columns[2].seeMore }}</li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[3].title }}</h2>
        <ul>
          <li v-for="(item, index) in columns[3].list" :key="index">{{ item }}</li>
        </ul>
      </div>

      <!-- Column 5 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[4].title }}</h2>
        <ul>
          <li v-for="(item, index) in columns[4].list" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>


  <div class="bg-gray-300 text-white p-0 fixed bottom-0 right-0 w-full flex items-center justify-between">
    <div class="flex items-cend">
      <!-- Small picture -->
      <img :src="require('../../assets/copyright 1.svg')" alt="Small Image" class="w-8 h-8 mr-2">

      <!-- Text -->
      <span class="text-l flex items-end ">{{ copyrightText }}</span>
    </div>

    <!-- Add other elements or links as needed -->
  </div>

  </div>
</template>

<script>
import Navbar from '../../components/layouts/Navbar.vue';
import Hero from '../pages/Hero.vue'

export default {
  name: 'Home',
  data() {
    return {
      title: "Enjoy your dream vacation",
      description: "Plan and book your perfect trip with expert advice, travel tips, destinations, information, and inspiration from us",
      covidMessage: "Check the latest COVID-19 restrictions before your travel and",
      learnMore: "Learn more.",
      appName: "My Dream Place",
      
      copyrightText: "My Dream Place 2022",
      currentYear: new Date().getFullYear(),
      vacation: {
        title: "Enjoy your dream Vacation",
        description: "Plan and book your perfect trip with expert advice, travel tips, destination information, and",
        inspiration: "inspiration from us",
        cards: [
          { title: "Australia", properties: "2246", imageNumber: 8 },
          { title: "Japan", properties: "1278", imageNumber: 9 },
          { title: "New Zealand", properties: "480", imageNumber: 10 },
          { title: "Greece", properties: "320", imageNumber: 11 },
          // Add more cards as needed
        ],
      },
      inspirationTitle: "Get inspiration for your next trip",
      inspirationCards: [
        { imageNumber: 15, title: "Sudeny's 10 most fashionable 5-star hotels", description: "Browse the fastest-growing tourism sector in the heart of Australia's tourism capital" },
        { imageNumber: 16, title: "Top cities for Vegan Travellers", description: "Top sites where you do not have to worry about being a vegan. Our tourist guide is here..." },
        { imageNumber: 17, title: "World's top destinations during and post covid timeline", description: "The pandemic is still intact and will be here for a longer time. Here's where your next destination..." },
      ],
      hotelsTitle: "Popular Hotels",
      hotels: [
        { imageNumber: 20, title: "Lakeside Motel Warefront", properties: "2246" },
        { imageNumber: 21, title: "Recce Graham resort", properties: "1278" },
        { imageNumber: 22, title: "Fireside Dinners", properties: "480" },
        { imageNumber: 23, title: "Oculous Inn Stay", properties: "320" },
      ],
      columns: [
        { title: "My Dream Place", description: "You need a companion for travel." },
        { title: "Company", list: ["About", "Jobs", "Newsroom", "Advertising", "Contact Us"] },
        { title: "Explore", list: ["Australia", "New Zealand", "United States", "Greece", "Maldives", "Singapore"], seeMore: "See More" },
        { title: "Terms and Policy", list: ["Privacy Policy", "Terms of Use", "Accessibility", "Reward System Policy"] },
        { title: "Help", list: ["Support", "Cancel Your Booking", "Use Coupon", "Refund Policies", "International Travel Documents"] },
      ],
      downloadTitle: "Download the mobile application for bonus",
      downloadSubtitle: "coupons and travel codes.",
      downloadButtonLabel: "Download mobile app",
    };
  },
  components: {
    Navbar,
    Hero,
  },
  methods: {
    downloadMobileApp() {
      // Implement logic for downloading the mobile app
      console.log('Downloading mobile app...');
      // You can add further logic like opening a download link or redirecting to an app store
    },
  },
};



</script>

<style scoped>
/* Add scoped styles if needed */
</style>









