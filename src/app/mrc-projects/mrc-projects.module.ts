import { NgModule } from '@angular/core';
import { MrcProjectsComponent } from './mrc-projects.component';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { MrcAddProjectDialogComponent } from './project-management/mrc-add-project-dialog/mrc-add-project-dialog.component';
import { MrcGridcolumsComponent } from './project-management/mrc-gridcolums/mrc-gridcolums.component';
import { ProjectStatusDialogComponent } from './project-management/project-status-dialog/project-status-dialog.component';
import { AddProjectsNotesComponent } from './project-management/add-projects-notes/add-projects-notes.component';
import { AddContractRetentionComponent } from './retentions/add-contract-retention/add-contract-retention.component';
import { ContractRetentionDocComponent } from './retentions/contract-retention-doc/contract-retention-doc.component';
import { ContractRetentionGridcolumnComponent } from './retentions/contract-retention-gridcolumn/contract-retention-gridcolumn.component';
import { ContractRetentionLedgerComponent } from './retentions/contract-retention-ledger/contract-retention-ledger.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddActivityComponent } from './contract-summary/add-activity/add-activity.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const routes = [
  { path: '', redirectTo:'project-management', pathMatch: 'full'},
  { path: "project-management",component:ProjectManagementComponent, data: { breadcrumb: 'Contracts' }},  
  { path: 'project-dashboard', loadChildren: './project-dashboard/project-dashboard.module#ProjectDashboardModule', data: { breadcrumb: '' } }, 
];

@NgModule({
  declarations: [MrcProjectsComponent,ProjectManagementComponent, MrcAddProjectDialogComponent, MrcGridcolumsComponent, ProjectStatusDialogComponent, AddProjectsNotesComponent,
    AddContractRetentionComponent, AddActivityComponent,ContractRetentionDocComponent, ContractRetentionGridcolumnComponent, ContractRetentionLedgerComponent, AddPaymentComponent,],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    AlertService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents:[MrcAddProjectDialogComponent,MrcGridcolumsComponent,ProjectStatusDialogComponent,AddProjectsNotesComponent,
    AddContractRetentionComponent, ContractRetentionDocComponent,AddActivityComponent, ContractRetentionGridcolumnComponent, ContractRetentionLedgerComponent, AddPaymentComponent, ]
})
export class MrcProjectsModule { }
