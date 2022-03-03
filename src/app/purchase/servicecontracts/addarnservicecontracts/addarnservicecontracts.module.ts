import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { JobcodesComponent } from './jobcodes/jobcodes.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { InvoiceaddformComponent } from './invoiceaddform/invoiceaddform.component';
import { PerfomanceComponent } from './perfomance/perfomance.component';
import { PerfomanceaddformComponent } from './perfomanceaddform/perfomanceaddform.component';
import { AssetsArnComponent } from './assets-arn/assets-arn.component';
import { AddAssetsArnComponent } from './assets-arn/add-assets-arn/add-assets-arn.component';


export const routes = [
  { path:'', redirectTo:'overview', pathMatch:'full'},
  { path: 'overview', component:OverviewComponent},
  { path: 'jobcodes', component:JobcodesComponent},
  { path: 'invoicing', component:InvoicingComponent},
  { path: 'perfomance', component:PerfomanceComponent},
  { path: 'assets', component:AssetsArnComponent},

 
];

@NgModule({
  declarations: [OverviewComponent, JobcodesComponent, InvoicingComponent, InvoiceaddformComponent, PerfomanceComponent, PerfomanceaddformComponent, AssetsArnComponent, AddAssetsArnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    DragulaModule,
    SharedModule,
    ConfirmationPopoverModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[InvoiceaddformComponent,PerfomanceaddformComponent,AddAssetsArnComponent]
})
export class AddarnservicecontractsModule { }
