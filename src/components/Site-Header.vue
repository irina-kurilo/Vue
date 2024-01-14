<template>
    <el-header> 
        <el-row :gutter="20">
    <el-col :span="8">
      <div><img class="logo" src="@/components/img/logo.svg"></div>
     
    
    </el-col>
    <el-col class="grid-content ep-bg-purple nav" :span="16"><div class="grid-content ep-bg-purple nav" />
        <el-menu text-color= "fff" active-color= "#118DA8" default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
        <div class="nav" v-for="(item, index) in menuIteams" :key="index">
  <el-menu-item :index="item.index"><a class="nav" :href="item.link"  target="_blank">{{item.text}}</a></el-menu-item></div>
</el-menu></el-col>
  </el-row>
        
</el-header>

</template>

<script>

  
  export default {
    name:'Site-Header',
    props:['menuIteams'],}

  
</script>