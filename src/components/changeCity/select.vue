<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="selectDocClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperAcitve}">
        <p>{{title}}</p>
        <div class="wrapper">
          <div class="col">
            <span
              :class="{'mt-item':true,'active':item==value}"
              v-for="(item,index) in list"
              :key="index"
              @click="changeValue(item)"
            >{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "value", "title", "showWrapperAcitve"],
  data() {
    return {};
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      this.$emit("change_active", true);
    },
    selectDocClick() {
      this.isShowWrpperActive = false;
      this.$emit("change_active", false);
    },
    changeValue(item) {
      this.$emit("change", item);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
</style>