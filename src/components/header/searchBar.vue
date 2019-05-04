<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item ,index) in searchList" :Key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a herf="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [
        '故宫博物院',
        '北京欢乐谷',
        '北京世界园艺博览会',
        '北京海洋馆'
      ],
      searchList: ['火锅', '重庆火锅', '火锅麻辣烫'],
      suggestList: [
        '故宫博物院',
        '北京欢乐谷',
        '北京世界园艺博览会',
        '北京野生动物园',
        '八达岭长城'
      ]
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    isSearchList () {
      return this.isFocus && this.searchWord
    }
  }
}
</script>

<style lang="scss">
</style>
