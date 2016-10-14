/* -------------------------------------------
	FMOD Studio Script:
	Create New Folder

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateFolder",
    keySequence: "Ctrl+Alt+F",
    execute: function() {
    	CreateEventFolder();
    },
});

var CreateEventFolder = function(){
    	var newFolder = studio.project.create("EventFolder");
    	newFolder.folder = studio.project.workspace.masterEventFolder;
    	newFolder.name = SetDefaultName(newFolder, newFolder.folder.items);
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