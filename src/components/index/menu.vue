<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(pItem,Pindex) in menuList" :key="Pindex" @mouseenter="menuEnter(pItem)">
        <i :class="pItem.icon"></i>
        {{pItem.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detalEnter" @mouseleave="detalLeave">
      <template v-for="(item,index) in curDetail.children">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.children" :key="v+'_'+i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      curDetail: null,
      menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              title: "美食",
              children: ["代金券", "甜点", "饮品", "火锅自助餐"]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          icon: "hotel",
          children: [
            {
              title: "酒店星级",
              children: ["经典型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      var self = this;
      this.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    },
    detalEnter() {
      console.log("clear");
      clearTimeout(this.timer);
    },
    detalLeave() {
      var self = this;
      this.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    }
  }
};
</script>

<style scoped>
</style>