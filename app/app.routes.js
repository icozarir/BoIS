"use strict";
var router_1 = require('@angular/router');
var memberCtrl_1 = require('./Member/memberCtrl');
var customerCtrl_1 = require('./Customer/customerCtrl');
var routes = [
    { path: 'Member', component: memberCtrl_1.MemberListComponent },
    { path: 'Customer', component: customerCtrl_1.CustomerListComponent },
    { path: '**', component: memberCtrl_1.MemberListComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map