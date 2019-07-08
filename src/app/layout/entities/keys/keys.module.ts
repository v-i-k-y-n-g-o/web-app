import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeysRoutingModule } from './keys-routing.module';
import { KeysComponent } from './keys.component';
import { PageHeaderModule } from '../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, KeysRoutingModule, PageHeaderModule, FormsModule],
    declarations: [KeysComponent]
})
export class KeysModule {}
