import Axios from 'axios';
export const pokemonsModule ={
    state() {
        return{
        pokemons: [],
   
      
        totalCount: 0,}
    },
    mutations: {
        SET_POKEMONS(state,pokemons){
            state.pokemons=pokemons},
            ADD_POKEMONS(state,pokemons){
        state.pokemons.push(pokemons)},
        SET_CURRENT_PAGE(state,currentPage){
            state.currentPage=currentPage},
            SET_PAGE_SIZE(state,pageSize){
                state.pageSize=pageSize},
                SET_TOTAL_COUNT(state,totalCount){
                    state.totalCount=totalCount},
        SET_LOADING(state,loading){
            state.loading=loading},
            CLEAR_POKEMONS(state){
                state.pokemons=[]
            }
    },

    actions: {
       async getData({state, commit},pagination) {
         await   Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(pagination.currentPage - 1) * pagination.pageSize}&limit=${pagination.pageSize}`)
                .then( async (response) => {
                   commit("SET_TOTAL_COUNT", response.data.count);
         commit ("CLEAR_POKEMONS");
                    response.data.results.forEach(items => {
                        Axios.get(items.url).then((resp) => {
                            resp.data.url=items.url;
            
                            
                        
                            commit ("ADD_POKEMONS", resp.data)
                        })
                      console.log(state);
                    })
                   commit ("SET_LOADING",false);
                })
                .catch((error) => {
                    console.warn(error);
                })
        }
    }

}

 export default pokemonsModule