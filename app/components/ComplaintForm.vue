<!-- app\components\ComplaintForm.vue -->
<script setup lang="ts">
const form = reactive({
  title: '',
  content: ''
})

const submit = async () => {
  await $fetch('/api/complaints', {
    method: 'POST',
    body: {
      title: form.title,
      content: form.content
    }
  })

  // reset form
  form.title = ''
  form.content = ''
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <input
        v-model="form.title"
        type="text"
        placeholder="Judul Pengaduan"
        class="form-control"
        required
      />
    </div>

    <div class="form-group">
      <textarea
        v-model="form.content"
        placeholder="Tuliskan detail pengaduan Anda di sini..."
        class="form-control"
        required
      ></textarea>
    </div>

    <button type="submit" class="btn btn-primary">
      Kirim Pengaduan
    </button>
  </form>
</template>