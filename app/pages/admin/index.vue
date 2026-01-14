<script setup lang="ts">
import type { Complaint } from '~/types/complaint'

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})

const selectedComplaint = useState<Complaint | null>(
  'selectedComplaint',
  () => null
)

const onDeleted = (id: number) => {
  if (selectedComplaint.value?.id === id) {
    selectedComplaint.value = null
  }

  // 🔥 refresh list
  refreshNuxtData('complaints')
}
</script>

<template>
  <div class="grid-dashboard">
    <!-- KIRI -->
    <div class="card" style="display:flex;flex-direction:column;overflow:hidden">
      <div class="panel-header flex justify-between items-center">
        <span class="panel-title">Daftar Pengaduan</span>
      </div>

      <div style="overflow-y:auto;flex:1">
        <ComplaintList
          @select="selectedComplaint = $event"
        />
      </div>
    </div>

    <!-- KANAN -->
    <div class="card">
      <ComplaintDetailPanel
        :complaint="selectedComplaint"
        @status-updated="selectedComplaint && (selectedComplaint.status = $event)"
        @deleted="onDeleted"
      />
    </div>
  </div>
</template>
