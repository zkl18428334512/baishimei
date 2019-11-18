<template>
	<view class="content">
		<view class="header">经营数据</view>
		<view class="sm">
		<view class="p1">昨日销售额</view>	
		 <view class="p2">{{salemoney}} 元</view>
			</view>
			<view class="sp">
			<view class="p1">昨日毛利</view>	
			 <view class="p2">{{saleProfit}} 元</view>
				</view>
		<button class="btn1"  v-on:click="jump" >{{SalesAnalysis}}</button>	
		<button class="btn2"  v-on:click="jump1">{{Grossprofitanalysis}}</button>	
	</view>
</template>

<script>
	 import { mapState, mapMutations } from 'vuex' ;
	 import { parseTime } from '@/common/utils/tools.1.js';
	 import {LoadYesterdaySalesData} from '@/common/api/Reportform.js'
	 export default {
		data() {
			return {
			salemoney:'1000',
		    saleProfit:'10000',
			SalesAnalysis:'销售额分析',
			Grossprofitanalysis:'毛利分析',
			systemDate:''
			}
		},
		computed: mapState(['userInfo','userToken']), 
		onLoad:function () {
		this.addDate()
			this.yesterdaySales()
			console.log(this.userInfo)
            console.log(this.userToken)
		} 
		,
		methods:{
           jump(){
			   uni.navigateTo({
				   
				   url: '../salesanalysis/salesanalysis?id=销量走势&name=销售额分析'
			      
			   });
		   },
		   jump1(){
		   			   uni.navigateTo({
		   			     
						   
						   url: '../grossprofitanalysis/grossprofitanalysis?name=毛利分析'
		   			   });
		   },
		   yesterdaySales(){
			        LoadYesterdaySalesData({"access-token":this.userToken,beginDate:this.systemDate,searchType:2}).then((res)=>{
							console.log(res.data);
								let arr=res.data;
								this.saleProfit='';
								this.salemoney='';
								let a=0;
								let b=0;
							for(let i=0;i<arr.length;i++){
								
							  a=a+Number(arr[i].grossProfitPrice)
							  b=b+Number(arr[i].totalSalesPrice)
							}	
							    this.saleProfit=a
							    this.salemoney=b
						}).catch((err)=>{
					       console.log("error!",  err)
				})
		   },
		   addDate(){
			   let nowDate=new Date()
		       this.systemDate= parseTime(nowDate, '{y}-{m}-{d}')
			      console.log(this.systemDate)
		            }
			}
	}
</script>

<style>
	.header{
		font-size: 20px;
	      margin-left: -250px;
		  margin-top: 10px;
	}
	.sm{
		width: 300px;
		height: 100px;
		background: rgb(229,28,35);
		border-radius:18px;
		margin-top: 20px;
	}
	.p1{
		color: #FFFFFF;
		font-size: 12px;
		margin-left: 10px;
		margin-top: 10px;
	}
	.p2{
		color:#FFFFFF;
		font-size: 20px;
		margin-top: 10px;
		margin-left: 120px;
	}
	.sp{
		width: 300px;
		height: 100px;
		background: rgb(255,152,0);
		border-radius:18px;
		margin-top: 20px;
	}
	.btn1{
		width: 180px;
		height: 40px;
		background: rgb(139,195,74);
		color: #FFFFFF;
		position: absolute;
		bottom:30px;
		left: 4px;
	}
	.btn2{
		width: 180px;
		height: 40px;
		background: rgb(139,195,74);
		color: #FFFFFF;
		position: absolute;
	   	bottom:30px;
		right: 4px;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

</style>
