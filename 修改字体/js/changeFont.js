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

<<<<<<< HEAD
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
=======
function onclickButton(){
	var button = $("button");

>>>>>>> 859a2640c375373b6cc5b413e3cf21054158dbda
	button.click(function(){
		if ($(this).text() != "Go!"){
			$("body").css("font-family", $(this).text());
		}
		else {
			if ($("#fontInput").val() != ""){

				$("body").css("font-family", $("#fontInput").val());
				$("#fontInput").val(""); //clear input BAR				
<<<<<<< HEAD
			}
			if ($("#colorInput").val() != ""){
				$("body").css("color", $("#colorInput").val());
				$("#colorInput").val(""); //clear input BAR
=======
			
>>>>>>> 859a2640c375373b6cc5b413e3cf21054158dbda
			}
		}

		sendFontFamilyToWeb();
	})
}

function main(){
<<<<<<< HEAD

	$("#fontInput").keyup(function(){
	sendFontFamilyToBackground();
	});
=======
>>>>>>> 859a2640c375373b6cc5b413e3cf21054158dbda
	onclickButton();
}

main();