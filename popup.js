function VLC_command(command){
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    	var url = tabs[0].url;
    	url = url.replace("/v/", "/watch?v=");
    	$.get("http://127.0.0.1:8080/requests/status.xml?command=in_" + command + "&input=" + encodeURIComponent(url));
	});
}

$('#play').click(function(){
	VLC_command("play");
});

$('#enqueue').click(function(){
	VLC_command("enqueue");
});