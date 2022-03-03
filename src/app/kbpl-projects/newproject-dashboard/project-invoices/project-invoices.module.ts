import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectActivityLogComponent } from './project-activity-log/project-activity-log.component';
import { ProjectBilledComponent } from './project-billed/project-billed.component';
import { ProjectInvoiceComponent } from './project-invoice/project-invoice.component';
import { ProjectUnbilledComponent } from './project-unbilled/project-unbilled.component';

export const routes = [
  { path: '', redirectTo:'project-invoice', pathMatch: 'full'},
  {path:'project-invoice',component:ProjectInvoiceComponent},
  {path:'project-unbilled',component:ProjectUnbilledComponent},
  {path:'project-activity-log',component:ProjectActivityLogComponent},
  {path:'project-billed',component:ProjectBilledComponent}
];
@NgModule({
  declarations: [ProjectActivityLogComponent, ProjectUnbilledComponent, ProjectInvoiceComponent, ProjectBilledComponent ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AlertService],
})
export class ProjectInvoicesModule { }
