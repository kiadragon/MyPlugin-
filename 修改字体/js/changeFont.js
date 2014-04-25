var bodyStyle = document.getElementsByTagName("body")[0].style;

function changeFontSize(size){
	bodyStyle.fontSize = size;
}

function changeFontColor(color){
	bodyStyle.color = color;
}

function changeFontStyle(fontFamily){
	bodyStyle.fontFamily = fontFamily;
}

function sendFontFamilyToWeb(){
	chrome.tabs.executeScript(null,
	{code: "document.body.style.fontFamily='" + $("body").css("font-family") + "'"});
}

function sendFontFamilyToBackground(){
	word = $("#fontInput").val();
	$.get(
		"fontDealing.py",
		{
			word : word
		}
	);
}




function onclickButton(){
	var button = $("button");
	button.click(function(){
		if ($(this).text() != "Go!"){
			$("body").css("font-family", $(this).text());
		}
		else {
			if ($("#fontInput").val() != ""){

				$("body").css("font-family", $("#fontInput").val());
				$("#fontInput").val(""); //clear input BAR				
			}
			if ($("#colorInput").val() != ""){
				$("body").css("color", $("#colorInput").val());
				$("#colorInput").val(""); //clear input BAR
			}
		}

		sendFontFamilyToWeb();
	})
}

function main(){

	$("#fontInput").keyup(function(){
	sendFontFamilyToBackground();
	});
	onclickButton();
}

main();