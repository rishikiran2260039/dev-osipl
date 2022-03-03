import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  //{ path: '', redirectTo: 'scheduling-screen', pathMatch: 'full' },
  //{ path: 'scheduling-screen', component: SchedulingScreenComponent, loadChildren: 'src/app/kbpl-projects/newproject-dashboard/project-scheduling/scheduling-screen/scheduling-screen.module#SchedulingScreenModule', data: { breadcrumb: '' } }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ContractsheduleModule { }
