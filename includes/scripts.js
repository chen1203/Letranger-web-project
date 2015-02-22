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



/* **************************** CATAGORY PAGE ************************************ */
$(document).ready(function () { 
	$('#articles_types>li:first-child>a').addClass('selected');
//	$('#inner_menu>li:first-child').addClass('selected_jackets');

	$("#articles_types li").click(function() {
    	//this.id = 'newId';

    	// longer method using .attr()
    	$(this).addClass('selected');
	});
    
});


/* **************************** HAMBURGER ************************************ */



/*
jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	    	 $('.responsive-menu').toggleClass('expand');
    	    	 //$('#arrow_left_nav').something..();
    	     });
});
*/


/*
jQuery(function($){
    	$( '.menu-btn' ).click(function(){
    		$('.responsive-menu').addClass('expand');
    		$('.menu-btn').addClass('btn-none');
    	});
    	
    	 $( '.close-btn' ).click(function(){
    		$('.responsive-menu').removeClass('expand');
    		$('.menu-btn').removeClass('btn-none');
    	});
  });
*/


























/*
//for all:
$(document).ready(function(){
    $.getJSON("includes/designers.json",function(data){
            //	$('#designer_name_title').html(data.name);
            //	$('#dataServices').append("<ul>");
       			
       			$.each(data.platform, function () {
            			//console.log(this.id);
            			//$('#dataServices').append("<li><a href='book.html?bookId=" + this.id + "'>" + this.type + "</a></li>");
            			//for one page logic: 
            			$('#dataServices').append("<li><a href='#' onclick='prompBook(bookId=" + this.id + ")'>" + this.type + "</a></li>");
       			});
            	$('#dataServices').append("</ul>");
            	//console.log($('#dataServices').html());
    });
});

$(document).ready(function(){
    $.getJSON("includes/designers.json",function(data){
      //var sHTML = "<ul>";      
      
      $.each(data, function(key, val){
		  console.log(val);
		   $.each(val, function(key2, val2){
			  //	sHTML += "key + "</b>:" + val.name + "</li>";
			  console.log(key2+" -- "+val2.name);
			});
	  });		
		
		
		//sHTML += "</ul>";
		//console.log("sHTML: "+sHTML);
		//$('#dataServices').append(sHTML);        
    });
});



*/









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


/* footer up and down from Yonit */
	
//	var postionFotter = $( "#openFooter" );
//	var position = postionFotter.position();
//$("#openFooter").css({ "bottom": position.bottom-28,"left":position.left});
//	var bottom = $(window).height() - 150;
//	console.log("%%%%%%%%%%   bottom: "+position.botom+" left: "+ position.left+" bottom : "+bottom);
//	$("#openFooter").css({ "bottom": 28,"left":position.left});

