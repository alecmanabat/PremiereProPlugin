
function onLoaded() {
	var csInterface = new CSInterface();
	csInterface.getHostCapabilities();
	loadJSX();
}

function showFileNames (data) {
	var result = document.getElementById("result");
	result.innerHTML = data;
}

function loadJSX() {
	var csInterface = new CSInterface();

	var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);

	var extensionRootGeneral = extensionPath + '/jsx/';
	csInterface.evalScript('$._ext.evalFiles("' + extensionRootGeneral + '")');

}

function evalScript(script, callback) {
	new CSInterface().evalScript(script, callback);
}
