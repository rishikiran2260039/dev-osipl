import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ScheduledComponent } from './scheduled/scheduled.component';
import { UnscheduledComponent } from './unscheduled/unscheduled.component';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', redirectTo: 'unscheduled', pathMatch: 'full' },
  { path: 'scheduled', component: ScheduledComponent, data: { breadcrumb: 'Scheduling Grid View' } },
  { path: 'unscheduled', component: UnscheduledComponent, data: { breadcrumb: 'Scheduling Grid View' } },
]

@NgModule({
  declarations: [ScheduledComponent, UnscheduledComponent],
  imports: [
    ChartModule, SharedModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class SchedulingGridViewModule { }
