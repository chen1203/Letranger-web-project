<<<<<<< HEAD
/*	$(document).ready(function(){
  		$(window).resize(function(){
			    var footerHeight = $('footer').outerHeight();
			    var stickFooterPush = $('.push').height(footerHeight);
		
    			$('#wrapper').css({'marginBottom':'-' + footerHeight-282 + 'px'});
		    });
		
    		$(window).resize();
	    });


*/
/*
$(document).ready(function() {
  var bodyHeight = $("body").height();
  var vwptHeight = $(window).height();
  if (vwptHeight > bodyHeight) {
    $("footer#colophon").css("position","absolute").css("bottom",0);
  }
});
*/
=======
$(document).ready(function() {
   var docHeight = $(window).height();
   var footerHeight = $('footer').height();
   var footerTop = $('footer').position().top + footerHeight;
   
   if (footerTop < docHeight) {
    	$('footer').css('margin-top',(docHeight - footerTop) + 'px');
   }
});
>>>>>>> origin/master
