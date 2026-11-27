<template>
  <a
    v-if="href"
    class="open-in-editor"
    :href="href"
    :title="`Открыть файл в ${EDITOR_NAME}`"
  >
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
    <span>{{ EDITOR_NAME }}</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

// Абсолютный путь папки docs, подставляется при сборке (vite.define в config.ts)
declare const __DOCS_ROOT__: string;

// Редактор, в котором открывается файл страницы: URL-схема из product.json редактора
// (VSCode - "vscode", Cursor - "cursor", Kodik - "kodik")
const EDITOR_NAME = "Kodik";
const EDITOR_URL_SCHEME = "kodik";

const { page } = useData();

// Только на dev-сервере: в опубликованном справочнике локальный путь бесполезен
const href = computed(() => {
  if (!import.meta.env.DEV || !page.value.filePath) return "";
  const absolutePath = `${__DOCS_ROOT__}/${page.value.filePath}`;
  return encodeURI(`${EDITOR_URL_SCHEME}://file${absolutePath}`);
});
</script>

<style scoped>
/* position + z-index: у заголовков VitePress position: relative, без этого h1 перекрывает кнопку и перехватывает клик */
.open-in-editor {
  position: relative;
  z-index: 1;
  float: right;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 4px 0 8px 16px;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-default-soft);
  text-decoration: none;
  transition:
    color 0.2s,
    background-color 0.2s;
}
.open-in-editor:hover {
  color: var(--vp-c-brand-1);
  background-color: rgba(var(--color-violet-blue), 0.1);
}
/* Только на десктопной вёрстке */
@media (max-width: 960px) {
  .open-in-editor {
    display: none;
  }
}
</style>
