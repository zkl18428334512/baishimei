import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/common/auth'
// import { parseJavaTime } from '@/common/utils/tools.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: true,
        hasLogin: false,
        isLoading: false,
        userInfo: undefined,
		permissionList: [],
		userToken: '',
		tokenExpireTime: undefined
    },
    mutations: {
		login(state, provider) {
			state.userToken = provider.token
			// state.tokenExpireTime = parseJavaTime(provider.expireTime)
            setToken(provider.token)
        },  
        logout(state) {//退出登录  
            state.hasLogin = false  
            state.userInfo = undefined
			state.permissionList = []
			state.userToken = ''
			state.tokenExpireTime = undefined
            removeToken()
        },
        loadingInfo(state, loading) {
            state.isLoading = loading
        },
        info(state, user) {
            state.hasLogin = true
            state.userToken = getToken()
            state.userInfo = user
            state.permissionList = user.permissionList
            
            // const res = await getUserInfo();
            // if(res) {
            //     console.log(res)
            //     state.hasLogin = true
            //     state.userToken = getToken()
            //     state.userInfo = res.data
            //     state.permissionList = res.data.permissionList
            // }
		}
    }
})

export default store
