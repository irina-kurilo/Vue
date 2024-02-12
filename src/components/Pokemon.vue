<template>
  <h1>Pokemon</h1>
  <div>

  <Add/>
  
    <el-row class="pokemon_card_row">
     
      <el-col class="pokemon_card_col" v-for="pokemon in pokemons" :key="pokemon" :span="5">

        <el-card class="card" @click="showPokemon(pokemon)">
          <img :src="pokemon.sprites.front_default" class="image" width="96" height="96"/>
          <h3>{{ pokemon.name }}</h3>
        </el-card>

        <el-dialog v-model="centerDialogVisible" width="30%" center>
          <div>
            <h3 class="modal-title"> <span v-if="!isEditing"> {{ poke.name }}</span>
                <el-input  v-if="isEditing" type="text"  v-model="name" size="mini"
          /> 
           </h3>
            <div class="modal-content">

              <el-carousel height="200px" :loop="true" :autoplay="false">
                <el-carousel-item v-for="item in getSprites(poke)" :key="item" class="image">
                  <img :src="item" class="slider-img" />
                </el-carousel-item>
              </el-carousel>
              <div class="pokemon_description">
                <p> Weight: <span v-if="!isEditing">  {{ poke.weight}}</span>
                <el-input v-if="isEditing" type="number" v-model="weight" size="mini"
           /> </p>
           <p>Height:<span v-if="!isEditing"> Height: {{ poke.height }}</span>
                <el-input  v-if="isEditing" type="number"  v-model="height" size="mini"
          /> </p>
                
        
                <p>Ability:</p>
                <span v-for="abi in poke.abilities" :key="abi">
                  {{ abi.ability.name }};
                </span>

                <el-collapse>
                  <el-collapse-item title="Move:">

                    <el-tag size="small" v-for="move in poke.moves" :key="move">
                      {{ move.move.name }}
                    </el-tag>

                  </el-collapse-item>
                </el-collapse>

              </div>
            </div>
            <div class="dialog-footer">
           
  <button class="modal-footer__button" @click="isEditing = !isEditing" v-if="!isEditing">
    Edit
  </button>
  <button class="modal-footer__button" @click="save" v-else-if="isEditing">
  
  Save
  </button>
</div>
            
          </div>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Add from '@/components/PokemonAdd.vue'
import 'es6-promise/auto';
import 'vue-snap/dist/vue-snap.css'
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      centerDialogVisible: false,
      loading: false,
      poke: [],
      currentPage: 1,
      pageSize: 10,
      isEditing: false,
      weight:0,
      height:0,
      name:'',
   
  
  }
  },


  name: `Pokemon`,
  components:{Add},
  computed: {
    ...mapState({
      pokemons: (state) => state.pokemonsMod.pokemons,
    })
  },
  methods: {
    ...mapActions({
      getData: ("pokemonsMod", "getData")
    }),

    save ()
    { this.poke.weight = this.weight;
      this.poke.height = this.height;
      this.poke.name = this.name;
      this.isEditing = !this.isEditing;
   
    },
    // add(){
    //   this.pokemon.push({index: this.newTask, todo: this.newTask}) //add the new task an object: property
    //           this.newTask = '';
    // },
    

      getSprites(pokemon){
   var spritesValues= this.getPropertyValues(pokemon.sprites)
   return spritesValues
    },
    getPropertyValues(object) {
      let propertyNames = Object.getOwnPropertyNames(object);
      let result = [];
      propertyNames.forEach((item) => {
        if (object[item] != null && typeof (object[item]) === "string") {
          result.push(object[item]);
        }
      })

      return result
    },

    showPokemon(pokemon) {

      this.centerDialogVisible = true;
      this.poke = pokemon;

    },



    Add(pokemon){

    }
  },

  mounted() {
    this.getData({ pageSize: this.pageSize, currentPage: this.currentPage });

  }
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
             margin: 20px;
           }
         }
       }
</style>