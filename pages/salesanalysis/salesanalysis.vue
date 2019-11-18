<template>
	<view class="content">
		<view>
			<calendar @change="change" startDate="2019-06-01" endDate="2019-06-05" :daysCount="daysCount" ></calendar>
		</view>
	    <view style="position: absolute;top: 30rpx;right: 10rpx;">
			 <i class="angle-down" aria-hidden="true"></i>
			<a class="trig-item" @tap="showTree">
			<span class="text">筛选<cmd-icon type="chevron-down" size="20" color="#654321"></cmd-icon></span>
			</a>
			<!-- <button type="primary" @tap="showTree">筛选</button> -->
			<tki-tree ref="tkitree" :selectParent="selectParent" :multiple="multiple" :range="list" rangeKey="name" @confirm="treeConfirm" @cancel="treeCancel"></tki-tree>
		</view>
	<view class="qiun-columns" style="position: absolute;top:300rpx">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">{{content}}</view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
			</view>
		</view>
		<view style="position: absolute;top: 1000rpx;width: 600rpx;">
           <view class="fy">
           	<view @click="qy(1)">
           		首页
           	</view>
           	<view v-for="value in page" @click="qy(value)" class="">
           		{{value}}
           	</view>
           	<view @click="qy(zpage)">
           		尾页
           	</view>
           </view>
           <view class="btn-view">
           </view>
		</view>
	</view>
</template>

<script>
	import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
	import tkiTree from "@/components/tki-tree/tki-tree.vue";
	import paging from '@/components/yang-paging/fy.vue';
	import calendar from '@/components/date-picker/date-picker2.vue';
	import { mapState, mapMutations } from 'vuex' ;
	import uCharts from '@/components/js_sdk/u-charts/u-charts/u-charts.js';
	import { parseTime } from '@/common/utils/tools.js';
	import { parseTime1 } from '@/common/utils/tools.2.js';
	import {  FlipInstantaneousLoadingSalesData , CustomerDataChangeDataAnalysis , Changethetimetorenderdata , Loadingcustomerinformation , Loadingcommodityinformation , CommodityChangeData} from '@/common/api/Reportform.js'
    var _self;
	var canvaColumn=null;
	export default {
		components: {  calendar, paging , tkiTree , cmdIcon},
		data() {
			return {
				total:[1],
				pageSize:5,
				page: [],
				current: 1,
				zpage:0,
				testList:[
					{
						id: 2,
						name: '客户',
						children: []
					},
					{
						id: 3,
						name: '产品',
						children: []
					},
				],
				list: [],
				multiple:true,
				selectParent:true,
				beginDate: '2019-05-06',
				endDate: '2019-05-07',
				showCaledar: false,
				dateStr: '',
				daysCount: 366,
				singleDate: true,
				res1:[],
		        e:'',
				tableData:{},
				PsearchData:[],
				SsearchData:[],
				SsearchData1:[],
				searchvalue:[],
				searchvalues:[],
				systemDate1:'',
				systemDate:'',
				arr10:['全部商品'],
				inputsArray:[
					{
					 type: 'picker-custom',
					    itemArray: [], //name变量名与下方steps.steps_1_value相同
					    defaultValue: [0, 0], //初始数据
					    onceShowDefaultValue: true, //是否显示初始数据
					    steps: {
					        steps_1_value: 'name'
					    }
					},
				],
				inputsArray1:[
					{
					"border_top": "1px solid #f2f2f2",
						     type: 'picker-custom2',
							title: '',
							itemObject: {
								step_1: [],
								step_2: []
							},
							steps: {
								step_1_value: 'name', //第一级显示的属性名
								step_2_value: '', //第二级显示的属性名
								step_3_value: '' //第三级显示的属性名
							},
							defaultValue: [1, 0], //初始数据
							onceShowDefaultValue: true, //是否显示初始数据
							linkageNum: 2, //3 表示为3级联动
							linkage: true //true 表示开启联动
					},
				],
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				title:"销售分析",
				content:"1111"
			}
		},
		created: function() {
			this.productPage()	
				},
		computed: mapState(['userInfo','userToken']), 
		onLoad:function(option){
			_self = this;
			/* console.log(option.name)
			console.log(option.id) */
			this.title=option.name;
			this.content=option.id;
			this.addDate();
			this.addDate1();
		    this.onloadsalep()
				uni.getSystemInfo({
							success: function (res) {
								if(res.pixelRatio>1){
									//正常这里给2就行，如果pixelRatio=3性能会降低一点
									//_self.pixelRatio =res.pixelRatio;
									_self.pixelRatio =2;
								}
							}
						});
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		onBackPress:function() {
					if (this.showCaledar !== false) {
						this.showCaledar = false;
						return true;
					}
				},
		methods: {
			productPage(){
				let that = this
				let total = parseInt(that.total)
				let pageSize = parseInt(that.pageSize)
				let zpage = parseInt(total / pageSize)
				if (total / pageSize > zpage) {
					zpage++
				}
				that.zpage = zpage
				
				let arr = []
				if (zpage < 5) {
					for (let i = 1; i <= zpage; i++) {
						arr.push(i)
					}
				} else {
					arr = [1, 2, 3, 4, 5]
				}
				that.page = arr
				// console.log(that.page+'1111111111111111111')
			},
			getServerData(){
				 FlipInstantaneousLoadingSalesData({"access-token":this.userToken,
					beginDate:this.systemDate,
					endDate:this.systemDate1}).then((res)=>{
					console.log(res.data)
					//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
					_self.serverData=res.data.data;
					let Column={categories:[],series:[{"name":"销售量","data":[]},{"name":"毛利","data":[]}]};
					//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去 
					for(let i=0 ;i<res.data.length;i++){
						Column.categories.push(res.data[i].date.substring(8,10))
						Column.series[0].data.push(res.data[i].totalSalesPrice)
						Column.series[1].data.push(res.data[i].grossProfitPrice)
					}		 	
						/* Column.categories=this.tableData.categories;
						//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
						Column.series=this.tableData.series; */
						_self.showColumn("canvasColumn",Column);
					})
            },
            showColumn(canvasId,chartData){
						canvaColumn=new uCharts({
							$this:_self,
							canvasId: canvasId,
							type: 'column',
							legend:true,
							fontSize:11,
							background:'#FFFFFF',
							pixelRatio:_self.pixelRatio,
							animation: true,
							categories: chartData.categories,
							series: chartData.series,
							xAxis: {
								disableGrid:true,
							},
							yAxis: {
							},
							dataLabel: true,
							width: _self.cWidth*_self.pixelRatio,
							height: _self.cHeight*_self.pixelRatio,
							extra: {
								column: {
								  width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
								}
							}
					});
			},
			changeData(){
						canvaColumn.updateData({
							series: _self.serverData.ColumnB.series,
							categories: _self.serverData.ColumnB.categories
					});
			},
			addDate() {
							   let nowDate=new Date()
				    this.systemDate= parseTime(nowDate, '{y}-{m}-{d}')
							      // console.log(this.systemDate)
			},
			addDate1() {
							   let nowDate=new Date()
				    this.systemDate1= parseTime1(nowDate, '{y}-{m}-{d}')
							      // console.log(this.systemDate1)
			},
			ChangeDate(date){ 
					    let d=new Date(date); 
					     this.systemDate1= parseTime1(d, '{y}-{m}-{d}')
						 // console.log(this.systemDate1+'2222222')  
			},
			onloadsalep(){
						Loadingcustomerinformation({"access-token":this.userToken}).then((res)=>{
							console.log(res.data);
							// console.log(_self .inputsArray[0].itemArray[0][0]);					
							let Customerdata=[];
							 for(let i=0;i<res.data.length;i++){
									let arr={
                                        id:'2'+i  ,
										name:res.data[i].buyerOrgName , 
										value: res.data[i].buyerOrgId
									};
									Customerdata.push(arr) 
									 _self.SsearchData.push(res.data[i].buyerOrgId)
							 };
							 _self.testList[0].children=[]
							 _self.testList[0].children =Customerdata;
						});
						Loadingcommodityinformation({"access-token":this.userToken}).then((res)=>{
							console.log(res.data)
							console.log(_self.testList[1].children)
							 _self.testList[1].children=[]
							for(let i=0;i<res.data.length;i++){
								 let arr3={
									 id: '3'+i,
									 name: res.data[i].name,
									 children:[],
                                     value:res.data[i].productTypeId
								 }
                                 _self.searchvalue.push(res.data[i].productTypeId)
							if(res.data[i].childProductTypeList==null){
								 _self.testList[1].children.push(arr3)
							}else{
								 for(let j=0;j<res.data[i].childProductTypeList.length;j++){
								 	   
								 	 let arr4={
								 		id:'3'+i+j ,
								 		name:res.data[i].childProductTypeList[j].name,
								 		 value:res.data[i].childProductTypeList[j].productTypeId, 
								 	 }
								 	 arr3.children.push(arr4)
								 	 _self.searchvalue.push(res.data[i].childProductTypeList[j].productTypeId)
								 }
								_self.testList[1].children.push(arr3)
							}	
						}
							console.log(_self.SsearchData)
							console.log(_self.searchvalue)
							setTimeout(()=>{
								this.list =_self.testList;
						}, 300)
					}
				)
			},
			unique(arr) {
				const res = new Map();
				  return arr.filter((arr) => !res.has(arr.id) && res.set(arr.id, 1))
			},
			change({
				choiceDate,
				dayCount
				}) {
					//参数解释
					//1.choiceDate 时间区间（开始时间和结束时间）
					//2.dayCount 共多少晚
                    // console.log(choiceDate)
					this.systemDate=''
					this.systemDate1=''
					console.log(choiceDate, dayCount);
					console.log('入住从 ' + choiceDate[0].re + '  到 ' + choiceDate[1].re + '  共 ' + dayCount + ' 晚');
					this.systemDate=choiceDate[0].date.substring(0,4)+'-'+choiceDate[0].date.substring(4,6)+'-'+choiceDate[0].date.substring(6,8)
					this.systemDate1=choiceDate[1].date.substring(0,4)+'-'+choiceDate[1].date.substring(4,6)+'-'+choiceDate[1].date.substring(6,8)
					console.log(this.systemDate)
					console.log(this.systemDate1)
                    console.log(_self.SsearchData1.join(','))
                    console.log(_self.searchvalues.join(','))
					FlipInstantaneousLoadingSalesData({"access-token":this.userToken,
														beginDate:this.systemDate,
														endDate:this.systemDate1,
														buyerOrgIdList:_self.SsearchData1.join(','),
														productTypeIdList:_self.searchvalues.join(',')}).then((res)=>{
																		 console.log(res.data)
                                                                         console.log(this.systemDate)
                                                                         console.log(this.systemDate1)
																		 _self.res1=[]
																		 this.total=[]
																		 this.total.push(res.data.length)
																		 console.log(this.total[0])
																		 this.productPage()
																		 var result=this.splitarray(res.data,5)
																		 	 console.log(result)
																		if(res.data.length<5){
																			 _self.res1=res.data
																		 }else{
																			for (let i=0;i<res.data.length;i++){
																				if(i<5){
																					 _self.res1.push(res.data[i])
																				}
																			} 
																		 }
																		console.log(_self.res1)
																		//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
																		// _self.serverData=res.data.data;
																		let Column={categories:[],series:[{"name":"销售量","data":[]},{"name":"毛利","data":[]}]};
																		//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去  
																		 for(let i=0 ;i<_self.res1.length;i++){
																		 		Column.categories.push(_self.res1[i].date.substring(8,10))
																		 		Column.series[0].data.push(_self.res1[i].totalSalesPrice)
																				Column.series[1].data.push(_self.res1[i].grossProfitPrice)
																		 }
																		 	
																		 	/* Column.categories=this.tableData.categories;
																		 	//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
																		 	Column.series=this.tableData.series; */
																		_self.showColumn("canvasColumn",Column);
														})
			},
			qy(e) {
				console.log(e)
				console.log(this.systemDate)
				console.log(this.systemDate1)
				CustomerDataChangeDataAnalysis({"access-token":this.userToken,
						 beginDate:this.systemDate,
						 endDate:this.systemDate1,
						 buyerOrgIdList:_self.SsearchData1.join(','),
						 productTypeIdList:_self.searchvalues.join(',')}).then((res)=>{
												console.log(res.data)
												_self.res1=[]
												this.total=[]
												this.total.push(res.data.length)
												console.log(this.total[0])
												var result=this.splitarray(res.data,5)
													 console.log(result)
												_self.res1=result[e-1]
												  console.log(_self.res1)
												//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
												// _self.serverData=res.data.data;
												let Column={categories:[],series:[{"name":"销售量","data":[]},{"name":"毛利","data":[]}]};
												//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去  
												for(let i=0 ;i<_self.res1.length;i++){
														Column.categories.push(_self.res1[i].date.substring(8,10))
														Column.series[0].data.push(_self.res1[i].totalSalesPrice)
														Column.series[1].data.push(_self.res1[i].grossProfitPrice)
													}
												 /* Column.categories=this.tableData.categories;
												 //这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
												 Column.series=this.tableData.series; */
												_self.showColumn("canvasColumn",Column)
										})
                let that = this
                that.current = e
                let total = parseInt(that.total)
                let pageSize = parseInt(that.pageSize)
                let zpage = parseInt(total / pageSize)
                if (total / pageSize > zpage) {
                    zpage++
                }
                let arr = []
                if (zpage < 5) {
                    return
                }
                if (e >= zpage - 2) {
                    arr = [zpage - 4, zpage - 3, zpage - 2, zpage - 1, zpage]
                    that.page = arr
                    console.log(that.page+'2222222222222')
                    return
                }
                if (zpage > 5 && e < 4) {
                    arr = [1, 2, 3, 4, 5]
                    that.page = arr
                    console.log(that.page+'333333333333')
                    return
                }
                if (zpage > 5 && e > 3) {
                    arr = [e - 2, e - 1, e, e + 1, e + 2]
                    that.page = arr
                    console.log(that.page+'444444444444444444')
                    return
                }
            },
			// 确定回调事件
			treeConfirm(e){
				console.log(e)
				_self.searchvalues=[]
				_self.SsearchData1=[]
				console.log(_self.SsearchData)
				console.log(_self.searchvalue)
				for(let i=0;i<_self.searchvalue.length;i++){
				for (let j=0;j<e.length;j++){
				if (e[j].value==_self.searchvalue[i]){
					 _self.searchvalues.push(e[j].value)
												 }
											}
                                            };
				for(let i=0;i<_self.SsearchData.length;i++){
					for (let j=0;j<e.length;j++){
						if (e[j].value==_self.SsearchData[i]){
							_self.SsearchData1.push(e[j].value)
															}
														}
													};	
				_self.res1=[]
                console.log(this.systemDate)
                console.log(this.systemDate1)
                console.log(_self.SsearchData1.join(','))
                console.log(_self.searchvalues.join(','))
				CustomerDataChangeDataAnalysis({"access-token":this.userToken,
												beginDate:this.systemDate,
												endDate:this.systemDate1,
												buyerOrgIdList:_self.SsearchData1.join(','),
												productTypeIdList:_self.searchvalues.join(',')}).then((res)=>{
													console.log(res.data)
													_self.res1=[]
													this.total=[]
													this.total.push(res.data.length)
													// console.log(this.total[0])
													this.productPage()
													var result=this.splitarray(res.data,5)
													// console.log(result)
													if(res.data.length<5){
														 _self.res1=res.data
															}else{
																for (let i=0;i<res.data.length;i++){
																		if(i<5){
																			_self.res1.push(res.data[i])
																			}
																		} 
																}
													// console.log(_self.res1)
													//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
													// _self.serverData=res.data.data;
													let Column={categories:[],series:[{"name":"销售量","data":[]},{"name":"毛利","data":[]}]};
													//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去  
													for(let i=0 ;i<_self.res1.length;i++){
															Column.categories.push(_self.res1[i].date.substring(8,10))
															Column.series[0].data.push(_self.res1[i].totalSalesPrice)
															Column.series[1].data.push(_self.res1[i].grossProfitPrice)
																	}
																		 /* Column.categories=this.tableData.categories;
																		 //这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
																		 Column.series=this.tableData.series; */
															_self.showColumn("canvasColumn",Column)
													})
			},
			// 取消回调事件
			treeCancel(e){
				console.log(e)
			},
			// 显示树形选择器
			showTree(){
				this.$refs.tkitree._show();
			},
			splitarray(arr,len){
				var a_len=arr.length
				var result=[]
				for(var i=0;i<a_len;i+=len){
					result.push(arr.slice(i,i+len))
				}
				return result
			}
        }
	}
</script>

<style>
  .content{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  }
  .title{
	 margin-top: 15px;
	 margin-left: -250px;
	  flex-basis:130px
  }
  .start{
	 width: 150px;
	  height: 30px;
	  margin-top: -100px;
	  margin-left: 80px;
  }
  .end{
	width: 150px;
	 height: 30px;  
/* margin-left: 300px;
margin-top: -30px; */
  }
  .r1{
	  margin-left: -200px;
	
  }
  .r2{
    margin-right: -200px;

  }
 .box1{
	 width: 100%;
	 height: 400px;
	 border: 1px solid #000000;
	 position: absolute;
	 margin-top: 400px;
 }
page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;margin-top: 50px;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:100%; padding:; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}

.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.fy {

		display: inline-block;

		flex-direction: row;

		margin: auto;

		width: 100%;

		margin-top: 50upx;

	}



	.fy view {

		text-align: center;

		display: inline-block;

		width: 60upx;

		height: 60upx;

		line-height: 60upx;

		margin-left: 2%;

		border-radius: 50%;

		background: #00BFFF;

		color: #ffffff;

		font-size: 26upx;

	}
	.fy view:first-child {
		margin-left: 0%;
	}
	.btn-view view{
		text-align: center;
		padding-top: 20upx;
}
	.trig-item {
	    float: left;
	    height: 23px;
	    line-height: 23px;
	    padding: 0 3px 0 6px;
	    border: 1px solid #ddd;
	    background: #fff;
	    margin-right: 15px;
	}
</style>
