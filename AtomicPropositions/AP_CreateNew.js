/* -------------------------------------------
	FMOD Studio Atomic Propositions:
	Create New Object

	Author: Lorenzo Salvadori
   -------------------------------------------
*/


var MyModule = studio._internal.require('AP_SetDefaultName.js');

module.exports = {
	CreateBank: function()
	{
		var newBank = studio.project.create("Bank");
		newBank.folder = studio.project.workspace.masterBankFolder;
		newBank.name = MyModule.SetDefaultName(newBank, newBank.folder.items);
	},

	CreateEvent: function()
	{
		var newEvent = studio.project.create("Event");
		newEvent.folder = studio.project.workspace.masterEventFolder;
		newEvent.name = MyModule.SetDefaultName(newEvent, newEvent.folder.items);
		newEvent.mixerInput.Output = studio.project.workspace.mixer.masterBus;
	},

	CreateEventFolder: function()
	{
    	var newFolder = studio.project.create("EventFolder");
    	newFolder.folder = studio.project.workspace.masterEventFolder;
    	newFolder.name = MyModule.SetDefaultName(newFolder, newFolder.folder.items);
	},

	CreateGroupTrack: function()
	{
		selectedEvent = studio.window.browserCurrent()
		trackContainer = selectedEvent.groupTracks;

		var newTrack = studio.project.create("GroupTrack");
		newTrack.event = selectedEvent;
		newTrack.mixerGroup.output = selectedEvent.mixer.masterBus;
		newTrack.mixerGroup.name = MyModule.SetDefaultGroupName(newTrack, trackContainer);
	},

	CreateMixerGroup: function()
	{
		var newGroup = studio.project.create("MixerGroup");
		//newGroup.output = studio.project.workspace.mixer.masterBus.input;
		newGroup.name = MyModule.SetDefaultName(newGroup, newGroup.output.input);
	},

	CreateMixerReturn: function()
	{
		var newReturn = studio.project.create("MixerReturn");
		newReturn.name = MyModule.SetDefaultName(newReturn, newReturn.output.input);
	},

	CreateParameter: function()
	{
		selectedEvent = studio.window.browserCurrent()
		parameterContainer = selectedEvent.parameters;

		var newParameter = studio.project.create("GameParameter");
		newParameter.event = selectedEvent;
		newParameter.minimum = 0;
		newParameter.maximum = 1;
		newParameter.name = MyModule.SetDefaultName(newParameter, parameterContainer);
	},

	CreateSnapshot: function()
	{
		var newSnapshot = studio.project.create("Snapshot");
		newSnapshot.mixer = studio.project.workspace.mixer;
		newSnapshot.folder = studio.project.workspace.mixer.snapshotList;
		newSnapshot.behaviour = 0;		// 0 is for overriding, 1 is for blending
		newSnapshot.name = MyModule.SetDefaultName(newSnapshot, newSnapshot.folder.items);
	},

	CreateSnapshotGroup: function()
	{
		var newSnapshotGroup = studio.project.create("SnapshotGroup");
		newSnapshotGroup.folder = studio.project.workspace.mixer.snapshotList;
		newSnapshotGroup.name = MyModule.SetDefaultName(newSnapshotGroup, newSnapshotGroup.folder.items);
	},

	CreateVCA: function()
	{
		var newVCA = studio.project.create("MixerVCA");
		newVCA.mixer = studio.project.workspace.mixer;
		newVCA.name = MyModule.SetDefaultName(newVCA, newVCA.mixer.vca);
	},
};