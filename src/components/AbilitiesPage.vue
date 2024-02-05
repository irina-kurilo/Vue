<template>
    <h1>Abilities</h1>
  <div>
    <el-pagination v-loading="loading" v-model:current-page="currentPage" v-model:page-size="pageSize"
 :page-sizes="[ 20, 50, 100, 200]" layout="sizes, prev, pager, next" :total="totalCount" @size-change="onPaginationChange"
 @current-change="onPaginationChange" />
    
    <el-table 
    :data="abilitiesFilter"
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
                
      </el-table-column>
      <el-table-column
        prop="pokemons"
   
        label="Pokemons">
        
      <template #default="scope">

        <el-collapse>
                      <el-collapse-item title="Pokemon:" >
                     
                           <el-tag size="small" v-for="(pokemon, index) in scope.row.pokemons" :key="index">
                            {{ pokemon.pokemon.name }} 
                          </el-tag>
                    
                      </el-collapse-item>
                    </el-collapse>
                 

                             
                  </template>

               


      </el-table-column>
    <el-table-column>   
       <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template></el-table-column>
    </el-table>
  </div>
  </template>

  <script>
import { mapState, mapActions} from 'vuex';

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
  abilitiesFilter() {
   
    return this.abilities.filter(item => item.name.includes(this.search) || item.id == this.search || item.pokemons.find(x=>x.pokemon.name ===this.search)!==undefined);
    }

  
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