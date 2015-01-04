/*
 *  function to set the footer to bottom of the page while considering the screen size
 */

$(document).ready(function() {
	   var docHeight = $(window).height();
	   var footerHeight = $('footer').height();
	   var footerTop = $('footer').position().top + footerHeight;
	   if (footerTop < docHeight) {
	    		$('footer').css('margin-top',(docHeight - footerTop) + 'px');
   }
});

