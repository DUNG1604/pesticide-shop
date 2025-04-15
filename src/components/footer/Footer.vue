<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubscribe = () => {
  // Handle newsletter subscription
  console.log('Subscribed:', email.value);
  email.value = '';
}
</script>

<template>
  <footer class="bg-primary mt-[20px] text-white">
    <div class="wrapper py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- About Us Section -->
        <div>
          <h3 class="text-xl font-bold mb-6">About Us</h3>
          <p class="text-gray-200 mb-4">
            We are dedicated to providing the best pest control and lawn care services to keep your home and garden healthy and beautiful.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-blue-300 transition-colors">
              <i class="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a href="#" class="hover:text-blue-300 transition-colors">
              <i class="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="#" class="hover:text-blue-300 transition-colors">
              <i class="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a href="#" class="hover:text-blue-300 transition-colors">
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="hover:text-blue-300 transition-colors flex items-center">
                <i class="fa-solid fa-chevron-right mr-2 text-sm"></i>
                Pest Control Services
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-300 transition-colors flex items-center">
                <i class="fa-solid fa-chevron-right mr-2 text-sm"></i>
                Lawn & Garden Care
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-300 transition-colors flex items-center">
                <i class="fa-solid fa-chevron-right mr-2 text-sm"></i>
                Equipment Rental
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-blue-300 transition-colors flex items-center">
                <i class="fa-solid fa-chevron-right mr-2 text-sm"></i>
                Organic Solutions
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-6">Contact Info</h3>
          <ul class="space-y-4">
            <li class="flex items-center">
              <i class="fa-solid fa-location-dot text-xl mr-3"></i>
              <span>123 Street Name, City, Country</span>
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-phone text-xl mr-3"></i>
              <span>+1 234 567 8900</span>
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-envelope text-xl mr-3"></i>
              <span>info@example.com</span>
            </li>
            <li class="flex items-center">
              <i class="fa-solid fa-clock text-xl mr-3"></i>
              <span>Mon - Fri: 9:00 - 18:00</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-bold mb-6">Newsletter</h3>
          <p class="text-gray-200 mb-4">Subscribe to our newsletter for updates and special offers.</p>
          <form @submit.prevent="handleSubscribe" class="space-y-3">
            <div class="relative">
              <input 
                type="email"
                v-model="email"
                placeholder="Your email address"
                class="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-300"
                required
              />
            </div>
            <button 
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Subscribe Now
            </button>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-white/10 text-center">
        <p class="text-gray-300">
          © {{ new Date().getFullYear() }} Your Company Name. All rights reserved.
        </p>
      </div>
      
    </div>
  </footer>
</template>

<style scoped>
</style>
