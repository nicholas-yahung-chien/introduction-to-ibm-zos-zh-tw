<script setup lang="ts">
import manifest from '../../../../data/course-manifest.json'

const sections = manifest.sections
</script>

<template>
  <table class="manifest-table">
    <thead>
      <tr>
        <th>單元</th>
        <th>活動</th>
        <th>類型</th>
        <th>第一版</th>
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
          <td>{{ activity.type }}</td>
          <td>{{ activity.includeInFirstEdition ? '納入' : '排除' }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

