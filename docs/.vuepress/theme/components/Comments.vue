<template>
  <div class="vcomment" v-if="data.comments === true">
    <div id="vcomments"></div>
  </div>
</template>

<script>
import { isActive, hashRE, groupHeaders } from "../util";
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  mounted: function() {
    this.createValine();
  },

  methods: {
    createValine() {
      const Valine = require("valine");
      window.AV = require("leancloud-storage");
      const valine = new Valine({
        el: "#valine-vuepress-comment",
        appId: "DxU5fgMdilCKbdcuzHAXAOhF-gzGzoHsz",
        appKey: "YVvhfTkk07VtbJLpOLBzYbdu",
        placeholder: "发现错误,纠正一下",
        notify: true,
        verify: true,
        pageSize: 5,
        visitor: true,
        path: window.location.pathname
      });
      this.valineRefresh = false;
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        setTimeout(() => {
          //重新刷新valine
          this.createValine();
        }, 180);
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
.v .veditor{
  background url("https://cdn.jsdelivr.net/gh/2662419405/imgPlus/tu.png") 100% 70% no-repeat !important;  
}
</style>
