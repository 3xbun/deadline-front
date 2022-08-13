<template>
  <nav>
    <ul>
      <li>
        <router-link to="/chat">
          <font-awesome-icon icon="fa-solid fa-comments" />
        </router-link>
      </li>
      <li>
        <router-link to="/calendar">
          <font-awesome-icon icon="fa-solid fa-calendar-day" />
        </router-link>
      </li>
      <li class="main">
        <router-link to="/">
          <font-awesome-icon icon="fa-solid fa-book-open" />
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <font-awesome-icon icon="fa-solid fa-user" />
        </router-link>
      </li>
      <li>
        <router-link to="/menu">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script></script>

<style scoped>
nav {
  position: fixed;
  bottom: 0;
  width: 85vw;
  max-width: 800px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5em 1em;
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

li {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  background-color: red;
  border-radius: 50%;
  font-size: 1.5em;
  width: 3em;
  height: 3em;
}
</style>
