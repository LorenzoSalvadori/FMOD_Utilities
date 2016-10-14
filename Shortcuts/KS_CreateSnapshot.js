/* -------------------------------------------
	FMOD Studio Script:
	Create New Snapshot

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateSnapshot",
    keySequence: "Ctrl+Alt+S",
    execute: function() {
    	CreateModule.CreateSnapshot();
    },
});