<template>
  <details class="v-details">
    <summary class="v-summary" v-html="title"></summary>
    <div class="v-content">
      <slot>Default</slot>
    </div>
  </details>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped>
.v-details {
  font-size: 16px;
  background-color: #f5f5f5;
  padding: 15px;
  margin: 16px 0;
  border-color: var(--vp-custom-block-details-border);
  color: var(--vp-custom-block-details-text);
  border-radius: 0px 8px 8px 0px;
  border-left: 4px solid #bc8bf9;
}

.v-summary {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--vp-font-family-base);
  cursor: pointer;
  user-select: none;
}

.v-content {
  padding: 10px;
}

.v-content :deep(pre) {
  background-color: #fff;
}

.v-content :deep(.vp-code-group .tabs) {
  --color: #fafafa;
  background-color: var(--color);
  border-top: 1px solid var(--color);
  border-left: 1px solid var(--color);
  border-right: 1px solid var(--color);
}

.v-summary::marker {
  color: #a96ceb;
}
</style>
