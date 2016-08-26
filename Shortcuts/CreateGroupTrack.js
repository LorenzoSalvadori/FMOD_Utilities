studio.menu.addMenuItem({
    name: "Shortcuts\\CreateGroupTrack",
    keySequence: "Ctrl+Alt+G",
    execute: function() {
    	if(studio.window.browserCurrent() && studio.window.browserCurrent().isOfType("Event")){
    		CreateGroupTrack();
    	}
    	else {
    		alert("Please select an event to create a GroupTrack");
    	}
    },
});

var CreateGroupTrack = function()
{
	selectedEvent = studio.window.browserCurrent()
	trackContainer = selectedEvent.groupTracks;

	var newTrack = studio.project.create("GroupTrack");
	newTrack.event = selectedEvent;
	newTrack.mixerGroup.output = selectedEvent.mixer.masterBus;
	newTrack.mixerGroup.name = SetDefaultGroupName(newTrack, trackContainer);
};

var SetDefaultGroupName = function(objectInstance, objectContainer){
	var i = 0;
	var tempObjectNameInit = "New " + objectInstance.entity;
	var tempObjectName;
	var bNameIsValid = 0;
	while (!bNameIsValid){
		bNameIsValid = 1;
		tempObjectName =  tempObjectNameInit + " (" + i + ")";
		i++;
		for (var e = 0; e < objectContainer.length; e++){
			if (objectContainer[e].isOfType(objectInstance.entity) && objectContainer[e].mixerGroup.name == tempObjectName){
				bNameIsValid = 0;
				break;
			}
		}
	}

	return tempObjectName;

};