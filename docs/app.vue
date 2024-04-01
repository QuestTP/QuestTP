<template>
  <div>
    <NuxtLayout>
      <NuxtPage id="app" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const user = userState();
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
