<!-- app\components\AdminSidebar.vue -->

<script setup lang="ts">
import { LayoutList, FileText } from 'lucide-vue-next'
</script>

<template>
  <aside class="admin-sidebar">
    <div class="sidebar-header">
      PENGADUAN
    </div>

    <nav class="sidebar-nav">
      <NuxtLink
        to="/admin"
        class="nav-link"
        active-class="active"
      >
        <LayoutList :size="18" />
        Complaints
      </NuxtLink>

      <NuxtLink
        to="/admin/export"
        class="nav-link"
        active-class="active"
      >
        <FileText :size="18" />
        Export Data
      </NuxtLink>
    </nav>
  </aside>
</template>