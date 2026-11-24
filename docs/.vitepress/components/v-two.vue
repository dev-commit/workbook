<template>
  <div class="wrapper">
    <div
      :class="[
        'column',
        columnLeft,
        compare ? 'column-theme-accent' : '',
        hasDefaultTitle && 'column-default-title',
        isTextLeft && 'column-text',
      ]"
    >
      <div
        v-if="titleLeft"
        :class="['title', compare ? 'title-accent' : 'title-default']"
        v-text="titleLeft"
      ></div>
      <div class="column-content">
        <slot name="first">User Default1</slot>
      </div>
    </div>
    <div
      :class="[
        'column',
        columnRight,
        compare ? 'color-theme-light' : '',
        hasDefaultTitle && 'column-default-title',
        isTextRight && 'column-text',
      ]"
    >
      <div
        v-if="titleRight"
        :class="['title', compare ? 'title-light' : 'title-default']"
        v-text="titleRight"
      ></div>
      <div class="column-content">
        <slot name="last">User Default2</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  fixLeft?: boolean;
  fixRight?: boolean;
  compare?: boolean;
  text?: boolean;
  textLeft?: boolean;
  textRight?: boolean;
  title?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  fixLeft: false,
  fixRight: false,
  compare: false,
  text: false,
  textLeft: false,
  textRight: false,
});

// Отступы для текста: text - обе колонки, text-left / text-right - одна колонка
// (во второй колонке может быть код, у блоков кода свои отступы)
const isTextLeft = computed(() => props.text || props.textLeft);
const isTextRight = computed(() => props.text || props.textRight);

// Фиксированная колонка - 200px, вторая занимает оставшееся место.
// Если заданы оба пропа, фиксируется левая колонка
const columnLeft = computed(() => {
  if (props.fixLeft) return "column-fix";
  if (props.fixRight) return "column-grow";
  return "column-half";
});

const columnRight = computed(() => {
  if (props.fixLeft) return "column-grow";
  if (props.fixRight) return "column-fix";
  return "column-half";
});

const titleLeft = computed(() => props.title?.[0] ?? "");
const titleRight = computed(() => props.title?.[1] ?? "");

// Заголовки без compare: колонкам добавляется обводка цвета заголовка
const hasDefaultTitle = computed(
  () => !props.compare && Boolean(titleLeft.value || titleRight.value),
);
</script>

<style scoped>
.wrapper {
  --column-padding-y: 10px;
  --column-padding-x: 10px;
  --column-gap: 10px;
  --column-fix-width: 200px;
  /* Цвет заголовков без compare: фон заголовка и обводка колонки */
  --title-default-color: rgba(var(--color-violet-blue), 0.1);

  display: flex;
  gap: var(--column-gap);
  margin: 10px 0px;
}
/* Скругление как у блоков кода VitePress; overflow обрезает фон заголовка по углам */
.column {
  padding: var(--column-padding-y) var(--column-padding-x);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
}
.column-half {
  width: calc((100% - var(--column-gap)) / 2);
}
.column-grow {
  width: calc(100% - var(--column-fix-width) - var(--column-gap));
}
.column-fix {
  width: var(--column-fix-width);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Заголовок вплотную к краям колонки: отрицательный отступ компенсирует padding колонки */
.title {
  margin: calc(-1 * var(--column-padding-y)) calc(-1 * var(--column-padding-x))
    0;
  padding: 10px var(--column-padding-x);
  font-weight: bold;
}
.title-accent {
  background-color: rgba(var(--color-sea-green-light), 0.5);
}
.title-light {
  background-color: rgb(var(--color-gray-20));
}
/* Заголовки без compare - светло-синий фон (тот же цвет, что у ::: danger), одинаковый для обеих колонок */
.title-default {
  background-color: var(--title-default-color);
}
.column-default-title {
  border: 1px solid var(--title-default-color);
}

/* Без пропов text обёртка не влияет на раскладку колонки */
.column-content {
  display: contents;
}

/* Пропы text / text-left / text-right: отступы колонки как у блоков кода VitePress
   (20px сверху/снизу, 24px по бокам) */
.column-text {
  --column-padding-y: 20px;
  --column-padding-x: 24px;
}
.column-text .title {
  margin-bottom: var(--column-padding-y);
}
.column-text .column-content {
  display: block;
}
.column-text .column-content > :deep(:first-child) {
  margin-top: 0;
}
.column-text .column-content > :deep(:last-child) {
  margin-bottom: 0;
}

@media screen and (max-width: 1070px) {
  .wrapper {
    flex-wrap: wrap;
  }
  .column-half {
    width: 100%;
  }
  .column-grow {
    width: 100%;
  }
  .column-fix {
    width: 100%;
  }
}
</style>
