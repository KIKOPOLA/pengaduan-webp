<!-- app\components\Navbar.vue -->
<script setup lang="ts">
  const user = useState<any>('user')

  const logout = async () => {
  await $fetch('/api/auth/logout', { method: 'POST' })
  user.value = null
  navigateTo('/login')
}
</script>
<template>
  <nav class="navbar">
    <a href="/" class="navbar-brand">
      Pengaduan App
    </a>

    <ul class="navbar-links">
      <NuxtLink to="/user"> tentang </NuxtLink>
      <NuxtLink to="/user/form"> form </NuxtLink>
    </ul>

    <button @click="logout" class="btn-logout">
        Logout
    </button>
  </nav>
</template>