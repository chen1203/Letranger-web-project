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
            designerPics=value.pics[0];
            console.log("designerPics: "+designerPics);
	    }
	});
	$("#designer_name_title").prepend(designerName +"");
	$("#designer_desc>p").html(designerDescription);
	$("#designer_pics").append("<img src='images/designers/"+designerName+"/"+designerPics+".jpg'>");
});