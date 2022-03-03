import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreInChargeComponent } from './store-in-charge/store-in-charge.component';
import { TechEngineerComponent } from './tech-engineer/tech-engineer.component';
import { OverviewComponent } from './overview/overview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';




export const routes = [
  // { path:'', redirectTo:'Overview', pathMatch:'full'},
  { path: 'Overview', component:OverviewComponent},
  
];

@NgModule({
  declarations: [StoreInChargeComponent, TechEngineerComponent,OverviewComponent,  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[]
})

export class RequisitionModule { 

  constructor(public dialog:MatDialog){}
  
}
