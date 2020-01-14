<template>
  <div class="rightTop" ref="rightTop">
    <ul>
      <li title="放大字体" @click="bigSize()">
        +
      </li>
      <li title="缩小字体" @click="smallSize()">
        -
      </li>
      <li title="设置">
        <svg
          t="1578981647151"
          class="icon donghua"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5499"
          width="200"
          height="200"
        >
          <path
            d="M881 512c0-52.4 32.9-96.8 79-114.5-11-43.2-28-83.9-50.2-121.3C864.6 296.3 810 288.1 773 251c-37-37-45.2-91.7-25.1-136.8C710.4 92 669.7 75 626.5 64c-17.8 46.1-62.2 79-114.5 79-52.4 0-96.8-32.9-114.5-79-43.2 11-83.9 28-121.3 50.2 20.1 45.2 11.9 99.8-25.1 136.8-37 37-91.7 45.2-136.8 25.2C92 313.6 75 354.3 64 397.5c46.1 17.8 79 62.2 79 114.5 0 52.4-32.9 96.8-79 114.5 11 43.2 28 83.9 50.2 121.3C159.4 727.7 214 735.9 251 773c37 37 45.2 91.7 25.1 136.8C313.6 932 354.3 949 397.5 960c17.8-46.1 62.2-79 114.5-79 52.4 0 96.8 32.9 114.5 79 43.2-11 83.9-28 121.3-50.2-20.1-45.2-11.9-99.8 25.1-136.8 37-37 91.7-45.2 136.8-25.2C932 710.4 949 669.7 960 626.5c-46.1-17.7-79-62.1-79-114.5zM512 635c-67.9 0-123-55.1-123-123s55.1-123 123-123 123 55.1 123 123-55.1 123-123 123z"
            p-id="5500"
            fill="#ffffff"
          ></path>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 16
    };
  },
  mounted() {
    var oDom = this.$refs.rightTop;
    document.addEventListener("scroll", function(e) {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > screen.height / 2) {
        oDom.style.cssText = "opacity: 1;transform: translateX(-45px);";
      } else {
        oDom.style.cssText = "opacity: 0;transform: translateX(0px);";
      }
    });
    document.getElementsByTagName(
      "body"
    )[0].style.cssText = `font-size:${this.fontSize}px;`;
  },
  methods: {
    bigSize() {
      if (this.fontSize > 30) {
        return false;
      }
      this.fontSize++;
    },
    smallSize() {
      if (this.fontSize < 12) {
        return false;
      }
      this.fontSize--;
    }
  },
  watch: {
    fontSize: function(newValue, oldValue) {
      document.getElementsByTagName(
        "body"
      )[0].style.cssText = `font-size:${newValue}px;`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.rightTop{
    -moz-user-select:none;
    -webkit-user-select:none;
    user-select:none;
    right: -45px;
    position: fixed;
    bottom: 60px;
    transform: translateX(-45px);
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    opacity: 0;
    -ms-transition: all 0.5s;
}
.rightTop ul li{
    width: 30px;
    height: 30px;
    color: #fff;
    text-align: center;
    line-height: 29px;
    font-size: 16px;
    display: block;
    margin-bottom: 2px;
    cursor: pointer;
    text-decoration: none;
    background-color: #2d3035 !important;
    font-weight: bold;
    font-size: 30px;
}
.rightTop ul li svg{
    width: 60%;
    height: 60%;
    color: #fff;
}
.donghua{
    -webkit-animation: avatar_turn_around 2s linear infinite;
    -moz-animation: avatar_turn_around 2s linear infinite;
    -o-animation: avatar_turn_around 2s linear infinite;
    -ms-animation: avatar_turn_around 2s linear infinite;
    animation: avatar_turn_around 2s linear infinite;
}
@-moz-keyframes avatar_turn_around {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes avatar_turn_around {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes avatar_turn_around {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes avatar_turn_around {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
