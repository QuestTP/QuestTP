<template>
  <div>
    <NuxtLayout>
      <NuxtPage id="app" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  head: {
    link: { rel: "icon", type: "image.png", sizes: "32x32" },
  },
});
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #071630; /* midnight blue background */
  color: white; /* #021e1d dark green color scheme */
}
</style>
