/* -------------------------------------------
	FMOD Studio Script:
	Create New Event

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateEvent",
    keySequence: "Ctrl+Alt+E",
    execute: function() {
    	CreateModule.CreateEvent();
    },
});