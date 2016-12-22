/* -------------------------------------------
	FMOD Studio Script:
	Template - Gravel - Extreme Racing Cars

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

var filePath = studio.project.filePath;
var projectName = filePath.substring(filePath.lastIndexOf("/")+1, filePath.lastIndexOf("."))

studio.menu.addMenuItem({
    name: "Templates\\MotoGP17-Bikes",
    keySequence: "Ctrl+Alt+Shift+G",
    execute: function() {
		CreateProjectBanks();
		RenameAndAssignEvents();
    },
});

var CreateProjectBanks = function(){
	CreateModule.CreateBank();
	CreateModule.CreateBank();
	var BanksFolder = studio.project.workspace.masterBankFolder;
	var BanksList = studio.project.workspace.masterBankFolder.items;
	var vehicleBank;
	var lodBank;
	// rename master bank
	for (var i = 0; i < BanksList.length; i++)
	{
		if (BanksList[i].isOfExactType("MasterBank"))
		{
			BanksList[i].name = projectName + "-MASTER";
		}

		else if (!vehicleBank)
		{
			// create vehicle bank
			vehicleBank = BanksList[i];
			vehicleBank.name = projectName;
			vehicleBank.folder = BanksFolder;
		}
		else
		{
			// create lod bank
			lodBank = BanksList[i];
			lodBank.name = projectName + "-LO";
			lodBank.folder = BanksFolder;
		}
	}

}

var RenameAndAssignEvents = function(){
	// assign banks to variables

	var vehicleBank;
	var lodBank;
	var masterBank;
	
	var BanksFolder = studio.project.workspace.masterBankFolder;
	var BanksList = studio.project.workspace.masterBankFolder.items;
	var suffix = "";
	for (var k = 0; k < BanksList.length; k++)
	{
		suffix = BanksList[k].name.substring(BanksList[k].name.lastIndexOf("-")+1);
		if (suffix == "MASTER")
		{
			masterBank = BanksList[k];
		}

		else if (suffix == "LO")
		{
			lodBank = BanksList[k];
		}

		else 
		{
			vehicleBank = BanksList[k];
		}
	}


	// cycle the event folder to look for events
	var EventsList = studio.project.workspace.masterEventFolder.items; // shortcut for the list of events in the master folder - there should be only one
	var EventsFolder;
	var ComponentsEventsFolder;
	var eventName;
	var prefix
	
	// search buses and store them
	var Bus_Master = studio.project.workspace.mixer.masterBus;
	var Bus_Engine = BusSearch(Bus_Master, "Engine");
	var Bus_Exhaust = BusSearch(Bus_Master, "Exhaust");
	var Bus_Lod = BusSearch(Bus_Master, "AI_Vehicle");
	
	// search events and store them
	var Event_MasterFolder = studio.project.workspace.masterEventFolder;
	var Event_Engine = EventSearch(Event_MasterFolder, "EN");
	var Event_Exhaust = EventSearch(Event_MasterFolder, "EX");
	var Event_Lod = EventSearch(Event_MasterFolder, "LO");

	// change name to events
	Event_Engine.name = "EN-" + projectName;
	Event_Exhaust.name = "EX-" + projectName;
	Event_Lod.name = "LO-" + projectName;

	// assign events to bank
	vehicleBank.relationships.events.add(Event_Engine);
	vehicleBank.relationships.events.add(Event_Exhaust);
	lodBank.relationships.events.add(Event_Lod);

	// assign events to mixer group
	Event_Engine.mixerInput.output = Bus_Engine;
	Event_Exhaust.mixerInput.output = Bus_Exhaust;
	Event_Lod.mixerInput.output = Bus_Lod;

}

var BusSearch = function(node, nodeName)
{
	if(node != null && node.name != null && node.name == nodeName)
	{
		return node;
	}

	if (node.input != null)
	{
		for (var i = 0; i < node.input.length; i++)
		{
			var child = BusSearch(node.input[i], nodeName);
			if (child != null)
				return child;
		}
	}

	return null;
}

var EventSearch = function(node, prefix)
{
	eventName = node.name;
	eventprefix = eventName.substring(0, eventName.indexOf("-"));

	if(node != null && node.name != null && eventprefix == prefix)
	{
		return node;
	}

	if (node.items != null)
	{
		for (var i = 0; i < node.items.length; i++)
		{
			var child = EventSearch(node.items[i], prefix);
			if (child != null)
				return child;
		}
	}

	return null;
}

/*
var SetBuildOptions = function(){
	//PC Platform Settings
    var platform_PC = studio.project.workspace.platforms[0];
    platform_PC.subDirectory = "PC";
    platform_PC.hardwareType = 0;
    platform_PC.speakerFormat = 7;
    // PC Encoder
    platform_PC.encodingSettings.quality = 100;
    platform_PC.encodingSettings.sampleRate = 48000;
    platform_PC.encodingSettings.encodingFormat = 3; // PCM = 0; FADPCM = 1; XMA = 2; Vorbis = 3; AT9 = 4;

    // PS4 Platform Settings
    var platform_PS4 = studio.project.create("Platform");
    platform_PS4.name = "PlayStation 4";
    platform_PS4.subDirectory = "PS4";
    platform_PS4.hardwareType = 5;
    platform_PS4.speakerFormat = 7;
    // PS4 Encoder
    var encoder_PS4 = studio.project.workspace.platforms[1].encodingSettings;
    encoder_PS4.platform = platform_PS4;
    encoder_PS4.quality = 100;
    encoder_PS4.sampleRate = 48000;
    encoder_PS4.encodingFormat = 4; // PCM = 0; FADPCM = 1; XMA = 2; Vorbis = 3; AT9 = 4;

    // XOne Platform Settings
    var platform_XO = studio.project.create("Platform");
    platform_XO.name = "Xbox One";
    platform_XO.subDirectory = "XOne";
    platform_XO.hardwareType = 3;
    platform_XO.speakerFormat = 7; 
    // XOne Encoder
    var encoder_XO = studio.project.workspace.platforms[2].encodingSettings;
    encoder_XO.platform = platform_XO;
    encoder_XO.quality = 100;
    encoder_XO.sampleRate = 48000;
    encoder_XO.encodingFormat = 2; // PCM = 0; FADPCM = 1; XMA = 2; Vorbis = 3; AT9 = 4;
}
*/

/*
// AntiLag event
var CreateAntiLagEvent = function(){
	var AntiLagEvent = CreateModule.CreateEvent();
	AntiLagEvent.name = "AL-Manufacturer_Model";
	AntiLagEvent.mixerInput.Output = studio.project.workspace.mixer.masterBus; // TODO select GBL_Race/VHC_Vehicle_Components/Anti-Lag as output bus
	AntiLagEvent.folder = ComponentsFolder;
	var newTrack = studio.project.create("GroupTrack");
	newTrack.event = AntiLagEvent;
	newTrack.mixerGroup.output = AntiLagEvent.mixer.masterBus;
	newTrack.mixerGroup.name = "Anti-Lag";
}
*/