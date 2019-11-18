import http from './interface'

export function fetchOrder(query) {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order/list-by-current-buyer',
    method: 'GET',
		data: query
  })
}

export function fetchSalesOrder(query) {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order/list-by-current-seller',
    method: 'GET',
		data: query
  })
}

export function getPurchaseOrder(query) {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order/{purchaseOrderId}',
    method: 'GET',
		data: query
  })
}

export function priceOrderItem(data) {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order-item/price-order-item',
    method: 'POST',
		data: { data }
  })
}

export function countPendingPriceOrder() {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order/count-pending-price-order',
    method: 'GET'
  })
}

export function countPendingSalesOrder() {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order/count-pending-sales-order',
    method: 'GET'
  })
}

export function fetchCollectReceiveItemByBuyer(query) {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order-item/collect-receive-item-list',
    method: 'GET',
		data: query
  })
}

export function receiveOrderItem(data) {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order-item/receive-order-item',
    method: 'POST',
		data: { data }
  })
}

export function myFirstOrderDate() {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order/buyer-first-order-date',
    method: 'GET'
  })
}

export function checkinSingleSalesOrder(data) {
  return http.request({
    url: '/api/v1/supply-chain/purchase-order/checkin-single-sales-order',
    method: 'POST',
    data: { data }
  })
}
