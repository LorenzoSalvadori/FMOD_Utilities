/* -------------------------------------------
	FMOD Studio Script:
	Create New VCA

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateVCA",
    keySequence: "Ctrl+Alt+V",
    execute: function() {
    	CreateVCA();
    },
});

var CreateVCA = function()
{
	var newVCA = studio.project.create("MixerVCA");
	newVCA.mixer = studio.project.workspace.mixer;
	newVCA.name = SetDefaultName(newVCA, newVCA.mixer.vca);
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