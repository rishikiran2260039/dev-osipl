import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { RadarComponent } from './radar/radar.component';


export const routes = [
  { path: '', redirectTo: 'radar', pathMatch: 'full' }, 
  { path: 'radar', component: RadarComponent, data: { breadcrumb: 'Dashboard' }}, 
];

@NgModule({
  declarations: [RadarComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AlertService],
})
export class AnalyticsModule { }
