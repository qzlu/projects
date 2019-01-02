<template>
  <div id="app">
      <div class="main">
         <h3 class="title">看路演，赢永久证券免佣账户！</h3>
         <h4 class="sub-title">通过本页每观看一场路演，可获1次抽奖机会，最多可获4次机会</h4>
         <div class="jiufu-info" @click="showJiufuInfo=true">
             <img src="./assets/images/jiufu-logo.png" alt="">
         </div>
         <modal :show.sync='showJiufuInfo'>
             <p style="text-indent:2em;text-align:left;padding:20px;">
                玖富证券是玖富集团的战略控股企业，其前身是犇亚证券亚洲有限公司，成立于1991年，是一家国际性的综合金融服务集团。玖富证券有限公司是香港证监会认可的持牌法团（持牌编号AAW177），也是香港联合交易所和结算所参与者。目前持有证券交易、资产管理、证券投资咨询、期货投资咨询等多项牌照资质，玖富证券致力于为广大中国内地投资者提供全球性的资产配置服务， 为客户省成本，让金融更简单。
             </p>
         </modal>
         <div class="luck-draw">
             <ul class="list">
                 <li v-for="(list,index) in lists" :class="{active:index===activeIndex}">
                     <img :src="list" alt="">
                 </li>
                 <li @click="start">
                    <img src="./assets/images/start.png" alt="">
                    <p>还有{{chance}}次机会</p> 
                 </li>
             </ul>
         </div>
         <!-- 玖富证券 -->
         <modal :show.sync='show1'>
             <div class="jiufu">
                <img class="jiufu-logo" src="./assets/images/2.png" alt="">
                <h2>恭喜您，抽中</h2>
                <h2>“玖富证券永久免佣账户”</h2>
                <img class='qr-code' src="./assets/images/jiufu.png" alt="">
                <p class="scan-text">扫码开户</p>
                <p class="">(仅限前500名成功开户新用户)</p>
             </div>
         </modal>
         <!-- 私募基金投资策略报告 -->
         <modal :show.sync='show2'>
             <div class="second-prize">
                 <img src="./assets/images/4.png" alt="">
                 <h2>恭喜您，抽中</h2>
                 <h2>“排排网2018年四季度私募基金投资策略报告”</h2>
                 <div>
                     <button @click="show2=false">稍后查看</button>
                     <button><a href="/Public/loadShow/ppw.pdf"  target='_blank'>查 看</a></button>
                 </div>
             </div>
         </modal>
         <!-- 中10元话费弹框 -->
         <modal :show.sync="show3">
             <div class="third-prize">
                 <img src="./assets/images/3.png" alt="">
                 <h2>恭喜您，抽中</h2>
                 <h2>“10元话费红包”</h2>
                 <button @click="show3=false">我知道了</button>
             </div>
         </modal>
         <!-- 谢谢参与弹框 -->
         <modal :show.sync="show4">
             <img class="thanks" src="./assets/images/5.png" alt="">
             <p class="thanks-text">谢谢参与！再接再厉！</p>
         </modal>
         <p class="check-record" @click="getAward(true)">中奖纪录<span>>></span></p>
         <modal :show.sync="showAward">
            <div class="award">
                <h1>中奖纪录</h1>
                <p v-if="!awardList.length">- 暂无记录 -</p>
                <ul v-else>
                    <li class="flex" v-for="item in awardList">
                        <div class="award-left award-left-1" v-if="item == 1">
                            <h3><span>玖富证券</span>—<span>永久免佣账户</span></h3>
                            <p>（仅限前500名成功开户新用户）</p>
                        </div>
                        <div class="award-left award-left-2" v-if="item == 3">
                            <h3>排排网2018年</h3>
                            <h3><span>四季度私募基金</span>投资策略报告</h3>
                        </div>
                        <div class="award-left award-left-3" v-if="item == 2">
                            <h3><span>10元</span>话费红包</h3>
                        </div>
                        <div class="award-rigth award-rigth-1" v-if="item == 1">
                            <img src="./assets/images/jiufu.png" alt="">
                            <p>扫码开户</p>
                        </div>
                        <div class="award-rigth award-rigth-2" v-if="item == 3">
                            <a href="/Public/loadShow/ppw.pdf"  target='_blank'>查 看</a>
                        </div>
                        <div class="award-rigth award-rigth-3" v-if="item == 2">
                            <p>将于活动结束后一周内派奖</p>
                        </div>
                    </li>
                </ul>
                <div>
                    -本次活动由玖富证券独家赞助-
                </div>
            </div>
         </modal>
         <h1 class="video-list-title"><div class="border-left"></div><span>第一届私募排排网特邀私募</span><span style="color:#BD453E">一专题路演
</span><div class="border-right"></div></h1>
         <ul class="video-list">
             <li v-for="(item,index) in videoList">
                 <div class="video-list-body">
                     <div class="video-list-body-left">
                        <img class="avar" v-if="index===0" src="./assets/images/shenfang.png" alt="">
                        <img class="avar" v-if="index===1" src="./assets/images/zhengjiang.png" alt="">
                        <img class="avar" v-if="index===2" src="./assets/images/yangbingtian.png" alt="">
                        <img class="avar" v-if="index===3" src="./assets/images/xieyongtao.png" alt="">
                        <h3>{{item.roadshow_title}}</h3>
                        <p>主讲嘉宾：{{item.host_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.host_company_short_name}}</p>
                        <p>{{item.roadshow_time}}</p>
                     </div>
                     <div class="video-list-body-right">
                        <p>内容预告：</p>
                        <ul>
                            <li v-for="li in item.roadshow_intro">{{li}}</li>
                        </ul>
                        <div class="pro-content">
                            <div class="production">
                                <h4 >{{item.fund_short_name}}</h4>
                                <p>代表产品</p>
                            </div>
                            <div class="border">

                            </div>
                            <div class="income">
                                <h4 v-if="isNaN(item.ret_ytd)" v-html="item.ret_ytd"></h4>
                                <h4 v-else>{{item.ret_ytd}}%</h4>
                                <p>今年收益</p>
                            </div>
                        </div>
                     </div>
                 </div>
                 <div class="btn">
                     <button class="not-start" v-if="item.roadshow_status==1 || item.roadshow_status==2" @click="book(item)">预约路演</button>
                     <button class="living" v-if=" item.roadshow_status==3" @click="wathchVideo(item.roadshow_id, index)"><a :href="url1+item.roadshow_id" target="_blank"><img src="./assets/images/live.png" alt="">观看直播</a></button>
                     <button v-if="item.roadshow_status==4" @click="wathchVideo(item.roadshow_id, index)"><a :href="url1+item.roadshow_id" target="_blank"><img src="./assets/images/video.png" alt="">回看路演</a></button>
                     <button v-if="item.roadshow_status==5" @click="wathchVideo(item.roadshow_id, index)"><a :href="url1+item.roadshow_id" target="_blank">查看信息</a></button>
                     <!-- <button v-else>查看信息</button> -->
                     <button class="dc-yy-btn" :data-name="item.fund_short_name" data-type="预约产品" @click="showYuyue=true;funName = item.fund_short_name">预约产品</button>
                 </div>
             </li>
         </ul>
         <div class="rule">
             <h2>抽奖规则</h2>
             <ul>
                 <li v-for="item in rule1">{{item}}</li>
             </ul>
         </div>
         <div class="rule">
             <h2>玖富免佣规则</h2>
             <ul>
                 <li v-for="item in rule2">{{item}}</li>
             </ul>
         </div>
        <div class="tip" v-if="showTip">
            {{tipText}} 
        </div>
      </div>
  </div>
</template>

<script>
import modal from './components/modal.vue'
var _this
import Axios from 'axios';
import QS from 'qs';
Axios.defaults.withCredentials = true; 
export default {
  name: 'app',
  /**
   * @param {Boolean} has_start_load_login_script 是否加载过登录框
   * @param {Array} lists 奖品列表
   * @param {Numbre} chance 抽奖机会次数
   * @param {Array} videoList 视频列表
   */
  data(){
      _this = this
      return{
          has_start_load_login_script:false,
          lists:[require('./assets/images/first.png'),require('./assets/images/second.png'),require('./assets/images/three.png'),require('./assets/images/forth.png'),require('./assets/images/null.png')],
          chance: 0,
          videoList:null,
          rule1:['1、即日起至2018年12月26日，通过本页每观看一场路演，可获1次抽奖机会，最多可获4次机会。','2、点击抽奖按钮，即可参加抽奖活动。奖品将于活动结束后一周内于官方渠道公布获奖名单并派奖。','3、天猫精灵100份，玖富证券永久免佣名额500个，10元话费500份，排排网2018年四季度私募基金投资策略报告800份。'],
          rule2:['1、本活动为“私募排排网”渠道用户专享特权活动，仅限在本页面注册成功的玖富犇犇用户参与。','2、成功开户即送永久免佣特权（领取日起，有效期100年），将免除港股交易佣金、平台使用费，但不包含其他非券商收取的交易产生费用。','3、永久免佣一期活动限量放送500名额（以活动页面描述为准），开户成功立即生效，获得永久免佣特权后90天内，如未完成首笔入金满1w则永久免佣特权失效。','4、首次入金或首次转仓，完成相应条件即可获得现金红包（奖励以玖富活动页面为准）。'],
          activeIndex:0,
          round:6,
          timer:null,
          isRun:false,
          show1:false,
          show2:false,
          show3:false,
          show4:false,
          awardList:[],
          showAward:false,
          showJiufuInfo:false,
          isLogin:false,
          showTip:false,
          tipText:'',
          disable:false
      }
  },
  components: {
    modal
  },
  computed:{
      url(){
        if(window.location.hostname==='192.168.1.160'||window.location.hostname==='www-dev-local.simuwang.com'){
            return 'http://www-dev-local.simuwang.com'
        }else{
            return 'https://' + window.location.hostname
        }
      },
      url1(){
            if(window.location.hostname==="www-test.simuwang.com"){
                return 'https://ly-test.simuwang.com/info/?rid='
            }else if(window.location.hostname==="www-pre.simuwang.com"){
                return 'https://ly-pre.simuwang.com/info/?rid='
            }else if(window.location.hostname==="www.simuwang.com"){
                return 'https://ly.simuwang.com/info/?rid='
            }else{
                return 'https://ly-dev-local.simuwang.com/info/?rid='
            }
      },
      url2(){
            if(window.location.hostname==="www-test.simuwang.com"||window.location.hostname==="www2-test.simuwang.com"){
                return 'https://mobile-test.simuwang.com'
            }else if(window.location.hostname==="www-pre.simuwang.com"){
                return 'https://mobile-pre.simuwang.com'
            }else if(window.location.hostname==="www.simuwang.com"){
                return 'https://mobile.simuwang.com'
            }else{
                return 'http://mobile-dev-local.simuwang.com'
            }
      }
  },
  created(){
    this.getList()
    this.getAward(false)
  },
  mounted(){

  },
  methods:{
    /**
     *  获取获奖纪录及抽奖机会
     */
    getAward(show){
        _this.awardList = []
        if(show&&_this.disable){
            return
        }
        if(show&&!_this.isLogin){
            $('.data-force-certification-visible').click()
            return
        }
        _this.disable = true;
        Axios.get(_this.url + '/subject/jiufuUserInfoApi/')
        .then(function (response) {
            _this.disable = false;
            if(response.data.status){
                _this.chance = response.data.data.remain
                _this.isLogin = true
                if(response.data.data.award_1!=0){
                    _this.awardList.push(1)
                }
                if(response.data.data.award_2!=0){
                    _this.awardList.push(2)
                }
                if(response.data.data.award_3!=0){
                    _this.awardList.push(3)
                }
            }else{
                _this.isLogin = false                
            }
            if(show){
                _this.showAward = true
            }
        })
        .catch(function (error) {

        })
    },
    /**
     * 立即抽奖
     */
    start () {
        var awardIndex;
        _this.round = 6
        if(_this.isRun){
            return
        }
        if(!_this.isLogin){
            $('.data-force-certification-visible').click()
        }
        if(_this.chance==0){
            return
        }
        _this.isRun = true
        Axios.get(_this.url + '/subject/jiufuAwardClickApi/')
        .then(function (response) {
            if(response.data.status){
                _this.chance = response.data.data.remain
                if(response.data.data.award===0){
                    awardIndex = 4
                }else if(response.data.data.award===1) {
                    awardIndex = 1
                }else if(response.data.data.award===2) {
                    awardIndex = 2
                }else if(response.data.data.award===3) {
                    awardIndex = 3
                }else{
                    awardIndex = 4
                }
                draw()
            }else{
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        function draw(){
            if(_this.activeIndex === 4){
                _this.activeIndex = 0
                _this.round --
            }else{
                _this.activeIndex ++
            }
            if(_this.round===0&&_this.activeIndex===awardIndex){
                clearTimeout(_this.timer)
                _this.isRun = false
                if(awardIndex === 1){
                    _this.show1 = true
                }else if(awardIndex === 2){
                    _this.show3 = true
                }else if(awardIndex === 3){
                    _this.show2 = true
                }else if(awardIndex === 4){
                    _this.show4 = true
                }
                return
            }
            _this.timer=setTimeout(draw , 100)
        }
        // draw()
    },
    /**
     * 获取直播列表
     */
    getList () {
        Axios.get(this.url + '/subject/jiufuInfoApi/')
        .then(function (response) {
            _this.videoList = response.data.data
        })
        .catch(function (error) {
        })
    },
    /**
     * 跳转到路演详情页
     * @param {String} id 路演id
     * @param {Number} index 路演序号 
     */
    wathchVideo(id,index){
        Axios.post(this.url + '/subject/jiufuRoadshowClickApi/',QS.stringify({roadshow:index+1}))
        .then(function (response) {
            if(response.data.status){
                setTimeout(()=>{
                    _this.chance = response.data.data.remain
                })
            }else{
                 $('.data-force-certification-visible').click()
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    showPro(text){
        _this.tipText = text
        _this.showTip = true
        setTimeout(() => {
             _this.showTip = false
        },2000)
    },
    book(item){
        if(!_this.isLogin){
            $('.data-force-certification-visible').click()
            return
        }
        Axios.post(_this.url2 + '/ApRequestRecord/requestRoadshow/',QS.stringify({key:item.roadshow_id,url:window.location.href}))
        .then(function (response) {
            console.log(response);
            if(response.data.status==1){
                _this.showPro('预约成功')
            }else{
                _this.showPro('预约失败，请重新预约')
            }
        })
        .catch(function (error) {
            _this.showPro('预约失败，请重新预约')
        })
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0
}
ul li {
    list-style: none
}
html body #app{
    height: 100%;
}
a{
    text-decoration: none;
    color: #C70900
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 28px;
}
/* .flex{
    display: flex;
    justify-content: center;
} */
.main{
    width: 100%;
    height: 4200px;
    background: url('./assets/images/bg.jpg') center no-repeat;
    background-size: cover;
    padding-top: 768px;
    box-sizing: border-box;
}
.title{
    font-size:39px;
    font-weight:600;
    color:rgba(187,70,59,1);
    line-height:53px;
}
.sub-title{
    font-size:26px;
    font-weight:400;
    color:#999999;
    line-height:36px;
    margin-top: 26px;
}
.luck-draw{
    width:1200px;
    height:254px;
    border-radius:20px;
    background: #BE4742;
    margin: 31px auto
}
.jiufu-info{
    position: fixed;
    bottom:100px;
    right: 20px;
    cursor: pointer;
}
.jiufu-info img{
    width: 172px;
    height: 238px;
}
.list{
    height: 100%;
    text-align: left;
}
ul.list li{
    width: 179px;
    height: 208px;
    float: left;
    margin-left: 10px;
    margin-top: 23px;
    background: white;
}
ul.list li.active{
    box-shadow: 0 0 8px 4px rgba(255, 241, 123, 1)
}
ul.list li img{
    width: 100%;
    height: 100%;
}
ul.list li:last-of-type{
    width: 230px;
    background: none;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    /* margin-top: 0; */
}
ul.list li:last-of-type p{
    font-size: 20px;
}
ul.list li:last-of-type img{
    width: 151px;
    height: 143px;
}
.jiufu-logo{
    width: 150px;
    height: 150px;
    margin:-10px auto
}
.modal-dialog h2{
    font-size: 26px;
    line-height:48px; 
}
.modal-dialog h2:first-of-type{
    font-weight: normal;
    color: #353535
}
.modal-dialog h2:last-of-type{
    color:#CE3837;
    font-weight:800;
}
.jiufu .qr-code{
    width: 100px;
    height: 100px;
    margin-top: 20px;
}
.jiufu .scan-text{
    font-size:20px;
    font-weight:400;
    color:rgba(53,53,53,1);
    line-height:40px;
}
.jiufu p:last-of-type{
    margin-bottom: 0px;
}
.second-prize img{
    width: 181px;
    height: 181px;
    margin: 8px auto;
}
.second-prize button{
    width: 291px;
    height: 63px;
    border-radius:45px;
    outline: none;
    box-sizing: border-box;
    font-size:30px;
    font-weight:400;
    line-height:63px;
    margin-top: 40px;
    margin-bottom: 30px;
}
.second-prize button:first-of-type{
    border:2px solid rgba(191,191,191,1);
    background: white;
    color:rgba(153,153,153,1);
}
.second-prize button:last-of-type{
    background:rgba(206,56,55,1);
    border:none;
    color: white;
    margin-left: 43px;
}
.second-prize button a{
    text-decoration: none;
    color: white;
    display: inline-block;
    width: 100%;
    height: 1005;
}
.third-prize img{
    width:181px;
    height:181px;
    margin: 8px auto
}
.third-prize button{
    width:290px;
    height:63px;
    line-height:63px;
    color: white;
    font-size:30px;
    background:rgba(206,56,55,1);
    border-radius:45px;
    border: none;
    outline: none;
    margin-top: 30px;
    margin-bottom: 22px;
}
.thanks{
    width: 181px;
    height: 181px;
    margin: 30px auto 30px auto;
}
.thanks-text{
    margin-bottom: 80px;
    font-size:50px;
    font-weight:400;
    color:rgba(53,53,53,1);
    line-height:63px;
}
.check-record{
    font-size:32px;
    width: 200px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(204,60,52,1);
    line-height:58px;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
}
.check-record span{
    font-size: 30px;
    letter-spacing: 10px;
}
.award{
    padding: 0px 46px 20px 46px;
}
.award h1{
    font-size: 40px;
    font-weight:400;
    color:rgba(206,56,55,1);
    line-height:40px;
}
.award>p{
  font-size:30px;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:156px;
  margin-top: 50px;
  margin-bottom: 50px;  
}
.award h3{
    font-size: 30px;
    text-align: left;
}
.award ul li{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dashed #BFBFBF;
    overflow: hidden;
}
.award ul li:last-of-type{
    border: none
}
.award-left{
    float: left;
    clear: both;
}
.award-rigth{
    float: right
}
.award img{
    width: 140px;
    height: 140px;
}
.award-left-1 h3{
    
}
.award-left-1 span:first-of-type{
    color: #353535;
    font-weight: 800;
    line-height: 45px;
}
.award-left-1 span:last-of-type{
    color:#CE3837;
    font-weight: normal;
    line-height: 43px;
}
.award-left-1 p{
   font-size:20px;
   font-weight:400;
   color:rgba(153,153,153,1);
   line-height:70px;
   margin-top: 34px;
   text-align: left; 
}
.award-left-2 span,.award-left-3 span{
    color: #CE3837
}
.award-rigth-2{
    font-size:30px;
    color: #CE3837
}
.award-rigth-3{
  font-size:30px;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:43px;  
}
.award>div{
    padding-top: 20px;
    color: #999999;
    font-size:30px;
}
h1{
    font-size: 50px;
    line-height:69px;
}
.video-list-title{
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-left: 140px;
    padding-right: 140px;
    margin-top: 77px;
}
.video-list-title div{
    width: 7px;
    height: 66px;
    background: #BE4742
}
.border-left{
    float: left;
}
.border-right{
    float: right
}
.video-list-title span{
    font-size:50px;
    /* margin: 0 44px; */
}
.video-list-title span:first-of-type{
    margin-left: 22px;
}
.video-list-title span:last-of-type{
    margin-right: 22px;
}
.video-list>li{
    width: 1209px;
    height: 495px;
    background: url('./assets/images/video-list-bg.png') center no-repeat;
    background-size: 100% 100%;
    margin: 40px auto;
    color: #744328
}
.video-list-body{
    overflow: hidden;
}
.video-list-body-left{
    float: left;
    width: 543px;
}
.avar{
    width: 124px;
    height: 124px;
    margin: 47px 175px 30px 244px;
}
.video-list-body-left h3{
    font-size:24px;
    font-weight:600;
    line-height:36px;
    padding-left: 60px;
    text-align: center;
}
.video-list-body-left p:first-of-type{
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
}
.video-list-body-left p:last-of-type{
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
    color: #BD453E
}
.video-list-body-right{
    margin-left: 593px;
    padding-top: 40px;
    text-align: left;
}
.video-list-body-right>p{
    font-size: 20px;
}
.video-list-body-right ul{
    font-size:24px;
    font-weight:400;
    line-height:36px;
}
.pro-content{
    position: relative;
    overflow: hidden;
    padding-right: 126px;
    text-align: center;
    margin-top: 44px;
}
.production{
    float: left;
    width: 180px;
}
.production h4,.income h4{
    font-size:32px;
    font-weight:400;
    line-height:36px;
}
.income{
    float: right;
}
.income h4{
    color: #C70900
}
.pro-content p{
    font-size: 20px;
    line-height:36px;
}
.border{
    width:1px;
    height:46px;
    background: #744328;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-63px,-50%)
}
.btn{
    margin-top: 20px;
    clear: both;
}
.video-list>li button{
    width: 352px;
    height: 66px;
    line-height: 66px;
    font-size:31px;
    font-weight:400;
    border-radius:33px;
    box-sizing: border-box;
    outline: none;
    margin-bottom: 20px;
    cursor: pointer;
}
.video-list>li button:first-of-type{
    border:2px solid rgba(116,67,40,1);
    background: none;
    color: #744328;
    position: relative;
}
.video-list>li button:first-of-type a{
    color: inherit
}
.video-list>li button:first-of-type.living{
    background: #744328;
    color: white;
    border: none;
}
.video-list>li button:first-of-type.not-start{
    background: #744328;
    border: none;
    color: white;
}
.video-list>li button:first-of-type img{
    width: 47px;
    height: 47px;
    border-radius: 100%;
    position: absolute;
    left: 43px;
    top: 50%;
    transform: translateY(-50%)
}
.video-list>li button:last-of-type{
    background: #744328;
    border: none;
    color: white;
    margin-left: 45px;
}
.rule{
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    margin-top: 44px;
}
.rule h2{
    font-size:32px;
    font-weight:600;
    color:rgba(116,67,40,1);
    line-height:56px;
    text-align: center;
    margin-bottom: 30px;
}
.rule ul li {
    font-size:20px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(116,67,40,1);
    line-height:36px;
}
.tip{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10000;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    padding: 40px;
    color: white;
    font-size: 24px;
}
</style>
