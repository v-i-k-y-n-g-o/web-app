import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, HelpRoutingModule, FormsModule, Ng2Charts],
    declarations: [HelpComponent]
})
export class HelpModule {}
