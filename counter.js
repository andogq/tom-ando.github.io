function timer(time) {
	postMessage("ping");
	setTimeout("timer(" + time + ")", time);
}

onmessage = function(event) {
	timer(event.data);
}