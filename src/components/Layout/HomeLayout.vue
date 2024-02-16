<template>
  <el-container class="pokemon-container">
    <Header></Header>
    <Pokemon />
    <Pagination />
  </el-container>
</template>
<script>
import Pokemon from "@/components/pokemon/Pokemon.vue";
import Pagination from "@/components/pokemon/PaginationPokemon.vue";
export default {
  components: {
    Pokemon,
    Pagination,
  },
  name: `HomeLayout`,
};
</script>
