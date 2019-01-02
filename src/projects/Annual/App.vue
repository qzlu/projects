<template>
  <div id="app" @wheel="scroll">
    <div class="header" :style="{height:height}">
        <ul>
            <li class="icon ppw-logo"></li>
            <li class="icon huatai-logo"></li>
            <li class="icon fund-logo"></li>
        </ul>
    </div>
    <div class="attend" @click="showModal" :style="{'background-image':'url(' + outerUrl + ')'}">
        <span>报名<br>参会</span>
        <div class="attend-inner" :style="{'background-image':'url(' + innerUrl + ')'}">
        </div>
    </div>
    <div class="dialog" v-if="show">
        <div class="dialog-header">
            申请人信息
            <div class="icon close" @click="show=false"></div>
        </div>
        <div class="dialog-body" >
            <ul>
                <li><span>您的姓名：</span><input type="text"  v-model="name"><span class="star">*</span></li>
                <li><span>您的电话：</span><input type="text"  v-model="phone"><span class="star">*</span></li>
                <li><span>您的公司：</span><input type="text"  v-model="company"><span class="star">*</span></li>
                <li><span>您的职位：</span><input type="text"  v-model="job"><span class="star">*</span ></li>
            </ul>
             <button @click="join">报名参会</button>
        </div>
    </div>
    <div class="tip" v-if="showTip">
        {{tipText}} 
    </div>
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import Axios from 'axios';
import qs from 'qs';
export default {
    /**
     * {Boolean} show 控制报名弹窗
     * {String} name 姓名
     * {} phone 电话号码
     * {String} company 公司
     * {String} job 职位
     */
    data(){
        return{
            show:false,
            name: '',
            phone: '',
            company: '',
            job: '',
            height:'',
            outerUrl:require('./assets/images/outer.png'),
            innerUrl:require('./assets/images/inner.png'),
            routeArr:['/','/company','/about','/activity','/reception','/media','/attend'],
            showTip:false,
            tipText:''
        }
    },
    props:['url'],
    mounted(){
    },
    methods:{
        /**
         * 显示提示框
         */
        showPro(text){
            this.showTip = true
            this.tipText = text
            setTimeout(() => {
                 this.showTip = false
            },2000)
        },
        /**
         * 报名参加
         */
        join(){
            var url = "/ForumMeeting/dataSubmit.html";
            var _this = this
            var isPhone = /^1[34578]\d{9}$/;//手机号码
            var isMob= /^0?1[3|4|5|8][0-9]\d{8}$/;// 座机格式
            if(this.name.length===0){
                this.showPro('姓名必填')
                return
            }
            if(!(isPhone.test(this.phone)||isMob.test(this.phone))){
                this.showPro('电话号码不正确')
                return
            }else{
            }
            if(this.company.length===0){ 
                this.showPro('公司必填')
                return
            }
            if(this.job.length===0){
                this.showPro('职位必填')
                return
            }
            var json = {
                forum_name: '[{"name":"第七届中国对冲基金年会","price":1,"count":1}]',
                name: this.name,
                company_name: this.company,
                mobile: this.phone,
                position:this.job,
                address: ''
            }
            Axios.post(url, qs.stringify(json))
            .then(function (res) {
                if (res.data.status == 1){
                    _this.showPro('报名成功，稍后我们将会联系您')
                    setTimeout(() => {
                        _this.show = false;
                    },2000)
                    
                } else {
                    _this.showPro(res.data.msg)
                }
            })
            .catch(function (error) {
            })
        },
        showModal(){
            this.show = true
        },
        /**
         * 鼠标滚轮滚动跳转页面
         */
        link(e){
            let i = this.routeArr.indexOf(this.$route.path);
            if(e.deltaY<0 || e.wheelDelta > 0){
                i = i -1
                if (i >= 0){
                    this.$router.push(this.routeArr[i])
                }
            }else if(e.deltaY > 0 ||  e.wheelDelta < 0){
                i = i + 1
                if(i <= 6){
                    this.$router.push(this.routeArr[i])
                }
            }
        },
        /**
         * 鼠标滚轮滚动事件，采用函数节流控制
         */
        scroll(e){
            clearTimeout(this.link.timeOut)
            this.link.timeOut = setTimeout(() => {
                this.link(e)
            },40)
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
    list-style: none;
}
html,body{
    height: 100%;
    overflow: hidden;
}
#app {
  font-family:Microsoft YaHei,PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; 
}
.header{
    width: 100%;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 50%);
    z-index: 6;
}
.header ul li {
    height: 42px;
    float: left;
    margin-top: 28px;
    margin-left: 50px;
}
.icon{
    background: url('./assets/images/icon.png') no-repeat
}
.ppw-logo{
    width: 170px;
    background-position: -34px -300px
}
.huatai-logo{
    width: 160px;
    background-position: -230px -300px
}
.fund-logo{
    width: 170px;
    background-position: -424px -300px
}
.attend{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    z-index: 100
}
.attend span{
    position: relative;
    z-index: 10;
    font-size: 34px;
    top: 48px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 50%);
    -webkit-text-shadow:0px 5px 5px rgba(0, 0, 0, 50%);
    -moz-text-shadow:0px 5px 5px rgba(0, 0, 0, 50%);
    -o-text-shadow:0px 5px 5px rgba(0, 0, 0, 50%);
}
.attend-inner{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0px;
    left: 0px; 
    background-size: cover;
    animation: attend 1s linear infinite;
    cursor: pointer;
}
@keyframes attend {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
}
.dialog{
    position: fixed;
    width: 50%;
    height: 40%;
    border: 1px solid #cccccc;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: #f8f8f8;
    z-index: 10
}
.dialog-header{
    height: 50px;
    line-height: 50px;
    font-size: 26px;
    font-weight: bold;
    color: #31070b;
    background: linear-gradient(to bottom,#fffdb3,#f4d278);
    position: relative;
}
.dialog-header .close{
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    top: 2px;
    right: 10px;
    background-position:-34px -136px;
    cursor: pointer;
}
.dialog-body {
    height: 100%;
    
}
.dialog-body ul{
    height: 60%;
}
.dialog-body ul li{
    float: left;
    width: 50%;
    height: 20%;
    margin-top: 5%
}
.dialog-body ul li input{
    box-sizing: border-box;
    height: 100%;
    width: 60%;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    background: #dcdcdc;
    padding-left: 20px;
}
.star{
    color: red;
    font-size: 24px;
    font-weight: bold;
    position: relative;
    top: 6px;
}
.dialog-body button{
    outline: none;
    width: 30%;
    height: 15%;
    /* border: 1px solid #cccccc; */
    border: none;
    cursor: pointer;
    border-radius: 60px;
    background: linear-gradient(to right,#fcf7b7,#ec8f52);
    box-shadow: 0px 2px #af7248;
    font-size: 28px;
    color: #31070b
}
.tip{
    position: fixed;
    border-radius: 10px;
    height: 40px;
    line-height: 40px;
    color: white;
    font-size: 20px;
    padding: 0 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.7);
    z-index: 11
}
/* @media screen and (max-width: 1700px){
    .header{
        height: 100px;
        line-height: 100px;
    }
    .header ul li{
        margin-top: 28px;
    }
}*/
@media screen and (max-width: 1370px){
 .attend,.attend-inner{
     width: 160px;
     height: 160px;
 }
 .attend span{
     font-size:30px;
     top: 38px;
 }
 .dialog-header {
     font-size: 20px;
 }
 .dialog-body button{
     font-size: 20px;
 }
} 
/*滚动条样式*/
/*chrome*/
::-webkit-scrollbar{
    position:relative;
    width:14px;
    height:14px}
::-webkit-scrollbar-track{background-color:transparent;}
::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0.3);}
::-webkit-scrollbar-thumb:hover {background-color:rgba(255,255,255,0.3);}
::-webkit-scrollbar-thumb:active {background-color:rgba(255,255,255,0.3);}
/**/
::scrollbar{
    position:relative;
    width:14px;
    height:14px}
::scrollbar-track{background-color:transparent;}
::scrollbar-thumb{background-color:rgba(255,255,255,0.3);;}
::scrollbar-thumb:hover {background-color:rgba(255,255,255,0.3);}
::scrollbar-thumb:active {background-color:rgba(255,255,255,0.3);}
</style>
