import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityActionsRoutingModule } from './entity-actions-routing.module';
import { EntityActionsComponent } from './entity-actions.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import {OrganizationChartModule} from 'primeng/organizationchart';


@NgModule({
    imports: [CommonModule, EntityActionsRoutingModule, FormsModule, Ng2Charts, OrganizationChartModule],
    declarations: [EntityActionsComponent]
})
export class EntityActionsModule {}
