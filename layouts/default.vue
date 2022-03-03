<template>
  <v-app 
  dark
  style="background:#e0e5ec;"
  >

    <v-app-bar 
    app
    style="background:#e0e5ec;"
    >
      <v-spacer/>
      <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer 
    fixed 
    app
    style="background:#e0e5ec;"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      drawer: null,

    }
  },

}
</script>
