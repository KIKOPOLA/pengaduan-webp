<!-- app/pages/admin/export.vue -->
<script setup lang="ts">
import type { Complaint } from '~/types/complaint'
import { FileDown, Download } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})

const { data: complaints } = await useFetch<Complaint[]>('/api/complaints')

const exportAll = () => {
  window.open('/api/complaints/export', '_blank')
}

const exportOne = (id: number) => {
  window.open(`/api/complaints/${id}/export`, '_blank')
}
</script>

<template>
  <div class="space-y-4">
    <div class="card">
      <div class="panel-header">
        <span class="panel-title">Export Data Pengaduan</span>
      </div>
      
      <p class="text-muted mb-4">
        Unduh semua laporan dalam satu file atau pilih per item.
      </p>

      <button @click="exportAll" class="btn btn-primary">
        <Download :size="16" />
        Export Semua Pengaduan (.DOCX)
      </button>
    </div>

    <div class="card">
      <div class="panel-header">
        <span class="panel-title">Daftar File</span>
      </div>

      <ul class="item-list">
        <li v-for="c in complaints" :key="c.id" class="list-item">
          <div class="list-content">
            <h3>{{ c.title }}</h3>
            <span class="text-sm text-muted">DOCX</span>
          </div>

          <button @click="exportOne(c.id)" class="btn btn-outline btn-sm">
            <FileDown :size="14" />
            Download
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>