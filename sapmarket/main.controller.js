sap.ui.controller("sapmarket.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapmarket.main
*/

	getObjData: function() {
		
		return objData = {
			model : new sap.ui.model.json.JSONModel(),
			data : {
				navigation: [{
					title: 'Root Item',
					icon: 'sap-icon://employee',
					expanded: true,
					key: 'root1',
					items: [{
						title: 'Child Item 1',
						key: 'page1'
					}, {
						title: 'Child Item 2',
						key: 'page2'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://building',
					key: 'root2'
				}, {
					title: 'Root Item',
					icon: 'sap-icon://card',
					expanded: false,
					items: [{
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}, {
						title: 'Child Item'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://action',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://action-settings',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://activate',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://activities',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://add',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://arobase',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://attachment',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://badge',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://basket',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://bed',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}, {
					title: 'Root Item',
					icon: 'sap-icon://bookmark',
					expanded: false,
					items: [{
						title: 'Child Item 1'
					}, {
						title: 'Child Item 2'
					}, {
						title: 'Child Item 3'
					}]
				}
				],
				fixedNavigation: [{
					title: 'Fixed Item 1',
					icon: 'sap-icon://employee'
				}, {
					title: 'Fixed Item 2',
					icon: 'sap-icon://building'
				}, {
					title: 'Fixed Item 3',
					icon: 'sap-icon://card'
				}],
				headerItems: [
				{
					text: "File"
				}, {
					text: "Edit"
				}, {
					text: "View"
				}, {
					text: "Settings"
				}, {
					text: "Help"
				}]
			}
		};
	},
	
	getRequestObj: function() {

		return requestObj = {
				requestUri: "",
				requestUrl: "https://services.odata.org/V3/(S(yccru4z1qsrrhsf2igzp20y3))/OData/OData.svc/",
				requestUrlProduct: "https://services.odata.org/V3/(S(yccru4z1qsrrhsf2igzp20y3))/OData/OData.svc/Products",
				requestUrlCategory: "https://services.odata.org/V3/(S(yccru4z1qsrrhsf2igzp20y3))/OData/OData.svc/Categories",
				method: "",
				data: {},
				headersAccess: {
					"DataServiceVersion": "3.0", 
					"MaxDataServiceVersion": "3.0"
				},
				headers: {
					"X-Requested-With": "XMLHttpRequest", 
					"Content-Type": "application/json;odata=minimalmetadata",
					"DataServiceVersion": "3.0", 
					"MaxDataServiceVersion": "3.0", 
					"Accept": "application/json;odata=minimalmetadata"
				}
		};
	},
	
	onInit: function() {
		
		// Localization
		var oResourceModel = new sap.ui.model.resource.ResourceModel({
			bundleName : "i18n.i18n"
		});
		
		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");		
		
		//OData
		var requestObj = this.getRequestObj();
		var oModel = new sap.ui.model.odata.v2.ODataModel(requestObj.requestUrl);
				
		oModel.oHeaders = requestObj.headersAccess;
		
		sap.ui.getCore().setModel(oModel, "products");
		
		//Monta o menu lateral
		var requestObjData = this.getObjData();
		requestObjData.model.setData(requestObjData.data);
		var oViewNavList = this.getView().byId("navlist"); 
		oViewNavList.setModel(requestObjData.model);
	
		this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);		

		//Inicia o menu lateral recolhido
		this.onSideNavButtonPress();
		
		//Carrega a tela de detalhe
	
		// Set the initial form to be the Change one
		this._showFormFragment("Change");
	    var oViewDetailChange = this.getView().byId("SimpleFormChange480_Trial");
		oViewDetailChange.setModel(oModel);
		
		// Set the initial form to be the Display one
		this._showFormFragment("Display");
		var oViewDetailDisplay = this.getView().byId("SimpleFormDisplay480_Trial");
	    oViewDetailDisplay.setModel(oModel);
	    
	    this._showBehaviorInitialView();   
	},
	
	//Exibe a view inicial
	_showBehaviorInitialView: function() {
	    this._showFormFragment("DisplayInitial");
		this.getView().byId("edit").setVisible(false);
	},
	
	handleSearch: function(oEvt) {
		var aFilters = [];
		var sQuery = oEvt.getSource().getValue();
		
		if(sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}
		
		var oList = this.getView().byId("idProductList");
		var oBinding = oList.getBinding("items");
		
		oBinding.filter(aFilters, "Application");
	},
	
	_getDialog: function () {
		if (!this._oDialog) {
			this._oDialog = sap.ui.xmlfragment("sapmarket.Dialog", this);
			this.getView().addDependent(this._oDialog);
		}
		return this._oDialog;
	},

	handleOpenDialog: function () {
		this._getDialog().open();
	},

	handleOpenDialogFilter: function () {
		this._getDialog().open("filter");
	},

	handleConfirm: function (oEvent) {
		if (oEvent.getParameters().filterString) {
			MessageToast.show(oEvent.getParameters().filterString);
		}
	},

	handleCloseDialog: function () {
		this._getDialog().close();
	},

	handleDeletePress: function(oEvent) {
		jQuery.sap.require("sap.m.MessageBox");
		var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
		var labelMessageBox = this.getView().getModel("i18n").getResourceBundle().getText("labelMessageBoxDelete");
		var labelMessageToastSuccess = this.getView().getModel("i18n").getResourceBundle().getText("labelMessageBoxDeleteSuccess");
		var labelMessageToastError = this.getView().getModel("i18n").getResourceBundle().getText("labelMessageBoxDeleteError");
		var oItem = oEvent.getParameter("listItem").getAttributes()[0].getText();
		var requestObj = this.getRequestObj();
		sap.m.MessageBox.confirm(
				labelMessageBox, {
					styleClass: bCompact? "sapUiSizeCompact" : "",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function(oAction) {
						if (oAction == sap.m.MessageBox.Action.YES) {
							requestObj.requestUri = requestObj.requestUrlProduct + "(" + oItem + ")";
							requestObj.method = "DELETE";
							
							OData.request(requestObj, 
									function(data, request) {
										sap.ui.getCore().getModel("products").refresh();
										sap.m.MessageToast.show(labelMessageToastSuccess);
									},
									function(err) {
										sap.m.MessageToast.show(labelMessageToastError);
									}
							);
							
						}
					}
				}
		);	
	},
	
	handleSavePress: function() {
		var labelMessageToastSuccess = this.getView().getModel("i18n").getResourceBundle().getText("labelMessageBoxSaveSuccess");
		var labelMessageToastError = this.getView().getModel("i18n").getResourceBundle().getText("labelMessageBoxSaveError");
		var oViewDetailChange = this.getView().byId("SimpleFormChange480_Trial");
		var oViewDetailDisplay = this.getView().byId("SimpleFormDisplay480_Trial");
		var oper = "";
		var sPath = oViewDetailChange.getElementBinding().sPath;
	    
		//Obtem o valor do model
		var boundObject = oViewDetailChange.getModel().getProperty(sPath);
		
		//Obtem os valores do formulário
		var productObj = {
				"odata.type":"ODataDemo.Product",
				ID: this.getView().byId("tID").getText(),
				Name: this.getView().byId("iName").getValue(),
				Description: this.getView().byId("iDescription").getValue(),
				Price: this.getView().byId("iPrice").getValue(),
				Rating: this.getView().byId("iRI_XS_Change").getValue()
		};
		
		var requestObj = this.getRequestObj();
		requestObj.data = productObj;
		//Update
		if (productObj.ID != "") {
			requestObj.requestUri = requestObj.requestUrlProduct + "(" + productObj.ID + ")";
			requestObj.method = "PUT";
		//Insert
		} else {
			oper = "I";
			productObj.ID = Math.floor(Math.random() * 70) + 15;
			requestObj.data = productObj;			
			requestObj.requestUri = requestObj.requestUrlProduct;
			requestObj.method = "POST";			
		}
	    
		OData.request(requestObj,
				function(data, request) {
					sap.ui.getCore().getModel("products").refresh();
					sap.m.MessageToast.show(labelMessageToastSuccess);
					//Mantém o detalhe no registro que foi incluído após o refresh do model
					if (oper === "I") {
						bContext = "/Products(" + productObj.ID + ")";
						oViewDetailDisplay.bindElement(bContext);
					    oViewDetailChange.bindElement(bContext);   
					}
				},
				function(err) {
					console.log(err);
					sap.m.MessageToast.show(labelMessageToastError);
				}
		);			
		
		this._toggleButtonsAndView(false);
	},
	
	onItemSelect : function(oEvent) {
		var item = oEvent.getParameter('item');
		var viewId = this.getView().getId();
		sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey());
	},

	handleUserNamePress: function (event) {
		var popover = new Popover({
			showHeader: false,
			placement: sap.m.PlacementType.Bottom,
			content:[
				new Button({
					text: 'Feedback',
					type: sap.m.ButtonType.Transparent
				}),
				new Button({
					text: 'Help',
					type: sap.m.ButtonType.Transparent
				}),
				new Button({
					text: 'Logout',
					type: sap.m.ButtonType.Transparent
				})
			]
		}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

		popover.openBy(event.getSource());
	},

	onSideNavButtonPress : function() {
		var viewId = this.getView().getId();
		var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
		var sideExpanded = toolPage.getSideExpanded();

		this._setToggleButtonTooltip(sideExpanded);

		toolPage.setSideExpanded(!toolPage.getSideExpanded());
	},

	_setToggleButtonTooltip : function(bLarge) {
		var toggleButton = this.getView().byId('sideNavigationToggleButton');
		if (bLarge) {
			toggleButton.setTooltip('Large Size Navigation');
		} else {
			toggleButton.setTooltip('Small Size Navigation');
		}
	},	
	
	// Visualização dos Detalhes
	onPressNavToDetail : function(oEvent) {
		this._toggleButtonsAndView(false);
		
		var oItem = oEvent.getSource();

	    var oViewDetailChange = this.getView().byId("SimpleFormChange480_Trial");
	    oViewDetailChange.bindElement(oItem.getBindingContext("products").getPath());
	    
	    var oViewDetailDisplay = this.getView().byId("SimpleFormDisplay480_Trial");
	    oViewDetailDisplay.bindElement(oItem.getBindingContext("products").getPath());

		this.getSplitContObj().to(this.createId("detail"));
		
		this._showFormFragment("Display");
	},

	onPressMasterBack : function() {
		this.getSplitContObj().backMaster();
	},

	getSplitContObj : function() {
		var result = this.byId("SplitAppDemo");
		if (!result) {
			jQuery.sap.log.error("SplitApp object can't be found");
		}
		return result;
	},
	
	onExit : function () {
		for(var sPropertyName in this._formFragments) {
			if(!this._formFragments.hasOwnProperty(sPropertyName)) {
				return;
			}

			this._formFragments[sPropertyName].destroy();
			this._formFragments[sPropertyName] = null;
		}
	},

	handleEditPress : function() {
		this._toggleButtonsAndView(true);
	},

	handleAddPress : function() {

		this.getSplitContObj().to(this.createId("detail"));
	    var oViewDetailChange = this.getView().byId("SimpleFormChange480_Trial");
	    oViewDetailChange.bindElement("");
		this._toggleButtonsAndView(true);
	},
	
	handleCancelPress : function() {

		this._toggleButtonsAndView(false);
		
		//Restore the data
		var oViewDetailDisplay = this.getView().byId("SimpleFormDisplay480_Trial");
		var oViewDetailChange = this.getView().byId("SimpleFormChange480_Trial");
		if (oViewDetailChange.getBindingContext() == null) {
		    this._showBehaviorInitialView();
		    this.getSplitContObj().backMaster();
		} else {
			//Limpa os campos
		    oViewDetailChange.bindElement("");			
		    //Retorna ao valor original
			oViewDetailChange.bindElement(oViewDetailDisplay.getBindingContext().getPath());
		}	
	},

	_formFragments: {},

	_toggleButtonsAndView : function (bEdit) {
		var oView = this.getView();
		// Show the appropriate action buttons
		oView.byId("edit").setVisible(!bEdit);
		oView.byId("save").setVisible(bEdit);
		oView.byId("cancel").setVisible(bEdit);

		// Set the right form type
		this._showFormFragment(bEdit ? "Change" : "Display");
	},

	_getFormFragment: function (sFragmentName) {
		var oFormFragment = this._formFragments[sFragmentName];

		if (oFormFragment) {
			return oFormFragment;
		}

		oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "sapmarket." + sFragmentName);

		return this._formFragments[sFragmentName] = oFormFragment;
	},

	_showFormFragment : function (sFragmentName) {
		var oPage = this.getView().byId("detail");

		oPage.removeAllContent();
		oPage.insertContent(this._getFormFragment(sFragmentName));
	},
});
