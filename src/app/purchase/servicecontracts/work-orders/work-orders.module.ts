import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingComponent } from './pending/pending.component';
import { PublishedComponent } from './published/published.component';
import { ArchivedComponent } from './archived/archived.component';

import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { PendingAddFormComponent } from './pending/pending-add-form/pending-add-form.component';
import { PendingItemPopUpComponent } from './pending/pending-item-pop-up/pending-item-pop-up.component';
import { PublishedItemPopUpComponent } from './published/published-item-pop-up/published-item-pop-up.component';
import { ArchivedItemPopUpComponent } from './archived/archived-item-pop-up/archived-item-pop-up.component';
import { PendingAssetsComponent } from './pending/pending-assets/pending-assets.component';



export const routes = [
  { path:'', redirectTo:'pending', pathMatch:'full'},
  { path: 'pending', component:PendingComponent,},
  { path: 'published', component:PublishedComponent},
  { path: 'archived', component:ArchivedComponent},
  { path: 'pending-jobcodes', component:PendingItemPopUpComponent},
  { path: 'publish-jobcodes', component:PublishedItemPopUpComponent},
  { path: 'archive-jobcodes', component:ArchivedItemPopUpComponent},
  { path: 'pending-assets', component:PendingAssetsComponent},
  
 
 
  
];

@NgModule({
  declarations: [PendingComponent, PublishedComponent, ArchivedComponent, PendingAddFormComponent, PendingItemPopUpComponent, PublishedItemPopUpComponent, ArchivedItemPopUpComponent,PendingAssetsComponent  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[UploadDocComponent,PendingAddFormComponent],
})

export class WorkOrdersModule { }
