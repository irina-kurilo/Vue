<template>
    <h1>Abilities</h1>
  <div>
    <el-pagination v-loading="loading" v-model:current-page="currentPage" v-model:page-size="pageSize"
 :page-sizes="[ 20, 50, 100, 200]" layout="sizes, prev, pager, next" :total="totalCount" @size-change="onPaginationChange"
 @current-change="onPaginationChange" />
    
    <el-table 
    :data="abilities"
      style="width: 100%">
      <el-table-column 
        prop="id"
        sortable
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="is_main_series"
        label="Is main series">
      </el-table-column>
      <el-table-column
        prop="effect"
        label="Effect">
        <div v-if="effect===undefined">
     <p>No results found!</p>
  </div>
          
                
      </el-table-column>
      <el-table-column
        prop="pokemons"
   
        label="Pokemons">
        
      <template #default="scope">
                           <p v-for="(pokemon, index) in scope.row.pokemons.filter((pokemon) => pokemon.pokemon.name.includes(this.search))" :key="index">
                            {{ pokemon.pokemon.name }} 
                            <div class="item error" v-if="pokemon.lenght===null">
     <p>No results found!</p>
  </div>
                           </p>         
                  </template>

               


      </el-table-column>
    <el-table-column>   
       <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to searc"/>
      </template></el-table-column>
    </el-table>
  </div>
  </template>

  <script>
import { mapState, mapActions} from 'vuex';
import { computed, effect, ref } from 'vue'

const searc= ref('')
export default {
      data() {
        return {
          search: [],
          currentPage: 1,
        pageSize: 20,
    
      loading: false,
   
    }
  },
  
  name:`Abilities`,
  computed: {
  ...mapState({
    abilities: (state) => state.abilitiesMod.abilities,
    totalCount: (state) => state.abilitiesMod.totalCount
  }),
  // abilitiesFilter() {
   
  //   return this.abilities.filter(item => item.name.includes(this.search));
  //   }
   
  
},
  methods: {
    onPaginationChange(){
this.getDataAbil ({pageSize: this.pageSize, currentPage: this.currentPage})
    },
    ...mapActions({
      getDataAbil:("abilitiesMod", "getDataAbil")
    }),
    handleEdit(index,row,scope){

    console.log(index);
    console.log(row);
    console.log(scope);
  },

//   abilitiesFilter() {
//   return this.abilities.filter((name) =>
//  name.toLowerCase().includes(input.value.toLowerCase())
//   )
//   }
},
 mounted() {
   this.getDataAbil({pageSize: this.pageSize, currentPage: this.currentPage})
    
  }
  
}
  




  


   
  </script>