<template>
  <div class="wrapper">
    <span v-for="(item, i) in items" :key="i">
      <span class="code">{{ item }}</span>

      <template v-if="i !== items.length - 1">
        <span v-html="getSymbol()"></span>
      </template>
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items: string[];
  keys?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  keys: false,
});

const getSymbol = (): string => {
  const symbol = props.keys ? "+" : "➝";
  return `\u00A0${symbol}\u00A0`;
};
</script>

<style scoped>
.wrapper {
  margin: 16px 0;
  border-left: 2px solid var(--vp-c-divider);
  padding-left: 16px;
  color: var(--vp-c-text-2);
}

.code {
  font-family: var(--vp-font-family-mono);
  border-radius: 6px;
  font-size: 14px;
  border-bottom: 2px solid rgb(229, 231, 235);
  color: rgb(82, 82, 91);
  box-shadow:
    0px 0px 5px 0px #00000005,
    0px 2px 10px 0px #0000000f,
    0px 0px 1px 0px #0000004d;
  background-color: rgb(244, 244, 245);
  padding: 3px 6px;
}
</style>
