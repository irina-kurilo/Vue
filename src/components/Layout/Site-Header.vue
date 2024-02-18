<template>
  <el-header>
    <el-row class="header-row" :gutter="20">
      <el-col :span="8">
        <a href="/"
          ><div><img src="@/assets/logo.svg" /></div
        ></a>
      </el-col>
      <div class="nav">
        <el-col class="grid-content ep-bg-purple" :span="16">
          <router-link class="menu-item" to="/">Home</router-link>
          <router-link class="menu-item" to="/Abilities">Abilities</router-link>
          <router-link class="menu-item" to="/About">About</router-link>
          <router-link class="menu-item" to="/Magic">Magic</router-link>
        </el-col>
      </div>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "Site-Header",
};
</script>
