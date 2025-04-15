<script setup>
import { ref } from 'vue'

const settings = ref({
  notifications: {
    email: true,
    push: false,
    sms: true
  },
  privacy: {
    profileVisibility: 'public',
    showEmail: false
  },
  language: 'vi'
})

const languages = [
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'en', label: 'English' }
]

const handleSave = () => {
  // TODO: Implement save settings logic here
  console.log('Saving settings:', settings.value)
}
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="bg-white custom-shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Cài đặt</h2>

        <form @submit.prevent="handleSave" class="space-y-8">
          <!-- Thông báo -->
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Thông báo</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <label class="font-medium text-gray-700">Email</label>
                  <p class="text-sm text-gray-500">Nhận thông báo qua email</p>
                </div>
                <button
                  type="button"
                  @click="settings.notifications.email = !settings.notifications.email"
                  :class="[
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    settings.notifications.email ? 'bg-primary' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                      settings.notifications.email ? 'translate-x-5' : 'translate-x-0'
                    ]"
                  />
                </button>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <label class="font-medium text-gray-700">Push</label>
                  <p class="text-sm text-gray-500">Nhận thông báo trên trình duyệt</p>
                </div>
                <button
                  type="button"
                  @click="settings.notifications.push = !settings.notifications.push"
                  :class="[
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    settings.notifications.push ? 'bg-primary' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                      settings.notifications.push ? 'translate-x-5' : 'translate-x-0'
                    ]"
                  />
                </button>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <label class="font-medium text-gray-700">SMS</label>
                  <p class="text-sm text-gray-500">Nhận thông báo qua SMS</p>
                </div>
                <button
                  type="button"
                  @click="settings.notifications.sms = !settings.notifications.sms"
                  :class="[
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    settings.notifications.sms ? 'bg-primary' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                      settings.notifications.sms ? 'translate-x-5' : 'translate-x-0'
                    ]"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Quyền riêng tư -->
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Quyền riêng tư</h3>
            <div class="space-y-4">
              <div>
                <label class="block font-medium text-gray-700">Hiển thị hồ sơ</label>
                <select
                  v-model="settings.privacy.profileVisibility"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                >
                  <option value="public">Công khai</option>
                  <option value="private">Riêng tư</option>
                </select>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <label class="font-medium text-gray-700">Hiển thị email</label>
                  <p class="text-sm text-gray-500">Cho phép người khác xem email của bạn</p>
                </div>
                <button
                  type="button"
                  @click="settings.privacy.showEmail = !settings.privacy.showEmail"
                  :class="[
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    settings.privacy.showEmail ? 'bg-primary' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                      settings.privacy.showEmail ? 'translate-x-5' : 'translate-x-0'
                    ]"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Ngôn ngữ -->
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Ngôn ngữ</h3>
            <select
              v-model="settings.language"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option v-for="lang in languages" :key="lang.value" :value="lang.value">
                {{ lang.label }}
              </option>
            </select>
          </div>

          <!-- Nút lưu -->
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template> 
<style scoped>
.custom-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
}
</style>


