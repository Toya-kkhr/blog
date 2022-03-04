<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-7 px-5">
    

    <div 
    v-for="post in sortedPosts"
    :key="post.slug"
    class="card-w"
    nuxt
    @click="$router.push(`blog/${post.slug}`)"
    app
    >
    <div class="card neumorphism">
    <div>
      <h2>
        {{ post.title.rendered }}
      </h2>
      <small>{{ post.date }}</small>
      <div
      class="pt-6 text-center"
      >
      </div>
    </div>
  </div>
  </div>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return{
    selectedTag: null,
    }
  },

  computed: {
    allPosts() {
      return this.$store.state.allPosts
    },
    sortedPosts() {
      if (!this.selectedTag) return this.allPosts;
      return this.allPosts.filter(el => el.tags.includes(this.selectedTag))
    },

  },
  created() {
    this.$store.dispatch("getAllPosts")
  }
}
</script>

<style lang="scss" scoped>

.neumorphism {
  background-color: #e0e5ec;
  //dark
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
  //light
  //box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48), -4px -2px 16px #FFFFFF;
}

.card-w{
    margin-bottom: 55px;

  .card{
    flex-direction: column;
    align-items: center;
    padding: 60px 30px 30px;
    border-radius: 30px;
    position: relative;
  background: transparent;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.2);

  }
}

.card {
  padding: 1.5em 5em;
  background: #efefef;
  border: none;
  border-radius: .5rem;
  color: #444;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .2rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: .2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15);
}

.card:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
}

.card:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15);
}
</style>