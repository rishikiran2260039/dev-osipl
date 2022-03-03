import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrnComponent } from './grn/grn.component';
import { GatePassesComponent } from './gate-passes/gate-passes.component';
import { MaterialIssuesComponent } from './material-issues/material-issues.component';
import { InventoryAnalysisComponent } from './inventory-analysis/inventory-analysis.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsignmentDetailsComponent } from './consignment-details/consignment-details.component';
import { StockTransfersComponent } from './stock-transfers/stock-transfers.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragDropModule } from 'primeng/primeng';
import { NotesActiveStockComponent } from './stock-transfers/notes-active-stock/notes-active-stock.component';
import { CreateStockTransferRequestDialogComponent } from './stock-transfers/active-stock-transfers/create-stock-transfer-request-dialog/create-stock-transfer-request-dialog.component';



export const routes = [
  { path:'', redirectTo:'grn', pathMatch:'full'},
  { path: 'grn' , loadChildren: "./grn/grn.module#GrnModule" },
  { path: 'gate-passes', component:GatePassesComponent, loadChildren: "./gate-passes/gate-passes.module#GatePassesModule" , data: { breadcrumb: 'Gate Passes' } },
  { path: 'stock-transfers', component:StockTransfersComponent , loadChildren: "./stock-transfers/stock-transfers.module#StockTransfersModule" , data: { breadcrumb: 'Stock Transfers'} },
  { path: 'material-issues', component:MaterialIssuesComponent,loadChildren:"./material-issues/material-issues.module#MaterialIssuesModule", data: { breadcrumb: 'Material Issues'} },
  { path: 'inventory-analysis', component:InventoryAnalysisComponent, data: { breadcrumb: 'inventory analysis'} },
  { path: 'consignment-details', component:ConsignmentDetailsComponent, data: { breadcrumb: 'consignment Details'} },
  


];

@NgModule({
  declarations: [NotesActiveStockComponent,GatePassesComponent, StockTransfersComponent, MaterialIssuesComponent, InventoryAnalysisComponent, ConsignmentDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    CommonModule, 
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    NgbTooltipModule,
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory
    }),
    PerfectScrollbarModule,
    DragDropModule,
    HttpClientModule

  ],
  entryComponents:[NotesActiveStockComponent]
})
export class InventoryManagementModule { }
