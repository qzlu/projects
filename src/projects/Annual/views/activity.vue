<template>
  <div class="container activity">
    <container :idx='idx'  nextPath='/reception'>
        <div class="activity-time">
            <div class="tab-header">
                <button :class="{active:tabIndex===1}" @click="tabIndex=1">2018年12月7日 上午</button>
                <div></div>
                <button :class="{active:tabIndex===2}" @click="tabIndex=2">2018年12月7日 下午</button>
            </div>
            <div class="panel" v-show="tabIndex===1" @wheel.stop>
                <ul>
                    <li v-for="item in timeList1">
                        <span class="active-time">{{item.time}}</span>
                        <span>{{item.content}}</span>
                    </li>
                </ul>
            </div>
            <div class="panel" v-show="tabIndex===2" @wheel.stop>
                <ul>
                    <li v-for="item in timeList2">
                        <span class="active-time">{{item.time}}</span>
                        <span>{{item.content}}</span>
                    </li>
                    <li>
                        <span class="active-time">14:45-15:00</span>
                        <span>2018年常青树•私募基金经理奖项颁奖典礼</span>
                    </li>
                    <li>
                        <div class="topic-time">15:00-16:00</div>
                        <div class="topic-list">
                            <h5><span class="icon people"></span>圆桌对话一：业绩常青秘籍与投资机会分享</h5>
                            <p style="margin-top:10px">参考议题：</p>
                            <ul>
                                <li>1.长期优秀业绩的经验分享和心得体会</li>
                                <li>2.国内宏观经济政策变化趋势分析及应对策略</li>
                                <li>3.国内对冲基金行业发展面临的机遇与挑战</li>
                                <li>4.资管新规下对冲基金面临的挑战及机遇解读</li>
                                <li>5.机构投资者投资新动向及投资策略解析</li>
                                <li>6.中美贸易摩擦背景下的资产配置建议</li>
                                <li>7.2019年投资机遇展望及投资经验分享</li>
                            </ul>
                            <p style="margin-top:10px">圆桌主持：</p>
                            <ul>
                                <li>郭金霞　　新浪财经私募频道主编</li>
                            </ul>
                            <p style="margin-top:10px">拟邀嘉宾：</p>
                            <ul>
                                <li>田　峰　　景林资产管理有限公司董事总经理</li>
                                <li>陈　心　　上海重阳投资管理股份有限公司联席首席投资官</li>
                                <li>陈家琳　　上海世诚投资管理有限公司董事长</li>
                                <li>林　波　　福建滚雪球投资管理有限公司创始人</li>
                                <li>易爰言　　北京星石投资管理有限公司副总经理</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="topic-time">16:00-16:45</div>
                        <div class="topic-list">
                            <h5><span class="icon people"></span>圆桌对话二：新格局新未来，展望新时代投资新机遇</h5>
                            <p style="margin-top:10px">参考议题：</p>
                            <ul>
                                <li>1.ETF基金的特点及其在投资中的应用分析</li>
                                <li>2.ETF套利策略解析及投资机会解读</li>
                                <li>3.如何提高Alpha能力及今年量化策略市场有效性思考</li>
                                <li>4.衍生品在量化投资的实际运用</li>
                                <li>5.宏观基本面解读及大类资产配置建议</li>
                                <li>6.A股投资机会及行业机会解读</li>
                                <li>7.大宗商品CTA策略未来发展趋势与投资策略</li>
                            </ul>
                            <p style="margin-top:10px">拟邀嘉宾：</p>
                            <ul>
                                <li>何修诚　　南方基金数量化投资部总经理</li>
                                <li>孙　伟　　南方金指数投资部基金经理</li>
                                <li>蒋　锴　　艾方资产总裁</li>
                                <li>江敬文　　深圳悟空投资投研副总裁</li>
                                <li>石宏彪　　盛泉恒元投资副总经理</li>
                                <li>张　骁　　北京宏量资本研究部总监</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="topic-time">16:45-17:30</div>
                        <div class="topic-list">
                            <h5><span class="icon people"></span>圆桌对话三：商品期货与量化投资策略投资机会深入剖析</h5>
                            <p style="margin-top:10px">参考议题：</p>
                            <ul>
                                <li>1.大宗商品CTA策略未来发展趋势与投资策略</li>
                                <li>2.股指期货投资策略及未来投资机会分享</li>
                                <li>3.国内外量化投资的最新趋势分析</li>
                                <li>4.今年量化投资再雄起，策略在市场有效性的探讨</li>
                                <li>5.智能投顾给量化投资带来的机遇与挑战</li>
                                <li>6.风险控制对量化投资长期发展的意义</li>
                                <li>7.2019年投资机遇展望及投资经验分享</li>
                            </ul>
                            <p style="margin-top:10px">拟邀嘉宾：</p>
                            <ul>
                                <li>王　锋　　安诚数盈基金总经理</li>
                                <li>吴久峰　　弘业期货副总经理</li>
                                <li>李金龙　　上海雷根资产管理有限公司总经理</li>
                                <li>言程序　　上海言起投资管理咨询有限公司总经理</li>
                                <li>陈　曦　　上海凯纳璞淳资产管理有限公司创始合伙人</li>
                                <li>李奇蕊　　宁波平方和投资副总经理</li>
                            </ul>
                        </div>
                    </li>
<!--                     <li>
                        <div class="topic-time">16:40-17:30</div>
                        <div class="topic-list">
                            <h5><span class="icon people"></span>圆桌对话三：新时代开启量化投资发展新篇章</h5>
                            <p style="margin-top:10px">参考议题：</p>
                            <ul>
                                <li>1.国内外量化投资的最新趋势分析</li>
                                <li>2.今年量化投资再雄起，策略在市场有效性的探讨</li>
                                <li>3.量化投资如何充分利用大数据分析与人工智能</li>
                                <li>4.如何理解风险控制对量化投资的意义</li>
                                <li>5.大宗商品CTA策略未来发展趋势与投资策略</li>
                                <li>6.衍生品在量化投资的实际运用</li>
                            </ul>
                        </div>
                    </li> -->
                    <li>
                        <span class="end-time">17:30</span>
                        <span>会议结束</span>
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
          idx:3,
          tabIndex:1,
          timeList1:[{
              time: '08:30-09:00',
              content: '参会嘉宾签到'
          },{
              time: '09:00-09:10',
              content: '领导致辞(孙含林  华泰证券副总裁)'
          },{
              time: '09:10-09:20',
              content: '领导致辞(俞文宏  南方基金副总裁)'
          },{
              time: '09:20-09:40',
              content: '领导致辞(李春瑜  私募排排网创始人)'
          },{
              time: '09:40-09:50',
              content: '领导致辞(周剑秋  弘业期货党委书记、总经理)'
          },{
              time: '09:50-10:30',
              content: '主题演讲(陆文杰  贝莱德集团中国区CIO)'
          },{
              time: '10:30-11:15',
              content: '主题演讲(冯　伟  华泰证券资产托管部总经理)'
          },{
              time: '11:15-12:00',
              content: '主题演讲(罗文杰  南方基金指数投资部总经理)'
          }],
          timeList2:[{
              time: '12:00-13:30',
              content: '中午休息'
          },{
              time: '13:30-13:40',
              content: '领导致辞(马志伟  永安期货总经理助理)'
          },{
              time: '13:40-14:25',
              content: '主题演讲(吴昊峻  华泰证券经纪及财富管理部)'
          },{
              time: '14:25-14:45',
              content: '主题演讲(张仲峪  私募排排网总裁助理)'
          }],
      }
  },
  components: {
    container
  }
}
</script>
<style>
/* .activity{
   background: url(../assets/images/activity.jpg) center no-repeat;
   background-size: 100% 100%;
} */
.activity-time{
    width: 90%;
    height: 54%;
    margin: 0 auto;
    border: 1px solid #4a4839;
    position: relative;
    margin-top: 6%;
    padding-top: 40px;
    padding-bottom: 10px;
    
}
.tab-header{
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
}
.tab-header div{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: #f0eaca;
    margin: 0 46px;
}
.tab-header button{
    width: 270px;
    height: 60px;
    border: 1px solid #beba9f;
    background: #12110f;
    color: #f3eed1;
    font-size:20px;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
}
.tab-header button.active{
    color: #2f0604;
    background: linear-gradient(to bottom,#fffdb3,#f4d278);
    background: -moz-linear-gradient(to bottom,#fffdb3,#f4d278);
    background: -webkit-linear-gradient(to bottom,#fffdb3,#f4d278);
}
.panel {
    height: 100%;
    overflow: auto;
    padding-bottom: 10px;
}
.panel ul{
    padding-left: 50px;
    text-align: left;
}
.panel ul li{
    margin-top: 24px;
}
.panel ul li span{
    font-size: 18px;
    margin-right: 60px;
}
.active-time{
    color: #c2c1c7
}
.topic-time{
    float: left;
    height: 100%;
    font-size: 18px;
    color: #c2c1c7;
    /* margin-top: 150px; */
}
.topic-list{
    margin-left: 162px;
}
.topic-list ul{
    padding-top: 0px;
    padding-left: 0px;
    padding-bottom: 10px;
}
.panel ul li h5{
    font-size: 18px;
    color: #fdf5d8;
    line-height: 26px;
}
.topic-list ul li{
    font-size: 18px;
    color: #fdf5d8
}
.panel ul li span.people{
    display: inline-block;
    width: 32px;
    height: 20px;
    margin-right: 10px;
    background-position: -46px -72px;
    position: relative;
    top: 4px;
}
.panel ul li span.end-time{
    display: inline-block;
    width: 100px;
}
@media screen and (max-width: 1700px){
    .activity-time{
        margin-top: 100px;
        height: 48%;
    }
    .panel ul li{
        margin-top: 20px;
    }   
}
@media screen and (max-width: 1400px){
    .activity-time{
        margin-top: 90px;
        height: 54%;
    }
    .tab-header{
        top: -20px;
    }
    .tab-header button{
        width: 200px;
        height: 40px;
        border: 1px solid #beba9f;
        background: #12110f;
        color: #f3eed1;
        font-size:18px;
        border-radius: 50px;
        cursor: pointer;
        outline: none;
    }
    .panel ul li{
        margin-top: 14px;
    }
    .panel ul li span{
        font-size: 16px;
    }
    .topic-list{
        margin-left: 146px;
    }
    .panel ul li span.end-time{
        width: 84px
    }
    .topic-list ul li{
        font-size: 16px;
    }
}
</style>