/* -------------------------------------------
    FMOD Studio Script:
    Increase Group Track Height

    Author: Lorenzo Salvadori
   -------------------------------------------
*/

studio.menu.addMenuItem({
    name: "Shortcuts\\GroupTrackHeight_Increase",
    keySequence: "Ctrl+Alt+I",
    execute: function() {
    	if(studio.window.browserCurrent() && studio.window.browserCurrent().isOfExactType("Event")){
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

    if (selectedEvent.selectables.length > 0)
    {
        if(selectedEvent.selectables[0].isOfType("GroupTrack") || selectedEvent.selectables[0].isOfType("MasterTrack"))
        {
            tracksList = selectedEvent.selectables;
                for (i = 0; i < tracksList.length; i++)
                {
                    tracksList[i].uiTrackHeight += 20;
                    if (tracksList[i].uiTrackHeight > 300)
                        tracksList[i].uiTrackHeight = 300;
                }
        }

        else
        {
            for (i = 0; i < tracksList.length; i++)
            {
                tracksList[i].uiTrackHeight += 20;
                if (tracksList[i].uiTrackHeight > 300)
                    tracksList[i].uiTrackHeight = 300;
            }
            selectedEvent.masterTrack.uiTrackHeight += 20;
            if (selectedEvent.masterTrack.uiTrackHeight > 300)
                selectedEvent.masterTrack.uiTrackHeight = 300;
        }
    }

    else
    {
        for (i = 0; i < tracksList.length; i++)
        {
            tracksList[i].uiTrackHeight += 20;
            if (tracksList[i].uiTrackHeight > 300)
                tracksList[i].uiTrackHeight = 300;
        }
        selectedEvent.masterTrack.uiTrackHeight += 20;
            if (selectedEvent.masterTrack.uiTrackHeight > 300)
                selectedEvent.masterTrack.uiTrackHeight = 300;
    }

};