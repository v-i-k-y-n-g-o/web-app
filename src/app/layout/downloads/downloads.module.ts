import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsComponent } from './downloads.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, DownloadsRoutingModule, FormsModule, Ng2Charts],
    declarations: [DownloadsComponent]
})
export class DownloadsModule {}
