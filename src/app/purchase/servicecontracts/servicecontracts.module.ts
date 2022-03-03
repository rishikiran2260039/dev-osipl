import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequistionServiceContractsComponent } from './requistion-service-contracts/requistion-service-contracts.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';

import { AddRequisitionDialogServicecontractsComponent } from './requistion-service-contracts/add-requisition-dialog-servicecontracts/add-requisition-dialog-servicecontracts.component';
import { RfqServicecontractsComponent } from './rfq-servicecontracts/rfq-servicecontracts.component';
import { AddrfqPopupServicecontractsComponent } from './rfq-servicecontracts/addrfq-popup-servicecontracts/addrfq-popup-servicecontracts.component';
import { QuotationsServicecontractsComponent } from './quotations-servicecontracts/quotations-servicecontracts.component';
import { EditquotationspopupServicecontractsComponent } from './quotations-servicecontracts/editquotationspopup-servicecontracts/editquotationspopup-servicecontracts.component';
import { ServiceChallansComponent } from './service-challans/service-challans.component';
import { AddServiceChallanComponent } from './service-challans/add-service-challan/add-service-challan.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { WorkordernoDialogComponent } from './work-orders/workorderno-dialog/workorderno-dialog.component';
import { AddworkordersDialogComponent } from './work-orders/addworkorders-dialog/addworkorders-dialog.component';
import { WorkinfoDialogComponent } from './work-orders/workinfo-dialog/workinfo-dialog.component';
import { ServiceLaborDetailsPopupComponent } from './work-orders/workorderno-dialog/service-labor-details-popup/service-labor-details-popup.component';
import { PartsAndMaterialsPopupComponent } from './work-orders/workorderno-dialog/parts-and-materials-popup/parts-and-materials-popup.component';
import { NotesPopupComponent } from './service-challans/notes-popup/notes-popup.component';
import { ChallanPopupComponent } from './service-challans/challan-popup/challan-popup.component';
import { ArnComponent } from './arn/arn.component';
import { WorkordersTermsComponent } from './work-orders/workorders-terms/workorders-terms.component';
import { RFQItemServiceContractComponent } from './rfq-servicecontracts/rfqitem-service-contract/rfqitem-service-contract.component';
import { AddInfoServicepopupComponentComponent } from './rfq-servicecontracts/rfqitem-service-contract/add-info-servicepopup-component/add-info-servicepopup-component.component';
import { QuotesServiceRFQComponent } from './rfq-servicecontracts/quotes-service-rfq/quotes-service-rfq.component';
import { ArnpopupComponent } from './arn/arnpopup/arnpopup.component';
import { RfqgridservicecontractsComponent } from './rfq-servicecontracts/rfqitem-service-contract/rfqgridservicecontracts/rfqgridservicecontracts.component';
import { AddarnservicecontractsComponent } from './addarnservicecontracts/addarnservicecontracts.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { AddinvoicepopupComponent } from './addarnservicecontracts/addinvoicepopup/addinvoicepopup.component';
import { UploaditemsformComponent } from './requistion-service-contracts/items-and-quantities-servicecontracts/uploaditemsform/uploaditemsform.component';
import { RfquploadformComponent } from './rfq-servicecontracts/rfqitem-service-contract/rfquploadform/rfquploadform.component';
import { PartuploadformComponent } from './service-challans/parts-service-challans-pop-up/partuploadform/partuploadform.component';





 



export const routes = [
  { path:'', redirectTo:'indent', pathMatch:'full'},
  { path: 'indent', component:RequistionServiceContractsComponent , data: { breadcrumb: 'Indent'} },
  { path: 'RfqServicecontracts', component:RfqServicecontractsComponent , data: { breadcrumb: 'RFQ'} },
  { path: 'QuotationsServicecontracts', component:QuotationsServicecontractsComponent, data: { breadcrumb: 'Quotations'} },
  { path: 'service-challans', component:ServiceChallansComponent, data: { breadcrumb: 'Service Challans'}},
  { path: 'arn', component:ArnComponent, data: { breadcrumb: 'ARN'}},
  { path: 'work-orders',component: WorkOrdersComponent, loadChildren:"./work-orders/work-orders.module#WorkOrdersModule"} 
   ,
   { path: 'work-orders/work-orders-terms', component:WorkordersTermsComponent},
  { 
    path :'workordernumber',component:WorkordernoDialogComponent, data: { breadcrumb: 'Work Orders' }},

  { path : 'RfqServicecontracts/rfq-item-details', component:RFQItemServiceContractComponent},

  { path : 'RfqServicecontracts/rfqServiceQuotes', component:QuotesServiceRFQComponent},

  { path: 'arn/add-ARN', component: AddarnservicecontractsComponent ,loadChildren:"./addarnservicecontracts/addarnservicecontracts.module#AddarnservicecontractsModule"},
  
  
];

@NgModule({
  declarations: [RequistionServiceContractsComponent,WorkordersTermsComponent,AddRequisitionDialogServicecontractsComponent, RfqServicecontractsComponent, AddrfqPopupServicecontractsComponent,
     QuotationsServicecontractsComponent, EditquotationspopupServicecontractsComponent,ServiceChallansComponent,AddServiceChallanComponent,WorkOrdersComponent,WorkordernoDialogComponent,AddworkordersDialogComponent, WorkinfoDialogComponent,
     ServiceLaborDetailsPopupComponent, PartsAndMaterialsPopupComponent, 
      NotesPopupComponent,ChallanPopupComponent, AddrfqPopupServicecontractsComponent, ArnComponent, RFQItemServiceContractComponent, AddInfoServicepopupComponentComponent, QuotesServiceRFQComponent, ArnpopupComponent, RfqgridservicecontractsComponent, AddarnservicecontractsComponent, AddinvoicepopupComponent , UploaditemsformComponent, RfquploadformComponent, PartuploadformComponent
     ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule, 
  ],
  entryComponents:[AddRequisitionDialogServicecontractsComponent,AddrfqPopupServicecontractsComponent,EditquotationspopupServicecontractsComponent,
    AddServiceChallanComponent,AddworkordersDialogComponent, WorkinfoDialogComponent,
    ServiceLaborDetailsPopupComponent, PartsAndMaterialsPopupComponent, AddInfoServicepopupComponentComponent,
    NotesPopupComponent,ChallanPopupComponent,ArnpopupComponent,RfqgridservicecontractsComponent,UploadDocComponent,AddinvoicepopupComponent,UploaditemsformComponent,RfquploadformComponent,PartuploadformComponent]
})
export class ServicecontractsModule { }





