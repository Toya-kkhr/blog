<template>
  <v-app 
  dark
  style="background:#e0e5ec;"
  >

    <v-app-bar 
    app
    style="background:#e0e5ec;"
    height="70px"
    >
          <div
      class="app-bar-title"
      style="cursor: pointer;"
      @click="$router.push('/')"
      >
      <h1>
      <span
      class="text header"
      >
        KAKOLOG.
      </span>
      </h1>
      </div>
      <v-spacer/>
      <v-app-bar-nav-icon
      class="ma-1"
      @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      fixed
      style="background:#e0e5ec;position:fixed;"
    >
      <div
        class="app-bar-title text-center pa-2"
        style="cursor: pointer;"
        @click="$router.push('/')"
        >
      <h3>
      <span
      class="text header"
      >
        KAKOLOG.<br>
      </span>
      </h3>
      </div>
      <v-list>
        <div
        class="app-bar-title pa-2"
        >
          <h4>
            <span
             class="text header"
            >
            カテゴリー
            </span>
          </h4>
        </div>
        <v-list-item
        v-for="category in allCategories"
        :key="category.id"
        nuxt
        link
        @click="$router.push(`/category/${category.id}`)"
        >
        <v-list-item-content>
          <v-list-item-title>
            {{ category.name }}
          </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
<v-footer
padless
>
 <v-card
 width="100%"
 class="text-center"
 style="background: #e0e5ec;"
 flat
 tile
 >

 <v-divider></v-divider>

  <v-btn
 v-for="icon in icons"
 :key="icon.icon"
 icon
 :href="icon.url"
 target="_blank"
 class="mt-3"
 >
   <v-icon>
     {{ icon.icon }}
   </v-icon>
 </v-btn>

           <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Toya Kakohara</strong>
        </v-card-text>
 </v-card>
</v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      drawer: null,
      icons: [
        {
          icon: "mdi-facebook",
          url: "https://www.facebook.com/touya.kakohara/"
        },
        { 
          icon: "mdi-instagram",
          url: "https://www.instagram.com/__toya1128/"
        },
        {
         icon: "mdi-github",
         url: "https://github.com/Toya-kkhr/"
        }

      ]
    }
  },

  computed: {
    allCategories() {
      return this.$store.state.allCategories
    }
  },

  created() {
     this.$store.dispatch("getAllCategories")
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

button {
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
button:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
}
}

button:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15);
}
</style>