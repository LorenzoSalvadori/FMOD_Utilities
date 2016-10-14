/* -------------------------------------------
	FMOD Studio Script:
	Create New Folder

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateFolder",
    keySequence: "Ctrl+Alt+F",
    execute: function() {
    	CreateModule.CreateEventFolder();
    },
});