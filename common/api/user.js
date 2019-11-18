import http from './interface'

export function doLogin(data) {
  return http.request({
    url: '/auth/login-code',
    method: 'post',
    data: { data: data }
  })
}

export function getLoginCode(data) {
  return http.request({
    url: '/auth/sms-login-code',
    method: 'post',
    data: { data: data }
  })
}

export function doLoginWithWechat(data) {
  return http.request({
    url: '/auth/login-wechat-code',
    method: 'post',
    data: { data: data }
  })
}

export function getUserInfo() {
  return http.request({
    url: '/auth/me',
    method: 'GET'
  })
}