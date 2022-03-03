import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { MaterialManagementComponent } from './material-management/material-management.component';
import { AddOrViewItemComponent } from './requisition/add-or-view-item/add-or-view-item.component';
import { AddOrApproveComponent } from './requisition/add-or-approve/add-or-approve.component';
import { ViewItemPOComponent } from './material-management/purchase-orders/view-item-po/view-item-po.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component'; 
import { MaterialRequirementPlanningComponent } from './material-requirement-planning/material-requirement-planning.component';
import { ViewIssueComponent } from './inventory-management/material-issues/view-issue/view-issue.component';
import { IssueSlipDialogComponent } from './inventory-management/material-issues/issue-slip-dialog/issue-slip-dialog.component';
import { AddEditRequisitionComponent } from './requisition/store-in-charge/add-edit-requisition/add-edit-requisition.component';
import { StockReconcilliation2Component } from './material-requirement-planning/stock-reconciliation/stock-reconcilliation2/stock-reconcilliation2.component';
import { DispatchItemQuantityComponent } from './inventory-management/stock-transfers/outgoing-stock/dispatch-item-quantity/dispatch-item-quantity.component';
import { STOSparePartsComponent } from './inventory-management/stock-transfers/outgoing-stock/stospare-parts/stospare-parts.component';
import { ViewItemComponent } from './quotations/view-item/view-item.component';
import { PublishPurchaseorderReviseComponent } from './material-management/purchase-orders/published-po/publish-purchaseorder-revise/publish-purchaseorder-revise.component';
import { ItemsAndQuantitiesComponent } from './requisition/items-and-quantities/items-and-quantities.component';
import { GridcolPopupComponent } from './requisition/items-and-quantities/gridcol-popup/gridcol-popup.component';
import { AddNewItemDialogComponent } from './requisition/items-and-quantities/add-new-item-dialog/add-new-item-dialog.component';
import { ItemsAndQuotesQuotationsComponent } from './quotations/items-and-quotes-quotations/items-and-quotes-quotations.component';
import { EditquotationspopupQutotationsComponent } from './quotations/editquotationspopup-qutotations/editquotationspopup-qutotations.component';
import { OpenordersQuotationsPopupComponent } from './quotations/items-and-quotes-quotations/openorders-quotations-popup/openorders-quotations-popup.component';
import { ServicecontractsComponent } from './servicecontracts/servicecontracts.component';
import { SetupComponent } from './setup/setup.component';
import { AddNewItemDialogServicecontractsComponent } from './servicecontracts/requistion-service-contracts/items-and-quantities-servicecontracts/add-new-item-dialog-servicecontracts/add-new-item-dialog-servicecontracts.component';
import { GridcolPopupServicecontractsComponent } from './servicecontracts/requistion-service-contracts/items-and-quantities-servicecontracts/gridcol-popup-servicecontracts/gridcol-popup-servicecontracts.component';
import { ItemsAndQuantitiesServicecontractsComponent } from './servicecontracts/requistion-service-contracts/items-and-quantities-servicecontracts/items-and-quantities-servicecontracts.component';
import { ItemsAndQuotesServicecontractsComponent } from './servicecontracts/quotations-servicecontracts/items-and-quotes-servicecontracts/items-and-quotes-servicecontracts.component';
import { OpenorderspopupServicecontractsComponent } from './servicecontracts/quotations-servicecontracts/items-and-quotes-servicecontracts/openorderspopup-servicecontracts/openorderspopup-servicecontracts.component';
import { RfqQuotesPopupComponent } from './material-management/rfq/rfq-quotes-popup/rfq-quotes-popup.component';
import { QuotesscreenAddDialogueComponent } from './material-management/rfq/rfq-quotes-popup/quotesscreen-add-dialogue/quotesscreen-add-dialogue.component';
import { RfqQuotesPopupServicecontractsComponent } from './servicecontracts/rfq-servicecontracts/rfq-quotes-popup-servicecontracts/rfq-quotes-popup-servicecontracts.component';
import { QuotesscreenServcontsAddDialogComponent } from './servicecontracts/rfq-servicecontracts/rfq-quotes-popup-servicecontracts/quotesscreen-servconts-add-dialog/quotesscreen-servconts-add-dialog.component';
import { ItemsAndQuotesPopupQuotationsComponent } from './quotations/items-and-quotes-popup-quotations/items-and-quotes-popup-quotations.component';
import { ItemsAndQuotesPopupServicecontractsComponent } from './servicecontracts/quotations-servicecontracts/items-and-quotes-servicecontracts/items-and-quotes-popup-servicecontracts/items-and-quotes-popup-servicecontracts.component';
import { TermsTemplatePurchaseComponent } from './material-management/purchase-orders/terms-template-purchase/terms-template-purchase.component';
import { NarrationsPurchasePopupComponent } from './material-management/purchase-orders/terms-template-purchase/narrations-purchase-popup/narrations-purchase-popup.component';
import { SavenewtemplatePurchasePopupComponent } from './material-management/purchase-orders/terms-template-purchase/savenewtemplate-purchase-popup/savenewtemplate-purchase-popup.component';
import { NoOfStoresStoremasterSetupComponent } from './setup/store-master-setup/no-of-stores-storemaster-setup/no-of-stores-storemaster-setup.component';
import { AddStoreNoOfStoresComponent } from './setup/store-master-setup/no-of-stores-storemaster-setup/add-store-no-of-stores/add-store-no-of-stores.component';
import { AvailableitemsStorenameStoremasterpopupComponent } from './setup/store-master-setup/no-of-stores-storemaster-setup/availableitems-storename-storemasterpopup/availableitems-storename-storemasterpopup.component';
import { WayBillRequistionPackingListComponent } from './material-management/consignment/active/way-bill-requistion-packing-list/way-bill-requistion-packing-list.component';
import { AvailableQtyRequisitionComponent } from './requisition/items-and-quantities/available-qty-requisition/available-qty-requisition.component';
import { InfoRfqComponent } from './material-management/rfq/info-rfq/info-rfq.component';
import { AvailabilityDetailsPopupComponent } from './requisition/items-and-quantities/availability-details-popup/availability-details-popup.component';
import { BulkQuotePopupComponent } from './quotations/items-and-quotes-quotations/bulk-quote-popup/bulk-quote-popup.component';
import { AvailableQuantityPopupItemsQuantitiesComponent } from './servicecontracts/requistion-service-contracts/items-and-quantities-servicecontracts/available-quantity-popup-items-quantities/available-quantity-popup-items-quantities.component';
import { ItemsandquantitiesActiveStocktransfersComponent } from './inventory-management/stock-transfers/active-stock-transfers/itemsandquantities-active-stocktransfers/itemsandquantities-active-stocktransfers.component';
import { GridcolPopupStockreconciliation2Component } from './material-requirement-planning/stock-reconciliation/stock-reconcilliation2/gridcol-popup-stockreconciliation2/gridcol-popup-stockreconciliation2.component';

import { QuotationBulkQuotesPopUpComponent } from './servicecontracts/quotations-servicecontracts/items-and-quotes-servicecontracts/quotation-bulk-quotes-pop-up/quotation-bulk-quotes-pop-up.component';

import { WorkOrderRequistionComponent } from './servicecontracts/work-orders/work-order-requistion/work-order-requistion.component';
import { WorkOrderItemComponent } from './servicecontracts/work-orders/work-order-item/work-order-item.component';

import { PendingRequistionPopUpComponent } from './servicecontracts/work-orders/pending/pending-requistion-pop-up/pending-requistion-pop-up.component';

import { PublishedRequistionPopUpComponent } from './servicecontracts/work-orders/published/published-requistion-pop-up/published-requistion-pop-up.component';

import { ArchivedRequistionPopUpComponent } from './servicecontracts/work-orders/archived/archived-requistion-pop-up/archived-requistion-pop-up.component';

import { PublishedForeClosePopUpComponent } from './servicecontracts/work-orders/published/published-fore-close-pop-up/published-fore-close-pop-up.component';
import { PartsServiceChallansPopUpComponent } from './servicecontracts/service-challans/parts-service-challans-pop-up/parts-service-challans-pop-up.component';

import { EquipmentServiceChallansPopUpComponent } from './servicecontracts/service-challans/equipment-service-challans-pop-up/equipment-service-challans-pop-up.component';
import { TermsPendingPopUpComponent } from './servicecontracts/work-orders/pending/terms-pending-pop-up/terms-pending-pop-up.component';

import { TermsPurchaseOrdersPopUpComponent } from './material-management/purchase-orders/unpublished-po/terms-purchase-orders-pop-up/terms-purchase-orders-pop-up.component';
import { FinanceComponent } from './finance/finance.component';
import { ModalModule } from 'ngx-bootstrap';
import { MatDialog } from '@angular/material';
import { QalogArnComponent } from './servicecontracts/arn/qalog-arn/qalog-arn.component';
import { AddInfopopupComponent } from './material-management/rfq/info-rfq/add-infopopup/add-infopopup.component';
import { AddPartsComponent } from './servicecontracts/service-challans/parts-service-challans-pop-up/add-parts/add-parts.component';
import { AddEquipmentComponent } from './servicecontracts/service-challans/equipment-service-challans-pop-up/add-equipment/add-equipment.component';
import { EditQalogComponent } from './servicecontracts/arn/qalog-arn/edit-qalog/edit-qalog.component';
import { AddStockTransferComponent } from './inventory-management/stock-transfers/stock-transfer-order/add-stock-transfer/add-stock-transfer.component';
import { RentalsComponent } from './rentals/rentals.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IncomeComponent } from './rentals/income/income.component';
import { ExpenseComponent } from './rentals/expense/expense.component';
import { DocumentsComponent } from './rentals/documents/documents.component';
import { AddEditRentalsComponent } from './rentals/add-edit-rentals/add-edit-rentals.component';
import { UpdateWorkHoursComponent } from './rentals/update-work-hours/update-work-hours.component';
import { NotesComponent } from './rentals/notes/notes.component';
import { DeleteConfirmDialogComponent } from '../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AddWorksHoursComponent } from './rentals/add-works-hours/add-works-hours.component';
import { CreateStockTransferRequestDialogComponent } from './inventory-management/stock-transfers/active-stock-transfers/create-stock-transfer-request-dialog/create-stock-transfer-request-dialog.component';
import { NotesActiveStocktransfersComponent } from './inventory-management/stock-transfers/active-stock-transfers/notes-active-stocktransfers/notes-active-stocktransfers.component';
import { PurchaseIndentuploadComponent } from './requisition/items-and-quantities/purchase-indentupload/purchase-indentupload.component';
import { RfquploadformComponent } from './material-management/rfquploadform/rfquploadform.component';
import { ItemsUnpublishPopupComponent } from './material-management/purchase-orders/unpublished-po/items-unpublish-popup/items-unpublish-popup.component';
import { AdditemtounpublishComponent } from './material-management/purchase-orders/unpublished-po/items-unpublish-popup/additemtounpublish/additemtounpublish.component';
import { ShowIssueComponent } from '../kbpl-projects/projects-gridview/show-issue/show-issue.component';
import { ViewDocsComponent } from './rentals/view-docs/view-docs.component';
import { ViewInvoicesComponent } from './rentals/view-invoices/view-invoices.component';
import { AssetsUnpublishedPoComponent } from './material-management/purchase-orders/unpublished-po/assets-unpublished-po/assets-unpublished-po.component';
import { AddAssetsToUnpublishedComponent } from './material-management/purchase-orders/unpublished-po/assets-unpublished-po/add-assets-to-unpublished/add-assets-to-unpublished.component';
import { AssetsPublishedPoComponent } from './material-management/purchase-orders/published-po/assets-published-po/assets-published-po.component';
import { AddAssetsToPublishedComponent } from './material-management/purchase-orders/published-po/assets-published-po/add-assets-to-published/add-assets-to-published.component';
import { AssetsArchivePoComponent } from './material-management/purchase-orders/archived-po/assets-archive-po/assets-archive-po.component';
import { AddAssetsToArchiveComponent } from './material-management/purchase-orders/archived-po/assets-archive-po/add-assets-to-archive/add-assets-to-archive.component';

export const routes = [
  { path:'', redirectTo:'procurement', pathMatch:'full'},
  { path: 'procurement', component:MaterialManagementComponent,loadChildren: "./material-management/material-management.module#MaterialManagementModule" },
  { path: 'inventory-management' , component:InventoryManagementComponent , loadChildren:"./inventory-management/inventory-management.module#InventoryManagementModule"},
  { path: 'servicecontracts', component: ServicecontractsComponent , loadChildren: "./servicecontracts/servicecontracts.module#ServicecontractsModule" },
  { path: 'setup', component: SetupComponent , loadChildren: "./setup/setup.module#SetupModule" },
  { path: 'add-item', component:AddOrViewItemComponent},
  { path: 'approve-item', component:AddOrApproveComponent},
  { path: 'view-item-po', component:ViewItemPOComponent},
  { path: 'servicecontracts/service-challans/parts', component:PartsServiceChallansPopUpComponent},
  { path: 'servicecontracts/service-challans/equiments', component:EquipmentServiceChallansPopUpComponent},
  { path: 'material-requirement', component:MaterialRequirementPlanningComponent, loadChildren:"./material-requirement-planning/material-requirement-planning.module#MaterialRequirementPlanningModule"},
  { path: 'issue', component:ViewIssueComponent, data: { breadcrumb: 'Material Issues'}},
  { path: 'material-requirement/stock-reconcilliation/stock-reconcilliationTable', component:StockReconcilliation2Component, data: { breadcrumb: 'Opening Stock' } }, 
  { path: 'dispatch-quantity', component:DispatchItemQuantityComponent},
  { path: 'stock-transfer-order', component:STOSparePartsComponent},
  { path: 'view-item', component:ViewItemComponent},
  { path: 'procurement/PublishPurchaseorderRevise', component: PublishPurchaseorderReviseComponent ,loadChildren: "./material-management/purchase-orders/published-po/publish-purchaseorder-revise/publish-purchaseorder-revise.module#PublishPurchaseorderReviseModule" },
  { path: 'procurement/indent/Itemsandquantites', component:ItemsAndQuantitiesComponent, data: { breadcrumb: 'Indent' } }, 
  { path: 'procurement/quotaions/ItemsAndQuotes', component: ItemsAndQuotesQuotationsComponent , data: { breadcrumb: 'Quotations' } }, 
  { path: 'servicecontracts/indent/ItemsAndQuantitiesServicecontracts', component:ItemsAndQuantitiesServicecontractsComponent, data: { breadcrumb: 'Indent' } }, 
  { path: 'QuotationsServicecontracts/ItemsAndQuotesServicecontracts', component:ItemsAndQuotesServicecontractsComponent, data: { breadcrumb: 'Quotations' } }, 
  { path :'procurement/rfq/rfqquotesscreen' , component: RfqQuotesPopupComponent, data: { breadcrumb: 'RFQ' }},  
  { path :'rfqquotesscreen-servicecontracts' , component: RfqQuotesPopupServicecontractsComponent, data: { breadcrumb: 'RFQ' }}, 
  { path :'procurement/purchase-orders/unpublished-po/TermsTemplatePurchase' , component: TermsTemplatePurchaseComponent, data: { breadcrumb: '' }}, 
  { path :'procurement/purchase-orders/unpublished-po/items-unpublished-po' , component: ItemsUnpublishPopupComponent, data: { breadcrumb: '' }}, 
  { path :'procurement/purchase-orders/unpublished-po/assets-unpublished-po' , component: AssetsUnpublishedPoComponent, data: { breadcrumb: '' }},   
  { path :'procurement/purchase-orders/published-po/assets-published-po' , component: AssetsPublishedPoComponent, data: { breadcrumb: '' }},  
  { path :'procurement/purchase-orders/archived-po/assets-archived-po' , component: AssetsArchivePoComponent, data: { breadcrumb: '' }},  
  { path :'NoofStores' , component: NoOfStoresStoremasterSetupComponent, data: { breadcrumb: 'Store Master'} }, 
  { path :'procurement/consignments/active/WayBillRequistionPackingList' , component: WayBillRequistionPackingListComponent, loadChildren:"./material-management/consignment/active/way-bill-requistion-packing-list/way-bill-requistion-packing-list.module#WayBillRequistionPackingListModule"}  ,
  { path :'availablequantityrequisition' , component: AvailableQtyRequisitionComponent, data: { breadcrumb: 'Indent'} }, 
  { path :'procurement/rfq/InfoRfq' , component: InfoRfqComponent, data: { breadcrumb: 'RFQ'} },
  { path :'inventory-management/stock-transfers/ActiveStockTransfers/ItemsandquantitiesActiveStocktransfers' , component:  ItemsandquantitiesActiveStocktransfersComponent, data: { breadcrumb: ''} }, 
  { path :'inventory-management/stock-transfers/ActiveStockTransfers/create-new-stock' , component:  CreateStockTransferRequestDialogComponent, data: { breadcrumb: ''} }, 
  { path :'servicecontracts/arn/Qalog-arn' , component:   QalogArnComponent, data: { breadcrumb: ''} },
  //{ path: 'finance', component: FinanceComponent , loadChildren: "./finance/finance.module#FinanceModule" },
  { path: 'rentals', component: RentalsComponent, data: { breadcrumb: 'Rentals'}},
  { path: 'income', component: IncomeComponent, data: { breadcrumb: 'Income'}},
  { path: 'expense', component: ExpenseComponent, data: { breadcrumb : 'Expenses'}},
  { path: 'rentals/document', component: DocumentsComponent, data : { breadcrumb : 'Documents'}},
  { path: 'rentals/archive', component: UpdateWorkHoursComponent, data: { breadcrumb: 'Rentals'}},
  { path: 'rentals/assets', component: NotesComponent, data: { breadcrumb: 'Rentals'}},
  { path: 'rentals/assets', component: NotesComponent, data: { breadcrumb: 'Rentals'}},



];

@NgModule({
  declarations: [
    AdditemtounpublishComponent,
    AddAssetsToUnpublishedComponent,
    CreateStockTransferRequestDialogComponent,
    NotesActiveStocktransfersComponent,
    MaterialManagementComponent, 
    EditQalogComponent,
    AddOrViewItemComponent, 
    AddOrApproveComponent, 
    ViewItemPOComponent,
    InventoryManagementComponent, 
    MaterialRequirementPlanningComponent, 
    ViewIssueComponent,
    IssueSlipDialogComponent,
    AddEditRequisitionComponent,
    StockReconcilliation2Component,
    DispatchItemQuantityComponent,
    STOSparePartsComponent,
    ViewItemComponent,
    QalogArnComponent,
    PublishPurchaseorderReviseComponent,
    ItemsAndQuantitiesComponent,
    GridcolPopupComponent,
    AddNewItemDialogComponent, 
    ItemsAndQuotesQuotationsComponent, 
    AddInfopopupComponent,
    AddStockTransferComponent,
    EditquotationspopupQutotationsComponent,
    OpenordersQuotationsPopupComponent, 
    ServicecontractsComponent, 
    SetupComponent,
    ItemsAndQuantitiesServicecontractsComponent, 
    AddNewItemDialogServicecontractsComponent, 
    GridcolPopupServicecontractsComponent ,
    ItemsAndQuotesServicecontractsComponent,
    OpenorderspopupServicecontractsComponent,
    RfqQuotesPopupComponent,
    QuotesscreenAddDialogueComponent,
    RfqQuotesPopupServicecontractsComponent,
    QuotesscreenServcontsAddDialogComponent,
    ItemsAndQuotesPopupQuotationsComponent, 
    ItemsAndQuotesPopupServicecontractsComponent,
    TermsTemplatePurchaseComponent,
    NarrationsPurchasePopupComponent, 
    SavenewtemplatePurchasePopupComponent,
    NoOfStoresStoremasterSetupComponent, 
    AddStoreNoOfStoresComponent,  
    AvailableitemsStorenameStoremasterpopupComponent, 
    WayBillRequistionPackingListComponent,
    AvailableQtyRequisitionComponent,
    InfoRfqComponent,
    AvailabilityDetailsPopupComponent, 
    BulkQuotePopupComponent, 
    AvailableQuantityPopupItemsQuantitiesComponent, 
    ItemsandquantitiesActiveStocktransfersComponent,
    GridcolPopupStockreconciliation2Component,
    AvailableQuantityPopupItemsQuantitiesComponent,
    QuotationBulkQuotesPopUpComponent, 
    ItemsUnpublishPopupComponent,
    WorkOrderRequistionComponent,
    WorkOrderItemComponent,
    AssetsArchivePoComponent,
    PendingRequistionPopUpComponent, 
    PublishedRequistionPopUpComponent, 
    ArchivedRequistionPopUpComponent, 
    PublishedForeClosePopUpComponent,
    PartsServiceChallansPopUpComponent, 
    EquipmentServiceChallansPopUpComponent,
    AddPartsComponent,
    TermsPendingPopUpComponent,
    TermsPurchaseOrdersPopUpComponent,
    AddEquipmentComponent,
    RentalsComponent,
    IncomeComponent,
    ExpenseComponent,
    DocumentsComponent,
    AddEditRentalsComponent,
    UpdateWorkHoursComponent,
    NotesComponent,
    AddWorksHoursComponent,
    PurchaseIndentuploadComponent,
    RfquploadformComponent,
    ViewDocsComponent,
    ViewInvoicesComponent,
    AssetsUnpublishedPoComponent,
    AssetsPublishedPoComponent,
    AddAssetsToPublishedComponent,
    AddAssetsToArchiveComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    DragulaModule,
    SharedModule,NgApexchartsModule,
    ConfirmationPopoverModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule,NgMultiSelectDropDownModule,
  ],
  entryComponents:[
    AdditemtounpublishComponent,
    IssueSlipDialogComponent,AddEditRentalsComponent,
    AddEditRequisitionComponent,NotesComponent,
    GridcolPopupComponent,
    AddNewItemDialogComponent,ViewInvoicesComponent,
    AddPartsComponent,
    AddInfopopupComponent, 
    AddEquipmentComponent,
    EditQalogComponent,ViewDocsComponent,
    EditquotationspopupQutotationsComponent,
    OpenordersQuotationsPopupComponent,
    AddNewItemDialogServicecontractsComponent, 
    GridcolPopupServicecontractsComponent,
    OpenorderspopupServicecontractsComponent, 
    QuotesscreenAddDialogueComponent,
    QuotesscreenServcontsAddDialogComponent,
    ItemsAndQuotesPopupQuotationsComponent,
    AddStockTransferComponent,
    ItemsAndQuotesPopupServicecontractsComponent,
    NarrationsPurchasePopupComponent, 
    SavenewtemplatePurchasePopupComponent, 
    AddStoreNoOfStoresComponent, 
    AvailableitemsStorenameStoremasterpopupComponent,
    AvailabilityDetailsPopupComponent,
    BulkQuotePopupComponent, AddWorksHoursComponent,
    AvailableQuantityPopupItemsQuantitiesComponent,
    GridcolPopupStockreconciliation2Component,
    AvailableQuantityPopupItemsQuantitiesComponent,
    QuotationBulkQuotesPopUpComponent, 
    DeleteConfirmDialogComponent,
    WorkOrderRequistionComponent, 
    WorkOrderItemComponent, 
    
    PendingRequistionPopUpComponent, 
    
    PublishedRequistionPopUpComponent, 
    
    ArchivedRequistionPopUpComponent, 
    
    PublishedForeClosePopUpComponent,
    AddAssetsToUnpublishedComponent,
   
    TermsPendingPopUpComponent,
    CreateStockTransferRequestDialogComponent,
    NotesActiveStocktransfersComponent,
    PurchaseIndentuploadComponent,
    RfquploadformComponent,
    AddAssetsToPublishedComponent,
    AddAssetsToArchiveComponent
]
})

export class PurchaseModule { 
  constructor(public dialog:MatDialog) { }
}