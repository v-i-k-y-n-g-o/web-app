import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { OwnersService } from './owners.service';
import { environments } from '../../../environments/environments2';

@Component({
    selector: 'app-owners',
    templateUrl: './owners.component.html',
    styleUrls: ['./owners.component.scss'],
    animations: [routerTransition()]
})

export class OwnersComponent implements OnInit {

    public owners = [];
    public model = {};
    public types = ["Gateway", "Owner", "Asset", "Other"]
    option = "";

    constructor(private ownersService: OwnersService) {
    }

    ngOnInit() {   

        this.getOwner(environments.develop.SERVER.USERNAME).subscribe(data => {
            this.owners = JSON.parse(data["_body"])[0].owners;
            }
        );
        
    }

    getOwner(username){ 
        return this.ownersService.getOwner(username);
    }

    createOwner(){
        this.ownersService.createOwner(environments.develop.SERVER.USERNAME, this.model).subscribe(data => {
            window.location.reload();
        });
    }

    deleteOwner(privateKey){
        this.ownersService.deleteOwner(privateKey).subscribe(data => {
            window.location.reload();
        });
    }

}
