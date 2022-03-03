import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpeningStockComponent } from './opening-stock/opening-stock.component';
import { ReorderLevelsComponent } from './reorder-levels/reorder-levels.component';
import { StockReconciliationComponent } from './stock-reconciliation/stock-reconciliation.component';
import { StockAdjustmentsComponent } from './stock-adjustments/stock-adjustments.component';
import { UploadStockComponent } from './opening-stock/upload-stock/upload-stock.component';
import { SafetyStockComponent } from './reorder-levels/safety-stock/safety-stock.component';
import { InventoryAnalysisComponent } from './inventory-analysis/inventory-analysis.component';
import { ChartModule } from 'angular-highcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PhysicalStockDialogComponent } from './stock-reconciliation/physical-stock-dialog/physical-stock-dialog.component';
import { StockReconcilliation2Component } from './stock-reconciliation/stock-reconcilliation2/stock-reconcilliation2.component';
import { AddAdjustmentsDialogComponent } from './stock-adjustments/add-adjustments-dialog/add-adjustments-dialog.component';
import { ReOrderuploadformComponent } from './reorder-levels/re-orderuploadform/re-orderuploadform.component';
import { AddItemReorderComponent } from './reorder-levels/add-item-reorder/add-item-reorder.component';
import { UploadformstockComponent } from './opening-stock/uploadformstock/uploadformstock.component';


export const routes = [
  { path:'', redirectTo:'opening-stock', pathMatch:'full'},
  { path: 'opening-stock', component:OpeningStockComponent, data: { breadcrumb: 'Opening Stock' } },
  { path: 'reorder-levels', component:ReorderLevelsComponent, data: { breadcrumb: 'Opening Stock' } },
  { path: 'stock-reconcilliation', component:StockReconciliationComponent, data: { breadcrumb: 'Opening Stock' } },
  { path: 'stock-adjustments', component:StockAdjustmentsComponent, data: { breadcrumb: 'Opening Stock' } },
  { path: 'inventory-analysis', component:InventoryAnalysisComponent}
];

@NgModule({
  declarations: [OpeningStockComponent,ReorderLevelsComponent,StockReconciliationComponent,StockAdjustmentsComponent, UploadStockComponent, SafetyStockComponent, InventoryAnalysisComponent, PhysicalStockDialogComponent, AddAdjustmentsDialogComponent, ReOrderuploadformComponent, AddItemReorderComponent, UploadformstockComponent,],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents: [UploadStockComponent, SafetyStockComponent,PhysicalStockDialogComponent, AddAdjustmentsDialogComponent,ReOrderuploadformComponent,AddItemReorderComponent,UploadformstockComponent]
})
export class MaterialRequirementPlanningModule { }
