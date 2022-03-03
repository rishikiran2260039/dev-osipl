import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings/settings.component";
import { RouterModule } from "@angular/router";
import { DragulaModule, DragulaService } from "ng2-dragula";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { MasterdataNewComponent } from "./masterdata-new/masterdata-new.component";
import { SharedModule } from "../shared/shared.module";
import { LookupComponent } from "./lookup/lookup.component";
import { AddLookupDialogComponent } from "./lookup/add-lookup-dialog/add-lookup-dialog.component";
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { NotificationsComponent } from "./notifications/notifications.component";
import { KanbanSetupComponent } from './kanban-setup/kanban-setup.component';
import { KanbanDialogComponent } from './kanban-setup/kanban-dialog/kanban-dialog.component';
import { EventLogComponent } from './event-log/event-log.component';

export const routes = [
  { path: "", redirectTo: "manage-users", pathMatch: "full" },
  {
    path: "manage-users",
    component: ManageUserComponent,
    loadChildren: "./manage-user/manage-user.module#ManageUserModule",
    data: { breadcrumb: "Manage User" },
  },
  {
    path: "master-data",
    component: MasterdataNewComponent,
    loadChildren: "./masterdata-new/masterdata-new.module#MasterdataNewModule",
    data: { breadcrumb: "Master Data" },
  },
  {
    path: "settings",
    component: SettingsComponent,
    pathMatch: "full",
    data: { breadcrumb: "Settings" },
  },
  {
    path: "lookup-options",
    component: LookupComponent,
    pathMatch: "full",
    data: { breadcrumb: "Lookup Options" },
  },
  {
    path: "kanban-setup",
    component: KanbanSetupComponent,
    pathMatch: "full",
    data: { breadcrumb: "Kanban" },
  },
  {
    path:'notifications',
    component:NotificationsComponent,
    pathMatch: "full",
    data: {breadcrumb: "Notifications"}
  },
  {
    path:'event-log',
    component:EventLogComponent,
    pathMatch: "full",
    data: {breadcrumb: "Event Log"}
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), DragulaModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
    SharedModule],
  providers: [DragulaService],
  declarations: [
    ManageUserComponent,
    MasterdataNewComponent,
    SettingsComponent,
    LookupComponent,
    AddLookupDialogComponent,
    KanbanSetupComponent,
    KanbanDialogComponent,NotificationsComponent, EventLogComponent
  ],
  entryComponents: [AddLookupDialogComponent,KanbanDialogComponent],
  exports:[
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
  ]
})
export class AdminModule {}
