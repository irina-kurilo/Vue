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
<div v-for="(item, index) in menuIteams" :key="index">
<el-link class="link" :href="item.link" target="_blank">{{item.text}}</el-link></div>
</el-col>
</el-row>
</el-col>
<el-col :span="4">
  <el-row :gutter="20">
    <el-col :span="24">


  <div v-for="(item, index) in AddMenuIteams" :key="index">

    
<el-link class="link" :href="item.link" target="_blank">{{item.text}}</el-link></div>

</el-col>
</el-row>
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

