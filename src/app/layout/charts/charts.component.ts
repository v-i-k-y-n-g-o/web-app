import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ChartsService } from './charts.service';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    constructor(private chartsService: ChartsService) {}

    getData(){
        let authentication = localStorage.getItem('token');
        this.chartsService.getData(authentication).subscribe(data => {
            console.log(JSON.parse(data["_body"]));
            }
        );
    }

    ngOnInit() {
        this.getData();
    }
}
