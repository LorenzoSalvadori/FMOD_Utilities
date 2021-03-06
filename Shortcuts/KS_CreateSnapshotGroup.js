/* -------------------------------------------
	FMOD Studio Script:
	Create New Snapshot Group

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

var CreateModule = studio._internal.require('AtomicPropositions/AP_CreateNew.js');

studio.menu.addMenuItem({
    name: "Shortcuts\\CreateSnapshotGroup",
    keySequence: "Ctrl+Alt+L",
    execute: function() {
    	CreateModule.CreateSnapshotGroup();
    },
});