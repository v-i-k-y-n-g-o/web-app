import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { PageHeaderModule } from '../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, PageHeaderModule, FormsModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
