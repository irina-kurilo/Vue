<template>
<el-footer>
        
    <el-row :gutter="20">
<el-col :span="7">
  <el-row :gutter="20">
    <el-col :span="24">
   
<div><img src="@/assets/logo.svg"></div>
</el-col>
</el-row>
<el-row :gutter="20">
<el-col :span="24">
 <img class="icon" src="@/assets/icon1.svg" alt="">

 <img class="icon" src="@/assets/icon2.svg" alt="">
 <img class="icon" src="@/assets/icon3.svg" alt="">



</el-col>
</el-row>
</el-col>
<el-col :span="3">
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="nav">
    <el-col class="grid-content ep-bg-purple" :span="16">


    <el-row> <router-link class="link" to ="/">Home</router-link></el-row>
    <el-row> <router-link class="link" to ="/Abilities">Abilities</router-link></el-row>
    <el-row>  <router-link class="link" to ="/About">About</router-link></el-row>

    
         
</el-col>
</div>
</el-col>
</el-row>
</el-col>
<el-col :span="4">
  
    <el-col class="nav-footer" :span="24">


  <div  class="link-footer" v-for="(item, index) in AddMenuIteams" :key="index">

    
<a class="link-menu" :href="item.link" target="_blank">{{item.text}}</a>
</div>

</el-col>

</el-col>
<el-col :span="6">
  <el-row :gutter="20">
    <el-col :span="24">

  <div>
<img class="icon_social" src="@/assets/social1.svg">
<img class="icon_social" src="@/assets/social2.svg">
<img class="icon_social" src="@/assets/social3.svg">
<img class="icon_social" src="@/assets/social4.svg">
<img class="icon_social" src="@/assets/social5.svg">

</div>
</el-col>
</el-row>
</el-col>
</el-row>

  </el-footer>
</template>
  <script>

  
  export default {
    name:'Site-Footer',
    props:[],



    data() {
      return {

    AddMenuIteams:[{
      index:'1',
      text:'Style Guide',
      link:'https://element-plus.org'
    },
    {
      index:'2',
      text:'Instructions',
      link:'https://element-plus.org'
    },
    {
      index:'3',
      text:'Changelog',
      link:'https://element-plus.org'
    },
    {
      index:'4',
      text:'Credit',
      link:'https://element-plus.org'
    },
    {
      index:'5',
      text:'Powered by Webflow',
      link:'https://element-plus.org'
    },
    {
      index:'6',
      text:'Licenses',
      link:'https://element-plus.org'
    }
    ]}}}
  
</script>

