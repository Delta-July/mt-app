<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu/>
      </el-col>
      <el-col :span="19">
        <my-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-container :navList="iStyle"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu";
import MyLife from "@/components/index/life";
import MyContainer from "@/components/index/container";

export default {
  components: {
    MyMenu,
    MyLife,
    MyContainer
  },
  data() {
    return {
      iStyle: {
        class: "istyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>