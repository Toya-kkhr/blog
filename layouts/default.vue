<template>
  <v-app 
  dark
  style="background:#ebf5fc;"
  >

    <v-app-bar 
    app
    style="background:#ebf5fc;"
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
    style="background:#ebf5fc;"
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
