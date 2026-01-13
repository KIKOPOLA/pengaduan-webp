<!-- app/layouts/admin.vue -->
<script setup lang="ts">
import AdminSidebar from '~/components/AdminSidebar.vue'
import Header from '~/components/Header.vue'
import type { Complaint } from '~/types/complaint'

/**
 * ambil GLOBAL STATE yang sama
 */
const selectedComplaint = useState<Complaint | null>('selectedComplaint')
</script>

<template>
  <div class="admin-wrapper">
    <AdminSidebar />

    <div class="admin-body">
      <!-- HEADER TETAP DI ATAS -->
      <Header :complaint="selectedComplaint" />

      <main class="admin-main">
        <slot />
      </main>
    </div>
  </div>
</template>
