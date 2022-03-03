import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { SchedulingGridViewComponent } from './scheduling-grid-view/scheduling-grid-view.component';
import { SchedulingBoardViewComponent } from './scheduling-board-view/scheduling-board-view.component';
import { SchedulingSummaryViewComponent } from './scheduling-summary-view/scheduling-summary-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { DragDropModule } from 'primeng/primeng';


export const routes = [
  { path: '', redirectTo: 'scheduling-grid-view', pathMatch: 'full' },
  { path: 'scheduling-grid-view', component: SchedulingGridViewComponent, loadChildren: './scheduling-grid-view/scheduling-grid-view.module#SchedulingGridViewModule', data: { breadcrumb: 'Scheduling Grid View' } },
  { path: 'scheduling-board-view', component: SchedulingBoardViewComponent, data: { breadcrumb: 'Scheduling Board View' } },
  { path: 'scheduling-summary-view', redirectTo: 'scheduling-summary-view/1/2', pathMatch: 'full', data: { breadcrumb: 'Scheduling Grid View' } },
  { path: 'scheduling-summary-view/:view/:week', component: SchedulingSummaryViewComponent, data: { breadcrumb: 'Scheduling Grid View' } },
]
@NgModule({
  declarations: [SchedulingGridViewComponent, SchedulingBoardViewComponent, SchedulingSummaryViewComponent],
  imports: [
    ChartModule,DragDropModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class SchedulingScreenModule { }
