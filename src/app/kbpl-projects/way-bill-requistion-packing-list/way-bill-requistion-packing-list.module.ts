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



export const routes = [
  { path:'', redirectTo:'ConsignmentWaybill', pathMatch:'full'},
  { path: 'ConsignmentWaybill'    , component:ConsignmentWaybillComponent,      
  },
  { path: 'ItemsInvoicingDetails-waybill'    , component:ItemsInvoicingDetailsComponent, },
  { path: 'TransportDetails-waybill'         , component:TransportDetailsComponent,      },
 
];

@NgModule({
  declarations: [
    
    ItemsInvoicingDetailsComponent, TransportDetailsComponent, ConsignmentWaybillComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[]

})export class WayBillRequistionPackingListModule { }
