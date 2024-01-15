<template>
  <div id="app"></div>
   <div class="common-layout">
    <el-container class="main-container">
      <Header :menuIteams="MainMenuIteams"></Header>
      <router-view/>
   
  <Footer :menuIteams="MainMenuIteams"></Footer>

    </el-container>
  </div>
</template>


<script>
import Footer from '@/components/Site-Footer.vue'
import Header from '@/components/Site-Header.vue' 

  export default {
  components:{
    Footer, Header}
  ,
    data() { 
      return {
        activeIndex: '1',
        activeIndex2: '1',
    MainMenuIteams:[{
      index:'1',
      text:'Home',
      link:'https://element-plus.org'
    },
    {
      index:'2',
      text:'About',
      link:'https://element-plus.org'
    },
    {
      index:'3',
      text:'Episodes',
      link:'https://element-plus.org'
    },
    {
      index:'4',
      text:'Contact',
      link:'https://element-plus.org'
    }

    ]};},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
  
</script>
<style>
.logo{
  padding-top: 15px;
}
a{
  text-decoration: none;
}
a:hover{
  color: #118DA8;
  
}
.link{
  padding-bottom: 15px;
  text-decoration: none;
  color: #fff;
}
.icon_social{padding-right: 10px;
width: 32px;
height: 32px;}
.el-container {
    display: flex;
    flex-direction: column;}
.el-header{
  background-color: #191919;
}
.el-menu :hover{
  background-color: #191919;
}
.el-menu {
    display: flex;
    justify-content: flex-end;
  border: none;
  background-color: #191919;}
 
.el-footer{
  background-color: #191919;
  height: 450px;
  padding-top: 30px;
}
.icon{
  padding-right: 10px;}
  .nav{
    color: #fff;
    background-color: #191919;
  }
  
  .el-menu-item :hover{
    background-color: #191919;
  }

</style>