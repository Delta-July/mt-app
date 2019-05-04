<template>
  <div class="m-header m-header-topbar">
    <el-row>
      <el-col :span="10">
        <geo/>
      </el-col>
      <el-col :span="14">
        <my-nav/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import geo from '@/components/header/geo'
import myNav from '@/components/header/nav'
export default {
  components: {
    geo,
    myNav
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
