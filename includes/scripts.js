/*Fixed footer start*/

function positionFooter() { 
	var mFoo = $("footer"); 
	if ((($(document.body).height() + mFoo.outerHeight()) < $(window).height() && mFoo.css("position") == "fixed") 
	|| ($(document.body).height() < $(window).height() && mFoo.css("position") != "fixed")) { 
		mFoo.css({ position: "fixed", bottom: "0px" }); } else { mFoo.css({ position: "fixed" }); 
	} 
} 

$(document).ready(function () { 
	positionFooter(); $(window).scroll(positionFooter); 
	$(window).resize(positionFooter); $(window).load(positionFooter); 
});
/*Fixed footer end*/



/*open footer start*/

$(document).ready(function(){
	
	$(".btn-slide").click(function(){
			
		$("#openFooter").slideToggle("slow");
//		$("#login_logout-slide").toggleClass("activeLoginLogout"); 
//		$("#online_shop-slide").toggleClass("activeOnlineShop"); 
		
		if ($("#login_logout-slide").hasClass("closedFooter")) {
			$("#login_logout-slide").css("background-image","url(images/down_arrow.png)");
			$("#online_shop-slide").css("background-image","url(images/down_arrow.png)");
			$("#login_logout-slide").removeClass("closedFooter");
		} else {
			$("#login_logout-slide").css("background-image","url(images/footer_up_arrow.png)");
			$("#online_shop-slide").css("background-image","url(images/footer_up_arrow.png)");
			$("#login_logout-slide").addClass("closedFooter");
		}
		return false;
		
	});
});

/*open footer end*/



/*Background scrolling pictures start*/

/*
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
scroll.init();*/


/*Background scrolling end*/



/* **************************** CATAGORY PAGE ************************************ */



/* **************************** HAMBURGER ************************************ */


$(document).ready(function(){
	
	$(window).resize(function() {
	
		var widthS = $(window).width();

		if (widthS < 850) {
			$('#menu-btn').addClass('closed');
			$('#left_nav').css({width:'0px',left:'-300px',visibility:'hidden'});		
			
		}
		else {
			$('#menu-btn').removeClass('closed');
			$('#left_nav').css({width:'252px',left:'0px',visibility:'visible'});				
		}
		
	});
});	

$(document).ready(function(){
		
		$('#menu-btn').click(function(){
		
				if ($("#menu-btn").hasClass("closed")) {
	
		    		 $('#left_nav').animate({width:'252px',left:'0px'}, 'slow'); 	 
		    	   	 $('#left_nav').css('visibility','visible');			
		    		 $('#menu-btn').removeClass("closed");
				}
				else {
			    	 	 $('#left_nav').animate({width:'0px',left:'-300px'}, 'slow'); 	 
			    	   	 $('#left_nav').css('visibility','none');
			    	   	 $('#menu-btn').addClass("closed");
			     }
    
    	});
    	     
});



/* **************************** Logo ************************************ */


$(window).resize(function() {
	var sum=$(window).width()/3.1;
  	$("#logo").css("left",sum)
});

























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
});*/;


