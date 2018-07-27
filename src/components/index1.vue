<template>
    <div>
      <div class="yin" v-show='logKg'></div>
      <div id="banner-tong" @mousemove='Byyd()' class='clearfloat'>
        <!--        进入子页面数据       接受子页面传回-->
          <slidezj :slides='slides' @onchange='slideemit'></slidezj>
      </div>
      <div id="main-tong" class="clearfloat">
        <div id="main">
          <ul class="main-ul clearfloat">
            <li class="main-li" v-for='(item,index) in mainTong' :key='index' @mouseover='moveGO($event,index)'  @mouseout='outGO($event,index)'>
              <div class="main-li-case">
                <img :src="item.src" alt=""/>
                <div class="main-hidden" :class='{mainHidden:index===hiddencz}'></div>
                <a class="main-case-a main-case-x"  :class='{mainCaseXz:index===hiddencz}' href="#"></a>
                <a class="main-case-a main-case-y"  :class='{mainCaseYz:index===hiddencz}' href="#"></a>
              </div>
            </li>
          </ul>
          <!--案例按钮-->
          <div class="main-case clearfloat">
            <div class="main-case-top"></div>
            <div class="main-case-con clearfloat">
              <img class="main-case-img" src="../assets/images/text_recommend.png" alt=""/>
              <a class="main-case-an" href="#" @mouseover='almoveGO' @mouseout='aloutGO'>
                <span :class='{mainCaseSpan:anSpan}'></span>
              </a>
            </div>
            <div class="main-case-bottom"></div>
          </div>

          <!--弹窗按钮-->
          <div class="main-project clearfloat">
            <div class="main-project-top clearfloat"></div>
              <div class="main-project-con clearfloat">
                <a class="main-project-a " :class='"main-project-btn"+(index+1)' @click='tanclick(index)'  v-for='(item,index) in logSj.length' :key='index' href="javascript:void(0);">
                  <span class="main-project-span " :class='"main-project-span"+(index+1)'></span>
                </a>
                <!--弹窗组件                                       传入开关状态       传入数据-->
                <dialogzj @on-close="tanchuang" :suoyin='logSy' :kaiguan='logKg' :shuju='logSj' ></dialogzj>
              </div>
            <div class="main-project-bottom clearfloat"></div>

          </div>

          <!--介绍-->
          <div class="main-flow clearfloat">
            <div class="main-flow-top"></div>
            <div class="main-flow-con clearfloat">
              <div class="main-flow-con-box">
                <img src="../assets/images/head.jpg" alt=""/>
                <p>冰艺工作室’国内优秀互联网建设平台</p>
                <p>创始人：国内优秀设计师站酷推荐设计师、韩冰云</p>
                <p>Ice art was founded in 2010, is by a group of professional and unique team of IT elite.
                <p>All along, Iceart close to network development trend of age of art..</p>
                <a class="main-flow-24" href="">
                  <span></span>
                </a>
              </div>
              <div class="main-flow-con-right clearfloat">
                <img src="../assets/images/text_fuwu.png" alt=""/>
                <img class="service-img2" src="../assets/images/service_logo.png" alt=""/>
                <div class="service-box">
                  <img src="../assets/images/service_btn.png" alt=""/>
                  <p>致力于视觉传达领域,提供企业形象管理,视觉创意设计网站建设与维护、多媒体设计制作等服务, 目前已形成一套科学完整、高效的设计运作体系，凭借高品位的设计风格、精湛的制作工艺..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="main-flow-bottom"></div>
        </div>
      </div>
      <div id="footer" :class='{footerYd:clfooter}'></div>

    </div>
</template>

<script type="text/ecmascript-6">
  import slidezj from '@/zujian/slide'
  import dialogzj from '@/zujian/dialog'
    export default {
      components:{
        slidezj,
        dialogzj
      },
      data(){
        return {
          hidden:false,
          anSpan:false,
          hiddencz:-1,
          slides: [
            {
              src1: require('../assets/images/banner1-zi.png'),
              src2:require('../assets/images/banner1.png'),
            },
            {
              src1: require('../assets/images/banner2-zi.png'),
              src2:require('../assets/images/banner2.png'),
            },
            {
              src1: require('../assets/images/banner3-zi.png'),
              src2:require('../assets/images/banner3.png'),
            },
            {
              src1: require('../assets/images/banner4-zi.png'),
              src2:require('../assets/images/banner4.png'),
            },
            {
              src1: require('../assets/images/banner5-zi.png'),
              src2:require('../assets/images/banner5.png'),
            },
            {
              src1: require('../assets/images/banner6-zi.png'),
              src2:require('../assets/images/banner6.png'),
            }
          ],
          mainTong:[
            {
              src: require('../assets/images/main1.jpg'),
            },
            {
              src: require('../assets/images/main2.png'),
            },
            {
              src: require('../assets/images/main3.png'),
            },
            {
              src: require('../assets/images/main4.jpg'),
            },
            {
              src: require('../assets/images/main5.jpg'),
            },
            {
              src: require('../assets/images/main6.jpg'),
            },
          ],
          logSj:[
            {
              txt:"ICEART冰艺从创办以来始终以出众的视觉艺术设计和应用表现能力影响着我们的每一个客及每一个使用者。" +
              "每个作品都能带给观众真正意义上的视觉享受。在传达品牌理念的同时始终能以用户体验为核心进行创新设计，" +
              "满足您的任何创新需求。我们拥有业界最顶尖的视觉设计师，" +
              "最专业的设计团队和设计流程规范会为您的企业提升品质、提高价值。"
            },
            {
              txt:"界面就是软件应用它本身，不是一份对软件应用功能的图形化说明书，不是对软件应用功能与任务的图形化翻译，它就是软件应用本身，并且与之浑然天成。我们提供最好的用户体验，让您去开发原生应用。"
            },
            {
              txt:"通综合表现能力、感知能力、想象能力，将艺术的形式美感应用于日常生活紧密相关的设计中，使之不但具有审美功能，还具有实用功能，为您的公司或产品增强美感，发挥特性。"
            },
            {
              txt:"我们就是在用设计的方式帮助客户解决一种商业问题。我们认为，设计需要的不是凭空而生“创意”，而是一双会寻找的眼睛，和一个会分析的头脑，让标志具有形、意和视觉美感，我们具备这些！"
            },
            {
              txt:"以用户体验为基础进行的人机交互设计是要 考虑用户的背景、使用经验以及在操作过程中的感受，从而设计符合最终用户的产品，使得最终用户在使用产品时愉悦、符合自己的逻辑、有效完成并且是高效使用产品。"
            },
            {
              txt:" 以“视觉”作为沟通和表现的方式。透过多种方式来创造和结合符号、图片和文字，借此作出用来传达想法或讯息的视觉表现。帮助贵公司的产品向广大的消费者转达一种信息，一种理念。"
            },
          ],
          logKg:false,
          logSy:0,
          scrolltop:0,
          keshiH:0,
          wendH:0,
          clfooter:false

        }
      },
      mounted() {
        window.addEventListener('scroll', this.hua)
      },
      methods:{
//        滑轮
        hua(){

          this.scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
//          console.log( this.scrolltop)
          this.keshiH=document.documentElement.clientHeight;
          this.wendH= document.body.scrollHeight;
//          console.log(this.wendH-this.keshiH-this.scrolltop)
          if(this.wendH-this.keshiH-this.scrolltop<=200){
            this.clfooter=true;
          }else if (this.wendH-this.keshiH-this.scrolltop>250){
            this.clfooter=false;
          }
        },

//        背景跟随
        Byyd(ev){
          var main=document.getElementById('banner-tong')
          document.onmousemove=function(ev){
            var ev=ev||window.event;
//                获取鼠标位置
            var mousex=ev.pageX/10;
//                获取可视区宽度
            var pageW=document.documentElement.clientWidth/2/10;
            var place=-mousex+(pageW);
            main.style.backgroundPositionX=place+"px";
          }
        },
//        main移入移出
        moveGO(event,index){
          event.currentTarget.getElementsByClassName('main-li-case')[0].setAttribute('style','bottom:30px;transition:0.3s');
          this.hiddencz=index;
        },
        outGO(event){
          event.currentTarget.getElementsByClassName('main-li-case')[0].setAttribute('style','bottom:14px;transition:0.3s')
          this.hiddencz=-1;
        },

//        案例按钮移入移出
        almoveGO(){
          this.anSpan=true;
        },
        aloutGO(){
          this.anSpan=false;
        },
//        弹窗按钮
        tanclick(index){
          this.logSy=index;
          this.logKg=true;

        },

//       弹窗开关   弹窗页面传回的
        tanchuang(){
          this.logKg=false;
        },

//        接受轮播页面返回
        slideemit(index){
//          console.log(index)
        }

      },

    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-family: "Microsoft YaHei";
    background: #F2F2F2;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .clearfloat:before {
    display: table;
    content: "";
  }
  .clearfloat:after {
    display: table;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .clearfloat {
    zoom: 1;
  }
  #banner-tong{
    width: 100%;
    /*overflow: hidden;*/
    padding-top: 80px;
    height: 400px;

    background:#000403 url("../assets/images/follow.jpg")center top no-repeat;
  }

  /*main*/
  #main-tong {
    width: 100%;
    background: #F2F2F2;
    margin-top: 170px;
  }
  #main{
    width: 935px;
    margin: 0 auto;
    background: #F2F2F2;
  }
  .main-li{
    float: left;
    display: inline;
    position: relative;
    width: 302px;
    height: 215px;
    margin-right: 14px;
    background: url("../assets/images/bg_case_f.png") center bottom no-repeat;
  }
  .main-li:nth-child(3n+1){
    margin-right: 0;
  }
  .main-li-case{
    width: 262px;
    height: 145px;
    padding: 20px;
    background: url("../assets/images/bg_case.png")no-repeat;
    position: absolute;
    bottom: 14px;
  }
  .main-hidden{
    width: 262px;
    height: 148px;
    background: #000;
    opacity: 0.5;
    position: absolute;
    left: 20px;
    top: 20px;
    display: none;
  }
  .main-hidden.mainHidden{
    display: block;
  }
  .main-case-a{
    position: absolute;
    width: 61px;
    height: 61px;
    top: 60px;
    display: none;
    transition: 0.5s;
  }
  .main-case-x{
    background: url("../assets/images/zoom-icon.png")no-repeat;
    left: 40px;
  }
  .main-case-y{
    background: url("../assets/images/readmore-icon.png")no-repeat;
    right: 40px;
  }
  .main-case-x.mainCaseXz{
    transition: 0.5s;
    display: block;
    left: 80px;
  }
  .main-case-y.mainCaseYz{
    transition: 0.5s;
    display: block;
    right: 80px;
  }


  .yin{
    width: 100%;
    height: 100%;
    position: fixed;
    background: #494949;
    z-index: 999;
    opacity: 0.8;
  }




  .main-case{
    width: 935px;
    /*height: 50px;*/
    background: aqua;
    margin: 0 auto;
  }
  .main-case-top{
    height: 27px;
    background: url("../assets/images/box_t.png")no-repeat;
  }
  .main-case-con{
    padding-left: 29px;
    padding-right: 29px;
    background: url("../assets/images/box_m.png")repeat-y;
  }
  .main-case-img{
    float: left;
    display: block;
  }
  .main-case-an{
    display: block;
    width: 160px;
    height: 41px;
    float: right;
    background: url("../assets/images/recommend_read_more.png")no-repeat;
  }
  .main-case-an span{
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s;
    background: url("../assets/images/recommend_read_more.png")no-repeat;
    background-position: 0% -41px;
  }
  .main-case-an span.mainCaseSpan{
    opacity: 1;
  }
  .main-case-bottom{
    height: 27px;
    background: url("../assets/images/box_b.png")no-repeat;
  }

  /*弹窗*/

  .main-project{
    width: 935px;
    /*height: 27px;*/
    margin-top: 20px;
  }
  .main-project-top{
    height: 27px;
    background: url("../assets/images/box_t.png")no-repeat;
  }
  .main-project-con{
    padding-left: 29px;
    padding-right: 9px;
    background: url("../assets/images/box_m.png")repeat-y;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }
  .main-project-a{
    width: 285px;
    height: 90px;
    float: left;
    position: relative;
  }
  .main-project-btn1{
    margin-right: 28px;
    background: url("../assets/images/box1.png")no-repeat;
  }
  .main-project-btn2{
    background: url("../assets/images/box2.png")no-repeat;
  }
  .main-project-btn3{
    background: url("../assets/images/box3.png")no-repeat;
  }
  .main-project-btn4{
    margin-top: 42px;
    margin-right: 28px;
    background: url("../assets/images/box4.png")no-repeat;
  }
  .main-project-btn5{
    margin-top: 42px;
    background: url("../assets/images/box5.png")no-repeat;
  }
  .main-project-btn6{
    margin-top: 42px;
    background: url("../assets/images/box6.png")no-repeat;
  }
  .main-project-span{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;

  }
  .main-project-span1{
    background: url("../assets/images/box1.png")no-repeat;
    background-position: 0% -94px;
  }
  .main-project-span2{
    background: url("../assets/images/box2.png")no-repeat;
    background-position: 0% -94px;
  }
  .main-project-span3{
    background: url("../assets/images/box3.png")no-repeat;
    background-position: 0% -94px;
  }
  .main-project-span4{
    background: url("../assets/images/box4.png")no-repeat;
    background-position: 0% -94px;
  }
  .main-project-span5{
    background: url("../assets/images/box5.png")no-repeat;
    background-position: 0% -94px;
  }
  .main-project-span6{
    background: url("../assets/images/box6.png")no-repeat;
    background-position: 0% -94px;
  }
  .main-project-bottom{
    height: 27px;
    background: url("../assets/images/box_b.png")no-repeat;
  }




  /**/

  /*flow*/
  .main-flow{
    width: 935px;
    margin-top: 20px;
    position: relative;
    /*background: aqua;*/
  }
  .main-flow-top{
    height: 22px;
    display: block;
    background: url("../assets/images/box2_t.png")no-repeat;
  }
  .main-flow-con{
    width: 935px;
    float: left;
    height: 310px;
    background: url("../assets/images/box2_m.png")repeat-y;
  }
  .main-flow-con-box{
    width: 252px;
    font-size: 12px;
    color: #787878;
    line-height: 21px;
    position: relative;
    float: left;
    left: 25px;
  }
  .main-flow-24{
    display: block;
    width: 90px;
    height: 49px;
    position: absolute;
    top: 10px;
    left: -30px;
    background: url("../assets/images/label.png")no-repeat;
  }
  .main-flow-24 span{
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: url("../assets/images/label.png")no-repeat;
    background-position: 0% -49px;
  }
  .main-flow-con-right{
    float: right;
    width: 545px;
    margin-right: 30px;
  }
  .service-img2{
    margin-top: 20px;
    float: left;
  }
  .service-box{
    float: left;
    font-size: 12px;
    line-height: 19px;
    color: #787878;
    margin-top: 20px;
    width: 325px;
  }
  .main-flow-bottom{
    width: 935px;
    height: 22px;
    display: block;
    /*position: absolute;*/
    /*bottom: 10px;*/
    background: url("../assets/images/box2_b.png")no-repeat;
  }
  #footer{
    width: 100%;
    height: 267px;
    background: url("../assets/images/bg_foot.png")center top no-repeat;
    z-index: 99;
    position: fixed;
    left: 0;
    bottom: -267px;
    transition: 0.5s;
  }
  #footer.footerYd{
    bottom: 0;
  }
</style>
