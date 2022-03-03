
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from '../../../shared/services/alert.service';
import { SharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { StatusLogComponent } from './status-log/status-log.component';
import { SiteSowComponent } from './site-sow/site-sow.component';
import { AdministrationComponent } from './administration/administration.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { DraftingComponent } from './drafting/drafting.component';
import { FieldComponent } from './field/field.component';
import { ManagementComponent } from './management/management.component';
import { QualitycontrolComponent } from './qualitycontrol/qualitycontrol.component';
import { QuoteComponent } from './quote/quote.component';
import { ResearchComponent } from './research/research.component';


export const routes = [
    { path: '', redirectTo:'status-log', pathMatch: 'full'},
    {path:'status-log',component:StatusLogComponent},
    {path:'site-sow',component:SiteSowComponent},
    {path:'administration',component:AdministrationComponent},
    {path:'calculations',component:CalculationsComponent},
    {path:'drafting',component:DraftingComponent},
    {path:'field',component:FieldComponent},
    {path:'management',component:ManagementComponent},
    {path:'qualitycontrol',component:QualitycontrolComponent},
    {path:'quote',component:QuoteComponent},
    {path:'research',component:ResearchComponent},
];

@NgModule({
  declarations: [StatusLogComponent, SiteSowComponent, AdministrationComponent, CalculationsComponent, DraftingComponent, FieldComponent, ManagementComponent, QualitycontrolComponent, QuoteComponent, ResearchComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[]
})

export class ActivityModule { }
