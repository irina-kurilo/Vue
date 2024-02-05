<template>
<el-container class="pokemon-container">
      <Header></Header>
      <Pokemon /> 
      <Pagination/>

    </el-container>
</template>
<script>

import Pokemon from '@/components/Pokemon.vue'
import Pagination from '@/components/PaginationPokemon.vue'
export default {
 
  components:{
    Pokemon,Pagination},
  name:`HomeLayout`,}
  
    
</script>