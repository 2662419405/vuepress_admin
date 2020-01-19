<template>
  <div class="rightTop" ref="rightTop">
    <ul>
      <li title="放大字体" @click="bigSize()">
        +
      </li>
      <li title="缩小字体" @click="smallSize()">
        -
      </li>
      <li title="夜晚主题" @click="ye()" ref="theme">
        <svg t="1578986925182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6201" width="200" height="200"><path d="M518.8 512.7c0-178.9 116.1-330.9 278.5-389.1-45.6-16.3-94.6-25.7-145.9-25.7C417 97.9 227 283.7 227 512.7c0 229.1 190 414.8 424.5 414.8 51.4 0 100.3-9.4 145.9-25.7-162.5-58.1-278.6-210.1-278.6-389.1z" p-id="6202" fill="#ffffff"></path></svg>
      </li>
      <li title="繁体切换" class="fan" @click="toggle()">
        繁
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
// import hanshu from "./tran";

export default {
  data() {
    return {
      fontSize: 16,
      themeColor: true
    };
  },
  mounted() {
    var oDom = this.$refs.rightTop;
    document.addEventListener("scroll", function(e) {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > screen.height / 3) {
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
      if (this.fontSize > 27) {
        return false;
      }
      this.fontSize++;
    },
    smallSize() {
      if (this.fontSize < 12) {
        return false;
      }
      this.fontSize--;
    },
    toggle(){

    },
    ye(){
        let oTheme = this.$refs.theme;
        if(this.themeColor){
            document.getElementsByTagName(
            "body"
            )[0].className = "night"
            oTheme.innerHTML = `<svg t="1578987463237" style="width:60%;height:60%;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7146" width="200" height="200"><path d="M344.189719 297.542353l-57.889397-57.889397-48.231443 48.232466 57.889397 57.889397L344.189719 297.542353zM254.129654 480.812217l-96.462886 0L157.666768 545.103411l96.462886 0L254.129654 480.812217zM543.518311 162.503932l-64.291194 0 0 93.214915 64.291194 0L543.518311 162.503932zM784.677572 287.885422l-48.231443-48.232466-57.89042 57.889397 45.031568 45.027474L784.677572 287.885422zM678.555709 728.42137l57.89042 57.841302 45.07557-44.982449-57.934423-57.885304L678.555709 728.42137zM768.614751 545.103411l96.464932 0 0-64.291194-96.464932 0L768.614751 545.103411zM511.397785 320.009018c-106.116747 0-192.926795 86.855073-192.926795 192.927818 0 106.113677 86.810048 192.923725 192.926795 192.923725 106.11777 0 192.923725-86.810048 192.923725-192.923725C704.32151 406.864091 617.515555 320.009018 511.397785 320.009018M479.227117 863.459791l64.291194 0 0-93.259941-64.291194 0L479.227117 863.459791zM238.068879 738.030205l48.231443 48.231443 57.889397-57.841302-44.982449-45.027474L238.068879 738.030205z" p-id="7147" fill="#ffffff"></path></svg>`
            this.themeColor = false;
        }else{
            document.getElementsByTagName(
            "body"
            )[0].className = ""
            oTheme.innerHTML = `<svg t="1578986925182" style="width:60%;height:60%;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6201" width="200" height="200"><path d="M518.8 512.7c0-178.9 116.1-330.9 278.5-389.1-45.6-16.3-94.6-25.7-145.9-25.7C417 97.9 227 283.7 227 512.7c0 229.1 190 414.8 424.5 414.8 51.4 0 100.3-9.4 145.9-25.7-162.5-58.1-278.6-210.1-278.6-389.1z" p-id="6202" fill="#ffffff"></path></svg>`
            this.themeColor = true;
        }
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

function a(){
    console.log(1)
}

</script>

<style lang="stylus" scoped>
.rightTop{
    z-index: 1000;
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
.rightTop ul li:hover{
    background-color: #49b1f5!important;
}

.rightTop ul .fan{
    font-size 14px;    
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
