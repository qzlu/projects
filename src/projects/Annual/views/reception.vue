<template>
  <div class="container reception-container">
    <container :idx='idx' nextPath='/media'>
        <div class="rec-content">
            <p class="introduction">酒会目的是促进交流与合作，为中国私募基金管理人与银行、券商、信托公司等金融机构与合格投资人之间搭建合作平台。嘉宾凭邀请函出席会议,嘉宾对象：国内外对冲基金管理人、银行私人银行总经理、券商研究所负责人、信托公司负责人、第三方财富管理负责人、机构投资者。</p>
            <ul class="reception">
                <li>
                    <div class="icon rec-number"></div>
                    <div>
                        <h5>酒会规格</h5>
                        <p>50人（闭门•定向邀约）</p>
                    </div>
                </li>
                <li>
                    <div class="icon rec-time"></div>
                    <div>
                        <h5>酒会时间</h5>
                        <p>2018年12月06日（18:00-20:30）</p>
                    </div>
                </li>
                <li>
                    <div class="icon rec-address"></div>
                    <div>
                        <h5>酒会地点</h5>
                        <p>中国•南京</p>
                    </div>
                </li>
            </ul>
            <div class='rec-plan'>
                <h5>议程安排</h5>
                <ul>
                    <li class="icon">
                        18:00-18:30<br>参会嘉宾签到
                    </li>
                    <li class="icon">
                        18:30-18:40<br>领导开场致辞
                    </li>
                    <li class="icon">
                        18:40-20:30<br>嘉宾自由交流
                    </li>
                </ul>
            </div>
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
          idx:4
      }
  },
  components: {
    container
  }
}
</script>
<style>
/* .reception-container{
   background: url(../assets/images/reception.jpg) center no-repeat;
   background-size: 100% 100%;
} */
.rec-content{
    margin-top: 40px;
}
.introduction{
    font-size: 18px;
    line-height: 36px;
}
ul.reception{
    overflow: hidden;
    width: 100%;
    margin-top: 4%;
}
ul.reception li{
    float: left;
    width: 33.33%
}
ul.reception .icon{
    width: 90px;
    height: 90px;
    border-radius: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
}
.rec-number{
    background-position: -104px -38px;
}
.rec-time{
    background-position: -210px -38px;
}
.rec-address{
    background-position: -317px -38px;
}
ul.reception li h5{
    font-size: 22px;
    line-height: 40px;
}
ul.reception li p{
    font-size: 18px;
}
.rec-plan{
    margin-top: 60px;
    white-space: nowrap;
}
.rec-plan h5{
    font-size: 22px;
    color: #fada82;
}
.rec-plan ul{
    margin-top: 20px;
    overflow: hidden;
}
.rec-plan ul li{
    display: inline-block;
    width: 254px;
    height: 80px;
    color: #350304;
    box-sizing: border-box;
    padding-top:24px;
}
.rec-plan ul li:first-of-type{
    background-position: -34px -204px;
}
.rec-plan ul li:nth-of-type(2){
    width: 312px;
    background-position: -294px -204px;
}
.rec-plan ul li:last-of-type{
    background-position: -614px -204px;
}
/* @media screen and (min-height: 1100px){
    .main{
        padding-top: 240px;
    }        
} */
@media screen and (max-width: 1700px){
    .introduction{
        font-size: 16px;
    }
    .rec-content {
        margin-top: 70px;
    }
    .introduction{
        line-height: 30px;
    }
    ul.reception{
        margin-top: 2%
    }
    .rec-plan{
        margin-top: 30px;
    }
}
@media screen and (max-width: 1500px){
    ul.reception{
        margin-top: 4%
    }
}
@media screen and (max-width: 1400px){
    .rec-content {
        margin-top: 80px;
    }
    .introduction{
        font-size: 14px;
        line-height: 26px;
    }
    ul.reception{
        margin-top: 2%
    }
    ul.reception .icon{
        margin-bottom: 10px;
    }
    ul.reception li h5{
        font-size: 18px;
    }
    ul.reception li p{
        font-size: 16px;
    }
    .rec-plan{
        margin-top: 10px;
    }
    .rec-plan ul{
        margin-top: 16px;
    }
    .rec-plan h5{
        font-size: 18px;
    }
}
</style>