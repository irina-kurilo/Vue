<template>
  <h1>Ask your question</h1>
  <div class="magic-main-container">
   <div class="magic-block">
    <input class="magic-input" type="text" v-model ="question" > 

   <div class="magic-button-block"><el-button class="magic-button" @click="getAnswer()">Receive the answer</el-button></div> 
    <p class="magic-question">{{ quest}}</p>
    <p class="magic-answer">{{ ans }}</p>

   </div>
   <div><img class="magic-ball" src="@/assets/magic.png" alt="Magic Ball"></div>
  </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
       ans:"",
       quest:"",
       question:""
      };
    },
    name: 'Magic',
    computed: {
      ...mapState({
        answer: (state) => state.magicMod.answer,
       
      }),
    
    },
    methods: {
     
      ...mapActions({
        getDataMag: ("magicMod", "getDataMag"),
      }),
      getAnswer(){
        this.getDataMag()
     
        this.quest= this.question;
        console.log(this.question);
        this.ans=this.answer.answer;
        this.question=""
       

      }
      
      
    },
    mounted() {
      this.getDataMag()
    },
  };
  </script>
  <style>
.magic-button-block{
  padding-top: 30px;

}
.magic-button{
  font-size: 35px;
  padding: 35px;
}
.magic-block{
  text-align: center;
}

.magic-input{
  font-size: 30px;
}

.magic-ball{
  text-align: center;
  height: 350px;
}

.magic-main-container{
  display: flex;
  flex-direction: column;
    align-items: center;
}

.magic-question{
  font-size: 35px;
  color: #3833d4;
  margin: 15px;
}

.magic-answer{
  font-size: 50px;
  color: blueviolet;
margin: 25px;
font-weight: bold;
}
</style>