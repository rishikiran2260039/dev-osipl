import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active/active.component';
import { ArchivesComponent } from './archives/archives.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IssueDialogComponent } from './issue-dialog/issue-dialog.component';
import { NotesActiveMaterialIssuesComponent } from './active/notes-active-material-issues/notes-active-material-issues.component';
import { NotesArchivesMaterialIssuesComponent } from './archives/notes-archives-material-issues/notes-archives-material-issues.component';
import { MaterialIssuesItemsComponent } from './material-issues-items/material-issues-items.component';
import { PurchaseItemsComponent } from './purchase-items/purchase-items.component';
import { AddItemPopupComponent } from './add-item-popup/add-item-popup.component';
import { ItemPopupComponent } from './item-popup/item-popup.component';

export const route = [
  {path:'', redirectTo:"active", pathMatch:'full'},
  {path:"active", component:ActiveComponent},
  {path:"active/items", component:PurchaseItemsComponent},
  {path:"archives", component:ArchivesComponent},
]

@NgModule({
  declarations: [ActiveComponent, ArchivesComponent, IssueDialogComponent, NotesActiveMaterialIssuesComponent, NotesArchivesMaterialIssuesComponent, MaterialIssuesItemsComponent, PurchaseItemsComponent, AddItemPopupComponent, ItemPopupComponent,],
  imports: [
    CommonModule, RouterModule.forChild(route),SharedModule
  ],
  entryComponents:[IssueDialogComponent,NotesActiveMaterialIssuesComponent, MaterialIssuesItemsComponent,NotesArchivesMaterialIssuesComponent,ItemPopupComponent]
})
export class MaterialIssuesModule { }
