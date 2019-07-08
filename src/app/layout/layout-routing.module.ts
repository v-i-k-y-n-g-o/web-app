import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'owners', loadChildren: './owners/owners.module#OwnersModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'data', loadChildren: './data/data.module#DataModule' },
            { path: 'downloads', loadChildren: './downloads/downloads.module#DownloadsModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
            { path: 'contracts', loadChildren: './contracts/contracts.module#ContractsModule' },
            { path: 'help', loadChildren: './help/help.module#HelpModule' },
            { path: 'keys', loadChildren: './entities/keys/keys.module#KeysModule' },
            { path: 'hierarchy', loadChildren: './entities/hierarchy/hierarchy.module#HierarchyModule' },
            { path: 'entity-actions', loadChildren: './entities/entity-actions/entity-actions.module#EntityActionsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
