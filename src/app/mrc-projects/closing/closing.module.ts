import { ShowdocsComponent } from './defect-liability/showdocs/showdocs.component';
import { ProjectSiteModule } from './../project-site/project-site.module';


import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClosingComponent } from './closing.component';
import { ReturnsComponent } from './returns/returns.component';
import { ReportsComponent } from './reports/reports.component';
import { InventoryShiftingComponent } from './inventory-shifting/inventory-shifting.component';
import { FinalBillComponent } from './final-bill/final-bill.component';
import { DefectLiabilityComponent } from './defect-liability/defect-liability.component';
import { GuarenteesComponent } from './guarentees/guarentees.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddreturnComponent } from './returns/addreturn/addreturn.component';
import { AddreportComponent } from './reports/addreport/addreport.component';
import { AddstockComponent } from './inventory-shifting/addstock/addstock.component';
import { AddDialogComponent } from './defect-liability/add-dialog/add-dialog.component';

import { AddGuarenteeComponent } from './guarentees/add-guarentee/add-guarentee.component';
import { ShowDocsComponent } from 'src/app/shared/show-docs/show-docs.component';

export const routes = [
  { path: '', redirectTo:'defect-liability', pathMatch: 'full'},
  { path: 'defect-liability', component:DefectLiabilityComponent, data: { breadcrumb: '' } },
  { path: 'final-bill', component:FinalBillComponent, data: { breadcrumb: '' } },
  { path: 'guarentees', component:GuarenteesComponent, data: { breadcrumb: '' } },
  { path: 'inventory-shifting', component:InventoryShiftingComponent, data: { breadcrumb: '' } },
  { path: 'reports', component:ReportsComponent, data: { breadcrumb: '' } },
  { path: 'returns', component:ReturnsComponent, data: { breadcrumb: '' } },
];

@NgModule({
  declarations: [ReturnsComponent, ReportsComponent, InventoryShiftingComponent, FinalBillComponent, DefectLiabilityComponent, GuarenteesComponent, AddreturnComponent, AddreportComponent,ShowdocsComponent, AddstockComponent, AddDialogComponent, AddGuarenteeComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddreturnComponent,AddreportComponent,ShowdocsComponent,AddstockComponent,AddDialogComponent,ShowDocsComponent,AddGuarenteeComponent]
})
export class ClosingModule { }
