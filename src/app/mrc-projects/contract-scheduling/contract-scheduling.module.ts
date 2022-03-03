import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractSchedulingScreenComponent } from './contract-scheduling-screen/contract-scheduling-screen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', redirectTo: 'scheduling-screen', pathMatch: 'full' },
  { path: 'scheduling-screen', component:  ContractSchedulingScreenComponent, loadChildren: './contract-scheduling-screen/contract-scheduling-screen.module#ContractSchedulingScreenModule', data: { breadcrumb: '' } }
]

@NgModule({
  declarations: [ContractSchedulingScreenComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class ContractSchedulingModule { }
