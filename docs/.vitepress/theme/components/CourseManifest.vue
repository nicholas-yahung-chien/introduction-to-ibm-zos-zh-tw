<script setup lang="ts">
import manifest from '../../../../data/course-manifest.json'

const sections = manifest.sections

const typeLabels: Record<string, string> = {
  video: '影片',
  page: '閱讀頁',
  quiz: '題庫',
  hvp: '互動 / Lab',
  lab: 'Lab'
}

function typeLabel(type: string) {
  return typeLabels[type] || type
}

function statusLabel(includeInFirstEdition: boolean) {
  return includeInFirstEdition ? '第一版納入' : '後續版本'
}
</script>

<template>
  <table class="manifest-table">
    <thead>
      <tr>
        <th>單元</th>
        <th>活動</th>
        <th>類型</th>
        <th>範圍</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="section in sections" :key="section.slug">
        <tr v-for="activity in section.activities" :key="`${section.slug}-${activity.slug}`">
          <td>{{ section.titleZh }}</td>
          <td>
            <strong>{{ activity.titleZh || activity.title }}</strong><br>
            <small>{{ activity.title }}</small>
          </td>
          <td>{{ typeLabel(activity.type) }}</td>
          <td>{{ statusLabel(activity.includeInFirstEdition) }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
