import Vuex from "vuex";
import pokemonsModule from "./modules/pokemon.js";
import abilitiesModule from "./modules/abilities.js";
import magicModule from "./modules/magic.js";
const store = new Vuex.Store({
  modules: {
    pokemonsMod: pokemonsModule,
    abilitiesMod: abilitiesModule,
    magicMod: magicModule,
  },
});

export default store;
