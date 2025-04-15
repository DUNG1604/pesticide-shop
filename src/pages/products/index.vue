<script setup>
import { ref, onMounted, computed } from 'vue'
import ProductCard from '@/components/products/ProductCard.vue'

const products = ref([
  {
    id: 1,
    name: "Thuốc trừ sâu Tasieu",
    price: 150000,
    image: "https://file.hstatic.net/1000238788/file/thuoc-tru-sau-tasieu_1ab8c8076a4846e9873bdf4fb75e6b75_master.jpg",
    description: "Thuốc trừ sâu hiệu quả cao, an toàn cho cây trồng",
    category: "Pest Control",
    tags: ["Bán chạy", "Khuyến mãi"]
  },
  {
    id: 2, 
    name: "Thuốc diệt chuột Ratox",
    price: 200000,
    image: "https://file.hstatic.net/1000238788/file/thuoc-tru-sau-tasieu_1ab8c8076a4846e9873bdf4fb75e6b75_master.jpg",
    description: "Giải pháp tối ưu cho việc kiểm soát chuột",
    category: "Rodents & Wildlife",
    tags: ["Mới"]
  },
  {
    id: 3,
    name: "Phân bón hữu cơ Bio-Organic",
    price: 80000,
    image: "https://file.hstatic.net/1000238788/file/thuoc-tru-sau-tasieu_1ab8c8076a4846e9873bdf4fb75e6b75_master.jpg",
    description: "Phân bón hữu cơ chất lượng cao cho cây trồng",
    category: "Lawn & Garden",
    tags: ["Organic"]
  }
])

const categories = ref([
  "Tất cả",
  "Pest Control",
  "Lawn & Garden", 
  "Rodents & Wildlife",
  "Equipment",
  "Organic Pest Control"
])

const selectedCategory = ref("Tất cả")
const sortBy = ref("default")
const searchQuery = ref("")

const filteredProducts = computed(() => {
  let result = [...products.value]
  
  // Tìm kiếm
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query)
    )
  }

  // Lọc theo danh mục
  if (selectedCategory.value !== "Tất cả") {
    result = result.filter(p => p.category === selectedCategory.value)
  }
  
  // Sắp xếp
  switch (sortBy.value) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      result.sort((a, b) => b.price - a.price)
      break
    case "name-asc":
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "name-desc":
      result.sort((a, b) => b.name.localeCompare(a.name))
      break
  }
  
  return result
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-8">
      <!-- Search & Filters -->
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <!-- Search -->
        <div class="mb-6">
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
            >
            <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <!-- Categories -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md shadow-primary/30 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              ]"
            >
              {{ category }}
            </button>
          </div>

          <!-- Sort -->
          <div class="relative">
            <select
              v-model="sortBy"
              class="appearance-none pl-4 pr-10 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary bg-white"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
              <option value="name-asc">Tên: A-Z</option>
              <option value="name-desc">Tên: Z-A</option>
            </select>
            <i class="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          </div>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <i class="fas fa-box-open text-4xl text-gray-400 mb-4"></i>
        <h3 class="text-lg font-medium text-gray-800 mb-2">Không tìm thấy sản phẩm</h3>
        <p class="text-gray-600">Vui lòng thử tìm kiếm với từ khóa khác</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
}
</style> 