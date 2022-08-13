<script setup>
import TimeLine from "../components/TimeLine.vue";
</script>

<template>
  <div class="container">
    <header>
      <div class="left">
        <router-link to="/profile">
          <img
            src="https://via.placeholder.com/150?text=Profile"
            class="imgProfile link"
          />
        </router-link>
      </div>
      <div class="center">
        <h1>TITLE</h1>
        <p>Welcome to TITLE</p>
      </div>
      <div class="right">
        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </li>
          <li><font-awesome-icon icon="fa-solid fa-bell" /></li>
        </ul>
      </div>
    </header>
    <main>
      <TimeLine />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 1em 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.left {
  height: 100%;
  width: 30%;
  text-align: left;
}

.imgProfile {
  border-radius: 50%;
  height: 5vh;
}

.right {
  width: 30%;
}

ul {
  display: flex;
  justify-content: flex-end;
  gap: 1em;
}

li {
  list-style: none;
}
</style>
