<template>
  <v-app>
      <div class="app">
        <div class="wrapNav">
          <v-toolbar color="#fff" height="20%">
            <v-img src="/logo.png" height="150" width="150"></v-img>
            <v-spacer />
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/training">Training</router-link>
            <router-link to="/prices">Prices</router-link>
            <router-link to="/faq">Faq</router-link>
            <div class="contact"><router-link to="/contact">Contact</router-link></div>
          </v-toolbar>
        </div>
      <v-main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-main>
    </div>
        <v-toolbar color="#79222a" height="900px">
          <div class="footer">
            <h2>Pleased by Paws, LLC</h2>
            <h5>Serving the Greater Seattle Area</h5>
            <h5>phone. (406) 212-1243</h5>
            <h5>email. info@pleasedbypaws.com</h5>
          </div>
        </v-toolbar>
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
.wrapNav {
  margin-left: 20%;
  margin-right: 20%;
  justify: center;
}

.wrapNav a {
  color: #000;
  text-decoration: none;
  padding: 0px 1rem;
}

.wrapNav a:hover, a.router-link-exact-active {
  text-decoration: underline;
}

.contact a {
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
  background-color: #f78278;
  border-color: #f78278;
  border-style: solid;
  border-width: thick;
  border-radius: 5px;
}

.contact a:hover {
  text-decoration: none;
  opacity: 0.7;
}

.app {
  font-family: 'Poppins-Regular', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: min(100% - 2rem, 100rem);
  margin-inline: auto;
}

h1 {
  text-align: center;
  font-family: 'Poppins-Regular';
  padding-bottom: 50px;
}

.footer {
  margin-left: 300px;
  margin-right: 300px;
}

.footer h2 {
  color: #f78278;
  opacity: 0.7;
  padding: 2rem;
}

.footer h5 {
  color: #fff;
  opacity: 0.7;
  padding-left: 2rem;
}

</style>
