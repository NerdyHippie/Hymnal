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
var angularfire2_1 = require('angularfire2');
var alert_service_1 = require("../../global/_services/alert.service");
var router_1 = require("@angular/router");
var HymnListComponent = (function () {
    function HymnListComponent(af, alertService, router) {
        this.af = af;
        this.alertService = alertService;
        this.router = router;
    }
    HymnListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.database.list('/hymns').subscribe(function (data) { return _this.hymns = data; }, function (error) { return _this.alertService.error(error); });
    };
    HymnListComponent.prototype.createNewHymn = function () {
        this.router.navigate(['./create']);
    };
    HymnListComponent.prototype.viewHymn = function (id) {
        this.router.navigate(['./' + id]);
    };
    HymnListComponent.prototype.editHymn = function (id) {
        this.router.navigate(['./edit/' + id]);
    };
    HymnListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hymn-list',
            templateUrl: 'hymn-list.component.html'
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, alert_service_1.AlertService, router_1.Router])
    ], HymnListComponent);
    return HymnListComponent;
}());
exports.HymnListComponent = HymnListComponent;
//# sourceMappingURL=hymn-list.component.js.map