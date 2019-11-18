<template>
	<view>
		<view v-if="list.length > 0" v-for="(item, index) in list" v-bind:key="index" class="cu-timeline">
			<view class="cu-time">{{ item.deliverDate | parseTime('{m}-{d}') }}</view>
			<view v-for="(data) in item.list" v-bind:key="data.deliveryOrderId" class="cu-item">
				<view class="content">
					<view class="flex">
						<view class="cu-capsule radius flex-sub">
							<view class="cu-tag bg-cyan">{{ data.deliveryTime | parseTime('{a}') }}</view>
							<view class="cu-tag line-cyan">{{ data.deliveryTime | parseTime('{h}:{i}') }}</view>
						</view>
						<view class="cu-capsule radius flex-sub justify-end">
							<view class="cu-tag" :class="data.status <= 5?'bg-orange' : data.status === 15?'bg-green':'bg-grey'">{{ data.status | statusNameFilter }}</view>
						</view>
					</view>
					<view class="margin-top" @tap="handleTap(data.deliveryOrderId)">
						<view class="flex">
							<view class="cuIcon-shopfill margin-right-xs"></view>
							<view>{{ data.receiverOrgName }}</view>
						</view>
						<view class="flex">
							<view class="cuIcon-cartfill margin-right-xs"></view>
							<view>配送单号: {{ data.deliveryOrderId }}</view>
						</view>
						<view v-if="data.deliveryAddress" class="flex">
							<view class="cuIcon-locationfill margin-right-xs"></view>
							<view>{{ data.deliveryAddress }}</view>
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
			暂无配送任务
		</view>
	</view>
</template>

<script>
	import { fetchPendingDelivery } from '@/common/api/deliver'
	import { parseTime } from '@/common/utils/tools.js'
	export default {
		filters: {
			statusNameFilter(status) {
			  const nameMap = {
				0: '未装车',
				15: '配送中',
				20: '已完成'
			  }
			  return nameMap[status] || '未装车'
			},
			statusClassFilter(status) {
			  const nameMap = {
				0: 'bg-orange',
				15: 'bg-green',
				20: 'bg-grey'
			  }
			  return nameMap[status] || 'bg-orange'
			}
		},
		data() {
			return {
				listQuery: {
					pageNo: 1,
					pageSize: 5
				},
				list: [],
				loadOver: false
			}
		},
		onLoad:function(e){
			this.getList(false)
		},
        onShow:function(e) {
            const updateDeliveryOrder = uni.getStorageSync('up_delivery_order')
            if(updateDeliveryOrder) {
                this.list.forEach(item => {
                    if(item.list) {
                        const deliveryOrder = item.list.find(function(o){
                            return o.deliveryOrderId === updateDeliveryOrder.deliveryOrderId
                        })
                        if(deliveryOrder) {
                            deliveryOrder.status = updateDeliveryOrder.status
                        }
                    }
                })
                uni.removeStorageSync('up_delivery_order')
            }
        },
		onPullDownRefresh:function(){
			this.listQuery.pageNo = 1
			this.loadOver = false
            console.log('下拉加载成功')
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
				fetchPendingDelivery(this.listQuery).then((res)=>{
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
					// console.log(deliverDate)
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
			},
			handleTap(orderId) {
				// console.log(orderId)
				uni.navigateTo({
					url: '/pages/deliveritem/deliveritem?orderId=' + orderId
				})
			} 
		}
	}
</script>

<style>

</style>
