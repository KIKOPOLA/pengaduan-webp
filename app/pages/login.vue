<!-- app\pages\login.vue -->
<script setup lang="ts">
const { login } = useAuth()

const email = ref('')
const password = ref('')

const submit = async () => {
  try {
    const res = await login(email.value, password.value)
    navigateTo(res.role === 'admin' ? '/admin' : '/user')
  } catch (e: any) {
    alert(e.data?.message || 'Login gagal')
  }
}
</script>

<template>
  <div class="auth-wrapper">
    <div class="auth-box">
      <h1>Login</h1>

      <form @submit.prevent="submit">
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="Email address" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="Password" class="form-control" required />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>

      <NuxtLink to="/register" class="register-link"> Don't have an account? Register</NuxtLink>
    </div>  
  </div>
</template>