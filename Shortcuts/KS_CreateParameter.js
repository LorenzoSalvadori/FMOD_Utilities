/* -------------------------------------------
	FMOD Studio Script:
	Create New Parameter

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateParameter",
    keySequence: "Ctrl+Alt+P",
    execute: function() {
    	if(studio.window.browserCurrent() && studio.window.browserCurrent().isOfType("Event")){
    		CreateModule.CreateParameter();
    	}
    	else {
    		alert("Please select an Event or a Snapshot in Tracks View mode to create a Parameter");
    	}
    },
});