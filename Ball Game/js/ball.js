var container = document.getElementById("container");
var ControlButton = document.getElementById("ControlButton");
var g = 10;
window.i = new Array();
var ballCount = 0;
var animateTime = 150;
var ballArray = new Array();  //Store Ball Element
function setG(G){
	g = parseInt(G);
}

function setBall(ball){
	ball.dropSpeed = 1,
	ball.rightSpeed = 10,
	ball.xLeft =  ball.clientLeft,
	ball.yTop =  ball.clientTop,
	ball.xRight = 950 - ball.clientLeft,
	ball.yBottom = 750 - ball.clientTop,
	ball.ballIsMove = true,
	ball.isRaising = false,
	ball.DropSpeed = function(DS) {
		this.dropSpeed = DS;
	}

	ball.RightSpeed = function(RS){
		this.rightSpeed = RS;
	}

	ball.ballMove = function(){
		
		if (this.ballIsMove){  //下面是碰撞检测
			if (this.xLeft + this.rightSpeed <= 0){
				this.xLeft = 0;
				this.xRight = 950;
				this.style.marginLeft = this.xLeft + 'px';
				this.rightSpeed = -this.rightSpeed;
			}

			else if (this.xRight - this.rightSpeed <= 0){
				this.xRight = 0;
				this.xLeft = 950;
				this.style.marginLeft = 950 - this.xRight + 'px';
				this.rightSpeed = -this.rightSpeed;
			}

			else if (this.yBottom - this.dropSpeed <= 0){
				this.yBottom = 0;
				this.yTop = 750;
				this.style.marginTop = 750 + 'px';
				this.dropSpeed = -this.dropSpeed;
				this.isRaising = true;
			}

			else if (this.yTop + this.dropSpeed <= 0 && this.isRaising){
				this.yTop = 0;
				this.yBottom = 750;
				this.style.marginTop = this.yTop + "px";
				this.dropSpeed = 1;
				this.isRaising = false;
			}
			else {
				this.xLeft += this.rightSpeed;
				this.style.marginLeft = (this.rightSpeed + (this.style.marginLeft== ""?0:parseInt(this.style.marginLeft))) + "px";
				this.xRight -= this.rightSpeed;
				this.yTop += this.dropSpeed;
				this.style.marginTop = (this.dropSpeed + (this.style.marginTop== ""?0:parseInt(this.style.marginTop))) + "px";
				this.yBottom -= this.dropSpeed;
				this.dropSpeed += g;
			}
		}
	}
}

function speedCalculate(ball){
	return (Math.abs(animateTime / ball.dropSpeed) > Math.abs(animateTime / ball.rightSpeed)) ? Math.abs(animateTime / ball.dropSpeed) : Math.abs(animateTime / ball.rightSpeed);
}

function addBall(){
	if (btnGroupDrop.innerText != "Ball style ")
		var ballClassName = btnGroupDrop.innerText;
	else {
		alert("You didnt choose a ball style!");
		return;
	}
	var newBall = document.createElement("div");
	setBall(newBall);
	newBall.className = ballClassName;
	container.appendChild(newBall);
	window.i[ballCount++] = setInterval(function(){
		newBall.ballMove();
		debugMessage(newBall);
	},speedCalculate(newBall));
	ballArray.push(newBall);
}

function stopAnimate(){
	var count;
	for (count = 0; count < ballCount; count++){
		clearInterval(i[count]);
	}
}

function continueAnimate(){
	ballArray = this.ballArray;

	function Animate(ballArray, count){
		i[count] = setInterval(function(){
	 		ballArray[count].ballMove();
	 		debugMessage(ballArray[count]);
	 	}, speedCalculate(ballArray[count]));
	}

	for(var count = 0; count < ballCount; count ++){
		Animate(ballArray, count);
	}
}

function StopStartButton(){
	switch (ControlButton.innerText){
		case "Stop":{
			stopAnimate();
			ControlButton.innerText = "Continue";
			break;
		}

		case "Continue":{
			continueAnimate();
			ControlButton.innerText = "Stop";
			break;
		}

	}
}

function GInputBarFunction(){
	setG(document.getElementById("gravity").value);
}

function RInputBarFunction(){
	for (var count = 0; count < ballCount; count++){
		ballArray[count].RightSpeed(parseInt(document.getElementById("RSpeed").value));

	}
}

function debugMessage(ball){
	console.log("rightSpeed:" + ball.rightSpeed,
			"dropSpeed:" + ball.dropSpeed,
			"xLeft:" + ball.xLeft,
			"xRight" + ball.xRight,
			"yTop:" + ball.yTop,
			"yBottom:" + ball.yBottom,
			"marginLeft:" + ball.style.marginLeft,
			"marginTop" + ball.style.marginTop,
			"IntervalTime:" + speedCalculate(ball));
}












function __main__(){
	ControlButton.addEventListener("click", StopStartButton);
	document.getElementById("Go1").addEventListener("click", GInputBarFunction);
	document.getElementById("Go2").addEventListener("click", RInputBarFunction);
	document.getElementById("addBall").addEventListener("click", addBall);
}

__main__();