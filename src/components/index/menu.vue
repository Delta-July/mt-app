<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(pItem,Pindex) in menuList" :key="Pindex" @mouseenter="menuEnter(pItem.items)">
        <i :class="pItem.type"></i>
        {{pItem.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detalEnter" @mouseleave="detalLeave">
      <template v-for="(item,index) in curDetail">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.items" :key="v+'_'+i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      timer: null,
      curDetail: null,
      menuList: []
    };
  },
  created() {
    api.getMenuList().then(res => (this.menuList = res.data.data));
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