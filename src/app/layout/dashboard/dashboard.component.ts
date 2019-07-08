import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

import { environments } from '../../../environments/environments2';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    isDisabled1 = false;
    isDisabled2 = false;
    isDisabled3 = true;

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.checkSupernode().subscribe(data => {
            if (data._body === "not created") {
                document.getElementById("gif").style.display = "none";
                document.getElementById("gifstop").style.display = "none";
                this.isDisabled1 = false;
                this.isDisabled2 = true;
                this.isDisabled3 = true;
            }
            else if (data._body === "stopped") {
                document.getElementById("gif").style.display = "none";
                document.getElementById("gifstop").style.display = "block";
                // document.getElementById("elemento2").style.visibility = "visible";
                // document.getElementById("elemento3").style.visibility = "visible";
                // document.getElementById("elemento4").style.visibility = "visible";
                this.isDisabled1 = true;
                this.isDisabled2 = false;
                this.isDisabled3 = false;
            }
            else if (data._body === "started") {
                document.getElementById("gif").style.display = "block";
                document.getElementById("gifstop").style.display = "none";
                this.isDisabled1 = true;
                this.isDisabled2 = false;
                this.isDisabled3 = false;                
            }
        });
    }

    createSupernode() { // NO SE COMPRUEBAN ERRORES
        document.getElementById("spinner1").style.visibility = "visible";
        this.dashboardService.createSupernode(environments.develop.SERVER.USERNAME).subscribe(data => {
            document.getElementById("spinner1").style.visibility = "hidden";
            document.getElementById("gifstop").style.display = "none";
            document.getElementById("gif").style.display = "block";
            this.isDisabled1 = true;
            this.isDisabled2 = false;
            this.isDisabled3 = false;               
        })
    }

    // TODO: COmprobar errores
    // TODO: Utilizar Spinner despues de la función
    startStopSupernode() {
        // document.getElementById("spinner1").style.visibility = "visible";
        this.checkSupernode().subscribe(data => {
            console.log(data._body)
            if (data._body === "stopped") {
                this.startSupernode();
            }
            else if (data._body === "started") {
                this.stopSupernode();           
            }
            // document.getElementById("spinner1").style.visibility = "hidden";
        });
    }
    startSupernode() { // NO SE COMPRUEBAN ERRORES
        this.dashboardService.startSupernode(environments.develop.SERVER.USERNAME).subscribe(data => {
            document.getElementById("gif").style.display = "block";
            document.getElementById("gifstop").style.display = "none";
            this.isDisabled1 = true;
            this.isDisabled2 = false;
            this.isDisabled2 = false;
        })
    }

    stopSupernode() { // NO SE COMPRUEBAN ERRORES
        this.dashboardService.stopSupernode(environments.develop.SERVER.USERNAME).subscribe(data => {
            document.getElementById("gif").style.display = "none";
            document.getElementById("gifstop").style.display = "block";
            this.isDisabled1 = true;
            this.isDisabled2 = false;
            this.isDisabled2 = false;    
        })
    }

    deleteSupernode() { // NO SE COMPRUEBAN ERRORES
        document.getElementById("spinner1").style.visibility = "visible";
        return this.dashboardService.deleteSupernode(environments.develop.SERVER.USERNAME).subscribe(data => {
            document.getElementById("spinner1").style.visibility = "hidden";
            document.getElementById("gif").style.display = "none";
            document.getElementById("gifstop").style.display = "none";
            this.isDisabled1 = false;
            this.isDisabled2 = true;
            this.isDisabled3 = true;        
        })
    }

    checkSupernode() { 
        return this.dashboardService.checkSupernode(environments.develop.SERVER.USERNAME);
    }
}
