<template>
    <div>
      <div id="header" class='clearfloat'>
        <div class="cang"></div>
        <div class="container">
          <a href="#" class="logo">
            <span class="logo-img"></span>
          </a>

          <div class="container-right">
            <!--    自带的激活状态--指定class    精准-->
            <router-link active-class="active" exact :to="{name:'index'+(index+1)}" v-for='(item,index) in 4' :key='index'>
               <span class=" container-btn" :class='["container-nav"+(index+1)]' @click="navClick($event,index)">
                <span class="container-span " :class='"container-span"+(index+1)'></span>
              </span>
            </router-link>

            <router-link to="footer" target="_blank">
              <span class="official">直接大跳转到新footer</span>
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <!-- 这里是点击 上面router-link   跳转的页面    也就是子路由 -->
        <router-view></router-view>
      </div>

      <!--底部-->
        <footerzj></footerzj>

    </div>
</template>

<script type="text/ecmascript-6">
  import footerzj from '@/components/footer'

  export default {
      data(){
        return{
          xz:0,
        }
      },
      components:{
        footerzj
      },
      created(){
//        const bookId=this.$router.params.id;
      },
      mounted(){

//        this.xz=sessionStorage.getItem('isSelect')
      },
      methods:{
          navClick(event,index){
            this.xz=index;

//            var onerBtn= document.getElementsByClassName('container-btn')
//            for(let item of onerBtn){
//              item.style.backgroundPositionY='0px'
//            }
//            event.currentTarget.style.backgroundPositionY='-41px'
          }
      },
      computed:{

      }

    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: "Microsoft YaHei";
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
  #header{
    width: 100%;
    height: 63px;
    position: fixed;
    top: 0;
    left: 0;
    z-index:99999
  }
  .container{
    width: 935px;
    /*height: 48px;*/
    margin: 0 auto;

  }
  .cang{
    width: 100%;
    height: 63px;
    opacity: 0.9;
    background: url("../assets/images/bg_head.png")repeat-x;
    position: absolute;
    top: 0;
    left: 0;
  }
  .logo{
    position: relative;
    display: block;
    width: 182px;
    height: 38px;
    background: url("../assets/images/logo.png")no-repeat;
    margin-top: 10px;
    float: left;
  }
  .logo:hover .logo-img{
    transition: 0.5s;
    opacity: 1;
  }
  .logo-img{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: url("../assets/images/logo.png")0% -38px;
  }
  .container-right{
    float: right;
    height: 40px;
    line-height: 40px;
    /*background: aqua;*/
    margin-top: 10px;
    /*display: inline;*/
  }
  .container-btn{
    float: left;
    margin-right: 40px;
    height: 40px;
    /*width: 44px;*/
    position: relative;
    cursor: pointer;
    background: url("../assets/images/nav.png")no-repeat;
  }
  .official{
    float: left;
    height: 40px;
    position: relative;
    color: #F4F4F4;
    font-size: 14px;

  }
  .official:hover{
    transition: 0.5s;
    color: #A7DD0E;
  }
  .container-nav1{
    width: 44px;
    background-position: -1px 0px;
  }
  .container-nav2{
    width: 42px;
    background-position: -93px 0px;
  }
  .container-nav3{
    width: 85px;
    background-position: -177px 0px;
  }
  .container-nav4{
    width: 80px;
    background-position: -303px 0px;
  }
  .container-nav5{
    margin-right: 0px;
    width: 68px;
    background-position: -427px 0px;
  }

  .container-span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: url("../assets/images/nav.png");
  }
  .container-ti{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background: url("../assets/images/nav.png");
  }
  .container-span1 {
    background-position: -1px -41px;
  }
  .container-span2{
    background-position: -93px -41px;
  }
  .container-span3{
    background-position: -177px -41px;
  }
  .container-span4{
    background-position: -303px -41px;
  }
  .container-span5{
    background-position: -427px -41px;
  }

  /*<!--<router-link to="index1">-->*/
  /*<!--<span class="container-nav1 container-btn" @click="navClick($event)">-->*/
  /*<!--<span class="container-span container-span1" ></span>-->*/
  /*<!--</span>-->*/
  /*<!--</router-link>-->*/
  /*<!---->*/
  /*<!--<router-link to="index2">-->*/
  /*<!--<span class="container-nav2 container-btn" @click="navClick($event)">-->*/
  /*<!--<span class="container-span container-span2"></span>-->*/
  /*<!--</span>-->*/
  /*<!--</router-link>-->*/
</style>
