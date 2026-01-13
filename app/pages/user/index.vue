<!-- app\pages\user\index.vue -->
<script setup lang="ts">
// Pastikan untuk import CSS ini di file ini, atau globally di nuxt.config
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <div>
    <Navbar />

    <main class="container">
      <!-- FORM SECTION -->
      <section id="form" class="card">
        <h1>Form Pengaduan</h1>
        <p class="muted">
          Silakan isi form di bawah ini untuk mengirimkan pengaduan Anda secara langsung.
        </p>
        
        <div style="margin-top: 24px;">
          <ComplaintForm />
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section id="about" class="card">
        <h2>Tentang Organisasi</h2>
        <p>
          Sistem ini digunakan untuk menampung dan mengelola pengaduan
          dari mahasiswa secara terstruktur dan aman.
        </p>
      </section>

      <!-- HOW IT WORKS -->
      <section id="how" class="card">
        <h2>Cara Kerja</h2>
        <ol>
          <li>Mahasiswa mengisi form pengaduan dengan data valid.</li>
          <li>Admin menerima dan memverifikasi pengaduan masuk.</li>
          <li>Pengaduan ditindaklanjuti sesuai kebijakan organisasi.</li>
        </ol>
      </section>

      <!-- ACTION -->
      <section id="action" class="card">
        <h2>Aksi</h2>
        <p>
          Pastikan data yang kamu kirim valid dan dapat dipertanggungjawabkan.
        </p>
      </section>
    </main>
  </div>
</template>