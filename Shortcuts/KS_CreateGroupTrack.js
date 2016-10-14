/* -------------------------------------------
	FMOD Studio Script:
	Create New Group Track

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateGroupTrack",
    keySequence: "Ctrl+Alt+G",
    execute: function() {
    	if(studio.window.browserCurrent() && studio.window.browserCurrent().isOfType("Event")){
    		CreateModule.CreateGroupTrack();
    	}
    	else {
    		alert("Please select an event to create a GroupTrack");
    	}
    },
});