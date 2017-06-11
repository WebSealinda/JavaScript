var jsSize = {

	//	网页可见宽度，高度
	wClientW: function() {
	return document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
	},
	wClientH: function() {
		return document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
	},
//	网页可见宽度,高度(包括边线的高,宽)
	wOffsetW: function() {
		return document.body.offsetWidth;
	},
	wOffsetH: function() {
		return document.body.offsetHeight;
	},
//	网页正文宽高
	wScrollW: function() {
		return document.body.scrollWidth;
	},
	wScrollH: function() {
		return document.body.scrollHeight;
	},
//	网页被卷去的宽高
	wScrollL: function() {
		return document.body.scrollLeft;
	},
	wScrollT: function() {
		return document.body.scrollTop;
	},
//	网页正文部分上左
	wScreenL: function() {
		return window.screenLeft;
	},
	wScreenT: function() {
		return window.screenTop;
	},
//	屏幕分辨率的宽高
	wScreenW: function() {
		return window.screen.width;
	},
	wScreenH: function() {
		return window.screen.height;
	},
//	屏幕可用工作域宽高
	wAvailW: function() {
		return window.screen.availWidth;
	},
	wAvailH: function() {
		return window.screen.availHeight;
	}	
};

