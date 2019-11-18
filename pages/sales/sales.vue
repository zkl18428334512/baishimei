<template>
	<view>
		<view v-if="list.length > 0" v-for="(item, index) in list" v-bind:key="index" class="cu-timeline">
			<view class="cu-time">{{ item.deliverDate | parseTime('{m}-{d}') }}</view>
			<view v-for="(data) in item.list" v-bind:key="data.purchaseOrderId" class="cu-item">
				<view class="content">
					<view class="flex">
						<view class="cu-capsule radius flex-sub">
							<view class="cu-tag bg-cyan">{{ data.deliveryTime | parseTime('{a}') }}</view>
							<view class="cu-tag line-cyan">{{ data.deliveryTime | parseTime('{h}:{i}') }}</view>
						</view>
						<view class="cu-capsule radius flex-sub justify-end">
							<view class="cu-tag" :class="data.statusClassName">{{ data.status | statusNameFilter }}</view>
						</view>
					</view>
					<view class="margin-top" @tap="handleTap(data.purchaseOrderId)">
						<view class="flex">
							<view class="cuIcon-shopfill margin-right-xs"></view>
							<view>{{ data.buyerOrgName | buyerOrgNameFilter }}</view>
						</view>
						<view class="flex">
							<view class="cuIcon-cartfill margin-right-xs"></view>
							<view>销售单号: {{ data.purchaseOrderId }}</view>
						</view>
						<view v-if="data.buyerOrgAddress" class="flex">
							<view class="cuIcon-locationfill margin-right-xs"></view>
							<view>{{ data.buyerOrgAddress }}</view>
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
			暂无销售单
		</view>
	</view>
</template>

<script>
	import { fetchSalesOrder } from '@/common/api/order'
	import { parseTime } from '@/common/utils/tools.js'
	export default {
		filters: {
			statusNameFilter(status) {
			  const nameMap = {
				0: '已下单',
				5: '已接单',
				10: '配送中',
				20: '已收货',
				30: '售后',
				40: '已完成'
			  }
			  return nameMap[status] || '采购中'
			},
			statusClassFilter(status) {
			  const nameMap = {
				0: 'bg-orange',
				5: 'bg-green',
				10: 'bg-green',
				20: 'bg-grey',
				30: 'bg-grey',
				40: 'bg-grey'
			  }
			  return nameMap[status] || 'bg-grey'
			},
			buyerOrgNameFilter(name) {
				return name || '无'
			}
		},
		data() {
			return {
				listQuery: {
					pageNo: 1,
					pageSize: 5,
					sorts: '-deliveryTime'
				},
				list: [],
				loadOver: false
			}
		},
		onLoad:function(e){
			this.getList(false)
		},
        onShow:function(e) {
            const updateOrder = uni.getStorageSync('up_sales_order')
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
                uni.removeStorageSync('up_sales_order')
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
				fetchSalesOrder(this.listQuery).then((res)=>{
					// console.log(res)
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
					data.statusClassName = statusClassName
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
				uni.navigateTo({
					url: '/pages/salesitem/salesitem?orderId=' + orderId
				})
			} 
		}
	}
</script>

<style lang="scss">

</style>
