<template>
  <div class="recommendation">
     <router-link to="/home">
      <span class="normal_font" >
        <span >累计行走距离 </span>
        <img width="5px" align="AbsMiddle" src="http://127.0.0.1:3001/img/index/icon_comment_more.png">
      </span>
    </router-link>
  </div>
</template>
<script>
 export default {
    data(){
      return {
        list:[],
        family_id:this.$route.params.id
      }
    },
    props:["family_id"] ,
    methods:{
     lessonList(){
          this.$http.get("/lesson/recommendation").then(result=>{
            this.list = result[0];
            console.log(this.list)
          });
      }
    },
    created(){
      this.lessonList();
    }

 }
</script>
<style>
 .recommendation .normal_font{
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size:12px;
    color: #000;
  }
</style>