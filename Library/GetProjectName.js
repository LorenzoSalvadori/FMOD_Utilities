/* Function that returns a project name */
var GetProjectName = function(){
	var projectPath = studio.project.filePath;
	var projectNameExt = projectPath.split("/");
	projectNameExt = projectNameExt.slice(projectNameExt.length - 1);
	var projectName = projectNameExt[0].substring(0, projectNameExt[0].length - 6);
};