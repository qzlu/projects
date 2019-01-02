<template>
    <div class="main">
        <div v-for="(item,index) in bgImgArr">
            <div class="body-bg" v-show="idx===index" :style="{'background-image':'url(' + item + ')'}"></div>
        </div>
        <div class="left">
            <ul>
                <li v-for="(nav,index) in navs" :class="{'active':index == idx}" @click="link(nav.path)">{{nav.name}}</li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="(nav,index) in navs" :class="{'active':index == idx}" @click="link(nav.path)"></li>
            </ul>
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <div v-if="nextPath" class="icon next" @click="link(nextPath)">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            navs:[{
                name: '主页',
                path: '/'
            },{
                name: '合作机构',
                path: '/company'
            },{
                name: '年会简介',
                path: '/about'
            },{
                name: '活动议程',
                path: '/activity'
            },{
                name: '联谊酒会',
                path: '/reception'
            },{
                name: '媒体支持',
                path: '/media'
            },{
                name: '报名参会',
                path: '/attend'
            }],
            bgImgArr:[require('../assets/images/index.jpg'),require('../assets/images/home-bg.jpg'),require('../assets/images/introduction.jpg'),require('../assets/images/activity.jpg'),require('../assets/images/reception.jpg'),require('../assets/images/media.jpg'),require('../assets/images/attend.jpg')]
        }
    },
    props:{
        idx:{
            default:0,
            type: Number
        },
        nextPath:{
            type:String
        }
    },
    methods:{
        link(path){
            this.$router.push(path)
        }
    }
}
</script>
<style>
    .main{
        height: 100%;
        padding-top: 140px;
    }
    .body-bg{
        position:fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        min-width: 1000px;
        z-index:-10;
        zoom: 1;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
    }
    .left,.right{
        width: 18%;
        height: 100%;
        position: relative;
    }
    .content{
        height: 100%;
        margin: 0 18%;
        color: white;
    }
    .left{
        float: left;
    }
    .left ul{
        position: absolute;
        left: 50px;
        /* transform: translate(-50%,0); */
        margin-top: 0px;
    }
    .right ul{
        position: absolute;
        right: 50px;
        margin-top: 150px;
    }
    .left ul li {
        width: 142px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .left ul li.active{
        color: #3f100a;
        background: linear-gradient(to right,#fffdb3,#f4d278);
        background: -moz-linear-gradient(to right,#fffdb3,#f4d278);
        background: -webkit-linear-gradient(to right,#fffdb3,#f4d278);
        font-weight: bold;
        border-radius: 30px;
    }
    .right{
        float: right
    }
    .right ul li{
        width: 10px;
        height: 10px;
        cursor: pointer;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 100%;
        background: #8e8380
    }
    .right ul li.active{
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: #fada82
    }
    .next{
        width: 50px;
        height: 50px;
        position: fixed;
        left: 50%;
        bottom:50px;
        margin-left: -25px;
        background-position: -120px -140px;
        cursor: pointer;
        animation: nextOne 2s linear infinite;
        opacity: 0;
    }
    @keyframes nextOne {
        from {bottom: 50px;opacity: 0;}
        to {bottom:40px;opacity: 100;}
    }
    @media screen and (min-height: 1100px){
        .main{
            padding-top: 240px;
        }        
    }
    @media screen and (max-width: 1700px){
     .main{
         padding-top: 80px;
     }
     .next{
        bottom: 20px;
        animation: nextOne 2s linear infinite;
     }
    @keyframes nextOne {
        from {bottom: 20px;opacity: 0;}
        to {bottom:10px;opacity: 100;}
    }
    @media screen and (min-height: 1100px){
        .main{
            padding-top: 240px;
        }        
    }
     /* .content{
         margin-top: 2%
     } */
    }
    @media screen and (max-width: 1400px){
        .main{
            padding-top: 30px;
        }
        .content{
            margin-top: 3%
        }
        .left ul{
            margin-top: 40px;
        }
        .left ul li{
           font-size: 16px; 
           height: 40px;
           line-height: 40px;
        }
        .right ul{
            margin-top: 100px;
        }
        .next{
            bottom: 20px;
        }
    @keyframes nextOne {
        from {bottom: 20px;opacity: 0;}
        to {bottom:10px;opacity: 100;}
    }
    }
</style>
