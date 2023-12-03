<!-- Hero.vue -->
<template>
  <div class="flex items-center ml-24 mr-16 pl-4 mt-8">
    <div class="flex items-center space-x-4 bg-gray-200 p-4 rounded-md">
      <!-- First Input: City Dropdown -->
      <div class="ml-0">
        <!-- Add your image source in the 'src' attribute -->
        <img src="../../assets/star-s-fill 3.png" alt="Icon" class="w-5 h-5" />
      </div>
      <select v-model="selectedCity" class="border pr-3">
        <option value="" disabled selected>Where are you going?</option>
        <option
          v-for="city in filteredCities"
          :key="city.dest_id"
          :value="city.city_name"
        >
          {{ city.city_name }}
        </option>
      </select>

      <!-- Second Input: Check-in Date -->
      <div class="relative">
        <input
          v-model="checkInDate"
          type="text"
          :placeholder="'Check-in Date'"
          class="border p-2 pl-8 w-40 rounded-lg"
          ref="checkInDateInput"
        />

        <div
          class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
        >
          <!-- Add your image source in the 'src' attribute -->
          <img
            src="../../assets/calendar 1.png"
            alt="Calendar icon"
            class="w-4 h-4"
          />
        </div>
      </div>

      <!-- Third Input: Check-out Date -->
      <div class="relative">
        <input
          v-model="checkOutDate"
          type="text"
          :placeholder="'Check-out Date'"
          class="border p-2 pl-7 w-40 rounded-lg"
          ref="checkOutDateInput"
        />

        <div
          class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
        >
          <!-- Add your image source in the 'src' attribute -->
          <img
            src="../../assets/calendar 1.png"
            alt="Calendar icon"
            class="w-4 h-4"
          />
        </div>
        <input
          v-if="showCheckOutCalendar"
          v-model="checkOutDate"
          type="date"
          :min="nextDay(checkInDate)"
          class="border p-2 absolute top-10 left-0"
        />
      </div>

      <!-- Fourth Input: Guests -->
      <div class="relative">
        <input
          v-if="!showGuestsCounter"
          type="text"
          placeholder="Guests"
          class="border p-2 w-40 text-center rounded-lg p-1.7"
          @click="showGuestsCounter = true"
        />
        <div
          class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
        >
          <!-- Add your image source in the 'src' attribute -->
          <img
            src="../../assets/user-square 1.png"
            alt="User icon"
            class="w-4 h-4"
          />
        </div>
        <input
          v-if="showGuestsCounter"
          v-model="guests"
          type="number"
          min="1"
          class="border p-2 w-40 text-center rounded-lg p-1.7"
          @blur="showGuestsCounter = false"
        />
      </div>

      <!-- Fifth Input: Rooms -->
      <div class="relative">
        <input
          v-if="!showRoomsCounter"
          type="text"
          placeholder="Rooms"
          class="border p-2 w-40 text-center rounded-lg p-1.7"
          @click="showRoomsCounter = true"
        />
        <div
          class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
        >
          <!-- Add your image source in the 'src' attribute -->
          <img src="../../assets/rooms.png" alt="Rooms icon" class="w-4 h-4" />
        </div>
        <input
          v-if="showRoomsCounter"
          v-model="rooms"
          type="number"
          min="1"
          class="border p-2 w-40 text-center rounded-lg p-1.7"
          @blur="showRoomsCounter = false"
        />
      </div>

      <!-- Update the Search Button -->
      <button @click="search" class="bg-blue-500 text-white p-2">Search</button>
    </div>

    <!-- Add other content as needed -->
  </div>
</template>

<script>
import axios from "axios";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default {
  data() {
    return {
      selectedCity: "",
      selectedDestId: null,
      cities: [],
      filteredCities: [],
      checkInDate: "",
      checkOutDate: "",
      guests: 1,
      rooms: 1,
      showCheckInCalendar: false,
      showCheckOutCalendar: false,
      showGuestsCounter: false,
      showRoomsCounter: false,

      datepickerOptions: {
        minDate: new Date().fp_incr(1), // Set minimum date to today + 1 day
        dateFormat: "Y-m-d",
        onClose: this.handleDatepickerClose,
      },
    };
  },
  computed: {
    destinationId() {
      // Access the selectedDestId from route parameters
      return this.$route.params.dest_id;
    },

    tomorrow() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    },
    filteredCitiesWithTypeCity() {
      return this.filteredCities.filter((city) => city.search_type === "CITY");
    },
  },
  methods: {
    async fetchCities() {
      try {
        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
          {
            params: {
              query: "egypt", // You may want to update this query parameter
            },
            headers: {
              "X-RapidAPI-Key":
                "4b4359e61bmsh96f1a9d20706fb6p18fa63jsnb85aca51869d",
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );

        // Log the API response
        console.log("API Response:", response.data);

        // Set the cities data
        this.cities = response.data;

        // Check if the response has a 'data' property containing the city information
        if (this.cities.data && Array.isArray(this.cities.data)) {
          // Set the filteredCities based on the city data
          this.filteredCities = this.cities.data;
        } else {
          // Handle the case where the response structure is different
          console.error("Invalid API response structure");
        }
      } catch (error) {
        // Log any errors
        console.error("API Error:", error);
      }
    },

    nextDay(date) {
      if (!date) return this.tomorrow;

      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);

      if (isNaN(nextDay.getTime())) {
        return this.tomorrow;
      }

      return nextDay.toISOString().split("T")[0];
    },

    updatePlaceholderText(defaultText, currentValue) {
      return currentValue ? `Selected: ${currentValue}` : defaultText;
    },

    search() {
      if (this.selectedCity) {
        // Get the dest_id for the selected city
        const selectedCity = this.filteredCities.find(
          (city) => city.city_name === this.selectedCity
        );
        const dest_id = selectedCity ? selectedCity.dest_id : null;

        console.log("Selected Destination ID in search:", dest_id);

        if (dest_id) {
          // Update the selectedDestId and selectedCity based on the chosen city
          this.selectedDestId = dest_id;
          this.selectedCityName = this.selectedCity; // Add this line

          // Navigate to the HotelResults view with selected values, including dest_id and cityName
          this.$router.push({
            name: "HotelResults",
            params: {
              dest_id: dest_id,
            },
            query: {
              cityName: this.selectedCity, // Pass cityName as a query parameter
              checkInDate: this.checkInDate,
              checkOutDate: this.checkOutDate,
              guests: this.guests,
              rooms: this.rooms,
            },
          });
        } else {
          alert("Invalid city selection. Please try again.");
        }
      } else {
        alert("Please select a city before searching.");
      }
    },

    initializeDatepickers() {
      // Initialize date pickers when the component is mounted
      new Flatpickr(this.$refs.checkInDateInput, {
        ...this.datepickerOptions,
        // Add custom disable function for check-in date
        disable: [
          function (date) {
            // Disable today and any date before today
            return date <= new Date().setHours(0, 0, 0, 0);
          },
        ],
      });

      new Flatpickr(this.$refs.checkOutDateInput, {
        ...this.datepickerOptions,
        // Add custom disable function for check-out date
        disable: [
          // Disable today and any date before today
          function (date) {
            return date <= new Date().setHours(0, 0, 0, 0);
          },
          // Disable the same day as check-in date and any date before check-in date
          function (date) {
            return date <= new Date(this.checkInDate).setHours(0, 0, 0, 0);
          }.bind(this),
        ],
      });
    },

    handleDatepickerClose(selectedDates, dateStr, instance) {
      // Handle date picker close event if needed
      // You can access the selected dates and update your data
    },
  },

  async mounted() {
    try {
      // Fetch cities and set this.selectedDestId based on the response
      await this.fetchCities();

      // Log the cities and selectedDestId
      console.log("Cities:", this.cities);
      console.log("Selected Destination ID in mounted:", this.selectedDestId);

      this.initializeDatepickers();
      // Set this.selectedDestId based on the initially selected city
      const initialCity = this.filteredCities[0];
      this.selectedDestId = initialCity ? initialCity.dest_id : null;

      // Log the updated selectedDestId
      console.log("Updated Selected Destination ID:", this.selectedDestId);
    } catch (error) {
      console.error("Mount Error:", error);
    }
  },

  watch: {
    selectedCity() {
      // Optionally, you can perform actions when selectedCity changes
    },

    checkInDate(newValue) {
      this.$refs.checkOutDateInput._flatpickr.set("disable", [
        function (date) {
          // Disable the same day as check-in date and any date before check-in date
          return date <= new Date(newValue).setHours(0, 0, 0, 0);
        },
      ]);
    },
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
</style>
