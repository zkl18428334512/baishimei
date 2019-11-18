<template>
	<view>
		<view v-if="order.deliveryDate" class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="text-content">
					<view class="flex margin-top">
						<view class="cuIcon-cartfill margin-right-xs"></view>
						<view>{{ order.deliveryDate }}汇总采购单</view>
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
                        <view class="cu-avatar round lg" :style="'background-image:url(' + data.productIconThumbnailUrl + ')'"></view>
                      <view class="content flex-sub">
                          <view class="text-grey flex">
                              <view class="flex">
                                  {{ data.productName }}
                              </view>
                          </view>
                          <view class="text-red flex">
                      
                              <view class="flex flex-sub align-center">
                                  <view class="cuIcon-text"></view>
                                  <view class="text-sm margin-right-ms">总数量:{{ data.totalReceivedQty }}</view>
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
                    </view>
                </view>
                <view class="cu-list content">
                    <view v-for="(item) in data.itemList" v-bind:key="item.purchaseOrderItemId" class="cu-item shadow">
                        <view class="content sub">
                            <view class="text-grey flex">
                                <view class="flex flex-treble">
                                    <view class="cuIcon-shopfill margin-right-xs"></view>
                                    <view>{{ item.sellerOrgName | sellerOrgNameFilter }}</view>
                                </view>
                                <view class="flex flex-sub justify-end">
                                    <view class="cuIcon-tag margin-right-xs"></view>
                                    <view>{{ item.salesUnit }}</view>
                                </view>
                            </view>
                            <view v-if="item.prevBuyerOrgId" class="text-grey flex">
                                <view class="flex flex-treble">
                                    <view class="cuIcon-peoplefill margin-right-xs"></view>
                                    <view>{{ groupPrevBuyerOrgName(item.prevBuyerOrgName, item.prevBuyerBranchOrgName) | prevBuyerOrgNameFilter }}</view>
                                </view>
                            </view>
                            <view class="text-gray text-sm flex">
                                <view class="flex-treble">下单:{{ item.orderQty + item.unit }}</view>
                                <view class="flex flex-treble align-center">
                                    <view class="flex-sub">验收:</view>
                                    <view class="flex-twice bg-gray"><input v-model="item.receivedQty" type="digit" :placeholder="item.orderQty"></input></view>
                                </view>
                            </view>
                            <view v-if="item.remark" class="text-gray flex">
                                <view class="cuIcon-comment margin-right-xs"></view>
                                <view class="flex-sub text-sm align-center" style="line-height: 2;">{{ item.remark }}</view>
                            </view>
                        </view>
                        <view class="flex op" @tap="handleTap(data, item)">
                            <view class="cuIcon-edit" :class="item.status<20 ? 'text-orange':'text-gray'"></view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	import { fetchCollectReceiveItemByBuyer, receiveOrderItem } from '@/common/api/order'
	import { pinyinMatch } from '@/common/utils/pinyin-match/pinyin-match.js'
    import { parseTime, parseJavaTime } from '@/common/utils/tools.js'
    import { msgSuccess, msgError } from '@/common/utils/message.js'
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
					pageNo: 1,
					pageSize: 20000,
					deliveryDate: undefined,
                    purchaseType: 1
				},
				order: {
					deliveryDate: undefined
				},
				itemReceiveData: {
                    warehouseId: undefined,
					purchaseOrderItemId: '',
					receivedQty: 0,
                    salesUnit: undefined,
                    salesUnitPrice: undefined
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
                    let totalReceivedQty = 0
                    data.itemList.forEach(i => {
                        totalReceivedQty += Number(i.receivedQty)
                    })
                    data.totalReceivedQty = totalReceivedQty
                    data.totalPrice = Math.round(totalReceivedQty * data.salesUnitPrice * 100) / 100
                })
              },
              deep: true
            }
        },
		onLoad:function(e){
			// console.log(e)
			this.listQuery.deliveryDate = e.date
            this.order = { deliveryDate: e.date }
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
				fetchCollectReceiveItemByBuyer(this.listQuery).then((res)=>{
					// console.log(res)
					this.sourceList = res.data
                    this.setDefaultData()
					this.loadData()
				}).catch((err)=>{
					console.log("error!",  err)
                    msgError(err.msg)
				})
			},
            setDefaultData() {
                this.sourceList.forEach(d => {
                    if(d.itemList) {
                        d.itemList.forEach(i => {
                            if(i.receivedQty === 0) {
                                i.receivedQty = i.orderQty
                            }
                        })
                    }
                })
            },
			loadData() {
				if (this.list.length < this.sourceList.length) {
					for(var i=this.list.length, c=0; i < this.sourceList.length && c < this.size;i++,c++) {
						this.list.push(this.sourceList[i])
					}
				}
			},
			handleTap(data, item) {
                if(item.receivedQty === null || item.receivedQty === undefined || item.receivedQty === '') {
                    item.receivedQty = item.orderQty
                }
                item.salesUnit = data.salesUnit
                item.salesUnitPrice = data.salesUnitPrice
                const postData = {
                    purchaseOrderItemId: item.purchaseOrderItemId, 
                    receivedQty: item.receivedQty,
                    salesUnit: item.salesUnit,
                    salesUnitPrice: item.salesUnitPrice
                }
				receiveOrderItem(postData).then((res)=>{
					const order = res.data
                    const orderItem = order.purchaseOrderItemList[0]
					item.status = orderItem.status
                    item.salesUnit = orderItem.salesUnit
                    item.remark = orderItem.remark
                    uni.showToast({
                        title: '',
                        icon: 'success',
                        mask: false
                    })
                    // console.log(uni.getStorageSync('up_inspect_order'))
				}).catch((err)=>{
					console.log("error!",  err)
                    msgError(err.msg)
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
	width: calc(100% - 60upx);
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
