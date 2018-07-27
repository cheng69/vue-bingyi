<template>
    <div>
      <div id="nav-tong" @mousemove='moveGO()'>
        <div id="nav">
          <img class="nav-img" src="../assets/images/aboutus-ban.png" alt=""/>
        </div>
      </div>
      <div id="nav2-tong" class="clearfloat">
        <div id="nav2" class="clearfloat">
          <ul>
            <li class="location location1">LOCATION</li>
            <li class="location location2"><a href="#">Home</a></li>
            <li class="location location2"><a href="#">About us</a></li>
          </ul>
          <span class="nav-span">
                <a  href="#">2015 Official</a>
            </span>
        </div>
      </div>

      <div id="main-tong">
        <div id="main">
          <div class="main-nav">
            <span class="main-btn main-btn1 " :class='["main-btn"+(index+1),{"main-btn-xin2":btnXZ==index,"main-btn-xin":btnhaver==index}]'
                  v-for='(item,index) in 4' :key='index'
                  @mouseover='btnover(index)' @mouseout='btnout(index)'
                  @click='btnCk(index)'
            ></span>
          </div>
          <!-- 第一栏-->
          <div  class="content" :class="{'content-xz':btnXZ==0}">
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/ab1.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/ab_name1.png" alt=""/>
                  <p>优艺客 国内具知名度的网络品牌建设，创始人韩雪冬（国内顶级优秀网页设计师）原韩雪冬工作室创始人。与“冰艺”网络品牌建设有多年长期的合作，
                    致力打造优秀的网络艺术建设平台
                    <br/>
                    <a href="http://www.uelike.com">"http://www.uelike.com"</a>
                    <a href="http://www.web-designers.cn">"http://www.web-designers.cn"</a>
                  </p>
                  <div class="con-in-an">
                    <a class="con-in-btn" href="#">
                      <span class="con-in-span"></span>
                    </a>
                    <a class="con-in-btn con-in-btn2" href="#">
                      <span class="con-in-span con-in-span2"></span>
                    </a>
                  </div>
                </div>
                <a href="#" class="ab-ue">
                  <span></span>
                </a>
              </div>
              <div class="con-bottom"></div>
            </div>
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/ab2.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/ab_name2.png" alt=""/>
                  <p>韩冰云工作室 国内优秀网路品牌建设平台，创始人韩冰云（国内优秀设计师摄影师）原韩冰云工作室创始人。
                    <br/>
                    现“冰艺”网络品牌建设首席设计师 设计总监，站酷推荐设计师、优秀网络品牌建设平台。

                    <br/>
                    <a href="//www.iceart.com.cn">"www.iceart.com.cn"</a>
                    <a href="http://www.iceart.me">"http://www.iceart.me"</a>
                  </p>
                  <div class="con-in-an">
                    <a class="con-in-btn" href="#">
                      <span class="con-in-span"></span>
                    </a>
                    <a class="con-in-btn con-in-btn2" href="#">
                      <span class="con-in-span con-in-span2"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="con-bottom"></div>
            </div>
          </div>
          <!-- 第二栏-->
          <div  class="content" :class="{'content-xz':btnXZ==1}">
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/ab3.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/ab_name3.png" alt=""/>
                  <p>
                    自创始之日起至今，始终保持超乎寻常的成长速度。我们是一支交融交互、创新、
                    视觉设计于一体的专业UI设计与策划团队，鼎力为国内外知名企业提供全方位多平台的服务解决方案。
                    以专业的交互设计、创新理念、视觉呈现，服务够内外企业多达100余家，
                    成功案例300余例。涉及IT、汽车、教育、房地产、金融等各个行业，
                    拥有包括中国移动、中国电信、联想、李宁、吉利集团、郝莲娜、张裕、
                    人民网、酷六网、中国日报（China Daily），精品传媒集团等企业在内的成功案例，
                    在国内拥有较高美誉。
                  </p>
                </div>
              </div>
              <div class="con-bottom"></div>
            </div>
            <div class="con-img">
              <img src="images/ab_big.png" alt=""/>
            </div>
          </div>
          <!-- 第三栏-->
          <div  class="content" :class="{'content-xz':btnXZ==2}">
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/ab4.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/ab_name4.png" alt=""/>
                  <p>

                    冰艺自创始之日起至今，始终保持超乎寻常的成长速度。我们是一支交融交互、
                    创新、视觉设计于一体的专业网络品牌建设设计策划团队，专业的交互设计、
                    创新理念、视觉呈现，服务于国内外企业多达100余家，成功案例200余例。
                    涉及IT、电子商务、教育、房地产、平台等各个行业。
                    我们的优势在于我们重视于每一份业务的设计质量，而不在意业务的数量多少，
                    提升客户网站形象是我们致力追求的业务目标。
                  </p>
                </div>
              </div>
              <div class="con-bottom"></div>
            </div>
            <div class="con-box">
              <div class="con-box-top"></div>
              <div class="con-box-in">
                <div class="con-box-one con-box-in-b">
                  <img src="../assets/images/zq1.png" alt=""/>
                  <p class="con-box-p">冰艺工作室秉持“拒绝平凡”的理念，致力于视觉传达领域，提供企业形象管理、视觉创意设计、网站建设与维护、多媒体设计制作等服务。目前已形成一套科学、完整、高效的设计运作体系，凭借高品位的设计风格、精湛的制作工艺，为不同客户提供不同风格的设计服务。
                  </p>
                </div>
                <div class="con-box-two con-box-in-b">
                  <img src="../assets/images/zq2.png" alt=""/>
                  <p class="con-box-p">全方位的设计服务，由一支实力强劲的研发团队及国内外顶尖水平的设计人才组成，突破与创新的理念，致力打造互联网优质品牌建设。通过将创意广告、平面设计等高级别的设计艺术与网站设计相融合，把互联网设计推向一个更高的艺术层次。
                  </p>
                </div>
                <div class="con-box-three con-box-in-b">
                  <img src="../assets/images/zq3.png" alt=""/>
                  <p class="con-box-p">我们要做的不仅是服务好每一位客户，更注重互联网品牌发展及信誉。紧贴网络时代的发展潮流，对中国网络应用的现状和趋势做已突破，不论您是需要简洁实用的小型展示性网站，还是大型网站,我们都有相应解决的方法。
                  </p>
                </div>
              </div>
              <div class="con-box-bottom"></div>
              <i class="con-i"></i>
            </div>
            <div class="con-cn"></div>
            <div class="con-text">
              <div class="con-box-top"></div>
              <div class="con-box-in">
                <div class="con-box-one con-box-in-b">
                  <p><a class="con-box-a" href="http://www.zcool.com.cn/u/256701/">WWW.ZCOOL.COM.CN (ZHANKU)</a></p>
                  <p class="con-box-p">冰艺工作室秉持“拒绝平凡”的理念，致力于视觉传达领域，提供企业形象管理、视觉创意设计、网站建设与维护、多媒体设计制作等服务。目前已形成一套科学、完整、高效的设计运作体系，凭借高品位的设计风格、精湛的制作工艺，为不同客户提供不同风格的设计服务。
                  </p>
                </div>
                <div class="con-box-two con-box-in-b">
                  <p><a class="con-box-a" href="http://my.68design.net/23784">WWW.68DESIGN.NET (LIANMENG)</a></p>
                  <p class="con-box-p">全方位的设计服务，由一支实力强劲的研发团队及国内外顶尖水平的设计人才组成，突破与创新的理念，致力打造互联网优质品牌建设。通过将创意广告、平面设计等高级别的设计艺术与网站设计相融合，把互联网设计推向一个更高的艺术层次。
                  </p>
                </div>
                <div class="con-box-three con-box-in-b">
                  <p><a class="con-box-a" href="http://hanicecloud.deviantart.com">WWW.DEVIANTART.COM (ICEART)</a></p>
                  <p class="con-box-p">我们要做的不仅是服务好每一位客户，更注重互联网品牌发展及信誉。紧贴网络时代的发展潮流，对中国网络应用的现状和趋势做已突破，不论您是需要简洁实用的小型展示性网站，还是大型网站,我们都有相应解决的方法。
                  </p>
                </div>
              </div>
              <div class="con-box-bottom"></div>
            </div>
          </div>
          <!-- 第四栏-->
          <div  class="content" :class="{'content-xz':btnXZ==3}">
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/member.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/member_name.png" alt=""/>
                  <p class="con-p">世界权威网站Deviantart.收录及推荐设计师，国内zcool站酷设计平台2010推荐设计师, 韩冰云工作室创始人.
                    <br/>
                    日本Webデザインサイト网站强力推荐品牌建设及设计师，2011年国外CSSCLIP首页推荐www.Cssclip.com.
                    <br/>
                    杭州联亿家科技有限公司资深设计总监，代表作品联亿家终端货柜（上市）.
                  </p>
                  <p style="display: none" class="con-p">
                    姓名: 韩冰云 (Ice-lolly)  性别: 男  主页: www.hanicecloud.cn   职业: 设计总监   居住: 杭州HangZhou
                    <br/>
                    出生: 1991.05.13   Q Q: 850309997   邮箱: ice@iceart.me
                  </p>
                  <div class="con-in-an">
                                <span class="con-in-tab con-xin0" href="#">
                                    <span class="con-tab-span"></span>
                                </span>
                    <span class="con-in-tab  con-in-tab2" href="#">
                                    <span class="con-tab-span con-tab-span2"></span>
                                </span>
                  </div>
                </div>
                <a href="#" class="ab-24">
                  <span></span>
                </a>
              </div>
              <div class="con-bottom"></div>
            </div>
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/member2.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/member2_name.png" alt=""/>
                  <p class="con-p">多年BS结构开发经验。具备强大的前后端开发能力 PHP MYSQL + JS CSS 。擅长调用各网站的OPANAPI。
                    <br/>
                    CS开发经验也十分丰富，主要是C#，熟悉WINDOWS消息处理机制，WINAPI调用，SOCKET网络编程， 长连接维持，断点续传输等解决方案。 2011年获得BAMBOOK程序达人赛冠军。
                  </p>
                  <p style="display: none" class="con-p">
                    姓名: 焦常云 (nsource)  性别: 男  职业: 攻城狮   居住: 石家庄
                    <br/>
                    出生: 1987.03.14   Q Q: 704940252   邮箱: jiaochangyun@gmail.com
                  </p>
                  <div class="con-in-an">
                                <span class="con-in-tab con-xin0" href="#">
                                    <span class="con-tab-span"></span>
                                </span>
                    <span class="con-in-tab  con-in-tab2" href="#">
                                    <span class="con-tab-span con-tab-span2"></span>
                                </span>
                  </div>
                </div>
              </div>
              <div class="con-bottom"></div>
            </div>
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/member3.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/member3_name.png" alt=""/>
                  <p class="con-p">优秀Web网站、系统开发工程师。网站、平台、移动设备 前后端项目开发服务。
                    <br/>
                    具备多年工作经验，曾为国内包括(浙江大学、南京大学)等多家高等院校开发门户网站、移动终端平台和服务.金额机构包括(广州发展银行、招商证券)等开发各类服务系统。
                  </p>
                  <p style="display: none" class="con-p">
                    姓名: 董洪杰(Dong)  性别: 男  主页: www.iceart.me   职业: Java/As3开发工程师   居住: 杭州 HangZhou
                    <br/>
                    出生: 1988.01.30   Q Q: 235581020     邮箱: dhj_7410@sina.com
                  </p>
                  <div class="con-in-an">
                                <span class="con-in-tab con-xin0" href="#">
                                    <span class="con-tab-span"></span>
                                </span>
                    <span class="con-in-tab  con-in-tab2" href="#">
                                    <span class="con-tab-span con-tab-span2"></span>
                                </span>
                  </div>
                </div>
              </div>
              <div class="con-bottom"></div>
            </div>
            <div class="con">
              <div class="con-top"></div>
              <div class="con-in">
                <div class="con-in-left">
                  <img src="../assets/images/member4.png" alt=""/>
                </div>
                <div class="con-in-right">
                  <img src="../assets/images/member4_name.png" alt=""/>
                  <p class="con-p">网页视觉前端设计师，多年网页设计制作经验。曾任职北大青鸟、龙文教育、
                    <br/>
                    中美集团首席设计师，并为多家知名企业如北大青鸟、龙文教育、北京语言大学、北京大学、中央民族大学等提供设计服务。
                  </p>
                  <p style="display: none" class="con-p">
                    姓名: 孙翰 (SunHan)  性别: 男  主页: www.s1989.com   职业: 网页设计师   居住: 北京 BeiJing
                    <br/>
                    出生: 1989.06.18   Q Q: 270153911     邮箱: 270153911@qq.com
                  </p>
                  <div class="con-in-an">
                                <span class="con-in-tab con-xin0" href="#">
                                    <span class="con-tab-span"></span>
                                </span>
                    <span class="con-in-tab  con-in-tab2" href="#">
                                    <span class="con-tab-span con-tab-span2"></span>
                                </span>
                  </div>
                </div>
              </div>
              <div class="con-bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" :class='{footerYd:clfooter}'></div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          btnXZ:0,
          btnhaver:false,
//          滑轮
          scrolltop:0,
          keshiH:0,
          wendH:0,
          clfooter:false
        }
      },
      mounted(){
        this.moveGO();
        window.addEventListener('scroll', this.hua);

      },
      methods:{
//        点击
        btnCk(index){
          this.btnXZ=index
        },
        btnover(index){
          this.btnhaver=index;
        },
        btnout(index){
          this.btnhaver=-1
        },
//        滑轮
        hua(){
          this.scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
          this.keshiH=document.documentElement.clientHeight;
          this.wendH=document.body.scrollHeight;
//          console.log(this.wendH-this.keshiH-this.scrolltop)
          if(this.wendH-this.keshiH-this.scrolltop<=150){
            console.log()
            this.clfooter=true;
          }else if (this.wendH-this.keshiH-this.scrolltop>150){
            this.clfooter=false;
          }

        },

//        背景跟随
        moveGO(){
          document.onmousemove=function (ev) {
            let navYD=document.getElementById('nav-tong');
            document.onmousemove=function (ev) {
              var ev=ev||window.event;
              var mousex=ev.pageX/10;
              var pagewidth=document.documentElement.clientWidth/2/10;
              var place=-(mousex+pagewidth)
              navYD.style.backgroundPositionX=place+'px';
            }
          }
        }
      },

    }
</script>

<style scoped>

  #nav-tong{
    width: 100%;
    /*overflow: hidden;*/
    padding-top: 80px;
    height: 150px;
    background:#04090C url("../assets/images/follow.jpg")center top no-repeat;
  }
  #nav{
    height: 130px;
    text-align: center;
    margin-top: 20px;
  }


  #nav2-tong{
    width: 100%;
    line-height: 35px;
    background: url("../assets/images/nav2.png");
    font-size: 11px;
  }
  #nav2{
    width: 935px;
    height: 35px;
    margin: 0 auto;
  }
  #nav ul{

  }
  .location{
    float: left;
    padding-left: 11px;
    margin-right: 18px;
    color: #787878;
  }
  .location a{
    color: #787878;
  }
  .location1{
    background: url("../assets/images/nav2_s.png")left center no-repeat;
  }
  .location2{
    background: url("../assets/images/nav2_c.png")left center no-repeat;
  }
  .nav-span{
    float: right;
    display: block;
  }
  .nav-span a{
    color: #787878;
    transition: 0.5s;
  }
  .nav-span a:hover{
    color: #6fa605;
  }

  #main-tong{
    width: 100%;
    background:  #F2F2F2 url("../assets/images/bj2.jpg")top repeat-x;
  }
  #main{
    width: 935px;
    margin: 0 auto;

  }
  .main-nav{
    width: 935px;
    height: 120px;
    position: relative;
    background: url("../assets/images/about_banner_bg_top.png")bottom no-repeat;
  }
  .main-btn{
    width: 93px;
    height: 93px;
    position: absolute;
    background: url("../assets/images/us_btn.png")no-repeat;
    bottom: 0;
    cursor:pointer;
  }
  .main-btn1{
    left: 270px;
  }
  .main-btn2{
    left: 374px;
    background-position: -104px 0px;
  }
  .main-btn3{
    left: 478px;
    background-position: -207px 0px;
  }
  .main-btn4{
    left: 582px;
    background-position: -309px 0px;
  }

  .main-btn-xin{
    background-position-y: -100px;
  }
  .main-btn-xin2{
    background-position-y: -100px;
  }




  /*��һ��*/
  .content{
    width: 935px;
    display: none;
  }
  .content.content-xz{
    display: block;
  }
  .con{
    position: relative;
    background: url("../assets/images/box_m.png")repeat;
    height: 207px;
    margin-bottom: 20px;
  }
  .con-top{
    width: 935px;
    height: 23px;
    background: url("../assets/images/box_t.png")no-repeat;
  }
  .con-in{
    width: 100%;
    height: 160px;
    position: relative;
  }
  .con-in-left{
    float: left;
  }
  .con-in-left img{
    margin: 0 26px 0 23px;
  }
  .con-in-right{
    float: left;
  }
  .con-in-right p{
    width: 550px;
    height: 69px;
    font-size: 13px;
    line-height: 22px;
    color: #808080;
  }
  .con-in-right p a{
    color: #808080;
  }
  .con-in-an{
    float: left;
    margin-left: 460px;
    margin-top: 15px;
  }

  .con-in-btn{
    width: 40px;
    height: 40px;
    float: left;
    display: block;
    position: relative;
    background: url("../assets/images/tool1.png")no-repeat;

  }
  .con-in-span{
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    opacity: 0;
    background: url("../assets/images/tool1.png")no-repeat;
    background-position: -1px -41px;
  }
  .con-in-btn2{
    margin-left: 10px;
    background-position: -48px 0px;
  }
  .con-in-span2{
    background-position: -48px -41px;
  }
  .con-bottom{
    width: 935px;
    height: 23px;
    background: url("../assets/images/box_b.png")no-repeat;
  }
  .ab-ue{
    position: absolute;
    display: block;
    width: 99px;
    height: 49px;
    background: url("../assets/images/ab-use.png")no-repeat;
    left: -6px;
    top: 20px;
  }
  .ab-ue span{
    position: absolute;
    display: block;
    width: 99px;
    height: 49px;
    opacity: 0;
    background: url("../assets/images/ab-use.png")no-repeat;
    background-position: 0% -49px;
  }


  /*�ڶ���*/



  /*������*/
  .con-box{
    width: 935px;
    position: relative;
    background: url("../assets/images/box_m.png")repeat;
  }
  .con-box-top{
    width: 935px;
    height: 23px;
    background: url("../assets/images/box_t.png")no-repeat;
  }
  .con-box-in{
    width: 935px;
    height: 247px;
  }
  .con-box-in-b{
    width: 260px;
    float: left;
    height: 247px;
    padding: 0px 23px 0px 23px;
  }
  .con-box-one{
    background: url("../assets/images/about_shu.png")right top repeat-y;
  }
  .con-box-two{
    background: url("../assets/images/about_shu.png")right top repeat-y;
  }
  .con-box-p{
    line-height: 23px;
    color: #808080;
    font-size: 11px;
    padding-top: 10px;
  }
  .con-box-bottom{
    width: 935px;
    height: 23px;
    background: url("../assets/images/box_b.png")no-repeat;
  }
  .con-i{
    position: absolute;
    width: 80px;
    height: 87px;
    display: block;
    top: -10px;
    right: 65px;
    background: url("../assets/images/top.png")no-repeat;
  }
  .con-cn{
    height: 81px;
    margin-top: 24px;
    background: url("../assets/images/about_b3.png")54px top no-repeat;
  }
  .con-text{
    width: 935px;
    background: url("../assets/images/box_m.png")repeat;
  }
  .con-box-a{
    color: #323232;
    font-size: 12px;
  }
  .con-box-a:hover{
    color: #80b400;
  }
  .con-in-tab{
    height: 40px;
    width: 40px;
    display: block;
    float: left;
    position: relative;
    background: url("../assets/images/tool1.png")no-repeat;
  }
  .con-in-tab2{
    background-position: -48px 0px;
  }
  .con-tab-span{
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    opacity: 0;
    background: url("../assets/images/tool1.png")no-repeat;
    background-position: 0 -40px;
  }
  .con-tab-span2{
    background-position: -48px -40px;
  }
  .con-xin0{
    background-position: 0 -40px;
  }
  .con-xin1{
    background-position: -48px -40px;
  }
  .ab-24{
    position: absolute;
    display: block;
    width: 99px;
    height: 49px;
    background: url("../assets/images/label.png")no-repeat;
    left: -6px;
    top: 20px;
  }
  .ab-24 span{
    position: absolute;
    display: block;
    width: 99px;
    height: 49px;
    opacity: 0;
    background: url("../assets/images/label.png")no-repeat;
    background-position: 0% -49px;
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
  .opacity{
    opacity: 1;
    transition: 0.5s;
  }
</style>
