import Vuex from "vuex";
import pokemonsModule from "./modules/pokemon.js";
import abilitiesModule from "./modules/abilities.js";
const store = new Vuex.Store({
  modules: {
    pokemonsMod: pokemonsModule,
    abilitiesMod: abilitiesModule,
  },
});

export default store;
