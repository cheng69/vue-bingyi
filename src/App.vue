<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
}
</script>

<style>
#app {

}
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
/*.router-link-exact-active>.active{*/
  /*background-position-y: -41px !important;*/

/*}*/
.active .container-btn{
  background-position-y: -41px !important;
}
</style>
