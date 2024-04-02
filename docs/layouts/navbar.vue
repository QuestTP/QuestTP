<template>
  <!-- <div class="nav">
    <h2 class="title">QuestTP</h2>

    <div class="routes"></div>

    <div class="user">
      <h3 v-if="true" class="login">
        <NuxtLink to="/login">Login</NuxtLink>
        /
        <NuxtLink to="/signup">Sign Up</NuxtLink>
      </h3>

      <div v-if="false" class="loggedin">
        <h3>username</h3>
        <img src="@/public/Default_pfp.svg.png" alt="" />
      </div>
    </div>
  </div> -->

  <div class="nav2">
    <img src="@/public/image.webp" v-if="icon" @click="toggle" />

    <div class="popup" v-if="menu">
      <img src="@/public/image.webp" alt="" @click="toggle" />
      <div class="links">
        <NuxtLink to="/play">Play</NuxtLink>
        <NuxtLink to="/login">Login / Sign Up</NuxtLink>
      </div>
    </div>
  </div>

  <slot></slot>
</template>

<script lang="ts" setup>
const icon = ref(true);
const menu = ref(false);

function toggle() {
  if (icon.value !== menu.value) {
    menu.value = true;
  } else {
    menu.value = false;
  }
}
</script>

<style scoped>
/* previous nav */
.nav {
  position: sticky;
  top: 0%;
  background-color: green;
  color: white;
  padding: 0.25rem 1.35rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.user {
}

.loggedin {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.loggedin img {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 25px;
}

/* new nav */
.nav2 {
}
.nav2 img {
  width: 60px;
  height: 60px;
}

.popup {
  z-index: 2;
}
</style>
