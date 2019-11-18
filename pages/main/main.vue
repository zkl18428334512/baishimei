<template>  
    <view class="page">
		<view class="cu-bar bg-white solid-bottom padding">
			<view v-if="hasLogin" style="font-size: 50upx;color: #007BFF;">{{userInfo.name}}</view>
		</view>
		<view class="cu-bar bg-white solid-bottom " style="margin-top: -40upx;">
			<view class="action">
				职能：{{Obtainposition1}}
			</view>
		</view>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view v-if="!item.hidden" class="cu-item" v-for="(item,index) in cuIconList" :key="index" 
                          style="width: 350upx;margin-left: 10upx;margin-top: 10upx;height: 440upx;"
                         :style="{backgroundImage:'url('+item.url+')',backgroundSize:'cover'}" >
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" @tap="handleTap(item.path)" style="margin-top: 100upx;">
					<!-- <view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view> -->
				</view>
				<text style="color: #F8F9FA;">{{item.name}}</text>
                 <view class="" v-if="item.badge!=0" >
                         <text class="cuIcon-title text-white " style="color: #F8F9FA;font-size: 20upx;"><block  v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>个进行中 </text>
                 </view>
			</view>
		</view>
        <view class="cu-load load-modal" v-if="loadModal">
            <image src="/static/logo.png" mode="aspectFit"></image>
            <view class="gray-text">加载中...</view>
        </view>
        <!-- <view class="">
             {{addressName}}
         </view>地图定位 -->
       <!--  <view>
             <button type="primary" @click="choosemap">选择位置</button>
         </view> -->
    </view>
</template>  
<script>
	import { countPendingDelivery } from '@/common/api/deliver'
	import { countPendingPriceOrder, countPendingSalesOrder } from '@/common/api/order'
    import { mapState, mapMutations } from 'vuex' 
    import amap from '../../common/amap-wx.js';  
    export default {
		data() {
			return {
                amapPlugin: null,  
                key: '1ba03b51d8cfe5690c97972ebc3a9cd1'  ,
                 addressName: '',  
                            weather: {  
                                hasData: false,  
                                data: []  
                            }  ,
				gridCol: 3,
				gridBorder: false,
                loadModal: false,
                Obtainposition:[],
                Obtainposition1:'',
				cuIconList: [{
                     url:'../../static/img/zhu_03.png',
					cuIcon: 'deliver',
					color: 'red',
					badge: 0,
					name: '配送',
					path: '/pages/deliver/deliver',
					permission: ['admin', 'app:manage:delivery'],
                    hidden: true
				}, {
                    url:'../../static/img/zhu_05.png',
					cuIcon: 'goodsnew',
					color: 'orange',
					badge: 0,
					name: '采购',
					path: '/pages/purchase/purchase',
					permission: ['admin', 'app:manage:purchase'],
                    hidden: true
				}, {
                    url:'../../static/img/zhu_10.png',
					cuIcon: 'squarecheck',
					color: 'yellow',
					badge: 0,
					name: '收货',
					path: '/pages/inspect/inspect',
					permission: ['admin', 'app:manage:inspect'],
                    hidden: true
				}, {
                    url:'../../static/img/zhu_12.png',
					cuIcon: 'edit',
					color: 'yellow',
					badge: 0,
					name: '销售单',
					path: '/pages/sales/sales',
					permission: ['admin', 'app:manage:sales'],
                    hidden: true
				},
				{
                    url:'../../static/img/background.jpg',
					cuIcon: 'squarecheck',
					color: 'yellow',
					badge: 0,
					name: '报表',
					// path: '/pagesA/report/report',
					path: '/pages/report/report',
					permission: ['admin', 'app:manage:inspect'],
				    hidden: true
				}]
			}
		},
        computed: mapState(['hasLogin','userInfo','permissionList', 'isLoading','userToken']),  
        watch: {
            hasLogin(val, oldVal) {
                if(val === true) {
                    this.loadModal = false
                }
            },
            isLoading(val, oldVal) {
                if(val === false) {
                    this.loadData()
                }
            }
        },
		onLoad:function(){
			if(this.hasLogin) {
				this.loadData()
                console.log('3')
			}
			else {
				if(!this.isLoading) {
                    this.backToLogin()
                }
                else {
                    this.loadModal = true
                    console.log('2')
                }
             console.log('1')
			}
			console.log(this.userInfo)
			console.log(this.userToken)
            this.obtainposition()
            /* this.amapPlugin = new amap.AMapWX({  
                        key: this.key  
                    })
             this.getRegeo() */   
		},
        onShow:function(e){
            this.loadData()
        },
        methods: {  
            ...mapMutations(['logout']),
            loadData() {
                const permissionList = this.permissionList
				this.cuIconList.forEach(cuIcon => {
                    if(this.hasPermission(permissionList, cuIcon.permission)) {
                        cuIcon.hidden = false
                        if(cuIcon.cuIcon === 'deliver') {
                            console.log(cuIcon)
                            this.getPendingDeliveryOrderCount(cuIcon)
                        }
                        if(cuIcon.cuIcon === 'goodsnew') {
                            this.getPendingPriceOrderCount(cuIcon)
                        }
                        if(cuIcon.cuIcon === 'edit') {
                            this.getPendingSalesOrderCount(cuIcon)
                        }
                    }
				})
            },
            backToLogin() {
                uni.reLaunch({
					url: '../login/login'
				})
            },
            handleTap(e) {
				// console.log(e)
				uni.navigateTo({
					url: e+'?name={userInfo.name}'
				})
			},
			getPendingDeliveryOrderCount(cuIcon) {
				countPendingDelivery().then((res)=>{
					cuIcon.badge = res.data
				}).catch((err)=>{
					console.log("error!",  err)
				})
			},
			getPendingPriceOrderCount(cuIcon) {
				countPendingPriceOrder().then((res)=>{
					cuIcon.badge = res.data
				}).catch((err)=>{
					console.log("error!",  err)
				})
			},
            getPendingSalesOrderCount(cuIcon) {
            	countPendingSalesOrder().then((res)=>{
            		cuIcon.badge = res.data
            	}).catch((err)=>{
            		console.log("error!",  err)
            	})
            },
            hasPermission(userPermissions, permissions) {
                return userPermissions.some(role => permissions.includes(role))
            },
            obtainposition(){
                for(var i=0;i<this.cuIconList.length;i++){
                    this.Obtainposition.push(this.cuIconList[i].name)
                    this.Obtainposition1=this.Obtainposition.join('/')
                }
            },
            /* getRegeo() {  
                        uni.showLoading({  
                            title: '获取信息中'  
                        });  
                        this.amapPlugin.getRegeo({  
                            success: (data) => {  
                                console.log(data)  
                                this.addressName = data[0].name;  
                                uni.hideLoading();  
                            }  
                        });  
                        console.log(this.addressName)
                    } */ 
          /* choosemap(){
                uni.chooseLocation({
                    success: function (res) {
                        console.log('位置名称：' + res.name);
                        console.log('详细地址：' + res.address);
                        console.log('纬度：' + res.latitude);
                        console.log('经度：' + res.longitude);
                    }
                });
            } */
        }  
    }  
</script>  