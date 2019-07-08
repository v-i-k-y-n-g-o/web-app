import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, OwnersRoutingModule, PageHeaderModule, FormsModule],
    declarations: [OwnersComponent]
})
export class OwnersModule {}
