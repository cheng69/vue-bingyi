<template>
    <div>
      <div id="link-tong">
        <div id="link" class="clearfloat">
          <a v-for='(item,index) in 5' href="" class="link-ico" :class="'link-ico'+item" @mouseover='voerGo($event,index)' @mouseout='outGo($event,index)'>
            <span class="link-span" :class="['link-span'+item,{'link-sp-xz':item===shu}]"></span>
          </a>

        </div>
        <div id="copy">
          <p>Copyright © 2010-2015<span>IceArt</span>All Internet</p>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          shu:-1
        }
      },
      methods:{
        voerGo(event,index){
          this.shu=index+1;
          console.log('aa')
//          event.currentTarget.getElementsByClassName('link-span')[0].setAttribute('style','opacity:1;')
        },
        outGo(event,index){
//          event.currentTarget.document.getElementsByClassName('link-span')[0].setAttribute('style','opacity:0;')
          this.shu=-1

        }
      }
    }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: "Microsoft YaHei";
    background: #F2F2F2;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  #link-tong{
    width: 100%;
    height: 92px;
    background: url("../assets/images/out_line.png")center repeat-x;
    padding: 28px 0px 28px 0px;
  }
  #link{
    width: 600px;
    height: 92px;
    margin: 0 auto;
  }
  .link-ico{
    display: block;
    width: 92px;
    height: 92px;
    float: left;
    margin-right: 34px;
    position: relative;
  }
  .link-ico1{
    background: url("../assets/images/out_btn.png")no-repeat;
  }
  .link-ico2{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -125px 0;
  }
  .link-ico3{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -251px 0;
  }
  .link-ico4{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -378px 0;
  }
  .link-ico5{
    margin:0;
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -502px 0;
  }
  .link-span{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 0.5s;
  }
  .link-span.link-sp-xz{
    opacity: 1;
  }
  .link-span1{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: 0px -93px;
  }
  .link-span2{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -125px -93px;
  }
  .link-span3{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -251px -93px;
  }
  .link-span4{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -378px -93px;
  }
  .link-span5{
    background: url("../assets/images/out_btn.png")no-repeat;
    background-position: -502px -93px;
  }


  /*copy*/
  #copy{
    width: 100%;
    text-align: center;
    padding-bottom: 270px;

  }
  #copy p{
    padding-top: 20px;
    font-size: 13px;
    color: #929292;
  }
  #copy p span{
    color: #92BE24;
  }


</style>
