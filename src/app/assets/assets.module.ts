import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AssetWarrantyComponent } from './asset-warranty/asset-warranty.component';
import { AssetsTabsComponent } from './assets-tabs/assets-tabs.component';
import { AddWarrantyComponent } from './asset-warranty/add-warranty/add-warranty.component';

import { AssetsIndentComponent } from './assets-indent/assets-indent.component';
import { AssetsRfqComponent } from './assets-rfq/assets-rfq.component';
import { OemMasterComponent } from './oem-master/oem-master.component';
import { ClassMasterComponent } from './class-master/class-master.component';
import { AssetsCategoriesComponent } from '../assets-categories/assets-categories.component';
import { AddOemMasterComponent } from './oem-master/add-oem-master/add-oem-master.component';
import { UploadDocComponent } from '../shared/upload-doc/upload-doc.component';
import { OemMasterNotesComponent } from './oem-master/oem-master-notes/oem-master-notes.component';
import { OemMasterDocComponent } from './oem-master/oem-master-doc/oem-master-doc.component';
import { AddClassMasterComponent } from './class-master/add-class-master/add-class-master.component';
import { AddAssetsIndentComponent } from './assets-indent/add-assets-indent/add-assets-indent.component';
import { AddAssetsItemsComponent } from './assets-indent/add-assets-items/add-assets-items.component';
import { AddAssetItemDialogComponent } from './assets-indent/add-asset-item-dialog/add-asset-item-dialog.component';
import { AssestMasterComponent } from './assest-master/assest-master.component';
import { AssetManagerDialogboxComponent } from './assest-master/asset-manager-dialogbox/asset-manager-dialogbox.component';
import { AssetLicenseComponent } from './assest-master/asset-license/asset-license.component';
import { AssestPurchaseOrdersComponent } from './assest-purchase-orders/assest-purchase-orders.component';
import { AssetCrnComponent } from './asset-crn/asset-crn.component';
import { AssetServiceHistoryComponent } from './asset-service-history/asset-service-history.component';
import { AssetQuotationComponent } from './asset-quotation/asset-quotation.component';

export const routes = [
  { path: '', redirectTo: 'asset-master', pathMatch: 'full'  },
  { path: 'warranty', component: AssetWarrantyComponent, data: { breadcrumb: "Assets-Warranty" } },
  { path: 'assets-indent', component: AssetsIndentComponent, data: { breadcrumb: "Assets-Indent" } },
  { path: 'assets-rfq', component: AssetsRfqComponent, data: { breadcrumb: "Assets-RFQ" } },
  { path: 'oem-master', component: OemMasterComponent, data: { breadcrumb: "OEM-Master" } },
  { path: 'class-master', component: ClassMasterComponent, data: { breadcrumb: "Class-Master" } },
  { path: 'assets-categories', component: AssetsCategoriesComponent, data: { breadcrumb: "Assets-Categories" } },
  { path: 'assets-indent/assets-items', component: AddAssetsItemsComponent, data: { breadcrumb: "Assets" } },
  { path: 'asset-master', component: AssestMasterComponent, data: { breadcrumb: "Assets-Master" } },
  { path: 'assest-purchase-orders', component:AssestPurchaseOrdersComponent, loadChildren:"./assest-purchase-orders/assest-purchase-orders.module#AssestPurchaseOrdersModule", data: { breadcrumb: 'Purchase Orders' } },
  { path: 'assets-crn', component: AssetCrnComponent, data: { breadcrumb: "Assets-RFQ" } },
  { path: 'assets-service-history', component: AssetServiceHistoryComponent, data: { breadcrumb: "Assets-RFQ" } },
  { path: 'assets-quotation', component: AssetQuotationComponent, data: { breadcrumb: "Assets-RFQ" } },

];


@NgModule({
  declarations: [ AssetWarrantyComponent, AssetsTabsComponent, AddWarrantyComponent, AssetsIndentComponent, AssetsRfqComponent, OemMasterComponent, ClassMasterComponent,AssetsCategoriesComponent, AddOemMasterComponent, OemMasterNotesComponent, OemMasterDocComponent, AddClassMasterComponent, AddAssetsIndentComponent, AddAssetsItemsComponent, AddAssetItemDialogComponent, AssestMasterComponent, AssetManagerDialogboxComponent, AssetLicenseComponent, AssestPurchaseOrdersComponent, AssetCrnComponent, AssetServiceHistoryComponent, AssetQuotationComponent],
  
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

  entryComponents:[AddWarrantyComponent,AddOemMasterComponent,UploadDocComponent,OemMasterNotesComponent,OemMasterDocComponent,AddClassMasterComponent,AddAssetsIndentComponent,AddAssetItemDialogComponent,AssetManagerDialogboxComponent,AssetLicenseComponent]

})
export class AssetsModule { }
