<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-7 px-5">

    <div 
    v-for="post in sortedPosts"
    :key="post.slug"
    class="card-w"
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
      <v-btn
      width="70%"
      color="primary"
      :to="`blog/${post.slug}`"
      >
        READ MORE
      </v-btn>
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

<style lang="scss" >

/* variables */
$bkg: #f7f8fc;
$l-grad-hex-100: #efeff6;
$l-grad-rgba-100: rgba(179, 202, 226, 0.28);

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



/* inset */
.card.inset {
    box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
    i {
        text-shadow: 1px 1px 1px #d6e1ef99, 0 0 0 #000, 1px 1px 1px #d6e1ef00;
    }
}

.card.active {
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5),
       inset 3px 3px 7px rgba(136, 165, 191, 0.48), 
      inset -3px -3px 7px #FFFFFF;
    background: linear-gradient(318.32deg, rgba(163, 177, 198, 0.1) 0%, rgba(163, 177, 198, 0.1) 55%, rgba(163, 177, 198, 0.25) 100%);
}
</style>