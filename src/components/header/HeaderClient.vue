<script setup>
import { useRouter } from "vue-router";
import { vOnClickOutside } from '@vueuse/components'
import { ref, watch } from "vue";
import { useAuthStore } from '@/stores/auth'
import SearchDropdown from './SearchDropdown.vue'

const router = useRouter();
const auth = useAuthStore()
const showDropdown = ref(false);
const showMobileMenu = ref(false);
const showSearch = ref(false);
const triggerRef = ref(null)
const mobileMenuRef = ref(null)
const searchInputRef = ref(null)
const searchValue = ref('')
const expandedMenus = ref(new Set())

const menuItems = [
  {
    name: "Pest Control",
    path: "/pest-control",
    children: [
      { name: "Ant Control", path: "/pest-control/ant" },
      { name: "Bed Bugs", path: "/pest-control/bed-bugs" }
    ]
  },
  {
    name: "Lawn & Garden", 
    path: "/lawn-garden",
    children: [
      { name: "Fertilizers", path: "/lawn-garden/fertilizers" },
      { name: "Lawn Care", path: "/lawn-garden/lawn-care" }
    ]
  },
  { name: "Rodents & Wildlife", path: "/rodents-wildlife" },
  { name: "Equipment", path: "/equipment" },
  {
    name: "Organic Pest Control",
    path: "/organic-pest-control", 
    children: [
      { name: "Natural Sprays", path: "/organic-pest-control/natural-sprays" }
    ]
  },
  { name: "Learning Center", path: "/learning-center" }
];

const toggleSubmenu = (path) => {
  if (expandedMenus.value.has(path)) {
    expandedMenus.value.delete(path)
  } else {
    expandedMenus.value.add(path)
  }
}

const handleChangePath = (path, hasChildren) =>{
  if (!hasChildren) {
    router.push(path);
    showMobileMenu.value = false;
  }
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
}

const toggleSearch = () => {
  showSearch.value = true;
}

const onClickOutside = (event) => {
  if (triggerRef.value && triggerRef.value.contains(event.target)) return
  showDropdown.value = false
}

const onClickOutsideMenu = (event) => {
  if (mobileMenuRef.value && !mobileMenuRef.value.contains(event.target)) {
    showMobileMenu.value = false
  }
}

const handleLogout = () => {
  auth.logout()
  showDropdown.value = false
}

watch(()=>searchValue.value, (newVal) => {
  if (newVal) {
    showSearch.value = true;
  }
})
</script>

<template>
  <div class="font-sans fixed top-0 z-[99999999] w-full bg-white shadow-md">
    <!-- Top bar -->
    <div class="bg-gray-50">
      <div class="wrapper mx-auto px-2 py-1">
        <div class="flex justify-end items-center gap-3">
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-phone text-primary text-xs"></i>
            <span class="text-gray-600 text-xs">0123-456-789</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-envelope text-primary text-xs"></i>
            <span class="text-gray-600 text-xs">0123-456-789</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main header -->
    <header class="wrapper mx-auto px-2 py-2 md:px-4 md:py-3">
      <div class="flex items-center justify-between gap-2 md:gap-8">
        <!-- Logo -->
        <div @click="handleChangePath('/')" class="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] flex-shrink-0 cursor-pointer transition-transform hover:scale-105">
          <img class="w-full h-full object-contain" src="@/assets/images/logo.jpg" alt="logo">
        </div>
        
        <!-- Desktop Search -->
        <div class="hidden lg:flex flex-1 relative">
          <div class="flex-1">
            <input 
              ref="searchInputRef"
              v-model="searchValue"
              class="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm" 
              placeholder="Tìm kiếm sản phẩm..." 
              type="text"
              @focus="showSearch = true"
            >
          </div>
          <SearchDropdown 
            :is-open="showSearch && !!searchValue"
            :search-query="searchValue"
            @wheel.stop
            @update:isOpen="showSearch = $event"
          />
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Mobile Menu Toggle -->
          <button class="lg:hidden text-green_1 p-1" @click="toggleMobileMenu">
            <i class="fa-solid fa-bars text-[20px]"></i>
          </button>
          
          <!-- Mobile Search Toggle -->
          <button class="lg:hidden text-green_1 p-1" @click="toggleSearch">
            <i class="fa-solid fa-magnifying-glass text-[24px]"></i>
          </button>
          
          <!-- Cart -->
          <button @click="handleChangePath('/cart')" class="relative text-green_1 p-1">
            <span class="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-orange_1 text-white text-[10px] font-bold rounded-full">0</span>
            <i class="fa-solid fa-cart-shopping text-[24px]"></i>
          </button>
          
          <!-- User Menu -->
          <div class="relative">
            <template v-if="auth.isAuthenticated">
              <div v-if="showDropdown"
                   v-on-click-outside="onClickOutside" 
                   class="absolute z-50 bg-white rounded-lg p-2 shadow-lg top-full right-0 w-56 border border-gray-100 mt-1">
                <div class="flex items-center space-x-2 p-2 border-b border-gray-100">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <i class="fa-solid fa-circle-user text-primary text-2xl"></i>
                  </div>
                  <div>
                    <div class="font-medium text-sm text-gray-800">{{ auth.user.username }}</div>
                    <div class="text-xs text-gray-500">{{ auth.user.email }}</div>
                  </div>
                </div>
                
                <div class="mt-1">
                  <router-link to="/profile" class="p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 flex items-center space-x-2 text-sm">
                    <i class="fa-solid fa-user text-gray-600"></i>
                    <span class="text-gray-700">Hồ sơ</span>
                  </router-link>
                  
                  <router-link 
                    v-if="auth.isAdmin"
                    to="/admin" 
                    class="p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 flex items-center space-x-2 text-sm"
                  >
                    <i class="fa-solid fa-gauge text-gray-600"></i>
                    <span class="text-gray-700">Quản trị</span>
                  </router-link>

                  <router-link 
                    to="/settings" 
                    class="p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 flex items-center space-x-2 text-sm"
                  >
                    <i class="fa-solid fa-gear text-gray-600"></i>
                    <span class="text-gray-700">Cài đặt</span>
                  </router-link>
                  
                  <div class="mt-1 border-t border-gray-100 pt-1">
                    <button @click="handleLogout" class="w-full p-2 hover:bg-red-50 rounded-md transition-colors duration-150 flex items-center space-x-2 text-sm text-red-600">
                      <i class="fa-solid fa-right-from-bracket"></i>
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              </div>
              <button ref="triggerRef" @click="toggleDropdown" class="text-green_1 p-1">
                <i class="fa-solid fa-circle-user text-[24px]"></i>
              </button>
            </template>
            <template v-else>
              <div class="flex items-center gap-2">
                <router-link 
                  to="/auth/login" 
                  class="px-3 py-1.5 text-xs font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Đăng nhập
                </router-link>
                <router-link 
                  to="/auth/register" 
                  class="px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-200"
                >
                  Đăng ký
                </router-link>
              </div>
            </template>
          </div>
        </div>
      </div>
    </header>

    <!-- Desktop Menu -->
    <nav class="bg-primary text-white">
      <div class="wrapper mx-auto px-2">
        <ul class="hidden lg:flex items-center justify-center space-x-4 py-2">
          <li v-for="item in menuItems" :key="item.path" class="relative group">
            <button
              class="flex items-center gap-1 text-sm font-medium hover:text-white/90 transition-colors px-2 py-1"
              @click="handleChangePath(item.path, !!item.children)"
            >
              {{ item.name }}
              <i v-if="item.children" class="fa-solid fa-chevron-down text-[10px]"></i>
            </button>

            <div
              v-if="item.children"
              class="absolute left-0 top-full bg-white text-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]"
            >
              <ul class="py-1">
                <li v-for="child in item.children" :key="child.path">
                  <router-link
                    :to="child.path"
                    class="block px-3 py-1.5 text-xs hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="showMobileMenu" 
         class="lg:hidden fixed inset-0 bg-black/50 z-[999999999] transition-opacity"
         @click="onClickOutsideMenu">
      <div ref="mobileMenuRef" class="bg-white h-full w-[80%] max-w-[280px] overflow-y-auto transform transition-transform duration-300">
        <div class="p-3 bg-primary text-white font-medium flex items-center justify-between">
          <span class="text-sm">Menu</span>
          <button @click="showMobileMenu = false" class="text-white/80 hover:text-white">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <nav class="p-2">
          <div v-for="item in menuItems" :key="item.path" class="mb-2">
            <button @click="item.children ? toggleSubmenu(item.path) : handleChangePath(item.path)" 
                   class="w-full flex justify-between items-center py-1.5 px-2 text-sm text-gray-700 hover:text-primary transition-colors">
              <span>{{ item.name }}</span>
              <i v-if="item.children" 
                 :class="['fas', expandedMenus.has(item.path) ? 'fa-chevron-down' : 'fa-chevron-right', 'text-xs transition-transform']">
              </i>
            </button>
            
            <div v-if="item.children" 
                 :class="['ml-3 mt-1 border-l border-gray-200 space-y-1', {'hidden': !expandedMenus.has(item.path)}]">
              <button v-for="child in item.children" 
                     :key="child.path"
                     @click="handleChangePath(child.path)"
                     class="block w-full text-left py-1.5 pl-3 text-xs text-gray-600 hover:text-primary transition-colors">
                {{ child.name }}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile Search -->
    <div v-if="showSearch" 
         class="lg:hidden fixed inset-0 bg-black/50 z-[99999999] transition-opacity">
      <div class="bg-white w-full">
        <div class="p-3">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-gray-800">Tìm kiếm</h3>
            <button @click="showSearch = false" class="text-gray-500 hover:text-gray-700 p-1">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="relative">
            <input 
              v-model="searchValue"
              class="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm" 
              placeholder="Tìm kiếm sản phẩm..." 
              type="text"
            >
            <SearchDropdown 
              v-if="!!searchValue"
              :is-open="true"
              :search-query="searchValue"
              class="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden"
              @wheel.stop
              @update:isOpen="showSearch = $event"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>