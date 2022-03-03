import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceievablesComponent } from './receievables.component';
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
import { AgeingInvoicesComponent } from './aging-analysis/ageing-invoices/ageing-invoices.component';
import { AddPayablesComponent } from './grid-view/add-payables/add-payables.component';
import { AddInvoicesComponent } from './grid-view/add-payables/add-invoices/add-invoices.component';
import { TimepickerModule } from 'ngx-bootstrap';

export const routes = [
  { path: '', redirectTo:"aging-analysis", pathMatch: 'full'},
  { path: 'aging-analysis', component:AgingAnalysisComponent, data: { breadcrumb: 'Receivables' } },
  { path: 'grid-view', component:GridViewComponent, data: { breadcrumb: 'Receivables' } },
  { path: 'ageing-invoices', component:AgeingInvoicesComponent, data: { breadcrumb: 'Receivables' } },
  { path: 'add-payables', component:AddPayablesComponent, data: { breadcrumb: 'Receivables' } },

];

@NgModule({
  declarations: [ GridViewComponent,AddInvoicesComponent, AddPayablesComponent,AgingAnalysisComponent, AgeingInvoicesComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,TimepickerModule.forRoot()
  ],
  providers: [AlertService],
  entryComponents:[AddInvoicesComponent]
})
export class ReceievablesModule { }
