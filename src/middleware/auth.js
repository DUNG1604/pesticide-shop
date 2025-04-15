import { useAuthStore } from '@/stores/auth'

export function requireAuth(to) {
  const auth = useAuthStore()
  
  if (!auth.isAuthenticated) {
    return '/auth/login'
  }
}

export function requireAdmin(to) {
  const auth = useAuthStore()
  
  if (!auth.isAuthenticated) {
    return '/auth/login'
  }
  
  if (!auth.isAdmin) {
    return '/'
  }
}

export function requireGuest(to) {
  const auth = useAuthStore()
  
  if (auth.isAuthenticated) {
    return auth.isAdmin ? '/admin' : '/'
  }
} 