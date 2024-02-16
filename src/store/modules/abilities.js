import Axios from "axios";
import { effect } from "vue";
export const abilitiesModule = {
  state() {
    return {
      abilities: [],
      loading: true,
      currentPage: 1,
      pageSize: 20,
      totalCount: 0,
    };
  },
  mutations: {
    SET_ABILITIES(state, abilities) {
      state.abilities = abilities;
    },
    ADD_ABILITIES(state, abilities) {
      state.abilities.push(abilities);
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    },
    SET_PAGE_SIZE(state, pageSize) {
      state.pageSize = pageSize;
    },
    SET_TOTAL_COUNT_ABILITIES(state, totalCount) {
      state.totalCount = totalCount;
    },

    CLEAR_ABILITIES(state) {
      state.abilities = [];
    },
  },

  actions: {
    async getDataAbil({ state, commit }, pagination) {
      await Axios.get(
        `https://pokeapi.co/api/v2/ability/?offset=${
          (pagination.currentPage - 1) * pagination.pageSize
        }&limit=${pagination.pageSize}`
      )
        .then(async (response) => {
          commit("SET_TOTAL_COUNT_ABILITIES", response.data.count);
          commit("CLEAR_ABILITIES");
          response.data.results.forEach((items) => {
            Axios.get(items.url).then((resp) => {
              resp.data.url = items.url;
              var data = {
                name: resp.data.name,
                id: resp.data.id,
                is_main_series: resp.data.is_main_series,
                effect: "No effect",
                pokemons: resp.data.pokemon,
              };
              if (resp.data.effect_entries[1]) {
                data.effect = resp.data.effect_entries[1].effect;
              }
              commit("ADD_ABILITIES", data);
            });
          });
          commit("SET_LOADING", false);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};

export default abilitiesModule;
