import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DragulaModule } from 'ng2-dragula';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialActiveComponent } from './material-active/material-active.component';
import { MaterialArchivesComponent } from './material-archives/material-archives.component';
import { AddIssueRequestComponent } from './add-issue-request/add-issue-request.component';
import { MaterialItemsComponent } from './material-items/material-items.component';
import { ProjectNotesComponent } from './project-notes/project-notes.component';
import { AddItempopupComponent } from './add-itempopup/add-itempopup.component';






export const routes = [
  { path:'', redirectTo:'active', pathMatch:'full'},
  { path: 'active', component:MaterialActiveComponent},
  { path: 'archives', component:MaterialArchivesComponent},
  { path: 'active/items', component:MaterialItemsComponent},
  { path: 'archives/items', component:MaterialItemsComponent},
];

@NgModule({
  declarations: [MaterialActiveComponent, MaterialArchivesComponent, AddIssueRequestComponent, MaterialItemsComponent, ProjectNotesComponent, AddItempopupComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule, 
  ],
  entryComponents:[AddIssueRequestComponent,ProjectNotesComponent,AddItempopupComponent]
})
export class ProjectMaterialIssueModule { }
