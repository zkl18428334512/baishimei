<template>
	<view class="content">
		<view>
				<calendar @change="change" startDate="2019-06-01" endDate="2019-06-05" :daysCount="daysCount"></calendar>
			</view>
		<view  style="position: absolute;top: 30rpx;right: 10rpx;">
              <i class="angle-down" aria-hidden="true"></i>
			<a class="trig-item" @tap="showTree">
			<span class="text">筛选<cmd-icon type="chevron-down" size="20" color="#654321"></cmd-icon></span>
			</a>
			<!-- <button type="primary" >筛选</button> -->
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
			   <view v-for="value in page" @click="qy(value)" >
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
    import cmdIcon from "@/components/cmd-icon/cmd-icon.vue";
    import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue";
	import tkiTree from '@/components/tki-tree/tki-tree.vue';
	import calendar from '@/components/date-picker/date-picker2.vue';
	import uCharts from '@/components/js_sdk/u-charts/u-charts/u-charts.js';
	import { mapState, mapMutations } from 'vuex' ;
	import { parseTime } from '@/common/utils/tools.js';
	import { parseTime1 } from '@/common/utils/tools.2.js';
	import { Grossprofitanalysisdata } from '@/common/api/Reportform.js'
	    var _self;
		var canvaColumn=null;
		export default {
			components: { calendar, tkiTree , faIcon , cmdIcon},
			data() {
				return {
					total:[2],
					pageSize:5,
					page: [],
					current: 1,
					zpage:0,
					res1:[],
					testList:[{
						id: 2,
						name: '客户',
					},{
						id: 1,
						name: '商品',
					}],
					list: [],
					multiple:false,
					selectParent:false,
					beginDate: '2019-05-06',
					endDate: '2019-05-07',
					showCaledar: false,
					dateStr: '',
					daysCount: 365,
					singleDate: true,
					PsearchData:[],
					SsearchData:[],
					systemDate1:'',
					systemDate:'',
					searchType:[2],
					inputsArray:[
							{
								title: "分析类别",
								type: "radio",
								itemArray: [{ //子循环数组
									name: "客户",
									value: "客户",
									defaultValue: true
								}, {
									name: "商品",
									value: "商品"
								}],
								color: "#c0ebd7",
								scale: '.8', //比例大小
							},
					],
					cWidth:'',
					cHeight:'',
					pixelRatio:1,
					serverData:'',
					title:"销售分析",
					content1:"1111",
					isShowSelect: false 
				}
			},
			computed: mapState(['userInfo','userToken']), 
			onLoad:function(option){
				_self = this;
				this.title=option.name;
				this.addDate() 
				this.addDate1()
				setTimeout(()=>{
					this.list = this.testList;
				}, 300)
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
			created: function() {
				this.productPage()	
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
					console.log(that.page+'1111111111111111111')
				},
				arrowDown(){ 
					 this.isShowSelect = !this.isShowSelect
				},
				select(item, index) {
					this.isShowSelect = false;
					  this.unitName = item.value
				},
			    getServerData(){
					console.log(this.systemDate)
					console.log(this.systemDate1)
					Grossprofitanalysisdata({	"access-token":this.userToken,
										 beginDate:this.systemDate,
										 endDate:this.systemDate1,
										 searchType:this.searchType[0]}).then((res)=>{
											 console.log(res.data)
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
											 let Column={categories:[],series:[{"name":"毛利率","data":[]}]};
											 //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
											 for(let i=0 ;i< _self.res1.length;i++){
											 	Column.categories.push( _self.res1[i].buyerOrgName)
											 	Column.series[0].data.push( _self.res1[i].grossProfitRate)
											 }
											 _self.showColumn("canvasColumn",Column);
										 })
			    					fail: () => {
			    						_self.tips="网络错误，小程序端请检查合法域名";
			    					}
			    },
				getServerData1(){
					Grossprofitanalysisdata({"access-token":this.userToken,
											beginDate:this.systemDate,
											endDate:this.systemDate1,
											searchType:this.searchType[0]}).then((res)=>{
													console.log(res.data)
													let arr19=res.data
													let arr20= arr19.sort(_self.compare("grossProfitRate"))
													console.log(res.data)
													_self.res1=[]
													this.total=[]
													this.total.push(arr20.length)
													console.log(this.total[0])
													this.productPage()
													var result=this.splitarray(arr20,5)
													console.log(result)
													if(arr20.length<5){
														_self.res1=arr20
														}else{
														 for (let i=0;i<arr20.length;i++){
														if(i<5){
														 	 _self.res1.push(arr20[i])
														 }
														} 
													 } 				 
													let Column={categories:[],series:[{"name":"毛利率","data":[]}]};
													//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
													for(let i=0 ;i<_self.res1.length;i++){
														Column.categories.push(_self.res1[i].productName)
														Column.series[0].data.push(_self.res1[i].grossProfitRate)
														}
														_self.showColumn("canvasColumn",Column);
												fail: () => {
														_self.tips="网络错误，小程序端请检查合法域名";
													}
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
			    	})
				},
                addDate() {
                               let nowDate=new Date()
                        console.log(nowDate)
                    this.systemDate= parseTime(nowDate,'{y}-{m}-{d}')
                                  console.log(this.systemDate+'截止时间')
                                },
                addDate1() {
                               let nowDate=new Date()
                            
                    this.systemDate1= parseTime1(nowDate,'{y}-{m}-{d}')
                                  console.log(this.systemDate1+'开始时间')
                                },
                    ChangeDate(date){ 
                        let d=new Date(date); 
                         this.systemDate= parseTime(d, '{y}-{m}-{d}')
                         // console.log(this.systemDate+'2222222')
                         
                        },
                ChangeDate1(a){
                    console.log(a+'截止日期')
                    let d=new Date(a); 
                     this.systemDate1= parseTime(d, '{y}-{m}-{d}')
                },
                compare (prop) {
                    return function (obj1, obj2) {
                        var val1 = obj1[prop];
                        var val2 = obj2[prop];if (val1 < val2) {
                            return 1;
                        } else if (val1 > val2) {
                            return -1;
                        } else {
                            return 0;
                        }            
                    } 
                },
                 toPercent(point){
                    var str=Number(point*100).toFixed(1);
                    str+="%";
                    return str;
                },
                change({
                    choiceDate,
                    dayCount
                }) {
                    //参数解释
                    //1.choiceDate 时间区间（开始时间和结束时间）
                    //2.dayCount 共多少晚
                    this.systemDate=''
                    this.systemDate1=''
                    console.log(choiceDate, dayCount);
                    console.log('入住从 ' + choiceDate[0].re + '  到 ' + choiceDate[1].re + '  共 ' + dayCount + ' 晚');
                    this.systemDate=choiceDate[0].date.substring(0,4)+'-'+choiceDate[0].date.substring(4,6)+'-'+choiceDate[0].date.substring(6,8)
                    this.systemDate1=choiceDate[1].date.substring(0,4)+'-'+choiceDate[1].date.substring(4,6)+'-'+choiceDate[1].date.substring(6,8)
                    console.log(this.systemDate)
                    console.log(this.systemDate1)
                    Grossprofitanalysisdata({	"access-token":this.userToken,
                                         beginDate:this.systemDate,
                                         endDate:this.systemDate1,
                                         searchType:this.searchType[0]}).then((res)=>{
                                             console.log(res.data)
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
                                             let Column={categories:[],series:[{"name":"毛利率","data":[]}]};
                                             //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                                             for(let i=0 ;i<_self.res1.length;i++){
                                                Column.categories.push(_self.res1[i].buyerOrgName)
                                                Column.series[0].data.push(_self.res1[i].grossProfitRate)
                                             }
                                             _self.showColumn("canvasColumn",Column);
                                         })
                                    fail: () => {
                                        _self.tips="网络错误，小程序端请检查合法域名";
                                    }
                },
                // 确定回调事件
                treeConfirm(e){
                    console.log(e)
                    if(e[0].id==2){
                        this.searchType=[],
                        this.searchType.push(2)
                        console.log(this.searchType[0])
                        this. getServerData()
                    }else{
                        this.searchType=[],
                        this.searchType.push(1)
                        console.log(this.searchType[0])
                        this. getServerData1()
                    }
                },
                // 取消回调事件
                treeCancel(e){
                    console.log(e)
                },
                // 显示树形选择器
                showTree(){
                    this.$refs.tkitree._show();
                },
                qy(e) {	
                    let that = this
                    that.current = e
                    console.log(e)
                if(this.searchType==2){
                    Grossprofitanalysisdata({	"access-token":this.userToken,
                                         beginDate:this.systemDate,
                                         endDate:this.systemDate1,
                                         searchType:this.searchType[0]}).then((res)=>{
                                             console.log(res.data)
                                             _self.res1=[]
                                             this.total=[]
                                             this.total.push(res.data.length)
                                             console.log(this.total[0])
                                            
                                             var result=this.splitarray(res.data,5)
                                                 console.log(result)
                                             _self.res1=result[e-1]
                                               console.log(_self.res1)
                                             let Column={categories:[],series:[{"name":"毛利率","data":[]}]};
                                             //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                                             for(let i=0 ;i<_self.res1.length;i++){
                                                Column.categories.push(_self.res1[i].buyerOrgName)
                                                Column.series[0].data.push(_self.res1[i].grossProfitRate)
                                             }
                                             _self.showColumn("canvasColumn",Column);
                                         })
                                    fail: () => {
                                        _self.tips="网络错误，小程序端请检查合法域名";
                                    }
                }else{
                    Grossprofitanalysisdata({	"access-token":this.userToken,
                                         beginDate:this.systemDate,
                                         endDate:this.systemDate1,
                                         searchType:this.searchType[0]}).then((res)=>{
                                             console.log(res.data)
                                                let arr19=res.data
                                                let arr20= arr19.sort(_self.compare("grossProfitRate"))
                                                 _self.res1=[]
                                                 this.total=[]
                                                 this.total.push(res.data.length)
                                                 console.log(this.total[0])
                                            
                                                 var result=this.splitarray(arr20,5)
                                                     console.log(result)
                                                 _self.res1=result[e-1]
                                                   console.log(_self.res1)                 								 				 
                                                let Column={categories:[],series:[{"name":"毛利率","data":[]}]};
                                                //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                                                for(let i=0 ;i<_self.res1.length;i++){
                                                    Column.categories.push(_self.res1[i].productName)
                                                    Column.series[0].data.push(_self.res1[i].grossProfitRate)
                                                }
                                                _self.showColumn("canvasColumn",Column);
                                             fail: () => {
                                                _self.tips="网络错误，小程序端请检查合法域名";
                                             }
                                         })
                }
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
	  margin-top: -70px;
  }
  .r2{
    margin-right: -200px;
	margin-top: -37px;
  }
 .box1{
	 width: 100%;
	 height: 600px;
	 border: 1px solid #000000;
	 position: absolute;
	 margin-top: 400px;
 }
page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:100%; padding:; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
/* 通用样式 */
.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.trig-item {
    float: left;
    height: 23px;
    line-height: 23px;
    padding: 0 3px 0 6px;
    border: 1px solid #ddd;
    background: #fff;
    margin-right: 15px;
}
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

		width:60upx;

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
</style>
