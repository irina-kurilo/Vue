<template>
    <h1>Pokemon</h1>
    <div>
    <el-row class="pokemon_card_row">
     
    <el-col class= "pokemon_card_col" v-for="pokemon in pokemons" :key="pokemon.id" :span="5">
      <el-card>
        <img
          :src="pokemon.sprites.front_default"
          class="image"
        />
        <div class="pokemon_description">
          <p> Name: {{ pokemon.name}}
          </p>
          <p>Weight: {{pokemon.weight}}</p>
          <p>Ability:
          <span v-for="abi in pokemon.abilities" :key="abi">
            {{ abi.ability.name }};
          </span>
        </p>
         
        </div>
      </el-card>
    </el-col>
  </el-row>

  </div>
</template>
<script>

import Pagination from '@/components/Main-Pagination.vue'
Object.assign({}, Pagination);
export default{
    data() {return{
    }
},
props:[

],
name:``,
components:[Pagination],

methods:{

  hello() {
      this.$refs.hello.getData();
},



   
}}

</script>

