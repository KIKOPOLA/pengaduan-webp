<script setup lang="ts">
const { login } = useAuth()

const email = ref('')
const password = ref('')

const submit = async () => {
  try {
    await login(email.value, password.value)
    navigateTo('/app')
  } catch (e: any) {
    alert(e.message)
  }
}
</script>

<template>
  <h1>Login</h1>
  <input v-model="email" placeholder="Email" />
  <input v-model="password" type="password" placeholder="Password" />
  <button @click="submit">Login</button>
</template>
