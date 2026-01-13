<!-- app\pages\register.vue -->
<script setup lang="ts">
const { register } = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')

const submit = async () => {
  try {
    await register(name.value, email.value, password.value)
    alert('Register berhasil')
    navigateTo('/login')
  } catch (e: any) {
    alert(e.data?.message || 'Register gagal')
  }
}
</script>

<template>
  <div class="auth-wrapper">
    <div class="auth-box">
      <h1>Register</h1>

      <form @submit.prevent="submit">
        <div class="form-group">
          <label>Nama</label>
          <input v-model="name" type="text" placeholder="Nama lengkap" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="Email address" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="Password" class="form-control" required />
        </div>

        <button type="submit" class="btn btn-primary">
          Daftar
        </button>
      </form>
    </div>
  </div>
</template>