
var fantomCX = new Object();

fantomCX.DeviceName=function(){
	return "";
};

fantomCX.Hardware=function(){
	return "";
};

fantomCX.Product=function(){
	return "";
};

fantomCX.Serial=function(){
	return "";
};

fantomCX.User=function(){
	return "";
};



fantomCX.GetBrowserName=function(){
//Based on code from here: h t t p://stackoverflow.com/questions/2400935/browser-detection-in-javascript
	var ret = "";
	if (navigator.userAgent.search("MSIE") >= 0){
	    ret = "MS Internet Explorer";
	}
	else if (navigator.userAgent.search("Chrome") >= 0){
	    ret = "Google Chrome";
	}
	else if (navigator.userAgent.search("Firefox") >= 0){
		ret = "Mozilla Firefox";
	}
	else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){
	    ret = "Apple Safari";
	}
	else if (navigator.userAgent.search("Opera") >= 0){
	    ret = "Opera";
	}
	else{
	    ret = "Other";
	}


	return ret;
};

fantomCX.GetBrowserVersion=function(){
	var ret = "";
	if (navigator.userAgent.search("MSIE") >= 0){
	    var position = navigator.userAgent.search("MSIE") + 5;
	    var end = navigator.userAgent.search("; Windows");
	    var version = navigator.userAgent.substring(position,end);
	    ret = version;
	}
	else if (navigator.userAgent.search("Chrome") >= 0){
	    var position = navigator.userAgent.search("Chrome") + 7;
	    var end = navigator.userAgent.search(" Safari");
	    var version = navigator.userAgent.substring(position,end);
	    ret = version;
	}
	else if (navigator.userAgent.search("Firefox") >= 0){
	    var position = navigator.userAgent.search("Firefox") + 8;
	    var version = navigator.userAgent.substring(position);
	    ret = version;
	}
	else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0){//<< Here
	    var position = navigator.userAgent.search("Version") + 8;
	    var end = navigator.userAgent.search(" Safari");
	    var version = navigator.userAgent.substring(position,end);
	    ret = version;
	}
	else if (navigator.userAgent.search("Opera") >= 0){
	    var position = navigator.userAgent.search("Version") + 8;
	    var version = navigator.userAgent.substring(position);
	    ret = version;
	}
	else{
	    ret = "";
	}
	return ret;
};

fantomCX.GetBrowserPlatform=function(){
	return navigator.platform;
};

fantomCX.MaximizeCanvas=function(){
	if (CANVAS_RESIZE_MODE)
	{
		CANVAS_RESIZE_MODE=0;
	}
	var canvas = document.getElementById("GameCanvas");
	var splitter=document.getElementById( "Splitter" );
	if (canvas)
	{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.ontouchmove = function(ev){  
		         window.scrollTo(0, 1);
                 // we don't want to have the default iphone scrolling behaviour ontouchmove  
                 ev.preventDefault();  
             };	
	}
	var vcanvas = document.getElementById("visCanvas");
	if (vcanvas)
	{
		vcanvas.width = window.innerWidth;
		vcanvas.height = window.innerHeight;
		vcanvas.ontouchmove = function(ev){ 
		         window.scrollTo(0, 1); 
                 // we don't want to have the default iphone scrolling behaviour ontouchmove  
                 ev.preventDefault();  
             };	
	}
	var console = document.getElementById("GameConsole");
	if (console)
	{
		console.style.width = "0px";
		console.style.height = "0px";
	}
};

fantomCX.HideConsole=function(){
	if (CANVAS_RESIZE_MODE)
	{
		CANVAS_RESIZE_MODE=0;
	}
	var console = document.getElementById("GameConsole");
	if (console)
	{
		console.style.width = "0px";
		console.style.height = "0px";
	}
};

fantomCX.ResizeCanvas=function(x, y){
	if (CANVAS_RESIZE_MODE)
	{
		CANVAS_RESIZE_MODE=0;
	}
	var canvas = document.getElementById("GameCanvas");
	if (canvas)
	{
		canvas.width = x;
		canvas.height = y;
		canvas.ontouchmove = function(ev){  
		         window.scrollTo(0, 1);
                 // we don't want to have the default iphone scrolling behaviour ontouchmove  
                 ev.preventDefault();  
             };	
	}
	var vcanvas = document.getElementById("visCanvas");
	if (vcanvas)
	{
		vcanvas.width = x;
		vcanvas.height = y;
		vcanvas.ontouchmove = function(ev){ 
		         window.scrollTo(0, 1); 
                 // we don't want to have the default iphone scrolling behaviour ontouchmove  
                 ev.preventDefault();  
             };	
	}
};

fantomCX.ResizeConsole=function(x, y){
	var console = document.getElementById("GameConsole");
	if (console)
	{
		console.style.width = x+"px";
		console.style.height = y+"px";
	}
};

fantomCX.IsMobileBrowser=function(){
		var index = navigator.appVersion.indexOf("Mobile");
		var index2 = navigator.appVersion.indexOf("Silk");
		if (index2 > index )
		{
			index = index2;
		}
		return (index > -1);
};

fantomCX.GetLanguage=function(){
		var userLang = navigator.language || navigator.userLanguage;
		return userLang;
};

fantomCX.GetDomain=function(){
		return window.location.href;
};
