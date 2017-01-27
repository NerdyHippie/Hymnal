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
var UtilService = (function () {
    function UtilService() {
    }
    UtilService.prototype.cleanObj = function (input) {
        var invalidProps = ['$key', '$exists'];
        for (var _i = 0, invalidProps_1 = invalidProps; _i < invalidProps_1.length; _i++) {
            var prop = invalidProps_1[_i];
            delete input[prop];
        }
        return input;
        /*
         let ret = {};
         let invalidProps = ['$key','$exists'];
         for (let prop in input) {
         if (invalidProps.indexOf(prop) == -1 && input.hasOwnProperty(prop)) {
         ret[prop] = input[prop];
         }
         }
         return ret;
        
        */
    };
    UtilService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilService);
    return UtilService;
}());
exports.UtilService = UtilService;
//# sourceMappingURL=utils.service.js.map