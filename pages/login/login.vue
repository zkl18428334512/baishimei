<template>
    <view>
        <view class="input-group ">
            <view class="flex" >
                <image src="../../static/img/login_03.png" mode="" class="img"></image>
            </view>
            <view class="cu-form-group margin-top" style="width: 96%;margin-left: 2%;border-radius:35upx;min-height: 50rpx;height: 60rpx;margin-top: 200upx;">
                <image src="../../static/img/userHL.png" mode="" style="width: 40upx;height: 40upx;"></image>
				<input v-model="account" placeholder="请输入手机号" name="input" style="margin-left: 10upx;"></input>
				<!-- <view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view> -->
			</view>
            <view class="cu-form-group" style="width: 96%;margin-left: 2%;border-radius: 35upx;min-height: 50rpx;height: 60rpx;margin-top: 20upx;">
				<image src="../../static/img/login_10.png" style="width: 35upx;height: 35upx;" mode=""></image>
				<input v-model="password" placeholder="请输入验证码" name="input" style="margin-left: 16upx;"></input>
                <image src="../../static/img/login_13.png" mode="" style="width:120upx ;height: 40upx;" v-if="askLoginCode" @tap="handleLoginCode"></image>
				<!-- <button v-if="askLoginCode" class='cu-btn bg-green shadow' @tap="handleLoginCode" >获取</button> -->
				<view v-else class='cu-tag round'>{{ counter }}s</view>
			</view>
        </view>
		<view class="padding flex flex-direction">
            <image src="../../static/img/login_17.png" mode="" style="width: 400upx;height: 80upx;"  @tap="bindLogin" ></image>
			<!-- <button type="primary" class="cu-btn bg-green shadow lg margin-tb-sm" @tap="bindLogin">登录</button> -->
		</view>
        <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
        </view>
    </view>
</template>

<script>
	import { doLogin, getLoginCode, doLoginWithWechat, getUserInfo } from "@/common/api/user"
	import { checkPhone, checkPwd } from "@/common/common.js"
    import { mapState, mapMutations } from 'vuex'

    export default {
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0,
                askLoginCode: true,
                counter: 60,
                // platform: 'mall_wx_app'
                platform: 'manage_wx_app'
            }
        },
        computed: mapState(['forcedLogin', 'userToken']),
        methods: {
            initProvider() {
                const filters = ['weixin'];
                uni.getProvider({
                    service: 'oauth',
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/img/' + res.provider[i] + '.png'
                                    });
                                }
                            }
                            this.hasProvider = true;
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
            isHidePasswordClick(){
                this.isHidePassword=!this.isHidePassword
            },
            handleLoginCode() {
                if(!checkPhone(this.account)){
                    return;
                };
                getLoginCode(this.account).then((res)=>{
                    uni.showToast({
                        title: '验证码已发送',
                        icon: 'success',
                        mask: true
                    });
                    this.askLoginCode = false
                    this.timedown()
                }).catch((err)=>{
                    const msg = err.msg;
                    uni.showToast({
                        title: msg,
                        mask: true,
                        icon: 'none'
                    });
                })
            },
            bindLogin() {
                if(!checkPhone(this.account)){
                    return;
                };
                if(!checkPwd(this.password)){
                    return;
                };
                /*
                * 登录逻辑
                */
                doLogin({ username: this.account, password: this.password }).then((res)=>{
                    this.loading = false;
                    console.log('request success', res)
                    uni.showToast({
                        title: '请求成功',
                        icon: 'success',
                        mask: true
                    });
                    this.login(res.data)
                    getUserInfo().then((res) => {
                        this.info(res.data)
                        this.toMain()
                    })
                }).catch((err)=>{
                    this.loading = false;
                    const msg = err.msg;
                    uni.showToast({
                        title: msg,
                        mask: true,
                        icon: 'none'
                    });
                    console.log('request fail', err);
                })
            },
            oauth(value) {
                uni.login({
                    provider: value,
                    success: (loginRes) => {
                        console.log(loginRes)
                        doLoginWithWechat({ username: loginRes.code, platform: this.platform }).then((res)=>{
                            if(res.code === 10001999) {
                                this.toBind(res.data)
                            } else {
                                uni.showToast({
                                    title: '请求成功',
                                    icon: 'success',
                                    mask: true
                                });
                                this.login(res.data)
                                getUserInfo().then((res) => {
                                    this.info(res.data)
                                    this.toMain()
                                })
                            }
                        }).catch((err)=>{
                            if(err.code === 10001999) {
                                this.toBind(err.data)
                            } else {
                                const msg = err.msg;
                                uni.showToast({
                                    title: msg,
                                    mask: true,
                                    icon: 'none'
                                });
                            }
                        })
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
            toMain() {
                /**
                 * 强制登录时使用reLaunch方式跳转过来
                 * 返回首页也使用reLaunch方式
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
						
                    });
                } else {
                    uni.navigateBack();
                }
            },
            toBind(data) {
                uni.navigateTo({
                    url: '../bind/bind?openId='+data
                });
            },
            timedown() {
                const that = this;
                if (this.counter > 0) {
                    this.counter = this.counter - 1;
                    setTimeout(function() {
                        that.timedown()
                    }, 1000); 
                }
                else {
                    this.askLoginCode = true;
                    this.counter = 60
                }
            },
            ...mapMutations(['login', 'info'])
        },
        onReady() {
            this.initPosition();
            this.initProvider();
        }
    }
</script>

<style>
    .flex{
       display: flex;
       flex-direction: row;
       justify-content: center;
    }
    .img{
       width: 200upx;
       height: 200upx;
       margin-top: 50upx;
    }
	.cu-form-group .title {
		min-width: calc(2em + 15px);
	}
    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-row navigator {
        color: #007aff;
        padding: 0 20upx;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100upx;
        height: 100upx;
        border: 1upx solid #dddddd;
        border-radius: 100upx;
        margin: 0 40upx;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 60upx;
        height: 60upx;
        margin: 20upx;
    }
</style>
