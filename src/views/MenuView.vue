<template>
  <div class="container">
    <header><h1>MENU</h1></header>
    <nav>
      <ul>
        <router-link to="/chat">
          <li><font-awesome-icon icon="fa-solid fa-comments" /> Chat</li>
        </router-link>
        <router-link to="/calendar">
          <li>
            <font-awesome-icon icon="fa-solid fa-calendar-day" /> Calendar
          </li>
        </router-link>
        <router-link to="/">
          <li><font-awesome-icon icon="fa-solid fa-book-open" /> Timeline</li>
        </router-link>
        <router-link to="/profile">
          <li><font-awesome-icon icon="fa-solid fa-user" /> Profile</li>
        </router-link>
        <p>TITLE 0.0.1</p>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

li {
  background-color: #1f1f2a;
  list-style: none;
  font-size: 1.5em;
  border: 1px solid #aaaaaa;
  border-radius: 0.5em;
  padding: 0 0.5em;
}

p {
  color: #aaaaaa;
  text-align: center;
}
</style>
