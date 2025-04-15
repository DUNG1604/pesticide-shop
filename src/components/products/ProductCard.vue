<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

const goToProductDetail = () => {
  router.push(`/1`)
}
</script>

<template>
  <div class="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
    <!-- Ảnh sản phẩm -->
    <div class="relative aspect-square overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        @click="goToProductDetail"
      >
      
      <!-- Tags -->
      <div class="absolute top-3 left-3 flex flex-wrap gap-2">
        <span 
          v-for="tag in product.tags" 
          :key="tag"
          class="px-2.5 py-1 text-xs font-medium bg-white/95 backdrop-blur-sm rounded-full shadow-sm"
          :class="{
            'text-red-500': tag === 'Khuyến mãi',
            'text-green-500': tag === 'Organic',
            'text-blue-500': tag === 'Mới',
            'text-yellow-500': tag === 'Bán chạy'
          }"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Quick actions -->
      <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex justify-center gap-3">
          <button 
            class="w-9 h-9 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
            title="Xem nhanh"
          >
            <i class="fas fa-eye text-sm"></i>
          </button>
          <button 
            class="w-9 h-9 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
            title="Thêm vào yêu thích"
          >
            <i class="fas fa-heart text-sm"></i>
          </button>
          <button 
            class="w-9 h-9 rounded-full bg-white/95 hover:bg-white flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
            title="So sánh"
          >
            <i class="fas fa-exchange-alt text-sm"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Thông tin sản phẩm -->
    <div class="p-4">
      <div class="mb-2">
        <span class="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {{ product.category }}
        </span>
      </div>
      
      <h3 
        class="text-base font-medium text-gray-800 mb-1.5 hover:text-primary cursor-pointer line-clamp-2 min-h-[40px]"
        @click="goToProductDetail"
      >
        {{ product.name }}
      </h3>
      
      <p class="text-sm text-gray-500 mb-3 line-clamp-2 min-h-[40px]">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between">
        <span class="text-lg font-bold text-primary">
          {{ formatPrice(product.price) }}
        </span>
        
        <button 
          class="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white text-sm font-medium rounded-lg transition-colors"
        >
          <i class="fas fa-cart-plus text-xs"></i>
          <span>Thêm vào giỏ</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 