<template>
  <div class="container ">
    <container nextPath='/about' :idx=1>
        <div class="time">
            <P>2018年12月07日<span>南京华泰万丽酒店</span></P>
        </div>
        <div class="company-content" @wheel.stop>
            <div class="company-type">
                <div class="com-left">
                    <span>主办单位:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/ppw-logo.jpg" alt="">
                    <img src="../assets/images/huatai-logo.jpg" alt="">
                    <img src="../assets/images/southFund-logo.jpg" alt="">
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                    <span>联合主办单位:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/yongan.jpg" alt="">
                    <img src="../assets/images/hongye.jpg" alt="">
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                    <span>协办单位:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/regan.jpg" alt="">
                    <img src="../assets/images/yanqi.jpg" alt="">
                    <img src="../assets/images/kn.jpg" alt="">
                    
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                </div>
                <div class="com-right">
                    <img src="../assets/images/rohoninfo.jpg" alt="">
                    <img src="../assets/images/totodi.jpg" alt="">
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                    <span>特别支持:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/shanghaiduichong.jpg" alt="">
                    <img src="../assets/images/support.jpg" alt="">
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                    <span>独家门户合作伙伴:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/sina.jpg" alt="">
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                    <span>特邀媒体:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/hexun.jpg" alt="">
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                    <span>独家数据支持:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/FOF.jpg" alt="">
                </div>
            </div>
            <div class="company-type">
                <div class="com-left">
                    <span>独家直播支持:</span>
                </div>
                <div class="com-right">
                    <img src="../assets/images/ppw.jpg" alt="">
                </div>
            </div>
        </div>
    </container>
  </div>
</template>

<script>
import container from '@/components/container.vue'

export default {
  name: 'company',
  data(){
      return{
          companyList: [{
              text: '特别支持',
              logoUrl: require('../assets/images/support.jpg')
          },{
              text: '独家门户合作伙伴',
              logoUrl: require('../assets/images/sina.jpg')
          },{
              text: '特邀媒体',
              logoUrl: require('../assets/images/hexun.jpg')
          },{
              text: '独家数据支持',
              logoUrl: require('../assets/images/FOF.jpg')
          },{
              text: '独家直播支持',
              logoUrl: require('../assets/images/ppw.jpg')
          }]
      }
  },
  components: {
    container
  }
}
</script>
<style>
.company-content{
    /* background: url(../assets/images/home-bg.jpg) center no-repeat;
    background-size: 100% 100%; */
    height: 54%;
    padding-bottom: 50px;
    overflow-x: auto;
    overflow: auto
}
.time p{
    font-size: 20px;
    font-weight: bold;
    margin:50px 0px;
    color: #e3d4cf;
    line-height: 40px;
}
.time p span{
    font-size: 34px;
    color: white;
    margin-left: 20px;
}
.company-type{
    overflow: hidden;
    height: 60px;
    line-height: 60px;
    margin-top: 28px;
}
.company-type:first-of-type{
    margin-top: 0;
}
.com-left{
    float: left;
    height: 100%;
    width: 190px;
    padding-right: 10px;
    text-align: right;
    font-size: 20px;
}
.com-right{
    margin-left: 190px;
    text-align: left;
    height: 100%;
}
.com-right img{
    width: 180px;
    height: 100%;
    margin-right: 40px;
}
@media screen and (max-width: 1400px){
    .time p{
        font-size: 14px;
        line-height: 30px;
        margin-top: 100px;
    }
    .time p span{
        font-size: 24px;
    }

}
</style>
