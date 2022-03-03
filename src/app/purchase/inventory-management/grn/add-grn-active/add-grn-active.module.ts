import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewgrnComponent } from './overview/overview-grn.component';
import { InvoicingActivegrnComponent } from './invoicing-active-grn/invoicing-active-grn.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddItemInvoicegrnComponent } from './invoicing-active-grn/add-item-invoice-grn/add-item-invoice-grn.component';
import { ItemsActivegrnComponent } from './items-active-grn/items-active-grn.component';
import { TransportActivegrnComponent } from './transport-active-grn/transport-active-grn.component';
import { QalogGrnComponent } from './qalog-grn/qalog-grn.component';
import { AddQuantityUpdatePopupComponent } from './qalog-grn/add-quantity-update-popup/add-quantity-update-popup.component';
import { CertificatesGrnComponent } from './certificates-grn/certificates-grn.component';
import { AddCertificatesFormComponent } from './certificates-grn/add-certificates-form/add-certificates-form.component';
import { AddgrnitemshipqntyComponent } from './items-active-grn/addgrnitemshipqnty/addgrnitemshipqnty.component';
import { AssetsGrnComponent } from './assets-grn/assets-grn.component';
import { AddAssetsGrnComponent } from './assets-grn/add-assets-grn/add-assets-grn.component';


export const routes = [
  { path:'', redirectTo:'overview-grn', pathMatch:'full',data: { breadcrumb: 'Store Incharge'} },
  { path: 'overview-grn', component:OverviewgrnComponent, data: { breadcrumb: 'Store Incharge'} },
  { path: 'items-grn', component:ItemsActivegrnComponent, data: { breadcrumb: 'Store Incharge'} },
  { path: 'invoicing-grn', component: InvoicingActivegrnComponent, data: { breadcrumb: 'Store Incharge'} },
  { path: 'transport-grn', component:TransportActivegrnComponent, data: { breadcrumb: 'Store Incharge'} },
  { path: 'qa-log', component:QalogGrnComponent, data: { breadcrumb: 'Store Incharge'} },
  { path: 'certificates-grn', component:CertificatesGrnComponent, data: { breadcrumb: 'Store Incharge'}},
  { path: 'assets-grn', component:AssetsGrnComponent, data: { breadcrumb: 'Store Incharge'}}
];

@NgModule({
  declarations: [AddQuantityUpdatePopupComponent,QalogGrnComponent,OverviewgrnComponent, ItemsActivegrnComponent, InvoicingActivegrnComponent, TransportActivegrnComponent, AddItemInvoicegrnComponent, CertificatesGrnComponent, AddCertificatesFormComponent, AddgrnitemshipqntyComponent, AssetsGrnComponent, AddAssetsGrnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    DragulaModule,
    SharedModule,
    ConfirmationPopoverModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[AddgrnitemshipqntyComponent,AddItemInvoicegrnComponent,AddQuantityUpdatePopupComponent,AddCertificatesFormComponent,AddAssetsGrnComponent]
})
export class AddgrnActiveModule { }
