<script lang="ts" setup>
// Верх левого меню на десктопе: поиск и кнопка «свернуть / развернуть меню».
// Выводится в слоте sidebar-nav-before стандартного меню VitePress (Layout.vue)

import { computed, ref } from "vue";
import VPLocalSearchBox from "vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue";
import VPNavBarSearchButton from "vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue";
import { SIDEBAR_COLLAPSE } from "../menu-collapse";
import { useMenuCollapse } from "../composables/useMenuCollapse";

const showSearchModal = ref(false);

// Свернуть / развернуть меню. Вид свёрнутого меню задаётся классом на <html> (стили ниже
// и в Layout.vue), поэтому при загрузке он применяется сразу, до запуска Vue
const { isCollapsed, toggleCollapsed } = useMenuCollapse(SIDEBAR_COLLAPSE);
const toggleTitle = computed(() =>
  isCollapsed.value ? "Развернуть меню" : "Свернуть меню",
);
</script>

<template>
  <div class="vp-sidebar-search">
    <VPLocalSearchBox v-if="showSearchModal" @close="showSearchModal = false" />
    <VPNavBarSearchButton
      class="vp-sidebar-search-trigger"
      @click="showSearchModal = true"
    />
    <button
      type="button"
      class="vp-sidebar-toggle"
      :title="toggleTitle"
      :aria-label="toggleTitle"
      :aria-expanded="!isCollapsed"
      @click="toggleCollapsed"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
        <path class="vp-sidebar-toggle-chevron" d="m16 15-3-3 3-3" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.vp-sidebar-search {
  display: flex;
  gap: 8px;
  padding: 10px;
  background-color: #fff;
}
/* На мобильном это выдвижное меню VitePress: поиск там в шапке, сворачивать нечего */
@media (max-width: 960px) {
  .vp-sidebar-search {
    display: none;
  }
}

.vp-sidebar-search-trigger {
  flex-grow: 1;
  min-width: 0;
  height: 40px;
  border-radius: 8px;
}
.vp-sidebar-search-trigger :deep(.DocSearch-Button-Keys) {
  display: none;
}

/* Кнопка «свернуть / развернуть меню» - в стиле кнопки поиска */
.vp-sidebar-toggle {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition:
    border-color 0.25s,
    color 0.25s;
}
.vp-sidebar-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.vp-sidebar-toggle-chevron {
  transform-box: fill-box;
  transform-origin: center;
}
</style>

<!-- Свёрнутое меню (полоса 60px, Layout.vue): класс sidebar-collapsed на <html> (menu-collapse.ts).
     Без scoped - класс ставится вне компонента. Кнопки друг под другом: сверху «развернуть», под ней поиск -->
<style>
@media (min-width: 961px) {
  html.sidebar-collapsed .vp-sidebar-search {
    flex-direction: column;
  }
  html.sidebar-collapsed .vp-sidebar-toggle {
    order: -1;
  }
  html.sidebar-collapsed .vp-sidebar-search-trigger {
    flex-grow: 0;
    justify-content: center;
    width: 40px;
    padding: 0;
  }
  html.sidebar-collapsed .vp-sidebar-search .DocSearch-Button-Placeholder {
    display: none;
  }
  /* У иконки VitePress отступ справа до текста «Поиск» и сдвиг на 1px вниз - без текста иконка не по центру */
  html.sidebar-collapsed .vp-sidebar-search .DocSearch-Search-Icon {
    top: 0;
    margin-right: 0;
  }
  html.sidebar-collapsed .vp-sidebar-toggle-chevron {
    transform: scaleX(-1);
  }
}
</style>
