studio.menu.addMenuItem({
    name: "Shortcuts\\CreateBank",
    keySequence: "Ctrl+B",
    execute: function() {
    	CreateBank();
    },
});

var CreateBank = function(){
		var newBank = studio.project.create("Bank");
		newBank.folder = studio.project.workspace.masterBankFolder;
		newBank.name = SetDefaultName(newBank, newBank.folder.items);
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