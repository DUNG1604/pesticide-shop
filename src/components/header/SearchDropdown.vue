<script setup>
import { ref, watch } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { useRouter } from 'vue-router'

const router = useRouter();
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  searchQuery: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close', 'update:isOpen'])

const searchResults = ref([])
const isLoading = ref(false)

// Mock data - trong thực tế sẽ được thay thế bằng API call
const mockProducts = [
  { id: 1, name: 'Ant Control Spray', category: 'Pest Control', price: '$29.99', image: 'https://placehold.co/100x100' },
  { id: 2, name: 'Organic Fertilizer', category: 'Lawn & Garden', price: '$39.99', image: 'https://placehold.co/100x100' },
  { id: 3, name: 'Mouse Trap', category: 'Rodents & Wildlife', price: '$19.99', image: 'https://placehold.co/100x100' },
  { id: 4, name: 'Garden Sprayer', category: 'Equipment', price: '$49.99', image: 'https://placehold.co/100x100' },
  { id: 5, name: 'Natural Pest Repellent', category: 'Organic Pest Control', price: '$34.99', image: 'https://placehold.co/100x100' },
]

const handleSearch = async () => {
  if (!props.searchQuery) {
    searchResults.value = mockProducts
    return
  }

  isLoading.value = true
  // Giả lập API call
  setTimeout(() => {
    searchResults.value = mockProducts.filter(product => 
      product.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
    isLoading.value = false
  }, 300)
}

// Gọi handleSearch khi component được mount
handleSearch()

watch(() => props.searchQuery, () => {
  handleSearch()
})

const handleClickOutside = (event) => {
  // Kiểm tra xem click có phải vào dropdown container không
  const dropdownContainer = event.target.closest('.search-dropdown-container')
  if (!dropdownContainer) {
    emit('close')
  }
}

const handleWheel = (event) => {
  event.stopPropagation()
}

const handleItemClick = (productId) => {
  router.push(`/product`);
  emit('close');
  emit('update:isOpen', false);
}
</script>

<template>
  <div v-if="isOpen" 
       class="search-dropdown-container absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 max-h-[400px] overflow-y-auto"
       v-on-click-outside="handleClickOutside"
       @wheel="handleWheel">
    <div class="p-4">
      <!-- Loading State -->
      <div v-if="isLoading" class="mt-4 text-center text-gray-500">
        <i class="fas fa-spinner fa-spin mr-2"></i>
        Đang tìm kiếm...
      </div>

      <!-- Results -->
      <div v-else-if="searchResults.length > 0">
        <div v-for="result in searchResults" 
             :key="result.id"
             class="p-3 hover:bg-gray-50 cursor-pointer rounded-md flex items-center gap-4"
             @click="handleItemClick(result.id)">
          <img :src="result.image" :alt="result.name" class="w-[60px] h-[60px] object-cover rounded-md">
          <div>
            <div class="font-medium">{{ result.name }}</div>
            <div class="text-sm text-gray-500">{{ result.category }}</div>
            <div class="text-primary font-semibold">{{ result.price }}</div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-else-if="searchQuery" class="mt-4 text-center text-gray-500">
        Không tìm thấy kết quả
      </div>

      <!-- Initial State -->
      <div v-else class="mt-4 text-center text-gray-500">
        Danh sách sản phẩm nổi bật
      </div>
    </div>
  </div>
</template> 