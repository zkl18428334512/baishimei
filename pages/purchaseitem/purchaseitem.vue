<template>
	<view>
		<view v-if="order.purchaseOrderId" class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="text-content">
					<view class="flex margin-top">
						<view class="cuIcon-cartfill margin-right-xs"></view>
						<view>采购单号: {{ order.purchaseOrderId }}</view>
					</view>
					<view class="flex">
						<view class="cuIcon-shopfill margin-right-xs"></view>
						<view>{{ order.sellerOrgName | sellerOrgNameFilter }}</view>
					</view>
					<view v-if="order.sellerOrgAddress" class="flex">
						<view class="cuIcon-locationfill margin-right-xs"></view>
						<view>{{ order.sellerOrgAddress }}</view>
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
				</view>
			</view>
		</view>
        <view class="cu-card dynamic list">
            <view v-for="(data, key, index) in list" v-bind:key="key" class="cu-item shadow">
                <view class="cu-list menu-avatar">
                    <view class="cu-item" style="height: 200upx;">
                        <view class="cu-avatar round lg" :style="(data.productIconThumbnailUrl) ? 'background-image:url(' + data.productIconThumbnailUrl + ')' : ''"></view>
                        <view class="content flex-sub">
                            <view class="text-grey flex">
                                <view class="flex">
                                    {{ data.productName }}
                                </view>
                            </view>
                            <view class="text-red flex">

                                <view class="flex flex-sub align-center">
                                    <view class="cuIcon-text"></view>
                                    <view class="text-sm margin-right-ms">总数量:{{ data.totalPurchaseQty }}</view>
                                </view>
                                <view class="flex flex-sub align-center">
                                    <view class="cuIcon-moneybag"></view>
                                    <view class="text-sm">总金额:{{ data.totalPrice }}</view>
                                </view>
                            </view>
                            <view class="text-grey flex">
                                <view class="flex flex-treble align-center">
                                	<view class="flex-sub">价格:</view>
                                	<view class="flex-twice bg-gray"><input v-model="data.salesUnitPrice" type="digit" :placeholder="data.salesUnitPrice"></input></view>
                                </view>
                                <view class="flex flex-treble align-center">
                                	<view class="flex-sub">单位:</view>
                                	<view class="flex-twice bg-gray"><input v-model="data.salesUnit" :placeholder="data.salesUnit"></input></view>
                                </view>
                            </view>
                        </view>
                        <view class="flex op" @tap="handleTap(data)">
                        	<view class="cuIcon-edit" :class="data.status===0 ? 'text-orange':'text-gray'"></view>
                        </view>
                    </view>
                </view>
                <view class="cu-list content">
                    <view v-for="(item) in data.itemList" v-bind:key="item.purchaseOrderItemId" class="cu-item shadow">
                        <view class="content sub">
                            <view class="text-grey flex">
                                <view class="flex flex-twice">
                                    <view class="cuIcon-peoplefill margin-right-xs"></view>
                                    <view>{{ groupPrevBuyerOrgName(item.prevBuyerOrgName, item.prevBuyerBranchOrgName) | prevBuyerOrgNameFilter }}</view>
                                </view>
                                <view class="flex flex-sub justify-end">
                                    <view class="flex-sub">数量:</view>
                                    <view class="flex-twice"><input v-model="item.purchaseQty" type="digit" :placeholder="item.orderQty" class="bg-gray"></input></view>
                                </view>
                            </view>
                            <view v-if="item.remark" class="text-gray flex">
                                <view class="cuIcon-comment margin-right-xs"></view>
                                <view class="flex-sub text-sm align-center" style="line-height: 2;">{{ item.remark }}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	import { getPurchaseOrderWithGroupItem, priceOrderItem } from '@/common/api/order'
	import { pinyinMatch } from '@/common/utils/pinyin-match/pinyin-match.js'
	export default {
		filters: {
            sellerOrgNameFilter(name) {
				return name || '自采购'
			},
			prevBuyerOrgNameFilter(name) {
				return name || '入库采购'
			}
		},
		data() {
			return {
				isCard: false,
				listQuery: {
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
        watch: {
            list: {
              handler: function (after, before) {
                after.forEach(data => {
                    let totalPurchaseQty = 0
                    data.itemList.forEach(i => {
                        totalPurchaseQty += Number(i.purchaseQty)
                    })
                    data.totalPurchaseQty = totalPurchaseQty
                    data.totalPrice = Math.round(totalPurchaseQty * data.salesUnitPrice * 100) / 100
                })
              },
              deep: true
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
            groupPrevBuyerOrgName(name, childName) {
                if(childName) {
                    return name + '[' + childName + ']'
                }
                return name
            },
			getOrder() {
				getPurchaseOrderWithGroupItem(this.listQuery).then((res)=>{
					this.order = res.data
					this.sourceList = res.data.purchaseOrderItemGroupList
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
            	}
            },
			handleTap(data) {
                const list = new Array()
                data.itemList.forEach(item => {
                    list.push({ 
                        purchaseOrderId: item.purchaseOrderId, 
                        purchaseOrderItemId: item.purchaseOrderItemId, 
                        salesUnitPrice: data.salesUnitPrice, 
                        salesUnit: data.salesUnit, 
                        purchaseQty: item.purchaseQty
                    })
                })
				priceOrderItem(list).then((res)=>{
					const order = res.data
                    const items = order.purchaseOrderItemList
					data.status = items[0].status
                    data.itemList.forEach(i => {
                        const item = items.find(a => a.purchaseOrderItemId === i.purchaseOrderItemId)
                        if(item) {
                            i.remark = item.remark
                        }
                    })
					// data.salesUnitPrice = orderItem.salesUnitPrice
					// data.orderQty = orderItem.orderQty
                    
                    uni.setStorageSync('up_purchase_order', {purchaseOrderId: order.purchaseOrderId, status: order.status})
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
.cu-card.dynamic.list>.cu-item.shadow:first-child {
    margin-top: 0;
}
.cu-list.menu-avatar>.cu-item .content.flex-sub {
    width: calc(100% - 96upx - 60upx - 60upx);
}
.cu-list.content {
	overflow: hidden;
}

.cu-list.content>.cu-item {
	position: relative;
	display: flex;
	padding: 0 30upx 30upx 30upx;
	/* height: 140upx; */
	background-color: #ffffff;
	align-items: center
    
}

.cu-list.content>.cu-item>.cu-avatar {
	position: absolute;
	left: 30upx
}

.cu-list.content>.cu-item .content.sub {
	/* width: calc(100% - 60upx); */
    width: 100%;
}
.cu-item .flex>.flex-twice {
	margin-right: 10upx;
}
.cu-item .flex>.flex-twice input {
	padding: 0 10upx;
}
.cu-item .op {
    width: 60upx;
}

.cu-item .op [class*="cuIcon-"] {
	font-size: 48upx;
	width: 100%;
    text-align: center;
}
</style>
