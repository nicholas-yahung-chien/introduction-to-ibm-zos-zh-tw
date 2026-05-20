<script setup lang="ts">
import { withBase } from 'vitepress'
import manifest from '../../../../data/course-manifest.json'

const sections = manifest.sections

const typeLabels: Record<string, string> = {
  video: '影片',
  page: '閱讀頁'
}

function typeLabel(type: string) {
  return typeLabels[type] || type
}

const sectionLinks: Record<string, string> = {
  'course-overview': '/course/course-overview',
  'mainframe-environment': '/course/mainframe-environment',
  'mainframe-infrastructure': '/course/mainframe-infrastructure',
  'mainframe-security': '/course/mainframe-security',
}

const readingLinks: Record<string, string> = {
  'diving-deeper-into-zos': '/course/readings/diving-deeper-into-zos',
  'ibm-z-configuration-setup': '/course/readings/ibm-z-configuration-setup',
  'ibm-z-glossary': '/glossary/',
  'zos-mvs-ipl': '/course/readings/zos-mvs-ipl',
}

function activityLink(sectionSlug: string, activitySlug: string, type: string) {
  const path = type === 'page' ? readingLinks[activitySlug] : sectionLinks[sectionSlug]
  return path ? withBase(path) : undefined
}
</script>

<template>
  <table class="manifest-table">
    <thead>
      <tr>
        <th>單元</th>
        <th>活動</th>
        <th>類型</th>
        <th>連結</th>
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
          <td>
            <a
              v-if="activityLink(section.slug, activity.slug, activity.type)"
              :href="activityLink(section.slug, activity.slug, activity.type)"
            >
              前往
            </a>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
