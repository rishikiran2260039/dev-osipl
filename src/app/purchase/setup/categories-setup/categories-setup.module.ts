import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesSetupComponent } from './product-categories-setup/product-categories-setup.component';
import { ProductSubcategoriesSetupComponent } from './product-subcategories-setup/product-subcategories-setup.component';
import { CrossReferenceSetupComponent } from './cross-reference-setup/cross-reference-setup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProdSetupComponent } from './product-categories-setup/add-prod-setup/add-prod-setup.component';
import { AddSubSetupComponent } from './product-subcategories-setup/add-sub-setup/add-sub-setup.component';
import { ServiceCategoriesComponent } from './service-categories/service-categories.component';
import { AddServiceCatDialogComponent } from './service-categories/add-service-cat-dialog/add-service-cat-dialog.component';
import { ListSubcategoriesComponent } from './product-categories-setup/list-subcategories/list-subcategories.component';
import { ProductTypeSetupComponent } from './product-type-setup/product-type-setup.component';
import { AddProductTypeMasterComponent } from './product-type-setup/add-product-type-master/add-product-type-master.component';
import { ListItemtypesComponent } from './product-categories-setup/list-itemtypes/list-itemtypes.component';



export const routes = [
  { path:'', redirectTo:'ProductCategories-Setup', pathMatch:'full'},
  { path: 'ProductCategories-Setup', component:ProductCategoriesSetupComponent , data: { breadcrumb: ''} },
  { path: 'ProductSubcategories-Setup', component:ProductSubcategoriesSetupComponent, data: { breadcrumb: ''} },
  { path: 'ServiceCategories-Setup', component:ServiceCategoriesComponent, data: { breadcrumb: ''} },
  { path: 'CrossReference-Setup', component: CrossReferenceSetupComponent, data: { breadcrumb: ''} },
  { path: 'ProductType-Setup', component: ProductTypeSetupComponent, data: { breadcrumb: ''} },
  
  
];
@NgModule({
  declarations: [ProductCategoriesSetupComponent, ProductSubcategoriesSetupComponent, CrossReferenceSetupComponent,
     AddProdSetupComponent, AddSubSetupComponent, ServiceCategoriesComponent, AddServiceCatDialogComponent, ListSubcategoriesComponent, ProductTypeSetupComponent, AddProductTypeMasterComponent, ListItemtypesComponent, ],
  imports: [
    CommonModule,RouterModule.forChild(routes), DragulaModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[ListItemtypesComponent,AddProductTypeMasterComponent,AddProdSetupComponent,AddSubSetupComponent,AddServiceCatDialogComponent,ListSubcategoriesComponent]
})
export class CategoriesSetupModule { }
