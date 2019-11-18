<template>
	<view>
		<view v-if="order.purchaseOrderId" class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="text-content flex">
                    <view class="flex-treble">
                        <view class="flex margin-top">
                        	<view class="cuIcon-cartfill margin-right-xs"></view>
                        	<view>单号: {{ order.purchaseOrderId }}</view>
                        </view>
                        <view class="flex">
                        	<view class="cuIcon-shopfill margin-right-xs"></view>
                        	<view>{{ order.buyerOrgName | buyerOrgNameFilter }}</view>
                        </view>
                        <view v-if="order.buyerOrgAddress" class="flex">
                        	<view class="cuIcon-locationfill margin-right-xs"></view>
                        	<view>{{ order.buyerOrgAddress }}</view>
                        </view>
                        <view v-if="order.remark" class="flex">
                        	<view class="cuIcon-commentfill margin-right-xs"></view>
                        	<view>备注: {{ order.remark }}</view>
                        </view>
                    </view>
					<view class="flex flex-sub justify-center align-center">
                        <button class="cu-btn" :class="order.statusClassName" :disabled="order.status > 0" @tap="handleConfirmOrder">{{ order.status | statusNameFilter }}</button>
                    </view>
				</view>
				<view v-if="sourceList.length > 0" class="cu-list menu-avatar solids-top">
					<view class="cu-bar bg-white search">
						<view class="search-form round">
							<text class="cuIcon-search"></text>
							<input type="text" placeholder="搜索" confirm-type="search" @input="handleSearch"></input>
						</view>
					</view>
					<view v-for="(item) in list" v-bind:key="item.purchaseOrderItemId" class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url(' + item.productIconThumbnailUrl + ')'"></view>
						<view class="content sub">
							<view class="text-grey flex justify-between">
								{{ item.productName }}
							</view>
							<view class="text-gray text-sm flex">
                                <view class="flex-treble">下单:{{ item.orderQty }}</view>
                                <view class="flex-treble">单位:{{ item.unit }}</view>
							</view>
                            <view class="text-gray text-sm flex">
                                <view class="flex-treble">备注:{{ item.remark }}</view>
                            </view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getPurchaseOrder, checkinSingleSalesOrder } from '@/common/api/order'
	import { pinyinMatch } from '@/common/utils/pinyin-match/pinyin-match.js'
	export default {
		filters: {
            statusNameFilter(status) {
              const nameMap = {
            	0: '接单'
              }
              return nameMap[status] || '已接单'
            },
            statusClassFilter(status) {
              const nameMap = {
            	0: 'bg-blue'
              }
              return nameMap[status] || 'bg-grey'
            },
			buyerOrgNameFilter(name) {
				return name || '无'
			}
		},
		data() {
			return {
				isCard: false,
				listQuery: {
					pageNo: 1,
					pageSize: 20,
					purchaseOrderId: undefined
				},
				order: {
					purchaseOrderId: undefined,
					sellerOrgName: undefined
				},
				itemPriceData: {
					purchaseOrderItemId: '',
					salesUnitPrice: 0,
					orderQty: 0
				},
				size: 10,
				sourceList: [],
				list: []
			}
		},
		onLoad:function(e){
			this.listQuery.purchaseOrderId = e.orderId
			this.getOrder()
		},
		onReachBottom:function(){
			this.loadData()
		},
		methods: {
			getOrder() {
				getPurchaseOrder(this.listQuery).then((res)=>{
					console.log(res)
					this.order = res.data
                    this.order.statusClassName = this.$options.filters['statusClassFilter'](this.order.status)
					this.sourceList = res.data.purchaseOrderItemList
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
			handleConfirmOrder() {
				checkinSingleSalesOrder(this.order.purchaseOrderId).then((res)=>{
					const result = res.data
                    if(result) {
                        this.order.statusClassName = this.$options.filters['statusClassFilter'](5)
                        this.order.status = 5
                        uni.setStorageSync('up_sales_order', { purchaseOrderId: this.order.purchaseOrderId, status: 5 })
                        uni.showToast({
                            title: '',
                            icon: 'success',
                            mask: false
                        })
                    }
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
.cu-list.menu-avatar>.cu-item {
    height: 180upx;
}
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
