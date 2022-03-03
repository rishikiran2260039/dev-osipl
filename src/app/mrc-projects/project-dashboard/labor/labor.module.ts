import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';


import { PlanningComponent } from './planning/planning.component';
import { MonthlyRecordDialogComponent } from '../labor/monthly-record-dialog/monthly-record-dialog.component';
import { AttendanceComponent } from '../attendance/attendance.component';
import { AddCategoryAttdComponent } from '../attendance/add-category-attd/add-category-attd.component';
import { AddItemBoqAttdComponent } from '../attendance/add-item-boq-attd/add-item-boq-attd.component';
import { UploadBoqAttdComponent } from '../attendance/upload-boq-attd/upload-boq-attd.component';

export const routes = [
  { path: '', redirectTo: 'planning', pathMatch: 'full' },
  { path: 'planning', component: PlanningComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'attendance', component: AttendanceComponent, data: { breadcrumb: 'Contract Dashboard' } },
]

@NgModule({
  declarations: [
    PlanningComponent,
    MonthlyRecordDialogComponent,
    AttendanceComponent,
    AddCategoryAttdComponent,
    AddItemBoqAttdComponent,
    UploadBoqAttdComponent
  ],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule, MatPaginatorModule
  ],
  entryComponents: [
    MonthlyRecordDialogComponent,
    AddCategoryAttdComponent,
    AddItemBoqAttdComponent,
    UploadBoqAttdComponent
  ]
})
export class LaborModule { }
