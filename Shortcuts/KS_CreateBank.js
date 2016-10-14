/* -------------------------------------------
	FMOD Studio Script:
	Create New Bank

	Author: Lorenzo Salvadori
   -------------------------------------------
*/
var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateBank",
    keySequence: "Ctrl+B",
    execute: function() {
    	CreateModule.CreateBank();
    },
});