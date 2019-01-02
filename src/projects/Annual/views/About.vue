<template>
  <div class="container about">
    <container :idx='idx' nextPath='/activity'>
        <ul class="tab">
            <li @click="tabIndex=1" :class="{active:tabIndex===1}">年会背景</li>
            <li  @click="tabIndex=2" :class="{active:tabIndex===2}">年会宗旨及意义</li>
            <li  @click="tabIndex=3" :class="{active:tabIndex===3}">年会亮点</li>
        </ul>
        <div v-show="tabIndex===1" class="tab-content" @wheel.stop>
            <p>
                自2002年我国第一只私募基金问世，至今我国对冲基金行业已经走过了16个年头。证券业协会最新数据显示，截至2018年8月底，私募基金总规模达到了12.8万亿，规模达到了新的历史高度。其中已备案私募证券投资基金36086只，已登记私募证券投资基金管理人8880家，基金规模2.40万亿元。
            </p>
            <p>
                 2018年中国资本市场波动性显著增强，A股市场跌跌不休、新低不断，资本避险情绪升温。同时监管政策日趋严格，短期来看进一步减缓了行业的增速和规模。A股正式纳入MSCI新兴市场指数，成为中国资本市场国际化进程中的一个重要里程碑。放眼全球，国际经济环境错综复杂，全球经济复苏开始面临压力与挑战，全球贸易争端不断，欧元区经济增速疲弱，美元强势上涨对新兴市场造成冲击……
            </p>
            <p>
                总的来说，作为中国资本市场最重要的力量之一，中国对冲基金已经处于快速发展阶段，年轻而又生命力旺盛，前面的道路曲折但又前景光明宽阔无限。在成长为资本市场的擎天大树的漫漫征途中，中国对冲基金难免会遭遇挫折、问题与困境，需要行业所有参与者的共同努力，群策群力助推中国对冲基金行业健康规范发展。
            </p>
        </div>
        <div v-show="tabIndex===2" class="tab-content" @wheel.stop>
           <p>
               中国对冲基金年会每年一届，是中国最专业、最高端、最具影响力的对冲基金盛会，"分享、发展、责任"是每位对冲基金管理人的共同参会精神（分享---分享国内对冲基金精英智慧；发展---共同促进国内对冲基金行业蓬勃发展；责任---为行业发展贡献力量是从业者的荣誉与责任），推动行业健康规范发展是年会的重大使命。
           </p>
           <p>
               私募排排网以助推中国对冲基金健康发展为已任，打造中国对冲基金豪门盛宴，诚意邀请中国对冲基金管理人及有志于中国对冲基金事业的机构和精英每年聚首一次，一起分享经验与智慧，一起为伟大的中国对冲基金事业贡献力量。
           </p>
        </div>
        <div v-show="tabIndex===3" class="tab-content" @wheel.stop>
            <dl>
                <dt><span></span>政府机构携手金融机构合力打造对冲基金行业顶级盛宴</dt>
                <dd>对冲基金的蓬勃发展为我国的经济发展贡献了积极的正能量，是完善我国资本市场的一股最重要的力量。政府机构携手专业的金融机构合力打造对冲基金行业的盛会，推送地方的优惠政策，促进金融创新发展，推动对冲基金的发展，树立行业的标杆地位，打造多赢局面。</dd>
                <dt><span></span>国内规模最大规格最高的对冲基金行业盛会</dt>
                <dd>对冲基金在我国近几年高速发展，吸引着全世界的目光，海内外机构在这片热土扎根发芽茁壮成长。国际著名对冲基金、国内对冲基金机构、公募资管、券商资管、期货资管、保险资管、QFII、QDII等众多机构共襄盛举；股票策略、管理期货、相对价值策略、事件驱动策略、债券基金、宏观策略、组合基金和复合策略等多种策略百花齐放争先斗艳。各大机构云集，参会者超千人，共同打造国内规模最大规格最高的对冲基金行业盛会。</dd>
                <dt><span></span>大资管时代下金融创新的推进，展示品牌创造价值盛宴</dt>
                <dd>"开拓创新、追求卓越"是对冲基金行业发展的动力，金融创新是我国的必然趋势，也是国家大力扶持的发展方向，整合行业资源，共同探讨行业全新的业务合作模式，对冲基金年会是与会者展示品牌的良机，创造价值的盛宴，并在更高层次、更大范围内为合作伙伴提供创造价值的平台和空间。</dd>
                <dt><span></span>搭建零距离交流平台，推动对冲基金行业快速发展</dt>
                <dd>中国对冲基金年会邀请海内外著名的对冲基金机构进行精彩的路演与资金对接；以论坛形式紧扣行业热点，前瞻性探讨行业相关议题，为推动行业发展出谋划策；高端酒会汇集各大行业精英和资金方，打造高端休闲零距离的交流平台。</dd>
                <dt><span></span>百家媒体支持、超常规宣传力度，重锤锻造对冲基金年度盛典一流品牌形象</dt>
                <dd>百多家强势媒体大容量、多渠道、广覆盖的传播，会前、会中、会后，通过主流平面、网络等新媒体资源，发动为期数月的持续宣传报道，内容涵盖预热文章、企业广告、论坛直播、专题制作、媒体专访、会刊制作等。</dd>
            </dl>
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
          idx:2,
          tabIndex:1,
      }
  },
  components: {
    container
  },
  methods:{
  }
}
</script>
<style>
.about{
   /* background: url(../assets/images/introduction.jpg) center no-repeat;
   background-size: 100% 100%; */
}
.tab{
    width: 85%;
    height: 80px;
    line-height: 80px;
    border: 1px solid #fef4d9;
    color: #fdf5d8;
    font-size: 24px;
    margin: 4% auto;
}
.tab li{
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    cursor: pointer;
}
.tab li:nth-of-type(2){
    border-left: 1px solid #fef4d9;
    border-right: 1px solid #fef4d9;
}
.tab li.active{
    color: #31070b;
    font-weight: bold;
    background: linear-gradient(to bottom,#fffdb3,#f4d278);
    background: -moz-linear-gradient(to bottom,#fffdb3,#f4d278);
    background: -webkit-linear-gradient(to bottom,#fffdb3,#f4d278);
}
.tab-content{
    width: 85%;
    height: 50%;
    margin: 0 auto;
    text-align: left;
    overflow: auto;
    box-sizing: border-box;
    padding-right: 10px;
}
.tab-content p{
    margin-top: 20px;
    font-size: 16px;
    line-height: 30px;
    text-indent: 2em
}
.tab-content dl dt{
    margin-top: 20px;
    font-size: 20px;
    color: #fdf5d8;
}
.tab-content dl dt span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #fdf5d8;
    margin-right: 10px;
}
.tab-content dl dd{
    font-size: 16px;
    line-height: 30px;
    text-indent: 2em;
    margin-top: 10px;
}
@media screen and (max-width: 1700px){
    .tab{
        margin-top: 64px;
        margin-bottom: 20px;
    }
}
@media screen and (max-width: 1500px){
    .tab{
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        margin-top: 80px
    }
    .tab-content p{
        margin-top: 16px;
        font-size: 14px;
        line-height: 26px;
        text-indent: 2em  
    }
    .tab-content dl dt{
        margin-top: 16px;
        font-size: 16px;
        color: #fdf5d8;
    }
    .tab-content dl dd{
        font-size: 14px;
        line-height: 26px;
        text-indent: 2em;
        margin-top: 10px;
    }
}
@media screen and (max-width:1370px){
    .tab{
        border-right-width: 2px;
    }
}
</style>