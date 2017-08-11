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
var data_service_1 = require('../services/data.service');
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.showcountries = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.projectName = this.dataService.getProjectName();
    };
    HeaderComponent.prototype.showcountry = function () {
        this.showcountries = !this.showcountries;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-component',
            templateUrl: 'app/header/header.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_1.ActivatedRoute, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map