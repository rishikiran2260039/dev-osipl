import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectNotesComponent } from './project-notes/project-notes.component';
// import { ProjectProgressComponent } from './project-progress/project-progress.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectPhotosComponent } from './project-photos/project-photos.component';
import { AddImageComponent } from './project-photos/add-image/add-image.component';
import { ProjectAddNotesComponent } from './project-notes/project-add-notes/project-add-notes.component';

export const routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: ProjectNotesComponent, data: { breadcrumb: '' } },
  { path: 'photos', component: ProjectPhotosComponent, data: { breadcrumb: '' } },
]
@NgModule({
  declarations: [ProjectNotesComponent, ProjectPhotosComponent, ProjectAddNotesComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],
  entryComponents:[ProjectAddNotesComponent]
})
export class ProjectUpdatesModule { }
