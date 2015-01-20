/*
 *  function to set the footer to bottom of the page while considering the screen size
 */

$(document).ready(function() {
		//var currentId = $('body').attr('id');
	  // if (currentId != "articles"){	
			var docHeight = $(window).height();
			var footerHeight = $('footer').height();
			var footerTop = $('footer').position().top + footerHeight;
			if (footerTop < docHeight) {
			    		$('footer').css('margin-top',(docHeight - footerTop) + 'px');
	   		//}
   }
});

var BackgroundScroll = function(params) {
	params = $.extend({
		scrollSpeed: 20,
		imageWidth: $('#hp').width(),
		imageHeight: $('#hp').height()
	}, params);
	
	var step = 1,
		current = 0,
		restartPosition = - (params.imageWidth - params.imageHeight);
	
	var scroll = function() {
		current -= step;
		if (current == restartPosition){
			current = 0;
		}	
		$('#hp').css('backgroundPosition', current + 'px 0');
	
	};
	
	this.init = function() {
		setInterval(scroll, params.scrollSpeed);
	
	};
};

var scroll = new BackgroundScroll();
scroll.init();


/*$(document).ready(function(){
    var vH=310;
    var vW=2211;
    var vT=$('#textual_pages').offset().top;
    var vL=$('#textual_pages').offset().left;
    var vR=$('#textual_pages').offset().right;
    $('#textual_pages').mousemove(function(e){
    	var xposright=e.pageX-vR;
        var ypos=e.pageY-vT;
        var xpos=e.pageX-vL;
        var y=Math.round(ypos/vW*100);
        var x=Math.round(xpos/vH*100);
        var xright=Math.round(xposright/vH*100);
        $('#textual_pages').css({backgroundPositionX: x+'%'});
        $('#textual_pages').css({backgroundPositionX: xright+'%'});
    });
});*/