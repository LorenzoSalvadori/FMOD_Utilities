/* -------------------------------------------
	FMOD Studio Script:
	Create New Return

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateMixerReturn",
    keySequence: "Ctrl+Alt+R",
    execute: function() {
    	CreateMixerReturn();
    },
});

var CreateMixerReturn = function()
{
	var newReturn = studio.project.create("MixerReturn");
	newReturn.name = SetDefaultName(newReturn, newReturn.output.input);
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