import http from './interface'

export function getDeliveryOrder(query) {
  return http.request({
    url: '/api/v1/supply-chain/delivery-order/{deliveryOrderId}',
    method: 'GET',
		data: query
  })
}

export function fetchPendingDelivery(query) {
  return http.request({
    url: '/api/v1/supply-chain/delivery-order/list-pending-delivery-order',
    method: 'GET',
		data: query
  })
}

export function countPendingDelivery() {
  return http.request({
    url: '/api/v1/supply-chain/delivery-order/count-pending-delivery-order',
    method: 'GET'
  })
}

export function fetchDeliveryItem(query) {
  return http.request({
    url: '/api/v1/supply-chain/delivery-order-item/{deliveryOrderId}/list',
    method: 'GET',
		data: query
  })
}

export function loadItem(data) {
  return http.request({
    url: '/api/v1/supply-chain/delivery-order-item/load-item',
    method: 'POST',
		data: { data }
  })
}