<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <v-card
      v-for="post in sortedPosts"
      :key="post.id"
      class="ma-10 post"
      >
        <v-card-title>
          <h3>
            {{ post.title.rendered }}
          </h3>
          </v-card-title>
          <small>{{ post.date }}</small>
          <v-card-text
          v-html="post.excerpt.rendered"
          class="readmore"
          >
          </v-card-text>
        <a :href="`blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
      </v-card>

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
      return this.$store.getters.allPosts
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

<style lang="scss" >

  a.readmore {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px 15px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  font-weight: 700;
  font-family: "Open Sans", serif;
  border: 1px solid #ccc;
  background: #fff;
}

.post {
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;

  h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    right: -1px;
  }
}

.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}
</style>