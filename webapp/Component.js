sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("dev.sodogan.Component", {

		metadata : {
   /*
  			"rootView": {
				"viewName": "dev.sodogan.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}
	*/  
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
       /* No need as manifest is specifying
			// set i18n model
			let i18nModel = new ResourceModel({
				bundleName : "dev.sodogan.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		*/	
		}
	});

});