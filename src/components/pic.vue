<template>
  <div class="pic">
    <div class="big_img_wrap" v-if="isShowBig" @click="isShowBig = false;">
        <span>
            <img :src="bigImgs[curIndex]" alt="" id="bigImg">
        </span>
    </div>
    <div class="pic_top">
      <span>图片设计</span>
      <img v-lazy="require(`@/assets/avartar.png`)" alt="">
      <span>作品汇总</span>
    </div>

    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img, index) in imgs" :key="index">
            <div class="img_wrap" @click="showBig(index)">
                <img v-lazy="img" alt="">
            </div>
        </swiper-slide>
        <div class="pagination"  slot="scrollbar"></div>
    </swiper>

    <div class="pic_bottom">
        <span class="prev">◀</span>
        <button @click="bigImg()">查看高清图片</button>
        <span class="next">▶</span>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'pic',
  data () {
    return {
      mySwiper:null,
      imgs:[],
	  bigImgs:[],
      swiperOption: {
            paginationClickable: true,
            centeredSlides: true,
            slidesPerView: 4,
            watchActiveIndex: true,
            autoplay: 5000,
            speed:1000,
            freeMode : true,
            autoplayDisableOnInteraction: false,
            initialSlide: 2,
            navigation: {
              nextEl: '.next',
              prevEl: '.prev',
            },
            pagination: {
                el: '.pagination',
                type: 'progressbar',
            }
      },
      isShowBig:false,
      curIndex:0
    }
  },
  components:{
      swiper,
      swiperSlide
  },
  methods:{
      showBig(index){
          this.isShowBig = true
          this.curIndex = index
          this.swiper.slideTo(index, 1000, false)
      },
      bigImg(){
        window.open(this.bigImgs[this.swiper.activeIndex])
      }
  },
  computed:{
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted() {
      
      this.curIndex = this.$route.params.itemIndex ? this.$route.params.itemIndex : 2 
      this.$nextTick(()=>{
          this.swiper.slideTo(this.curIndex, 0, false)
      })

      let files = require.context('../../static/smPicImgs', false, /.(png|jpg|JPG|jpeg|gif|bmp|webp)$/).keys()
    
      files.forEach(item => {
          let name = item.substr(2,item.length)
          this.imgs.push(`./static/smPicImgs/${name}`)
      });
	  
	  let bigFiles = require.context('../../static/picImgs', false, /.(png|jpg|JPG|jpeg|gif|bmp|webp)$/).keys()
	      
	  bigFiles.forEach(item => {
	      let name = item.substr(2,item.length)
	      this.bigImgs.push(`./static/picImgs/${name}`)
	  })
	  // console.log(this.bigImgs)
    }
    
}
</script>

<style scoped lang="less">
@import "../common/less/index.less";
.pic{
    overflow: hidden;
}
.pic_top{
  background: #f7f7f7;
  height: 100px;
  line-height:100px;
  text-align: center;
  font-size: 1.2em;
  color: @word_color_2;

  img{
      width: 120px;
      vertical-align: top;
      display: inline-block;
      margin: 10px 30px;
      border: 5px solid #fff;
      border-radius: 50%;
  }

  span{
      display: inline-block;
      margin-top: 10px;
  }
}
.pic_bottom{
  position: absolute;
  width:calc(100% - 70px);
  margin-left: 70px;
  height: 80px;
  line-height: 80px;
  background: @theme_color_1;
  color: #fff;
  left: 0;
  bottom: 0;
  text-align: center;

    span{
        font-size: 3em;
        cursor: pointer;
        vertical-align: middle;
        outline:none;

        &:active{
            opacity: 0.7;
        }

        &.active{
            opacity: 0.7;
        }
    }

    button{
        background: #fff;
        color: @theme_color_1;
        font-size: 1.5em;
        padding:5px 40px;
        border-radius: 50px;
        margin: 5px 60px 0 60px;
        vertical-align: middle;
        box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.5s;

        &:active,&:hover{
            box-shadow: none;
        }
    }
}
.big_img_wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.8);
    overflow-y: auto;
    text-align: center;
    display:table;
    span{
            display:table-cell;
            vertical-align:middle;
        }

    img{
        max-width:100%;
        max-height: 100vh;
    }
}


.img_wrap{
    height: 30vh;
    padding-bottom: 1px;
    text-align: center;
    overflow: hidden;
    transition: all 0.5s;
    border: 3px solid @theme_color_1;
    cursor: pointer;
}
.swiper-slide {
    height: 40vh !important;
    position: relative;
    overflow:hidden;
    .scale(0.85,0.85);
    .transition(all 0.8s);

    img {
        width: auto;
        height: 100%;
        vertical-align: bottom;
        .transition(transform 0.8s);
    }


    &:hover {
        img {
            .scale(1.05,1.05);
        }
    }
}

    .swiper-slide:after {
        content: " ";
        display: block;
        height: 5vw;
        width: 100%;
        transform: rotateX(80deg);
        background: radial-gradient(ellipse closest-side, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    }
    .swiper-slide-active {
        .scale(1,1);
    }
    .swiper-wrapper {
        height: auto !important;
    }

    .swiper-container {
        position: relative;
        overflow:visible;
        margin-top: 15vh;
        height: calc(85vh - 180px);
    }

    .pagination {
        margin-top: calc(85vh - 184px);
        text-align: center;
    }
@media screen and (max-width: 768px){
    @top_height:50px;

    .pic_top{
        height: @top_height;
        line-height: @top_height;
        font-size: 1em;

        img{
            width: 70px;
        }
    }
    .pic_bottom{
        width: calc(100% - 40px);
        margin-left: 40px;

        button{
            font-size: 1em;
            margin: 5px 20px 0 20px;
        }
    }
    .img_wrap{
        height: 10vh;
        background: #fff;
        border:1px solid @theme_color_1;
    }
    .swiper-container{
        margin-top: 10vh;
        height: calc(85vh - 130px);
    }
    .swiper-slide-active {
        .scale(3,3);
        margin-top: 55vh;
        z-index: 20;
    }
    .pagination{
        margin-top:calc(85vh - 134px)
    }
}
</style>
