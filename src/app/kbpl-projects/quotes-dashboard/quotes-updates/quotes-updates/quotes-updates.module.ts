import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuotesNotesComponent } from '../quotes-notes/quotes-notes.component';
// import { ProjectProgressComponent } from './project-progress/project-progress.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuotesPhotosComponent } from '../quotes-photos/quotes-photos.component';
import { AddImageComponent } from '../quotes-photos/add-image/add-image.component';

export const routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: QuotesNotesComponent, data: { breadcrumb: '' } },
  { path: 'photos', component: QuotesPhotosComponent, data: { breadcrumb: '' } },
]

@NgModule({
  declarations: [QuotesNotesComponent, QuotesPhotosComponent, AddImageComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ],

  entryComponents: [AddImageComponent]
})
export class QuotesUpdatesModule { }
