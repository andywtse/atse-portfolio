frameResume = document.getElementById(`resumePDF`);
console.log(frameResume);
console.log("HELLO");

window.addEventListener('load', function(){
  let message = { height: document.body.scrollHeight, width: document.body.scrollWidth };	

	// window.top refers to parent window
	window.top.postMessage(message, "*");
});

window.addEventListener('message', function() {
  // message that was passed from iframe page
  let message = e.data;

  frameResume.style.height = message.height + 'px';
  frameResume.style.width = message.width + 'px';
});