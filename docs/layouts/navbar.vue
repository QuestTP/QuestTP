<template>
  <div class="nav">
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
  </div>
  <slot></slot>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>

<style scoped>
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
</style>
