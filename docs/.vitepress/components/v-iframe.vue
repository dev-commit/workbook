<template>
  <iframe
    class="frame"
    :src="src"
    :height="height"
    :title="title"
    loading="lazy"
    scrolling="no"
    allowfullscreen
  >
  </iframe>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  height?: string | number;
  title?: string;
}

withDefaults(defineProps<Props>(), {
  height: "400",
  title: "Пример кода",
});
</script>

<style scoped>
/* Рамку убирает CSS (вместо устаревшего frameborder). scrolling="no" остаётся,
   как во встраивании CodePen: у этого атрибута нет замены в CSS */
.frame {
  width: 100%;
  margin: 20px 0;
  border: 0;
}
</style>
