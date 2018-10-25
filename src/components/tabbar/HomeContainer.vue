<template>
  <div class="app_header">
    <div class="nav_hearder">
      <div>
        <router-link to="/home"><img class="nav_hearder samll_img" src="http://127.0.0.1:3001/img/index/ic_body_add.png"></router-link>
        <span>运动</span>
        <router-link to="/home"><img class="samll_img" src="http://127.0.0.1:3001/img/index/icon_home_search.png"></router-link>
      </div>
      <div class="nav_navbar" @click="nav_click">
        <span class="nav_navbar_active">首页</span>
        <span>跑步</span>
        <span>行走</span>
        <span>骑行</span>
        <span>健身</span>
        <span>瑜伽</span>
      </div>
      <div>
        <span id="nav_line" class="nav_line"></span>
      </div>
      <ul class="container" id="container">
        <li id="index">
          <div class="coach">
            <img class="samll_img" src="http://127.0.0.1:3001/img/index//icon_running_coach.png"  align="AbsMiddle">
            <span>Coach</span>
          </div>
      <!--第一个卡片-->
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <router-link to="/home">
                  <div>
                    <img width="10px" align="AbsMiddle" src="http://127.0.0.1:3001/img/index/ic_data_auto_record.png">
                    <span class="samll_font">有自动生成的记录</span>
                    <img width="5px" align="AbsMiddle" src="http://127.0.0.1:3001/img/index/icon_comment_more.png">
                  </div>
                  <div class="samll_font flex_box">
                    <span class="big_font">101<span class="samll_font dark_color">分钟</span></span>
                    <span>今日运动<span class="green_color"> — </span>分钟</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
      <!--第二个卡片-->
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <div class="flex_box samll_font">
                  <span class="normal_font">已参加的课程</span>
                  <button class="my_button" ><img aligh="AbsMiddle" src="http://127.0.0.1:3001/img/index/icon_add.png"><span>添加</span></button>
                </div>
                <router-link to="/home">
                  <div class="samll_font flex_box">
                    <span class="normal_font font_bold">2分钟体验课程</span>
                    <span class="span_text">2分钟<span> · </span>k1</span>
                  </div>
                </router-link>
                <router-link to="/home">
                  <div class="samll_font flex_box">
                    <span class="normal_font font_bold" >5分钟瑜伽体验课程</span>
                    <span class="span_text">5分钟<span class="green_color"> · </span>k1</span>
                  </div>
                </router-link>
                <router-link to="/home">
                  <div class="more_font">
                    查看全部
                  </div>
                </router-link>
              </div>
            </div>
          </div>
      <!--第三个卡片-->
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <div class="samll_font card_three">
                  今天是第6天，1个训练17分钟。继续加油！
                </div>
                <div class="normal_font dark_color">
                  7天放松减压训练营
                </div>
                <div class="lesson_bg" style="background-image:url('http://127.0.0.1:3001/img/index/7day_relax.jpg')"></div>
                <router-link to="/home">
                  <div class="more_font">
                    点击查看更多
                  </div>
                </router-link>
              </div>
            </div>
          </div>
      <!--第四个卡片-->
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <div class="normal_font dark_color">
                  训练计划
                </div>
                <router-link to="/home">
                  <div class="lesson_bg" style="background-image:url('http://127.0.0.1:3001/img/index/plan_bg.png')"></div>
                </router-link>
                <router-link to="/member">
                  <div class="canvas_box">
                    <canvas id="c3" height="150">
                      您的浏览器版本太低，请升级!!!
                    </canvas>
                    <div class="canvas_text">
                      <div class="samll_font">14天前评估</div>
                      <div class="big_font">塑性F1</div>
                      <span class="normal_font dark_color">评估详情 &nbsp;<img width="5px" height="8.33px" align="AbsMiddle" src="http://127.0.0.1:3001/img/index/icon_comment_more.png"></span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/home">
                  <button class="my_button big_button">获取智能训练计划</button>
                </router-link>
              </div>
            </div>
          </div>
      <!--第五个卡片-->
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <div class="samll_font card_three">
                  养成运动习惯,让你每天里好身材近一点.
                </div>
                <div class="normal_font dark_color">
                  7天习惯养成训练营
                </div>
                <div class="lesson_bg" style="background-image:url('http://127.0.0.1:3001/img/index/7day_habit.jpg')"></div>
                <router-link to="/home">
                  <div class="more_font">
                    点击查看详情
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div style="height:60px"></div>
        </li>
        <li id="walk">
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <router-link to="/home">
                  <span>
                    <span class="normal_font dark_color">累计行走距离 </span>
                    <img width="5px" height="8.33px" align="AbsMiddle" src="http://127.0.0.1:3001/img/index/icon_comment_more.png">
                  </span>
                </router-link>
                <div class="samll_font flex_box">
                  <router-link to="/home">
                    <span class="big_font">10.76<span class="samll_font dark_color">公里</span></span>
                  </router-link>
                  <router-link to="/home">
                    <span class="samll_font">等级 H2</span>
                  </router-link>
                </div>
                <div class="pro_bg">
                  <div class="pro"></div>
                </div>
                 <div class="walk_navbar" @click="walk_click">
                  <span class="walk_navbar_active" data-src="http://127.0.0.1:3001/img/index/outdoor_video_hiking.png">行走</span>
                  <span data-src="http://127.0.0.1:3001/img/index/outdoor_tab_walking_icon.png">健走</span>
                  <span data-src="http://127.0.0.1:3001/img/index/outdoor_tab_tramping_icon.png">徒步</span>
                  <span data-src="http://127.0.0.1:3001/img/index/outdoor_tab_climbing_icon.png">登山</span>
                </div>
              </div>
              <div class="walk_box">
                <div id="map_container"></div>
                <div id="r-result">
                  <div class="optionpanel">
                    <select id="stylelist" onchange="changeMapStyle(this.value)"></select>
                  </div>
                </div>
                <div class="walk_btn"><button  class="normal_font dark_color">设定目标 &nbsp;<img width="5px" align="AbsMiddle" src="http://127.0.0.1:3001/img/index/icon_comment_more.png"></button></div>
                <div class="walk_img" >
                  <div class="img1"><img width="25px" src="http://127.0.0.1:3001/img/index/tc_icon_suit_setting.png"></div>
                  <div class="img2" id="img2">
                    <img width="25px" src="http://127.0.0.1:3001/img/index/outdoor_video_hiking.png">
                    <div>行走</div>
                  </div>
                  <div><img width="70px" src="http://127.0.0.1:3001/img/index/rt_training_icon_map.png"></div>
                </div>
              </div>
              <!-- <recommendation ></recommendation> -->
            </div>
          </div>
        </li>
        <li id="fit">健身</li>
        <li id="run">跑步</li>
        <li id="bike">骑行</li>
        <li id="yoga">瑜伽</li>
      </ul>
    </div>
  </div>
</template>
<style>
/*第一个卡片*/
.app_header{
  background-color: #eee;
  overflow: hidden;
}
.app_header .nav_hearder{
  background-color: #fff;
}
.app_header .nav_hearder>div{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  line-height:30px;
  font-size: 14px;
  padding: 0px 10px;

}
.app_header .nav_hearder .samll_img{
  width: 25px;
}
.app_header .nav_hearder .nav_navbar>span{
  font-size: 12px;
  color:#88828E;
}
.app_header .nav_hearder .nav_navbar .nav_navbar_active{
  color:#584F60;
  font-weight: bold;
}
.app_header .nav_hearder .nav_line{
  width: 12px;
  height: 2px;
  background-color: #584F60;
  margin: 0 6px;
}
.app_header .nav_hearder .container{
  list-style: none;
  padding: 0;
  margin: 0;
  width: 600%;
  padding-top: 5px;
}
.app_header .nav_hearder .container>li{
  padding: 0;
  margin: 0;
  float: left;
  width: 16.666%;
  overflow: hidden;
}
.app_header .nav_hearder .container .coach{
  font-size: 12px;
  color: #88828E;
  margin-left: 10px;
}
.app_header .nav_hearder .container .coach>span{
  padding-left: 10px;
}
.app_header .nav_hearder .mui-card{
  box-shadow: none;
  }
.app_header .nav_hearder .mui-card-content-inner .samll_font{
  font-size: 10px;
  color: #88828E;
  padding-left: 5px;
  padding-right: 10px;
}
.app_header .nav_hearder .mui-card-content-inner .green_color{
  color:#24C789;
}
.app_header .nav_hearder .mui-card-content-inner .big_font{
  font-size: 36px;
  color: #584F60;
  font-family:Keep;
}
.app_header .nav_hearder .mui-card-content-inner .font_bold{
  font-weight: 600;
}
.app_header .nav_hearder .mui-card-content-inner .flex_box{
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
/*第二个卡片*/
.app_header .nav_hearder .mui-card-content-inner .my_button{
  background-color: #24C789;
  border-radius: 15px;
  color: #fff;
  font-size:10px ;
  width: 75px;
  height: 25px;
}
.app_header .nav_hearder .mui-card-content-inner .my_button>img{
  width: 10px;
  margin-right: 5px;
}
.app_header .nav_hearder .mui-card-content-inner  .span_text{
  width: 75px;
  height: 25px;
  text-align: center;
}
.app_header .nav_hearder .mui-card-content-inner .more_font{
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
  color: #584F60;

}
.app_header .nav_hearder .mui-card-content-inner .normal_font{
  font-size:12px;
  color: #000;

}
/*第三张卡片样式*/
.app_header .nav_hearder .mui-card-content-inner .card_three{
  padding: 0;
  padding-bottom: 10px;
}
.app_header .nav_hearder .mui-card-content-inner .lesson_bg{
  height: 100px;
  background-size:cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 5px;
}
/*第四张卡片样式*/
.app_header .nav_hearder .mui-card-content-inner .big_button{
  width:100%;
  height:50px;
  border-radius: 30px;
  margin-top:8px;
  margin-bottom: 15px;
  font-size: 20px;
}
canvas{
  padding-top: 5px;
  width:100%;
}
.app_header .nav_hearder .mui-card-content-inner .canvas_box{
  position: relative;
}
.app_header .nav_hearder .mui-card-content-inner .canvas_box .canvas_text{
  position: absolute;
  top:20px;
  left:20px;
}
.app_header .nav_hearder .mui-card-content-inner .canvas_box .canvas_text>div{
  padding: 0;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
}
/*行走*/
/*第一个卡片*/
.app_header .nav_hearder .mui-card-content-inner .pro_bg{
  height:3px;
  background-color: #ddd;
  border-radius: 25px;
  margin: 12px 0;
}
.app_header .nav_hearder .mui-card-content-inner .pro{
  height: 100%;
  width: 52%;
  background-color: #DF858B;
  border-radius: 25px;
}
#walk .mui-card{
  margin:0;
}
#walk #r-result{
  display: none;
}
#walk .walk_navbar{
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #584F60;
}
#walk .walk_navbar .walk_navbar_active{
  color: #D88B8C;
}
#walk #map_container{
  width: 100%;
  height:300px;
}
#walk .walk_box{
  position: relative;
  height: 250px;
  overflow: hidden;
}
#walk .walk_btn{
  position: absolute;
  left: 40%;
  top: 10px;
  width: 10%;
}
#walk .walk_btn>button{
  color:#000;
  font-size: 12px;
  border-radius: 25px;
}
#walk .walk_box .walk_img{
  position: absolute;
  top:80px;
}
#walk .walk_box .walk_img .img1{
  padding: 19.7px 22.5px;
  border-radius: 50%;
  margin-right: 50px;
  background-color: #fff;
}
#walk .walk_box .walk_img .img2{
  padding: 24.3px 36px;
  border-radius: 50%;
  margin-right: 50px;
  color:#fff;
  background-color: #E2888A;
}
#walk .walk_box .walk_img>:last-child>img{
  position: relative;
  right: 0;
  top:25px;
}
#walk .walk_box .walk_img>div{
  display: inline-block;
  cursor: pointer;
}
</style>
<script type="text/javascript" src="http://lbsyun.baidu.com/custom/stylelist.js"></script>
<script>
 import recommendation from '../other_components/recommendation.vue'
  export default{
    data(){
      return {
        s:0,
        family_id:1
      };
    },
    methods:{
      nav_click:function(e){
        if(e.target.nodeName==="SPAN"){
          var span=e.target;
          var spans =span.parentElement.children;
          for(var span of spans){
            span.className=""
          }
          e.target.className="nav_navbar_active";

          for(var i=0;i<spans.length;i++){
            if(spans[i].className=="nav_navbar_active"){
              var nav_line =document.getElementById("nav_line");
              var container =document.getElementById("container");
              var width=screen.width;
              nav_line.style.transform=`translateX(${i*.178*width}px)`;
              container.style.transform=`translateX(-${i*width}px)`;
              if(i-this.s<2 && i-this.s>-2){
                nav_line.style.transition=".5s"
                container.style.transition="transform .3s"
              }else{
                nav_line.style.transition=""
                container.style.transition=""
              }
              this.s=i;
            }
          }
        }
      },
      walk_click:function(e){
        if(e.target.nodeName==="SPAN"){
          var span =e.target;
          var spans =span.parentElement.children;
          for(var span of spans){
            span.className="";
          }
          e.target.className="walk_navbar_active";
          var img =document.getElementById("img2").firstChild;
          var div =document.getElementById("img2").lastChild;
          div.innerHTML=e.target.innerHTML;
          img.src=e.target.getAttribute("data-src")
        }
      }
    },
    components:{
      "recommendation":recommendation
    },
    created() {

    },
    mounted(){
      var  c3 =document.getElementById("c3");
      var ctx = c3.getContext("2d");
      ctx.fillStyle="#C9FAEA";
      var x=c3.width/7.5;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1.5*x,150);
      ctx.lineTo(1.5*x,140);
      ctx.lineTo(2.5*x,140);
      ctx.lineTo(2.5*x,112);
      ctx.lineTo(3.5*x,112);
      ctx.lineTo(3.5*x,84);
      ctx.lineTo(4.5*x,84);
      ctx.lineTo(4.5*x,56);
      ctx.lineTo(5.5*x,56);
      ctx.lineTo(5.5*x,28);
      ctx.lineTo(6.5*x,28);
      ctx.lineTo(6.5*x,0);
      ctx.lineTo(7.5*x,0);
      ctx.lineTo(7.5*x,150);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      var sel = document.getElementById('stylelist');
      var map = new BMap.Map("map_container");
      var point = new BMap.Point(113.279416,23.141711);
      map.centerAndZoom(point, 18);
      changeMapStyle('grayscale')
      sel.value = 'grayscale';
      function changeMapStyle(style){
        map.setMapStyle({style:style});
      }
      var walk_img=document.querySelector("#walk #map_container+div+div+div");
      var left=(screen.width-340)/2;
      walk_img.style.left=`${left}px`;
    }
  }
</script>


