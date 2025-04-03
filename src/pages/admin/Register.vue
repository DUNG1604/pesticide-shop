<template>
  <div class="text-red-600">hello1111</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = async () => {
  try {
    if (form.value.password !== form.value.confirmPassword) {
      alert('Mật khẩu không khớp!')
      return
    }
    // TODO: Implement register logic here
    console.log('Register form:', form.value)
    router.push('/admin/login')
  } catch (error) {
    console.error('Register error:', error)
  }
}

const goToLogin = () => {
  router.push('/admin/login')
}
</script>
