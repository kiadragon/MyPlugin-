var container = document.getElementById("container");
var ControlButton = document.getElementById("ControlButton");
var G = 1;
var BALL_RADIUS = 50;
window.i = new Array();
var ballCount = 0;
var ANIMATE_TIME = 150;
var ballArray = new Array();  //Store Ball Element

function setG(g){
	G = parseInt(g);
}

function setBall(ball){
	ball.dropSpeed = 1;
	ball.rightSpeed = 10;
	ball.xLeft =  ball.clientLeft;
	ball.yTop =  ball.clientTop;
	ball.xRight = container.offsetWidth - BALL_RADIUS - ball.xLeft;
	ball.yBottom = container.offsetHeight - BALL_RADIUS - ball.yTop;
	ball.draggable = true;
	ball.ballIsMove = true;
	ball.isRaising = false;
	ball.id = ballCount;
	ball.addEventListener("dragstart", dragStart);
	ball.DropSpeed = function(DS) {
		this.dropSpeed = DS;
	}

	ball.RightSpeed = function(RS){
		this.rightSpeed = RS;
	}

	ball.ballMove = function(){
		if (this.ballIsMove){  //下面是碰撞检测
			if (this.xLeft + this.rightSpeed<= 0){
				this.xLeft = 0;
				this.xRight = container.offsetWidth - BALL_RADIUS;
				this.style.marginLeft = this.xLeft + 'px';
				this.rightSpeed = -this.rightSpeed;
			}

			else if (this.xRight - this.rightSpeed <= 0){
				this.xRight = 0;
				this.xLeft = container.offsetWidth - BALL_RADIUS;
				this.style.marginLeft = container.offsetWidth - BALL_RADIUS - this.xRight + 'px';
				this.rightSpeed = -this.rightSpeed;
			}

			else if (this.yBottom - this.dropSpeed <= 0){
				this.yBottom = 0;
				this.yTop = container.offsetHeight - BALL_RADIUS;
				this.style.marginTop = container.offsetHeight - BALL_RADIUS + 'px';
				this.dropSpeed = -this.dropSpeed;
				this.isRaising = true;
			}

			else if (this.yTop + this.dropSpeed <= 0 && this.isRaising){
				this.yTop = 0;
				this.yBottom = container.offsetHeight - BALL_RADIUS;
				this.style.marginTop = this.yTop + "px";
				this.dropSpeed = 1;
				this.isRaising = false;
			}
			else {
				this.xLeft += this.rightSpeed;
				this.style.marginLeft = (this.rightSpeed
					+ (this.style.marginLeft== ""?0:parseInt(this.style.marginLeft))) + "px";
				this.xRight -= this.rightSpeed;
				this.yTop += this.dropSpeed;
				this.style.marginTop = (this.dropSpeed
					+ (this.style.marginTop== ""?0:parseInt(this.style.marginTop))) + "px";
				this.yBottom -= this.dropSpeed;
				this.dropSpeed += G;
			}
		}
	}
}



function dragStart(){
	moveableBall = this;
	stop(moveableBall.id);
	console.log(moveableBall);
	ballMouseDown();  // Client have mousedown
	container.addEventListener("mouseup", ballMouseUp);
	function ballMouseDown(){
		document.addEventListener("mousemove", ballFollow);  // Follow entrie document
	}

	function ballFollow(){
			moveableBall.xLeft = window.event.clientX - container.offsetLeft;
			moveableBall.style.marginLeft = moveableBall.xLeft + 'px';
			moveableBall.yTop = window.event.clientY - container.offsetTop;
			moveableBall.style.marginTop = moveableBall.yTop + "px";
			moveableBall.xRight = container.offsetWidth - BALL_RADIUS - moveableBall.xLeft;
			moveableBall.yBottom = container.offsetHeight - BALL_RADIUS - moveableBall.yTop;
	}

	function ballMouseUp(){
		document.removeEventListener("mousemove", ballFollow);
		container.removeEventListener("mouseup", ballMouseUp);
	}

}

//this.onmouseup = ballMouseUp(this);
function ballMouseUp(){
	container.removeEventListener("mousemove", ballFollow);
	continueAnimate();
}

function speedCalculate(ball){
	return (Math.abs(ANIMATE_TIME / ball.dropSpeed) >
	Math.abs(ANIMATE_TIME / ball.rightSpeed))
	? Math.abs(ANIMATE_TIME / ball.dropSpeed) : Math.abs(ANIMATE_TIME / ball.rightSpeed);
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
	ballArray.push(newBall);
	Animate(ballArray, ballCount);
	ballCount++;
}

function stopAnimate(){
	var count;
	for (count = 0; count < ballCount; count++){
		stop(count);
	}
}

function stop(index){
	clearInterval(i[index]);
}

function continueAnimate(){
	ballArray = this.ballArray;

	for(var count = 0; count < ballCount; count ++){
		Animate(ballArray, count);
	}
}

function Animate(ballArray, count){
	i[count] = setInterval(function(){
		ballArray[count].ballMove();
		debugMessage(ballArray[count]);
	}, speedCalculate(ballArray[count]));
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
	if (!document.getElementById("gravity").value){
		alert("Please input a gravity value!");
		return;
	}
	setG(document.getElementById("gravity").value);
}

function RInputBarFunction(){
	if (!parseInt(document.getElementById("RSpeed").value)){
		alert("Please input a horizontal Speed!");
		return;
	}
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

function dropAllow(ev){
	ev.preventDefault();
}




function __main__(){
	ControlButton.addEventListener("click", StopStartButton);
	document.getElementById("Go1").addEventListener("click", GInputBarFunction);
	document.getElementById("Go2").addEventListener("click", RInputBarFunction);
	document.getElementById("addBall").addEventListener("click", addBall);
	container.ondragover = dropAllow;
}

__main__();