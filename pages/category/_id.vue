<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-7 px-5">

    <div 
    v-for="post in sortedPosts"
    :key="post.slug"
    class="card-w"
    nuxt
    @click="$router.push(`/blog/${post.slug}`)"
    >
    <div class="card neumorphism">
    <div>
      <h2>
        {{ post.title.rendered }}
      </h2>
      <small>{{ post.date | dateformat }}</small>
      <div
      class="pt-6 text-center"
      >
      </div>
    </div>
  </div>
  </div>

      <div 
    v-if="noPosts()"
    class="card-w"
    nuxt
    @click="$router.push('/')"
    >
    <div class="card neumorphism">
    <div>
      <h2>
        記事が見つかりません。
      </h2>
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
    }
  },

  computed: {
    allPosts() {
      return this.$store.state.allPosts
    },
    sortedPosts() {
        const pathNum = Number(this.$route.params.id)
        const a = this.allPosts.filter(el => 
      el.categories.includes(pathNum)
      )
        return a

    },

  },
  created() {
    this.$store.dispatch("getAllPosts")
  },
  methods: {
        noPosts(){
            if (this.sortedPosts.length === 0){
                return true
            }else{
                return false
            }
    }
  }
}
</script>

<style lang="scss" scoped>

.app-bar-title{
  --color:0, 0%;
  --l:100%; 
  --color-primary-lightest: hsl(var(--color),var(--l));
  --color-primary-light: hsl(var(--color),calc(var(--l) - 7.5%));
   --color-primary: hsl(var(--color),calc(var(--l) - 10%));
   --color-primary-dark: hsl(var(--color),calc(var(--l) - 15%));
  --color-primary-darkest: hsl(var(--color),calc(var(--l) - 25%)); 
    background-color: #e0e5ec;

  h1, h2, h3, h4{
    margin:0;
    font-family:'Oswald';
    color: #93989e;
    text-shadow:-5px -3px 8px var(--color-primary),
    6px 2px 12px var(--color-primary-darkest);
    outline:none;
    text-transform:uppercase;
    max-width:800px;
    width:auto;
    margin:0;
    position:relative;
    line-height:1;
    pointer-events:none;
    word-break:break-word;
    span{
     display:inline;
      &:nth-of-type(2){
        opacity:0;
        transition:opacity 0.2s ease-in-out;
        position:relative;
        font-size:6.5rem;
        display:inline-block;
        margin-left:1rem;
        animation:flash 0.5s ease-in-out infinite alternate;
       transform:translateY(-1.25rem);
        &:before, &:after{
          opacity:0;
        }
        @keyframes flash{
          to{
            text-shadow:0px 0px 8px var(--color-primary),
    0px 0px 12px var(--color-primary-darkest);
            color:var(--color-primary-dark);
          }
        }
      }
      &:before, &:after{
        content:attr(data-text);
        position:absolute;
        display:inline;
        color:inherit;
        z-index:9;
        text-shadow:-5px -3px 3px var(--color-primary-light),
      6px 2px 5px var(--color-primary-darkest);
        filter:blur(7.5px);
        opacity:5;
        top:50%;
        transform:translateY(-50%);
        left:0;
        width:100%;
        height:100%;
      }
      &:after{
       -webkit-text-stroke:3px var(--color-primary-light);
        text-shadow:none;
        opacity:0.25;
      }
    }
  }
}

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
  cursor: pointer;
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
  transition: .2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15);
}

@media screen and (min-width: 750px) {
.card:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
}
}

.card:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15);
}

</style>