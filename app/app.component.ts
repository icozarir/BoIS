import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {ROUTER_DIRECTIVES, provideRouter} from '@angular/router';

import {MenuComponent} from './Menu/menu';
import {MemberListComponent} from './Member/memberCtrl';
import {CustomerListComponent} from './Customer/customerCtrl';

import {MemberService} from './Member/memberService';

@Component({
  selector: 'my-app',
  template: `<div class="container">
                <app-menu></app-menu>
                <router-outlet></router-outlet>
          </div>`,
          precompile: [MemberListComponent, CustomerListComponent],
  directives: [MenuComponent, ROUTER_DIRECTIVES],
  providers: [MemberService, HTTP_PROVIDERS]
})
export class AppComponent { }
