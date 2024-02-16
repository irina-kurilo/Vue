<template>
  <h1>Abilities</h1>
  <p class="abilitites-describ">
    Abilities, introduced in Generation 3 (Ruby/Sapphire), are special
    attributes given to each Pokémon that can aid them in battle. Many abilities
    act as a power-up by increasing a move or stat; others introduce a
    third-party effect like a weather condition. Some abilities can even hinder
    a Pokémon battle. Each Pokémon can have only one ability, however, some have
    the option of two different abilities. The choice is random and each ability
    is equally likely. There are 308 single-ability Pokémon and 355 dual-ability
    Pokémon.
  </p>
  <div class="abilities-header">
    <div>
      <el-pagination
        v-loading="loading"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[20, 50, 100, 200]"
        layout="sizes, prev, pager, next"
        :total="totalCount"
        @size-change="onPaginationChange"
        @current-change="onPaginationChange"
      />
    </div>
    <div>
      <el-input v-model="search" size="mini" placeholder="Type to search" />
    </div>
  </div>
  <el-table :data="abilitiesFilter" style="width: 100%">
    <el-table-column prop="id" sortable label="ID" width="60">
    </el-table-column>
    <el-table-column prop="name" label="Name" width="130"> </el-table-column>
    <el-table-column prop="is_main_series" label="Is main series" width="180">
    </el-table-column>
    <el-table-column prop="effect" label="Effect"> </el-table-column>
    <el-table-column prop="pokemons" label="Pokemons">
      <template #default="scope">
        <el-collapse>
          <el-collapse-item title="Pokemon:">
            <el-tag
              size="small"
              v-for="(pokemon, index) in scope.row.pokemons"
              :key="index"
            >
              {{ pokemon.pokemon.name }}
            </el-tag>
          </el-collapse-item>
        </el-collapse>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
    v-loading="loading"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[20, 50, 100, 200]"
    layout="sizes, prev, pager, next"
    :total="totalCount"
    @size-change="onPaginationChange"
    @current-change="onPaginationChange"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      search: [],
      currentPage: 1,
      pageSize: 20,
      loading: false,
    };
  },
  name: `Abilities`,
  computed: {
    ...mapState({
      abilities: (state) => state.abilitiesMod.abilities,
      totalCount: (state) => state.abilitiesMod.totalCount,
    }),
    abilitiesFilter() {
      return this.abilities.filter(
        (item) =>
          item.name.includes(this.search) ||
          item.id == this.search ||
          item.pokemons.find((x) => x.pokemon.name === this.search) !==
            undefined
      );
    },
  },
  methods: {
    onPaginationChange() {
      this.getDataAbil({
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      });
    },
    ...mapActions({
      getDataAbil: ("abilitiesMod", "getDataAbil"),
    }),
    handleEdit(index, row, scope) {
      console.log(index);
      console.log(row);
      console.log(scope);
    },
  },
  mounted() {
    this.getDataAbil({
      pageSize: this.pageSize,
      currentPage: this.currentPage,
    });
  },
};
</script>
