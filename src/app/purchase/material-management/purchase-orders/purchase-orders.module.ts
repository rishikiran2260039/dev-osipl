import { PreviewSubmissionReviseComponent } from './published-po/publish-purchaseorder-revise/preview-submission-revise/preview-submission-revise.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UnpublishedPOComponent } from './unpublished-po/unpublished-po.component';
import { ArchivedPOComponent } from './archived-po/archived-po.component';
import { PublishedPOComponent } from './published-po/published-po.component';

import { ApprovalByStageDialogComponent } from './published-po/approval-by-stage-dialog/approval-by-stage-dialog.component';
import { ApprovalbystageUnpublishedpopupComponent } from './unpublished-po/approvalbystage-unpublishedpopup/approvalbystage-unpublishedpopup.component';
import { ReviseResendDialogComponent } from './published-po/revise-resend-dialog/revise-resend-dialog.component';
import { ForeclosePopupComponent } from './published-po/foreclose-popup/foreclose-popup.component';
import { ChangesmadepopPublishedComponent } from './published-po/changesmadepop-published/changesmadepop-published.component';
import { RequisitionUnpublishPopupComponent } from './unpublished-po/requisition-unpublish-popup/requisition-unpublish-popup.component';
import { ItemsUnpublishPopupComponent } from './unpublished-po/items-unpublish-popup/items-unpublish-popup.component';
import { ItemsPublishPopupComponent } from './published-po/items-publish-popup/items-publish-popup.component';
import { RequisitionPublishPopupComponent } from './published-po/requisition-publish-popup/requisition-publish-popup.component';
import { ReqisitionArchivedPopupComponent } from './archived-po/reqisition-archived-popup/reqisition-archived-popup.component';
import { ItemsArchivedPopupComponent } from './archived-po/items-archived-popup/items-archived-popup.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';








export const routes = [
  { path:'', redirectTo:'unpublished-po', pathMatch:'full'},
  { path: 'unpublished-po', component:UnpublishedPOComponent,},
  { path: 'published-po', component:PublishedPOComponent},
  { path: 'published-po/items', component:ItemsPublishPopupComponent},
  { path: 'archived-po', component:ArchivedPOComponent},
  { path: 'archived-po/items', component:ItemsArchivedPopupComponent},
  { path :'PublishPurchaseorderRevise/PreviewSubmissionRevise' , component: PreviewSubmissionReviseComponent},
  { path: 'archived-po', component:ArchivedPOComponent},
 
  
];

@NgModule({
  declarations: [PublishedPOComponent, UnpublishedPOComponent, ArchivedPOComponent, 
    ApprovalByStageDialogComponent, 
    ApprovalbystageUnpublishedpopupComponent, ReviseResendDialogComponent, ForeclosePopupComponent, ChangesmadepopPublishedComponent,
     RequisitionUnpublishPopupComponent, ItemsPublishPopupComponent, RequisitionPublishPopupComponent,
      ReqisitionArchivedPopupComponent, ItemsArchivedPopupComponent, PreviewSubmissionReviseComponent,],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ]
  ,
  entryComponents:[ApprovalByStageDialogComponent,ApprovalbystageUnpublishedpopupComponent,
     ReviseResendDialogComponent, ForeclosePopupComponent ,
    ChangesmadepopPublishedComponent,
    RequisitionUnpublishPopupComponent,ItemsPublishPopupComponent, 
    RequisitionPublishPopupComponent,
    ReqisitionArchivedPopupComponent, ItemsArchivedPopupComponent,UploadDocComponent]
})
export class PurchaseOrdersModule { }
