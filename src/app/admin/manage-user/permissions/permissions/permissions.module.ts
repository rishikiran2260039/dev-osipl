import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarPermissionsComponent } from '../radar-permissions/radar-permissions.component';
import { ClientPermissionsComponent } from '../client-permissions/client-permissions.component';
import { ContractsPermissionComponent } from '../contracts-permission/contracts-permission.component';
import { ProjectsPermissionComponent } from '../projects-permission/projects-permission.component';
import { QuotesPermissionComponent } from '../quotes-permission/quotes-permission.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', redirectTo: 'radar-permission', pathMatch: 'full' },
  { path: 'radar-permission', component: RadarPermissionsComponent},
  { path: 'client-permissions', component: ClientPermissionsComponent},
  { path: 'contracts-permissions', component: ContractsPermissionComponent},
  { path: 'project-permissions', component: ProjectsPermissionComponent},
  { path: 'quotes-permissions', component: QuotesPermissionComponent},
];


@NgModule({
  declarations: [RadarPermissionsComponent, ClientPermissionsComponent, QuotesPermissionComponent, ProjectsPermissionComponent, ContractsPermissionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PermissionsModule { }
