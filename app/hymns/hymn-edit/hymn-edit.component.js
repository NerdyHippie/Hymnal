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
var router_1 = require('@angular/router');
var angularfire2_1 = require("angularfire2");
var hymn_view_component_1 = require("../hymn-view/hymn-view.component");
var alert_service_1 = require("../../global/_services/alert.service");
var utils_service_1 = require("../../global/_services/utils.service");
var HymnEditComponent = (function (_super) {
    __extends(HymnEditComponent, _super);
    function HymnEditComponent(af, router, activatedRoute, alertService, utils) {
        _super.call(this, af, router, activatedRoute);
        this.af = af;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.utils = utils;
    }
    HymnEditComponent.prototype.saveHymn = function () {
        var _this = this;
        if (this.selectedHymn.$key) {
            var hymnId_1 = this.selectedHymn.$key;
            var cleaned = this.utils.cleanObj(this.selectedHymn);
            this.af.database.object('/hymns/' + hymnId_1)
                .update(cleaned)
                .then(function (data) { return _this.router.navigate(['../../' + hymnId_1]); })
                .catch(function (error) { console.error('GroovyTask: error saving obj', error); _this.alertService.error(error); });
        }
        else {
            this.af.database.list('/hymns').push(this.selectedHymn)
                .then(function (data) { return console.log('push success', data); })
                .catch(function (error) { console.error('GroovyTask: error pushing obj', error); _this.alertService.error(error); });
        }
    };
    HymnEditComponent.prototype.cancelEdit = function () {
        this.router.navigate([('../../' + this.selectedHymn.$key)]);
    };
    HymnEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hymn-edit',
            templateUrl: 'hymn-edit.component.html'
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, router_1.Router, router_1.ActivatedRoute, alert_service_1.AlertService, utils_service_1.UtilService])
    ], HymnEditComponent);
    return HymnEditComponent;
}(hymn_view_component_1.HymnViewComponent));
exports.HymnEditComponent = HymnEditComponent;
//# sourceMappingURL=hymn-edit.component.js.map