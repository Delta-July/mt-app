<template>
  <div class="m-istyle">
    <dl @mouseover="over" :calss="navList.class">
      <dt>{{navList.title}}</dt>
      <dd
        v-for="(item,index) in navList.list"
        :key="index"
        :class="{active:kind==item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in list" :key="item.image">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" v-if="item.rendNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">
                  {{item.price_info.current_price}}
                  <span class="current-price-type">起</span>
                </span>
              </span>
            </div>
            <div class="price-info" v-else-if="!item.rendNum">
              <span class="current-price numfont">抢光了</span>
            </div>
            <div class="price-info" v-else>
              <span class="price-symbol numfont">¥</span>
              <span class="current-price numfont">{{item.price_info.avg_price}}</span>
              <span class="units">/{{item.price_info.units}}均</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "https://p0.meituan.net/poi/__18935628__3306971.jpg@460w_260h_1e_1c",
          title: "万达影城(江桥万达广场店)",
          sub_title: "免押金,可停车,儿童票,可刷卡,有WIFI,休息区,IMAX厅,4DX厅",
          price_info: {
            current_price: 34.9,
            old_price: 36,
            avg_price: null,
            units: null
          },
          address: "",
          rendNum: 1
        },
        {
          image:
            "https://p0.meituan.net/deal/a407188bde446fcdfb62c61cdc966f58265757.jpg@460w_260h_1e_1c",
          title: "万优幕星天地影城",
          sub_title: "免押金,可停车,儿童票,可刷卡,有WiFi,巨幕厅,RealD 6FL厅",
          price_info: {
            current_price: 19.9,
            old_price: 36,
            avg_price: null,
            units: null
          },
          address: "",
          rendNum: 0
        },
        {
          image:
            "https://p1.meituan.net/deal/201208/22/1_0822151022.jpg@460w_260h_1e_1c",
          title: "CGV影城(白玉兰广场IMAX店)",
          sub_title: "免押金,儿童票,IMAX厅,杜比全景声厅",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 33,
            units: "人"
          },
          address: "",
          rendNum: 1
        }
      ]
    };
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") return false;
      this.kind = dom.getAttribute("data-type");
      //动态获取数据 Ajax请求
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>