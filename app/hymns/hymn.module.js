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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var angularfire2_1 = require('angularfire2');
var global_module_1 = require('../global/global.module');
var hymns_routing_1 = require('./hymns.routing');
//import { HymnListComponent } from './hymn-list/hymn-list.component';
var HymnsModule = (function () {
    function HymnsModule() {
    }
    HymnsModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, angularfire2_1.AngularFireModule, hymns_routing_1.HymnRouting,
                global_module_1.GlobalModule],
            declarations: [hymns_routing_1.HymnRouteComponents],
            exports: [
                platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HymnsModule);
    return HymnsModule;
}());
exports.HymnsModule = HymnsModule;
//# sourceMappingURL=hymn.module.js.map