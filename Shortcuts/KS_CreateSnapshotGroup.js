/* -------------------------------------------
	FMOD Studio Script:
	Create New Snapshot Group

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateSnapshotGroup",
    keySequence: "Ctrl+Alt+L",
    execute: function() {
    	CreateSnapshotGroup();
    },
});

var CreateSnapshotGroup = function()
{
	var newSnapshotGroup = studio.project.create("SnapshotGroup");
	newSnapshotGroup.folder = studio.project.workspace.mixer.snapshotList;
	newSnapshotGroup.name = SetDefaultName(newSnapshotGroup, newSnapshotGroup.folder.items);
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