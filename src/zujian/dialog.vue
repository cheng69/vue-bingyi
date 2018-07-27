<template>
    <div>
      <div class="pop" v-if='kaiguan'>
        <div class="pop-dialog" v-show='index===suoyin' :class='"pop-dialog"+(index+1)' v-for='(item,index) in shuju' :key='index'>
          <div class="pop-btn">
            <span class="pop-span" @click='closeTc'></span>
          </div>
          <div class="pop-con">{{item.txt}}</div>
        </div>
      </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        shuju:{
          type:Array,
        },
        kaiguan:{
          type:Boolean,
        },
        suoyin:{
//          type:Number,
        }
      },
      data() {
        return{
          popindex:-1
      }
      },
      methods:{
        closeTc(){
          this.$emit('on-close')
        }
      },
    }
</script>

<style scoped>
  .pop{
    margin: auto;
    width: 646px;
    height: 420px;
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  }
  .pop-dialog{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .pop-dialog1{
    background: url("../assets/images/pop1.png")no-repeat;
  }
  .pop-dialog2{
    background: url("../assets/images/pop2.png")no-repeat;
  }
  .pop-dialog3{
    background: url("../assets/images/pop3.png")no-repeat;
  }
  .pop-dialog4{
    background: url("../assets/images/pop4.png")no-repeat;
  }
  .pop-dialog5{
    background: url("../assets/images/pop5.png")no-repeat;
  }
  .pop-dialog6{
    background: url("../assets/images/pop6.png")no-repeat;
    overflow: hidden;
  }
  .pop-btn{
    display: block;
    position: absolute;
    right: 28px;
    top: 20px;
    height: 14px;
    width: 14px;
    cursor: pointer;
    background: url('../assets/images/close.png')no-repeat;
  }
  .pop-span{
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    background: url('../assets/images/close.png')no-repeat;
    background-position: 0% -14px;
    transition: 0.5s;
  }
  .pop-span:hover{
    opacity: 1;
  }
  .pop-con{
    position: absolute;
    width: 500px;
    height: 110px;
    color: #fff;
    top: 250px;
    left: 66px;
    font-size: 14px;
  }

</style>
