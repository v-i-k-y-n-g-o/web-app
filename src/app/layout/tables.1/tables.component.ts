import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TablesService } from './tables.service';
import { Observable } from 'rxjs';

import { environments } from '../../../environments/environments2';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    public owners: Array<any> = [];

    constructor(private tablesService: TablesService) {}

    ngOnInit() {
        this.getOwner(environments.develop.SERVER.USERNAME).subscribe(data => {
            this.owners = JSON.parse(data["_body"])[0].owners;
            }
        );
    }

    getOwner(owner) { 
        return this.tablesService.getOwner(owner);
    }
}
