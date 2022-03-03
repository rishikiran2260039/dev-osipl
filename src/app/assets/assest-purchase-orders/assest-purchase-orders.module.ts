import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchivedComponent } from './achived/achived.component';
import { PublishedComponent } from './published/published.component';
import { UnpublishedComponent } from './unpublished/unpublished.component';
import { TermsComponent } from './terms/terms.component';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/theme/pipes/pipes.module';
import { ItemsUnpublishedComponent } from './unpublished/items-unpublished/items-unpublished.component';
import { AddItemComponent } from './unpublished/items-unpublished/add-item/add-item.component';
import { IndentUnpublishedComponent } from './unpublished/indent-unpublished/indent-unpublished.component';
import { InvoicePublishedComponent } from './published/invoice-published/invoice-published.component';
import { IndentPublishedComponent } from './published/indent-published/indent-published.component';
import { ItemsPublishedComponent } from './published/items-published/items-published.component';
import { ItemsArchivedComponent } from './achived/items-archived/items-archived.component';
import { IndentArchivedComponent } from './achived/indent-archived/indent-archived.component';
import { InvoiceArchivedComponent } from './achived/invoice-archived/invoice-archived.component';

export const routes = [
  { path:'', redirectTo:'unpublished-po', pathMatch:'full'},
  { path: 'unpublished-po', component:UnpublishedComponent,},
  { path: 'published-po', component:PublishedComponent},
  { path: 'published-po/items', component:ItemsPublishedComponent},
  { path: 'unpublished-po/items', component:ItemsUnpublishedComponent},
  { path: 'archived-po/items', component:ItemsArchivedComponent},
  { path: 'archived-po', component:AchivedComponent},
  // { path: 'archived-po/items', component:ItemsArchivedPopupComponent},
  // { path :'PublishPurchaseorderRevise/PreviewSubmissionRevise' , component: PreviewSubmissionReviseComponent},
  // { path: 'archived-po', component:ArchivedPOComponent},
  { path :'terms' , component: TermsComponent, data: { breadcrumb: '' }}, 
 


];

@NgModule({
  declarations: [AchivedComponent, PublishedComponent, UnpublishedComponent, TermsComponent, ItemsUnpublishedComponent, AddItemComponent, IndentUnpublishedComponent, InvoicePublishedComponent, IndentPublishedComponent, ItemsPublishedComponent, ItemsArchivedComponent, IndentArchivedComponent, InvoiceArchivedComponent],
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
  ],entryComponents:[AddItemComponent,IndentPublishedComponent,IndentUnpublishedComponent,InvoicePublishedComponent,InvoiceArchivedComponent,IndentArchivedComponent]
})
export class AssestPurchaseOrdersModule { }
