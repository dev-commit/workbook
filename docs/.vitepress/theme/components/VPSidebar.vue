<script lang="ts" setup>
// FIXME: Проверить файл

import { computed, ref, watch } from "vue";
import { useSidebar } from "vitepress/theme";
import VPSidebarGroup from "vitepress/dist/client/theme-default/components/VPSidebarGroup.vue";
import VPLocalSearchBox from "vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue";
import VPNavBarSearchButton from "vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue";
import { SIDEBAR_COLLAPSE } from "../menu-collapse";
import { useMenuCollapse } from "../composables/useMenuCollapse";

const { sidebarGroups, hasSidebar } = useSidebar();
const groupKey = ref(0);
watch(
  sidebarGroups,
  () => {
    groupKey.value += 1;
  },
  { deep: true },
);

const showSearchModal = ref(false);

// Свернуть / развернуть меню. Вид свёрнутого меню задаётся классом на <html> (стили ниже),
// поэтому при загрузке он применяется сразу, до запуска Vue
const { isCollapsed, toggleCollapsed } = useMenuCollapse(SIDEBAR_COLLAPSE);
const toggleTitle = computed(() =>
  isCollapsed.value ? "Развернуть меню" : "Свернуть меню",
);
</script>

<template>
  <aside v-if="hasSidebar" class="vp-sidebar">
    <div class="vp-sidebar-search">
      <VPLocalSearchBox
        v-if="showSearchModal"
        @close="showSearchModal = false"
      />
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
    <nav class="vp-sidebar-items" aria-labelledby="sidebar-aria-label">
      <span class="visually-hidden" id="sidebar-aria-label">
        Sidebar Navigation
      </span>
      <slot name="sidebar-nav-before" />
      <VPSidebarGroup :items="sidebarGroups" :key="groupKey" />
      <slot name="sidebar-nav-after" />
    </nav>
  </aside>
</template>

<style scoped>
.vp-sidebar {
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  border-right: 1px solid var(--vp-c-divider);
  background-color: var(--vp-sidebar-bg-color, var(--vp-c-bg-soft));
  font-size: 15px;
  scrollbar-color: var(--vp-c-scrollbar) var(--vp-c-scrollbar-divider);
  scrollbar-width: thin;
  position: relative;
  padding-top: 12px;
  transition: width 0.2s;
}

.vp-sidebar-search {
  display: flex;
  gap: 8px;
  padding: 0 16px 12px;
  position: relative;
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

.vp-sidebar-items {
  padding: 0 16px 24px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

<!-- Свёрнутое меню: класс sidebar-collapsed на <html> (menu-collapse.ts).
     Без scoped - класс ставится вне компонента. Ширина 60px: кнопка 40px + отступы 10px из custom.css -->
<style>
html.sidebar-collapsed .vp-sidebar {
  width: 60px;
  overflow: hidden;
}
html.sidebar-collapsed .vp-sidebar .vp-sidebar-items {
  display: none;
}
/* Кнопки друг под другом: сверху «развернуть», под ней поиск (только иконка) */
html.sidebar-collapsed .vp-sidebar .vp-sidebar-search {
  flex-direction: column;
}
html.sidebar-collapsed .vp-sidebar .vp-sidebar-toggle {
  order: -1;
}
html.sidebar-collapsed .vp-sidebar .vp-sidebar-search-trigger {
  flex-grow: 0;
  justify-content: center;
  width: 40px;
  padding: 0;
}
html.sidebar-collapsed .vp-sidebar .DocSearch-Button-Placeholder {
  display: none;
}
/* У иконки VitePress отступ справа до текста «Поиск» и сдвиг на 1px вниз - без текста иконка не по центру */
html.sidebar-collapsed .vp-sidebar .DocSearch-Search-Icon {
  top: 0;
  margin-right: 0;
}
html.sidebar-collapsed .vp-sidebar .vp-sidebar-toggle-chevron {
  transform: scaleX(-1);
}
</style>
