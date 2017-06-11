		function showTimeOut(oBtn,oDiv){
	var timer=null;
    	oBtn.onmouseover=oDiv.onmouseover=function(){
		clearTimeout(timer);
		oDiv.style.display="block";
	};
		oBtn.onmouseout=oDiv.onmouseout = function() {
		timer=setTimeout(function(){
			oDiv.style.display = 'none';
		},100);
    };
	};
