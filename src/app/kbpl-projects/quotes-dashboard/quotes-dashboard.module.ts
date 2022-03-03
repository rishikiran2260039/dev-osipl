import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityComponent } from './activity/activity.component';
import { PropertyComponent } from './property/property.component';
import { BudgetComponent } from './budget/budget.component';
import { ManageComponent } from './manage/manage.component';
import { HoursComponent } from './hours/hours.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SummaryComponent } from './summary/summary.component';
import { SowStatusDialogComponent } from './budget/sow-status-dialog/sow-status-dialog.component';
import { SiteStatusDialogComponent } from './budget/site-status-dialog/site-status-dialog.component';
import { UpdateSowComponent } from './manage/update-sow/update-sow.component';
import { NewActionComponent } from './manage/new-action/new-action.component';
import { AddNotesContractorsComponent } from '../projects-gridview/add-notes-contractors/add-notes-contractors.component';
import { QuotesBOQComponent } from './quotes-boq/quotes-boq.component';
import { PUploadBoqComponent } from './p-upload-boq/p-upload-boq.component';
import { PAddCategoryComponent } from './p-add-category/p-add-category.component';
import { QuotesUpdatesComponent } from './quotes-updates/quotes-updates.component';
import { TaskLogComponent } from './task-log/task-log.component';
import { QuotesDocsComponent } from './quotes-docs/quotes-docs.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { QuotesAddPreviousComponent } from './quotes-docs/quotes-add-previous/quotes-add-previous.component';
import { QuotesAddDocumentComponent } from './quotes-docs/quotes-add-document/quotes-add-document.component';
import { AddNotesDialogueComponent } from './quotes-updates/quotes-notes/add-notes-dialogue/add-notes-dialogue.component';
import { QuotesUpdateBudgetComponent } from './budget/quotes-update-budget/quotes-update-budget.component';
import { EditDocumentComponent } from './quotes-docs/edit-document/edit-document.component';
import { AddTaskComponent } from './budget/add-task/add-task.component';
import { QuotesAddSowComponent } from './budget/quotes-add-sow/quotes-add-sow.component';
import { QuotesAddSiteComponent } from './budget/quotes-add-site/quotes-add-site.component';
import { NewDialogComponent } from './quotes-docs/new-dialog/new-dialog.component';
import { ManageSiteComponent } from './budget/manage-site/manage-site.component';
import { EditCardComponent } from './budget/edit-card/edit-card.component';

export const routes = [
  {path:'',redirectTo:'budget',pathMatch:'full'},
  {path:'activity',component:ActivityComponent, loadChildren: './activity/activity.module#ActivityModule', data: { breadcrumb: 'Activity' } },
  {path:'property',component:PropertyComponent, data: { breadcrumb: 'Property' } },
  {path:'budget',component:BudgetComponent, data: { breadcrumb: 'Budget' } },
  {path:'manage',component:ManageComponent, data: { breadcrumb: 'Manage' }},
  {path:'hours',component:HoursComponent, data: { breadcrumb: 'Hours' }},
  {path:'expenses',component:ExpensesComponent, data: { breadcrumb: 'Expenses' }},
  {path:'invoices',component:InvoicesComponent, loadChildren: './invoices/kbpl-invoice.module#KbplInvoiceModule', data: { breadcrumb: 'Invoices' }},
  {path:'summary',component:SummaryComponent, data: { breadcrumb: 'Summary' }}, 
  {path:'boq',component:QuotesBOQComponent, data: { breadcrumb: '' }}, 
  {path:'quotes-updates', component: QuotesUpdatesComponent, loadChildren: './quotes-updates/quotes-updates/quotes-updates.module#QuotesUpdatesModule', data: { breadcrumb: 'Rentention' } },
  {path:'task-log', component:TaskLogComponent},
  {path:'docs', component:QuotesDocsComponent}
]
@NgModule({
  declarations: [ActivityComponent, PropertyComponent, BudgetComponent, ManageComponent,
     HoursComponent, ExpensesComponent, InvoicesComponent, SummaryComponent,
      SowStatusDialogComponent, SiteStatusDialogComponent, UpdateSowComponent,
       NewActionComponent,AddNotesContractorsComponent, QuotesBOQComponent, PUploadBoqComponent,
        PAddCategoryComponent, QuotesUpdatesComponent, TaskLogComponent, QuotesDocsComponent,
        QuotesAddPreviousComponent,
        QuotesAddDocumentComponent,
        AddNotesDialogueComponent,
        QuotesUpdateBudgetComponent,
        EditDocumentComponent, AddTaskComponent,
        QuotesAddSowComponent, QuotesAddSiteComponent, 
        NewDialogComponent, ManageSiteComponent,EditCardComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[SowStatusDialogComponent,
    SiteStatusDialogComponent,UpdateSowComponent,
    NewActionComponent, AddNotesContractorsComponent,
    AddNotesContractorsComponent,PUploadBoqComponent,
    PAddCategoryComponent,QuotesAddPreviousComponent,AddTaskComponent,
    QuotesAddDocumentComponent, AddNotesDialogueComponent,
    QuotesUpdateBudgetComponent, EditDocumentComponent,
     QuotesAddSiteComponent, QuotesAddSowComponent,NewDialogComponent,
     ManageSiteComponent,EditCardComponent]
})
export class QuotesDashboardModule { }
