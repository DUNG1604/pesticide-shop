import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("auth"))
  return { isAuthenticated }
})