<template>
  <div id="app">
    <div class="header">
        <div class="header-content">
            <div class="lucky-container float-left">
                <div class="lucky-box" :style="{transform:rotate_angle ,transition:rotate_transition}">
                </div>
                <div class="lucky-pointer" @click="rotate_handle()" ></div>
                <div class="chance">
                    <img class="float-left" src="./assets/img/money.png">你还有<span v-if="isLogin">{{chance}}</span><span v-else class="data-force-certification-visible" style="cursor:pointer">登录查看</span>次抽奖机会 <span>（每看一场路演可获得一次机会）</span>
                </div>
            </div>
            <div class="header-right">
                <img src="./assets/img/font.png" alt="">
                <div>
                    <div class="float-left" style="height:106px">
                        <p><span class="money-log">￥</span><span class="money-50">50</span><span class="red-packet">话费<br>红包</span></p>
                    </div>
                    <a v-if="isLogin" href="https://kaihu.china-invs.cn/kh/osoa/views/index.html?short_code=SMPPWU7XAZaijyt" target="_blank">点击领取</a>
                    <a v-else class="data-force-certification-visible" href="javascript:;">点击领取</a>
                    <p>（股票账户开户成功可领取50元话费红包）</p>
                </div>
            </div>
        </div>
        <img src="./assets/img/red-packet.png" alt="">
    </div>
    <div class="video">
            <h3>开年路演看点</h3>
            <p><span class="border"></span>路演中心重磅推出2019开年专题路演<span class="border"></span></p>
            <ul class="video-list">
                <li v-for="(item,index) in videoList">
                    <h4><img src="./assets/img/left.png"><span>{{item.roadshow_title_pc}}</span><img src="./assets/img/right.png"></h4>
                    <div class="video-info float-left">
                        <div>
                            <p class="float-left width-350">路演机构：{{item.host_company_name}}</p>
                            <p class="float-left">代表产品：{{item.host_product}}</p>
                        </div>
                        <div>
                            <p class="float-left width-350">直播时间：{{item.roadshow_time}}</p>
                            <p class="float-left">累计收益：<span  v-if="isNaN(item.ret_ytd)" class="ret_ytd" style="cursor:pointer" v-html="item.ret_ytd"></span><span v-else class="ret_ytd">{{item.ret_ytd}}%</span></p>
                        </div>
                    </div>
                    <div class="button">
                        <button class="not-start" v-if="item.roadshow_status==1 || item.roadshow_status==2" @click="book(item)">预约路演</button>
                        <button class="living" v-if=" item.roadshow_status==3" @click="wathchVideo(item.roadshow_id, index)"><a :href="url1+item.roadshow_id" target="_blank">观看直播</a></button>
                        <button v-if="item.roadshow_status==4" @click="wathchVideo(item.roadshow_id, index)"><a :href="url1+item.roadshow_id" target="_blank"><img src="./assets/img/play.png" alt="">回看路演</a></button>
                        <button v-if="item.roadshow_status==5" @click="wathchVideo(item.roadshow_id, index)"><a :href="url1+item.roadshow_id" target="_blank">查看详情</a></button>
                        <button  class="dc-yy-btn" :data-name="'【专题】私募大型机构专题：'+item.roadshow_product" data-type="预约产品">预约产品</button>
                    </div>
                </li>
            </ul>
    </div>
    <div class="ppw-school">
            <h3>排排商学院基金入门课程</h3>
            <div>
                <div class="float-left">
                    <ul >
                        <li class="float-left">
                            <img src="./assets/img/1.png" alt="">
                            <span>0基础</span>
                        </li>
                        <li class="float-left">
                            <img src="./assets/img/2.png" alt="">
                            <span>听得懂</span>
                        </li>
                        <li class="float-left">
                            <img src="./assets/img/3.png" alt="">
                            <span>3-5分钟/节</span>
                        </li>
                        <li class="float-left">
                            <img src="./assets/img/4.png" alt="">
                            <span>1小时快速入门</span>
                        </li>
                    </ul>
                    <p>这是为私募小白们量身打造的课程！在这里，你可以收获一堆基金干货！在这里，你能了<br>解金融，学习基金！我们会为你扫除一切私募盲区，让你用最快的时间玩转基金。</p>
                </div>
                <div class="qr-code">
                    <h4>新年钜献,立减<span>50</span>元</h4>
                    <img src="./assets/img/qrcode.jpg" alt="">
                    <p>微信扫码领券</p>
                </div>   
            </div>
    </div>
    <div class="chaogu">
            <h3>炒股、理财选中投证券</h3>
            <!-- <p><span class="border"></span>（首次开户成功即可获得私募排排网提供50元话费）<span class="border"></span></p> -->
            <div class="chaogu-info">
                <p>低佣金股票交易 公募基金分析报告  <br>专属投顾 一对一指引服务 <br>开户获取2019中金资产配置展望：危中有机，均衡配置<br> 股票投资专业服务 个股行业分析报告</p>
            </div>
            <a v-if="isLogin" href="https://kaihu.china-invs.cn/kh/osoa/views/index.html?short_code=SMPPWU7XAZaijyt" target="_blank">立即开户</a>
            <a v-else class="data-force-certification-visible" href="javascript:;">立即开户</a>    
    </div>
    <div class="rule">
        <h4>活动规则</h4>
        <p>活动时间：即日起至2019年2月3日 <br>活动人群：面向排排网所有注册用户 <br>活动内容： <br>1、活动期间，首次登录即获得一次抽奖机会。<br>2、活动期间，每观看该页面一场路演可获得一次抽奖机会，共可获得三次机会。</p>
        <p>免责说明：<br>活动中客户所提供的个人实名信息是个人自愿提供并真实有效，由此引起的不良后果及影响与私募排排网无关</p>
    </div>
    <div class="footer">
    </div>
    <div class="toast" v-show="toast_control">
        <div class="toast-container">
            <img v-if="index===0||index===4" src="./assets/img/thanks.png" class="toast-picture" @click="close_toast()">
            <div v-else>
                <img class="close" src="./assets/img/close.png" alt="" @click="close_toast()">
                <h4>恭喜获得10元话费</h4>
                <a href="https://kaihu.china-invs.cn/kh/osoa/views/index.html?short_code=SMPPWU7XAZaijyt" target="_blank" ><img src="./assets/img/10.png" class="toast-picture" ></a>
                <p>中投证券注册成功后，话费当天到账</p>
            </div>
        </div>
    </div>
    <div class="toast-mask" v-show="toast_control"></div>
    <div class="tip" v-if="showTip">
        {{tipText}} 
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import QS from 'qs';
Axios.defaults.withCredentials=true;
let _this
export default {
  name: 'app',
  data(){
      _this = this
      return{
        chance:0, //抽奖机会
        toast_control: false, //抽奖结果弹出框控制器
        start_rotating_degree: 0, //初始旋转角度
        rotate_angle: 0, //将要旋转的角度
        rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
        click_flag: true, //是否可以旋转抽奖
        index: 0,
        videoList:null,
        isLogin:false, //是否已登录
        showTip:false,
        tipText:''
      }
  },
  components: {
  },
  computed:{
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
  },
  mounted(){
    this.getVideoList()
    this.getAward()
  },
  methods:{
    /**
     *  获取抽奖机会次数
     */
    getAward(show){
        Axios.get('/subject/zhongtouUserInfoApi/')
        .then(function (response) {
            if(response.data.status){
                _this.chance = response.data.data.remain
                _this.isLogin = true
            }else{
                _this.isLogin = false                
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    // 抽奖
    rotate_handle() {
      if(!this.isLogin) {
        $('.data-force-certification-visible').click()
        return
      }
      if(!this.chance){
        _this.showPro('机会已用完')
        return
      } 
      if (!this.click_flag) return;
      this.click_flag = false; // 旋转结束前，不允许再次触发
      Axios.get('/subject/zhongtouAwardClickApi/')
      .then(function (response) {
          if(response.data.status){
            if(Number(response.data.data.award)===0||Number(response.data.data.award)===0.1){
                _this.index = 0 //指定每次旋转到的奖品下标
            }else if(Number(response.data.data.award)===1||Number(response.data.data.award)===1.1){
                _this.index = 7
            }
            _this.chance = response.data.data.remain
            _this.rotating();
          }else{
              window.location.reload()
            //   $('.data-force-certification-visible').click()
              _this.click_flag = true;
          }
      })
      .catch(function (error) {
          _this.click_flag = true;
          console.log(error);
      })
    },
    rotating() {
      var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
      var during_time = 5; // 默认为1s
      var random = Math.floor(Math.random() * 7);
      var result_index = this.index ; // 最终要旋转到哪一块，对应prize_list的下标
      var result_angle = [0,315, 270, 225, 180, 135, 90, 45]; //最终会旋转到下标的位置所需要的度数
      var rand_circle = 6; // 附加多转几圈，2-3
      if (type == 0) {
        // 转动盘子
        var rotate_angle =
        this.start_rotating_degree +
        rand_circle * 360 +
        result_angle[result_index] -
        this.start_rotating_degree % 360;
        this.start_rotating_degree = rotate_angle;
        this.rotate_angle = "rotate(" + rotate_angle + "deg)";
        // // //转动指针
        // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
        // this.start_rotating_degree_pointer =360*rand_circle;
        // 旋转结束后，允许再次触发
        setTimeout(function() {
          _this.click_flag = true;
          _this.game_over();
        }, during_time * 1000 + 1500); // 延时，保证转盘转完
      } else {
        //
      }
    },
    game_over() {
      this.toast_control = true;
    },
    //关闭弹窗
    close_toast() {
      this.toast_control = false;
    },
    // 获取视频
    getVideoList(){
        Axios.get('/subject/zhongtouInfoApi/')
        .then(res => {
            this.videoList = res.data.data
            if(this.videoList.length>3){
                this.videoList.pop()
            }
        })
    },
    /**
     * 回看路演
     * @param {String} id 路演id
     * @param {Number} index 路演序号 
     */
    wathchVideo(id,index){
        Axios.post('/subject/zhongtouRoadshowClickApi/',QS.stringify({roadshow:index+1}))
        .then(function (response) {
            if(response.data.status){
                _this.chance = response.data.data.remain
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
    /**
     * 预约路演
     */
    book(item){
        if(!_this.isLogin){
            $('.data-force-certification-visible').click()
            return
        }
        Axios.post('/ApRequestRecord/requestRoadshow/',QS.stringify({key:item.roadshow_id,url:window.location.href}))
        .then(function (response) {
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
    padding: 0;
}
ul li {
    list-style: none
}
a{
    text-decoration: none;
    color: white
}
:root{
    --width-1200:1200px
}
.float-left{
    float: left;
}
body.footer-bar-open{
    padding-bottom: 0px!important;
}
#app {
  font-family:'微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
    height: 790px;
    background: url('./assets/img/logo.jpg') center no-repeat;
    position: relative;
}
.header>img{
    position: absolute;
    bottom: -100px;
    right: 100px;
}
.header-content{
    width: var(--width-1200);
    height: 100%;
    margin: 0 auto;
    padding-top: 150px;
    box-sizing: border-box;
}
.lucky-container{
    position: relative;
    width: 560px;
    height: 560px;
    left: 10px;
}
.lucky-box{
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: url('./assets/img/draw_wheel.png') center no-repeat;
    background-size: 100% 100%;
    /* transform: rotate(24deg); */
}
.lucky-pointer{
    width: 142px;
    height: 123px;
    background: url('./assets/img/start.png') center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -64px;
    margin-top: -61px;
    cursor: pointer;
    transform-origin: 64px 75px;
}
.chance{
    margin-top: 8px;
    margin-left: -50px;
    color: #d8b78a;
    font-size: 20px;
    line-height: 60px;
    text-align: left;
    white-space: nowrap;
}
.chance img{
    margin-right: 10px;
}
.chance span:first-of-type{
    color: white;
    background: #cb3324;
    margin: 0 4px;
    padding: 0px 6px;
    border-radius: 4px;
}
.chance span:last-child{
    font-size: 18px;
    color: #cccccc;
}
.header-right{
    margin-left: 620px;
}
.header-right>div{
    width: 540px;
    height: 140px;
    margin-left: 20px;
    margin-top: 40px;
    background: url('./assets/img/50.png') center no-repeat;
    color: white
}
.header-right .float-left p:first-of-type{
    /* line-height: 50px; */
    margin-top: 20px;
    padding-left: 70px;
}
.header-right>div>p{
    color: #ffffff;
    font-size: 14px;
    text-align: left;
    padding-left: 20px;
    margin-top: 4px;
}
.header-right .float-left p span{
    display: inline-block;
    margin-right: 10px;
}
.money-log{
    font-size: 30px;
}
.money-50{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 70px;
}
.red-packet{
    background: #8c7c71;
    color: #513e3b;
    font-size: 20px;
    font-weight: bold;
    padding: 4px 2px;
}
.header-right a{
    width: 180px;
    height: 71px;
    border-radius: 10px;
    margin-top: 34px;
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: white;
    line-height: 71px;
    background: linear-gradient(to bottom,#de4d41,#cb3324);
    background: -webkit-linear-gradient(to bottom,#de4d41,#cb3324);
    background: -moz-linear-gradient(to bottom,#de4d41,#cb3324);
    background: -o-linear-gradient(to bottom,#de4d41,#cb3324);
}
.video{
    height: 1470px;
    background: url('./assets/img/video-bg.jpg') center no-repeat;
    box-sizing: border-box;
    color: white;
    font-size: 18px;
}
h3{
    font-family: "Microsoft Yahei","微软雅黑",sans-serif;
    font-size: 50px;
    color: #513e3b;
    padding-top: 100px;
    font-weight: bolder
}
.video>p{
    font-size: 25px;
    color: #6e3e14;
    margin-top: 20px;
}
p .border{
    display: inline-block;
    width: 100px;
    height: 1px;
    background: #bdb5b2;
    margin: 10px 20px;
}
.video-list li{
    width: var(--width-1200);
    height: 340px;
    background: url('./assets/img/video.jpg') center no-repeat;
    margin: 40px auto;
    box-sizing: border-box;
    padding-top: 67px;
    padding-left: 65px;
}
.video-list li h4{
    font-family: "Microsoft Yahei","微软雅黑";
    font-size: 30px;
    color: white;
}
.video-list li h4 span{
    margin: 0 10px;
}
.video-list li p{
    text-align: left;
    line-height: 60px;
}
.width-350{
    width: 350px;
}
.video-info{
    margin-top: 60px;
}
.ret_ytd{
    font-size: 30px;
    color: #de4d41;
    font-weight: bold
}
.button{
    float: right;
    margin-top: 90px;
    margin-right: 50px;
}
.button button{
    width: 191px;
    height: 61px;
    line-height: 61px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    margin-left: 30px;
    font-size: 20px;
    color: white;
    outline: none;
}
.button button a{
    display: block
}
.button button img{
    position: relative;
    top: 8px;
    margin-right: 10px;
}
.button button:first-of-type{
    background: linear-gradient(to bottom,#dfbd83,#b57632);
    background: -webkit-linear-gradient(to bottom,#dfbd83,#b57632);
    background: -moz-linear-gradient(to bottom,#dfbd83,#b57632);
    background: -o-linear-gradient(to bottom,#dfbd83,#b57632);
}
.button button:last-of-type{
    background: linear-gradient(to bottom,#de4d41,#cb3324);
    background: -webkit-linear-gradient(to bottom,#de4d41,#cb3324);
    background: -moz-linear-gradient(to bottom,#de4d41,#cb3324);
    background: -o-linear-gradient(to bottom,#de4d41,#cb3324);
}
.ppw-school{
    height: 650px;
    background: url('./assets/img/ppw-school.jpg') center no-repeat;
    color: #513e3b
}
.ppw-school>div{
    width: var(--width-1200);
    height: 330px;
    margin: 0 auto;
    margin-top: 65px;
}
.ppw-school ul{
    overflow: hidden;
}
.ppw-school ul li{
    font-size: 25px;
}
.ppw-school ul li img{
    display: block
}
.ppw-school .float-left p{
    font-size: 18px;
    margin-top: 90px;
    text-align: left;
    line-height: 30px;
}
.ppw-school .qr-code{
    width: 360px;
    height: 330px;
    float: right;
    background: url('./assets/img/qr-code-bg.jpg') center no-repeat;
}
.ppw-school .qr-code h4{
    font-size: 25px;
    color: white;
    margin-top: 20px;
}
.ppw-school .qr-code h4 span{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 50px;
    color: #de4d41;
    position: relative;
    top: 4px;
}
.ppw-school .qr-code img{
    margin-top: 30px;
}
.ppw-school .qr-code p{
    font-size: 18px;
    color: white;
    margin-top: 16px;
}
.chaogu{
    height: 660px;
    background: url('./assets/img/chaogu-bg.jpg') center no-repeat;
    color: white
}
.chaogu>p{
    font-size: 25px;
    color: #6e3e14;
    margin: 35px 0;
}
.chaogu-info{
    width: 800px;
    height: 220px;
    margin: 35px auto;
    background: url('./assets/img/chaogu-info.jpg') center no-repeat;
    font-size: 20px;
    padding-top: 36px;
    box-sizing: border-box;
    line-height: 36px;
}
.chaogu a{
    width: 241px;
    height: 71px;
    border-radius: 10px;
    margin-top: 34px;
    display: inline-block;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    color: white;
    line-height: 71px;
    background: linear-gradient(to bottom,#de4d41,#d94541);
    background: -webkit-linear-gradient(to bottom,#de4d41,#d94541);
    background: -moz-linear-gradient(to bottom,#de4d41,#d94541);
    background: -o-linear-gradient(to bottom,#de4d41,#d94541);
}
.rule{
    height: 470px;
    background: url('./assets/img/rule.jpg') center no-repeat;
    font-size: 18px;
    color: white;
    margin-bottom: 120px;
}
.rule h4{
    font-size: 25px;
    padding-top: 64px;
}
.rule p{
    width: var(--width-1200);
    margin: 40px auto;
    text-align: left;
    padding-left: 142px;
    box-sizing: border-box;
    line-height: 30px;
}
.footer{
    width: 100%;
    position: fixed;
    bottom: 0px;
    height: 120px;
    background: url('./assets/img/footer.jpg') center no-repeat;
}
.toast-mask {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20000;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 0.3125rem;
  background-color: transparent;
}
.toast-container {
  position: relative;
  width: 100%;
  height: 100%;
  color: white
}
.toast-container .close{
    position:absolute;
    top:144px;
    right: 90px;
    cursor: pointer;
}
.toast-container h4{
    font-size: 25px;
    font-weight: normal;
    position: absolute;
    top: 230px;
    left: 50%;
    margin-left: -60px;
}
.toast-container p{
    font-size: 14px;
    position: absolute;
    left: 50%;
    bottom: 160px;
    margin-left: -70px;
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
