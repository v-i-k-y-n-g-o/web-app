import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchyRoutingModule } from './hierarchy-routing.module';
import { HierarchyComponent } from './hierarchy.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import {OrganizationChartModule} from 'primeng/organizationchart';


@NgModule({
    imports: [CommonModule, HierarchyRoutingModule, FormsModule, Ng2Charts, OrganizationChartModule],
    declarations: [HierarchyComponent]
})
export class HierarchyModule {}
