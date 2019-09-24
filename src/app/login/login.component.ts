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

    public model = {
        username: "",
        password: ""
    };

    constructor(public router: Router, private loginService: LoginService) {}

    ngOnInit() {
        this.model.username = "diego";
        this.model.password = "diego";

    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
        window.location.href = '/home';
        // this.loginService.onLoggedin(this.model).subscribe(data => {
        //     let resp = JSON.parse(data._body);
        //     localStorage.setItem('token', resp.token);
        // localStorage.setItem('isLoggedin', 'true');
        // window.location.href = '/home';
        // });
        
    }
}
