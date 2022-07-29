<template>
  <div class="a">
    <img src="./assets/header.png"  width="100%" />
   <!-- 内容区 -->
   <div class="content">
      <!-- 工作环境 -->
   <div class="environment">
     <div class="icon"></div>
      <span>工作环境</span>
      <!-- 图片 -->
      <div><img src="./assets/header.png" alt=""/>
      <img src="./assets/header.png" alt=""/>
      <img src="./assets/header.png" alt=""/>
      </div>
   </div>
   <!-- 招聘要求 -->
    <div class="environment">
     <div class="icon"></div>
      <span>招聘要求</span>
       <div class="label">
          <span>性别</span>
           <span>性别</span>
            <span>性别</span>
       </div>

   </div>
   <!-- 工作内容 -->
     <div class="environment">
     <div class="icon"></div>
      <span>工作内容</span>
      <div class="jobContent" v-html="text"></div>
   </div>

   <!-- 温馨提醒 -->
     <div class="environment">
     <div class="icon"></div>
      <span>温馨提醒</span>
    <h3 v-html="WarmreMinder" class="WarmreMinder"></h3>
   </div>
   <!--工作时间-->
     <div class="environment">
     <div class="icon"></div>
      <span>工作时间</span>
      <div v-html="workTime.startTime" ></div>
       <div class="label" style="margin-top:40px;margin-left: -20px;" >
          <span v-for="(item,index) in workTime.timeicon" :key="index" >{{item}}</span>
          
       </div>

   </div>
   <!-- 请选择上班时间 -->


   <van-cell is-link >请选择上班时间</van-cell>
   <!-- 工作地址  -->
       <div class="environment" style="margin-top:20px" >
     <div class="icon"></div>
      <span>工作地址</span>
      
      <!-- <map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map> -->
<Map1 class="map"></Map1>


   </div>

   <!--机构信息 -->
  <div class="environment">
     <div class="icon"></div>
      <span>工作环境</span>
      <br/>
      <span class="a">致力于为国际跨越公司国内大中型企业提供国内优秀
的中高层管理人员以及专业技术人员</span>
      <!-- 图片 -->
      <div >
        <img src="./assets/1659046229658.jpg" alt=""/>
      <img src="./assets/1659046229658.jpg" alt=""/>
      <img src="./assets/1659046229658.jpg" alt=""/>
      </div>
      
   </div>


<div class="environment">
     
    <img src="./assets/1659046229658.jpg" alt=""/>
      <!-- 图片 -->
      <div class="cart">
        
       <span>兼职动漫英语翻译</span>
       <span style="color: #d86e2b;">150/天</span>
       <div style="position:relative;left:110px;top:-96px">喜羊羊动漫科技公司 </div>
       <div style="position:relative;left:306px;top:-67px;font-size: 1px;">深圳市</div>
             <div class="label" style="margin-left: 2px;margin-top: -10px;">
          <span style="margin:0 5PX ;">8:00-20:00</span>
           <span>男女不限</span>
         
       </div>
      </div>
      
   </div>

<div class="environment">
     
    <img src="./assets/1659046229658.jpg" alt=""/>
      <!-- 图片 -->
      <div class="cart">
        
       <span>兼职动漫英语翻译</span>
       <span style="color: #d86e2b;">150/天</span>
       <div style="position:relative;left:110px;top:-96px">喜羊羊动漫科技公司 </div>
       <div style="position:relative;left:306px;top:-67px;font-size: 1px;">深圳市</div>
             <div class="label" style="margin-left: 2px;margin-top: -10px;">
          <span style="margin:0 5PX ;">8:00-20:00</span>
           <span>男女不限</span>
         
       </div>
      </div>
      
   </div>

   <!-- 按钮 -->
   <!-- <button  style="width:50%;height: 60px;position:fixed;bottom: 0;left:0 ;z-index: 999;" >大号按钮</button>
   <button style="width:50%;height: 60px; position:fixed;bottom: 0;right: 0; z-index: 999;">大号按钮</button> -->
  <van-goods-action style="width:28rem">
  <van-goods-action-button type="warning" style="width:50px" text="收藏" />
  <van-goods-action-button type="danger" style="width:50%" text="立即报名" />
</van-goods-action>
  </div>
   
   </div>
 
</template>

<script>
import Map from '@/components/map.vue'
import Map1 from './components/map.vue'
export default {
  
 data() {
   return {
     text:`<span>
     1)大专以上学历，日语N1以上，有翻译工作经验更佳
<br/>(1)公司位置在惠州沥林，包食宿并且有班车接送，住宿
条件有空调和洗衣机。
     </span><br/><br/><span>
    (2)工作需要三班倒，倒班频率一周一次，倒班补贴一个
月200元-300元，每月加班50小时。
</span><br/><br/><span></span>(3)工作环境高温50来度左右，不需要长时间持续在高温
区域工作，高温补贴500元/月：粉尘和噪音部分区域有配
备口罩和耳塞，每年免费职业检查，确保健康状况(4)公
司全年在线生产，五一劳动或春节按需排班，发放劳动
法倍数的薪资，春节上班有相应的福利。入职即购买社
保，公积金入职次月购买。`,
WarmreMinder:`Tips:凡涉及到工作内容不符，收费、违法信息传播的工
作，请你警惕并收集证据向我们举报<span>`,
workTime:{
  startTime:`<span>开始日期：2021-11-28结束时间：2021-12-2
</span>`,
timeicon:['13:30-17:30','18:30-23:59','次日0000-2：00']
},
	longitude: 120.363172,
				latitude: 30.312212,
				scale: 13,
				markers:[
					{
						longitude: 120.363172,
						latitude: 30.312212,
						iconPath: './assets',
						width: 30,
						height: 30
					}
				]   
   }
 },
 components:{
    Map,
    Map1
}
}
</script>

<style lang="less" scoped>
 .a{
   
   width: 100%;
  //  height: 300px;
//  内容
.content{
  background-color:#f8f8f8;
  
   .environment{
    background-color:#ffffff;
     margin-bottom: 15px;
     padding-left: 20px;
     padding-top: 10px;
    
     .icon{
       width: 8px;
    height: 35px;
    background-color: #e36b17;
    margin-top: 10px; 
     } 
     span{
       font-size: 29px;
        position:relative; 
        left: 20px;
        bottom:40px ;
     } 
     img{
       width: 100px;
       height: 100px;
       border-radius: 10px;
       margin-right:10px;
     }
    //  招聘要求
    .label{
      margin-left: -10px;
    span{
      //  display: block;      
       width: 100%;
       font-size: 15px;
      background-color:#f78562;
      border-radius: 3px;
      text-align:center ;
      padding: 5px 8px;
      line-height: 70px;
      margin-inline-end:15px;
      font-weight: 200;
      color: #f9ebda;
    }
 
    }
       // 工作内容
    .jobContent{
      width: 100%;
      height: 100%;
      margin-top:-20px;
        
      span{
        
      }
    }
    // 温馨提示
    .WarmreMinder{
      margin-top:-25px ;
    font-size:18px;
    font-weight:450;
    color:#c7783b;
    }
    // 选择时间
    .selectTime{
      // width: 100%;
      // height: 100%;
    img{
      width: 30px;
      height: 30px;
      position: relative;
      left:  86%;
      top: -70px;
    }
    }

.map{
		// width: 80%;
		height: 300px;
    border-radius: 10px;
    margin-top: -30px;
    margin-right:-30px ;
	}
  .a{
    font-size: 14px;
      position: relative;
      left: 0;
      top: -20px;
  }
   .cart{
   background-color:#ffffff;
    width: 100%;
    // height: 100px;
    span{
       font-size: 16px;
       margin-right: 30px;
       position: relative;
       left: 110px;
       top:-100px;
    }

 }
  }
}
   
 }

 
</style>