/* -------------------------------------------
	FMOD Studio Script:
	Create New Return

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateMixerReturn",
    keySequence: "Ctrl+Alt+R",
    execute: function() {
    	CreateModule.CreateMixerReturn();
    },
});