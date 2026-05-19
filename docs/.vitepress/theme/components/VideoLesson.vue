<script setup lang="ts">
defineProps<{
  title: string
  videoSrc?: string
  poster?: string
  subtitleSrc?: string
  entryId?: string
  sourceUrl?: string
}>()
</script>

<template>
  <figure class="video-lesson">
    <video controls preload="metadata" :poster="poster">
      <source v-if="videoSrc" :src="videoSrc" type="video/mp4">
      <track
        v-if="subtitleSrc"
        kind="subtitles"
        srclang="zh-Hant-TW"
        label="繁體中文（台灣）"
        :src="subtitleSrc"
        default
      >
      你的瀏覽器不支援 HTML5 video。
    </video>
    <figcaption>
      <strong>{{ title }}</strong>
      <div class="video-lesson__meta">
        <span v-if="entryId" class="video-lesson__tag">Kaltura {{ entryId }}</span>
        <a v-if="sourceUrl" class="video-lesson__tag" :href="sourceUrl">原始課程活動</a>
        <span v-if="!videoSrc" class="video-lesson__tag">等待媒體檔部署</span>
        <span v-if="!subtitleSrc" class="video-lesson__tag">等待中文字幕</span>
      </div>
    </figcaption>
  </figure>
</template>

