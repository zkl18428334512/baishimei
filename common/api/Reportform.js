 import http from './interface'
 
export function  LoadYesterdaySalesData(query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/list-gross-profit-data",
		method: 'GET',
		data:query
	})
	
}

export function  FlipInstantaneousLoadingSalesData(query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/list-sale-data",
		method: 'GET',
		data:query
	})
}

export function CustomerDataChangeDataAnalysis (query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/list-sale-data",
		method: 'GET',
		data:query
	})
}

export function Changethetimetorenderdata (query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/list-sale-data",
		method: 'GET',
		data:query
	})
}

export function Loadingcustomerinformation (query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/list-rel-org",
		method: 'GET',
		data:query
	})
}
 
export function Loadingcommodityinformation (query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/product-type-tree",
		method: 'GET',
		data:query
	})
}

export function CommodityChangeData (query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/list-sale-data",
		method: 'GET',
		data:query
	})
}

export function Grossprofitanalysisdata (query){
	return  http.request({
		url: "/report-svc/api/v1/report/stat-data-report/list-gross-profit-data",
		method: 'GET',
		data:query
	})
}

