export function msgSuccess(msg) {
    if(msg === null || msg === undefined) {
        msg = '成功'
    }
    uni.showToast({
        title: msg,
        icon: 'success',
        mask: true
    })
}

export function msgError(msg) {
    if(msg === null || msg === undefined) {
        msg = '失败'
    }
    uni.showToast({
        title: msg,
        icon: 'none',
        mask: true
    })
}
