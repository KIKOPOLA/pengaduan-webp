<!-- app\components\ComplaintList.vue -->

<script setup lang="ts">
import type { Complaint } from '~/types/complaint'

const emit = defineEmits<{
  (e: 'select', complaint: Complaint): void
}>()

const { data: complaints } = await useFetch<Complaint[]>('/api/complaints')
</script>

<template>
  <ul class="item-list">
    <li
      v-for="c in complaints"
      :key="c.id"
      @click="emit('select', c)"
      class="list-item"
    >
      <div class="list-content">
        <h3>{{ c.title }}</h3>
        <p>{{ c.content }}</p>
      </div>
      <!-- Ikon panah kecil sebagai indikator klik -->
      <div style="color: #9ca3af;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>
    </li>
  </ul>
</template>