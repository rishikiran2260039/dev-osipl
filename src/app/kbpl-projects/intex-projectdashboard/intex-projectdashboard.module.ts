import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DragulaModule } from 'ng2-dragula';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/primeng';
import { ProjectProcurementComponent } from './project-procurement/project-procurement.component';
import { ProjectInventorycontrolComponent } from './project-inventorycontrol/project-inventorycontrol.component';
import { ProjectServicecontractsComponent } from './project-servicecontracts/project-servicecontracts.component';
import { ProjectIndentsComponent } from './project-procurement/project-indents/project-indents.component';

export const routes = [
  { path: '', redirectTo: 'project-procurement', pathMatch: 'full' },
  { path: 'project-procurement', component: ProjectProcurementComponent,loadChildren: './project-procurement/project-procurement.module#ProjectProcurementModule', data: { breadcrumb: 'Manage' } },
  { path: 'project-inventorycontrol', component: ProjectInventorycontrolComponent,loadChildren: './project-inventorycontrol/project-inventorycontrol.module#ProjectInventoryModule', data: { breadcrumb: 'Activity' } },
  { path: 'project-servicecontracts', component: ProjectServicecontractsComponent,loadChildren: './project-servicecontracts/project-servicecontracts.module#ProjectServiceModule', data: { breadcrumb: 'Activity' } },
  // { path: 'WayBillRequistionPackingList', component: WayBillRequistionPackingListComponent,loadChildren: './way-bill-requistion-packing-list/way-bill-requistion-packing-list.module#WayBillRequistionPackingListModule', data: { breadcrumb: 'Activity' } },
]
@NgModule({
  declarations: [ProjectProcurementComponent,ProjectInventorycontrolComponent, ProjectServicecontractsComponent  ],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,DragulaModule.forRoot(),
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [AlertService],
  entryComponents: [
   
  ]
})
export class IntexprojectDashboardModule { }
