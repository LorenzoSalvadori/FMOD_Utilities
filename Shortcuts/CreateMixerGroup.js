/* -------------------------------------------
   FMOD Studio Script
   This script creates a "MixerGroup" object.
   Author: Lorenzo Salvadori
   -------------------------------------------
 */

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateMixerGroup",
    keySequence: "Ctrl+Alt+M",
    execute: function() {
    	CreateMixerGroup();
    },
});

var CreateMixerGroup = function()
{
	var newGroup = studio.project.create("MixerGroup");
	//newGroup.output = studio.project.workspace.mixer.masterBus.input;
	newGroup.name = SetDefaultName(newGroup, newGroup.output.input);
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