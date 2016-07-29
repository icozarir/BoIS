import { provideRouter, RouterConfig } from '@angular/router';

import {MemberListComponent} from './Member/memberCtrl';
import {CustomerListComponent} from './Customer/customerCtrl';

const routes: RouterConfig = [
  { path: 'Member', component: MemberListComponent },
  { path: 'Customer', component: CustomerListComponent },
  { path: '**', component: MemberListComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];