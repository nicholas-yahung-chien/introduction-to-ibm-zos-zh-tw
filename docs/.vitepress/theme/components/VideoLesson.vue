<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  title: string
  videoSrc?: string
  poster?: string
  subtitleSrc?: string
  entryId?: string
  sourceUrl?: string
}>()

const mediaVersion = 'hls-f6d6b21'
const subtitleVersion = 'subtitles-audit-c06'
const mediaBaseUrl = import.meta.env.VITE_MEDIA_BASE_URL?.replace(/\/$/, '')

function appendVersion(src: string, version = mediaVersion) {
  return `${src}${src.includes('?') ? '&' : '?'}v=${version}`
}

function isAbsoluteUrl(src: string) {
  return /^https?:\/\//i.test(src)
}

function siteAsset(src: string) {
  return isAbsoluteUrl(src) ? src : withBase(src)
}

function mediaAsset(src: string) {
  if (isAbsoluteUrl(src)) return src
  return mediaBaseUrl ? `${mediaBaseUrl}${src.startsWith('/') ? src : `/${src}`}` : siteAsset(src)
}

const versionedVideoSrc = computed(() => {
  if (!props.videoSrc) return undefined
  return appendVersion(mediaAsset(props.videoSrc))
})

const subtitleTrackSrc = computed(() => {
  if (!props.subtitleSrc) return undefined
  return appendVersion(siteAsset(props.subtitleSrc), subtitleVersion)
})

const videoRef = ref<HTMLVideoElement>()
const hlsSrc = computed(() => {
  if (!props.videoSrc) return undefined
  const source = props.videoSrc.split('?')[0]
  const playlist = source.replace('/media/', '/hls/').replace(/\.mp4$/, '/index.m3u8')
  return appendVersion(mediaAsset(playlist))
})

let hls: { destroy: () => void } | undefined

onMounted(async () => {
  const video = videoRef.value
  if (!video || !hlsSrc.value) return

  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = hlsSrc.value
    return
  }

  const { default: Hls } = await import('hls.js')
  if (Hls.isSupported()) {
    hls = new Hls()
    hls.loadSource(hlsSrc.value)
    hls.attachMedia(video)
  } else if (versionedVideoSrc.value) {
    video.src = versionedVideoSrc.value
  }
})

onBeforeUnmount(() => {
  hls?.destroy()
})
</script>

<template>
  <figure class="video-lesson">
    <video ref="videoRef" controls preload="metadata" :poster="poster">
      <source v-if="versionedVideoSrc" :src="versionedVideoSrc" type="video/mp4">
      <track
        v-if="subtitleSrc"
        kind="subtitles"
        srclang="zh-Hant-TW"
        label="繁體中文（台灣）"
        :src="subtitleTrackSrc"
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
