

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSiteComponent } from './project-site.component';
import { TargetsComponent } from './targets/targets.component';
import { DprComponent } from './dpr/dpr.component';
import { DlrComponent } from './dlr/dlr.component';
import { IssuesComponent } from './issues/issues.component';
import { PhotosComponent } from './photos/photos.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddMaterialComponent } from './targets/add-material/add-material.component';
import { AddLabourComponent } from './targets/add-labour/add-labour.component';
import { MaterialDialogComponent } from './targets/material-dialog/material-dialog.component';
import { LabourDialogComponent } from './targets/labour-dialog/labour-dialog.component';
import { AddFileComponent } from './targets/add-file/add-file.component';
import { AddPhotoComponent } from './photos/add-photo/add-photo.component';
import { ShowPhotosComponent } from './photos/show-photos/show-photos.component';
import { AddIssueComponent } from './issues/add-issue/add-issue.component';
import { ShowIssueComponent } from './issues/show-issue/show-issue.component';

import { AddDialogComponent } from './dpr/add-dialog/add-dialog.component';
import { ComplitionComponent } from './complition/complition.component';

export const routes = [
  { path: '', redirectTo:"completion", pathMatch: 'full'},
  { path: 'dlr', component:DlrComponent,loadChildren:'./dlr/dlr.module#DLRModule' ,data: { breadcrumb: '' } },
  { path: 'dpr', component:DprComponent, data: { breadcrumb: '' } },
  { path: 'issues', component:IssuesComponent, data: { breadcrumb: '' } },
  { path: 'photos', component:PhotosComponent, data: { breadcrumb: '' } },
  { path: 'targets', component:TargetsComponent, data: { breadcrumb: '' } },
  { path: 'completion', component:ComplitionComponent, data: { breadcrumb: '' } }
];

@NgModule({
  declarations: [ShowIssueComponent,TargetsComponent, DprComponent, DlrComponent,AddDialogComponent, IssuesComponent, PhotosComponent, AddMaterialComponent, AddLabourComponent, MaterialDialogComponent, LabourDialogComponent, AddFileComponent, AddPhotoComponent, ShowPhotosComponent, AddIssueComponent, AddDialogComponent, ComplitionComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddFileComponent,AddLabourComponent,LabourDialogComponent,MaterialDialogComponent,AddMaterialComponent,AddPhotoComponent,ShowPhotosComponent,AddIssueComponent,AddDialogComponent]
})
export class ProjectSiteModule { }
