import Axios from 'axios';
export const abilitiesModule ={
    state() {
        return{
        abilities: [],
        loading: true,
      }
    },
    mutations: {
        SET_ABILITIES(state,abilities){
            state.abilities=abilities},
            ADD_ABILITIES(state,abilities){
        state.abilities.push(abilities)},
        SET_LOADING(state,loading){
            state.loading=loading}
            },

    actions: {
     async getDataAbil({state, commit}) {
         await   Axios.get(`https://pokeapi.co/api/v2/ability/?offset=0&limit=20`)
                .then( async (response) => {
                    response.data.results.forEach(items => {
                        Axios.get(items.url).then((resp) => {
                            resp.data.url=items.url;
                            commit ("ADD_ABILITIES", resp.data)
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

 export default abilitiesModule 