import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowDocsComponent } from 'src/app/shared/show-docs/show-docs.component';
import { BillsComponent } from './bills/bills.component';
import { UnbilledComponent } from './unbilled/unbilled.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { BilledComponent } from './billed/billed.component';
import { LineItemDialogComponent } from './unbilled/line-item-dialog/line-item-dialog.component';
import { AddnewrowdialogComponent } from './bills/addnewrowdialog/addnewrowdialog.component';

export const routes = [
  { path: '', redirectTo:'bills', pathMatch: 'full'},
  { path: 'bills', component:BillsComponent, data: { breadcrumb: '' } },
  { path: 'unbilled', component:UnbilledComponent, data: { breadcrumb: '' } },
  { path: 'activity-log', component:ActivityLogComponent, data: { breadcrumb: '' } },
  { path: 'billed', component:BilledComponent, data: { breadcrumb: '' } },
];

@NgModule({
  declarations: [  BillsComponent, UnbilledComponent, ActivityLogComponent, BilledComponent, LineItemDialogComponent, AddnewrowdialogComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[ ShowDocsComponent, LineItemDialogComponent,AddnewrowdialogComponent]
})
export class BillingModule { }
