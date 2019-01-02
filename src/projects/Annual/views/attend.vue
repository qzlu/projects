<template>
  <div class="container contact">
    <container :idx='idx'>
        <div class="contact-content">
           <h5>年会组委会联系方式</h5>
           <ul>
               <li>
                   <h5>招商电话</h5>
                   <div class="box">
                       <div class="border">
                       </div>
                       <div class="box-left">
                           <span>李小姐<br>王先生</span>
                       </div>
                       <div class="box-right">
                           <p><span class="icon phone"></span><span>137-2875-4197</span></p>
                           <p><span class="icon phone"></span><span>136-3254-8046</span></p>
                       </div>
                       
                   </div>
               </li>
               <li>
                   <h5>普通参会</h5>
                   <div class="box">
                       <div class="border">
                       </div>
                       <div class="box-left">
                           <span>李小姐</span>
                       </div>
                       <div class="box-right">
                           <p><span class="icon tel"></span><span>0755-83214975</span></p>
                           <p><span class="icon phone"></span><span>152-1874-2926</span></p>
                       </div>
                       
                   </div>
               </li>
               <li>
                   <h5>媒体参会</h5>
                   <div class="box">
                       <div class="border">
                       </div>
                       <div class="box-left">
                           <span>刘小姐</span>
                       </div>
                       <div class="box-right">
                           <p><span class="icon phone"></span><span>136-6269-4274</span></p>
                       </div>
                       
                   </div>
               </li>
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
          idx:6,
      }
  },
  components: {
    container
  }
}
</script>
<style>
.contact-content{
    margin-top: 100px;
}
.contact-content ul{
    overflow: hidden;
    margin-top: 70px;
}
.contact-content ul li{
    display: inline-block;
    text-align: left;
    width: 25%;
}
.contact-content ul li:nth-of-type(2){
    margin: 0 40px;
}
.contact-content  h5{
    font-size: 22px;
}
.contact-content ul li .box{
    height: 150px;
    border: 1px solid #646464;
    box-sizing: border-box;
    border-radius: 6px;
    margin-top: 20px;
    position: relative;
}
.border{
    width: 50px;
    height: 80px;
    border-left: 2px solid #e1b741;
    border-top: 2px solid #e1b741;
    border-top-left-radius: 8px;
    position: absolute;
    left: -3px;
    top: -3px;
}
.box-left{
    height: 100%;
    line-height: 150px;
    float: left;
    font-size: 22px;
    color: #faecc3
}
.box-left{
    margin-left: 10px;
}
.box-left span{
    display: inline-block;
    line-height: 40px;
    margin-top: 34px;
}
.box-right{
    float: right;
    margin-top: 30px;
    margin-right: 20px;
}
.contact-content ul li:nth-of-type(3) .box-right{
    margin-top: 50px;
}
.box-right p{
    height: 40px;
}
.phone{
    display: inline-block;
    width: 26px;
    height: 30px;
    background-position: -464px -64px;
    position: relative;
    top: 8px;
    left: 0px;
    margin-right: 10px
}
.tel{
    display: inline-block;
    width: 26px;
    height: 30px;
    background-position: -428px -64px;
    position: relative;
    top: 8px;
    left: 0px;
    margin-right: 10px
}
@media screen and (max-width: 1500px){
    .contact-content  h5{
        font-size: 22px;
    }
    .contact-content ul li .box{
        height: 100px;
    }
    .box-left{
        font-size: 16px;
        line-height: 100px;
    }
    .box-left span {
        line-height: 34px;
        margin-top: 14px;
    }
    .box-right {
        margin-top: 4px;
        margin-right: 14px;
    }
    .contact-content ul li:nth-of-type(3) .box-right {
        margin-top: 24px;
    }
}
@media screen and (max-width: 1700px){
    .contact-content ul li{
        width: 28%
    }
}
@media screen and (max-width: 1400px){
    .contact-content  h5{
        font-size: 20px;
    }
    .contact-content ul li{
        width: 29%
    }
}
</style>