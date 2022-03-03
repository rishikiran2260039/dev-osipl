import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MasterComponent } from './master/master.component';
import { DeviationItemsComponent } from './deviation-items/deviation-items.component';
import { ExtraItemsComponent } from './extra-items/extra-items.component';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddExtraitemComponent } from './extra-items/add-extraitem/add-extraitem.component';
import { AddDeviationComponent } from './deviation-items/add-deviation/add-deviation.component';
import { UploadBoqComponent } from './master/upload-boq/upload-boq.component';
import { AddCategoryComponent } from './master/add-category/add-category.component';
import { UpBoqComponent } from './deviation-items/up-boq/up-boq.component';
import { AddItemBOQComponent } from './master/add-item-boq/add-item-boq.component';
import { ContractwbscComponent } from '../contractwbs/contractwbsc/contractwbsc.component';
import { RequisitionComponent } from '../requisition/requisition.component';
import { ContractIssuesComponent } from '../contract-issues/contract-issues.component';
import { HoursComponent } from '../hours/hours.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { AddREquisition1Component } from '../add-requisition/add-requisition.component';
import { AddIssueComponent } from '../contract-issues/add-issue/add-issue.component';
import { IssueDialogComponent } from '../contract-issues/issue-dialog/issue-dialog.component';
import { AddTaskComponent } from '../contractwbs/add-task/add-task.component';
import { EditTaskComponent } from '../contractwbs/edit-task/edit-task.component';
import { EditCardComponent } from '../contractwbs/edit-card/edit-card.component';
import { ContractAddSiteComponent } from '../contractwbs/contract-add-site/contract-add-site.component';
import { ContractAddSowComponent } from '../contractwbs/contract-add-sow/contract-add-sow.component';
import { ContractManageSiteComponent } from '../contractwbs/contract-manage-site/contract-manage-site.component';
import { EditRequisitionComponent } from '../requisition/edit-requisition/edit-requisition.component';
import { EditwbsComponent } from '../contractwbs/editwbs/editwbs.component';
import { EditIssueComponent } from '../contract-issues/edit-issue/edit-issue.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const routes = [
  { path: '', redirectTo:"master", pathMatch: 'full'},
  { path: 'deviation', component:DeviationItemsComponent, data: { breadcrumb: '' } },
  { path: 'extra-items', component:ExtraItemsComponent, data: { breadcrumb: '' } },
  { path: 'master', component:MasterComponent, data: { breadcrumb: '' } },
  { path: 'add-item', component:AddItemBOQComponent, data: { breadcrumb: '' } },
  { path:'contract-wb', component:ContractwbscComponent, data: { breadcrumb: 'Contract Dashboard'} },
  { path: 'requisitions', component:RequisitionComponent, breadcrumb: '' },
  { path: 'issues', component:ContractIssuesComponent, breadcrumb: ''},
  { path: 'hours', component:HoursComponent, breadcrumb: ''},
  { path: 'expenses', component:ExpensesComponent, breadcrumb: '' },

];

@NgModule({
  declarations: [ MasterComponent, DeviationItemsComponent, ExtraItemsComponent, AddExtraitemComponent, 
    AddDeviationComponent, UploadBoqComponent, AddCategoryComponent, UpBoqComponent, 
    AddItemBOQComponent,ContractwbscComponent,
    RequisitionComponent, AddREquisition1Component, 
    ContractIssuesComponent,AddIssueComponent,
    IssueDialogComponent,HoursComponent,
    ExpensesComponent,AddTaskComponent,
    EditTaskComponent, EditCardComponent,ContractAddSiteComponent,
    ContractAddSowComponent,ContractManageSiteComponent,EditRequisitionComponent,EditwbsComponent,EditIssueComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AlertService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents:[AddDeviationComponent,AddExtraitemComponent,
    UploadBoqComponent, AddCategoryComponent, 
    UpBoqComponent, AddREquisition1Component,
    AddIssueComponent, IssueDialogComponent, AddTaskComponent,
    EditTaskComponent, EditCardComponent,ContractAddSiteComponent,
    ContractAddSowComponent,ContractManageSiteComponent,EditRequisitionComponent,EditwbsComponent,EditIssueComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class BillOfQuantitiesModule { }
