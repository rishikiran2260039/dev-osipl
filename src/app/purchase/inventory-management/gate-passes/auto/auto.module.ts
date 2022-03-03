import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsignmentsComponent } from './consignments/consignments.component';
import { SrnComponent } from './srn/srn.component';
import { MaterialIssuesComponent } from './material-issues/material-issues.component';
import { ManualLoansComponent } from './manual-loans/manual-loans.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';

import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceDetailsdialogueComponent } from './consignments/invoice-detailsdialogue/invoice-detailsdialogue.component';
import { TransporterDetailsdialogueComponent } from './consignments/transporter-detailsdialogue/transporter-detailsdialogue.component';
import { ActivityLogdialogueComponent } from './consignments/activity-logdialogue/activity-logdialogue.component';
import { ChangesmadeinconsignmentsComponent } from './consignments/changesmadeinconsignments/changesmadeinconsignments.component';


export const routes = [
  { path:'', redirectTo:'consignments', pathMatch:'full'},   
  { path: 'consignments', component:ConsignmentsComponent, data: { breadcrumb: ''} },
  { path: 'manualloans', component:ManualLoansComponent, data: { breadcrumb: ''} },
  { path: 'srn', component:SrnComponent, data: { breadcrumb: ''} },
  { path: 'materialissues', component:MaterialIssuesComponent, data: { breadcrumb: ''} },
  { path: 'invoicedetails', component:InvoiceDetailsdialogueComponent, data: { breadcrumb: ''} },
  { path: 'transporter', component:TransporterDetailsdialogueComponent, data: { breadcrumb: ''} },
  { path: 'activitylog', component:ActivityLogdialogueComponent, data: { breadcrumb: ''} },
  { path: 'changesmadeinconsignment', component:ChangesmadeinconsignmentsComponent, data: { breadcrumb: ''} },
 
];

@NgModule({
  declarations: [ConsignmentsComponent, SrnComponent, MaterialIssuesComponent, ManualLoansComponent,InvoiceDetailsdialogueComponent,TransporterDetailsdialogueComponent,ActivityLogdialogueComponent, ChangesmadeinconsignmentsComponent,],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[InvoiceDetailsdialogueComponent,TransporterDetailsdialogueComponent, ActivityLogdialogueComponent, ChangesmadeinconsignmentsComponent ]
})
export class AutoModule { }
