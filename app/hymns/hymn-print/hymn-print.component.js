"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var hymn_list_component_1 = require("../hymn-list/hymn-list.component");
var angularfire2_1 = require("angularfire2");
var alert_service_1 = require("../../global/_services/alert.service");
var router_1 = require("@angular/router");
var HymnPrintComponent = (function (_super) {
    __extends(HymnPrintComponent, _super);
    function HymnPrintComponent(af, alertService, router) {
        _super.call(this, af, alertService, router);
        this.af = af;
        this.alertService = alertService;
        this.router = router;
        this.printSettings = {
            fontSize: '12pt',
            colCount: 1,
            selectedHymns: []
        };
    }
    HymnPrintComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hymn-print',
            templateUrl: 'hymn-print.component.html',
            styleUrls: ['hymn-print.component.css', '../hymn-view/hymn-view.component.css']
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, alert_service_1.AlertService, router_1.Router])
    ], HymnPrintComponent);
    return HymnPrintComponent;
}(hymn_list_component_1.HymnListComponent));
exports.HymnPrintComponent = HymnPrintComponent;
//# sourceMappingURL=hymn-print.component.js.map