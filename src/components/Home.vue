<template>
  <!--<div class="swiper-container" style="margin-top:-60px;">-->
  <!--<div style="margin-top:-60px;">-->
  <div>
    <!--轮播图-->
    <!--<swiper class="swiper-container" :options="swiperOption" ref="mySwiper">-->
      <!--&lt;!&ndash; slides &ndash;&gt;-->
      <!--<swiper-slide v-for="vs of slides" :key="vs.id">-->
        <!--<router-link :to="{params:{lessonId:vs.id},name:'Page'}">-->
        <!--<img :src="vs.preview | filterFullPath ">-->
        <!--</router-link>-->

      <!--</swiper-slide>-->

      <!--<div class="swiper-pagination" slot="pagination"></div>-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--</swiper>-->
    <!--轮播图结束-->
    <h1 style="align:center;font-size: 6vw;">欢迎来到kiwi小视频</h1>
    <!--推荐视频-->
    <h2>推荐视频</h2>

    <div id="recommend">
      <router-link :to="{params:{lessonId:com.id},name:'Page'}" v-for="com of commendLesson" :key="com.id">
        <img :src="com.preview | filterFullPath ">
        <i class="iconfont icon-bofang"></i>
        <span class="title">{{com.title}}</span>
      </router-link>
    </div>
    <!--推荐视频结束-->

    <router-link to="/video" class="more">MORE</router-link>
    <!--<a href="" class="more">MORE ></a>-->


    <!--热门视频-->
    <h2>热门视频</h2>

    <div class="today">
      <div class="pic">
        <div class="pic">
          <router-link :to="{params:{lessonId:v.id},name:'Page'}" v-for="v in hotLesson" :key="v.id">
            <img :src="v.preview | filterFullPath ">
            <!--<img :src="v.preview">-->
          </router-link>
        </div>
      </div>
      <router-link to="/video" class="more">MORE</router-link>
    </div>

    <!--<div style="height: 50px;"></div>-->
    <!--热门视频结束-->

    <!--底部固定导航-->
    <ul id="bottom">
      <li class="cur">
        <router-link to="/">
          <i class="iconfont icon-shouyeshouye"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/video">
          <i class="iconfont icon-icon02"></i>
          <span>视频</span>
        </router-link>
      </li>
    </ul>
    <!--底部固定导航结束-->

  </div>
</template>

<script>
  import global_ from "./Global.vue"
    export default {
        name: "home",
        filters: {
          filterFullPath: function (value) {
            if (!value) return ''
            return global_.IMAGE_URL +'/'+ value
          }
        },
        data (){
          return {
            //推荐课程
            commendLesson:[],
            //热门课程
            hotLesson:[],
            //视频服务器server
            baseUris:'',
            slides: [],
              swiperOption: {
                // direction: 'horizontal',
                loop: true,
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false
                },
                speed:100,
                // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
                effect : 'coverflow',
                slidesPerView: 3,
                // centeredSlides: true,
                coverflow: {
                  rotate: 30,
                  stretch: 10,
                  depth: 60,
                  modifier: 2,
                  slideShadows : true
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }
              },
          }
        },
        mounted() {
          //推荐课程
          let _this = this
          this.axios.get('/recommend/6')
            .then(function (response) {
              _this.commendLesson = response.data.data;
            })
            .catch(function (error) {
              console.log(error);
            });
          //轮播图
          this.axios.get('/images/6')
            .then(function (response) {
              _this.slides = response.data.data;
            })
            .catch(function (error) {
              console.log(error);
            });
          //热门课程
          this.axios.get('/hot/6')
            .then(function (response) {
              // console.log(response.data.data);
              _this.hotLesson = response.data.data;
            })
            .catch(function (error) {
              console.log(error);
            });
        },
    }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    color: #31343B;
  }
  a{
    text-decoration: none;
    color: #31343B;;
  }
  li{
    list-style: none;
  }
  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    padding-bottom: 10%;
  }
  .swiper-container {
    width: 100%;
    height: 200px;
  }

  .swiper-slide {
    /*background: red;*/
  }
  .swiper-container .swiper-slide a{
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .swiper-container .swiper-slide img{
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  /*分页器颜色*/
  .swiper-pagination-bullet-active{
    background: rgba(255,255,255,0.6);
  }
  h2{
    font-size: 4vw;
    text-align: center;
    font-weight: 700;
    line-height: 2em;
    width: 33%;
    margin: 0 auto;
    position: relative;

    margin-top: 4%;
  }
  h2:before{
    content: '◆';
    position: absolute;
    left: 0;
    font-size: 3vw;
  }
  h2:after{
    content: '◆';
    position: absolute;
    right: 0;
    font-size: 3vw;
  }

  /*推荐视频*/
  #recommend{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 92%;
    margin: 0 auto;
  }
  #recommend a{
    width: 48%;
    overflow: hidden;
    display: block;
    margin-top: 4%;
    position: relative;
  }
  #recommend a img{
    width: 100%;
  }
  #recommend a .iconfont.icon-bofang{
    position: absolute;
    color: rgba(255,255,255,1);
    left: 50%;;
    top: 50%;
    font-size: 8vw;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.4);
    border-radius: 50%;
    line-height: 1em;
  }
  #recommend a .time{
    line-height: 1.5em;
    font-size: 3vw;
    color: white;
    background: rgba(0,0,0,0.5);
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 2%;
  }
  #recommend a .title{
    position: absolute;
    bottom: 0;
    left: 0;
    line-height: 1.6em;
    color: white;
    text-align: center;
    width: 100%;
    background: linear-gradient(top,transparent,rgba(0,0,0,0.6));
    background: -webkit-linear-gradient(top,transparent,rgba(0,0,0,0.6));
  }
  .more{
    color: #ABB0BC;
    text-align: center;
    line-height: 3em;
    display: block;
    width: 100%;
    border-bottom: 5px solid #ECEEF1;
  }


  /*今日推荐*/
  .today{
    border-top: 1px solid #ECEEF1;
    border-bottom: 1px solid #ECEEF1;
    margin-top: 2%;
    padding-top: 3%;
    padding-bottom: 3%;
    overflow: hidden;
  }
  .today .title{
    margin-left: 4%;
    line-height: 2em;
    font-size: 3.5vw;
    font-weight: 700;
    float: left;
    width: 70%;
  }
  .today .column{
    float: right;
    margin-right: 4%;
    line-height: 2em;
    font-size: 3.5vw;
    color: white;
    background: #FB415F;
    padding: 0 2%;
  }
  .today .pic{
    height: 55vw;
    float: left;
    width: 92%;
    margin-left: 4%;
  }
  .today .pic a{
    display: block;
    float: left;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
  }
  .today .pic a img{
    min-height: 100%;
    max-height: 120%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .today .pic a:nth-child(1){
    width: 60%;
    height: 100%;
    border-right: 4px solid white;
  }
  .today .pic a:nth-child(2){
    width: 40%;
    height: 50%;
    border-bottom: 4px solid white;
  }
  .today .pic a:nth-child(3){
    width: 40%;
    height: 50%;
  }

  /*底部固定导航*/
  #bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background: #FFFFFF;
    margin: 0;
    border-top: solid 1px #dddddd;
  }
  #bottom li{
    width: 50%;
    box-sizing: border-box;
  }
  #bottom li i.iconfont{
    color: #888;
    font-size: 6vw;
    display: block;
    text-align: center;
  }
  #bottom li span{
    font-size: 2.6vw;
    display: block;
    text-align: center;
    color: #888;
  }
  #bottom li.cur{
    /*background: #333;*/
  }
  #bottom li.cur i.iconfont{
    color: #333;
  }
  #bottom li.cur span{
    color: #333;
  }
  /*底部固定导航结束*/
</style>
