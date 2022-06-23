/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"edu/ap/be/zsd042gameapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});