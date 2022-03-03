import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectActivityComponent } from './project-activity/project-activity.component';
import { ProjectBudgetComponent } from './project-budget/project-budget.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { ProjectHoursComponent } from './project-hours/project-hours.component';
import { ProjectExpensesComponent } from './project-expenses/project-expenses.component';
import { ProjectInvoicesComponent } from './project-invoices/project-invoices.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { ProjectAddSowComponent } from './project-budget/project-add-sow/project-add-sow.component';
import { ProjectNewActionComponent } from './project-manage/project-new-action/project-new-action.component';
import { ProjectUpdateSowComponent } from './project-manage/project-update-sow/project-update-sow.component';
import { ProjectContractsComponent } from './project-contracts/project-contracts.component';
import { ProjectVariationsComponent } from './project-variations/project-variations.component';
import { ProjectRetentionComponent } from './project-retention/project-retention.component';
import { ProjectPropertyComponent } from './project-property/project-property.component';
import { ProjectContractGridcolumnComponent } from './project-contracts/project-contract-gridcolumn/project-contract-gridcolumn.component';
import { ProjectRetentionGridcolumnComponent } from './project-retention/project-retention-gridcolumn/project-retention-gridcolumn.component';
import { AddProjectRetentionComponent } from './project-retention/add-project-retention/add-project-retention.component';
import { ProjectRetentionDocComponent } from './project-retention/project-retention-doc/project-retention-doc.component';
import { ProjectRetentionLedgerComponent } from './project-retention/project-retention-ledger/project-retention-ledger.component';
import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';
import { ManageDialogComponent } from './project-manage/manage-dialog/manage-dialog.component';
import { EditTaskComponent } from './project-budget/edit-task/edit-task.component';
import { ProjectBOQComponent } from './project-boq/project-boq.component';
import { ProjectDeviationComponent } from './project-deviation/project-deviation.component';
import { ProjectWBSComponent } from './project-wbs/project-wbs.component';
import { AddContractsComponent } from './project-contracts/add-contracts/add-contracts.component';
import { ProjectRequisitionsComponent } from './project-requisitions/project-requisitions.component';
import { AddRequisitionComponent } from './project-requisitions/add-requisition/add-requisition.component';
import { ProjectIssuesComponent } from './project-issues/project-issues.component';
import { AddIssueComponent } from './project-issues/add-issue/add-issue.component';
import { IssueDialogComponent } from './project-issues/issue-dialog/issue-dialog.component';
import { ManaSiteComponent } from './project-budget/mana-site/mana-site.component';
import { AddItemComponent } from './project-budget/add-item/add-item.component';
import { AddContractComponent } from './project-budget/add-contract/add-contract.component';
import { EditCardComponent } from './project-budget/edit-card/edit-card.component';
import { AddTaskComponent } from './project-budget/add-task/add-task.component';
import { AddTaskWbsComponent } from './project-wbs/add-task-wbs/add-task-wbs.component';
import { EditTask1Component } from './project-wbs/edit-task/edit-task.component';
import { ProjectUpdatesComponent } from './project-updates/project-updates.component';
import { ProjectNotesComponent } from './project-updates/project-notes/project-notes.component';
import { AddImageComponent } from './project-updates/project-photos/add-image/add-image.component';
import { ProjectDocumentComponent } from './project-document/project-document.component';
import { AddPreviousComponent } from './project-document/add-previous/add-previous.component';
import { AddDocumentComponent } from './project-document/add-document/add-document.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DragulaModule } from 'ng2-dragula';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/primeng';
import { EditProjectWBSComponent } from './project-wbs/edit-project-wbs/edit-project-wbs.component';
import { EditContractsComponent } from './project-contracts/edit-contracts/edit-contracts.component';
import { EditProjectBudgetComponent } from './project-budget/edit-project-budget/edit-project-budget.component';
import { EditRequisitionComponent } from './project-requisitions/edit-requisition/edit-requisition.component';
import { EditIssueComponent } from './project-issues/edit-issue/edit-issue.component';
import { EditDocumentComponent } from './project-document/edit-document/edit-document.component';
import { UploadDocumentComponent } from './project-document/upload-document/upload-document.component';
import { ProjectGanttComponent } from './project-gantt/project-gantt.component';
import { DxGanttModule } from 'devextreme-angular';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

export const routes = [
  { path: '', redirectTo: 'project-wbs', pathMatch: 'full' },
  { path: 'project-manage', component: ProjectManageComponent, data: { breadcrumb: 'Manage' } },
  { path: 'project-activity', component: ProjectActivityComponent, loadChildren: './project-activity/project-activity.module#ProjectActivityModule', data: { breadcrumb: 'Activity' } },
  { path: 'project-overview', component: ProjectPropertyComponent, data: { breadcrumb: 'Property' } },
  { path: 'project-budget', component: ProjectBudgetComponent, loadChildren: './project-budget/project-budget.module#ProjectBudgetModule', data: { breadcrumb: 'Budget' } },
  { path: 'project-boq', component: ProjectBOQComponent, data: { breadcrumb: 'Manage' } },
  { path: 'project-deviation', component: ProjectDeviationComponent, data: { breadcrumb: 'Manage' } },
  { path: 'project-wbs', component: ProjectWBSComponent, data: { breadcrumb: 'Manage' } },
  { path: 'project-contracts', component: ProjectContractsComponent, data: { breadcrumb: 'Contracts' } },
  { path: 'project-scheduling', component: ProjectSchedulingComponent, loadChildren: './project-scheduling/project-scheduling.module#ProjectSchedulingModule', data: { breadcrumb: '' } },
  { path: 'project-hours', component: ProjectHoursComponent, data: { breadcrumb: 'Hours' } },
  { path: 'project-expenses', component: ProjectExpensesComponent, data: { breadcrumb: 'Expenses' } },
  { path: 'project-invoices', component: ProjectInvoicesComponent, loadChildren: './project-invoices/project-invoices.module#ProjectInvoicesModule', data: { breadcrumb: 'Invoices' } },
  { path: 'project-requisition', component: ProjectRequisitionsComponent, data: { breadcrumb: 'Rentention' } },
  { path: 'project-issues', component: ProjectIssuesComponent, data: { breadcrumb: 'Rentention' } },
  { path: 'project-summary', component: ProjectSummaryComponent, loadChildren: './project-summary/project-summary.module#ProjectSummaryModule', data: { breadcrumb: 'Summary' } },
  { path: 'project-variations', component: ProjectVariationsComponent, data: { breadcrumb: 'Variations' } },
  { path: 'project-rentention', component: ProjectRetentionComponent, data: { breadcrumb: 'Rentention' } },
  { path: 'project-updates', component: ProjectUpdatesComponent,loadChildren: './project-updates/project-updates.module#ProjectUpdatesModule', data: { breadcrumb: 'Rentention' } },
  { path: 'project-document', component: ProjectDocumentComponent, data: { breadcrumb: 'Rentention' } },
  { path: 'project-gantt', component: ProjectGanttComponent, data: { breadcrumb: 'Rentention' } },

]
@NgModule({
  declarations: [EditTaskComponent, ProjectActivityComponent, ProjectPropertyComponent, ProjectBudgetComponent, 
    ProjectManageComponent, ProjectHoursComponent, ProjectExpensesComponent, ProjectInvoicesComponent, 
    ProjectSummaryComponent, ProjectAddSowComponent, ProjectNewActionComponent, 
    ProjectUpdateSowComponent, ProjectContractsComponent, ProjectVariationsComponent, ProjectRetentionComponent,
     ProjectContractGridcolumnComponent, ProjectRetentionGridcolumnComponent, AddProjectRetentionComponent, 
     ProjectRetentionDocComponent, ProjectRetentionLedgerComponent, ProjectSchedulingComponent, ManageDialogComponent,
      ProjectBOQComponent, ProjectDeviationComponent, ProjectWBSComponent, AddContractsComponent, 
      ProjectRequisitionsComponent, AddRequisitionComponent, ProjectIssuesComponent, AddIssueComponent, 
      IssueDialogComponent, ManaSiteComponent, AddItemComponent,
    AddContractComponent,EditCardComponent,AddTaskComponent, AddTaskWbsComponent,EditIssueComponent,
    EditTask1Component,EditProjectWBSComponent,EditProjectBudgetComponent,EditRequisitionComponent,
    ProjectUpdatesComponent,AddImageComponent,EditContractsComponent, ProjectDocumentComponent,
     AddPreviousComponent, AddDocumentComponent, EditDocumentComponent, 
     UploadDocumentComponent,UploadDocumentComponent, ProjectGanttComponent ],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,DragulaModule.forRoot(),
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule,GanttAllModule
  ],
  providers: [AlertService],
  entryComponents: [
    ProjectContractGridcolumnComponent,
    ProjectAddSowComponent,
    ProjectNewActionComponent,
    ProjectUpdateSowComponent,
    ProjectRetentionGridcolumnComponent,
    AddProjectRetentionComponent,
    ProjectRetentionDocComponent,
    ProjectRetentionLedgerComponent,
    ManageDialogComponent,
    EditTaskComponent,
    AddContractsComponent,
    AddRequisitionComponent,
    AddIssueComponent,
    IssueDialogComponent,
    ManaSiteComponent, AddItemComponent,
    AddContractComponent,
    EditCardComponent,
    AddTaskComponent,
    AddTaskWbsComponent,
    EditTask1Component ,
    AddImageComponent,
    AddPreviousComponent,
    AddDocumentComponent,
    EditProjectWBSComponent,
    EditContractsComponent,
    EditProjectBudgetComponent,
    EditRequisitionComponent,EditIssueComponent, EditDocumentComponent,
    UploadDocumentComponent
  ]
})
export class NewprojectDashboardModule { }
