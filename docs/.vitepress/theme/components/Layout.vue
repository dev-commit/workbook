<script setup lang="ts">
// Layout справочника - стандартный Layout VitePress со своими слотами:
// - layout-top: навбар тем (VPNavbar);
// - sidebar-nav-before: поиск и кнопка сворачивания над левым меню (SidebarTop);
// - doc-before: кнопка «открыть файл страницы в редакторе» (OpenInEditor, только dev).
// Страница рендерится один раз. Десктоп и мобильный различаются только CSS (стили ниже):
// до 960px - стандартные шапка и выдвижное меню VitePress, от 961px - меню слева, навбар тем сверху,
// страница прокручивается целиком (прокрутку, якоря и Escape обрабатывает VitePress)

import DefaultTheme from "vitepress/theme";
import VPNavbar from "./VPNavbar.vue";
import SidebarTop from "./SidebarTop.vue";
import OpenInEditor from "./OpenInEditor.vue";

const DefaultLayout = DefaultTheme.Layout;
</script>

<template>
  <DefaultLayout class="workbook-layout">
    <template #layout-top><VPNavbar /></template>
    <template #sidebar-nav-before><SidebarTop /></template>
    <template #doc-before><OpenInEditor /></template>
  </DefaultLayout>
</template>

<!-- Десктоп (от 961px). Селекторы с тегом (aside.VPSidebar, div.VPContent) - чтобы перебить
     scoped-стили VitePress той же специфичности. Мобильный вид - стандартный VitePress -->
<style>
@media (min-width: 961px) {
  .workbook-layout {
    --vp-sidebar-width: 300px;
  }
  /* Свёрнутое меню - полоса 60px: кнопка 40px + отступы 10px (SidebarTop.vue) */
  html.sidebar-collapsed .workbook-layout {
    --vp-sidebar-width: 60px;
  }

  /* Шапка и локальная навигация («Меню», «На этой странице») - только на мобильном */
  .workbook-layout .VPNav,
  .workbook-layout .VPLocalNav {
    display: none;
  }

  /* Левое меню: фиксированное, на всю высоту окна, прокручивается отдельно от страницы.
     Белый блок - поиск и пункты меню, ниже - фон меню */
  .workbook-layout aside.VPSidebar {
    padding: 0;
    width: var(--vp-sidebar-width);
    border-right: 1px solid var(--vp-c-divider);
    font-size: 15px;
    scrollbar-color: var(--vp-c-scrollbar) var(--vp-c-scrollbar-divider);
    scrollbar-width: thin;
    transition: width 0.2s;
  }
  .workbook-layout .VPSidebar .curtain {
    display: none;
  }
  /* flow-root - чтобы нижний отступ последней группы остался внутри белого блока */
  .workbook-layout .VPSidebar .nav {
    display: flow-root;
    background-color: #fff;
  }
  .workbook-layout .VPSidebar .nav .group {
    width: auto;
    margin: 0 10px 10px;
    padding: 0;
    border: none;
  }
  .workbook-layout .VPSidebar .vp-sidebar-search + .group {
    margin-top: 10px;
  }
  html.sidebar-collapsed .workbook-layout aside.VPSidebar {
    overflow: hidden;
  }
  html.sidebar-collapsed .workbook-layout .VPSidebar .nav .group {
    display: none;
  }

  /* Контент справа от меню (навбар тем сдвигается так же - VPNavbar.vue) */
  .workbook-layout div.VPContent {
    padding-top: 0;
  }
  .workbook-layout div.VPContent.has-sidebar {
    margin: 0;
    padding-right: 0;
    padding-left: var(--vp-sidebar-width);
    transition: padding-left 0.2s;
  }

  /* Страница на всю ширину, без оглавления справа */
  .workbook-layout .VPDoc.has-sidebar.has-aside {
    padding: 10px;
  }
  .workbook-layout .VPDoc div.aside {
    display: none;
  }
  .workbook-layout .VPDoc .content {
    padding: 20px 40px;
  }
  .workbook-layout .VPDoc .content div.content-container {
    width: 100%;
    max-width: 100%;
  }
}
</style>
