function main(){
	chrome.tabs.excuteScript(null,
		{file:"changeFont.js"});
	window.close();
}