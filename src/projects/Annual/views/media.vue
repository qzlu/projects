<template>
  <div class="container media">
    <container :idx='idx' nextPath='/attend'>
        <div class="media-content">
            <ul>
                <li v-for="item in mediaList">{{item}}</li>
            </ul>
        </div>
    </container>
  </div>
</template>

<script>
// @ is an alias to /src
import container from '@/components/container.vue'

export default {
  name: 'home',
  data(){
      return{
          idx:5,
          mediaList:['江苏电视台','南京电视台','江苏广播电台','南京日报','第一财经','中国基金报','证券时报','中国证券报','上海基金报','现代快报','新华日报','每日经济新闻','大众证券报','财经时报','扬子晚报','金陵晚报','中国江苏网','金融界','全景网','财经中国','江苏金融圈','财经前沿','大众财经','南京之窗','浙江之声','南京都市网','中国经济网','苏州新闻网','江苏新闻网','飞鱼财经评论','财视中国','资本邦'],
      }
  },
  components: {
    container
  }
}
</script>
<style>
/* .media{
   background: url(../assets/images/media.jpg) center no-repeat;
   background-size: 100% 100%;
} */
.media-content{
    margin-top: 54px;
    height: 100%;
}
.media-content ul{
    width: 70%;
    height: 100%;
    margin: 0 auto
}
.media-content ul li {
    float: left;
    width: 25%;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    border: 1px solid #909090;
    margin-top: 20px;
    font-size: 18px;
}
.media-content ul li:nth-of-type(2n){
    border-left: none;
    border-right: none;
}
.media-content ul li:nth-of-type(4n){
    border-left: none;
    border-right: 1px solid #909090;
}
.media-content ul li:last-of-type{
    border-right: 1px solid #909090;
}
@media screen and (max-width: 1700px){
    .media-content ul li{
        height: 40px;
        line-height: 40px;
    }
}
@media screen and (max-width: 1500px){
    .media-content ul li{
        height: 40px;
        line-height: 40px;
    }
}
@media screen and (max-width: 1400px){
    .media-content{
        margin-top: 64px;
    }
    .media-content ul li{
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
}
</style>