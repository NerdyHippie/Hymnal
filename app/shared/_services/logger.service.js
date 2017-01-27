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
var Logger = (function () {
    function Logger() {
        this.logs = []; // capture logs for testing
        this.errors = [];
        this.debugMode = false;
    }
    Logger.prototype.log = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.debugMode) {
            this.logs.push(message);
            console.info(message, params);
        }
    };
    Logger.prototype.toggleDebug = function (state) {
        switch (state) {
            case 'enable':
                this.debugMode = true;
                break;
            case 'disable':
                this.debugMode = false;
                break;
            default:
                this.debugMode = !this.debugMode;
                break;
        }
    };
    Logger.prototype.error = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (this.debugMode) {
            this.errors.push(message);
            console.error(message, params);
        }
    };
    Logger = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Logger);
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.service.js.map