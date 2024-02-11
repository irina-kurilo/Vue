<template>
<button class="modal-footer__button edit" @click="centerDialogVisible = true"> Add</button>
  <el-dialog v-model="centerDialogVisible" width="45%" center>
          <div>
            <h3 class="modal-title"> Add Pokemon</h3>
            <div class="modal-content">
              <div class="pokemon_description">
                <p>Weight:<el-input type="number" v-model="weightAdd"  /> </p>
                <p>Height:<el-input type="number" v-model="heightAdd"  /> </p>
                <p>Name<el-input type="text" v-model="nameAdd" /> </p>
     

    <p>Foto<el-input type="text" v-model="fotoAdd" /> </p>
                </div>
              </div>
            </div>
            <div class="dialog-footer">
  <button class="modal-footer__button" @click="Add()">
    Add
  </button>
  <button class="modal-footer__button" @click="centerDialogVisible=false">
  Cancel
  </button>
  <button class="modal-footer__button" @click="Clean()">
  Clean
  </button>
</div>
        </el-dialog>
    </template>
    <script>
    import { mapState, mapActions } from 'vuex';
    export default {
      data() {
        return {
          centerDialogVisible: false,
         
          weightAdd:0,
        heightAdd:0,
      nameAdd:'Pikachu',
      fotoAdd:'https://i.pinimg.com/originals/0a/44/75/0a4475739cea776659a5148a1e480797.png',
  
    front_default:{}   }
      },
      name: `AddPokemon`,
      computed: {
        ...mapState({
          pokemons: (state) => state.pokemonsMod.pokemons,
        }),
        
    
        
      },
      methods: {
        ...mapActions({
          getData: ("pokemonsMod", "getData")
        }),
        
        Add(){
         
          var sprite={front_default:this.fotoAdd}
         
      this.pokemons.unshift({
           weight: this.weightAdd,
      height: this.heightAdd,
      name: this.nameAdd,
      sprites:sprite,

    })
            
      },
    Clean(){
      this.weightAdd=0,
      this.heightAdd=0,
      this.nameAdd='',
      this.fotoAdd='',
  
      this.front_default={}
    }
    
      
   
     
    }}
    
    
    </script>
    
    <style scoped
           lang="scss">
           .dialog-footer{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
           
          }
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
                 margin: 10px;
               }
             }
           }
           
    </style>