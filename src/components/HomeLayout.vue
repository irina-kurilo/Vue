<template>
<el-container class="pokemon-container">
      <Header></Header>
      <Pokemon :pokemons="pokemons"/> 
      <Pagination
      :getData="getData"
    
      :totalCount="totalCount"
      />

    </el-container>
</template>
<script>
  import { mapState, mapActions} from 'vuex';
import Pokemon from '@/components/Pokemon.vue'
import Pagination from '@/components/PaginationPokemon.vue'
export default {
 
  components:{
    Pokemon,Pagination},
  name:`HomeLayout`,
  computed: {
  ...mapState({
    pokemons: (state) => state.pokemonsMod.pokemons,
    totalCount: (state) => state.pokemonsMod.totalCount
  })
},
  methods: {
    ...mapActions({
getData:("pokemonsMod", "getData")
    }),
  
    
  },

   mounted() {
   this.getData({pageSize: this.pageSize, currentPage: this.currentPage});
    
    
  }}
  
    
</script>