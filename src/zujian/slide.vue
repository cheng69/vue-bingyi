<template>
    <div @mouseover='clearinter' @mouseout='runinter'>
      <!--轮播图组件页面                          移入                   移出-->
      <div class="banner-weap clearfloat" >
        <div class="banner">
          <div class="banner-content">
              <img :src='slides[nowIndex].src1'  class="banner-text" alt=""/>
              <img :src='slides[nowIndex].src2' class="banner-img" alt=""/>
          </div>
        </div>
      </div>
      <div class="banner-dot">
        <ul class="banner-dot-ul">
          <li  v-for='(item,index) in slides' :key='index' @click='goto(index)'
               :class="['banner-li'+(index+1),{'banner-li-cx':index==nowIndex}]"
               class="banner-li"></li>
        </ul>
      </div>
      <div class="banner-wire"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        slides:{
          type:Array
        }
      },
//      加载完 执行一次
      mounted(){
        this.runinter();
      },
      data(){
        return{
          nowIndex:0,
          isShow:true
        }
      },
      methods:{
//        点击小点
        goto(index){
          setTimeout(()=>{
            this.nowIndex=index;
            this.$emit('onchange',index)
          })

        },
//        定时器
        runinter(){
          this.invId=setInterval(()=>{
            this.goto(this.next)
          },3000)
        },
//         停止
        clearinter(){
          clearInterval(this.invId)
        }
      },
      computed:{
//        下一页
        next(){
          if(this.nowIndex===this.slides.length-1){
           return 0;
          }else{
           return this.nowIndex+1;
          }
        }
      }
    }
</script>

<style scoped>
  /*进入动画*/
  .banner-weap{
    width: 100%;
    overflow: hidden;
  }
  .banner{
    width: 100%;
    height: 500px;
    position: relative;
    /*left: -100%;*/
    overflow: hidden;
  }
  .banner-content{
    width: 100%;
    /*height: 400px;*/
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }
  .banner-text{
    display: block;
    margin: 30px auto;
  }
  .banner-img {
    display: block;
    margin: auto;;
  }
  .banner-dot{
    width: 220px;
    height: 23px;
    margin: 0 auto;
  }
  .banner-li{
    float: left;
    width: 23px;
    height: 23px;
    margin-right: 1px;
    background: url("../assets/images/bg_button.png")no-repeat;
  }
  .banner-li1{
    background-position: 0px 0px;
  }
  .banner-li2{
    background-position: -23px 0px;
  }
  .banner-li3{
    background-position: -46px 0px;
  }
  .banner-li4{
    background-position: -69px 0px;
  }
  .banner-li5{
    background-position: -92px 0px;
  }
  .banner-li6{
    background-position: -115px 0px;
  }
  .banner-li7{
    background-position: -138px 0px;
  }
  .banner-li8{
    background-position: -161px 0px;
  }
  .banner-li9{
    background-position: -184px 0px;
  }
  .banner-li-cx{
    background-position-y: -23px;
  }
  .banner-wire{
    width: 723px;
    height: 16px;
    background: url("../assets/images/banner_f.png")no-repeat;
    margin: 0 auto;
  }

</style>
