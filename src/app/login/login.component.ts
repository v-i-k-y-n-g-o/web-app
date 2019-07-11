import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import { environments } from '../../environments/environments2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public model = {};

    constructor(public router: Router, private loginService: LoginService) {}

    ngOnInit() {}

    onLoggedin() {
        this.loginService.onLoggedin(this.model).subscribe(data => {
            let resp = JSON.parse(data._body);
            localStorage.setItem('token', resp.token);
            localStorage.setItem('isLoggedin', 'true');
            window.location.href = '/home';
        });
        
    }
}
