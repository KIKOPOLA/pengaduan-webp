<!-- app\pages\index.vue si landing pages -->
<template>
  <div class="guest-container">
    <section class="hero-card">
      <h1 class="hero-title">Pengaduan App</h1>

      <p class="hero-desc">
        Sistem pengaduan sederhana, cepat, dan aman untuk mahasiswa.
      </p>

      <div class="action-group">
        <NuxtLink to="/login" class="btn btn-primary">
          Login
        </NuxtLink>

        <NuxtLink to="/register" class="btn btn-success">
          Register
        </NuxtLink>
      </div>
    </section>
  </div>
</template>