import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectserviceIndentsComponent } from './projectservice-indents/projectservice-indents.component';
import { ProjectWoComponent } from './project-wo/project-wo.component';
import { ProjectArnComponent } from './project-arn/project-arn.component';
import { ProjectServicechallansComponent } from './project-servicechallans/project-servicechallans.component';
import { AddRequisitionDialogServicecontractsComponent } from 'src/app/purchase/servicecontracts/requistion-service-contracts/add-requisition-dialog-servicecontracts/add-requisition-dialog-servicecontracts.component';
import { AddServiceChallanComponent } from 'src/app/purchase/servicecontracts/service-challans/add-service-challan/add-service-challan.component';
import { AddIndentComponent } from './projectservice-indents/add-indent/add-indent.component';
import { AddChallansComponent } from './project-servicechallans/add-challans/add-challans.component';
import { ItemsComponent } from './projectservice-indents/items/items.component';
import { ItemdialogComponent } from './projectservice-indents/itemdialog/itemdialog.component';
import { GriddialogComponent } from './projectservice-indents/griddialog/griddialog.component';
import { ModalModule } from 'ngx-bootstrap';
import { ServiceComponent } from './project-servicechallans/service/service.component';
import { EquipmentComponent } from './project-servicechallans/equipment/equipment.component';
import { PartsComponent } from './project-servicechallans/parts/parts.component';
import { ServiceChallansPartsComponent } from './project-servicechallans/service/service-challans-parts/service-challans-parts.component';
import { ServiceChallansEquipmentsComponent } from './project-servicechallans/service/service-challans-equipments/service-challans-equipments.component';
import { ProjectAddPartsComponent } from './project-servicechallans/service/project-add-parts/project-add-parts.component';
import { ProjectEquipmentComponent } from './project-servicechallans/service/project-equipment/project-equipment.component';

export const routes = [
  { path: '', redirectTo: 'indents', pathMatch: 'full' },
  { path: 'indents', component: ProjectserviceIndentsComponent, data: { breadcrumb: '' } },
  { path: 'wo', component: ProjectWoComponent,loadChildren: './project-wo/project-wo.module#ProjectWorkOrdersModule', data: { breadcrumb: '' } },
  { path: 'arn', component: ProjectArnComponent, data: { breadcrumb: '' } },
  { path: 'items', component: ItemsComponent, data: { breadcrumb: '' } },
  { path: 'servicechallans', component: ProjectServicechallansComponent, data: { breadcrumb: '' } },
  { path: 'servicechallans/parts', component: ServiceChallansPartsComponent, data: { breadcrumb: '' } },
  { path: 'equipments', component: ProjectEquipmentComponent, data: { breadcrumb: '' } },
  

] 
@NgModule({
  declarations: [ProjectserviceIndentsComponent,ProjectWoComponent,ProjectArnComponent,ProjectServicechallansComponent,
     AddIndentComponent, AddChallansComponent, ItemsComponent,ItemdialogComponent,GriddialogComponent, ServiceComponent, EquipmentComponent, PartsComponent, ServiceChallansPartsComponent, ServiceChallansEquipmentsComponent, ProjectAddPartsComponent, ProjectEquipmentComponent],
  imports: [
    ChartModule,
    ModalModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents:[AddIndentComponent, AddChallansComponent,ItemdialogComponent,GriddialogComponent, ServiceComponent, EquipmentComponent, PartsComponent,ProjectEquipmentComponent]
})
export class ProjectServiceModule { }
