<!-- app\components\ComplaintExportList.vue -->
<script setup lang="ts">
import type { Complaint } from '~/types/complaint'
import { FileText, Download } from 'lucide-vue-next'

const { data: complaints } = await useFetch<Complaint[]>('/api/complaints')

const exportWord = async (id: number) => {
  const res = await fetch(`/api/complaints/${id}/export`, {
    credentials: 'include',
  })

  if (!res.ok) {
    alert('Export gagal')
    return
  }

  const blob = await res.blob()
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `pengaduan-${id}.docx`
  a.click()

  URL.revokeObjectURL(url)
}

const exportAll = async () => {
  const res = await fetch('/api/complaints/export', {
    credentials: 'include',
  })

  if (!res.ok) {
    alert('Export gagal')
    return
  }

  const blob = await res.blob()
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'laporan-pengaduan.docx'
  a.click()

  URL.revokeObjectURL(url)
}
</script>

<template>
  <div>
    <!-- Main Export Action -->
    <button @click="exportAll" class="btn btn-primary">
      <Download :size="18" />
      Download Semua Laporan
    </button>

    <!-- Refined Export List -->
    <ul class="export-grid-list">
      <li v-for="c in complaints" :key="c.id" class="export-card-item">
        <!-- Icon Box -->
        <div class="file-icon-box">
          <FileText :size="24" />
        </div>

        <!-- File Info -->
        <div class="file-details">
          <h3>{{ c.title }}</h3>
          <span class="file-badge">DOCX</span>
        </div>

        <!-- Action Button -->
        <button @click="exportWord(c.id)" class="btn btn-sm btn-outline">
          <Download :size="14" />
          Unduh
        </button>
      </li>
    </ul>
  </div>
</template>