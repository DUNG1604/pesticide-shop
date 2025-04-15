<script setup>
import { ref, computed } from "vue";

const products = [
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/q/4/q4_.jpg',
    name: 'Pest Control Kit',
    description: '19.99/item',
    price: 499000,
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/g/e/general_pest_control_kit.jpg', 
    name: 'Termiticide & Insecticide',
    description: '29.99/item',
    price: 749000,
  },
];

const cartItems = ref(products.map((product, index) => ({
  id: index + 1,
  name: product.name,
  description: product.description,
  image: product.image,
  quantity: 1,
  price: product.price,
})));

const shippingFee = 98000;

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
  <div class="bg-gray-50 py-12">
    <div class="wrapper mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 text-center">Shopping Cart</h1>
        <p class="mt-2 text-center text-gray-600">Review and manage your items</p>
      </div>

      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-8">
          <div v-if="cartItems.length === 0" class="text-center py-12 bg-white rounded-lg shadow">
            <i class="fas fa-shopping-cart text-4xl text-gray-400 mb-4"></i>
            <p class="text-gray-500">Your cart is empty</p>
          </div>

          <div v-else class="space-y-4">
            <div v-for="item in cartItems" :key="item.id" 
                 class="bg-white rounded-lg shadow-sm p-6 transition-transform hover:scale-[1.01]">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="w-full sm:w-24 h-24 mb-4 sm:mb-0">
                  <img :src="item.image" :alt="item.name" 
                       class="w-full h-full object-cover rounded-lg"/>
                </div>
                
                <div class="flex-1 px-4">
                  <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
                  <p class="text-sm text-orange-500 mt-1">{{ item.description }}</p>
                </div>

                <div class="flex flex-col items-end gap-4">
                  <div class="flex items-center border rounded-lg overflow-hidden bg-gray-50">
                    <button @click="decreaseQty(item)"
                            class="px-3 py-1 hover:bg-gray-200 transition-colors">
                      <i class="fas fa-minus text-gray-600"></i>
                    </button>
                    <input type="number" v-model.number="item.quantity" min="1"
                           class="w-12 text-center border-x bg-white py-1"/>
                    <button @click="increaseQty(item)"
                            class="px-3 py-1 hover:bg-gray-200 transition-colors">
                      <i class="fas fa-plus text-gray-600"></i>
                    </button>
                  </div>

                  <div class="flex items-center gap-4">
                    <p class="font-medium text-gray-900">
                      {{ (item.price * item.quantity).toLocaleString() }} ₫
                    </p>
                    <button @click="removeItem(item.id)" 
                            class="text-red-500 hover:text-red-700 transition-colors">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="lg:col-span-4 mt-8 lg:mt-0">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
            
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium">{{ subtotal.toLocaleString() }} ₫</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Shipping</span>
                <span class="font-medium">{{ shippingFee.toLocaleString() }} ₫</span>
              </div>

              <div class="border-t pt-4">
                <div class="flex justify-between">
                  <span class="text-lg font-semibold">Total</span>
                  <div class="text-right">
                    <div class="text-lg font-semibold">{{ total.toLocaleString() }} ₫</div>
                    <p class="text-sm text-gray-500">Including VAT</p>
                  </div>
                </div>
              </div>

              <button class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold
                           hover:bg-green-700 transition-colors duration-200">
                Proceed to Checkout
              </button>
            </div>

            <div class="mt-6 text-center text-sm text-gray-500">
              <p>Need help? <a href="#" class="text-green-600 hover:underline">Contact Support</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
}

@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
