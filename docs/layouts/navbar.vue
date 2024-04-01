<template>
  <div class="nav">
    <h2 class="title">QuestTP</h2>

    <div class="user">
      <h3 v-if="true" class="login">
        <a href="">Login</a> / <a href="">Sign Up</a>
      </h3>

      <h3 v-if="false" class="username">username</h3>
    </div>
  </div>
  <slot></slot>
</template>

<script setup></script>

<style scoped>
.nav {
  position: sticky;
  top: 0%;
  background-color: green;
  color: white;
  padding: 0.45rem 1.35rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
