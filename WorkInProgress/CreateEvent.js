studio.menu.addMenuItem({
    name: "CreateEvent",
    keySequence: "Ctrl+Alt+E",
    execute: function() {
    	CreateEvent();
    },
});

var CreateEvent = function(){
    	var myEvent = studio.project.create("Event");
    	myFolder.folder = studio.project.workspace.masterEventFolder;
    	myFolder.name = DefaultFolderNameCheck(myFolder.folder);
};

var DefaultFolderNameCheck = function(rootFolder){
	var i = 0;
	var tempFolderNameInit = "New Folder ";
	var tempFolderName;
	var bNameIsValid = 0;
	while (!bNameIsValid){
		bNameIsValid = 1;
		tempFolderName =  tempFolderNameInit + "(" + i + ")";
		i++;
		for (var e = 0; e < rootFolder.items.length; e++){
			if (rootFolder.items[e].isOfType("EventFolder") && rootFolder.items[e].name == tempFolderName){
				bNameIsValid = 0;
				break;
			}
		}
	}

	return tempFolderName;
};