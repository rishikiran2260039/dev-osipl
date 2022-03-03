import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduledContractComponent } from './scheduled-contract/scheduled-contract.component';
import { UnscheduledContractComponent } from './unscheduled-contract/unscheduled-contract.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', redirectTo: 'unscheduled', pathMatch: 'full' },
  { path: 'scheduled', component: ScheduledContractComponent, data: { breadcrumb: 'Scheduling Grid View' } },
  { path: 'unscheduled', component: UnscheduledContractComponent, data: { breadcrumb: 'Scheduling Grid View' } },
]

@NgModule({
  declarations: [ScheduledContractComponent, UnscheduledContractComponent],
  imports: [
    ChartModule, SharedModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class GridViewModule { }
