<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-7 px-5">
    

    <div 
    v-for="post in sortedPosts"
    :key="post.slug"
    class="card-w"
    nuxt
    @click="$router.push(`blog/${post.slug}`)"
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
  data() {
    return{
    selectedTag: null,
    selectedCategory: null
    }
  },

  computed: {
    allPosts() {
      return this.$store.state.allPosts
    },
    sortedPosts() {
        const pathNum = Number(this.$route.params.id)
      return this.allPosts.filter(el => 
      el.categories.includes(pathNum)
      )
    },

  },
  created() {
    this.$store.dispatch("getAllPosts")
  }
}
</script>