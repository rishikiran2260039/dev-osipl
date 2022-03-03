import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnpublishedComponent } from './unpublished/unpublished.component';
import { PublishedComponent } from './published/published.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewApprovalComponent } from './view-approval/view-approval.component';
import { RfqEmailQuotationsComponent } from './rfq-email-quotations/rfq-email-quotations.component';
import { ComposeEmailDialogComponent } from './rfq-email-quotations/compose-email-dialog/compose-email-dialog.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
// import { BulkQuotePopupComponent } from './items-and-quotes-quotations/bulk-quote-popup/bulk-quote-popup.component';





export const routes = [
  // { path:'', redirectTo:'published', pathMatch:'full'},
  { path: 'unpublished', component:UnpublishedComponent, data: { breadcrumb: 'Unpublished' } },
  { path: 'published', component:PublishedComponent, data: { breadcrumb: 'Published'}},
  { path: 'email-rfq' , component:RfqEmailQuotationsComponent ,data: { breadcrumb: ''}},
];

@NgModule({
  declarations: [UnpublishedComponent, PublishedComponent, 
    ViewApprovalComponent, RfqEmailQuotationsComponent, 
    ComposeEmailDialogComponent, ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents:[ViewApprovalComponent,ComposeEmailDialogComponent,UploadDocComponent]
})
export class QuotationsModule { }
