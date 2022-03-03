 <template>
         <v-card>
             <v-card-title>
             <h1>
                 {{ post.title.rendered }}
             </h1>
             </v-card-title>

             <small>
                 {{ post.date }}
             </small>
             
             <v-card-text
             v-html="post.content.rendered"
             >
             </v-card-text>
         </v-card>
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