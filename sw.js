// 为 fetch 事件添加事件监听器
self.addEventListener('fetch', function (event) {
  // 检查传入的 HTTP 请求 URL 是否请求以 .jpg 结尾的文件
  console.log(event.request.url)
  if (/\.jpg$/.test(event.request.url)) {
    console.log('拦截 fetch 请求')
    // 尝试获取某个图片并用它作为替代图片来响应请求
    event.respondWith(fetch('https://chenmingk.github.io./images/img.jpg'))
  }
})
