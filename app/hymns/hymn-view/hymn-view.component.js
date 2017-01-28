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
var router_1 = require('@angular/router');
var angularfire2_1 = require("angularfire2");
var user_service_1 = require("../../global/_services/user.service");
var HymnViewComponent = (function () {
    function HymnViewComponent(af, userService, router, activatedRoute) {
        this.af = af;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    HymnViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
        this.routeParams$ = this.activatedRoute.params.subscribe(function (params) { return _this.loadHymn(params['id']); });
    };
    HymnViewComponent.prototype.ngOnDestroy = function () {
        this.routeParams$.unsubscribe();
    };
    HymnViewComponent.prototype.loadHymn = function (id) {
        var _this = this;
        this.hymnId = id;
        if (id == 'create') {
            console.log('currUser', this.currentUser);
            this.selectedHymn = {
                title: '',
                content: '',
                active: true,
                dateCreated: new Date().toString(),
                createdBy: ''
            };
        }
        else {
            this.af.database.object('/hymns/' + id).subscribe(function (data) { return _this.selectedHymn = data; });
        }
    };
    HymnViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hymn-view',
            templateUrl: 'hymn-view.component.html',
            styleUrls: ['hymn-view.component.css']
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, user_service_1.UserService, router_1.Router, router_1.ActivatedRoute])
    ], HymnViewComponent);
    return HymnViewComponent;
}());
exports.HymnViewComponent = HymnViewComponent;
//# sourceMappingURL=hymn-view.component.js.map