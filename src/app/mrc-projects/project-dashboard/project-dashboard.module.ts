import { AnalyticsComponent } from './../analytics/analytics.component';
import { ProjectSiteComponent } from './../project-site/project-site.component';
import { ProjectPlanningComponent } from './../project-planning/project-planning.component';
import { DocumentsAndDrawingComponent } from './../documents-and-drawing/documents-and-drawing.component';
import { ClosingComponent } from './../closing/closing.component';
import { BillOfQuantitiesComponent } from './../bill-of-quantities/bill-of-quantities.component';
import { BillingComponent } from './../billing/billing.component';
import { NgModule, Component } from '@angular/core';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RetentionsComponent } from '../retentions/retentions.component';
import { VariationsComponent } from '../variations/variations.component';
import { PayableComponent } from '../payable/payable.component';
import { PayableGridcolumnComponent } from '../payable/payable-gridcolumn/payable-gridcolumn.component';
import { PayableDocComponent } from '../payable/payable-doc/payable-doc.component';
import { LaborComponent } from './labor/labor.component';
import { ContractSummaryComponent } from '../contract-summary/contract-summary/contract-summary.component';
import { ContractSchedulingComponent } from '../contract-scheduling/contract-scheduling.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ModalModule } from 'ngx-bootstrap';
import { DataTableModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

export const routes = [
  { path: '', component: ProjectDashboardComponent, pathMatch: 'full' },
  { path: 'billing', loadChildren: './../billing/billing.module#BillingModule', component: BillingComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'bill-of-quantities', loadChildren: './../bill-of-quantities/bill-of-quantities.module#BillOfQuantitiesModule', component: BillOfQuantitiesComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'closure', loadChildren: './../closing/closing.module#ClosingModule', component: ClosingComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'labor', loadChildren: './labor/labor.module#LaborModule', component: LaborComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'contract-summary', component:ContractSummaryComponent, loadChildren:'../contract-summary/contract-summary.module#ContractSummaryModule',data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'contract-scheduling', component:ContractSchedulingComponent, loadChildren:'../contract-scheduling/contract-scheduling.module#ContractSchedulingModule'}
]

@NgModule({
  declarations: [
    ProjectDashboardComponent,
    BillingComponent,
    BillOfQuantitiesComponent,
    ClosingComponent,
    DocumentsAndDrawingComponent,
    ProjectPlanningComponent,
    ProjectSiteComponent,
    AnalyticsComponent,
    PayableComponent,
    VariationsComponent,
    RetentionsComponent,
    PayableGridcolumnComponent,
    PayableDocComponent,
    LaborComponent, ContractSummaryComponent,
    ContractSchedulingComponent
    
  ],
  imports: [
    CommonModule, ModalModule, SharedModule,ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule, TableModule
  ],
  providers: [AlertService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [
    PayableGridcolumnComponent,
    PayableDocComponent
  ]
})
export class ProjectDashboardModule { }
