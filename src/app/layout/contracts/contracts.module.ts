import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, ContractsRoutingModule, FormsModule, Ng2Charts],
    declarations: [ContractsComponent]
})
export class ContractsModule {}
