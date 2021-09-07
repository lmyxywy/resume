<template>
  <div class="index" v-cloak>
    <div class="index_child index_left">
      <img :src="require(`@/assets/intro_logo.png`)" alt="" class="intro_left_top_img">
      <div class="intro_avartar">
        <img v-lazy="require(`@/assets/avartar.png`)" alt="" class="avartar ">
        <div class="intro_avartar_line"></div>
      </div>
      <div class="intro_info">
          <p><span>李女士</span> 女 1992</p>
          <p>微信号：qgyjhl</p>
          <p><img v-lazy="require(`@/assets/my_card2.jpg`)" alt=""></p>
      </div>
    </div>
    
    <div class="index_child index_right">
      <div class="index_word_list">
        <div class="word_list_wrap">
          <div class="word_list_line"></div>
          <div class="word_list_inner">
            <ul class="word_list">
              <li v-for="(info ,index) in infos" v-if="index<4">
                <div class="circle_wrap">
                  <div class="circle_inner"></div>
                </div>
                <div class="word_block">
                  <div class="word_title">
                    <div class="triangle"></div>
                    <div class="word_title_txt">
                      {{info.tit}}
                    </div>
                  </div>
                  <div class="word_body word_border" v-for="(contents ,index) in info.content">
                    <div class="word_row" v-for="(content ,index) in contents">
                      <span v-if="content.tip">{{content.tip}}：</span> 
					  <div v-html="content.detail" class="more_txt"></div> 
					  <span v-if="typeof(content.detail) === 'number'" style="opacity:1;">% 
						<span v-if="content.detail > 85" class="tag orange">精通</span>
						<span v-if="content.detail >= 70 && content.detail < 85" class="tag green">熟练</span>
						<span v-if="content.detail <= 60" class="tag yellow">掌握</span>
					  </span>
                      <div class="bar" v-if="typeof(content.detail) === 'number'">
                        <div class="bar_inner" :style="{width:`${content.detail}%`}"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
          
        </div>
        <div class="word_list_wrap">
          <div class="word_list_line"></div>
          <div class="word_list_inner">
            <ul class="word_list">
              <li v-for="(info ,index) in infos" v-if="index>3" :class="{hide: index===4}">
                <div class="circle_wrap">
                  <div class="circle_inner"></div>
                </div>
                <div class="word_block">
                  <div class="word_title" @click="$router.push({name:'intro'});">
                    <div class="triangle"></div>
                    <div class="word_title_txt">
                      {{info.tit}}
                    </div>
                  </div>
                  <div class="word_body word_border" v-for="(contents ,index) in info.content">
                    <div class="word_row" v-for="(content ,index) in contents">
                      <span class="word_row_tit">{{content.tip}}：</span> 
					  <span v-html="content.detail" :class="{bold: content.bold}"></span>
                    </div>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import db from "@/common/js/db";

export default {
  name: 'intro',
  data () {
    return {
      tabIndex:0,
      infos:[]
    }
  },
  methods:{
    tabHover(index){
      this.tabIndex = index;
    },
    tabClick(index){
      if(index === 0){
        this.$router.push({name:'pic'})
      }else if(index === 1){
        this.$router.push({name:'web'})
      }
      
    },
    // isNum(ob){
    //   return ty
    // }
  },
  mounted(){
    this.infos = db().info
  }
}
</script>

<style scoped lang="less">
@import "../common/less/index.less";
.index{
  overflow: hidden;
}
.index_child{
  width: 50%;
  float: left;
  height: 100vh;
  position: relative;
}
.index_left{
  width: 25%;
}
.index_right{
  width: 75%;
  box-shadow:0 -10px 50px 50px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
}

.index_word_list{
  position: relative;
  z-index: 2;
  margin-top: 30px;
  height:92vh;
}
.word_list_wrap{
  width:45%;
  float: left;
  margin: 0 2%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.word_list_inner{
  width: calc(100% + 7px);
  height: 100%;
  overflow-y: scroll;
  overflow-x: visible;
  margin-left: 5px;

  li{
    overflow: hidden;
  }
}
.word_list_line{
  position: absolute;
  height: 100%;
  top: 13px;
  left: 16px;
  border-left: 1px solid @line_color;
}

@circle:13px;

.circle_wrap{
  width:@circle;
  height:@circle;
  padding: 5px;
  border-radius: 50%;
  background: rgba(66,218,226,0.5);
  float: left;
  position: relative;
  z-index: 1;
  margin-top: 8px;
}
.circle_inner{
  width: @circle;
  height: @circle;
  background: @theme_color_1;
  border-radius: 50%;
}
.word_block{
  float: left;
  width:calc(100% - 50px);
}
.word_title{
  overflow: hidden;
}
.word_title_txt{
  width:130px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: @theme_color_1;
  color: #fff;
  float: left;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 1.1em;
  cursor: pointer;
}
.triangle{
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: dashed dashed solid dashed;
    border-color: transparent transparent @theme_color_1 transparent;
    transform: rotate(-90deg);
    float: left;
    margin-top: 8px;
}
.word_body{
  margin: 20px;
  color: @word_color_2;
  font-size: 0.9em;
  line-height: 30px;
  padding-bottom: 20px;
}
.word_border{
  border-bottom: 1px dashed @line_color;
}
.word_row_tit{
	opacity: 0.5;
	font-size: 0.9em;
	display: inline-block;
	margin-right: 10px;
}
.bold{
		font-weight: bold;
	}
.word_row{
  .tag{
	  color: #fff;
	  border-radius: 5px;
	  opacity: 1;
	  height: 20px;
	  line-height: 20px;
	  font-size: 12px;
	  padding: 3px 10px;
	  margin-left: 20px;
  }
  .orange{
  	  background: #f46f02;
  }
  .yellow{
  	  background: #ffb302;
  }
  .green{
	  background: @theme_color_1;
  }
}
.more_txt{
  color:@word_color_2;
  display:inline-block;
}

.intro_left_top_img{
  width:60%;
  display: block;
  margin: 20vh auto 30px auto;
}
@avartar_width:110px;
.intro_avartar{
  position: relative;
  text-align: center;

  img{
    position: relative;
    z-index: 1;
    border:5px solid #fff;
    border-radius: 50%;
    width: @avartar_width;
    height: @avartar_width;
  }
}
.intro_avartar_line{
  position: absolute;
  width: 100%;
  height: 25px;
  background: @line_color;
  top: 50px;
}
.intro_info{
  width:50%;
  margin: 30px auto;
  padding: 20px;
  background: lighten(@theme_color_1,10%);
  color: #fff;
  line-height: 30px;
  font-size: 0.9em;

  p{  
    text-align: center;
    span{
      font-size: 1.7em;
      margin-bottom: 10px;
      display: inline-block;
      margin-right: 20px;
    }

    img{
      width: 50%;
      margin-top: 10px;
      vertical-align: bottom;
    }
  }
}
.bar{
  background: @line_color;
  height: 5px;
  border-radius: 5px;
}
.bar_inner{
  background: @theme_color_1;
  height: 5px;
  border-radius: 5px;
}

@media screen and (max-width: 768px){
  .index_child{
    width: 100%;
    height: auto;
    float: none;
  }
  .intro_info{
    width: 70%;
  }
  .index_left{
    height: 85vh;
  }
  .intro_left_top_img{
    margin: 15vh auto 30px auto;
  }
  .word_list_wrap{
    margin: 0;
    width: 100%;
    overflow-y: visible;
    float: none;

    &:nth-child(2){
      margin-top: -10px;
    }
  }
  .index_word_list{
    margin: 0;
    padding-top: 30px;
    height: inherit;
  }
  .word_list_inner{
    width: 100%;
    overflow-y: visible;
    height: inherit;
  }
	.hide{
		display: none;
	}
}
</style>
