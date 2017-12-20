/*
 A program that allows you to quickly get browser information, and places groundwork for you to quickly switch out a resource files.
*/

// requirements
var fs = require('fs');

/*
 Function purpose: Get navigator information to determine necessary needs
 Inputs: None
 Outputs:
 	isp() => the web browsers vendor
 	userAgent() => the web browsers user agent
 	platform() => the web browsers platform / OS
 	userLanguage() => the web browsers language, typically preferred user language
*/
var get_navigator_information = class {
	isp() {
		return navigator.vendor
	}

	userAgent() {
		return navigator.userAgent
	}

	platform() {
		return navigator.platform
	}

	userLanguage() {
		return navigator.languages
	}
}

/*
 Main Program Class
*/
class JSManage {
	// Initialize class constructor
	constructor() {
		this._head = document.getElementsByTagName('head)')[0];
		this._cssPaths = {};
		this._jsPaths = {};
	}

	// Verify the paths to make sure they are a directory
	// Parameters: path => string with extension
	verify_paths(path) {
		try {
			fs.lstatSync(paths).isDirectory()
		} catch(e) {
			if (e.code == 'ENOENT') {
				// no such file or directory
				console.log("No such file or directory")
				return false;
			} else {
				return true;
			}
		}
	}

	// Load specified path directory resources
	// Parameters: path => string
	load_resources(path) {
		if (verify_paths(path) == true) {
			// run shell script to output html file of file contents
			var scanDirToHtml = new file("./bin/scan_dir.sh");
			scanDirToHtml.execute();
		}
	}

	/*
	 Enable forced redownload cache of resource file
	 Parameters:
	 	resourceName => string with extension
	 	phpOn => Boolean; true/false
	*/
	enable_force_cache(resourceName, phpOn) {
		if (typeof phpOn === 'undefined') {
			phpOn = false;
		}

		if (phpOn === true) {
			resourceName = resourceName + "?v=<?php echo rand(); ?>";
		} else {
			resourceName = resourceName + "?v=" + Math.random();
		}
		return resourceName;
	}
}