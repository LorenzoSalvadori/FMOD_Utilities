/* function that checks if an object already exists */

var ObjectNameCheck = function(objectInstance, objectContainer){
	var bNameIsValid = 1;
		for (var e = 0; e < objectContainer.length; e++){
			if (objectContainer[e].isOfType(objectInstance.entity) && objectContainer[e].name == objectInstance.name){
				bNameIsValid = 0;
				break;
			}
		}
	}

	return bNameIsValid;

};