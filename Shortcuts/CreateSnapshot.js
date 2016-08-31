/* -------------------------------------------
   FMOD Studio Script
   This script creates a "MixerReturn" object.
   Author: Lorenzo Salvadori
   -------------------------------------------
 */

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateSnapshot",
    keySequence: "Ctrl+Alt+S",
    execute: function() {
    	CreateSnapshot();
    },
});

var CreateSnapshot = function()
{
	var newSnapshot = studio.project.create("Snapshot");
	newSnapshot.mixer = studio.project.workspace.mixer;
	newSnapshot.folder = studio.project.workspace.mixer.snapshotList;
	newSnapshot.behaviour = 0;		// 0 is for overriding, 1 is for blending
	newSnapshot.name = SetDefaultName(newSnapshot, newSnapshot.folder.items);
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