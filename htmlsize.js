var htmlSize={
	//	Html精确定位  
    
//  元素的宽高(包括padding)
    hClientW:function(ele){
    	return ele.clientWidth;
    },
    hClientH:function(ele){
    	return ele.clientHeight;
    },  
//  元素的宽高(包括padding+boder)
    hOffsetW:function(ele){
    	return ele.offsetWidth;
    },
    hOffsetH:function(ele){
    	return ele.offsetHeight;
    },
//  元素的滚动宽高
    hScrollw:function(ele){
    	return ele.scrollWidth;
    },
    hScrollH:function(ele){
    	return ele.scrollHeight;
    },    
//  元素的滚动相对于左上
    hScrollL:function(ele){
    	return ele.scrollLeft;
    },
    hScrollT:function(ele){
    	return ele.scrollTop;
    },
    hOffsetL:function(ele){
    	return ele.offsetLeft;
    },
    hOffsetT:function(ele){
    	return ele.offsetTop;
    },
//  相对于文档的x,y
	hEvenclientX:function(event){
		return event.clientX;
	},
	hEvenclientY:function(event){
		return event.clientY;
	},	
//	相对于容器的x,y
	hEvenOffsetX:function(event){
		return event.offsetX;
	},
	hEvenOffsetY:function(event){
		return event.offsetY;
	}
}
