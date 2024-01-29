<template>
  <h1>Pokemon</h1>
  <div>

  
    <el-row class="pokemon_card_row">
      <el-col class="pokemon_card_col" v-for="pokemon in pokemons" :key="pokemon" :span="5">

        <el-card class="card" @click="showPokemon(pokemon)">
          <img :src="pokemon.sprites.front_default" class="image" />
          <h3>{{ pokemon.name }}</h3>
        </el-card>

  <el-dialog v-model="centerDialogVisible"  width="30%" center >
    <div>
    <h3 class="modal-title"> {{ poke.name }}</h3>
              <div class="modal-content">
                
                <el-carousel height="200px" :loop = "true" :autoplay="false">
      <el-carousel-item  v-for="item in getSprites(poke)" :key="item" class="image">
        <img :src="item" class="slider-img" />
      </el-carousel-item>
    </el-carousel>
                <div class="pokemon_description">
                  <p>Weight: {{ poke.weight }}</p>
                  <p>Height: {{ poke.height }}</p>
                  <p>Ability:</p>
                  <span v-for="abi in poke.abilities" :key="abi">
                    {{ abi.ability.name }};
                  </span>
                  
                    <el-collapse>
                      <el-collapse-item title="Move:" >
                     
                           <el-tag size="small" v-for="move in poke.moves" :key="move">
                            {{ move.move.name }} 
                          </el-tag>
                    
                      </el-collapse-item>
                    </el-collapse>
                 
                </div>
              </div>
              <div class="dialog-footer">
                <button type="primary" class="modal-footer__button" @click="centerDialogVisible = false">
                  Ок
                </button>
              </div>
            </div>
  </el-dialog>
      </el-col>
    </el-row>
    <el-pagination v-loading="loading" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100, 200]" layout="sizes, prev, pager, next" :total="totalCount" @size-change="onPaginationChange"
      @current-change="onPaginationChange" />
  </div>
</template>
<script>
import 'es6-promise/auto';
import 'vue-snap/dist/vue-snap.css'
import { mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      centerDialogVisible: false,
   
      loading: false,
      currentPage: 1,
      pageSize: 10,
 
      poke: []
    }
  },
  
  name:`Pokemon`,
  computed: {
  ...mapState({
    pokemons: (state) => state.pokemonsMod.pokemons,
    totalCount: (state) => state.pokemonsMod.totalCount
  })
},
  methods: {
    onPaginationChange(){
this.getData ({pageSize: this.pageSize, currentPage: this.currentPage})
    },
    ...mapActions({
getData:("pokemonsMod", "getData")
    }),
  getSprites(pokemon){
   var spritesValues= this.getPropertyValues(pokemon.sprites)
   return spritesValues
  },
  getPropertyValues (object){
    let propertyNames=Object.getOwnPropertyNames(object);
    let result=[];
    propertyNames.forEach((item)=>{
      if (object[item]!=null && typeof(object[item])==="string"){
        result.push(object[item]);
      }})
    
  return result
  },

    showPokemon (pokemon){
      
      this.centerDialogVisible=true;
      this.poke = pokemon;
      
    },
    
    // getData() {
    //   this.axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(this.currentPage - 1) * this.pageSize}&limit=${this.pageSize}`)
    //     .then((response) => {
    //       this.totalCount = response.data.count;
    //       this.pokemons = [];
    //       response.data.results.forEach(items => {
    //         this.axios.get(items.url).then(async (resp) => {
    //           this.pokemons.push(resp.data)
    //           console.log(this.pokemons);
    //         })
    //       })
    //       this.loading = false;
    //     })
    //     .catch((error) => {
    //       console.warn(error);
    //     })
    // },
  },

  async mounted() {
   await this.getData({pageSize: this.pageSize, currentPage: this.currentPage});
   console.log(this.$store.state.totalCount);
    
    
  },
}
</script>

<style scoped
       lang="scss">
       .modal-backdrop {
         position: fixed;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         background-color: #bfbfbf1e;

         justify-content: center;
         align-items: center;
       }
       .modal {
         background: #000000;
         border-radius: 8px;
         padding: 15px;
         min-width: 420px;
         max-width: 480px;
         max-height: 550px;
         overflow-y: auto;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

     
         &-title {
           color: #0971c7;
         }

         &-content {
           margin-bottom: 20px;
           color: rgb(255, 255, 255);
         }

         &-footer {
           &__button {
             background-color: #0971c7;
             color: #fff;
             border: none;
             text-align: center;
             padding: 8px;
             font-size: 17px;
             font-weight: 500;
             border-radius: 8px;
             min-width: 150px;
           }
         }
       }
</style>