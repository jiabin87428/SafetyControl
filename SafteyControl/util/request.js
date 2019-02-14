// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
const requestLoading = function(url, params, message, success, fail) {
  // console.log(params)
// 	wx.showNavigationBarLoading()
// 	if (message != "") {
// 	  wx.showLoading({
// 	    title: message,
// 	  })
// 	}
	console.log(url);
	uni.request({
			url: url, 
			data: params,
			header: {
					// 'Content-Type': 'application/json'
					'Content-type': 'application/x-www-form-urlencoded'
			},
			method: 'POST',
			success: (res) => {
// 					wx.hideNavigationBarLoading()
// 					if (message != "") {
// 					  wx.hideLoading()
// 					}

				// console.log('' + JSON.stringify(res));
				if (res.data.success == 'true') {
					success(res.data)
				} else {
					fail()
				}
			},
			fail:(res) => {
				// console.log('' + JSON.stringify(res))
				fail()
			}
	});
}
const request = function(url, message, success, fail) {
//   wx.showNavigationBarLoading()
//   if (message != "") {
//     wx.showLoading({
//       title: message,
//     })
//   }
	uni.request({
			url: url, 
			header: {
					// 'Content-Type': 'application/json'
					'Content-type': 'application/x-www-form-urlencoded'
			},
			method: 'GET',
			success: (res) => {
// 					wx.hideNavigationBarLoading()
// 					if (message != "") {
// 					  wx.hideLoading()
// 					}
					if (res.success == 'true') {
						success(res.data)
					} else {
						fail()
					}
			},
			fail(res) {
				fail()
			}
	});
}
export default {
    request,
    requestLoading
}