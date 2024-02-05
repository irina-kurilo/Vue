<template>
  <h1>Pokemon</h1>
  <div>

    <button class="modal-footer__button edit" @click="add()">
      <div v-if="add">
                <p>Weight:<el-input v-model="weightEdit" ref="weight" size="mini" /> </p>
                <p>Height:<el-input v-model="heightEdit" ref="height" size="mini" /> </p>
                <p>Name<el-input v-model="nameEdit" ref="name" size="mini" /> </p>
                </div>
  <span >Add</span> </button>
    <el-row class="pokemon_card_row">
     
      <el-col class="pokemon_card_col" v-for="pokemon in pokemons" :key="pokemon" :span="5">

        <el-card class="card" @click="showPokemon(pokemon)">
          <img :src="pokemon.sprites.front_default" class="image" />
          <h3>{{ pokemon.name }}</h3>
        </el-card>

        <el-dialog v-model="centerDialogVisible" width="30%" center>
          <div>
            <h3 class="modal-title"> {{poke.name}}
           /></h3>
            <div class="modal-content">

              <el-carousel height="200px" :loop="true" :autoplay="false">
                <el-carousel-item v-for="item in getSprites(poke)" :key="item" class="image">
                  <img :src="item" class="slider-img" />
                </el-carousel-item>
              </el-carousel>
              <div class="pokemon_description">
               
                <p>Weight:<input type="text" ref="weight" size="mini"  :placeholder="poke.weight" :disabled="!isEditing"
           /> </p>
                <p>Height:<input type="text"  ref="height" size="mini"  :placeholder="poke.height" :disabled="!isEditing"
          /> </p>
                
                <!-- <div v-if="!isEditing">
               <p>Weight:<input type="text" ref="weight" size="mini"  :placeholder="poke.weight" :disabled="!isEditing"
           /> </p>
                <p>Height:<input type="text"  ref="height" size="mini"  :placeholder="poke.height" :disabled="!isEditing"
          /> </p>
                <div v-else>
                <p>Weight: {{ poke.weight }}</p>
                
                <p>Height: {{ poke.height }}</p></div> -->
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
              <!-- <button type="primary" class="modal-footer__button" @click="!edit(pokemon)">
                Save
              </button>
              <button class="modal-footer__button edit" @click="edit(pokemon)">
  <span >Edit</span> </button> -->
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
    }
  },
  name: `Pokemon`,
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
    { this.poke.weight = this.$refs['weight'];
      this.poke.height = this.$refs['height'];
      this.isEditing = !this.isEditing;
   
    },
    // add(){
    //   this.pokemon.push({index: this.newTask, todo: this.newTask}) //add the new task an object: property
    //           this.newTask = '';
    // },
    
    getSprites(pokemon) {
      var spritesValues = this.getPropertyValues(pokemon.sprites)
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