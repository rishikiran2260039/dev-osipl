import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetCompanyComponent } from './budget-company/budget-company.component';
import { BudgetContractComponent } from './budget-contract/budget-contract.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectAddSiteComponent } from './project-add-site/project-add-site.component';

export const routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  { path: 'company', component: BudgetCompanyComponent, data: { breadcrumb: '' } },
  { path: 'contract', component: BudgetContractComponent, data: { breadcrumb: '' } },
]
@NgModule({
  declarations: [BudgetCompanyComponent, BudgetContractComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class ProjectBudgetModule { }
