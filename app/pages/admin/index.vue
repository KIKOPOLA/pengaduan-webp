<!-- app/pages/admin/index.vue -->
<script setup lang="ts">
import type { Complaint } from '~/types/complaint'

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})

/**
 * GLOBAL STATE
 * dipakai page + layout
 */
const selectedComplaint = useState<Complaint | null>(
  'selectedComplaint',
  () => null
)
</script>

<template>
  <div class="grid-dashboard">
    <!-- KIRI: LIST -->
    <div class="card" style="display: flex; flex-direction: column; overflow: hidden;">
      <div class="panel-header flex justify-between items-center">
        <span class="panel-title">Daftar Pengaduan</span>
      </div>

      <div style="overflow-y: auto; flex: 1;">
        <ComplaintList
          @select="selectedComplaint = $event"
        />
      </div>
    </div>

    <!-- KANAN: DETAIL -->
    <div class="card">
      <ComplaintDetailPanel
        :complaint="selectedComplaint"
        @status-updated="selectedComplaint && (selectedComplaint.status = $event)"
      />
    </div>
  </div>
</template>
