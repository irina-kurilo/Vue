import Vuex from 'vuex'
import pokemonsModule from './modules/pokemon.js';
const state={};
const mutations={};
const actions={};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    pokemonsMod:pokemonsModule,
  }})

  export default store