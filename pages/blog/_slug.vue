 <template>
   <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="9" class="mt-7 px-5">

    <div class="card-w">
    <div class="card inset">
        <h1>
            {{ post.title.rendered }}
        </h1>
        <small>
            {{ post.date | dateformat }}
        </small>
        <div
        v-html="post.content.rendered"
        >
        </div>
    <div class="card__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iusto et. Omnis quam enim vitae, esse dolores hic reiciendis nobis eligendi commodi eaque sed maxime non dolorum incidunt laudantium facilis!
    </div>
  </div>
  </div>
    </v-col>
   </v-row>
 </template>

 <script>
     export default {
         data() {
             return {
                 slug: this.$route.params.slug
             }
         },
         computed: {
            posts() {
                return this.$store.state.allPosts
            },
            post() {
                return this.posts.find(el => el.slug === this.slug)
            }
         },
         created(){
             this.$store.dispatch("getAllPosts")
         }
     }
 </script>

 <style lang="scss" scoped>

.card-w{
    margin-bottom: 20px;
  .card{
    flex-direction: column;
    align-items: center;
    padding: 60px 30px;
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


 </style>