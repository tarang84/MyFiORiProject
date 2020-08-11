/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

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
		"ZGIT/ZGITDEMO/test/integration/MasterJourney",
		"ZGIT/ZGITDEMO/test/integration/NavigationJourney",
		"ZGIT/ZGITDEMO/test/integration/NotFoundJourney",
		"ZGIT/ZGITDEMO/test/integration/BusyJourney",
		"ZGIT/ZGITDEMO/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});