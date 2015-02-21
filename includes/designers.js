function getDesignerName() {
	var aKeyValue = window.location.search.substring(1).split("&");
	var designerName = aKeyValue[0].split("=")[1];
	designerName = designerName.replace(/%[0-9]+/g," ");
	console.log(designerName);
	return designerName;
};

$.getJSON("includes/designers.json",function(data){
	var designerDescription, designerName, designerPics;
	var name = getDesignerName();//get data by url params
	$.each(data.designers, function(key, value) {
	    if (value.name == name) {
	        designerName = value.name;
            designerDescription = value.description;
            designerPics=value.pics;
            console.log("designerPics: "+designerPics);
	    }
	});
	$("#designer_name_title").prepend(designerName +"");
	$("#designer_desc>p").html(designerDescription);
	
//	$.each( designerPics, function( i, pic ) {
//			$("#leftPic").append("<img src='images/designers/"+designerName+"/"+pic+".jpg'>");

	$('#leftPic').css('background-image','url("images/designers/'+designerName+'/'+designerPics[0]+'.jpg")');
	$('#mainPic').css('background-image','url("images/designers/'+designerName+'/'+designerPics[1]+'.jpg")');
	$('#rightPic').css('background-image','url("images/designers/'+designerName+'/'+designerPics[2]+'.jpg")');

	//	"<img src='images/designers/"+designerName+"/"+designerPics[0]+".jpg'>");
//	$("#mainPic").append("<img src='images/designers/"+designerName+"/"+designerPics[1]+".jpg'>");
//	$("#rightPic").append("<img src='images/designers/"+designerName+"/"+designerPics[2]+".jpg'>");		
//	console.log("child: "+i+"  "+designerName+"/"+pic+".jpg");
//	  });
	  
});




//	var picPath = "images/designers/"+designerName+"/"+designerPics[0]+".jpg";
//	console.log(picPath);
	
//	$('#mainPic').css('background-image','url("' + picPath + '")');