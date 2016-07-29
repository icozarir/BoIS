"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var memberFilterPipe_1 = require('../Member/memberFilterPipe');
var memberService_1 = require('../Member/memberService');
var memberCard_1 = require('../Member/memberCard');
var MemberListComponent = (function () {
    function MemberListComponent(_memberService) {
        this._memberService = _memberService;
        this.searchString = '';
        this.listOfMembers = [];
        this.rowActivated = true;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._memberService.getMembers()
            .subscribe(function (members) { return _this.listOfMembers = members; });
    };
    MemberListComponent.prototype.onNotify = function (event) {
        this.rowActivated = event;
    };
    MemberListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Templates/memberlist.html',
            styleUrls: ['app/css/main.css'],
            pipes: [memberFilterPipe_1.MemberFilterPipe],
            directives: [memberCard_1.MemberCard]
        }), 
        __metadata('design:paramtypes', [memberService_1.MemberService])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=memberCtrl.js.map