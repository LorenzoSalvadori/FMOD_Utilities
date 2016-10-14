/* -------------------------------------------
	FMOD Studio Script:
	Create New VCA

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateVCA",
    keySequence: "Ctrl+Alt+V",
    execute: function() {
    	CreateModule.CreateVCA();
    },
});