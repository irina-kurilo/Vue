<template>
    <h1>Abilities</h1>


    
    <el-table v-for="ability in abilities" 
    :key="ability" 
      style="width: 100%">
      <el-table-column 
        prop={{ability.id}}
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop={{ability.name}}
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Is main series">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Effect">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Pokemons">
      </el-table-column>
    </el-table>
  </template>

  <script>
import { mapState, mapActions} from 'vuex';

export default {
      data() {
        return {
         
      loading: false,
    }
  },
  
  name:`Abilities`,
  computed: {
  ...mapState({
    abilities: (state) => state.abilitiesMod.abilities,
  })
},
  methods: {
  
    ...mapActions({
      getDataAbil:("abilitiesMod", "getDataAbil")
    }),
  
  },
  async mounted() {
   await this.getDataAbil()
    
    
  }}
  



   
  </script>