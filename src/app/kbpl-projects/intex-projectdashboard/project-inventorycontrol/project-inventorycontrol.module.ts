import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectOpeningstockComponent } from './project-openingstock/project-openingstock.component';
import { ProjectStockreconciliationComponent } from './project-stockreconciliation/project-stockreconciliation.component';
import { ProjectStickadjustmentsComponent } from './project-stickadjustments/project-stickadjustments.component';
import { ProjectInventorycontrolComponent } from './project-inventorycontrol.component';
import { ProjectInventoryanalysisComponent } from './project-inventoryanalysis/project-inventoryanalysis.component';
import { AddAdjustmentsDialogComponent } from 'src/app/purchase/material-requirement-planning/stock-adjustments/add-adjustments-dialog/add-adjustments-dialog.component';
import { UploadPhysicalStockComponent } from './project-stockreconciliation/upload-physical-stock/upload-physical-stock.component';
import { AddComponent } from './project-stickadjustments/add/add.component';
import { StocstockreconciliationItemComponent } from './stocstockreconciliation-item/stocstockreconciliation-item.component';
import { ReconcilationgridComponent } from './stocstockreconciliation-item/reconcilationgrid/reconcilationgrid.component';

export const routes = [
  { path: '', redirectTo: 'openingstock', pathMatch: 'full' },
  { path: 'openingstock', component: ProjectOpeningstockComponent, data: { breadcrumb: '' } },
  { path: 'stockreconciliation', component: ProjectStockreconciliationComponent, data: { breadcrumb: '' } },
  { path: 'stickadjustments', component: ProjectStickadjustmentsComponent, data: { breadcrumb: '' } },
  { path: 'inventoryanalysis', component: ProjectInventoryanalysisComponent, data: { breadcrumb: '' } },
]
@NgModule({
  declarations: [ProjectOpeningstockComponent,ProjectStockreconciliationComponent,ProjectStickadjustmentsComponent,ProjectInventoryanalysisComponent, UploadPhysicalStockComponent, AddComponent, StocstockreconciliationItemComponent, ReconcilationgridComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents:[UploadPhysicalStockComponent, AddComponent]
})
export class ProjectInventoryModule { }
