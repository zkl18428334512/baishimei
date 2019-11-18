<template>
	<view>
		<view v-if="order.deliveryOrderId" class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="text-content">
					<view class="flex margin-top">
						<view class="cuIcon-cartfill margin-right-xs"></view>
						<view>配送单号: {{ order.deliveryOrderId }}</view>
					</view>
					<view class="flex">
						<view class="cuIcon-shopfill margin-right-xs"></view>
						<view>{{ order.receiverOrgName }}</view>
					</view>
					
					<view v-if="order.deliveryAddress" class="flex">
						<view class="cuIcon-locationfill margin-right-xs"></view>
						<view v-if="order.deliveryAddress">{{ order.deliveryAddress }}</view>
					</view>
					<view v-if="order.remark" class="flex">
						<view class="cuIcon-commentfill margin-right-xs"></view>
						<view>备注: {{ order.remark }}</view>
					</view>
				</view>
				<view v-if="sourceList.length > 0" class="cu-list menu-avatar solids-top">
					<view class="cu-bar bg-white search">
						<view class="search-form round">
							<text class="cuIcon-search"></text>
							<input type="text" placeholder="搜索" confirm-type="search" @input="handleSearch"></input>
						</view>
					</view>
					<view v-for="(item) in list" v-bind:key="item.deliveryOrderItemId" class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url(' + item.productIconThumbnailUrl + ')'"></view>
						<view class="content sub">
							<view class="text-grey flex justify-between">
								{{ item.productName }}
								<view class="flex">
									<view class="cuIcon-tag margin-right-xs"></view>
									<view>{{ item.salesUnit }}</view>
								</view>
							</view>
							<view class="text-gray text-sm flex">
								<view class="flex-treble">下单:{{ item.orderQty + item.unit }}</view>
								<view class="flex flex-treble align-center">
									<view class="flex-sub">配送:</view>
									<view class="flex-twice bg-gray"><input v-model="item.deliveryQty" type="digit" :placeholder="item.orderQty"></input></view>
								</view>
							</view>
						</view>
						<view v-if="order.status < 20" class="flex op margin-right-xs" @tap="handleTap(item)">
							<view class="cuIcon-deliver" :class="item.status<15 ? 'text-orange':'text-gray'"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { fetchDeliveryItem, getDeliveryOrder, loadItem } from '@/common/api/deliver'
	import { pinyinMatch } from '@/common/utils/pinyin-match/pinyin-match.js'
	export default {
		data() {
			return {
				isCard: false,
				listQuery: {
					pageNo: 1,
					pageSize: 20,
					deliveryOrderId: undefined
				},
				order: {
					deliveryOrderId: undefined,
					purchaseOrderId: '',
					receiverOrgName: ''
				},
				size: 10,
				sourceList: [],
				list: []
			}
		},
		onLoad:function(e){
			console.log(e)
			this.listQuery.deliveryOrderId = e.orderId
			this.getOrder()
		},
		onReachBottom:function(){
			this.loadData()
		},
		methods: {
			getOrder() {
				getDeliveryOrder(this.listQuery).then((res)=>{
					console.log(res)
					this.order = res.data
					this.sourceList = res.data.deliveryOrderItemList
					this.loadData()
				}).catch((err)=>{
					console.log("error!",  err)
				})
			},
			loadData() {
				if (this.list.length < this.sourceList.length) {
					for(var i=this.list.length, c=0; i < this.sourceList.length && c < this.size;i++,c++) {
						this.list.push(this.sourceList[i])
					}
					console.log(this.list)
				}
			},
			getList() {
				fetchDeliveryItem(this.listQuery).then((res)=>{
					console.log(res)
					this.sourceList = [...res.data.list || []]
					this.setData(orderList)
				}).catch((err)=>{
					console.log("error!",  err)
				})
			},
			handleTap(item) {
				const loaded = item.status < 15 ? true : false
				loadItem({ deliveryOrderItemId: item.deliveryOrderItemId, loaded: loaded, deliveryQty: item.deliveryQty }).then((res)=>{
					const data = res.data
					item.status = loaded ? 15 : 5
                    uni.setStorageSync('up_delivery_order', {deliveryOrderId: data.deliveryOrderId, status: data.status})
                    uni.showToast({
                        title: '',
                        icon: 'success',
                        mask: false
                    })
				}).catch((err)=>{
					console.log("error!",  err)
				})
                
			},
			handleSearch(e) {
				let key = e.detail.value.toLowerCase();
				let list = this.sourceList;
				this.list = this.sourceList.filter(function(d) {
					return pinyinMatch(d.productName, key)
				})
			}
		}
	}
</script>

<style>
.cu-item .flex>.flex-twice {
	margin-right: 10upx;
}
.cu-item .flex>.flex-twice input {
	padding: 0 10upx;
}
.cu-item .op [class*="cuIcon-"] {
	font-size: 48upx;
	width: 100%;
}
</style>
