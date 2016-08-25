studio.menu.addMenuItem({
    name: "CreateEvent",
    keySequence: "Ctrl+Alt+E",
    execute: function() {
    	CreateEvent();
    },
});

var CreateEvent = function(){
		var newEvent = studio.project.create("Event");
		newEvent.folder = studio.project.workspace.masterEventFolder;
		newEvent.name = SetDefaultName(newEvent, newEvent.folder.items);
		newEvent.mixerInput.Output = studio.project.workspace.mixer.masterBus;
};

var SetDefaultName = function(objectInstance, objectContainer){
	var i = 0;
	var tempObjectNameInit = "New " + objectInstance.entity;
	var tempObjectName;
	var bNameIsValid = 0;
	while (!bNameIsValid){
		bNameIsValid = 1;
		tempObjectName =  tempObjectNameInit + " (" + i + ")";
		i++;
		for (var e = 0; e < objectContainer.length; e++){
			if (objectContainer[e].isOfType(objectInstance.entity) && objectContainer[e].name == tempObjectName){
				bNameIsValid = 0;
				break;
			}
		}
	}

	return tempObjectName;

};