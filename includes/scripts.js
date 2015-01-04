	/*$(document).ready(function(){
  		$(window).resize(function(){
			    var footerHeight = $('footer').outerHeight();
			    var stickFooterPush = $('.push').height(footerHeight);
				var a=282;
    			$('#wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
		    });
		
    		$(window).resize();
	    });*/
	   
  $(document).ready(function() {
   
   var docHeight = $(window).height();
   var footerHeight = $('footer').height();
   var footerTop = $('footer').position().top + footerHeight;
   
   if (footerTop < docHeight) {
    $('footer').css('margin-top',(docHeight - footerTop) + 'px');
   }
  });