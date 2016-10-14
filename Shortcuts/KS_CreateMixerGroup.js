/* -------------------------------------------
	FMOD Studio Script:
	Create New Mixer Group Track

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateMixerGroup",
    keySequence: "Ctrl+Alt+M",
    execute: function() {
    	CreateModule.CreateMixerGroup();
    },
});