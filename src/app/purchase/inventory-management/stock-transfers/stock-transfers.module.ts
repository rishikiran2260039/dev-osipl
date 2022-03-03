import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockTransferOrderComponent } from './stock-transfer-order/stock-transfer-order.component';
import { OutgoingStockComponent } from './outgoing-stock/outgoing-stock.component'; 
import { IncomingStockComponent } from './incoming-stock/incoming-stock.component';
import { DiscrepanciesComponent } from './discrepancies/discrepancies.component';
import { ArchivesStocktransfersComponent } from './archives-stocktransfers/archives-stocktransfers.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { StocktransferorderSparepartsArchivesComponent } from './archives-stocktransfers/stocktransferorder-spareparts-archives/stocktransferorder-spareparts-archives.component';
import { DocumentsforsrndialogComponent } from './archives-stocktransfers/documentsforsrndialog/documentsforsrndialog.component';
import { ActivitylogdialogArchivescreenComponent } from './archives-stocktransfers/activitylogdialog-archivescreen/activitylogdialog-archivescreen.component';
import { TotalstockqtyInArchivesComponent } from './archives-stocktransfers/totalstockqty-in-archives/totalstockqty-in-archives.component';
import { SurplusstockqtyInArchivesComponent } from './archives-stocktransfers/surplusstockqty-in-archives/surplusstockqty-in-archives.component';
import { ApprovalComponent } from './outgoing-stock/approval/approval.component';
import { ForecloseDialogComponent } from './outgoing-stock/foreclose-dialog/foreclose-dialog.component'; 

import { EditspopupStoNoComponent } from './archives-stocktransfers/stocktransferorder-spareparts-archives/editspopup-sto-no/editspopup-sto-no.component';
import { ActiveStockTransfersComponent } from './active-stock-transfers/active-stock-transfers.component';
//import { CreateStockTransferRequestDialogComponent } from './active-stock-transfers/create-stock-transfer-request-dialog/create-stock-transfer-request-dialog.component';

import { NotesArchivesStocktransfersComponent } from './archives-stocktransfers/notes-archives-stocktransfers/notes-archives-stocktransfers.component';
import { NotesActiveStockComponent } from './notes-active-stock/notes-active-stock.component';
 //import { } from './notes-active-stock/notes-active-stock.component';



export const routes = [
  { path:'', redirectTo:'ActiveStockTransfers', pathMatch:'full'},  
  { path: 'ActiveStockTransfers', component:ActiveStockTransfersComponent , data: { breadcrumb: ''} },
  { path: 'stocktransferorder', component:StockTransferOrderComponent , loadChildren: "./stock-transfer-order/stock-transfer-order.module#StockTransferOrderModule" ,  data: { breadcrumb: ''} },
  { path: 'outgoingstock', component:OutgoingStockComponent, data: { breadcrumb: ''} },
  { path: 'incomingstock', component:IncomingStockComponent, data: { breadcrumb: ''} },
  { path: 'discrepancies', component:DiscrepanciesComponent, data: { breadcrumb: ''} },
  { path: 'archivesstocktransfers', component:ArchivesStocktransfersComponent ,  data: { breadcrumb: ''} },
  
  { path: 'StocktransferorderSparepartsArchives', component: StocktransferorderSparepartsArchivesComponent, data: { breadcrumb: ''} },
];

@NgModule({
  declarations: [StockTransferOrderComponent, OutgoingStockComponent, IncomingStockComponent, DiscrepanciesComponent, ArchivesStocktransfersComponent,DocumentsforsrndialogComponent,
     ActivitylogdialogArchivescreenComponent,StocktransferorderSparepartsArchivesComponent, TotalstockqtyInArchivesComponent, SurplusstockqtyInArchivesComponent, ApprovalComponent, ForecloseDialogComponent, EditspopupStoNoComponent, ActiveStockTransfersComponent, NotesArchivesStocktransfersComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
  ],
  entryComponents:[DocumentsforsrndialogComponent, ActivitylogdialogArchivescreenComponent,TotalstockqtyInArchivesComponent, SurplusstockqtyInArchivesComponent, ApprovalComponent, ForecloseDialogComponent,EditspopupStoNoComponent,
    NotesArchivesStocktransfersComponent]
})
export class StockTransfersModule { }
