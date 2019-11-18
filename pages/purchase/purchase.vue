<template>
	<view>
        
		<!-- <view v-if="list.length > 0" v-for="(item, index) in list" v-bind:key="index" class="cu-timeline">
			<view class="cu-time">{{ item.deliverDate | parseTime('{m}/{d}') }}</view>
			<view v-for="(data) in item.list" v-bind:key="data.purchaseOrderId" class="" style="margin-top: 10rpx;">
				<view class="content">
					<view class="flex">
					</view>
					<view class="margin-top" @tap="handleTap(data.purchaseOrderId)">
						<view class="flex">
							<view style="width: 100rpx;height: 100rpx;margin-left: 40rpx;margin-top: -20rpx;" :style="{backgroundImage:'url('+data.statusImageName+')',backgroundSize:'cover'}" ></view>
							<view style="margin-top: -20rpx;margin-left: 20rpx;font-size: 34rpx;">{{ data.sellerOrgName | sellerOrgNameFilter }}</view>
                            <view class="cu-capsule radius flex-sub" style="margin-left: 20rpx;margin-top: -4px;">
                            	<view class="cu-tag bg-cyan" style="height: 26rpx;font-size: 16rpx;background: rgb(253,89,96);margin-top: 8rpx;">{{ data.deliveryTime | parseTime('{a}') }}/{{ data.deliveryTime | parseTime('{h}:{i}') }}</view>
                            	<view class="cu-tag line-cyan" style="height: 30rpx;"></view> -->
                           <!-- </view>
                            <view class="cu-capsule radius flex-sub justify-end" style="margin-top: -10rpx;">
                            	<view  :class="data.statusClassName"><image :src="data.statusImage1Name" mode="" style="width: 10px;height: 10px;"></image>  {{ data.status | statusNameFilter }}</view>
                            </view> --> 
						<!-- </view>
						<view class="flex">
							<view style="margin-left: 156rpx;margin-top: -44rpx;">采购单号: {{ data.purchaseOrderId }}</view>
						</view>
						<view v-if="data.sellerOrgAddress" class="flex">
							<view class="cuIcon-locationfill margin-right-xs"></view>
							<view>{{ data.sellerOrgAddress }}</view>
						</view>
						<view v-if="data.remark" class="flex">
							<view class="cuIcon-commentfill margin-right-xs"></view>
							<view>备注: {{ data.remark }}</view>
						</view>
					</view>
				</view>
			</view>
		</view> -->
       <mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" >
            <view :style="{backgroundImage:'url(../../static/img/purchase_01.png )',backgroundSize:'cover'}" style="width:100%;height: 350rpx;overflow: hidden;" >
              <span style="margin-top: 50rpx;height: 60rpx;width: 60rpx;display: block;color: #F7F7F7;font-size: 60rpx;margin-left: 40rpx;" @tap="back">＜</span>
              <span style="margin-left: 37%;color: #FFFFFF;font-size: 50rpx;margin-top: -46rpx;display: block;">采购任务</span> 
              <view style="margin-left: 60rpx;margin-top: 100rpx;color: #FFFFFF;font-size: 40rpx;">
                {{userInfo.name}}
              </view>
            </view>
        			<!-- <view> @down, @up 必须配置 </view> -->
        			<!-- <view> :down, :up 可省略 </view> -->
        			<!-- <view v-for="data in dataList"> 数据列表... </view> -->
                    <view v-if="list.length > 0" v-for="(item, index) in list" v-bind:key="index" class="cu-timeline">
                    	<view class="cu-time">{{ item.deliverDate | parseTime('{m}/{d}') }}</view>
                    	<view v-for="(data) in item.list" v-bind:key="data.purchaseOrderId" class="" style="margin-top: 10rpx;">
                    		<view class="content">
                    			<view class="margin-top" @tap="handleTap(data.purchaseOrderId)">
                    				<view class="flex">
                    					<view style="width: 100rpx;height: 100rpx;margin-left: 40rpx;margin-top: -20rpx;" :style="{backgroundImage:'url('+data.statusImageName+')',backgroundSize:'cover'}" ></view>
                    					<view style="margin-top: -20rpx;margin-left: 20rpx;font-size: 34rpx;">{{ data.sellerOrgName | sellerOrgNameFilter }}</view>
                                        <view class="cu-capsule radius flex-sub" style="margin-left: 20rpx;margin-top: -4px;">
                                        	<view class="cu-tag bg-cyan" style="height: 26rpx;font-size: 16rpx;background: rgb(253,89,96);margin-top: 8rpx;">{{ data.deliveryTime | parseTime('{a}') }}/{{ data.deliveryTime | parseTime('{h}:{i}') }}</view>
                                             </view>
                                              <view class="cu-capsule radius flex-sub justify-end" style="margin-top: -10rpx;">
                                              	<view  :class="data.statusClassName"><image :src="data.statusImage1Name" mode="" style="width: 10px;height: 10px;"></image>  {{ data.status | statusNameFilter }}</view>
                                              </view>
                                              </view>
                                              		<view class="flex">
                                              					<view style="margin-left: 156rpx;margin-top: -44rpx;">采购单号: {{ data.purchaseOrderId }}</view>
                                              				</view>
                                              				<view v-if="data.sellerOrgAddress" class="flex">
                                              					<view class="cuIcon-locationfill margin-right-xs"></view>
                                              					<view>{{ data.sellerOrgAddress }}</view>
                                              				</view>
                                              				<view v-if="data.remark" class="flex">
                                              					<view class="cuIcon-commentfill margin-right-xs"></view>
                                              					<view>备注: {{ data.remark }}</view>
                                              				</view>
                                              			</view>
                                              		</view>
                                              	</view>
                              </view>
                              <view v-else class="text-center padding">
                              	暂无采购任务
                              </view>
        		</mescroll-uni>
        
		
	</view>
</template>

<script>
	import { fetchOrder } from '@/common/api/order'
	import { parseTime } from '@/common/utils/tools.js'
    import { mapState, mapMutations } from 'vuex' 
    import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"; 
	export default {
        components: {
        				MescrollUni
        			},
		filters: {
            statusImage1Filter(status){
                const nameMap={
                      0:'../../static/img/purchase_07.png',
                      5:'../../static/img/purchase_07.png',
                      10:'../../static/img/purchase_14.png',
                      40:'../../static/img/purchase_19.png',
                }
                return nameMap[status] || '../../static/img/purchase_07.png'
            },
            statusImageFilter(status){
              const nameMap={
                  0:'../../static/img/purchase_04.png',
                  5:'../../static/img/purchase_04.png',
                  10:'../../static/img/purchase_12.png',
                  40:'../../static/img/purchase_18.png'
              }
              return nameMap[status] || '../../static/img/purchase_04.png'  
            },
            
			statusNameFilter(status) {
			  const nameMap = {
				0: '采购中',
				5: '采购中',
				10: '备货完成',
				20: '已收货',
				30: '售后',
				40: '已完成'
			  }
			  return nameMap[status] || '采购中'
			},
			statusClassFilter(status) {
			  const nameMap = {
				0: 'orange',
				5: 'orange',
				10: 'green',
				20: 'grey',
				30: 'grey',
				40: 'grey'
			  }
			  return nameMap[status] || 'bg-orange'
			},
			sellerOrgNameFilter(name) {
				return name || '自采购'
			}
		},
		data() {
			return {
              // 下拉刷新的常用配置
              					downOption: { 
              						use: true, // 是否启用下拉刷新; 默认true
              						auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
              					},
                // 上拉加载的常用配置
                					upOption: {
                						use: true, // 是否启用上拉加载; 默认true
                						auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
                						page: {
                							num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
                							size: 5 // 每页数据的数量,默认10
                						},
                						noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
                						empty: {
                							tip: '暂无相关数据'
                						}
                					},
                					// 列表数据
                					dataList: [],                  
				listQuery: {
					pageNo: 1,
					pageSize: 5,
					sorts: '-deliveryTime',
                    purchaseType:2
				},
                
				list: [],
				loadOver: false
			}
		},
         computed: mapState(['userInfo']),
		onLoad:function(e){
            console.log(e)
			this.getList(false)
		},
        onShow:function(e) {
            const updateOrder = uni.getStorageSync('up_purchase_order')
            if(updateOrder) {
                this.list.forEach(item => {
                    if(item.list) {
                        const order = item.list.find(function(o){
                            return o.purchaseOrderId === updateOrder.purchaseOrderId
                        })
                        if(order) {
                            order.status = updateOrder.status
                            order.statusClassName = this.$options.filters['statusClassFilter'](order.status)
                        }
                    }
                })
                uni.removeStorageSync('up_purchase_order')
            }
        },
		onPullDownRefresh:function(){
			this.listQuery.pageNo = 1
			this.loadOver = false
			this.getList(false, () => setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000))
		},
		onReachBottom:function(){
			console.log('no:' + this.listQuery.pageNo)
			if(!this.loadOver) {
				this.listQuery.pageNo = this.listQuery.pageNo + 1
				this.getList(true)
			}
		},
		methods: {
			getList(append, fun) {
                console.log(this.listQuery)
				fetchOrder(this.listQuery).then((res)=>{
					console.log(res)
					const orderList = [...res.data.list || []]
					if(orderList.length <= 0) {
						this.loadOver = true
					}
					else {
						this.loadOver = false
					}
					this.setData(orderList, append)
					if(fun) {
						fun()
					}
				}).catch((err)=>{
					console.log("error!",  err)
				})
               
			},
			setData(orderList, append) {
				if(!append) {
					this.list = []
				}
				orderList.forEach((data, i)=>{
					// console.log(data, i)
					const deliverDate = parseTime(data.deliveryTime, '{y}-{m}-{d}')
					const statusClassName = this.$options.filters['statusClassFilter'](data.status)
                    const statusImageName = this.$options.filters['statusImageFilter'](data.status)
                    const statusImage1Name = this.$options.filters['statusImage1Filter'](data.status)
                    data.statusImage1Name = statusImage1Name
                    data.statusImageName  = statusImageName
					data.statusClassName  = statusClassName
					let find = false
                  
					for(let i=0; i < this.list.length;i++) {
						if(this.list[i].deliverDate === deliverDate) {
							this.list[i].list.push(data)
							find = true
						}
					}
					if(!find) {
						this.list.push({ deliverDate: deliverDate, list: [ data ] })
					}
				})
                 console.log(this.list)
			},
			handleTap(orderId) {
				console.log(orderId)
				uni.navigateTo({
					url: '/pages/purchaseitem/purchaseitem?orderId=' + orderId
				})
			},
            back(){
                uni.navigateBack({
                    delta:1
                })
            },
            downCallback(mescroll){
            		mescroll.resetUpScroll()			
            				},
            upCallback(mescroll){
                console.log(mescroll)
                let pageNum = mescroll.num+1; // 页码, 默认从1开始
                let pageSize = mescroll.size; // 页长, 默认每页10条
               var listQuery= {
                	pageNo: pageNum,
                	pageSize: pageSize,
                	sorts: '-deliveryTime',
                    purchaseType:2
                }
                fetchOrder(listQuery).then((res)=>{
                	console.log(res)
                	const orderList = [...res.data.list || []]
                	let curPageData =orderList;
                								// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
                								let totalPage = res.data.pages; 
                								// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
                								let totalSize = res.data.total; 
                								// 接口返回的是否有下一页 (true/false)
                								let hasNext = false; 
                								
                								//设置列表数据
                								if(mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
                								this.dataList = this.dataList.concat(curPageData); //追加新数据
                								
                								// 成功隐藏下拉加载状态
                								//方法一(推荐): 后台接口有返回列表的总页数 totalPage
                								mescroll.endByPage(curPageData.length, totalPage); 
                })
                console.log(this.dataList)
               
              this.dataList.forEach((data, i)=>{
              	// console.log(data, i)
              	const deliverDate = parseTime(data.deliveryTime, '{y}-{m}-{d}')
              	const statusClassName = this.$options.filters['statusClassFilter'](data.status)
                  const statusImageName = this.$options.filters['statusImageFilter'](data.status)
                  const statusImage1Name = this.$options.filters['statusImage1Filter'](data.status)
                  data.statusImage1Name = statusImage1Name
                  data.statusImageName  = statusImageName
              	data.statusClassName  = statusClassName
              	let find = false
                
              	for(let i=0; i < this.list.length;i++) {
              		if(this.list[i].deliverDate === deliverDate) {
              			this.list[i].list.push(data)
              			find = true
              		}
              	}
              	if(!find) {
              		this.list.push({ deliverDate: deliverDate, list: [ data ] })
              	}
              })
              console.log(this.list)
              this.dataList=[]
              
                
                
            } ,
            setData1(dataList, append) {
            	if(!append) {
            		this.list = []
            	}
            	dataList.forEach((data, i)=>{
            		// console.log(data, i)
            		const deliverDate = parseTime(data.deliveryTime, '{y}-{m}-{d}')
            		const statusClassName = this.$options.filters['statusClassFilter'](data.status)
                    const statusImageName = this.$options.filters['statusImageFilter'](data.status)
                    const statusImage1Name = this.$options.filters['statusImage1Filter'](data.status)
                    data.statusImage1Name = statusImage1Name
                    data.statusImageName  = statusImageName
            		data.statusClassName  = statusClassName
            		let find = false
                  
            		for(let i=0; i < this.list.length;i++) {
            			if(this.list[i].deliverDate === deliverDate) {
            				this.list[i].list.push(data)
            				find = true
            			}
            		}
            		if(!find) {
            			this.list.push({ deliverDate: deliverDate, list: [ data ] })
            		}
            	})
                 console.log(this.list)
            },                
		}
	}
</script>

<style>
.grey{
  color: rgb(194,194,196);
  font-size: 24rpx;
}
.orange{
  color:rgb(113,168,188);
  font-size: 24rpx;
}
.green{
  color:rgb(135,156,192);
  font-size: 24rpx;
}
</style>
