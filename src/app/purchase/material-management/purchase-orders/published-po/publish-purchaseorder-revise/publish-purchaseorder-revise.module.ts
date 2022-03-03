import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigurationReviseComponent } from './configuration-revise/configuration-revise.component';
import { PreviewSubmissionReviseComponent } from './preview-submission-revise/preview-submission-revise.component';
import { TermsConditionsReviseComponent } from './terms-conditions-revise/terms-conditions-revise.component';
 
export const routes = [
  { path:'', redirectTo:'PreviewSubmissionRevise', pathMatch:'full'},
//  { path: 'PreviewSubmissionRevise', component:PreviewSubmissionReviseComponent},
  { path: 'ConfigurationRevise', component:ConfigurationReviseComponent},
  { path: 'TermsConditionsRevise', component:TermsConditionsReviseComponent},
 
  
];

@NgModule({
  declarations: [ ConfigurationReviseComponent, TermsConditionsReviseComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[]
})
export class PublishPurchaseorderReviseModule { }
