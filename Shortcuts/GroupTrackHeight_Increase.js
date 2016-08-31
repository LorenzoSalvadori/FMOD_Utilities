studio.menu.addMenuItem({
    name: "Shortcuts\\GroupTrackHeight_Increase",
    keySequence: "Ctrl+Alt+I",
    execute: function() {
    	if(studio.window.browserCurrent() && studio.window.browserCurrent().isOfType("Event")){
    		GroupTrackHeight_Increase();
    	}
    	else {
    		alert("Please select an event to increase/decrease a GroupTrack height");
    	}
    },
});

var GroupTrackHeight_Increase = function()
{
	selectedEvent = studio.window.browserCurrent()
	tracksList = selectedEvent.groupTracks
	for (i = 0; i < tracksList.length; i++)
	{
		tracksList[i].uiTrackHeight += 20;
		if (tracksList[i].uiTrackHeight > 300)
			tracksList[i].uiTrackHeight = 300;
	}
};