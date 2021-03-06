$(document).ready(function () { 
	
	function getDesignerID() {
		var aKeyValue = window.location.search.substring(1).split("&");
		var designer = aKeyValue[0].split("=")[1];
		return designer;
	};

 	var options = {
                $AutoPlay: true,
                $PauseOnHover: 1,                               	//[Optional] Whether to pause when mouse over if a slideshow is auto playing, default value is false
                $ArrowKeyNavigation: true,   			       //Allows arrow key to navigate or not
                $SlideWidth: 334,                                   //[Optional] Width of every slide in pixels, the default is width of 'slides' container
                $SlideHeight: 500,                                  //[Optional] Height of every slide in pixels, the default is width of 'slides' container
                $SlideSpacing: 2, 					                //Space between each slide in pixels
                $DisplayPieces: 2,                                  //Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 166,                                //The offset position to park slide (this options applys only when slideshow disabled).
                $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
     };

	$.getJSON("includes/designers.json", function(data) {
		var designerDescription, designerName, designerPics;
		var id = getDesignerID();	//get data by url params
		
		$.each(data.designers, function(key, value) {
			if (value.id == id) {
				designerName = value.name;
				designerDescription = value.description;
				designerPics = value.pics;
				$('#' + value.id).addClass("selected_designer");
				return false; // We found the wanted designer we can exit the each loop
			}
		});
		document.title = designerName;
		// Set the title to designer name
		$("#designer_name_title").prepend(designerName + " &nbsp;\\&nbsp; mens suits");
		$("#designer_desc>p").html(designerDescription);
		$.each(designerPics, function(i, pic) {
			picI = "images/designers/" + designerName + "/" + pic + ".jpg";
			$('#designer_pics').append("<div> <img data-u=image src='" + picI + "' alt='" + designerName + "'> </div> ");
		});
		var jssor_slider1 = new $JssorSlider$("slider1_container", options);
	});

});