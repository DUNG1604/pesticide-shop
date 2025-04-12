<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
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
const handleChangePath = (path) =>{
  router.push(path)
}
</script>

<template>
  <div class="container font-sans fixed top-0 z-[99999999] bg-white">
    <div class="flex justify-end wrapper items-center gap-3">
      <div class="flex items-center gap-1">
        <div class="pb-1">
          <i class="fa-solid fa-phone text-text_main text-[12px]"></i>
        </div>
        <div class="text-text_main text-[12px] font-semibold">0123-456-789</div>
      </div>
<!--      <div class="w-[1px] h-2 bg-text_main mx-2"></div>-->
      <div class="flex items-center gap-1">
        <div class="pb-1">
          <i class="fa-solid fa-envelope text-text_main text-[14px]"></i>
        </div>
        <div class="text-text_main text-[12px] font-semibold">0123-456-789</div>
      </div>
    </div>
    <header class="flex justify-between gap-4 wrapper px-4 bg-white py-[20px]">
      <div @click="handleChangePath('/')" class="w-[200px] cursor-pointer">
        <img class="w-full h-full object-cover" src="@/assets/images/logo.jpg" alt="logo">
      </div>
      <div class="hidden lg:flex flex-1 px-10">
        <div class="flex-1 h-12">
          <input class="w-full outline-primary border-secondary border-[2px] px-4 h-full rounded-[5px]" placeholder="Search" type="text">
        </div>
        <div>
          <button class="rounded-[5px] h-12 ml-4 px-5 bg-secondary2 text-white cursor-pointer hover:bg-secondary3 hover:text-white">
            Search
          </button>
        </div>
      </div>
      <div class="w-[110px] flex justify-end items-center">
<!--        <div class="flex gap-1 items-center">-->
<!--          <div class="size-[20px] overflow-hidden">-->
<!--            <img class="size-full object-cover" src="@/assets/icons/vietnam.png" alt="vn">-->
<!--          </div>-->
<!--          <div class="flex-1 font-sans text-[12px] font-[600]">Tiếng Việt</div>-->
<!--          <div class="size-[20px] overflow-hidden">-->
<!--            <img class="size-full object-cover" src="@/assets/icons/down.svg" alt="vn">-->
<!--          </div>-->
<!--        </div>-->
        <div class="flex items-center text-green_1 gap-2">
          <div class="block lg:hidden cursor-pointer">
            <i class="fa-solid fa-magnifying-glass text-[28px]"></i>
          </div>
          <div @click="handleChangePath('/cart')" class="cursor-pointer relative">
            <div class="absolute top-[-6px] right-[-6px] rounded-full size-[18px] bg-orange_1 text-white flex items-center justify-center text-[12px] font-bold">0</div>
            <i class="fa-solid fa-cart-shopping text-[28px]"></i>
          </div>
          <div class="cursor-pointer">
            <i class="fa-solid fa-circle-user text-[28px]"></i>
          </div>
        </div>
      </div>
    </header>
    <div class="bg-primary text-white text-[18px] font-bold">
      <div class="wrapper flex items-center justify-center py-3">
        <nav class="flex space-x-6">
          <div v-for="item in menuItems" :key="item.path" class="relative group">
            <!-- Link chính -->
            <router-link
              :to="item.path"
              class="hover:scale-105 flex items-center gap-1"
            >
              {{ item.name }}
              <div v-if="item.children" class="size-[20px]">
                <img class="size-full object-cover" src="@/assets/icons/downWhite.svg" alt="icon">
              </div>
            </router-link>

            <!-- Dropdown con (đã fix lỗi bị mất khi hover) -->
            <div
              v-if="item.children"
              class="absolute left-0 top-full bg-white text-text_main shadow-md rounded-[5px] hidden group-hover:block pointer-events-none"
            >
              <ul class="py-2 pointer-events-auto">
                <li v-for="child in item.children" :key="child.path">
                  <router-link
                    :to="child.path"
                    class="block text-[14px] px-4 py-2 hover:bg-gray-200"
                  >
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>