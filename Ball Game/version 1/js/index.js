var btnGroupDrop = document.getElementById("btnGroupDrop");
function changeTextInButton(){
	btnGroupDrop.innerText = this.innerText;
}

var link = document.getElementsByTagName("li");
for (var i = 0; link[i] !== undefined; i++)
	link[i].addEventListener("click", changeTextInButton);
