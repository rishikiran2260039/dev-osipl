import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectPendingComponent } from './project-pending/project-pending.component';
import { ProjectPublishedComponent } from './project-published/project-published.component';
import { ProjectArchivedComponent } from './project-archived/project-archived.component';

import { ItemsComponent } from './project-pending/items/items.component';
import { TermsComponent } from './project-pending/terms/terms.component';
import { RequisitionComponent } from './project-pending/requisition/requisition.component';
import { PendingReqComponent } from './project-pending/pending-req/pending-req.component';
import { ProjectTermsComponent } from './project-pending/project-terms/project-terms.component';


export const routes = [
  { path:'', redirectTo:'pending', pathMatch:'full'},
  { path: 'pending', component:ProjectPendingComponent,},
  { path: 'published', component:ProjectPublishedComponent},
  { path: 'archived', component:ProjectArchivedComponent},
  { path: 'pending/project-terms', component:ProjectTermsComponent},
 
 
  
];

@NgModule({
  declarations: [ProjectPendingComponent, ProjectPublishedComponent, ProjectArchivedComponent, RequisitionComponent, ItemsComponent, TermsComponent,PendingReqComponent, ProjectTermsComponent  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[ItemsComponent, TermsComponent,PendingReqComponent],
})

export class ProjectWorkOrdersModule { }
