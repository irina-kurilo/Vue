<template>
<el-container class="pokemon-container">
      <Header :menuIteams="MainMenuIteams"></Header>
      <Pokemon> </Pokemon>


    </el-container>
</template>
<script>
import Pokemon from '@/components/Pokemon.vue'

export default {
  components:{
    Pokemon}}
</script>