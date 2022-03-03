import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { SchedulingScreenComponent } from './scheduling-screen/scheduling-screen.component';


export const routes = [
  { path: '', redirectTo: 'scheduling-screen', pathMatch: 'full' },
  { path: 'scheduling-screen', component: SchedulingScreenComponent, loadChildren: './scheduling-screen/scheduling-screen.module#SchedulingScreenModule', data: { breadcrumb: 'Scheduling Grid View' } }
]
@NgModule({
  declarations: [SchedulingScreenComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
})
export class ProjectSchedulingModule { }
