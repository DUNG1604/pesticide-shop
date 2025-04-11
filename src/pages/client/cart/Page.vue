<script setup>
import { ref, computed } from "vue";

// Dữ liệu sản phẩm ban đầu (giá đã chuyển đổi sang VND)
const products = [
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/q/4/q4_.jpg',
    name: 'Pest Control Kit',
    description: '19.99/item',
    price: 499000, // Giá đã chuyển sang VND
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/g/e/general_pest_control_kit.jpg',
    name: 'Termiticide & Insecticide',
    description: '29.99/item',
    price: 749000, // Giá đã chuyển sang VND
  },
];

const cartItems = ref(products.map((product, index) => ({
  id: index + 1,
  name: product.name,
  description: product.description,
  image: product.image,
  quantity: 1, // Khởi tạo số lượng là 1 cho mỗi sản phẩm
  price: product.price, // Giá của sản phẩm
})));

const shippingFee = 98000; // Phí vận chuyển cũng đã chuyển sang VND

const subtotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
);

const total = computed(() => subtotal.value + shippingFee);

const increaseQty = (item) => {
  item.quantity++;
};

const decreaseQty = (item) => {
  if (item.quantity > 1) item.quantity--;
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};
</script>

<template>
  <div class="wrapper text-text_main">
    <div class="pt-10">
      <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <!-- Cart Items -->
        <div class="rounded-lg md:w-2/3">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="mb-6 rounded-lg bg-white p-6 custom-shadow sm:flex sm:justify-start "
          >
            <div class="max-w-[120px]">
              <img :src="item.image" :alt="item.name" class="w-full rounded-lg sm:w-40" />
            </div>
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold">{{ item.name }}</h2>
                <p class="mt-1 text-xs text-orange_1 font-semibold">{{ item.description }}</p>
              </div>
              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100">
                  <span
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green_2 hover:text-white"
                    @click="decreaseQty(item)"
                  >-</span
                  >
                  <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    v-model.number="item.quantity"
                    min="1"
                  />
                  <span
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green_2 hover:text-white"
                    @click="increaseQty(item)"
                  >+</span
                  >
                </div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">{{ (item.price * item.quantity).toLocaleString() }} ₫</p>
                  <svg
                    @click="removeItem(item.id)"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="mt-6 h-full rounded-lg border bg-white p-6 custom-shadow md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">{{ subtotal.toLocaleString() }} ₫</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">{{ shippingFee.toLocaleString() }} ₫</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div>
              <p class="mb-1 text-lg font-bold">{{ total.toLocaleString() }} ₫</p>
              <p class="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <div
            class="mt-2 font-bold text-center px-5 py-2.5 border-[2px] border-primary rounded-[5px] text-text_main cursor-pointer hover:bg-secondary2 hover:text-white">
            Check out
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
}

/* Bạn có thể thêm style tùy chỉnh ở đây nếu cần */
</style>
