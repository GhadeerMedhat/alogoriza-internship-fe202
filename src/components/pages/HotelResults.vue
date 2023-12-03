<!-- HotelResults.vue -->
<template>
  <div :class="bgClass" class="overflow-hidden">
    <Navbar :customClass="bgClass" />

    <!-- hero-->
    <div class="flex-col flex items-center mt-12 pt-12">
      <div class="flex items-center space-x-4 bg-gray-200 p-4 rounded-md">
        <div class="rounded-md">
          <select v-model="selectedCityName" class="border p-2 rounded-lg">
            <option :value="selectedCityName">{{ selectedCityName }}</option>
          </select>
        </div>
        <!-- Second Input: Check-in Date -->
        <div class="relative">
          <input
            v-model="checkInDate"
            type="text"
            :placeholder="showCheckInCalendar ? '' : 'Check-in Date'"
            class="border p-2 w-40 pl-8 rounded-lg"
            @click="showCheckInCalendar = !showCheckInCalendar"
            disabled
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
            v-if="showCheckInCalendar"
            v-model="checkInDate"
            type="date"
            :min="tomorrow"
            class="border p-2 absolute top-10 left-0"
          />
        </div>

        <!-- Third Input: Check-out Date -->
        <div class="relative">
          <input
            v-model="checkOutDate"
            type="text"
            :placeholder="showCheckOutCalendar ? '' : 'Check-out Date'"
            class="border p-2 w-40 pl-8 rounded-lg"
            @click="showCheckOutCalendar = !showCheckOutCalendar"
            disabled
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
            type="text"
            :value="'Guests: ' + guests"
            class="border p-2 w-40 pl-8 rounded-lg"
            disabled
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
        </div>

        <!-- Fifth Input: Rooms -->
        <div class="relative">
          <input
            type="text"
            :value="'Rooms: ' + rooms"
            class="border p-2 w-40 pl-8 rounded-lg"
            disabled
          />
          <div
            class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
          >
            <!-- Add your image source in the 'src' attribute -->
            <img
              src="../../assets/rooms.png"
              alt="Rooms icon"
              class="w-4 h-4"
            />
          </div>
        </div>
        <button
          @click="search"
          class="bg-blue-500 text-lg text-white p-2 w-40 rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  </div>

  <div class="flex">
    <!-- Left Sidebar -->
    <div class="w-1/4 ml-12 p-4">
      <div class="bg-gray-300 p-2 rounded-md">
        <!-- Search input with label -->
        <label class="font-semibold mb-2 flex items-center space-x-2">
          <img
            src="../../assets/search.png"
            alt="Search Icon"
            class="w-4 h-4"
          />
          <span>Search by Property Name:</span>
        </label>

        <!-- Search input field -->
        <div class="relative">
          <input
            type="text"
            v-model="propertyNameSearch"
            @keyup.enter="searchByPropertyName"
            placeholder="e.g., Beach Westpalm"
            class="border p-2 rounded mb-3 pl-8"
            style="
              background-image: url('../../assets/search.png');
              background-size: 16px 16px;
              background-repeat: no-repeat;
              background-position: 4px center;
            "
          />
        </div>
      </div>

      <!-- Additional content under the left sidebar -->
      <div class="mt-4">
        <!-- Add your additional content here -->
        <label class="font-semibold block border p-2 m-0 bg-gray-100 rounded"
          >Your Budget per Day:</label
        >
        <div class="space-y-2 mt-3">
          <!-- Predefined Budget Ranges -->
          <label
            for="budget0-1000"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              id="budget0-1000"
              value="0-1000"
              v-model="selectedBudget"
              @change="applyBudgetFilter('0-1000')"
            />
            <span class="ml-1"> $0 - $1000 </span>
          </label>

          <label
            for="budget1000-5000"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              id="budget1000-5000"
              value="1000-5000"
              v-model="selectedBudget"
              @change="applyBudgetFilter('1000-5000')"
            />
            <button @click="applyBudgetFilter('1000-5000')">
              $1000 - $5000
            </button>
          </label>

          <label
            for="budget5000-10000"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              id="budget5000-10000"
              value="5000-10000"
              v-model="selectedBudget"
              @change="applyBudgetFilter('5000-10000')"
            />
            <button @click="applyBudgetFilter('5000-10000')">
              $5000 - $10000
            </button>
          </label>

          <label
            for="budget10000-15000"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              id="budget10000-15000"
              value="10000-15000"
              v-model="selectedBudget"
              @change="applyBudgetFilter('10000-15000')"
            />
            <button @click="applyBudgetFilter('10000-15000')">
              $10000 - $15000
            </button>
          </label>

          <label
            for="budget15000-22000"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              id="budget15000-22000"
              value="15000-22000"
              v-model="selectedBudget"
              @change="applyBudgetFilter('15000-22000')"
            />
            <button @click="applyBudgetFilter('15000-22000')">
              $15000 - $22000
            </button>
          </label>

          <!-- Custom Budget Toggle -->
          <label
            for="customBudgetToggle"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="customBudgetToggle"
              v-model="isCustomBudgetEnabled"
              @change="toggleCustomBudget"
              class="hidden"
            />
            <span class="text-gray-700">Set Your Own Budget</span>
          </label>

          <!-- Custom Budget Input Fields (Hidden by default) -->
          <div v-if="isCustomBudgetEnabled" class="flex space-x-2 mt-2">
            <label for="minBudget" class="text-gray-700"></label>
            <input
              type="number"
              id="minBudget"
              v-model="customMinBudget"
              @keyup.enter="searchHotels"
              placeholder="Min Budget"
              class="border p-1 rounded w-1/2"
            />

            <label for="maxBudget" class="text-gray-700"></label>
            <input
              type="number"
              id="maxBudget"
              v-model="customMaxBudget"
              @keyup.enter="searchHotels"
              placeholder="Max Budget"
              class="border p-1 rounded w-1/2"
            />
          </div>
          <p class="text-sm">Press enter to filter</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center spaces-x-4">
      <!-- Hotel cards loop -->
      <div v-if="hotels && hotels.length">
        <div
          v-for="hotel in hotels"
          :key="hotel.hotel_id"
          class="bg-white overflow-hidden border w-full m-cart flex hotel-card border-gray-300 rounded box-border mb-6"
        >
          <!-- Display hotel information -->
          <img
            v-if="hotel.property.photoUrls && hotel.property.photoUrls.length"
            :src="hotel.property.photoUrls[0]"
            alt="Hotel Photo"
            class="w-1/3 h-1/3 rounded"
          />
          <div class="p-4 w-1/2">
            <!-- -->

            <p class="text-gray-600">{{ hotel.property.address }}</p>

            <!-- Description and Property -->
            <div class="flex mt-2">
              <!-- Description -->
              <div class="w-1/2">
                <div class="flex items-center space-x-0 text-sm">
                  <h3 class="text-xl font-bold mb-3">
                    {{ hotel.property.name }}
                  </h3>
                </div>
                <div class="flex items-center space-x-0 text-sm mb-4">
                  <img src="../../assets/star-s-fill 3.png" alt="star" />
                  <img src="../../assets/star-s-fill 3.png" alt="star" />
                  <img src="../../assets/star-s-fill 3.png" alt="star" />
                  <img src="../../assets/star-s-fill 3.png" alt="star" />
                  <p>{{ hotel.property.reviewScore }}</p>
                  <p>({{ hotel.property.reviewCount || 0 }} views)</p>
                </div>

                <div
                  class="flex items-start space-x-1 m-2 text-xs pr-0 overflow-hidden"
                  style="
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: hori;
                  "
                >
                  <p>{{ hotel.accessibilityLabel }}</p>
                </div>
                <div class="flex items-center space-x-4 text-sm">
                  <router-link
                    :to="{
                      name: 'ProductDetails',
                      params: { productId: hotel.hotel_id },
                    }"
                    class="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                  >
                    See Availability
                  </router-link>
                </div>
              </div>

              <!-- Property -->
              <div class="w-1/2 text-sm">
                <div class="mt-4 ml-8">
                  <div class="flex items-end">
                    <span
                      v-if="hotel.property.priceBreakdown?.strikethroughPrice"
                      class="bg-green-500 text-white rounded p-0.5"
                    >
                      book now and receive
                      {{
                        parseInt(
                          calculatePercentageDiscount(
                            hotel.property.priceBreakdown.strikethroughPrice
                              .value,
                            hotel.property.priceBreakdown.grossPrice.value
                          )
                        )
                      }}
                      % off
                    </span>
                  </div>

                  <ul v-if="hotel.property" class="list-disc list-inside">
                    <div class="mt-16">
                      <span
                        v-if="hotel.property.priceBreakdown?.strikethroughPrice"
                        class="bg-green-500 text-white rounded p-0.5 mb-3"
                      >
                        {{
                          parseInt(
                            calculatePercentageDiscount(
                              hotel.property.priceBreakdown.strikethroughPrice
                                .value,
                              hotel.property.priceBreakdown.grossPrice.value
                            )
                          )
                        }}% off
                      </span>
                      <p>
                        {{
                          parseInt(
                            hotel.property.priceBreakdown?.strikethroughPrice
                              ?.value
                          )
                        }}
                      </p>
                      <div class="text-red-400 line-through">
                        <p
                          :class="{
                            '  line-through': parseInt(
                              hotel.property.priceBreakdown?.strikethroughPrice
                            ),
                          }"
                        >
                          {{
                            parseInt(
                              hotel.property.priceBreakdown?.grossPrice?.value
                            )
                          }}
                        </p>
                      </div>
                      <p class="text-sm">include taxes and prices</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>No hotels found.</div>

      <!--pagiation -->

      <div class="flex justify-center mt-4">
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="changePage(pageNumber)"
          :class="{
            'bg-blue-500 text-white': currentPage === pageNumber,
            'mx-1': true,
            'px-3 py-2': true,
          }"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>

    <!-- Right Sidebar -->
    <div class="w-1/4 p-4 mr-5 pl-6">
      <div class="bg-gray-300 p-2 rounded-md mr-7">
        <label for="sortingDropdown" class="text-sm">Sort By:</label>
        <select
          id="sortingDropdown"
          v-model="selectedSortingOption"
          @change="applySorting"
          class="border p-2 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Recommended</option>
          <option
            v-for="option in sortingOptionsForDropdown"
            :key="option.id"
            :value="option.id"
          >
            {{ option.title }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../layouts/Navbar.vue";
import axios from "axios";
export default {
  data() {
    return {
      bgClass: "bg-blue-500",
      dest_id: null,
      selectedCityName: "",
      checkInDate: "",
      checkOutDate: "",
      guests: 1,
      rooms: 1,
      showCheckInCalendar: false,
      showCheckOutCalendar: false,
      hotels: [],
      currentPage: 1,
      itemsPerPage: 5,
      selectedBudget: "",
      isCustomBudgetEnabled: true,
      customMinBudget: null,
      customMaxBudget: null,
      propertyNameSearch: "",
      selectedSortingOption: "", // Only one declaration needed
      sortingOptions: [],
      showSortingOptions: false,
      searchQuery: "",
    };
  },
  components: {
    Navbar,
  },
  computed: {
    tomorrow() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    },
    totalPages() {
      return Math.ceil(this.hotels.length / this.itemsPerPage);
    },
    paginatedHotels() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.hotels.slice(start, end);
    },
    sortingOptionsForDropdown() {
      console.log("sortingOptions:", this.sortingOptions);
      return this.sortingOptions.map((option) => ({
        id: option.id,
        title: option.title,
      }));
    },
  },

  methods: {
    async fetchHotels() {
      try {
        console.log("Fetching Hotels with dest_id:", this.dest_id);
        console.log("Selected Budget:", this.selectedBudget);
        console.log("Selected Sorting Option:", this.selectedSortingOption);
        // Set loading to true before making the request

        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
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
              price_range: this.selectedBudget,
              sorting_option: this.selectedSortingOption,
            },
            headers: {
              "X-RapidAPI-Key":
                "4b4359e61bmsh96f1a9d20706fb6p18fa63jsnb85aca51869d",
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );

        // Log the API response
        console.log("Fetched Hotels:", response.data);

        // Set the hotels array with the fetched data
        this.hotels = response.data?.data?.hotels || [];
        const filteredHotels = response.data?.data?.hotels || [];
        this.hotels = this.filterHotelsByBudget(
          filteredHotels,
          this.selectedBudget
        );
      } catch (error) {
        // Log any errors during the API request
        console.error("API Error:", error);
      } finally {
        // Set loading back to false after the request is complete (whether it was successful or not)
      }
    },

    async GetSortBy() {
      try {
        const response = await axios.get(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
          {
            params: {
              dest_id: this.dest_id,
              search_type: "CITY", // Specify a valid search_type
              arrival_date: this.checkInDate,
              departure_date: this.checkOutDate,
              adults: "1",
              children_age: "1,17",
              room_qty: "1",
            },
            headers: {
              "X-RapidAPI-Key":
                "4b4359e61bmsh96f1a9d20706fb6p18fa63jsnb85aca51869d",
              "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
            },
          }
        );

        console.log("Complete API Response:", response.data);

        // Check the structure of response.data to ensure it contains 'appear'
        console.log("Sorting Options Data:", response.data.appear);

        // Process the sorting options and update the sortingOptions property
        this.sortingOptions = response.data?.data || [];
      } catch (error) {
        // Log any errors during the API request
        console.error("API Error:", error);
      } finally {
        // Set loading back to false after the request is complete
      }
    },

    selectSortingOption(option) {
      this.selectedSortingOption = option.id;
      this.showSortingOptions = false;
      // Handle sorting logic or trigger a function based on the selected option
    },

    applySorting() {
      // You can perform any additional validation or processing here
      console.log("Applying sorting option:", this.selectedSortingOption);

      // Fetch hotels based on the selected sorting option
      this.fetchHotels();
    },

    filterHotelsByBudget(hotels, budgetRange) {
      if (!budgetRange) {
        return hotels;
      }

      return hotels.filter((hotel) => {
        const hotelPrice = parseFloat(hotel.price);
        return hotelPrice >= budgetRange.min && hotelPrice <= budgetRange.max;
      });
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
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    calculatePercentageDiscount(strikethroughPrice, grossPrice) {
      // Ensure both prices are provided and are valid numbers
      if (
        strikethroughPrice &&
        grossPrice &&
        !isNaN(strikethroughPrice) &&
        !isNaN(grossPrice)
      ) {
        // Calculate and return the percentage discount
        const discount =
          ((strikethroughPrice - grossPrice) / strikethroughPrice) * 100;
        return discount.toFixed(2); // Display the discount with two decimal places
      }

      return "N/A";
    },
    applyBudgetFilter(budgetRange) {
      // Update the selectedBudget with the chosen budget range
      console.log("Applying budget filter:", budgetRange);
      this.selectedBudget = budgetRange;

      console.log("Selected Budget:", this.selectedBudget);

      // Fetch hotels based on the selected budget range
      this.fetchHotels();
    },

    toggleCustomBudget() {
      if (!this.isCustomBudgetEnabled) {
        // Reset custom budget values when the switch is turned off
        this.customMinBudget = null;
        this.customMaxBudget = null;
      }
    },
    searchHotels() {
      const filteredHotels = this.hotels.filter((hotel) => {
        const idMatch =
          hotel.id &&
          hotel.id.toLowerCase().includes(this.searchQuery.toLowerCase());

        const titleMatch =
          hotel.title &&
          hotel.title.toLowerCase().includes(this.searchQuery.toLowerCase());

        return idMatch || titleMatch;
      });

      // Update the hotels array with the filtered hotels
      this.hotels = filteredHotels;

      // Trigger hotel search based on the custom budget range
      if (this.isCustomBudgetEnabled) {
        const minBudget = parseInt(this.customMinBudget);
        const maxBudget = parseInt(this.customMaxBudget);

        if (!isNaN(minBudget) && !isNaN(maxBudget) && minBudget <= maxBudget) {
          const customBudgetRange = `${minBudget}-${maxBudget}`;
          this.applyBudgetFilter(customBudgetRange);
        } else {
          // Display an error message or handle the invalid input
          console.error("Invalid custom budget range");
        }
      }
    },

    searchByPropertyName() {
      // Filter hotels based on the property name
      const filteredHotels = this.hotels.filter((hotel) =>
        hotel.property.name
          .toLowerCase()
          .includes(this.propertyNameSearch.toLowerCase())
      );

      // Update the hotels array with the filtered hotels
      this.hotels = filteredHotels;
    },
    toggleColor() {
      // Example: Toggle between blue and red colors
      this.bgClass =
        this.bgClass === "bg-blue-500" ? "bg-red-500" : "bg-blue-500";
    },
  },

  mounted() {
    // Get the selected values from the route parameters
    this.dest_id = this.$route.params.dest_id;
    this.selectedCityName = this.$route.query.cityName;
    this.checkInDate = this.$route.query.checkInDate || "";
    this.checkOutDate = this.$route.query.checkOutDate || "";
    this.guests = parseInt(this.$route.query.guests) || 1;
    this.rooms = parseInt(this.$route.query.rooms) || 1;

    console.log("Sorting Options:", this.sortingOptions);
    // Now, log the retrieved dest_id to ensure it's not undefined
    console.log("Retrieved dest_id from route parameters:", this.dest_id);

    console.log(
      "Retrieved cityName from route parameters:",
      this.selectedCityName
    );
    // Call the fetchHotels method
    this.fetchHotels();
    this.GetSortBy();
  },
};
</script>

<style scoped>
.bg-blue-500 {
  background-color: #3490dc; /* or the specific blue color you want */
}
</style>
