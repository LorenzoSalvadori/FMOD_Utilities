/* -------------------------------------------
	FMOD Studio Atomic Proposition:
	Set Default Name

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

module.exports = {
	SetDefaultName: function(objectInstance, objectContainer)
	{
		var i = 0;
		var tempObjectNameInit = "New " + objectInstance.entity;
		var tempObjectName;
		var bNameIsValid = 0;
		while (!bNameIsValid)
		{
			bNameIsValid = 1;
			tempObjectName =  tempObjectNameInit + " (" + i + ")";
			i++;
			for (var e = 0; e < objectContainer.length; e++)
			{
				if (objectContainer[e].isOfType(objectInstance.entity) && objectContainer[e].name == tempObjectName)
				{
					bNameIsValid = 0;
					break;
				}
			}
		}

		return tempObjectName;
	},

	SetDefaultGroupName: function(objectInstance, objectContainer)
	{
		var i = 0;
		var tempObjectNameInit = "New " + objectInstance.entity;
		var tempObjectName;
		var bNameIsValid = 0;
		while (!bNameIsValid){
			bNameIsValid = 1;
			tempObjectName =  tempObjectNameInit + " (" + i + ")";
			i++;
			for (var e = 0; e < objectContainer.length; e++){
				if (objectContainer[e].isOfType(objectInstance.entity) && objectContainer[e].mixerGroup.name == tempObjectName){
					bNameIsValid = 0;
					break;
				}
			}
		}
		return tempObjectName;
	},
};