import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: 'app/Templates/customerlist.html',
    styleUrls: ['app/css/main.css']
})
export class CustomerListComponent {
    searchString: string = 'Sök kund';

    constructor() {
    }
}