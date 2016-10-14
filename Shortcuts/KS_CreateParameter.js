/* -------------------------------------------
	FMOD Studio Script:
	Create New Parameter

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateParameter",
    keySequence: "Ctrl+Alt+P",
    execute: function() {
    	if(studio.window.browserCurrent() && studio.window.browserCurrent().isOfType("Event")){
    		CreateParameter();
    	}
    	else {
    		alert("Please select an event to create a Parameter");
    	}
    },
});

var CreateParameter = function()
{
	selectedEvent = studio.window.browserCurrent()
	parameterContainer = selectedEvent.parameters;

	var newParameter = studio.project.create("GameParameter");
	newParameter.event = selectedEvent;
	newParameter.minimum = 0;
	newParameter.maximum = 1;
	newParameter.name = SetDefaultName(newParameter, parameterContainer);
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