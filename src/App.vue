<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="@/assets/folder.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-top"
          />
          FILEBOX
        </a>
      </div>
    </nav>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Log in</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/dom">Dom</router-link> |
      <router-link to="/vozila">Vozila</router-link> |
      <router-link to="/zdravstvo">Zdravstvo</router-link> |
      <router-link to="/alati">Alati</router-link> |
      <router-link to="/dokumenti">Dokumenti</router-link> |
      <router-link to="/ostalo">Ostalo</router-link> |
      <router-link to="/kalendar">Kalendar</router-link>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #43484d;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #6c757d;

    &.router-link-exact-active {
      color: #ffc107;
    }
  }
}
</style>
