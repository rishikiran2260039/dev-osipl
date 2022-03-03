import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectsDialogComponent } from './projects-dialog/projects-dialog.component';
import { AddClientDialogComponent } from './add-client-dialog/add-client-dialog.component';
import { GridViewClientsComponent } from './grid-view/grid-view-clients/grid-view-clients.component';
import { ResetpasswordComponent } from '../logins/resetpassword/resetpassword.component';
import { ResetPasswordDialogComponent } from '../admin/manage-user/users/reset-password-dialog/reset-password-dialog.component';
import { ContactsPopupComponent } from './contacts-popup/contacts-popup.component';

export const routes = [
  { path: '', component: GridViewComponent, pathMatch:'full' },
  { path: 'Clients', component: GridViewComponent, data: { breadcrumb: "" } },
  { path: 'mapview', component: MapViewComponent, data: { breadcrumb: "Map View" } }

];

@NgModule({
  declarations: [ GridViewComponent, MapViewComponent, ProjectsDialogComponent, AddClientDialogComponent, GridViewClientsComponent, ContactsPopupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule
  ],
  providers: [AlertService],
  entryComponents:[AddClientDialogComponent,ProjectsDialogComponent,DeleteConfirmDialogComponent, GridViewClientsComponent,ContactsPopupComponent]
})
export class ClientsModule { }
