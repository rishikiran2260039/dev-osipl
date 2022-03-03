import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoComponent } from './auto/auto.component';
import { ManualComponent } from './manual/manual.component';
import { ArchivesComponent } from './archives/archives.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutoModule } from './auto/auto.module';
import { NewGatePassdialogueComponent } from './manual/new-gate-passdialogue/new-gate-passdialogue.component';
import { ArchivedGatepassDetailsDialogueComponent } from './archives/archived-gatepass-details-dialogue/archived-gatepass-details-dialogue.component';
import { ActivitylogArchivesDialogueComponent } from './archives/activitylog-archives-dialogue/activitylog-archives-dialogue.component';
import { NewGatePassPopupInComponent } from './auto/new-gate-pass-popup-in/new-gate-pass-popup-in.component';

export const routes = [
  { path:'', redirectTo:'auto', pathMatch:'full'},   
  { path: 'auto', component:AutoComponent, data: { breadcrumb: ''} },
  { path: 'manual', component:ManualComponent, data: { breadcrumb: ''} },
  { path: 'archives', component:ArchivesComponent, data: { breadcrumb: ''} },
  { path: 'Gatepassdialogue', component:NewGatePassdialogueComponent, data: { breadcrumb: ''} },
  { path: 'ArchivedGatepassDetailsDialogue', component:ArchivedGatepassDetailsDialogueComponent, data: { breadcrumb: ''} },
  { path: 'ActivitylogArchivesDialogue', component: ActivitylogArchivesDialogueComponent, data: { breadcrumb: ''} },
 
];
@NgModule({
  declarations: [AutoComponent, ManualComponent,ArchivesComponent, NewGatePassdialogueComponent, ArchivedGatepassDetailsDialogueComponent, ActivitylogArchivesDialogueComponent,NewGatePassPopupInComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[NewGatePassdialogueComponent,ArchivedGatepassDetailsDialogueComponent, ActivitylogArchivesDialogueComponent,NewGatePassPopupInComponent]
})
export class GatePassesModule { }
