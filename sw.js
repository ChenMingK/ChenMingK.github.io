// 为 fetch 事件添加事件监听器
document.addEventListener('fetch', function (event) {
  // 检查传入的 HTTP 请求 URL 是否请求以 .jpg 结尾的文件
  if (/\.jpg$/.test(event.request.url)) {
    // 尝试获取某个图片并用它作为替代图片来响应请求
    event.respondWith(fetch('/images/img.jpg'))
  }
})