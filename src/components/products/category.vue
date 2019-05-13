<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in ClassicList.data" :key="item.type">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in AreaList.data" :key="item.type">
        <m-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "@/components/products/select";
export default {
  data() {
    return {
      ClassicList: {
        status: "success",
        msg: "成功",
        data: [
          {
            title: "美食",
            type: "food",
            subList: [
              {
                name: "日本菜",
                id: "Japan"
              },
              {
                name: "饮品店",
                id: "drink"
              },
              {
                name: "中国菜",
                id: "china"
              }
            ]
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring"
              }
            ]
          }
        ]
      },
      AreaList: {
        status: "success",
        msg: "成功",
        data: [
          {
            title: "推荐商圈",
            type: "food",
            subList: [
              {
                name: "人民广场",
                id: "Japan"
              },
              {
                name: "饮品店",
                id: "drink"
              },
              {
                name: "中国菜",
                id: "china"
              }
            ]
          },
          {
            title: "浦东新区",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring"
              }
            ]
          }
        ]
      }
    };
  },
  components: {
    MSelect
  }
};
</script>

<style lang="scss">
</style>