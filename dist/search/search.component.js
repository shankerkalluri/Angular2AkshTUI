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
var discover_service_1 = require('../services/discover.service');
var depencorousel_service_1 = require('../services/depencorousel.service');
var tourist_banner_service_1 = require('../services/tourist.banner.service');
var thomson_showmore_service_1 = require('../services/thomson.showmore.service');
var SearchComponent = (function () {
    function SearchComponent(discoverService, depencorouselService, touristBannerService, thomsonShowmoreService) {
        var _this = this;
        this.discoverService = discoverService;
        this.depencorouselService = depencorouselService;
        this.touristBannerService = touristBannerService;
        this.thomsonShowmoreService = thomsonShowmoreService;
        this.header = {};
        this.dependence = {};
        this.tourist = {};
        this.showmore = {};
        this.discoverService.getdiscover().subscribe(function (data) { return _this.header = data; });
        this.depencorouselService.getdiscover().subscribe(function (data) { return _this.dependence = data; });
        this.touristBannerService.getDetails().subscribe(function (data) { return _this.tourist = data; });
        this.thomsonShowmoreService.getDetails().subscribe(function (data) { return _this.showmore = data; });
    }
    SearchComponent.prototype.showmoreholidaylist = function () {
        this.showmoreholidays = !this.showmoreholidays;
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            templateUrl: 'app/search/search.component.html',
            providers: [discover_service_1.DiscoverService, depencorousel_service_1.DepencorouselService, tourist_banner_service_1.TouristBannerService, thomson_showmore_service_1.ThomsonShowmoreService]
        }), 
        __metadata('design:paramtypes', [discover_service_1.DiscoverService, depencorousel_service_1.DepencorouselService, tourist_banner_service_1.TouristBannerService, thomson_showmore_service_1.ThomsonShowmoreService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map