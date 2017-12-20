/*
 A program that allows you to quickly get browser information, and places groundwork for you to quickly switch out a CSS file.
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

