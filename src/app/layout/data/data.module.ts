import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, DataRoutingModule, FormsModule, Ng2Charts],
    declarations: [DataComponent]
})
export class DataModule {}
