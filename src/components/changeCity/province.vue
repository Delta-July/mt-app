<template>
  <div>
    <span class="name">按省份选择:</span>
    <my-select :list="proviceList" title="省份" 
    :value="provice"
     :showWrapperAcitve="proviceWrpActive" 
     @change_active="changeProviceActive" @change="changeProvince"/>
    <my-select :list="cityList" title="城市" :value="city" 
    :showWrapperAcitve="cityWrpActive" 
    @change_active="changeCityActive"
    @change="changeCity"
    />
  <span>直接搜索:</span>
  <el-select
    v-model="searchWork"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
  </div>
  </div>
</template>

<script>
import mySelect from "@/components/changeCity/select";
export default {
  data() {
    return {
      proviceList: ["山东", "江苏", "重庆", "四川", "贵州", "上海", "浙江"],
      provice: "省份",
      cityList: ["万州", "云阳", "荣昌"],
      city: "城市",
      proviceWrpActive:false,
      cityWrpActive:false,
      searchList:["万州", "云阳", "荣昌"],
      searchWork:'',
      loading:false
    }
  },
  components: {
    mySelect
  },
  methods: {
    changeProviceActive(flag){
        this.proviceWrpActive=flag;
        if(flag){
            this.cityWrpActive=!flag;
        }
    },
    changeCityActive(flag){
        this.cityWrpActive=flag;
        if(flag){
            this.proviceWrpActive=!flag;
        }
    },
    remoteMethod(val){
        //console.log(val)
    },
    changeProvince(value){
      this.provice=value;
    },
    changeCity(value){
      this.city=value;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>