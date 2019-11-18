<template>
	<view>
		<view v-if="list.length > 0" v-for="(item, index) in list" v-bind:key="index" class="cu-timeline">
			<view class="cu-time">{{ item.deliverDate | parseTime('{m}-{d}') }}</view>
			<view v-for="(data) in item.list" v-bind:key="data.deliverDate" class="cu-item">
				<view class="content">
					<view class="flex" @tap="handleTap(data.deliverDate)">
						<view class="cu-capsule radius flex-sub">
							<view class="flex">
								<view class="cuIcon-cartfill margin-right-xs"></view>
								<view>周{{ data.deliveryWeek }}汇总采购单</view>
							</view>
						</view>
						<view class="cu-capsule radius flex-sub justify-end">
							<view class="cu-tag" :class="data.status === 0?'bg-orange' : data.status === 15?'bg-green':'bg-grey'">{{ data.status | statusNameFilter }}</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<view v-else class="text-center padding">
			暂无验收任务
		</view>
	</view>
</template>

<script>
	import { myFirstOrderDate } from '@/common/api/order'
	import { parseTime, parseJavaTime } from '@/common/utils/tools.js'
	export default {
		filters: {
			statusNameFilter(status) {
			  const nameMap = {
				0: '查看',
				10: '配送中',
				20: '完成'
			  }
			  return nameMap[status] || '查看'
			},
			statusClassFilter(status) {
			  const nameMap = {
				0: 'bg-orange',
				10: 'bg-green',
				20: 'bg-grey'
			  }
			  return nameMap[status] || 'bg-orange'
			}
		},
		data() {
			return {
				list: [],
				loadOver: false,
				todayDate: new Date(),
				firstDate: undefined,
				currentDate: undefined
			}
		},
		onLoad:function(e){
			this.getList(false)
		},
        onShow:function(e) {
            // const updateOrder = uni.getStorageSync('up_inspect_order')
            // if(updateOrder) {
            //     this.list.forEach(item => {
            //         if(item.list) {
            //             const order = item.list.find(function(o){
            //                 return o.deliverDate == updateOrder.deliveryDate
            //             })
            //             if(order) {
            //                 order.status = updateOrder.status
            //                 order.statusClassName = this.$options.filters['statusClassFilter'](order.status)
            //             }
            //         }
            //     })
            //     uni.removeStorageSync('up_inspect_order')
            // }
        },
		onPullDownRefresh:function(){
			this.getList(false, () => setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000))
		},
		onReachBottom:function(){
			this.getList(true)
		},
		methods: {
			getList(append, fun) {
				if(this.firstDate === undefined) {
					myFirstOrderDate().then((res)=>{
						if(res.data) {
                            console.log(res.data)
							this.firstDate = parseJavaTime(res.data)
						}
						else {
							this.firstDate = new Date()
						}
						this.setData(append)
						if(fun) {
							fun()
						}
					}).catch((err)=>{
						console.log("error!",  err)
					})
				}
				else {
					this.setData(append)
				}
			},
			setData(append) {
				if(!append) {
					this.list = []
				}
				if(this.currentDate === undefined) {
					this.currentDate = new Date()
					this.currentDate.setTime(this.currentDate.getTime() + 3600 * 1000 * 24)
				}
				let counter = 0
				while(counter < 20 && this.currentDate >= this.firstDate) {
					const currentDate = this.currentDate
					const deliverDate = parseTime(currentDate, '{y}-{m}-{d}')
					const deliveryWeek = parseTime(currentDate, '{e}')
					const data = {
						status: 0,
						deliverDate: deliverDate,
						deliveryWeek: deliveryWeek
					}
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
					
					counter++
					this.currentDate.setTime(this.currentDate.getTime() - 3600 * 1000 * 24)
				}
			},
			handleTap(date) {
				console.log(date)
				uni.navigateTo({
					url: '/pages/inspectitem/inspectitem?date=' + date
				})
			} 
		}
	}
</script>

<style>

</style>
