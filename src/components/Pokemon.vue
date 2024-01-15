<template>
    <h1>Pokemon</h1>
    <div>
    <el-row class="pokemon_card_row">
     
    <el-col class= "pokemon_card_col" v-for="pokemon in pokemons" :key="pokemon" :span="5" >
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
  <el-pagination
      v-loading="loading"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100, 200]"
      layout="sizes, prev, pager, next"
      :total="totalCount"
      @size-change="getData"
      @current-change="getData"
      />
  </div>
</template>
<script>



export default{
  data() {return{
      loading:true,
        currentPage:1,
        pageSize:10,
    totalCount:0,
    pokemons: [],
    }
},
props:[
],

name:``,
components:[],

methods:{
getData(){

    this.axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(this.currentPage-1)*this.pageSize}&limit=${this.pageSize}`)
    .then((response) => {
        this.totalCount=response.data.count;
        this.pokemons= [];
        response.data.results.forEach(items => {
          this.axios.get(items.url).then (async ( resp) => {
           this.pokemons.push(resp.data)} 
         
  
        
        );
      })
        this.loading=false;
        
    })
    .catch((error) => {
        console.warn(error);
    })
},


},

    mounted(){
         this.getData()
    }
}
</script>

