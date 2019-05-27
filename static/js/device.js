var ua = window.navigator.userAgent;
export default {
	isLingsir: /WinClient/i.test(ua),
    isMobile: /AppleWebKit.*Mobile.*/i.test(ua),
    isWeixin: /MicroMessenger/i.test(ua),
    isAndroid: /Android|Adr/i.test(ua),
    isIos: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua),
    isMQQBrowser: /MQQBrowser/i.test(ua)
}
