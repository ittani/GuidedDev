define("Orders_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ProductsList",
				"values": {
					"_selectionOptions": {
						"attribute": "GridDetail_tviz7gf_SelectionState"
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesAddButton",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesRefreshButton",
				"values": {
					"caption": "#ResourceString(InvoicesRefreshButton_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesSettingsButton",
				"values": {
					"caption": "#ResourceString(InvoicesSettingsButton_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesExportDataButton",
				"values": {
					"caption": "#ResourceString(InvoicesExportDataButton_caption)#",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "InvoicesList",
							"filters": "$GridDetail_8621dmo | crt.ToCollectionFilters : 'GridDetail_8621dmo' : $GridDetail_8621dmo_SelectionState"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesImportDataButton",
				"values": {
					"caption": "#ResourceString(InvoicesImportDataButton_caption)#"
				}
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(InstallmentPlanExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "PaymentDeliveryTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "InstallmentPlanExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanToolsFlexContainer",
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
				"parentName": "InstallmentPlanToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InstallmentPlanRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "GridDetail_tf8magqDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InstallmentPlanToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InstallmentPlanSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "InstallmentPlanToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InstallmentPlanExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "InstallmentPlanList",
							"filters": "$GridDetail_tf8magq | crt.ToCollectionFilters : 'GridDetail_tf8magq' : $GridDetail_tf8magq_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "InstallmentPlanSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InstallmentPlanImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SupplyPaymentElement"
						}
					},
					"visible": true
				},
				"parentName": "InstallmentPlanSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(InstallmentPlanSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_tf8magq"
					]
				},
				"parentName": "InstallmentPlanToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "InstallmentPlanExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false
						}
					},
					"items": "$GridDetail_tf8magq",
					"activeRow": "$GridDetail_tf8magq_ActiveRow",
					"selectionState": "$GridDetail_tf8magq_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_tf8magqDS_Id",
					"columns": [
						{
							"id": "a16202e5-253c-65c0-f822-69c6e8a07c73",
							"code": "GridDetail_tf8magqDS_Name",
							"path": "Name",
							"caption": "#ResourceString(GridDetail_tf8magqDS_Name)#",
							"dataValueType": 27,
							"width": 171,
							"sticky": true
						},
						{
							"id": "0db7d313-0230-74d3-881e-cc584fbf4392",
							"code": "GridDetail_tf8magqDS_Type",
							"path": "Type",
							"caption": "#ResourceString(GridDetail_tf8magqDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "SupplyPaymentType",
							"width": 132
						},
						{
							"id": "ed5e7e03-f0e8-c7a9-1db7-cdec46671c1b",
							"code": "GridDetail_tf8magqDS_State",
							"path": "State",
							"caption": "#ResourceString(GridDetail_tf8magqDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "SupplyPaymentState",
							"width": 139
						},
						{
							"id": "26134f9f-1405-1fe2-036a-3cdea07edafe",
							"code": "GridDetail_tf8magqDS_Percentage",
							"path": "Percentage",
							"caption": "#ResourceString(GridDetail_tf8magqDS_Percentage)#",
							"dataValueType": 32,
							"width": 152
						},
						{
							"id": "f013bf53-8870-fbb1-bc5b-172ca4628b2c",
							"code": "GridDetail_tf8magqDS_Invoice",
							"path": "Invoice",
							"caption": "#ResourceString(GridDetail_tf8magqDS_Invoice)#",
							"dataValueType": 10,
							"referenceSchemaName": "Invoice",
							"width": 114
						}
					],
					"bulkActions": [],
					"_selectionOptions": {
						"attribute": "GridDetail_tf8magq_SelectionState"
					}
				},
				"parentName": "InstallmentPlanGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tf8magq_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_tf8magq",
							"filters": "$GridDetail_tf8magq | crt.ToCollectionFilters : 'GridDetail_tf8magq' : $GridDetail_tf8magq_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tf8magq_SelectionState"
						}
					}
				},
				"parentName": "InstallmentPlanList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tf8magq_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_tf8magqDS",
							"filters": "$GridDetail_tf8magq | crt.ToCollectionFilters : 'GridDetail_tf8magq' : $GridDetail_tf8magq_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tf8magq_SelectionState"
						}
					}
				},
				"parentName": "InstallmentPlanList",
				"propertyName": "bulkActions",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"GridDetail_tf8magq": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_tf8magqDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Type"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_tf8magqDS_Name": {
									"modelConfig": {
										"path": "GridDetail_tf8magqDS.Name"
									}
								},
								"GridDetail_tf8magqDS_Type": {
									"modelConfig": {
										"path": "GridDetail_tf8magqDS.Type"
									}
								},
								"GridDetail_tf8magqDS_State": {
									"modelConfig": {
										"path": "GridDetail_tf8magqDS.State"
									}
								},
								"GridDetail_tf8magqDS_Percentage": {
									"modelConfig": {
										"path": "GridDetail_tf8magqDS.Percentage"
									}
								},
								"GridDetail_tf8magqDS_Invoice": {
									"modelConfig": {
										"path": "GridDetail_tf8magqDS.Invoice"
									}
								},
								"GridDetail_tf8magqDS_Id": {
									"modelConfig": {
										"path": "GridDetail_tf8magqDS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"GridDetail_tf8magqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SupplyPaymentElement",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Type": {
									"path": "Type"
								},
								"State": {
									"path": "State"
								},
								"Percentage": {
									"path": "Percentage"
								},
								"Invoice": {
									"path": "Invoice"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_tf8magqDS": [
						{
							"attributePath": "Order",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});