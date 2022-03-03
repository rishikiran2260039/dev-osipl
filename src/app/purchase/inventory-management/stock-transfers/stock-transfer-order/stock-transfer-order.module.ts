import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import { TechnicalHeadComponent } from './technical-head/technical-head.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';

import { SharedModule } from 'src/app/shared/shared.module';
import { EditStocktransferRequestComponent } from './requests/edit-stocktransfer-request/edit-stocktransfer-request.component';
import { StockTransferOrderSparepartsReqitemComponent } from './requests/stock-transfer-order-spareparts-reqitem/stock-transfer-order-spareparts-reqitem.component';
import { StockTransferOrderSparepartsApproveitemsComponent } from './requests/stock-transfer-order-spareparts-approveitems/stock-transfer-order-spareparts-approveitems.component';

import { TotalstockqtydialogComponent } from './requests/totalstockqtydialog/totalstockqtydialog.component';
import { SurplusstockdialogComponent } from './requests/surplusstockdialog/surplusstockdialog.component';
import { EditspopupApproveitemsComponent } from './requests/stock-transfer-order-spareparts-approveitems/editspopup-approveitems/editspopup-approveitems.component';
import { EditspopupReqitemComponent } from './requests/stock-transfer-order-spareparts-reqitem/editspopup-reqitem/editspopup-reqitem.component';






export const routes = [
  { path:'', redirectTo:'requests', pathMatch:'full'},   
  { path: 'requests', component:RequestsComponent, data: { breadcrumb: ''} },
  { path: 'technicalhead', component:TechnicalHeadComponent, data: { breadcrumb: ''} },
  { path: 'EditStocktransferRequest', component:EditStocktransferRequestComponent, data: { breadcrumb: ''} },
  { path: 'StockTransferOrderSparepartsReqitem', component:StockTransferOrderSparepartsReqitemComponent, data: { breadcrumb: ''} },
  { path: 'StockTransferOrderSparepartsApproveitems', component:StockTransferOrderSparepartsApproveitemsComponent, data: { breadcrumb: ''} },
  { path: 'Totalstockqtydialog', component:TotalstockqtydialogComponent, data: { breadcrumb: ''} },
  { path: 'Surplusstockdialog', component:SurplusstockdialogComponent, data: { breadcrumb: ''} },
 
];


@NgModule({
  declarations: [RequestsComponent, TechnicalHeadComponent, EditStocktransferRequestComponent, StockTransferOrderSparepartsReqitemComponent, StockTransferOrderSparepartsApproveitemsComponent,  TotalstockqtydialogComponent, SurplusstockdialogComponent, EditspopupApproveitemsComponent, EditspopupReqitemComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[EditStocktransferRequestComponent,TotalstockqtydialogComponent,SurplusstockdialogComponent,EditspopupApproveitemsComponent, EditspopupReqitemComponent]
})
export class StockTransferOrderModule { }
