<!-- app\components\Header.vue -->
<script setup lang="ts">
import type { Complaint } from '~/types/complaint'

const user = useState<any>('user')

defineProps<{
  complaint?: Complaint | null
}>()

const logout = async () => {
  await $fetch('/api/auth/logout', { method: 'POST' })
  user.value = null
  navigateTo('/login')
}
</script>

<template>
  <header class="admin-header">
    <div class="flex items-center gap-4">
      <h2 class="header-title">Admin Panel</h2>

      <span
        v-if="complaint"
        class="detail-id-tag"
        style="margin: 0;"
      >
        {{ complaint.status }}
      </span>
    </div>

    <div class="header-actions">
      <span class="user-name">
        {{ user?.name }}
      </span>

      <button @click="logout" class="btn-logout">
        Logout
      </button>
    </div>
  </header>
</template>
