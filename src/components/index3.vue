<template>
    <div>
      <div id="nav-tong" @mousemove='mouseGO()'>
        <div id="nav">
          <img class="nav-img" src="../assets/images/contacts.png" alt=""/>
        </div>
      </div>
      <div id="nav2-tong" class="clearfloat">
        <div id="nav2" class="clearfloat">
          <ul>
            <li class="location location1">LOCATION</li>
            <li class="location location2"><a href="#">Home</a></li>
            <li class="location location2"><a href="#">Contacts</a></li>
          </ul>
          <span class="nav-span">
                <a  href="#">2015 Official</a>
            </span>
        </div>
        <div id="yy"></div>
      </div>


      <div id="main-tong">
        <div id="main">
          <div class="main-img">
            <img src="../assets/images/contact_title.png" alt=""/>
          </div>
          <div class="mail clearfloat">
            <div class="mail-top"></div>
            <div class="mail-con clearfloat">
              <a class="mail-btn mail-btn1" href="#" @mouseover='mailover($event)' @mouseout='mailout($event)'>
                <span class="mail-span mail-span1"></span>
              </a>
              <a class="mail-btn mail-btn2" href="#" @mouseover='mailover($event)' @mouseout='mailout($event)'>
                <span class="mail-span mail-span2"></span>
              </a>
              <a class="mail-btn mail-btn3" href="#" @mouseover='mailover($event)' @mouseout='mailout($event)'>
                <span class="mail-span mail-span3"></span>
              </a>
            </div>
            <div class="mail-bottom"></div>
          </div>
          <div class="data">
            <div class="clearfloat">
              <div>
                <label for="nick" class="nick data-btn">
                  <span class="data-btn-span"></span>
                </label>
                <input @focus='jFocus($event)' @blur='jBlur($event)' type="text" name="nick" id="nick" class="focus" value="填写您的姓名或名称"/>
              </div>
              <div>
                <label for="email" class="email data-btn">
                  <span class="data-btn-span data-btn-span2"></span>
                </label>
                <input @focus='jFocus($event)' @blur='jBlur($event)'  type="text" name="email" id="email" class="focus" value="填写您的联系邮箱"/>
              </div>

            </div>
            <div class="clearfloat">
              <div>
                <label for="tel" class="tel data-btn">
                  <span class="data-btn-span data-btn-span3"></span>
                </label>
                <input @focus='jFocus($event)' @blur='jBlur($event)' type="text" name="tel" id="tel" class="focus" value="填写您的联系电话或手机号码"/>
              </div>
              <div>
                <label for="address" class="address data-btn">
                  <span class="data-btn-span data-btn-span4"></span>
                </label>
                <input @focus='jFocus($event)' @blur='jBlur($event)' type="text" name="address" id="address" class="focus" value="填写您的地址或公司地址"/>
              </div>
            </div>
            <div class="clearfloat">
              <label for="note" class="note data-btn">
                <span class="data-btn-span data-btn-span5"></span>
              </label>
              <!--<input type="text" name="note" id="note"/>-->
              <textarea @focus='jFocus($event)' @blur='jBlur($event)' style="resize: none;" name="note" id="note"class="focus" >浙江省
全力打造国内互联网品牌建设，服务于各种企业品牌平台 &nbsp;联系QQ：1275181746 &nbsp;专注冰艺互动

Efforts to build domestic Internet brand building. and serve a variety of enterprise plaforms..
                    </textarea>
            </div>
            <div class="clearfloat">
              <a href="#" class="tj" @mouseover='tjover()' @mouseout='tjout()'>
                <span class="tj-span" :class='{"tj-span-xz":tj}'></span>
              </a>
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
//          滑轮
          scrolltop:0,
          keshiH:0,
          wendH:0,
          clfooter:false,
          tj:false,
        }
      },
      mounted(){
        this.mouseGO();
        document.addEventListener("mousewheel",this.hua);
        document.addEventListener("DOMMouseScroll",this.hua);
      },
      methods:{
//        背景跟随
        mouseGO(){
          let navYD=document.getElementById('nav-tong');
          document.onmousemove=function (ev) {
            var ev=ev||window.event;
            var mousex=ev.pageX/10;
            var pagewidth=document.documentElement.clientWidth/2/10;
            var place=-(mousex+pagewidth)
            navYD.style.backgroundPositionX=place+'px';
          }
        },
//        滑轮
        hua(){
          this.scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
          this.keshiH=document.documentElement.clientHeight;
          this.wendH=document.body.scrollHeight;
          if(this.wendH-this.keshiH-this.scrolltop<=200){
            this.clfooter=true;
          }else if (this.wendH-this.keshiH-this.scrolltop>250){
            this.clfooter=false;
          }
        },

//       获取焦点
        jFocus(event){
          event.currentTarget.parentNode.firstChild.firstChild.style.opacity='1';
//             当前的value                   原始值
          if (event.currentTarget.value==event.currentTarget.defaultValue){
            event.currentTarget.value='';
          }
        },
//        失去焦点
        jBlur(event){
          event.currentTarget.parentNode.firstChild.firstChild.style.opacity='0';
//          如果当前value为空    恢复默认值
          if (!event.currentTarget.value){
            event.currentTarget.value=event.currentTarget.defaultValue;
          }

        },
//        失去焦点

//        中间标题hover
        mailover(event){
          event.target.style.opacity='1';
        },
        mailout(event){
          event.target.style.opacity='0';
        },
//        提交按钮hover
        tjover(){
          this.tj=true;
        },
        tjout(){
          this.tj=false
        },
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

  #yy{
    width: 100%;
    height: 79px;
    background: url("../assets/images/bj2.jpg")repeat;
  }

  #main-tong{
    width: 100%;
    background: #F2F2F2;
  }
  #main{
    width: 935px;
    margin: 0 auto;
  }
  .main-img{
    width: 935px;
    text-align: center;
    padding-bottom: 20px;
  }

  .mail{
    width: 935px;
  }
  .mail-top{
    height: 23px;
    background: url("../assets/images/box_t.png");
  }
  .mail-con{
    background: url("../assets/images/box3_m.png")repeat;
    padding: 0px 29px 0px 9px;
  }
  .mail-btn{
    width: 272px;
    height: 146px;
    display: block;
    float: left;
    margin-right: 29px;
    position: relative;
    background: url("../assets/images/lx.png")no-repeat;
  }
  .mail-btn1{
    background-position: 0px -14px;
    margin-left: 20px;
  }
  .mail-btn2{

    background-position: -301px -14px;
  }
  .mail-btn3{
    background-position: -602px -14px;
    margin-right: 0;
  }
  .mail-span{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: url("../assets/images/lx.png")no-repeat;
    transition: 0.3s;
  }
  .mail-span1{
    background-position: 0px -195px;
  }
  .mail-span2{
    background-position: -301px -195px;
  }
  .mail-span3{
    background-position: -602px -195px;
  }
  .mail-bottom{
    height: 23px;
    background: url("../assets/images/box_b.png")no-repeat;
  }


  /*data*/
  .data{
    width: 935px;
    margin-top: 30px;

  }
  .data input{
    width: 388px;
    padding: 0px 14px 0px 14px;
    color: rgb(195,195,195);
    border: none;
    float: left;
  }
  .data-btn{
    position: relative;
    width: 40px;
    height: 43px;
    line-height: 43px;
    float: left;
    display: block;
    margin-bottom: 15px;
  }
  .nick{
    background: url("../assets/images/nick.png")no-repeat;
  }
  .email{
    margin-left: 21px;
    background: url("../assets/images/email.png")no-repeat;
  }
  .tel{
    height: 42px;
    background: url("../assets/images/tel.png")no-repeat;
  }
  .address{
    height: 42px;
    margin-left: 21px;
    background: url("../assets/images/address.png")no-repeat;
  }
  .note{
    height: 139px;
    background: url("../assets/images/note.png")no-repeat;
  }
  .data-btn-span{
    width: 100%;
    height: 100%;
    opacity: 0;
    background: url("../assets/images/nick.png")no-repeat;
    position: absolute;
    background-position: 0% -43px;
    top: 0;
    left: 0;
    transition: 0.3s;
  }
  .data-btn-span2{
    background: url("../assets/images/email.png")no-repeat;
    background-position: 0% -43px;
  }
  .data-btn-span3{
    background: url("../assets/images/tel.png")no-repeat;
    background-position: 0% -43px;
  }
  .data-btn-span4{
    background: url("../assets/images/address.png")no-repeat;
    background-position: 0% -43px;
  }
  .data-btn-span5{
    background: url("../assets/images/note.png")no-repeat;
    background-position: 0% -139px;
  }
  #nick,#email,#tel,#address{
    height: 43px;
    line-height: 43px;
    background: url("../assets/images/input.png")top right;
  }
  #note{
    width: 892px;
    height: 139px;
    line-height: 30px;
    border: none;
    padding-top: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    overflow: hidden;
    background: url("../assets/images/contact_bg_textarea.png")top right;
  }
  .focus{
    font-size: 13px;
    color: rgb(195,195,195);
  }

  .tj{
    display: block;
    height: 41px;
    line-height: 41px;
    width: 161px;
    float: right;
    position: relative;
    background: url("../assets/images/tj.png")no-repeat;
  }
  .tj-span{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: url("../assets/images/tj.png")no-repeat;
    background-position: 0% -41px;
    transition: 0.3s;
  }
  .tj-span.tj-span-xz{
    opacity: 1;
  }

  #footer{
    width: 100%;
    height: 267px;
    background: url("../assets/images/bg_foot.png")center top no-repeat;
    z-index: 99;
    position: fixed;
    left: 0;
    bottom: -267px;
    transition:0.5s;
  }

  #footer.footerYd{
    bottom: 0;
  }

</style>
