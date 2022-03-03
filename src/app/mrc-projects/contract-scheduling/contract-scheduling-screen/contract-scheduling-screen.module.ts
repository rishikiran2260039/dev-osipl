import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardViewComponent } from './board-view/board-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

export const routes = [
  { path: '', redirectTo: 'scheduling-grid-view', pathMatch: 'full' },
  { path: 'scheduling-grid-view', component: GridViewComponent, loadChildren: './grid-view/grid-view.module#GridViewModule', data: { breadcrumb: 'Scheduling Grid View' } },
  { path: 'scheduling-board-view', component: BoardViewComponent, data: { breadcrumb: 'Scheduling Grid View' } },
  { path: 'scheduling-summary-view', redirectTo: 'scheduling-summary-view/1/2', pathMatch: 'full' , data: { breadcrumb: 'Scheduling Grid View' }},
  { path: 'scheduling-summary-view/:view/:week', component: SummaryViewComponent, data: { breadcrumb: '' } },
]

@NgModule({
  declarations: [BoardViewComponent, GridViewComponent, SummaryViewComponent],
  imports: [
    ChartModule,DragDropModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class ContractSchedulingScreenModule { }
