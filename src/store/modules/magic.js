import Axios from "axios";
export const magicModule = {
  state() {
    return {
      answer:{}
    };
  },
  mutations: {
    SET_ANSWER(state,answer) {
      state.answer = answer;},
  
  },

  actions: {
    getDataMag({commit}) {
      Axios
    .get(`https://yesno.wtf/api`)
    .then((response) => {

      commit("SET_ANSWER", response.data);
     
      console.log(response.data)
    })
      .catch((error) => {
        console.warn(error);
      });

    }
  }
};

export default magicModule;
