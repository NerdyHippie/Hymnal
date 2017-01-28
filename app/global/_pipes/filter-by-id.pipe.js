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
var core_1 = require("@angular/core");
var FilterByIdPipe = (function () {
    function FilterByIdPipe() {
    }
    FilterByIdPipe.prototype.transform = function (items, args) {
        return (items && args.length) ? items.filter(function (item) { return args.indexOf(item.$key) !== -1; }) : [];
    };
    FilterByIdPipe = __decorate([
        core_1.Pipe({
            name: 'filterById'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FilterByIdPipe);
    return FilterByIdPipe;
}());
exports.FilterByIdPipe = FilterByIdPipe;
//# sourceMappingURL=filter-by-id.pipe.js.map