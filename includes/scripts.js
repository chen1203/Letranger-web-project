/*
 *  function to set the footer to bottom of the page while considering the screen size
 */

/*$(document).ready(function() {
		//var currentId = $('body').attr('id');
	  // if (currentId != "articles"){	
			var docHeight = $(window).height();
			var footerHeight = $('footer').height();
			var footerTop = $('footer').position().top + footerHeight;
			if (footerTop < docHeight) {
			    		$('footer').css('margin-top',(docHeight - footerTop) + 'px');
	   		//}
   }
});*/

/*Fixed footer start*/
function positionFooter() { 
	var mFoo = $("footer"); 
	if ((($(document.body).height() + mFoo.outerHeight()) < $(window).height() && mFoo.css("position") == "fixed") 
	|| ($(document.body).height() < $(window).height() && mFoo.css("position") != "fixed")) { 
		mFoo.css({ position: "fixed", bottom: "0px" }); } else { mFoo.css({ position: "static" }); 
	} 
} 

$(document).ready(function () { 
	positionFooter(); $(window).scroll(positionFooter); 
	$(window).resize(positionFooter); $(window).load(positionFooter); });
/*Fixed footer end*/





/*open footer start*/

$(document).ready(function(){
	$(".btn-slide").click(function(){
		$("#openFooter").slideToggle("slow");
		//$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		$("#login_logout-slide").toggleClass("activeLoginLogout"); 
		$("#online_shop-slide").toggleClass("activeOnlineShop"); return false;
	});
	var postionFotter = $( "footer" );
	var position = postionFotter.position();
	$("#openFooter").css({ "top": position.top-122,"left":position.left});
});


$(window).resize(function(){
  	var postionFotter = $( "footer" );
	var position = postionFotter.position();
	$("#openFooter").css({ "top": position.top-122,"left":position.left});
});
/*open footer end*/



/*Background scrolling start*/

var BackgroundScroll = function(params) {
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
scroll.init();
/*Background scrolling end*/
