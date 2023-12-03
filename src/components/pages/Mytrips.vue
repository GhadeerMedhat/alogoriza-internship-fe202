<template>
  <Navbar />
  <div class="flex flex-col items-center mb-7 text-2xl font-semibold">
    My trips
  </div>
  <!-- Card One -->
  <div class="flex flex-col items-center">
    <!-- Hotel Card -->
    <div
      class="flex items-center mt-2 xl-cart xl-cart border-2 border-gray-200 p-5 box-border"
    >
      <!-- Image -->
      <div class="flex-shrink-0">
        <img
          :src="require('../../assets/Rectangle 20.png')"
          alt="Hotel Image"
          class="w-72 h-75 rounded-md"
        />
      </div>

      <!-- Hotel Information -->
      <div class="ml-4">
        <!-- Title -->
        <div class="flex items-center space-x-4">
          <h3 class="text-xl font-semibold mb-2">Lakeside Motel Warefront</h3>
          <div class="ml-4 text-right"></div>
        </div>

        <!-- Views and Price Information -->
        <div class="flex items-center space-x-0 mb-4">
          <div v-for="view in views" :key="view">
            <img
              :src="require('../../assets/star-s-fill 3.png')"
              alt="View"
              class="w-5 h-5"
            />
          </div>
          <span class="text-sm">4.5(1200 views)</span>
        </div>

        <!-- Description -->
        <div class="flex items-center text-red-500 space-x-4 text-sm mb-1">
          Non refundable
        </div>
        <div class="flex items-center space-x-4 text-sm mb-1">
          Check in :Sunday,March 18,2022
        </div>
        <div class="flex items-center space-x-4 text-sm mb-1">
          check out:Tuesday ,March 20,2022
        </div>
        <div class="flex items-center space-x-4 text-sm mb-3">2 night stay</div>

        <!-- Availability Button -->
      </div>
      <div class="ml-4 text-right"></div>
      <!-- Price Section -->
      <div class="ml-4 text-right">
        <p class="text-xl font-semibold mt-5">$130</p>
        <p class="text-red-500 line-through">$150</p>
        <p class="text-sm mb-3">includes taxes and fees</p>
        <button class="bg-blue-500 text-white p-2 rounded-md">
          View trip details
        </button>
      </div>
    </div>
  </div>

  <!--Card two -->

  <!-- Card One -->
  <div class="flex flex-col items-center mt-9 mb-14 pb-18">
    <!-- Hotel Card -->
    <div
      class="flex items-center mt-2 xl-cart xl-cart border-2 border-gray-200 p-5 box-border"
    >
      <!-- Image -->
      <div class="flex-shrink-0">
        <img
          :src="require('../../assets/Rectangle 23.png')"
          alt="Hotel Image"
          class="w-72 h-75 rounded-md"
        />
      </div>

      <!-- Hotel Information -->
      <div class="ml-4">
        <!-- Title -->
        <div class="flex items-center space-x-4">
          <h3 class="text-xl font-semibold mb-2">Arabia Azur Beach Hotel</h3>
          <div class="ml-4 text-right"></div>
        </div>

        <!-- Views and Price Information -->
        <div class="flex items-center space-x-0 mb-4">
          <div v-for="view in views" :key="view">
            <img
              :src="require('../../assets/star-s-fill 3.png')"
              alt="View"
              class="w-5 h-5"
            />
          </div>
          <span class="text-sm">7.8(1543 views)</span>
        </div>

        <!-- Description -->
        <div class="flex items-center text-red-500 space-x-4 text-sm mb-1">
          Non refundable
        </div>
        <div class="flex items-center space-x-4 text-sm mb-1">
          Check in :Sunday,March 18,2022
        </div>
        <div class="flex items-center space-x-4 text-sm mb-1">
          check out:Tuesday ,March 20,2022
        </div>
        <div class="flex items-center space-x-4 text-sm mb-3">2 night stay</div>
      </div>
      <div class="ml-4 text-right"></div>
      <!-- Price Section -->
      <div class="ml-4 text-right">
        <p class="text-xl font-semibold mt-5">$190</p>
        <p class="text-red-500 line-through">$210</p>
        <p class="text-sm mb-3">includes taxes and fees</p>
        <button class="bg-blue-500 text-white p-2 rounded-md">
          View trip details
        </button>
      </div>
    </div>
  </div>

  <div
    class="bg-yellow-100 text-black-500 p-3 ml-20 mr-20 mt-20 mb-20 relative"
  >
    <div class="flex items-center">
      <img
        :src="require('../../assets/danger 1.png')"
        alt="Small Image"
        class="w-8 h-8 mr-2"
        style="position: relative; z-index: 1"
      />
      <p class="ml-2 tracking-wider">
        {{ covidMessage }} <span class="text-blue-500">{{ learnMore }}</span>
      </p>
    </div>
  </div>

  <!--Fotter -->
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
          <li v-for="(item, index) in columns[1].list" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[2].title }}</h2>
        <ul>
          <li v-for="(item, index) in columns[2].list" :key="index">
            {{ item }}
          </li>
          <li class="text-blue-500">{{ columns[2].seeMore }}</li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[3].title }}</h2>
        <ul>
          <li v-for="(item, index) in columns[3].list" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Column 5 -->
      <div class="w-1/5">
        <h2 class="text-lg font-bold">{{ columns[4].title }}</h2>
        <ul>
          <li v-for="(item, index) in columns[4].list" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div
    class="bg-gray-300 text-white p-0 fixed bottom-0 right-0 w-full flex items-center justify-between"
  >
    <div class="flex items-center">
      <!-- Small picture -->
      <img
        :src="require('../../assets/copyright 1.svg')"
        alt="Small Image"
        class="w-8 h-8 mr-2"
      />

      <!-- Text -->
      <span class="text-l">{{ copyrightText }}</span>
    </div>

    <!-- Add other elements or links as needed -->
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../layouts/Navbar.vue";
export default {
  data() {
    return {
      covidMessage:
        "Check the latest COVID-19 restrictions before your travel and",
      learnMore: "Learn more.",
      copyrightText: "My Dream Place 2022",
      columns: [
        {
          title: "My Dream Place",
          description: "You need a companion for travel.",
        },
        {
          title: "Company",
          list: ["About", "Jobs", "Newsroom", "Advertising", "Contact Us"],
        },
        {
          title: "Explore",
          list: [
            "Australia",
            "New Zealand",
            "United States",
            "Greece",
            "Maldives",
            "Singapore",
          ],
          seeMore: "See More",
        },
        {
          title: "Terms and Policy",
          list: [
            "Privacy Policy",
            "Terms of Use",
            "Accessibility",
            "Reward System Policy",
          ],
        },
        {
          title: "Help",
          list: [
            "Support",
            "Cancel Your Booking",
            "Use Coupon",
            "Refund Policies",
            "International Travel Documents",
          ],
        },
      ],
    };
  },
  components: {
    Navbar,
  },
  emits: ["availability", "book-now", "discount"],
  methods: {
    emitAvailability() {
      this.$emit("availability");
    },
    emitBookNow() {
      this.$emit("book-now");
    },
    emitDiscount() {
      this.$emit("discount");
    },
  },
};
</script>
