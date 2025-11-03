<template>
  <div class="main-wrap">
    <h1>Календарь</h1>
    <div>
      <CalendarComponent :initial-date="'2025-11-01'" locale="ru" v-model:selectedDate="date" />
      <p class="selected-date">Выбранная дата: {{ date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalendarComponent from '@/components/CalendarComponent.vue'

const date = ref<string>('')
</script>

<style scoped>
.main-wrap {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 20px 0 30px 0;
  text-align: center;
}

.selected-date {
  margin: 20px 0;
}
</style>
