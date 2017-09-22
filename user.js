var	controlNode = document.getElementsByClassName("controls-group control-bar cs-seekcontrol progress-control")[0].childNodes[0] || null,
	subtitlesButtonNode = document.createElement("div"),
	progressBarObject = document.createElement("div"),
	emailButtonNode = document.createElement("a"),
	slideNumberNode = document.createElement("div"),
	emailsubject = '1 on 1 conversations',
	emailbody = 'What was the slide number of the issue?%0AWhat was the issue?',
	mailto = 'onlinelearning@gadventures.com',
	initInterval = setInterval(init, 1000);

// this function runs one second after file is uploaded
function init(){
	//links objects with DOM IDs
	emailButtonNode.id = 'emailIcon';
	subtitlesButtonNode.id = 'subtitlesIcon';
	slideNumberNode.id = 'slideNumber';
	progressBarObject.id = 'courseProgressBar'
	//adding properties to the href tag
	emailButtonNode.href = 'mailto:'+mailto+'?subject='+emailsubject+'&body='+emailbody;
	//if this element on the player exist initialize controlNode variable
	if (document.getElementsByClassName("controls-group control-bar cs-seekcontrol progress-control")[0]){
		controlNode = document.getElementsByClassName("controls-group control-bar cs-seekcontrol progress-control")[0].childNodes[0];
	} 
	//if controlNode has been filled append these elements to the DOM
	if(controlNode){
		controlNode.appendChild(subtitlesButtonNode);
		controlNode.appendChild(emailButtonNode);
		controlNode.appendChild(slideNumberNode);
		controlNode.appendChild(progressBarObject);
	}
	//clear set interval
	if(controlNode) clearInterval(initInterval);
	checkCurrentStatusInterval = setInterval(checkCurrentStatus, 10);
}

// this function runs a 1/10 of a second checking for subtitles visibility
function checkCurrentStatus(){
	if(toggle !== null){
		arrFromList = Array.prototype.slice.call(document.getElementsByClassName("slide-object slide-object-objgroup shown"));
		subTitlesObjectNode = retrieveSubtitles(arrFromList);
	}
	if (toggle == false) {
		if (subTitlesObjectNode.style !== undefined) subTitlesObjectNode.style.display = 'block'
	}else{
		if (subTitlesObjectNode.style !== undefined) subTitlesObjectNode.style.display = 'none';
	}
