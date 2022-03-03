import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import { GridColumnsProjectsDialogComponent } from './grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import { KbplProjectsComponent } from './kbpl-projects.component';
import { ContractsDialogComponent } from './contracts-dialog/contracts-dialog.component';
import { ProjectsGridviewComponent } from './projects-gridview/projects-gridview.component';
import { ProjectsKanbanviewComponent } from './projects-kanbanview/projects-kanbanview.component';
import { ShowIssueComponent } from './projects-gridview/show-issue/show-issue.component';
import { ActionScheduleComponent } from './action-schedule/action-schedule.component';
import { NewprojectDashboardComponent } from './newproject-dashboard/newproject-dashboard.component';
import { pAddCategoryComponent } from './newproject-dashboard/project-boq/add-category/add-category.component';
import { pUploadBoqComponent } from './newproject-dashboard/project-boq/upload-boq/upload-boq.component';
import { ScheduleTabsComponent } from './action-schedule/schedule-tabs/schedule-tabs.component';
import { ProjectAddSiteComponent } from './newproject-dashboard/project-budget/project-add-site/project-add-site.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { QuotesDashboardComponent } from './quotes-dashboard/quotes-dashboard.component';
import { IntexProjectdashboardComponent } from './intex-projectdashboard/intex-projectdashboard.component';
import { ProjectsItemsAndQuantitiesComponent } from './newproject-dashboard/projects-items-and-quantities/projects-items-and-quantities.component';
import { ProjectsadddialogComponent } from './newproject-dashboard/projects-items-and-quantities/projectsadddialog/projectsadddialog.component';
import { ProjectsgriddialogComponent } from './newproject-dashboard/projects-items-and-quantities/projectsgriddialog/projectsgriddialog.component';
import { WayBillRequistionPackingListComponent } from './way-bill-requistion-packing-list/way-bill-requistion-packing-list.component';
import { StockReconcilliation2Component } from './stock-reconcilliation2/stock-reconcilliation2.component';
import { GridcolPopupStockreconciliation2Component } from './stock-reconcilliation2/gridcol-popup-stockreconciliation2/gridcol-popup-stockreconciliation2.component';
import { QalogArnComponent } from './qalog-arn/qalog-arn.component';
import { QtyUpdateComponent } from './qalog-arn/qty-update/qty-update.component';
import { MainProjectNotesComponent } from './intex-projectdashboard/project-procurement/project-materialissue/project-notes/main-project-notes/main-project-notes.component';
import { PublishWorkorderComponent } from './publish-workorder/publish-workorder.component';
import { PreviewWorkorderComponent } from './publish-workorder/preview-workorder/preview-workorder.component';
import { ForeclosurePopupComponent } from './foreclosure-popup/foreclosure-popup.component';
import { ServiceChallansComponent } from '../purchase/servicecontracts/service-challans/service-challans.component';
import { ProjectAddPartsComponent } from './intex-projectdashboard/project-servicecontracts/project-servicechallans/service/project-add-parts/project-add-parts.component';
import { ProjectsReportsComponent } from './projects-reports/projects-reports.component';
import { ProjectsHandoversComponent } from './projects-handovers/projects-handovers.component';
import { AddprojectreportsComponent } from './projects-reports/addprojectreports/addprojectreports.component';
import { UploadDocComponent } from '../shared/upload-doc/upload-doc.component';
export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: ProjectsGridviewComponent, data: { breadcrumb: 'Projects' } },
  { path: 'project-handover', component: ProjectsHandoversComponent, data: { breadcrumb: 'Project Handover' } },
  { path: 'project-reports', component: ProjectsReportsComponent, data: { breadcrumb: 'Project Reports' } },
  { path: 'project-reports/daily', component: ProjectsReportsComponent, data: { breadcrumb: 'Project Reports' } },
  { path: 'project-reports/weekly', component: ProjectsReportsComponent, data: { breadcrumb: 'Project Reports' } },
  { path: 'project-reports/monthly', component: ProjectsReportsComponent, data: { breadcrumb: 'Project Reports' } },
  { path: 'kanbanview', component: ProjectsKanbanviewComponent, data: { breadcrumb: 'Projects' } },
  { path: 'Itemsandquantites', component: ProjectsItemsAndQuantitiesComponent, data: { breadcrumb: 'Projects' } },
  { path: 'scheduling', component: ActionScheduleComponent, loadChildren: './action-schedule/action-schedule.module#ActionScheduleModule', data: { breadcrumb: 'Projects' } },
  { path: 'newproject-dashboard', component: NewprojectDashboardComponent, loadChildren: './newproject-dashboard/newproject-dashboard.module#NewprojectDashboardModule' }, 
  { path: 'projectdashboard', component: IntexProjectdashboardComponent, loadChildren: './intex-projectdashboard/intex-projectdashboard.module#IntexprojectDashboardModule', data: { breadcrumb: 'Projects' }}, 
  { path: 'WayBillRequistionPackingList', component: WayBillRequistionPackingListComponent,loadChildren: './way-bill-requistion-packing-list/way-bill-requistion-packing-list.module#WayBillRequistionPackingListModule', data: { breadcrumb: 'Activity' } },
  { path :'Qalogarn' , component:   QalogArnComponent, data: { breadcrumb: ''} },
  { path:'stock-reconcilliationTable', component:StockReconcilliation2Component, data:{breadcrumb:'Projects'}},
  { path:'publish-workorder/preview-workorder', component:PreviewWorkorderComponent, data:{breadcrumb:'Projects'}},
];

@NgModule({
  declarations: [QuotesDashboardComponent,pAddCategoryComponent, pUploadBoqComponent, KbplProjectsComponent, AddProjectDialogComponent, GridColumnsProjectsDialogComponent, ContractsDialogComponent, ProjectsGridviewComponent, ProjectsKanbanviewComponent, ShowIssueComponent, ActionScheduleComponent, 
    ScheduleTabsComponent, NewprojectDashboardComponent,ProjectsItemsAndQuantitiesComponent,ProjectAddSiteComponent,ProjectsadddialogComponent,ProjectsgriddialogComponent, IntexProjectdashboardComponent, WayBillRequistionPackingListComponent,StockReconcilliation2Component,GridcolPopupStockreconciliation2Component, QalogArnComponent, QtyUpdateComponent,MainProjectNotesComponent, PublishWorkorderComponent, PreviewWorkorderComponent, ForeclosurePopupComponent, ProjectsReportsComponent, ProjectsHandoversComponent, AddprojectreportsComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],

  providers: [AlertService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [UploadDocComponent,ProjectAddSiteComponent,AddProjectDialogComponent,AddprojectreportsComponent, GridColumnsProjectsDialogComponent,ProjectsadddialogComponent,ProjectsgriddialogComponent,  ContractsDialogComponent, ShowIssueComponent, pAddCategoryComponent, pUploadBoqComponent,GridcolPopupStockreconciliation2Component,QtyUpdateComponent,MainProjectNotesComponent,ForeclosurePopupComponent]
})
export class KBPLProjectsModule { }
