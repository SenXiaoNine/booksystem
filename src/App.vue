<template>
    <div id="app">
    <nav class="nav">
        <div class="lay">
            <img src="./assets/nls_logo_white.png" class="left">
            <ul class="middle">
                <router-link tag="li" to="/shouye" activeClass="active">首页</router-link>
                <router-link tag="li" to="/shujifenlei" activeClass="active">书籍分类</router-link>
                <router-link tag="li" to="/shujipaihang" activeClass="active">书籍排行</router-link>
                <router-link tag="li" to="/shujituijian" activeClass="active">书籍推荐</router-link>
                <router-link tag="li" to="/zuozhefenlei" activeClass="active">作者分类</router-link>
            </ul>
            <img class="right" src="./assets/neusoftlogo.png">
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import catalog from './components/catalog'
  export default {
    name: 'App',
    data(){
      return{
          
      }
    },
    components:{
      catalog
    }
    
  }

</script>

<style lang="scss">
  html{height:100%;}
  body{
    font-size:20px;
    height:100%;
  }
  *{
    margin:0;
    padding:0;
  }
  ul,li{
    list-style:none;
  }
  #app{
    height:100%;
  }
 .nav{
    width:100%;
    height:80px;
    background:#1f8dd6;
    z-index:199;
    .lay{
        width:1200px;
        margin:0 auto;
        .left{
            float:left;
            height:60px;
            margin:10px;
        }
        .middle{
            float:left;
            height:80px;
            list-style: none;
            li{
                display: inline-block;
                height:80px;
                line-height:80px;
                font-size:25px;
                width:150px;
                color:#fff;
                text-align: center;
                cursor: pointer;
            }
            .active{
                font-weight: bolder;
            }
        }
        .right{
            float:right;
            height:60px;
            margin:10px;
        }
    }
    // .nav-bar{
    //   flex:1;
    //   height:100%;
    //   text-align:center;
    //   line-height:0.44rem;
    //   color:#808080;
    //   position:relative;
    // }
    // .active{
    //   color:#000;
    //   font-weight:bold;
    // }
  }
  
</style>
