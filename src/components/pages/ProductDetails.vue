<template>
  <div>
    <Navbar />

    <div class="flex items-center ml-16 pl-10 mb-7 mt-8 pr-10 mr-10">
      <!-- Large Photo -->
      <div class="w-2/3 pr-3 mb-3">
        <img
          :src="require('../../assets/Rectangle 28.png')"
          alt="Large Photo"
          class="w-full rounded-lg"
        />
      </div>

      <!-- Small Photos -->
      <div class="flex flex-col w-1/3 pr-9 ml-9">
        <img
          :src="require('../../assets/Rectangle 29.png')"
          class="mb-4 rounded-lg"
        />
        <img
          :src="require('../../assets/Rectangle 30.png')"
          class="rounded-lg"
        />
      </div>
    </div>

    <div class="mt-12 ml-16 pl-9 flex items-baseline">
      <p class="overview-heading relative">
        Overview
        <span
          class="line-block absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
        ></span>
      </p>
      <p class="ml-7">Rooms</p>
    </div>
  </div>

  <div>
    <div class="flex items-start ml-16 pl-9 mb-7 mt-8 pr-10 mr-10 bg-slate-100">
      <!-- Left -->

      <div class="w-2/3 pr-3">
        <!-- <h2>{{ hotelName }}</h2> -->
        <h2 class="text-2xl mt-4">Lakeside Moteal WaterFront</h2>

        <!-- Images and Descriptions Section -->
        <div class="flex items-center mt-4">
          <!-- Image 1 -->
          <div class="mr-1">
            <img
              :src="require('../../assets/star-s-fill 3.png')"
              class="rounded-lg"
              alt="Image 1"
            />
          </div>

          <!-- Image 2 -->
          <div class="mr-1">
            <img
              :src="require('../../assets/star-s-fill 3.png')"
              class="rounded-lg"
              alt="Image 2"
            />
          </div>
          <div class="mr-1">
            <img
              :src="require('../../assets/star-s-fill 3.png')"
              class="rounded-lg"
              alt="Image 2"
            />
          </div>
          <div class="mr-1">
            <img
              :src="require('../../assets/star-s-fill 3.png')"
              class="rounded-lg"
              alt="Image 2"
            />
          </div>
          <div class="mr-2">
            <p>4.5 (1200 reviews)</p>
          </div>
          <br />
          <!--   <p class="text-gray-600 mt-4">Address: {{ hotelAddress }}</p> -->
          <!-- Add more details as needed -->
        </div>

        <div class="flex items-center mt-2">
          <!-- Star Image -->
          <img
            :src="require('../../assets/location 1.png')"
            class="rounded-lg"
            alt="Star Image"
          />

          <!-- Address Information -->
          <div class="ml-2">
            <p>lorem ipsum road, Tantruin-2322, Melbourne, Australia</p>
          </div>
        </div>

        <div class="ml-3 mt-6 mr-2 pr-9 p-7 bg-white shadow-sm">
          <p class="text-xl font-semibold">overview</p>
          <br />
          <p>
            Featuring free WiFi throughout the property, Lakeside Motel
            Waterfront offers accommodations in Lakes Entrance, 19 mi from
            Bairsdale. Free private parking is available on site. <br />
            <br />
            Each room at this motel is air conditioned and comes with a
            flat-screen TV. You will find a kettle, toaster and a microwave in
            the room. Each room is fitted with a private bathroom. Guests have
            access to barbecue facilities and a lovely large lawn area. Metung
            is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi
            from the property.<br />
            <br />
            Couples in particular like the location - they rated it 9.2 for a
            two-person trip.
          </p>

          <hr class="mt-6 mb-6" />

          <div class="flex">
            <!-- First Column -->
            <div class="w-1/2 pr-4">
              <h2 class="mb-4">Top Facilities</h2>
              <div class="flex items-center mb-4">
                <img
                  src="../../assets/home-wifi 1.svg"
                  alt="Free WiFi Photo"
                  class="w-5 h-5 mr-2 rounded-full"
                />
                <p>Free WiFi</p>
              </div>
              <div class="flex items-center mb-4">
                <img
                  src="../../assets/wind 1.svg"
                  alt="Air Conditioner Photo"
                  class="w-5 h-5 mr-2 rounded-full"
                />
                <p>Air Conditioner</p>
              </div>
              <div class="flex items-center mb-4">
                <img
                  src="../../assets/car 1.svg"
                  alt="Parking Photo"
                  class="w-5 h-5 mr-2 rounded-full"
                />
                <p>Parking Available</p>
              </div>
            </div>

            <!-- Second Column -->
            <div class="w-1/2 pr-12 mr-16">
              <h2 class="mb-4">Business Services</h2>
              <div class="flex items-center mb-4">
                <img
                  src="../../assets/bag-tick-2 1.svg"
                  alt="Business Services Photo"
                  class="w-5 h-5 mr-2 rounded-full"
                />
                <p>Business Services</p>
              </div>
              <div class="flex items-center mb-4">
                <img
                  src="../../assets/lifebuoy 1.svg"
                  alt="Swimming Pool Photo"
                  class="w-5 h-5 mr-2 rounded-full"
                />
                <p>Swimming Pool</p>
              </div>
              <div class="flex items-center mb-4">
                <img
                  src="../../assets/like-1 1.svg"
                  alt="Top Rated Photo"
                  class="w-5 h-5 mr-2 rounded-full"
                />
                <p>Top Rated in Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- right-->
      <div class="flex flex-col w-1/3.2 pr-9 ml-9">
        <img
          :src="require('../../assets/Rectangle 65.png')"
          class="mb-4 rounded-lg"
        />

        <div class="flex flex-col w-1/3.2 mb-5 mt-5 font-semibold">
          Explore the Areae
        </div>

        <div class="flex">
          <!-- First Column -->
          <div class="w-1/2 text-sm">
            <div class="flex items-center mb-4">
              <img
                src="../../assets/bxs-plane-alt 2.svg"
                alt="photo1"
                class="w-4 h-4 mr-2 rounded-full"
              />
              <p>Hotel Penselvenyia</p>
            </div>
            <div class="flex items-center mb-4">
              <img
                src="../../assets/bxs-map 1.svg"
                alt="photo2"
                class="w-4 h-4 mr-2 rounded-full"
              />
              <p>Travis Bakery Store house</p>
            </div>

            <div class="flex items-center mb-4">
              <img
                src="../../assets/bxs-map 1.svg"
                alt="Parking Photo"
                class="w-5 h-5 mr-2 rounded-full"
              />
              <p>Olivia Johnson Garden</p>
            </div>
            <div class="flex items-center mb-4">
              <img
                src="../../assets/bxs-map 1.svg"
                alt="Parking Photo"
                class="w-5 h-5 mr-2 rounded-full"
              />
              <p>Norman Opera Circus</p>
            </div>
            <div class="flex items-center mb-4">
              <img
                src="../../assets/bxs-map 1.svg"
                alt="Parking Photo"
                class="w-5 h-5 mr-2 rounded-full"
              />
              <p>Rockdeset hotel</p>
            </div>
          </div>

          <!-- Second Column -->
          <div class="w-1/3 ml-14 pl-22 text-sm">
            <div class="flex items-center mb-4">
              <p>2 min drive</p>
            </div>
            <div class="flex items-center mb-4">
              <p>10 min drive</p>
            </div>
            <div class="flex items-center mb-4">
              <p>15 min drive</p>
            </div>
            <div class="flex items-center mb-4">
              <p>18 min drive</p>
            </div>

            <div class="flex items-center mb-4">
              <p>32 min drive</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </div>

  <div class="flex items-center ml-16 pl-10 mb-7 mt-8 pr-10 mr-10">
    <h1 class="text-xl font-semibold">Available Rooms</h1>
  </div>

  <div class="flex justify-center p-3 mt-2 mb-4 ml-20 mr-20 relative">
    <!-- First Card -->
    <div class="flex-none mr-4">
      <!-- Container for Image, Paragraph, and Nested Image -->
      <div class="relative mr-4">
        <!-- Main Image -->
        <img
          :src="require('../../assets/Rectangle 67.png')"
          alt="Room 1"
          class="w-2/2 h-2/3 shadow-xl border rounded-lg mb-2"
        />

        <!-- Nested Image -->
        <img
          src="../../assets/man.jpeg"
          alt="Nested Image"
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-1/3 h-1/2"
        />

        <!-- Paragraph -->
        <p
          class="absolute top-1/4 left-1/4 transform -translate-x-full text-start text-sm text-white"
        >
          my dream place
        </p>
        <p
          class="absolute top-1/3 left-1/2 transform -translate-x-full text-start text-lg text-white"
        >
          20% off use promotional
        </p>
        <p
          class="absolute top-1/2 left-1/2 transform -translate-x-full text-start text-lg text-white"
        >
          coupon code: <span class="text-yellow-400">orlando</span>
        </p>
      </div>
    </div>

    <!-- Second Card -->
    <div class="flex-none mr-4">
      <!-- Photo and Title -->
      <img
        :src="require('../../assets/Rectangle 70.png')"
        alt="Room 2"
        class="w-full rounded-md border shadow-md bg-white-50 mb-2"
      />
      <div class="flex flex-col mb-3">
        <p class="font-semibold text-lg mb-1">
          Standard twin ben ,Multiple beds
        </p>

        <!-- Three Lines with Small Photos and Paragraph -->
        <div class="flex mb-3 text-xs">
          <img
            :src="require('../../assets/bag-tick-2 1.svg')"
            alt="Small Photo 1"
            class="w-4 h-4 mr-1 rounded-full"
          />
          <p class="mr-2">400 sq ft.</p>
        </div>
        <div class="flex mb-3 text-xs">
          <img
            :src="require('../../assets/lifebuoy 1.svg')"
            alt="Small Photo 2"
            class="w-4 h-4 mr-1 rounded-full"
          />
          <p class="mr-2">sleep 4 .</p>
        </div>
        <div class="flex mb-3 text-xs">
          <img
            :src="require('../../assets/like-1 1.svg')"
            alt="Small Photo 3"
            class="w-4 h-4 mr-1 rounded-full"
          />
          <p class="mr-2">1 double bed and 1 twin bed.</p>
        </div>

        <!-- Button -->
        <router-link to="/checkout">
          <button class="w-full bg-blue-500 text-white rounded-md py-2 mt-5">
            Reserve Suite
          </button>
        </router-link>
      </div>
    </div>

    <!-- Third Card -->
    <div class="flex-none">
      <!-- Photo and Title -->
      <img
        :src="require('../../assets/Rectangle 71.png')"
        alt="Room 3"
        class="w-full rounded-lg mb-2"
      />
      <div class="flex flex-col mb-3">
        <p class="font-semibold text-lg mb-1">
          Standared twin bed ,1 Queen bed
        </p>

        <!-- Three Lines with Small Photos and Paragraph -->
        <div class="flex mb-3 text-xs">
          <img
            :src="require('../../assets/bag-tick-2 1.svg')"
            alt="Small Photo 4"
            class="w-4 h-4 mr-1 rounded-full"
          />
          <p class="mr-2">500 sq ft.</p>
        </div>
        <div class="flex mb-3 text-xs">
          <img
            :src="require('../../assets/lifebuoy 1.svg')"
            alt="Small Photo 5"
            class="w-4 h-4 mr-1 rounded-full"
          />
          <p class="mr-2">sleep 5</p>
        </div>
        <div class="flex mb-3 text-xs">
          <img
            :src="require('../../assets/like-1 1.svg')"
            alt="Small Photo 6"
            class="w-4 h-4 mr-1 rounded-full"
          />
          <p class="mr-2">2 double bed and 1 twin bed</p>
        </div>

        <!-- Button -->
        <router-link to="/checkout">
          <button class="w-full bg-blue-500 text-white rounded-md py-2 mt-5">
            Reserve Suite
          </button>
        </router-link>
      </div>
    </div>
  </div>

  <div class="bg-yellow-100 text-black-500 p-3 ml-20 mr-20 relative">
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

<!-- 
    <div v-if="descriptionData && descriptionData.length > 0">
      <div v-for="(description, index) in descriptionData" :key="index">
        <h3>Description Type: {{ description.descriptiontype_id }}</h3>
        <p>{{ description.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>No descriptions available for this hotel.</p>
    </div>
  </div>
-->

<script>
import Navbar from "../layouts/Navbar.vue";
import axios from "axios";

export default {
  name: "ProductDetails",
  data() {
    return {
      largePhotoPath: "path/to/large-photo.jpg",
      smallPhoto1Path: "path/to/small-photo1.jpg",
      smallPhoto2Path: "path/to/small-photo2.jpg",
      descriptionData: null,
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
  props: {
    hotelName: String, // You can adjust the type based on your needs
    dest_id: Number, // Add any other necessary props
    checkInDate: String,
    checkOutDate: String,
    guests: Number,
    rooms: Number,
  },
  components: {
    Navbar,
  },
  mounted() {
    // Call the Rooms method when the component is mounted
    this.Rooms();
  },

  methods: {
    async Rooms() {
      try {
        console.log("Fetching Hotels with dest_id:", this.dest_id);

        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
          {
            params: {
              dest_id: this.dest_id,
              search_type: "CITY",
              arrival_date: this.checkInDate,
              departure_date: this.checkOutDate,
              adults: this.guests,
              children_age: "0,17",
              room_qty: this.rooms,
              page_number: "1",
              languagecode: "en-us",
              currency_code: "AED",
            },
            headers: {
              "X-RapidAPI-Key":
                "4b4359e61bmsh96f1a9d20706fb6p18fa63jsnb85aca51869d",
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );

        // Log the API response
        console.log("Rooms:", response.data);

        // Handle the response based on the API documentation
        if (response.data.status) {
          // The request was successful, update your state or UI
        } else {
          // Log and handle the error messages
          console.error("API Error:", response.data.message);
        }
      } catch (error) {
        // Log any errors during the API request
        console.error("API Error:", error);

        // Handle errors in your UI or state if needed
      } finally {
        // Set loading back to false after the request is complete
        // Update your loading state in your component if needed
      }
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
