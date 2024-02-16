<template>
  <el-footer>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-row :gutter="20">
          <el-col :span="24">
            <a href="/"
              ><div><img src="@/assets/logo.svg" /></div
            ></a>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <a href="/"><img class="icon" src="@/assets/icon1.svg" alt="" /></a>
            <a href="/"><img class="icon" src="@/assets/icon2.svg" alt="" /></a>
            <a href="/"><img class="icon" src="@/assets/icon3.svg" alt="" /></a>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="nav">
              <el-col class="grid-content ep-bg-purple" :span="16">
                <el-row>
                  <router-link class="link" to="/">Home</router-link></el-row
                >
                <el-row>
                  <router-link class="link" to="/Abilities"
                    >Abilities</router-link
                  ></el-row
                >
                <el-row>
                  <router-link class="link" to="/About"
                    >About</router-link
                  ></el-row
                >
              </el-col>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row :gutter="20">
          <el-col :span="24">
            <div>
              <a href="/"
                ><img class="icon_social" src="@/assets/social1.svg"
              /></a>
              <a href="/"
                ><img class="icon_social" src="@/assets/social2.svg"
              /></a>
              <a href="/"
                ><img class="icon_social" src="@/assets/social3.svg"
              /></a>
              <a href="/"
                ><img class="icon_social" src="@/assets/social4.svg"
              /></a>
              <a href="/"
                ><img class="icon_social" src="@/assets/social5.svg"
              /></a>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-footer>
</template>
<script>
export default {
  name: "Site-Footer",
  props: [],
};
</script>
