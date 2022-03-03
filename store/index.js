export const state = () => ({
    // すべての記事
    allPosts : [],
    allCategories : [],
  });
  
  export const getters = {
    // すべての記事
    allPosts(state){
      return state.allPosts;
    },
    allCategories(state){
        return state.allCategories
    },

  }
  
  export const mutations = {
    // すべての記事を保存
    saveAllPosts(state, allPosts){
      state.allPosts = allPosts;
    },
    saveAllCategories(state, allCategories){
        state.allCategories = allCategories
    },
  }
  
  export const actions = {
    /*
    * 全記事取得
    */
    async getAllPosts({ commit, state, dispatch }){
        if(state.allPosts.length) return

        try {
            let allPosts = await fetch(
                'http://kakohara.work/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1'
            ).then(res => res.json())

            allPosts = allPosts
            .filter(el => el.status === "publish")
            .map(({ id, slug, title, excerpt, date, tags, content, categories }) => ({
                id,
                slug,
                title,
                excerpt,
                date,
                tags,
                content,
                categories
            }))

            commit("saveAllPosts", allPosts)
        } catch (err) {
            console.log(err)
        }
    
    },
    async getAllCategories({ commit, state }){
        const res = await this.$axios.$get('/categories')
        
         commit('saveAllPosts', res);
      
      },

  }
  