import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoPendingComponent } from './po-pending/po-pending.component';
import { PoPublishedComponent } from './po-published/po-published.component';
import { PoArchivedComponent } from './po-archived/po-archived.component';
import { ProjectstpmodalComponent } from './projectstpmodal/projectstpmodal.component';
import { ProjectsreqmodalComponent } from './projectsreqmodal/projectsreqmodal.component';
import { ProjectsitemmodalComponent } from './projectsitemmodal/projectsitemmodal.component';
import { ProjectsforeclosemodalComponent } from './projectsforeclosemodal/projectsforeclosemodal.component';
import { PoTermsComponent } from './po-terms/po-terms.component';
// import { PoTermsComponent } from './po-terms/po-terms.component';







export const routes = [
  { path:'', redirectTo:'pending', pathMatch:'full'},
  { path: 'pending', component:PoPendingComponent,},
  { path: 'published', component:PoPublishedComponent},
  { path: 'archived', component:PoArchivedComponent},
  {path:'pending/po-terms',component:PoTermsComponent}
];

@NgModule({
  declarations: [PoPendingComponent,PoTermsComponent, PoPublishedComponent, PoArchivedComponent, ProjectstpmodalComponent, ProjectsreqmodalComponent, ProjectsitemmodalComponent, ProjectsforeclosemodalComponent ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ]
  ,
  entryComponents:[ProjectstpmodalComponent, ProjectsreqmodalComponent, ProjectsitemmodalComponent, ProjectsforeclosemodalComponent  ]
})
export class ProjectPurchaseOrdersModule { }
