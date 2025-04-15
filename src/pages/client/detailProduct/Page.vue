<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const quantity = ref(1)
const selectedImageIndex = ref(0)

const productImages = [
  'https://diypestcontrol.com/media/catalog/product/cache/a11b11c9b15c21011b9ece134ce96c52/s/u/surekillflusher.jpg',
  'https://diypestcontrol.com/media/catalog/product/cache/a11b11c9b15c21011b9ece134ce96c52/s/u/surekillflusher_2.jpg',
  'https://diypestcontrol.com/media/catalog/product/cache/a11b11c9b15c21011b9ece134ce96c52/s/u/surekillflusher_3.jpg',
  'https://diypestcontrol.com/media/catalog/product/cache/a11b11c9b15c21011b9ece134ce96c52/s/u/surekillflusher_4.jpg',
  'https://diypestcontrol.com/media/catalog/product/cache/a11b11c9b15c21011b9ece134ce96c52/s/u/surekillflusher_5.jpg'
]

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const selectImage = (index: number) => {
  selectedImageIndex.value = index
}

const addToCart = () => {
  // TODO: Implement add to cart functionality
  console.log('Adding to cart:', {
    quantity: quantity.value
  })
}
</script>

<template>
  <div class="bg-gray-50 py-6">
    <div class="wrapper">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Brand Name for Mobile -->
        <div class="md:hidden p-3 border-b">
          <h2 class="text-sm font-medium text-gray-500">SUREKILL</h2>
          <h1 class="text-xl font-bold text-gray-900 mt-1">Thuốc Diệt Côn Trùng Chuyên Nghiệp</h1>
        </div>

        <div class="flex flex-col md:flex-row">
          <!-- Product Image Section -->
          <div class="md:w-1/2 p-4">
            <div class="relative group">
              <img 
                :alt="'Hình ảnh sản phẩm ' + (selectedImageIndex + 1)" 
                class="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                :src="productImages[selectedImageIndex]"
              >
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
            </div>
            <!-- Thumbnail Gallery -->
            <div class="flex gap-3 mt-3 overflow-x-auto">
              <img 
                v-for="(image, index) in productImages" 
                :key="index"
                @click="selectImage(index)"
                class="w-16 h-16 object-cover rounded cursor-pointer hover:ring-2 ring-button_orange transition-all"
                :class="{ 'ring-2 ring-button_orange': selectedImageIndex === index }"
                :src="image"
                :alt="'Hình nhỏ ' + (index + 1)"
              >
            </div>
          </div>

          <!-- Product Info Section -->
          <div class="md:w-1/2 p-4">
            <div class="space-y-4">
              <!-- Brand Name for Desktop -->
              <div class="hidden md:block">
                <h2 class="text-sm font-medium text-gray-500">SUREKILL</h2>
                <h1 class="text-2xl font-bold text-gray-900 mt-1">Thuốc Diệt Côn Trùng Chuyên Nghiệp</h1>
              </div>

              <!-- Rating -->
              <div class="flex items-center space-x-2">
                <div class="flex">
                  <svg v-for="i in 5" :key="i" 
                    :class="i <= 4 ? 'text-yellow-400' : 'text-gray-300'"
                    class="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="text-gray-600">(4 Đánh giá)</span>
              </div>

              <!-- Price -->
              <div class="text-3xl font-bold text-gray-900">
                58.000đ
              </div>

              <!-- Description -->
              <div class="space-y-3">
                <p class="text-gray-600 leading-relaxed text-sm">
                  Thuốc diệt côn trùng chuyên nghiệp SureKill là giải pháp hiệu quả để kiểm soát côn trùng gây hại trong nông nghiệp. Sản phẩm có khả năng diệt trừ nhiều loại sâu bệnh, an toàn cho cây trồng khi sử dụng đúng liều lượng.
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Hiệu quả cao trong việc diệt trừ sâu bệnh</li>
                  <li>Thời gian cách ly ngắn</li>
                  <li>An toàn cho cây trồng khi sử dụng đúng liều lượng</li>
                  <li>Được kiểm nghiệm và cấp phép bởi Bộ Nông nghiệp</li>
                </ul>
              </div>

              <!-- Quantity -->
              <div class="flex items-center space-x-4">
                <h3 class="text-sm font-medium text-gray-900">Số lượng</h3>
                <div class="flex items-center border rounded-md">
                  <button 
                    @click="decreaseQuantity"
                    class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span class="px-4 py-1 text-gray-900">{{ quantity }}</span>
                  <button 
                    @click="increaseQuantity"
                    class="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex space-x-4">
                <button 
                  @click="addToCart"
                  class="flex-1 bg-button_orange text-white px-6 py-2.5 rounded-md font-medium hover:bg-button_orange_hover transition-colors"
                >
                  Thêm vào giỏ hàng
                </button>
                <button class="p-2.5 border rounded-md hover:bg-gray-50 transition-colors">
                  <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <!-- Social Share -->
              <div class="flex items-center space-x-4 pt-3 border-t">
                <span class="text-sm text-gray-500">Chia sẻ:</span>
                <div class="flex space-x-3">
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>