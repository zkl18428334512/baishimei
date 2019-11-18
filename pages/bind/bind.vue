<template>
	<view>
		<view class="input-group">
			<!-- <view class="cu-form-group margin-top">
				<view class="title">用户</view>
				<input v-model="name" placeholder="用户" name="input" disabled></input>
			</view> -->
            <view class="cu-form-group margin-top">
				<view class="title">手机号码</view>
				<input v-model="account" placeholder="请输入" name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
            <view class="cu-form-group">
				<view class="title">验证码</view>
				<input v-model="password" placeholder="验证码" name="input"></input>
				<button v-if="askLoginCode" class='cu-btn bg-green shadow' @tap="handleLoginCode">验证码</button>
				<view v-else class='cu-tag round'>{{ counter }}s</view>
			</view>
        </view>
		<view class="padding flex flex-direction">
			<button type="primary" class="cu-btn bg-green shadow lg margin-tb-sm" @tap="bindUser">确认</button>
		</view>
	</view>
</template>

<script>
	import { doLogin, getLoginCode, getUserInfo } from "@/common/api/user"
	import { checkPhone, checkPwd } from "@/common/common.js"
    import { mapState, mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				name: '',
				account: '',
				password: '',
				openId: '',
				positionTop: 0,
				askLoginCode: true,
				counter: 60,
                platform: 'manage_wx_app'
			}
		},
		onLoad:function(e){
			console.log(e);
			this.openId = e.openId
			// this.openId = e.name
		},
		onReady() {
            this.initPosition();
        },
		methods: {
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
			bindUser() {
				if(!checkPhone(this.account)){
					return;
				};
				if(!checkPwd(this.password)){
					return;
				};
				/*
				* 登录逻辑
				*/
				doLogin({ username: this.account, password: this.password, openId: this.openId, platform: this.platform }).then((res)=>{
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
			toMain() {
                
                uni.reLaunch({
					url: '../main/main',
				});
            },
			...mapMutations(['login', 'info'])
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
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
