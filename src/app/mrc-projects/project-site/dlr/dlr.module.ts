

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

import { AddupdateDialogComponent } from './addupdate-dialog/addupdate-dialog.component';
import { BoqLineItemComponent } from './boq-line-item/boq-line-item.component';
import { UndergroundComponent } from './underground/underground.component';
import { SurfaceComponent } from './surface/surface.component';
import { CivilSiteComponent } from './civil-site/civil-site.component';

export const routes = [
    {path:'',redirectTo:'boq',pathMatch:'full'},
    {path:'boq',component:BoqLineItemComponent},
    {path:'underground',component:UndergroundComponent},
    {path:'surface',component:SurfaceComponent},
    {path:'civilsite',component:CivilSiteComponent}
];

@NgModule({
  declarations: [ AddupdateDialogComponent,  BoqLineItemComponent, UndergroundComponent, SurfaceComponent, CivilSiteComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddupdateDialogComponent]
})
export class DLRModule { }
