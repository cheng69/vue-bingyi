<template>
    <div>
      <div id="nav-tong" @mousemove='mouseGO()'>
        <div id="nav">
          <img class="nav-img" src="../assets/images/case-ban.png" alt=""/>
        </div>
      </div>
      <div id="nav2-tong" class="clearfloat">
        <div id="nav2" class="clearfloat">
          <ul>
            <li class="location location1">LOCATION</li>
            <li class="location location2"><a href="#">Home</a></li>
            <li class="location location2"><a href="#">Case</a></li>
          </ul>
          <span class="nav-span">
                <a  href="#">2015 Official</a>
            </span>
        </div>
      </div>

      <!---->
      <div id="case-tong" class="clearfloat">
        <div id="case">
          <div class="case-weap">
                <span class="case-return">
                    <span class="case-returns"></span>
                </span>
<!--          点击按钮-->
            <a v-for='(dian,index) in 4' :class='["case-btn"+(index+1),{"case-btn-xin":btnXZ===index}]'
               href="javascript:void(0);" class="case-btn"
               @click='btngo($event,index)' >
            </a>
          </div>
          <div class="case-split"></div>
        </div>
        <!--循环的小盒子-->
        <div class="content  clearfloat">
          <div v-for='(item,index) in caseC.list' :key='index' class="content-yin" :class='item.type'>
            <div class="content-box" :class='{"content-box-xz":boxXZ===index}' @mouseout='mout(index)' @mouseover='mover(index)'>
              <div class="content-con">
                <img :src="item.coverImg" alt=""/>
                <div class="content-fire"></div>
                <a href="#" class="content-a"></a>
              </div>
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
          caseC:[],
          boxXZ:-1,
          btnXZ:-1,

//          切换特效需要的
          contentL:0,
          contentH:0,
          Globle:['allBlock', 'Type0', 'Type1', 'Type2', 'Type3'],
//          滑轮
          scrolltop:0,
          keshiH:0,
          wendH:0,
          clfooter:false
        }
      },
      mounted(){
          this.$axios.get('/static/json.json').then(con=>{
//            var GLOBLE=GLOBLE ||{};
            this.caseC=con.data[0].data;
//            获取数据的数量长度
            this.contentL=con.data[0].data.list.length;
//            防止页面还没渲染完成
            setTimeout(()=>{
              let conYin=document.getElementsByClassName('content-yin');

//              获取小盒子高度
              this.contentH=conYin[0].offsetHeight;
              //计算大盒子高度
              var warpheight=Math.ceil(this.contentL/3)*this.contentH;
              document.getElementsByClassName('content')[0].style.height=warpheight+'px';

              //将浮动布局转换成定位布局
              for (let item of conYin){
                 let left=item.offsetLeft;
                 let top=item.offsetTop;
                 item.style.top=top+'px';
                 item.style.left=left+'px';
              };
              for (let item of conYin){
                item.style.position='absolute';
              };
            },10);
          });
          window.addEventListener('scroll', this.hua);
          this.mouseGO();
      },

      methods:{
//        点击导航菜单
        btngo(event,index){
          this.btnXZ=index;
          let arrbtn=document.getElementsByClassName('case-btn');
          this.Globle[0]=document.getElementsByClassName('content-yin')
          this.Globle[1]=document.getElementsByClassName('type1')
          this.Globle[2]=document.getElementsByClassName('type2')
          this.Globle[3]=document.getElementsByClassName('type3')
          this.Globle[4]=document.getElementsByClassName('type4')
//          调用方法  重置布局
          this.reset();
          for(let i of this.Globle[0]){
            i.style.display='none'
          }
          for (let i of this.Globle[index+1]){
            i.style.display='block'
          }
//          this.Globle[index+1].style.display='block';
          this.layout(this.Globle[index+1])
        },
        //    将显示的块  重新布局
        layout(arrblock){
           for(var y=0;y<arrblock.length;y++){
//                判断在哪一列
             let indexx=y%3;
//                判断在哪一行  下取整
             let indexy=Math.floor(y/3);
             console.log(indexx,indexy)
             arrblock[y].style.left=indexx*308+'px';
             arrblock[y].style.top=indexy*215+'px';

           }
          let height=Math.ceil(arrblock.length/3)*215;
          console.log(arrblock.length)
          document.getElementsByClassName('content')[0].style.height=height+'px';
        },
//        恢复原始布局
        reset(){
          for (let i of this.Globle[0]){
            i.style.display='block'
          }
          this.layout(this.Globle[0])
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

        mover(index){
          this.boxXZ=index
        },
        mout(){
          this.boxXZ=-1
        },

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
          }
      }
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

  /*case*/
  #case-tong{
    width: 100%;
    background:  #F2F2F2 url("../assets/images/bj2.jpg")top repeat-x;
  }
  #case{
    width: 935px;
    height: 180px;
    margin: 0 auto;
  }
  .case-weap{
    height: 100px;
    position: relative;
    text-align: center;

    /*margin-top: -50px;*/
  }
  .case-return{
    display: block;
    height: 32px;
    width: 32px;
    position: absolute;
    bottom: -14px;
    z-index: 98;
    left: 210px;
    background: url("../assets/images/reset.png")no-repeat;
  }

  .case-returns{
    width: 100%;
    height: 100%;
    opacity: 1;
    display: block;
    background: url("../assets/images/reset2.png")no-repeat;
  }
  .case-return:hover{
    background: url("../assets/images/reset2.png")no-repeat;

  }
  .case-btn{
    display: block;
    width: 93px;
    height: 93px;
    position: absolute;
    bottom: -14px;
    background: url("../assets/images/case_btn1.png")0px 0px no-repeat;
  }
  .case-btn1{
    background-position: 0px 0px;
    left: 270px;
  }
  .case-btn2{
    background-position: -104px 0px;
    left: 374px;
  }
  .case-btn3{
    background-position: -207px 0px;
    left: 478px;
  }
  .case-btn4{
    background-position: -309px 0px;
    left: 582px;
  }
  .case-btn-xin{
    /*height: 93px;*/
    /*transition: 0.5s;*/
    background-position-y: -100px;
  }
  .case-weap .case-btn-xin2{
    background-position-y: -100px;
  }

  .case-split{
    width: 935px;
    height: 60px;
    position: absolute;
    background: url("../assets/images/case_btn_split.png")center top no-repeat;
  }
  .content{
    position: relative;
    width: 935px;
    /*height: 2000px;*/
    margin: 0 auto;
  }

  .content-yin{
    width: 302px;
    float: left;
    margin-left: 6px;
    height: 215px;
    background: url("../assets/images/bg_case_f.png") center bottom no-repeat;
    position: relative;
    transition: 0.5s;
  }
  .content-box {
    width: 302px;
    height: 185px;

    /*background: aqua;*/
    position: absolute;
    background: url("../assets/images/bg_case.png") no-repeat;
    bottom: 14px;
    transition: 0.5s;
  }
  .content-box.content-box-xz{
    bottom:30px;
  }
  .content-box.content-box-xz .content-fire{
    display: block;
  }
  .content-box.content-box-xz .content-a{
    display: block;
    top: 60px;
  }
  .content-con{
    width: 262px;
    height: 145px;
    padding: 20px;
    position: relative;
  }
  .content-fire{
    position: absolute;
    top: 20px;
    left: 20px;
    width: 262px;
    height: 148px;
    background: #000;
    opacity: 0.5;
    display: none;
  }
  .content-a{
    width: 61px;
    height: 61px;
    display: block;
    position: absolute;
    left: 120px;
    top: 30px;
    display: none;
    transition: 0.5s;
    background: url("../assets/images/readmore-icon.png")no-repeat;
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
