<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')

const handleRegister = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Mật khẩu không khớp'
      return
    }
    // TODO: Implement actual register logic here
    console.log('Register with:', { 
      fullName: fullName.value,
      email: email.value, 
      password: password.value 
    })
    router.push('/auth/login')
  } catch (error) {
    errorMessage.value = 'Đăng ký thất bại. Vui lòng thử lại.'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Đăng ký tài khoản
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="full-name" class="sr-only">Họ và tên</label>
            <input
              v-model="fullName"
              id="full-name"
              name="fullName"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Họ và tên"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input
              v-model="email"
              id="email-address"
              name="email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Mật khẩu</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Mật khẩu"
            />
          </div>
          <div>
            <label for="confirm-password" class="sr-only">Xác nhận mật khẩu</label>
            <input
              v-model="confirmPassword"
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Xác nhận mật khẩu"
            />
          </div>
        </div>

        <div class="text-red-500 text-sm text-center" v-if="errorMessage">
          {{ errorMessage }}
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Đăng ký
          </button>
        </div>

        <div class="text-center">
          <router-link to="/auth/login" class="text-primary hover:text-primary/90">
            Đã có tài khoản? Đăng nhập ngay
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template> 