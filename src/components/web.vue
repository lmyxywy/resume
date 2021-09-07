<template>
  <div class="web">
    <div class="web_child web_left">
      <ul class="web_img">
        <li v-for="(web ,index) in webs" @click="curWeb = web;curWebIndex = index;" :class="{'active':curWebIndex === index}">
          <img :src="require(`@/assets/itemImgs/${web.srcCut}.jpg`)">
        </li>
      </ul>
    </div>
    <div class="web_child web_right">
      <div class="web_right_top">
        <img :src="require(`@/assets/web_right_bg.png`)" alt="">
        <div class="iframe_wrap" :class="{'app_wrap':curWeb.isApp}">
          <div class="iframe_inner">
            <div class="iframe_bg">
              <!-- <img :src="require(`@/assets/itemImgs/${curWeb.src}.jpg`)"> -->
			  <div class="cannot_img" v-if="curWeb.isOnline && !curWeb.isApp">
					<div class="cannot_word">
						<h3>使用https协议的网站无法嵌入http资源，该网站无法在本站预览，请点击右下方按钮查看在线网站。</h3>
					</div> 
					<img  :src="require(`@/assets/itemImgs/${curWeb.srcCut}.jpg`)">
			  </div>
              <iframe name="mainIframe" :src="curWeb.src" frameborder="0" scrolling="auto" v-else></iframe>
            </div>
          </div>
          <img :src="require(`@/assets/web_right_prop.png`)" alt="">
        </div>
      </div>
      <div class="web_right_bottom">
        <span>{{curWeb.name}} 预览</span><span @click="goWeb()">
		<b v-if="!curWeb.isOnline && !curWeb.isScan">已下线查看离线版本（点击进入大屏预览效果更佳）</b>
		<b v-if="curWeb.isOnline && !curWeb.isScan">查看线上网站（点击进入大屏预览效果更佳）</b>
		<b v-if="curWeb.isScan">扫码查看线上版本</b>
		<b v-if="curWeb.isApp && !curWeb.isScan">手机查看效果更佳</b>
		</span>
      </div>
    </div>
  </div>
</template>

<script>

import db from "@/common/js/db";
import Vue from "Vue";

export default {
  name: 'web',
  data () {
    return {
      webs:[],
      curWebIndex:0,
      curWeb:{},
    }
  },
  methods:{
    goWeb(){
      window.open(this.curWeb.src)
    },
    iframeWidth(isApp){
      return isApp?'300px':'100%'
    }
  },
  created(){
    this.webs = db().webs
    this.curWebIndex = this.$route.params.itemIndex ? this.$route.params.itemIndex : 0 
    this.curWeb = this.webs[this.curWebIndex]
  },
  watch:{
    curWebIndex(n,o){
      this.curWeb = this.webs[this.curWebIndex]
    }
  }
}
</script>

<style scoped lang="less">
@import "../common/less/index.less";
.web{
  overflow: hidden;
}
.web_child{
  float: left;
  height: 100vh;
}
.web_left{
  width: 20%;
  overflow: hidden;
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
}
.web_right{
  width: 80%;
  position: relative;
}
.web_img{
  text-align: center;
  width: calc(100% + 12px);
  height: 100%;
  overflow-y: scroll;
  li{
    margin-top: 50px;
    overflow: hidden;
    padding: 3px;
    transition:all 0.5s;
    cursor: pointer;

    &:hover,&:active{
      opacity: 0.7;
    }

    &.active{
      img{
        border: 5px solid rgb(250, 106, 106);
      }
    }

    &:last-child{
      margin-bottom: 50px;
    }
  }
  img{
    box-shadow: 0 0 3px 3px rgba(0,0,0,0.1);
    vertical-align: bottom;
    height:120px;
    transition: all 0.3s;
  }
}
.web_right_bottom{
  position: absolute;
  width:100%;
  height: 80px;
  line-height: 80px;
  background: @theme_color_1;
  color: #fff;
  left: 0;
  bottom: 0;
  text-align: center;
  z-index: 1;

  span{
    width: 200px;
    padding: 8px 50px;
    border: 1px solid #fff;
    vertical-align: middle;

    &:nth-child(1){
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }
    &:nth-child(2){
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      background: #fff;
      color: @theme_color_1;
      margin-right: -3px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover{
        opacity: 0.8;
      }
    }
  }
}
.web_right_top{
  height: calc(100% - 100px);
  position: relative;

  &>img{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0.5;
  }
}
.iframe_wrap{
  width: 85%;
  margin: 5vh auto 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;

  &>img{
    width: 92%;
  }
}
.iframe_inner{
  background: #000;
  padding: 13px;
  border-radius: 30px;
}

@iframe_height:60vh;

.iframe_bg{
  background: #fff;
  height: calc(@iframe_height - 2px);
  overflow: hidden;
  border-radius: 20px;

  iframe{
    height: @iframe_height;
    width: 100%;
  }
}
.app_width{
  width:360px!important;
  height: 700px!important;
  border: 1px solid @line_color;
}
.app_wrap{
  height: 700px;

  .iframe_bg{
    height: 700px;
  }
  iframe{
    width:414px!important;
    height: 700px!important;
    border: 1px solid @line_color;
  }
}
.cannot_img {
    position: relative;
    height: 100%;
	img {
	    width: 100%;
	    height: 100%;
	    filter: blur(10px);
	}
}
.cannot_word{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 23% 0;
    background: rgba(0,0,0,.5);
    text-align: center;
    font-weight: 700;
    color: #96e4e9;
    line-height: 40px;
    z-index: 2;
    transition: all .5s;
}

@media screen and (max-width: 768px){
  .web_child{
    width: 100%;
    height: auto;
    float: none;
    overflow-x: hidden;
  }
  .web_right{
    position: inherit;
  }
  .web_img{
    padding: 0 20px;
    overflow-x: scroll;
    display: flex;
    flex-wrap:nowrap;

    li{
      display: inline-block;
      margin: 20px 20px 0 0;
      overflow: visible;
    }

    img{
      height: 70px;
      margin-bottom: -30px;
    }
  }
  .web_right_top{
    height: calc(100% - 120px);
  }
  .iframe_inner{
    padding: 7px;
    overflow: hidden;
  }
  .iframe_bg {
    height: calc(53vh - 2px)!important;
    iframe{
      height: 53vh!important;
    }
  }
  .web_right_bottom{
    font-size: 0.8em;
    left: 40px;
    height: 60px;
    line-height: 60px;
    width: calc(100% - 40px);
    overflow: hidden;

    span{
      width: 40%;
      padding: 0 2%;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
