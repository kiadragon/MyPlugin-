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
		}

		sendFontFamilyToWeb();
	})
}

function main(){
	onclickButton();
}

main();