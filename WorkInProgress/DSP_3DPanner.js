/* 	---------------------------------------
	FMOD Studio Object:
	3D Panner values with defaults
	
	3D Panner parameters: 	distanceRolloffType, minimumDistance, maximumDistance, extentMode, soundSize, minimumExtent, occlusionEnabled,
							dopplerMultiplier, panBlend, userPanDirection, userPanExtent, userLFELevel, LFEUpmixEnabled, stereoToSurroundUserPanMode,
							userStereoSeparation, userStereoAxis

	Author: Lorenzo Salvadori
	---------------------------------------
*/

var Panner3DObject = function(obj)
{
	if(obj == null)
	{
		obj = {};
	}

	this.distanceRolloffType = obj["distanceRolloffType"]!= null ? obj["distanceRolloffType"] : 3;
	this.minimumDistance = obj["minimumDistance"]!= null ? obj["minimumDistance"] : 1.5;
	this.maximumDistance = obj["maximumDistance"]!= null ? obj["maximumDistance"] : 300;
	this.extentMode = obj["extentMode"]!= null ? obj["extentMode"] : 1;
	this.soundSize = obj["soundSize"]!= null ? obj["soundSize"] : 4;
	this.minimumExtent = obj["minimumExtent"]!= null ? obj["minimumExtent"] : 60;
	this.occlusionEnabled = obj["occlusionEnabled"]!= null ? obj["occlusionEnabled"] : true;
	this.dopplerMultiplier = obj["dopplerMultiplier"]!= null ? obj["dopplerMultiplier"] : 100;
	this.panBlend = obj["panBlend"]!= null ? obj["panBlend"] : 1;
	this.userPanDirection = obj["userPanDirection"] != null ? obj["userPanDirection"] : 0;
	this.userPanExtent = obj["userPanExtent"]!= null ? obj["userPanExtent"] : 360;
	this.userLFELevel = obj["userLFELevel"] != null ?  obj["userLFELevel"]  : 0;
	this.LFEUpmixEnabled = obj["LFEUpmixEnabled"] != null ?  obj["LFEUpmixEnabled"]  : false;
	this.stereoToSurroundUserPanMode = obj["stereoToSurroundUserPanMode"]!= null ? obj["stereoToSurroundUserPanMode"] : 1;
	this.userStereoSeparation = obj["userStereoSeparation"]!= null ? obj["userStereoSeparation"] : 60;
	this.userStereoAxis =  obj["userStereoAxis"] != null ?  obj["userStereoAxis"] : 0;
};