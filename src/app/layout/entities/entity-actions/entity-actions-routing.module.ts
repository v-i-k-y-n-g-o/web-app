import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityActionsComponent } from './entity-actions.component';

const routes: Routes = [
    {
        path: '', component: EntityActionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntityActionsRoutingModule {
}
