<template>
  <div class="flex flex-col h-screen relative">
    <div class="flex items-center ml-16 mr-16 pl-4 mb-7">
      <h1 class="text-2xl font-bold">Secure your reservation</h1>
    </div>

    <div class="bg-yellow-100 text-black-500 p-3 ml-20 mr-20 relative">
      <div class="flex items-center">
        <p class="ml-2 tracking-wider">
          {{ covidMessage }} <span class="text-blue-500">{{ learnMore }}</span>
        </p>
      </div>
    </div>

    <div class="flex items-center ml-16 pl-10 mb-7 mt-8 pr-10 mr-10">
      <div class="bg-white pb-7 w-2/3 rounded-md shadow">
        <div class="flex items-start bg-blue-600 p-2 mb-7 rounded-md">
          <p class="text-white mb-4">
            Rooms 1
            <span class="text-sm pl-5">
              2 Adults1 double bed, 1 twin, Non-smoking
            </span>
          </p>
        </div>
        <div class="flex space-x-4 mb-4">
          <!-- First Name Input -->
          <div class="flex-1 ml-7">
            <label
              for="firstName"
              class="text-sm font-medium text-gray-700 flex items-start"
              >First Name</label
            >
            <input
              v-model="firstName"
              type="text"
              id="firstName"
              name="firstName"
              class="mt-1 p-2 w-1/2 border rounded-md flex items-start"
            />
          </div>

          <!-- Last Name Input -->
          <div class="flex-1 pr-14">
            <label
              for="lastName"
              class="text-sm font-medium text-gray-700 flex items-start"
              >Last Name</label
            >
            <input
              v-model="lastName"
              type="text"
              id="lastName"
              name="lastName"
              class="mt-1 p-2 w-1/2 border rounded-md flex items-start"
            />
          </div>
        </div>

        <!-- Mobile Number Input -->
        <div class="flex mb-4 ml-7">
          <div class="mr-2">
            <label
              for="mobilePrefix"
              class="block text-sm font-medium text-gray-700"
              >Mobile Prefix</label
            >
            <select
              v-model="selectedMobilePrefix"
              id="mobilePrefix"
              name="mobilePrefix"
              class="mt-1 p-2 pl-7 border rounded-md"
            >
              <!-- Add your list of mobile prefixes here -->
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="020">+020 (EG)</option>
              <!-- Add more prefixes as needed -->
            </select>
            <div class="flex items-start mt-4">
              <p>Recieve text alerts about this trip</p>
            </div>
          </div>
          <div class="flex-1">
            <label
              for="mobileNumber"
              class="text-sm font-medium text-gray-700 flex items-start"
              >Mobile Number</label
            >
            <input
              v-model="mobileNumber"
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              class="mt-1 p-2 w-1/2 border flex items-start rounded-md"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col w-1/3 pr-9 ml-12 pl-12">
        <img
          :src="require('../../assets/Rectangle 29.png')"
          class="mb-4 rounded-lg"
        />
        <p class="text-xl font-semibold">Lakeside Motel Warefront</p>
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
        </div>
        <p class="text-red">Non refundable</p>
        <p>check in :Sundsy ,March 18,2022</p>
        <p>check out:Tuesday,March 20,2022</p>
        <p>2 night stay</p>
      </div>
    </div>

    <div class="flex items-center ml-16 pl-10 mb-7 mt-8 pr-10 mr-10">
      <div class="bg-white pb-7 w-2/3 rounded-md shadow">
        <!-- Rooms Section -->
        <div class="flex items-start bg-blue-600 p-2 mb-7 rounded-md">
          <p class="text-white mb-4">Payment options</p>
        </div>

        <!-- Debit/Credit Card Section -->
        <div class="mb-4">
          <h2 class="text-xl font-semibold mb-2 border-b border-blue-500">
            Debit/Credit Card
          </h2>

          <!-- Small Images Section -->
          <div class="flex space-x-2">
            <img
              src="../../assets/image 6.png"
              alt="Card Image 1"
              class="w-10 h-10"
            />
            <img
              src="../../assets/image 7.png"
              alt="Card Image 2"
              class="w-10 h-10"
            />
            <img
              src="../../assets/image 10.png"
              alt="Card Image 3"
              class="w-10 h-10"
            />
            <img
              src="../../assets/image 8.png"
              alt="Card Image 4"
              class="w-10 h-10"
            />
          </div>

          <!-- Card Number Input -->
          <div class="w-1/3 pr-2">
            <label for="securityCode" class="text-sm font-medium text-gray-700"
              >Debit/Credit Card Number</label
            >
            <input
              v-model="securityCode"
              type="text"
              id="securityCode"
              name="securityCode"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <!-- Expiration Date Section -->
          <div class="flex mt-4">
            <div class="w-1/3 pr-2">
              <label
                for="expirationMonth"
                class="text-sm font-medium text-gray-700"
                >Expiration Month</label
              >
              <select
                v-model="expirationMonth"
                id="expirationMonth"
                name="expirationMonth"
                class="mt-1 p-2 w-full border rounded-md"
              >
                <!-- Add your list of months here -->
                <option value="april">April</option>
                <option value="september">Semptember</option>
                <option value="March">March</option>
              </select>
            </div>
            <div class="w-1/3 pl-2">
              <label
                for="expirationYear"
                class="text-sm font-medium text-gray-700"
                >Expiration Year</label
              >
              <select
                v-model="expirationYear"
                id="expirationYear"
                name="expirationYear"
                class="mt-1 p-2 w-full border rounded-md"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>

          <!-- Security Code and Billing Zip Code -->
          <div class="flex mt-4">
            <div class="w-1/3 pr-2">
              <label
                for="securityCode"
                class="text-sm font-medium text-gray-700"
                >Security Code</label
              >
              <input
                v-model="securityCode"
                type="text"
                id="securityCode"
                name="securityCode"
                class="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div class="w-1/3 pl-2">
              <label
                for="billingZipCode"
                class="text-sm font-medium text-gray-700"
                >Billing Zip Code</label
              >
              <input
                v-model="billingZipCode"
                type="text"
                id="billingZipCode"
                name="billingZipCode"
                class="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center ml-16 pl-10 mb-7 mt-8 pr-10 mr-10">
      <div class="bg-white pb-7 w-2/3 rounded-md shadow">
        <!-- Rooms Section -->
        <div class="flex items-start bg-yellow-500 p-2 mb-7 rounded-md">
          <p class="text-black mb-4">
            important information about your booking
          </p>
        </div>

        <p class="mt-2">
          1. This rate is non-refundable. If you change or cancel your booking
          you will not get a refund or credit to use for a future stay.
        </p>

        <p class="mt-2">2.Stay extensions will require a new reservation.</p>
        <p class="mt-2">3.Front desk staff will greet guests on arrival</p>
        <p class="mt-2">
          4.No refunds will be issued for late check-in or early check-out.
        </p>

        <br />
        <p class="mt-2">
          By clicking the button below, I acknowledge that I have reviewed the
          <span class="text-blue-500">Privacy Statement</span> and have reviewd
          and accept the
          <span class="text-blue-500">Rules and Restrictions</span> and
          <span class="text-blue-500"> Terms of Use </span>.
        </p>

        <router-link to="/Mytrips">
          <button class="bg-blue-500 text-white rounded-md p-2 mt-2">
            Complete Booking
          </button>
        </router-link>

        <br />
        <p class="mb-2">
          We use secure transmission and encrypted storage to protect your
          personal information
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      covidMessage:
        "Check the latest COVID-19 restrictions before your travel and",
      learnMore: "Learn more.",
      firstName: "",
      lastName: "",
      selectedCountry: "",
      selectedMobilePrefix: "",
      mobileNumber: "",
    };
  },

  methods: {
    submitForm() {
      // Implement your form submission logic here
      console.log("Form submitted:", {
        firstName: this.firstName,
        lastName: this.lastName,
        country: this.selectedCountry,
        mobilePrefix: this.selectedMobilePrefix,
        mobileNumber: this.mobileNumber,
      });
    },
  },
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
