<template>
  <VCalendar
    v-model="selectedDate"
    :locale="locale"
    :attributes="[{ key: 'selected', dates: selectedDate, highlight: true }]"
    expanded
    @dayclick="onDayClick"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  initialDate?: string
  locale?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:selectedDate', value: string): void
}>()

// выбранная дата - если initialDate, то устанавливаю текущую дату
const selectedDate = ref<Date>(props.initialDate ? new Date(props.initialDate) : new Date())

// локаль (по умолчанию 'ru')
const locale = props.locale || 'ru'

// отслеживаю изменение initialDate со стороны родителя
watch(
  () => props.initialDate,
  (newVal) => {
    if (newVal) {
      selectedDate.value = new Date(newVal)
    }
  },
)

// обрабатываю клик по дате и передаю в родительский компонент
const onDayClick = (day: { date: Date }) => {
  selectedDate.value = day.date
  emit('update:selectedDate', formatDate(day.date))
}

// форматирую дату YYYY-MM-DD
function formatDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}
</script>

<style>
.vc-day.is-today:not(.in-next-month) {
  border: 1px solid #ff5722;
  color: #ff5722;
  font-weight: bold;
  border-radius: 50%;
}

.vc-day.is-selected:not(.in-next-month) {
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
}
</style>
