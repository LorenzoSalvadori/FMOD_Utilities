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
    name: "Templates\\Gravel-ExtremeRacing",
    keySequence: "Ctrl+Alt+Shift+E",
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
	// check on parent folder that the project structure is correct
	if (EventsList.length != 1)
	{
		alert ("There must be a single folder named after the project containing all the events and the \"Components\" folder");
		return;
	}
	
	else if (EventsList.length = 1)
	{
		if (EventsList[0].isOfType("Folder"))
		{
			EventsList[0].name = projectName;
			EventsFolder = EventsList[0].items; //enter into the folder containing all vehicle events
		}
		else
		{
			alert("The first element of the masterEventFolder is not a Folder") //TODO move check at the start
			return;
		}

		for (var i = 0; i < EventsFolder.length; i++) // cycle in the project folder
		{
			if (EventsFolder[i].isOfExactType("EventFolder"))
			{
				ComponentsEventsFolder = EventsFolder[i].items;
				for(var j = 0; j < ComponentsEventsFolder.length; j++) // cycle in the components folder
				{
					eventName = ComponentsEventsFolder[j].name;
					prefix = eventName.substring(0, eventName.indexOf("-"));

					switch (prefix)
					{
						case "AL":
							ComponentsEventsFolder[j].name = "AL-" + projectName; 	// set name to AL-projectName
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);		// assign event to bank
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[0]; // TODO select GBL_Race/VHC_Vehicle_Components/Anti-Lag as output bus in a safer way
							break;

						// rinse and repeat
						case "BF":
							ComponentsEventsFolder[j].name = "BF-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[1];
							break;
						case "BR":
							ComponentsEventsFolder[j].name = "BR-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[2];
							break;
						case "CH":
							ComponentsEventsFolder[j].name = "CH-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[3];
							break;
						case "EN":
							ComponentsEventsFolder[j].name = "EN-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[4];
							break;
						case "EX":
							ComponentsEventsFolder[j].name = "EX-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[5];
							break;
						case "GB":
							ComponentsEventsFolder[j].name = "GB-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[6];					
							break;
						case "IN":
							ComponentsEventsFolder[j].name = "IN-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[7];
							break;
						case "PO":
							ComponentsEventsFolder[j].name = "PO-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[8];
							break;
						case "SU":
							ComponentsEventsFolder[j].name = "SU-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[10];
							break;
						case "TR":
							ComponentsEventsFolder[j].name = "TR-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[9];
							break;
						case "TU":
							ComponentsEventsFolder[j].name = "TU-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[10];
							break;
						case "WW":
							ComponentsEventsFolder[j].name = "WW-" + projectName;
							vehicleBank.relationships.events.add(ComponentsEventsFolder[j]);
							ComponentsEventsFolder[j].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[4].input[12];
							break;
					}
				}
			}

			else
			{
				eventName = EventsFolder[i].name;
				lodPrefix = eventName.substring(0, eventName.indexOf("-"));
				prefix = eventName.substring(3, eventName.indexOf("-", 3)); //TODO substitute 3 with constexpr
				if (lodPrefix == "LO")
				{
					if (prefix == "BF")
					{
						EventsFolder[i].name = "LO-BF-" + projectName;
						lodBank.relationships.events.add(EventsFolder[i]);
						EventsFolder[i].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[0].input[0];
					}
					else if (prefix == "PO")
					{
						EventsFolder[i].name = "LO-PO-" + projectName;
						lodBank.relationships.events.add(EventsFolder[i]);
						EventsFolder[i].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[0].input[1];
					}
					else
					{
						EventsFolder[i].name = "LO-" + projectName;
						lodBank.relationships.events.add(EventsFolder[i]);
						EventsFolder[i].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[0].input[2];
					}
				}

				else
				{
					EventsFolder[i].name = projectName;
					vehicleBank.relationships.events.add(EventsFolder[i]);
					EventsFolder[i].mixerInput.output = studio.project.workspace.mixer.masterBus.input[1].input[3];
				}
			}
		}
	}
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