// Creation of the custom panel

chrome.devtools.panels.create("RunJS", "img/icon.png", "core/index.html", function (panel) {
	console.log("Custom Panel Created Successfully");
});