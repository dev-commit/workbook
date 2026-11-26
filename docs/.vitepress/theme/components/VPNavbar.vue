<script lang="ts" setup>
// FIXME: Проверить файл

import { computed, type DefineComponent } from "vue";
import { useData } from "vitepress";
import { VPLink as VPLinkUntyped } from "vitepress/theme";
import type { IThemeConfigNav } from "../../../types";
import { NAV as RAW_NAV } from "../../../wiki/builder";
import { NAVBAR_COLLAPSE } from "../menu-collapse";
import { useMenuCollapse } from "../composables/useMenuCollapse";

// В типах VitePress VPLink объявлен без пропсов: описываем их по VPLink.vue,
// иначе проверка типов (checkUnknownProps) считает href неизвестным пропом
const VPLink = VPLinkUntyped as DefineComponent<{
  tag?: string;
  href?: string;
  noIcon?: boolean;
  target?: string;
  rel?: string;
}>;

const { theme: themeConfig, page } = useData();

const nav: IThemeConfigNav[] = themeConfig.value?.nav ?? [];

const groups: IThemeConfigNav[] = nav.filter(
  (item) => "items" in item && Array.isArray(item.items),
);

const rawGroups = RAW_NAV.map((group) => ({
  text: group.text,
  items: group.children,
}));

const currentPath = () =>
  "/" + page.value.relativePath.replace(/\.md$/, "").replace(/\/index$/, "");

const norm = (p: string) =>
  decodeURI(p)
    .replace(/[?#].*$/, "")
    .replace(/(?:(^|\/)index)?\.(?:md|html)$/, "$1")
    .replace(/\/$/, "") || "/";

const isActive = (item: { link: string } | null) => {
  if (!item) return false;
  const current = currentPath();
  const n = norm(item.link);
  return current === n || (n !== "/" && current.startsWith(n + "/"));
};

// Свернуть / развернуть меню тем. Вид свёрнутого меню задаётся классом на <html> (стили ниже),
// поэтому при загрузке он применяется сразу, до запуска Vue
const { isCollapsed, toggleCollapsed } = useMenuCollapse(NAVBAR_COLLAPSE);
const toggleTitle = computed(() =>
  isCollapsed.value ? "Развернуть меню тем" : "Свернуть меню тем",
);

// Тема текущей страницы - видна, когда меню свёрнуто
const activeTheme = computed(() => {
  for (const group of rawGroups) {
    const item = group.items.find(isActive);
    if (item) return { group: group.text, item };
  }
  return null;
});
</script>

<template>
  <div class="vp-navbar">
    <nav
      v-if="groups.length"
      aria-labelledby="main-nav-aria-label"
      class="navbar"
    >
      <fieldset v-for="(group, gKey) in rawGroups" :key="gKey" class="fieldset">
        <legend class="legend">{{ group.text }}</legend>
        <div class="link-wrapper">
          <template v-for="(item, key) in group.items" :key="key">
            <div v-if="item === null" class="link-splitter"></div>
            <span v-else class="item-link-wrapper">
              <VPLink
                :href="item.link"
                :class="[
                  'link',
                  'theme-default',
                  item.theme && 'theme-' + item.theme,
                  isActive(item) && 'route-link-active',
                ]"
              >
                {{ item.text }}
              </VPLink>
            </span>
          </template>
        </div>
      </fieldset>
    </nav>
    <div v-if="groups.length && activeTheme" class="vp-navbar-current">
      <span class="legend">{{ activeTheme.group }}</span>
      <span class="item-link-wrapper">
        <VPLink
          :href="activeTheme.item.link"
          :class="[
            'link',
            'theme-default',
            activeTheme.item.theme && 'theme-' + activeTheme.item.theme,
          ]"
        >
          {{ activeTheme.item.text }}
        </VPLink>
      </span>
    </div>
    <button
      v-if="groups.length"
      type="button"
      class="vp-navbar-toggle"
      :title="toggleTitle"
      :aria-label="toggleTitle"
      :aria-expanded="!isCollapsed"
      @click="toggleCollapsed"
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path class="vp-navbar-toggle-chevron" d="m9 16 3-3 3 3" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.colors-test {
  color: rgb(34, 211, 238);
  color: rgb(14, 165, 233);
  color: rgb(45, 212, 191);
  color: rgb(34, 211, 238);
  color: rgb(74, 222, 128);
  color: rgb(6, 182, 212);
  color: rgb(56, 189, 248);
  color: rgb(37, 99, 235);
  color: rgb(56, 189, 248);
  color: rgb(99, 102, 241);
  color: rgb(168, 85, 247);
  color: rgb(99, 102, 241);
  color: rgb(217, 70, 239);
  color: rgb(147, 51, 234);
  color: rgb(252, 211, 77);
  color: rgb(249, 115, 22);
  color: rgb(251, 146, 60);
  color: rgb(219, 39, 119);
  color: rgb(236, 72, 153);
  color: rgb(244, 63, 94);
}

.vp-navbar {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  background-color: #f0f0f0;
}

.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  flex-grow: 1;
  min-width: 0;
}

/* Тема текущей страницы в свёрнутом меню (показывается стилями ниже) */
.vp-navbar-current {
  display: none;
  flex-grow: 1;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
}

/* Кнопка «свернуть / развернуть меню тем» - в стиле ссылок меню */
.vp-navbar-toggle {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: #fff;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition:
    border-color 0.25s,
    color 0.25s;
}
.vp-navbar-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.vp-navbar-toggle-chevron {
  transform-box: fill-box;
  transform-origin: center;
}

.fieldset {
  margin: 0;
  padding: 0 10px;
  border-width: 0px;
}

.legend {
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
}

.link-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.link-splitter {
  width: 100%;
  height: 0;
}

.link {
  display: block;
  width: auto;
  padding: 6px 8px;
  line-height: 1;
  font-size: 13px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  border-radius: 6px;
  transition: opacity 0.7s;
  cursor: pointer;
  font-weight: 400;
}
.link:hover {
  opacity: 0.7;
}
.link.route-link-active {
  background-color: rgba(0, 0, 0, 0.7) !important;
  color: #fff !important;
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

<style scoped>
.item-link-wrapper {
  background-color: #fff;
  border-radius: 6px;
  padding: 4px;
}

.link.theme-default {
  color: rgba(35, 44, 46, 1);
  background-color: rgba(225, 225, 225, 0.3);
  border: 1px solid rgba(225, 225, 225, 0.3);
}
.link.theme-primary {
  color: rgba(0, 95, 242, 1);
  background-color: rgba(240, 247, 255, 0.7);
  border: 1px solid rgba(199, 218, 240, 0.7);
}

.link.theme-vue {
  color: rgba(34, 83, 61, 1);
  background-color: rgba(62, 178, 127, 0.3);
  border: 1px solid rgba(62, 178, 127, 0.3);
}
.link.theme-html {
  color: rgb(233, 98, 40);
  background-color: rgba(233, 98, 40, 0.1);
  border: 1px solid rgba(233, 98, 40, 0.1);
}
.link.theme-secondary {
  color: rgba(145, 145, 145, 1);
  background-color: #fff;
  border: 1px solid rgba(225, 225, 225, 0.3);
}
.link.theme-react {
  color: rgb(43, 116, 132);
  background-color: rgba(43, 216, 255, 0.3);
  border: 1px solid rgba(43, 216, 255, 0.9);
}
.link.theme-tech {
  color: rgb(199, 90, 209);
  background-color: rgba(212, 15, 230, 0.1);
  border: 1px solid #e2e2e2;
}
.link.theme-svelte {
  color: rgb(248, 58, 13, 0.8);
  background-color: rgba(248, 58, 13, 0.1);
  border: 1px solid rgba(248, 58, 13, 0.1);
}
.link.theme-node {
  color: rgb(85, 103, 45);
  background-color: rgba(133, 190, 5, 0.3);
  border: 1px solid rgba(133, 190, 5, 0.9);
}
.link.theme-js {
  color: rgb(104, 95, 43);
  background-color: rgba(232, 212, 77, 0.3);
  border: 1px solid rgba(232, 212, 77, 0.9);
}

.link.theme-accent {
  color: rgb(100, 100, 100);
  background-color: #fff;
  border: 1px solid rgba(0, 201, 167, 0.6);
  outline: 1px solid rgba(0, 201, 167, 0.6);
}
.link.theme-actual {
  color: rgb(100, 100, 100);
  background-color: #fff;
  border: 1px solid rgba(245, 224, 66, 1);
  outline: 1px solid rgba(245, 224, 66, 1);
}
</style>

<!-- Свёрнутое меню тем: класс navbar-collapsed на <html> (menu-collapse.ts).
     Без scoped - класс ставится вне компонента. Остаётся одна строка: тема текущей страницы и кнопка -->
<style>
html.navbar-collapsed .vp-navbar {
  align-items: center;
}
html.navbar-collapsed .vp-navbar .navbar {
  display: none;
}
html.navbar-collapsed .vp-navbar .vp-navbar-current {
  display: flex;
}
/* Кнопка справа, даже если у страницы нет темы (н-р, главная) */
html.navbar-collapsed .vp-navbar .vp-navbar-toggle {
  margin-left: auto;
}
html.navbar-collapsed .vp-navbar .vp-navbar-toggle-chevron {
  transform: scaleY(-1);
}
</style>
