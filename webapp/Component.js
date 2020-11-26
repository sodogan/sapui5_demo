sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("dev.sodogan.Component", {

		metadata : {
     	  manifest:"json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			let oData = {
	             name:'Solen',
			};
			let oModel = new JSONModel(oData);
			this.setModel(oModel);
        // No need as manifest is specifying
	    // No need to set i18n model

		}
	});

});