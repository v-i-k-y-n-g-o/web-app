import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { KeysService } from './keys.service';
import { environments } from '../../../../environments/environments2';

@Component({
    selector: 'app-keys',
    templateUrl: './keys.component.html',
    styleUrls: ['./keys.component.scss'],
    animations: [routerTransition()]
})

export class KeysComponent implements OnInit {

    public owners = [];
    public model = {};
    public types = ["Gateway", "Owner", "Asset", "Other"]
    option = "";

    constructor(private keysService: KeysService) {
    }

    ngOnInit() {   
        this.owners.push({
            name: "Raspberry Pi",
            type: "Gateway",
            job: "Recolector",
            publicKey: "0xd4dEe8efa26da8aF6D288A06dbD680D458CbF199"
        })
        // this.getOwner(environments.develop.SERVER.USERNAME).subscribe(data => {
        //     this.owners = JSON.parse(data["_body"])[0].owners;
        //     }
        // );
        
    }

    getOwner(username){ 
        return this.keysService.getOwner(username);
    }

    createOwner(){
        this.keysService.createOwner(environments.develop.SERVER.USERNAME, this.model).subscribe(data => {
            window.location.reload();
        });
    }

    deleteOwner(privateKey){
        this.keysService.deleteOwner(privateKey).subscribe(data => {
            window.location.reload();
        });
    }

}
