<template>
 <div class="app-container">
    <!--2:路由显示其它模块-->
    <router-view></router-view>
    <!--3:mui tabbar-->
    	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<img src="../public/img/bottom-nav/icon_nav_training_hl.png" class="nav_bottom">
				<div class="mui-tab-label">运动</div>
			</router-link>

			<router-link class="mui-tab-item" to="/member">
				<img src="../public/img/bottom-nav/icon_nav_discovery_hl.png" class="nav_bottom">
				<div class="mui-tab-label">发现</div>
			</router-link>

			<router-link class="mui-tab-item" to="/shop">
				<img src="../public/img/bottom-nav/icon_nav_follow_hl.png" class="nav_bottom">
				<div class="mui-tab-label">社区</div>
			</router-link>

			<router-link class="mui-tab-item" to="/search">
				<img src="../public/img/bottom-nav/icon_nav_me_hl.png" class="nav_bottom">
				<div class="mui-tab-label">我</div>
			</router-link>

		</nav>
 </div>
</template>
<style>
.app-container .nav_bottom{
  width: 25px;
  display: inline-block;
  padding-top: 5px;

}
.app-container .mui-tab-label{
  font-size: 12px;
  color:#584F60;
}
.app-container .mui-tab-item{
  opacity: 0.7;
}
.app-container .mui-tab-item.router-link-active{
opacity: 1;
}

</style>
<script>
export default{
    data(){
      return {

			};
    },
    methods:{

    },
    created() {
		},
		mounted(){

		}
  }
</script>
