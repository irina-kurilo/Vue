<template>
    <el-header> 
        <el-row class="header-row" :gutter="20">
    <el-col :span="8">
      <div><img class="logo" src="@/assets/logo.svg"></div>
     
    
    </el-col>
    <div class="nav">
    <el-col class="grid-content ep-bg-purple" :span="16">
    
       

      <router-link class="menu-item" to ="/">Home</router-link>
      <router-link class="menu-item" to ="/Abilities">Abilities</router-link>
      <router-link class="menu-item" to ="/About">About</router-link>

    
         
</el-col>
</div>
  </el-row>
        
</el-header>

</template>

<script>

  
  export default {
    name:'Site-Header',
   }

  
</script>