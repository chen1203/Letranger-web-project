var designerDescription, designerName;
function getDesignerName() {
	var aKeyValue = window.location.search.substring(1).split("&");
	var designerName = aKeyValue[0].split("=")[1];
	
	console.log(designerName);
	//console.log("in function getDesignerName-> designerName: "+designerName);
	return designerName;
};

$.getJSON("includes/designers.json",function(data){
	var name = getDesignerName();//get data by url params
	$.each(data.designers, function(key, value) {
		console.log("designerName: "+name);
	    if (value.name == name) {
	        designerName = value.name;
            designerDescription = value.description;
	    }
	});
	$("#designer_name_title > p").html(designerName);
	$("#designer_desc").html(designerDescription);
});