<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)
const quantity = ref(1)

// Giả lập dữ liệu sản phẩm chi tiết
onMounted(() => {
  // Trong thực tế, đây sẽ là API call
  product.value = {
    id: route.params.id,
    name: "Thuốc diệt kiến ABC",
    price: 150000,
    image: "/images/products/product1.jpg",
    description: "Hiệu quả cao trong việc diệt kiến và các côn trùng gây hại. Sản phẩm được nghiên cứu và phát triển bởi các chuyên gia hàng đầu, an toàn cho người sử dụng và thân thiện với môi trường.",
    category: "Pest Control",
    specifications: [
      { label: "Thành phần", value: "Fipronil 0.05%" },
      { label: "Quy cách", value: "Chai 500ml" },
      { label: "Xuất xứ", value: "Việt Nam" },
      { label: "Hạn sử dụng", value: "24 tháng" }
    ]
  }
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  quantity.value++
}
</script>

<template>
  <div v-if="product" class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Ảnh sản phẩm -->
      <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-full object-cover"
        >
      </div>

      <!-- Thông tin sản phẩm -->
      <div>
        <span class="text-sm font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
          {{ product.category }}
        </span>

        <h1 class="text-3xl font-bold text-gray-800 mt-4 mb-4">
          {{ product.name }}
        </h1>

        <div class="text-2xl font-bold text-primary mb-6">
          {{ formatPrice(product.price) }}
        </div>

        <p class="text-gray-600 mb-8">
          {{ product.description }}
        </p>

        <!-- Số lượng -->
        <div class="flex items-center gap-4 mb-8">
          <span class="text-gray-700">Số lượng:</span>
          <div class="flex items-center border border-gray-200 rounded-lg">
            <button 
              @click="decreaseQuantity"
              class="px-3 py-2 text-gray-600 hover:text-primary"
              :disabled="quantity <= 1"
            >
              <i class="fas fa-minus"></i>
            </button>
            <input 
              type="number" 
              v-model="quantity"
              class="w-16 text-center border-x border-gray-200 py-2"
              min="1"
            >
            <button 
              @click="increaseQuantity"
              class="px-3 py-2 text-gray-600 hover:text-primary"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <!-- Nút thêm vào giỏ -->
        <button class="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-8">
          Thêm vào giỏ hàng
        </button>

        <!-- Thông số kỹ thuật -->
        <div class="border-t border-gray-200 pt-8">
          <h3 class="text-lg font-medium text-gray-800 mb-4">Thông số kỹ thuật</h3>
          <div class="grid grid-cols-1 gap-4">
            <div 
              v-for="spec in product.specifications" 
              :key="spec.label"
              class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
            >
              <span class="text-gray-600">{{ spec.label }}</span>
              <span class="font-medium text-gray-800">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 