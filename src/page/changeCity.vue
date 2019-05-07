<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot :title="hotCityTitle" :list="hotCityList"/>
    </el-row>
    <el-row>
      <hot title="最近访问" :list="recentList"/>
    </el-row>
    <el-row>
      <category/>
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province";
import hot from "@/components/changeCity/hot";
import category from "@/components/changeCity/category";
export default {
  components: {
    Province,
    hot,
    category
  },
  data() {
    return {
      hotCityTitle: "热门城市",
      hotCityList: ["上海", "北京", "重庆", "杭州", "成都"],
      recentList: ["上海"]
    };
  }
};
</script>

<style lang="scss">
</style>