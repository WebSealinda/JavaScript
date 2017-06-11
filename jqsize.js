var jqSize = {

	//		浏览器窗口可视宽高
	qWinW: function() {
		return $(window).width();
	},
	qWinH: function() {
		return $(window).height();
	},
	//		浏览器窗口文档宽高
	qDocW: function() {
		return $(document).width();
	},
	qDocH: function() {
		return $(document).height();
	},
	//		浏览器窗口文档body宽高
	qBodW: function() {
		return $(document.body).width();
	},
	qBodH: function() {
		return $(document.body).height();
	},
	//		浏览器窗口文档body的总宽高（包括border+padding+margin）
	qOutW: function() {
		return $(document.body).outerWidth(true);
	},
	qOutH: function() {
		return $(document.body).outerHeight(true);
	},
	//		浏览器窗口文档body的总宽高（包括border+padding）		
	qInnW: function() {
		return $(document.body).innerWidth();
	},
	qInnH: function() {
		return $(document.body).innerHeight();
	},
//	元素的宽高
	eWinW: function(ele) {
		return ele.width();
	},
	eWinH: function(ele) {
		return ele.height();
	},
//	width=innerWidth()=clienttWidth(包括padding)
	eClientW: function(ele) {
		return ele.innerWidth();
	},
	eClientH: function(ele) {
		return ele.innerHeight();
	},
//	outerWidth()=offsetWidth(包括padding+border)
	eOffsetW: function(ele) {
		return ele.outerWidth();
	},
	eOffsetH: function(ele) {
		return ele.outerHeight();
	},	
	eOffsetL:function(ele){
		return ele.offset().left;
	},
	eOffsetT:function(ele){
		return ele.offset().top;
	}
}