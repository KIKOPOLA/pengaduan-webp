<script setup lang="ts">
const { register } = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')

const submit = async () => {
  try {
    await register(email.value, password.value, name.value)
    navigateTo('/app')
  } catch (e: any) {
    alert(e.message)
  }
}
</script>

<template>
  <h1>Register</h1>

  <input v-model="name" placeholder="Name" />
  <input v-model="email" placeholder="Email" />
  <input v-model="password" type="password" />

  <button @click="submit">Register</button>

  <NuxtLink to="/login">Already have account?</NuxtLink>
</template>
