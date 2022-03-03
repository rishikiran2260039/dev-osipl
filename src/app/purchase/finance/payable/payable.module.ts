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
import { GridViewComponent } from './grid-view/grid-view.component';
import { AgingAnalysisComponent } from './aging-analysis/aging-analysis.component';
import { AddPayablesComponent } from './grid-view/add-payables/add-payables.component';
import { AddInvoicesComponent } from './grid-view/add-payables/add-invoices/add-invoices.component';
import { TimepickerModule } from 'ngx-bootstrap';
import { AddVendorsComponent } from './grid-view/add-vendors/add-vendors.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';

export const routes = [
  { path: '', redirectTo:"grid-view", pathMatch: 'full'},
  { path: 'grid-view', component:GridViewComponent, data: { breadcrumb: 'Payables' } },
  { path: 'aging-analysis', component:AgingAnalysisComponent, data: { breadcrumb: 'Payables' } },
  { path: 'add-payables', component:AddPayablesComponent, data: { breadcrumb: 'Payables' } },

];

@NgModule({
  declarations: [ GridViewComponent, AgingAnalysisComponent, AddPayablesComponent, AddInvoicesComponent, AddVendorsComponent],
  imports: [ChartModule,
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,TimepickerModule.forRoot()
  ],
  providers: [AlertService],
  entryComponents:[
    AddInvoicesComponent,
    AddVendorsComponent,
    UploadDocComponent
  ]
})
export class PayableModule { }
