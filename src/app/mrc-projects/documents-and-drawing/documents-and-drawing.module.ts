import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsAndDrawingComponent } from './documents-and-drawing.component';
import { TenderComponent } from './tender/tender.component';
import { CorrespondenceComponent } from './correspondence/correspondence.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { DrawingRegisterComponent } from './drawing-register/drawing-register.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddWorkComponent } from './work-orders/add-work/add-work.component';
import { AddDocumentDialogComponent } from './tender/add-document-dialog/add-document-dialog.component';
import { AddCorrespondenceDialogComponent } from './correspondence/add-correspondence-dialog/add-correspondence-dialog.component';
import { AddRfqComponent } from './quotations/add-rfq/add-rfq.component';
import { ShowDocsComponent } from '../../shared/show-docs/show-docs.component';
import { ShowDocsItemsComponent } from './quotations/show-docs-items/show-docs-items.component';
import { CurrentVersionComponent } from './drawing-register/current-version/current-version.component';
import { PreviousVersionComponent } from './drawing-register/previous-version/previous-version.component';
import { AddvDialogComponent } from './drawing-register/addv-dialog/addv-dialog.component';

export const routes = [
  { path: '', redirectTo:'correspondence', pathMatch: 'full'},
  { path: 'correspondence', component:CorrespondenceComponent, data: { breadcrumb: '' } },
  { path: 'drawing-register', component:DrawingRegisterComponent, data: { breadcrumb: '' } },
  { path: 'quotations', component:QuotationsComponent, data: { breadcrumb: '' } },
  { path: 'tender', component:TenderComponent, data: { breadcrumb: '' } },
  { path: 'work-orders', component:WorkOrdersComponent, data: { breadcrumb: '' } },
];

@NgModule({
  declarations: [TenderComponent, CorrespondenceComponent,AddvDialogComponent,PreviousVersionComponent,QuotationsComponent, WorkOrdersComponent, DrawingRegisterComponent, AddWorkComponent,AddDocumentDialogComponent, AddCorrespondenceDialogComponent, AddRfqComponent, ShowDocsItemsComponent, CurrentVersionComponent, PreviousVersionComponent, AddvDialogComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AlertService],
  entryComponents:[AddWorkComponent,AddDocumentDialogComponent,AddvDialogComponent,PreviousVersionComponent,AddCorrespondenceDialogComponent,ShowDocsComponent,ShowDocsItemsComponent,AddRfqComponent]
})
export class DocumentsAndDrawingModule { }
