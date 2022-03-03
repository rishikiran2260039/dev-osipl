import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { ArchivedComponent } from './archived/archived.component';
import { DragulaModule } from 'ng2-dragula';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsignitemmodalComponent } from './consignitemmodal/consignitemmodal.component';
import { ConsignpurchasemodalComponent } from './consignpurchasemodal/consignpurchasemodal.component';
import { GrnpopupProjectComponent } from './grnpopup-project/grnpopup-project.component';






export const routes = [
  { path:'', redirectTo:'active', pathMatch:'full'},
  { path: 'active', component:ActiveComponent},
  { path: 'archived', component:ArchivedComponent},
 
];

@NgModule({
  declarations: [ActiveComponent, ArchivedComponent, ConsignitemmodalComponent, ConsignpurchasemodalComponent, GrnpopupProjectComponent ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,
    FormsModule, 
  ],
  entryComponents:[GrnpopupProjectComponent, ConsignitemmodalComponent, ConsignpurchasemodalComponent]
})
export class ProjectConsignmentModule { }
