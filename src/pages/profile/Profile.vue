<script setup>
import { ref } from 'vue'

const user = ref({
  fullName: 'Andrew Ngô',
  email: 'andrew@example.com',
  phone: '0123456789',
  address: '123 Đường ABC, Quận XYZ, TP.HCM'
})

const isEditing = ref(false)
const editedUser = ref({ ...user.value })

const handleSave = () => {
  // TODO: Implement save logic here
  user.value = { ...editedUser.value }
  isEditing.value = false
}

const handleCancel = () => {
  editedUser.value = { ...user.value }
  isEditing.value = false
}
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="bg-white custom-shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Hồ sơ của tôi</h2>
          <button
            v-if="!isEditing"
            @click="isEditing = true"
            class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
          >
            Chỉnh sửa
          </button>
        </div>

        <div class="space-y-6">
          <!-- Thông tin cá nhân -->
          <div v-if="!isEditing">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-gray-700">Họ và tên</label>
                <div class="mt-1 text-gray-900">{{ user.fullName }}</div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1 text-gray-900">{{ user.email }}</div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <div class="mt-1 text-gray-900">{{ user.phone }}</div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <div class="mt-1 text-gray-900">{{ user.address }}</div>
              </div>
            </div>
          </div>

          <!-- Form chỉnh sửa -->
          <form v-else @submit.prevent="handleSave" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label for="fullName" class="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input
                  type="text"
                  id="fullName"
                  v-model="editedUser.fullName"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="editedUser.email"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="editedUser.phone"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label for="address" class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <input
                  type="text"
                  id="address"
                  v-model="editedUser.address"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>

            <div class="flex justify-end space-x-3">
              <button
                type="button"
                @click="handleCancel"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                type="submit"
                class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90"
              >
                Lưu thay đổi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template> 

<style scoped>
.custom-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
}
</style>

