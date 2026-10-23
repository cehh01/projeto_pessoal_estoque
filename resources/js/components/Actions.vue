<script setup>
defineProps(['item'])
const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <button type="button" @click="emit('edit', item)">Edit</button>
  <button type="button" @click="emit('delete', item)">Delete</button>
</template>
