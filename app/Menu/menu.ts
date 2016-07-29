import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: 'app/Templates/menu.html',
    styleUrls: ['app/css/menu.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent {
    activeItem: string = '';
    
    constructor(){
    }

    onMenuClicked(item) {
        this.activeItem = item;
    }

    isActive(item): boolean {
        return this.activeItem == item;
    }
 }