<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item,index) in list.split('')" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>

    <dl class="m-category-section" v-for="(item,index) in cityList" :key="index">
      <dt>{{index}}</dt>
      <dd :id="'city-'+index">
        <span v-for="city in item" :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      cityList: []
    };
  },
  created() {
    var data = [
      {
        id: 1,
        name: "北京",
        pinyin: "beijing",
        firstChar: "B"
      },
      {
        id: 2,
        name: "天津",
        pinyin: "tianjing",
        firstChar: "T"
      },
      {
        id: 10,
        name: "上海",
        pinyin: "shanghai",
        firstChar: "S"
      },
      {
        id: 45,
        name: "重庆",
        pinyin: "chongqing",
        firstChar: "C"
      },
      {
        id: 46,
        name: "成都",
        pinyin: "chengdu",
        firstChar: "C"
      }
    ];
    var obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar]) {
        obj[item.firstChar] = [];
      }
      obj[item.firstChar].push(item);
    });
    this.cityList = obj;
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/category.scss";
</style>