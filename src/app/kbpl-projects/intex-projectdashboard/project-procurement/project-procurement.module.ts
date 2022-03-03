import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectIndentsComponent } from './project-indents/project-indents.component';
import { ProjectPoComponent } from './project-po/project-po.component';
import { ProjectConsignmentsComponent } from './project-consignments/project-consignments.component';
import { ProjectGrnComponent } from './project-grn/project-grn.component';
import { ProjectMaterialissueComponent } from './project-materialissue/project-materialissue.component';
import { PoPendingComponent } from './project-po/po-pending/po-pending.component';
import { PoPublishedComponent } from './project-po/po-published/po-published.component';
import { PoArchivedComponent } from './project-po/po-archived/po-archived.component';
import { ActiveComponent } from './project-consignments/active/active.component';
import { ArchivedComponent } from './project-consignments/archived/archived.component';
import { MaterialActiveComponent } from './project-materialissue/material-active/material-active.component';
import { MaterialArchivesComponent } from './project-materialissue/material-archives/material-archives.component';
import { AddRequisitionDialogComponent } from 'src/app/purchase/requisition/add-requisition-dialog/add-requisition-dialog.component';
import { AddIndentsComponent } from './project-indents/add-indents/add-indents.component';
import { AddConsignmentsComponent } from './project-consignments/add-consignments/add-consignments.component';
import { TransportComponent } from './project-consignments/add-consignments/transport/transport.component';
import { OvertimeComponent } from './project-consignments/add-consignments/overtime/overtime.component';
import { ItemsComponent } from './project-consignments/add-consignments/items/items.component';
import { InvoicingComponent } from './project-consignments/add-consignments/invoicing/invoicing.component';
import { ViewInvoicingComponent } from './project-consignments/con-view/view-invoicing/view-invoicing.component';
import { ViewItemsComponent } from './project-consignments/con-view/view-items/view-items.component';
import { ViewOvertimeComponent } from './project-consignments/con-view/view-overtime/view-overtime.component';
import { ViewTransportComponent } from './project-consignments/con-view/view-transport/view-transport.component';

export const routes = [
  { path: '', redirectTo: 'indents', pathMatch: 'full' },
  { path: 'indents', component: ProjectIndentsComponent, data: { breadcrumb: '' } },
  { path: 'po', component: ProjectPoComponent,loadChildren: './project-po/project-po.module#ProjectPurchaseOrdersModule', data: { breadcrumb: '' } },
  { path: 'consignments', component: ProjectConsignmentsComponent,loadChildren: './project-consignments/project-consignments.module#ProjectConsignmentModule', data: { breadcrumb: '' } },
  { path: 'grn', component: ProjectGrnComponent, data: { breadcrumb: '' } },
  { path: 'consignments/add-consignments', component: AddConsignmentsComponent, data: { breadcrumb: '' } },
  { path: 'consignments/add-consignments/items', component: ItemsComponent, data: { breadcrumb: '' } },
  { path: 'consignments/add-consignments/overtime', component: OvertimeComponent, data: { breadcrumb: '' } },
  { path: 'consignments/add-consignments/transport', component: TransportComponent, data: { breadcrumb: '' } },
  { path: 'consignments/add-consignments/invoicing', component: InvoicingComponent, data: { breadcrumb: '' } },
  { path: 'consignments/add-consignments', component: AddConsignmentsComponent, data: { breadcrumb: '' } },
  { path: 'consignments/view-items', component: ViewItemsComponent, data: { breadcrumb: '' } },
  { path: 'consignments/view-overtime', component: ViewOvertimeComponent, data: { breadcrumb: '' } },
  { path: 'consignments/view-transport', component: ViewTransportComponent, data: { breadcrumb: '' } },
  { path: 'consignments/view-invoicing', component: ViewInvoicingComponent, data: { breadcrumb: '' } },
  
  { path: 'materialissues', component: ProjectMaterialissueComponent,loadChildren: './project-materialissue/project-materialissue.module#ProjectMaterialIssueModule', data: { breadcrumb: '' } },
]
@NgModule({
  declarations: [ProjectIndentsComponent, TransportComponent,OvertimeComponent,ItemsComponent,InvoicingComponent,ProjectPoComponent,AddConsignmentsComponent,
     ProjectConsignmentsComponent, ProjectGrnComponent, ProjectMaterialissueComponent, ViewInvoicingComponent,
      ViewItemsComponent, ViewOvertimeComponent, ViewTransportComponent, AddIndentsComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents:[AddIndentsComponent]
})
export class ProjectProcurementModule { }
