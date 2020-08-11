/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ZGIT/ZGITDEMO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ZGIT/ZGITDEMO/test/integration/pages/App",
	"ZGIT/ZGITDEMO/test/integration/pages/Browser",
	"ZGIT/ZGITDEMO/test/integration/pages/Master",
	"ZGIT/ZGITDEMO/test/integration/pages/Detail",
	"ZGIT/ZGITDEMO/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ZGIT.ZGITDEMO.view."
	});

	sap.ui.require([
		"ZGIT/ZGITDEMO/test/integration/NavigationJourneyPhone",
		"ZGIT/ZGITDEMO/test/integration/NotFoundJourneyPhone",
		"ZGIT/ZGITDEMO/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});