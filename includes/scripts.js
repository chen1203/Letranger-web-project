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


$(document).ready(function(){

	$("#login_logout-slide").click(function(){
		$("#openFotter").slideToggle("slow");
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		$(this).toggleClass("activeLoginLogout"); 
		$("#online_shop-slide").toggleClass("activeOnlineShop"); return false;
	});
	
	$("#online_shop-slide").click(function(){
		$("#openFotter").slideToggle("slow");
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		$(this).toggleClass("activeOnlineShop"); 
		$("#login_logout-slide").toggleClass("activeLoginLogout"); return false;
	});
});


		
		

/*var BackgroundScroll = function(params) {
	params = $.extend({
		scrollSpeed: 20,
		imageWidth: $('#textual_pages').width(),
		imageHeight: $('#textual_pages').height(),
		imageWidthHp: $('#hp').width(),
		imageHeightHp: $('#hp').height()
	}, params);
	
	var step = 1,
		current = 0,
		restartPosition = - (params.imageWidth - params.imageHeight);
	
	var scroll = function() {
		current -= step;
		if (current == restartPosition){
			current = 0;
		}	
		$('#textual_pages').css('backgroundPosition', current + 'px 0');
		$('#hp').css('backgroundPosition', current + 'px 0');
	
	};
	
	this.init = function() {
		setInterval(scroll, params.scrollSpeed);
	
	};
};

var scroll = new BackgroundScroll();
scroll.init();*/