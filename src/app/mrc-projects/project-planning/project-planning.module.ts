import { AllocationComponent } from './allocation/allocation.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPlanningComponent } from './project-planning.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { ProgressComponent } from './progress/progress.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddDrawingComponent } from './drawings/add-drawing/add-drawing.component';
import { AddVersionComponent } from './drawings/add-version/add-version.component';
import { PreviousVersionComponent } from './drawings/previous-version/previous-version.component';
import { AddAllocationComponent } from './allocation/add-allocation/add-allocation.component';
import { AddRequisitionComponent } from './procurement/add-requisition/add-requisition.component';
import { ItemsdialogComponent } from './procurement/itemsdialog/itemsdialog.component';
import { AddActivityDialogComponent } from './activities/add-activity-dialog/add-activity-dialog.component';
import { AddLineItemDialogComponent } from './activities/add-line-item-dialog/add-line-item-dialog.component';
import { UpdateDataDialogComponent } from './activities/update-data-dialog/update-data-dialog.component';
import { NoActivityDialogComponent } from './progress/no-activity-dialog/no-activity-dialog.component';
import { AddProgressComponent } from './progress/add-progress/add-progress.component';
import { HoursComponent } from './hours/hours.component';
import { ExpensesComponent } from './expenses/expenses.component';

export const routes = [
  { path: '', redirectTo: "allocation", pathMatch: 'full' },
  { path: 'activities', component: ActivitiesComponent, data: { breadcrumb: '' } },
  { path: 'allocation', component: AllocationComponent, data: { breadcrumb: '' } },
  { path: 'drawing', component: DrawingsComponent, data: { breadcrumb: '' } },
  { path: 'procurement', component: ProcurementComponent, data: { breadcrumb: '' } },
  { path: 'progress', component: ProgressComponent, data: { breadcrumb: '' } },
  { path: 'resources', component: ResourcesComponent, data: { breadcrumb: '' } },
  { path: 'hours', component: HoursComponent, data: { breadcrumb: '' } },
  { path: 'expenses', component: ExpensesComponent, data: { breadcrumb: '' } },

];

@NgModule({
  declarations: [ActivitiesComponent, ResourcesComponent, ProcurementComponent, AllocationComponent, DrawingsComponent, ProgressComponent, AddDrawingComponent, AddVersionComponent, PreviousVersionComponent, AddAllocationComponent, AddRequisitionComponent, ItemsdialogComponent, AddActivityDialogComponent, AddLineItemDialogComponent, UpdateDataDialogComponent, NoActivityDialogComponent, AddProgressComponent, HoursComponent, ExpensesComponent],
  imports: [ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [AddDrawingComponent, PreviousVersionComponent, AddVersionComponent, AddAllocationComponent, AddRequisitionComponent, ItemsdialogComponent, AddActivityDialogComponent, AddLineItemDialogComponent, UpdateDataDialogComponent, NoActivityDialogComponent, AddProgressComponent]
})
export class ProjectPlanningModule { }
