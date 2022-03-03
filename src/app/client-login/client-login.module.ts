import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {TooltipModule} from "ngx-tooltip";
import { ClientLoginComponent } from './client-login.component';
import { ClientConsignmentsComponent } from './client-consignments/client-consignments.component';
import { ClientItemsComponent } from './client-items/client-items.component';

export const routes = [
  {path:'', redirectTo:'long-leads', pathMatch:'full'},
  {path:'long-leads' , component: ClientLoginComponent },
  {path:'consignments' , component: ClientConsignmentsComponent },
  {path:'items' , component: ClientItemsComponent },
]

@NgModule({
  declarations: [ClientLoginComponent, ClientConsignmentsComponent, ClientItemsComponent],
  imports: [
    CommonModule,
    TooltipModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ClientLoginModule { }
