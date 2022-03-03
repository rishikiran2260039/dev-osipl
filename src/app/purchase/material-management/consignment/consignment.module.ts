import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { ArchivedComponent } from './archived/archived.component';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApprovalPopComponent } from './active/approval-pop/approval-pop.component';
import { PurchaseOrderPopupComponent } from './active/purchase-order-popup/purchase-order-popup.component';
import { ItemsPopupActiveComponent } from './active/items-popup-active/items-popup-active.component';
import { GrnpopupComponent } from './active/grnpopup/grnpopup.component';
import { InvoicepopupComponent } from './active/invoicepopup/invoicepopup.component';




export const routes = [
  { path:'', redirectTo:'active', pathMatch:'full'},
  { path: 'active', component:ActiveComponent},
  { path: 'archived', component:ArchivedComponent},
];

@NgModule({
  declarations: [ActiveComponent, ArchivedComponent, 
    ApprovalPopComponent, 
    PurchaseOrderPopupComponent, 
    ItemsPopupActiveComponent, GrnpopupComponent, InvoicepopupComponent,     ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule, 
  ],
  entryComponents:[ApprovalPopComponent, PurchaseOrderPopupComponent , 
    ItemsPopupActiveComponent,GrnpopupComponent,InvoicepopupComponent]
})
export class ConsignmentModule { }
