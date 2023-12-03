import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/layouts/login/Register.vue'
import Navbar from '../components/layouts/Navbar.vue'
import SignIn from '../components/layouts/login/SignIn.vue'
import Home from '../components/pages/Home.vue'
import HotelResults from '../components/pages/HotelResults.vue'
import ProductDetails from '../components/pages/ProductDetails.vue'
import Checkout from'../components/pages/Checkout.vue'
import Mytrips from '../components/pages/Mytrips.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
    
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: Register
  },
  {
    path: '/signin',
    name: '/signin',
    component: SignIn
  },



  {
    path: '/hotel-results/:dest_id/:cityName',
    name: 'HotelResults',
    component: HotelResults,
  },
  
  {
    path: '/hotel-results/:dest_id', // Add the dest_id parameter
    name: 'HotelResults',
    component: HotelResults,
  },
  {
    path: '/hotels/:dest_id/:cityName',
    name: 'hotels',
    component: HotelResults,
  },

  {
    path: '/hotel-results/:dest_id',
    name: 'HotelResults',
    component: () => import(/* webpackChunkName: "hotel-results" */ '../components/pages/HotelResults.vue'),
  },



  {
    path: '/product-details/:hotelName',
    name: 'ProductDetailsHotelName', // Adjust the name as needed
    component: ProductDetails,
    props: route => ({ hotelName: route.params.hotelName }),
  },
  // Assuming your Checkout route looks something like this
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    
  },
  {
    path: '/Mytrips',
    name: 'Trips',
    component: Mytrips,
    
  },
  {
    path: '/product/:productId',
    name: 'ProductDetails',
    component: ProductDetails,
    // Other route options...
  },
  


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
