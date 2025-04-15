import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.role === 'admin')

  // Khởi tạo user từ localStorage khi store được tạo
  const initUser = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }

  // Gọi initUser khi store được tạo
  initUser()

  const login = async (username, password) => {
    try {
      // Mô phỏng API call
      if (username === 'admin' && password === 'admin') {
        user.value = {
          id: 1,
          username: 'admin',
          role: 'admin',
          email: 'admin@example.com'
        }
        localStorage.setItem('user', JSON.stringify(user.value))
        router.push('/admin')
      } else {
        // Giả lập user thường
        user.value = {
          id: 2,
          username,
          role: 'user',
          email: `${username}@example.com`
        }
        localStorage.setItem('user', JSON.stringify(user.value))
        router.push('/')
      }
      return true
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
    router.push('/auth/login')
  }

  return {
    user,
    isAuthenticated,
    isAdmin,
    login,
    logout
  }
}) 