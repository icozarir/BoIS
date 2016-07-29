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
var MemberCard = (function () {
    function MemberCard() {
        this.activeHandler = new core_1.EventEmitter();
        this.memberTitle = 'Medlemsinfo';
        this.isActive = true;
        this.activeButtonText = 'Inaktivera';
    }
    MemberCard.prototype.ngOnChanges = function () {
    };
    MemberCard.prototype.onActiveClicked = function () {
        this.isActive = !this.isActive;
        this.setButtonText();
        this.activeHandler.emit(this.isActive);
    };
    MemberCard.prototype.setButtonText = function () {
        if (this.isActive) {
            this.activeButtonText = 'Inaktivera';
        }
        else {
            this.activeButtonText = 'Aktivera';
        }
    };
    MemberCard.prototype.isEven = function () {
        return this.number % 2 == 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberCard.prototype, "firstName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberCard.prototype, "surName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemberCard.prototype, "email", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MemberCard.prototype, "identifier", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MemberCard.prototype, "number", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MemberCard.prototype, "activeHandler", void 0);
    MemberCard = __decorate([
        core_1.Component({
            selector: 'member-card',
            templateUrl: 'app/Templates/memberCard.html',
            styleUrls: ['app/css/memberCard.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MemberCard);
    return MemberCard;
}());
exports.MemberCard = MemberCard;
//# sourceMappingURL=memberCard.js.map