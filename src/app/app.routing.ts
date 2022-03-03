import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PurchaseRFQFormComponent } from './purchase-rfqform/purchase-rfqform.component';
import { ServiceRFQformComponent } from './service-rfqform/service-rfqform.component';
import { FinanceComponent } from './purchase/finance/finance.component';

export const routes: Routes = [
    { path: '', loadChildren: './logins/logins.module#LoginsModule', data: { breadcrumb: 'Login' } },
    {
        path: '',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard/radar', pathMatch: 'full' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' } },
            { path: 'dashboard', loadChildren: './analytics/analytics.module#AnalyticsModule', component: AnalyticsComponent, data: { breadcrumb: 'Radar' } },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule', data: { breadcrumb: 'Clients' } },
            { path: 'projects', loadChildren:'./kbpl-projects/kbpl-projects.module#KBPLProjectsModule', data: { breadcrumb: 'Projects' } },
            { path: 'contracts', loadChildren: './mrc-projects/mrc-projects.module#MrcProjectsModule', data: { breadcrumb: '' } },
            { path: 'purchase', loadChildren:'./purchase/purchase.module#PurchaseModule',component:PurchaseComponent, data: { breadcrumb: 'Purchase Orders' } },
            { path :'PurchaseRFQForm' , component: PurchaseRFQFormComponent},
            { path: 'assets', loadChildren: './assets/assets.module#AssetsModule', data: { breadcrumb: 'Assets' } },
            { path :'finance' ,component: FinanceComponent, loadChildren:'./purchase/finance/finance.module#FinanceModule',data: { breadcrumb: 'Finance' } },
            { path :'vendor-mgnt', component: FinanceComponent, loadChildren:'./purchase/finance/finance.module#FinanceModule',data: { breadcrumb: 'Finance' } },
            { path :'ServiceRFQForm' , component: ServiceRFQformComponent},
            { path :'client-login' , loadChildren:'./client-login/client-login.module#ClientLoginModule',data: { breadcrumb: 'Long Lead Order Status' } },
        ]
    },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' } }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true
});