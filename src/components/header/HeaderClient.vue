<script setup>

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
</script>

<template>
  <div class="container font-sans fixed top-0 z-[99999999] bg-white">
    <header class="flex justify-between gap-4 wrapper px-4 bg-white py-[25px]">
      <div class="w-[250px] h-[60px]">
        <img class="w-full h-full object-cover" src="@/assets/images/logo.jpg" alt="logo">
      </div>
      <div>
        <div class="flex">
          <div class="flex items-center gap-2">
            <div class="size-[35px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/images/phone.png" alt="logo">
            </div>
            <div class="text-sm text-title">
              <div class="font-bold mb-1">1-800-476-3368</div>
              <div>Hablamos Espanol</div>
              <div>extension: 7103</div>
            </div>
          </div>
          <div class="mx-4 w-[1px] h-[50px] bg-black"></div>
          <!--      -->
          <div class="flex items-center gap-2">
            <div class="size-[35px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/images/phone.png" alt="logo">
            </div>
            <div class="text-sm text-title">
              <div class="font-bold mb-1">1-800-476-3368</div>
              <div>Hablamos Espanol</div>
              <div>extension: 7103</div>
            </div>
          </div>
          <div class="mx-4 w-[1px] h-[50px] bg-black"></div>
          <!--      -->
          <div class="flex items-center gap-2">
            <div class="size-[35px] overflow-hidden">
              <img class="w-full h-full object-cover" src="@/assets/images/phone.png" alt="logo">
            </div>
            <div class="text-sm text-title">
              <div class="font-bold mb-1">1-800-476-3368</div>
              <div>Hablamos Espanol</div>
              <div>extension: 7103</div>
            </div>
          </div>
        </div>
<!--        <div class="flex flex-col flex-1 max-w-2xl mx-4">-->
<!--          <input-->
<!--            type="text"-->
<!--            placeholder="Search entire store here..."-->
<!--            class="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"-->
<!--          />-->
<!--        </div>-->
      </div>
      <div class="flex items-start">
        <div class="flex gap-1 items-center">
          <div class="size-[20px] overflow-hidden">
            <img class="size-full object-cover" src="@/assets/icons/vietnam.png" alt="vn">
          </div>
          <div class="flex-1 font-sans text-[12px] font-[600]">Tiếng Việt</div>
          <div class="size-[20px] overflow-hidden">
            <img class="size-full object-cover" src="@/assets/icons/down.svg" alt="vn">
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
              class="absolute left-0 top-full mt-0 bg-white text-black shadow-md rounded-lg hidden group-hover:flex flex-col pointer-events-none"
            >
              <ul class="w-48 py-2 pointer-events-auto">
                <li v-for="child in item.children" :key="child.path">
                  <router-link
                    :to="child.path"
                    class="block px-4 py-2 hover:bg-gray-200"
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