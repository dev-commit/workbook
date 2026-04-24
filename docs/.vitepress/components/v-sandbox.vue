<template>
  <div class="v-sandbox">
    <span
      :class="{
        item: true,
        codesandbox: codesandbox,
        codepen: codepen,
      }"
    >
      ⭐️ <a :href="url" v-html="getTitle()" target="_blank"></a>
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  url: string;
  title: string;
  codepen: boolean;
  codesandbox: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  url: "",
  title: "",
  codepen: false,
  codesandbox: false,
});

const getTitle = () => {
  if (props.title) return props.title;
  if (props.codesandbox) return "CodeSandbox";
  if (props.codepen) return "CodePen";
  return "Code Sample";
};
</script>

<style scoped>
.v-sandbox {
  font-size: 14px;
  line-height: 2.2;
}
.v-sandbox .item {
  border: 1px solid rgba(var(--color-black), 0.4);
  background-color: #fff;
  color: #3f3f3f;
  padding: 3px 5px;
  border-radius: 5px;
}
.v-sandbox .codesandbox {
  border: none;
  background-color: rgba(var(--color-violet-medium), 0.7);
  color: rgb(var(--color-white));
}
.v-sandbox .codepen {
  border: none;
  background-color: rgba(var(--color-green), 0.7);
  color: rgb(var(--color-white));
}
.v-sandbox a {
  text-decoration: none;
  color: inherit !important;
  font-weight: 400;
}

@media screen and (max-width: 950px) {
  .v-two-wrapper {
    flex-direction: column;
  }
  .v-two-column-half {
    width: 100%;
  }
}
</style>
