sap.ui.define([
    'sap/m/MessageToast',
    'sap/ui/core/mvc/Controller',
//    "sap/ui/model/json/JSONModel",
//    "sap/ui/model/resource/ResourceModel",
    
], function(MessageToast,Controller) {
    'use strict';
  
     return Controller.extend('dev.sodogan.controller.App',{
      onInit: function(){
        console.log('on init');
       //create a new JSON model
/*        let simpleJson = {
          name:'solen',
         age:40
        };

      //set the JSON Model
      let simpleModel = new JSONModel(simpleJson);
      this.getView().setModel(simpleModel);
     
      //create a new ResourceModel
      let i18nModel = new ResourceModel({
       bundleName:'dev.sodogan.i18n.i18n',
       supportedLocales:['de','en_US','en'],
       fallbackLocale:'en'
     });
     
    //set the i18n Model
     this.getView().setModel(i18nModel,"i18n");
 */   
    },   
    onShowHello: function(input){
           let msg = `inside the app controller ${input}`;
            console.log(msg);
            MessageToast.show(msg,
            {
              width:"12em"
            })
        }
     });

});