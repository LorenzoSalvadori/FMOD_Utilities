studio.menu.addMenuItem({
    name: "Shortcuts\\GroupTrackHeight_Decrease",
    keySequence: "Ctrl+Alt+D",
    execute: function() {
    	if(studio.window.browserCurrent() && studio.window.browserCurrent().isOfType("Event")){
    		GroupTrackHeight_Decrease();
    	}
    	else {
    		alert("Please select an event to increase/decrease a GroupTrack height");
    	}
    },
});

var GroupTrackHeight_Decrease = function()
{
	selectedEvent = studio.window.browserCurrent()
	tracksList = selectedEvent.groupTracks
	for (i = 0; i < tracksList.length; i++)
	{
		tracksList[i].uiTrackHeight -= 20;
		if (tracksList[i].uiTrackHeight < 28)
			tracksList[i].uiTrackHeight = 28;
	}
};