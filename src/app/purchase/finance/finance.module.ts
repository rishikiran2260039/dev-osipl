import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PayableComponent } from './payable/payable.component';
import { ReceievablesComponent } from './receievables/receievables.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PoBillStatusComponent } from './po-bill-status/po-bill-status.component';
import { OrdergridComponent } from './order-status/ordergrid/ordergrid.component';
import { PoBillGridComponent } from './po-bill-status/po-bill-grid/po-bill-grid.component';

export const routes = [
  { path: '', redirectTo:'receivables', pathMatch: 'full'},  //accounting
   { path: 'payables', loadChildren: './payable/payable.module#PayableModule',component:PayableComponent, data: { breadcrumb: 'Payables' } },
   { path: 'receivables', loadChildren: './receievables/receievables.module#ReceievablesModule',component:ReceievablesComponent, data: { breadcrumb: 'Receivables' } },
   { path: 'order-status',component:OrderStatusComponent, data: { breadcrumb: 'Order Status' } },
   { path: 'po-bill-status',component:PoBillStatusComponent, data: { breadcrumb: 'PO Bill Status' } },
  // { path: 'receivables', component: ReceievablesComponent, loadChildren: './receievables/receievables.module#ReceievablesModule',pathMatch: 'full'},
  // { path: 'payables', component: PayableComponent,loadChildren: './payable/payable.module#PayableModule'},
];

@NgModule({
  declarations: [PayableComponent,ReceievablesComponent, OrderStatusComponent, PoBillStatusComponent, OrdergridComponent, PoBillGridComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [AlertService],
  entryComponents:[OrdergridComponent,PoBillGridComponent]
})

export class FinanceModule { }
