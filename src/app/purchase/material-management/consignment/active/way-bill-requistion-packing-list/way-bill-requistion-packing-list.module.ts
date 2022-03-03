import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';

import { ItemsInvoicingDetailsComponent } from './items-invoicing-details/items-invoicing-details.component';
import { TransportDetailsComponent } from './transport-details/transport-details.component';
import { ConsignmentWaybillComponent } from './consignment-waybill/consignment-waybill.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { ItemsComponent } from './items/items.component';
import { OverviewComponent } from './overview/overview.component';
import { TransportComponent } from './transport/transport.component';



export const routes = [
  { path:'', redirectTo:'ConsignmentWaybill', pathMatch:'full'},
  { path: 'ConsignmentWaybill'    , component:ConsignmentWaybillComponent},
  { path: 'items' , component:ItemsComponent},
  { path: 'invoicing', component:InvoicingComponent },
  { path: 'overview', component:OverviewComponent },
  { path: 'transport', component:TransportComponent },
  { path: 'ItemsInvoicingDetails-waybill', component:ItemsInvoicingDetailsComponent, },
  { path: 'TransportDetails-waybill', component:TransportDetailsComponent},
 
];

@NgModule({
  declarations: [
    
    ItemsInvoicingDetailsComponent, TransportDetailsComponent, ConsignmentWaybillComponent, InvoicingComponent, ItemsComponent, OverviewComponent, TransportComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[]

})export class WayBillRequistionPackingListModule { }
