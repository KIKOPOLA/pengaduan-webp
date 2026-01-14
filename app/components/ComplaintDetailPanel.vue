<!-- app/components/ComplaintDetailPanel.vue -->
<script setup lang="ts">
import type { Complaint } from '~/types/complaint'
import { FileDown, User, FileText } from 'lucide-vue-next'

const props = defineProps<{
  complaint: Complaint | null
}>()

const emit = defineEmits<{
  (e: 'status-updated', status: Complaint['status']): void
  (e: 'deleted', id: number): void
}>()

const exportWord = () => {
  if (!props.complaint) return
  window.open(`/api/complaints/${props.complaint.id}/export`, '_blank')
}

const updateStatus = async (e: Event) => {
  if (!props.complaint) return

  const status = (e.target as HTMLSelectElement).value as Complaint['status']

  await $fetch(`/api/complaints/${props.complaint.id}`, {
    method: 'PUT',
    body: { status }
  })

  emit('status-updated', status)
}

const deleting = ref(false)

const deleteComplaint = async () => {
  if (!props.complaint) return

  if (!confirm('Yakin ingin menghapus pengaduan ini?')) return

  deleting.value = true
  try {
    await $fetch(`/api/complaints/${props.complaint.id}`, {
      method: 'DELETE',
    })

    emit('deleted', props.complaint.id)
  } catch (e) {
    alert('Gagal menghapus pengaduan')
  } finally {
    deleting.value = false
  }
}

</script>

<template>
  <!-- Empty State -->
  <div v-if="!complaint" class="empty-state">
    <div class="empty-icon">
      <FileText :size="48" />
    </div>
    <p class="text-muted">
      Pilih pengaduan dari daftar untuk melihat detail lengkap.
    </p>
  </div>

  <!-- Active Detail View -->
  <div v-else class="detail-wrapper">
    <!-- Header -->
    <div class="detail-header">
      <span class="detail-id-tag">ID-{{ complaint.id }}</span>
      <h1 class="detail-title">{{ complaint.title }}</h1>

      <div class="detail-meta">
        <User :size="14" />
        <span>Pelapor: Anonim</span>
      </div>
    </div>

    <!-- Content -->
    <div class="detail-content">
      {{ complaint.content }}
    </div>

    <!-- Footer -->
    <div class="detail-footer">
      <span class="text-sm text-muted">
        Status:
      </span>

      <select
        class="btn btn-sm"
        :value="complaint.status"
        @change="updateStatus"
      >
        <option value="baru">Baru</option>
        <option value="diproses">Diproses</option>
        <option value="selesai">Selesai</option>
      </select>

      <button
        @click="exportWord"
        class="btn btn-primary"
      >
        <FileDown :size="16" />
        Export DOCX
      </button>
      <button
        @click="deleteComplaint"
        class="btn btn-danger"
        :disabled="deleting"
      >
        🗑 Hapus
      </button>
    </div>
  </div>
</template>
