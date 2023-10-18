define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "BulkEmailExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(BulkEmailExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "MarketingTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "BulkEmailToolContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "BulkEmailExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailToolFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "BulkEmailToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BulkEmailRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "BulkEmailListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "BulkEmailToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BulkEmailSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "BulkEmailToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BulkEmailExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(BulkEmailExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "BulkEmailList"
						}
					},
					"visible": true
				},
				"parentName": "BulkEmailSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(BulkEmailSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"BulkEmailList"
					]
				},
				"parentName": "BulkEmailToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BulkEmailListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "BulkEmailExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BulkEmailList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$BulkEmailList",
					"primaryColumnName": "BulkEmailListDS_Id",
					"columns": [
						{
							"id": "8bd7491f-6e03-01bb-b662-c27b4dab5ccd",
							"code": "BulkEmailListDS_BulkEmail",
							"path": "BulkEmail",
							"caption": "#ResourceString(BulkEmailListDS_BulkEmail)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmail",
							"width": 314
						},
						{
							"id": "d96e6f8c-9b4a-3cc8-ff95-13b2bd43897e",
							"code": "BulkEmailListDS_BulkEmailType",
							"path": "BulkEmail.Type",
							"caption": "#ResourceString(BulkEmailList_d96e6f8c)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmailType",
							"width": 133
						},
						{
							"id": "34550b7c-65dc-3285-6283-949b95f88ba5",
							"code": "BulkEmailListDS_BulkEmailResponse",
							"path": "BulkEmailResponse",
							"caption": "#ResourceString(BulkEmailListDS_BulkEmailResponse)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmailResponse",
							"width": 156
						},
						{
							"id": "2fc71465-ee9c-c4fa-0b3e-1d919fcdf0ae",
							"code": "BulkEmailListDS_ResponseReason",
							"path": "ResponseReason",
							"caption": "#ResourceString(BulkEmailListDS_ResponseReason)#",
							"dataValueType": 10,
							"referenceSchemaName": "BulkEmailResponseReason"
						},
						{
							"id": "59f54b50-19e3-e5dc-2d66-8881a21d64f9",
							"code": "BulkEmailListDS_BulkEmailStartDate",
							"path": "BulkEmail.StartDate",
							"caption": "#ResourceString(BulkEmailList_59f54b50)#",
							"dataValueType": 7,
							"width": 152
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "BulkEmailListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"BulkEmailList": {
					"isCollection": true,
					"modelConfig": {
						"path": "BulkEmailListDS",
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "BulkEmail"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"BulkEmailListDS_BulkEmail": {
								"modelConfig": {
									"path": "BulkEmailListDS.BulkEmail"
								}
							},
							"BulkEmailListDS_BulkEmailType": {
								"modelConfig": {
									"path": "BulkEmailListDS.BulkEmailType"
								}
							},
							"BulkEmailListDS_BulkEmailResponse": {
								"modelConfig": {
									"path": "BulkEmailListDS.BulkEmailResponse"
								}
							},
							"BulkEmailListDS_ResponseReason": {
								"modelConfig": {
									"path": "BulkEmailListDS.ResponseReason"
								}
							},
							"BulkEmailListDS_BulkEmailStartDate": {
								"modelConfig": {
									"path": "BulkEmailListDS.BulkEmailStartDate"
								}
							},
							"BulkEmailListDS_Id": {
								"modelConfig": {
									"path": "BulkEmailListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"BulkEmailListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "VwBulkEmailAudience",
						"attributes": {
							"BulkEmail": {
								"path": "BulkEmail"
							},
							"BulkEmailType": {
								"path": "BulkEmail.Type",
								"type": "ForwardReference"
							},
							"BulkEmailResponse": {
								"path": "BulkEmailResponse"
							},
							"ResponseReason": {
								"path": "ResponseReason"
							},
							"BulkEmailStartDate": {
								"path": "BulkEmail.StartDate",
								"type": "ForwardReference"
							}
						}
					}
				}
			},
			"dependencies": {
				"BulkEmailListDS": [
					{
						"attributePath": "Contact",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});