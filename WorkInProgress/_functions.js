var CreateEventFolder = function(folderName, folderRoot){
	folderRoot = folderRoot || studio.project.workspace.masterEventFolder;

	if(!ObjectExistsCheck(folderRoot, folderName, "EventFolder"))
	{
		var newFolder = studio.project.create("EventFolder");
		newFolder.folder = folderRoot;
		newFolder.name = folderName;
	}

};


var CreateEvent = function(eventName, params, folderRoot)
{
	folderRoot = folderRoot || studio.project.workspace.masterEventFolder;

	if(!ObjectExistsCheck(folderRoot, eventName, "Event"))
	{
		var newEvent = studio.project.create("Event");
		newEvent.folder = folderRoot;
		newEvent.name = eventName;
		newEvent.mixerInput.Output = studio.project.workspace.mixer.masterBus; // forse non serve piú, discuterne con Ste
		// finisci di creare l'audiotrack etc, etc.

		if(params != undefined && params != null)
		{
			for (var p = 0; p < params.length; p++)
			{
				// crea parametro per l'evento
			}
		}
	}

};

var CreateAudioTrack = function(eventObject, audioTrackName)
{
	// controlla di non averla già creata OCCHIO!!!! non é piú eventObject.folder
	if(!ObjectExistsCheck(eventObject.folder, audioTrackName, "GroupTrack"))
	{
		var newTrack = studio.project.create("GroupTrack");
		newTrack.mixerGroup.Output = eventObject.mixer.masterBus;
		newTrack.mixerGroup.name = audioTrackName;
	}
};

var CreateVCA = function(vcaName, groupsAssigned)
{
	var newVCA = studio.project.create("MixerVCA");
	newVCA.mixer = studio.project.workspace.mixer;
	newVCA.name = vcaName;

	// assign groups to the VCA

};

var ObjectExistsCheck = function(rootFolder, objectName, objectEntity)
{
	for (var e = 0; e < rootFolder.items.length; e++)
	{
		if (rootFolder.items[e].entity == objectEntity && rootFolder.items[e].name == objectName)
		{
			return 1;
		}
	}

	return 0;
};