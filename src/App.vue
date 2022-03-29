<template>
  <v-app>
    <div>
      <v-app-bar
      height="200">
        <v-img src="/logo.png"
        max-height="150"
        max-width="150">
        </v-img>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/training">Training</router-link>
        <router-link to="/prices">Prices</router-link>
        <router-link to="/faq">Faq</router-link>
        <router-link to="/contact">Contact</router-link>
      </v-app-bar>
    </div>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
