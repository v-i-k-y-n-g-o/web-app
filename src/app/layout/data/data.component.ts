import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { TreeNode } from 'primeng/api';
import { OwnersService } from '../owners/owners.service';

import { environments } from '../../../environments/environments2';
import { MessageService } from 'primeng/api';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.scss'],
    providers: [MessageService]
})
export class DataComponent implements OnInit {
    public owners = [];
    public datas = [];
    chart = []; 
    public model = {
        asset: {
          name: "",
          type: "",
          job: "",
          publicKey: ""
        },
        owner: {
          publicKey: "",
          privateKey: "",
          name: ""
        },
        data: ""
      };

      public data: any;

    constructor(private dataService: DataService, private ownersService: OwnersService, private messageService: MessageService) {
    }
    

    ngOnInit() {
        // this.getOwner(environments.develop.SERVER.USERNAME).subscribe(data => {
        //     this.owners = JSON.parse(data["_body"])[0].owners;
        //   })
        // this.getAllData();
        this.chart = new Chart('canvas', {
          type: 'line',
          data: [20, 10],
          options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
      });
    }

    selectData(event) {
        this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }

    getOwner(username) {
        return this.ownersService.getOwner(username);
      }

    getData() {
        this.dataService.getData(environments.develop.SERVER.USERNAME,this.model.asset.name, this.model.data, this.model.asset.publicKey).subscribe(data => {
            this.datas = JSON.parse(data["_body"])
            console.log(this.datas)
        });
    }

    getAllData() {
        this.dataService.getAllData().subscribe(data => {
            this.datas = JSON.parse(data["_body"])
            console.log(this.datas)
        });
    }
}
